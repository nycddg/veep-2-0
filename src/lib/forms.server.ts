/**
 * Server-side form intake — Supabase (service role) + optional email notify.
 * Replaces Lovable connector-gateway → Wix for /join and /contact.
 *
 * Primary: form_submissions table
 * Fallback: JSON object in storage bucket form-uploads/submissions/{id}.json
 *   (used automatically if the table migration has not been applied yet)
 */
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { randomUUID } from "node:crypto";

export type FormKind = "join" | "contact" | "audit";

export type ResumeUpload = {
  name: string;
  type: string;
  /** base64 (no data: prefix) */
  data: string;
};

export type SaveFormInput = {
  kind: FormKind;
  email: string;
  name?: string;
  payload: Record<string, unknown>;
  sourcePath?: string;
  resume?: ResumeUpload;
};

export type SaveFormResult = {
  id: string;
  resumePath: string | null;
  notifyStatus: "skipped" | "sent" | "failed" | "pending";
  storage: "table" | "object";
};

const MAX_RESUME_BYTES = 10 * 1024 * 1024;
const BUCKET = "form-uploads";

function requireEnv(name: string): string {
  const v = process.env[name]?.trim();
  if (!v) throw new Error(`Missing env ${name}`);
  return v;
}

function getServiceClient(): SupabaseClient {
  const url = requireEnv("SUPABASE_URL");
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY?.trim() ||
    process.env.SUPABASE_SECRET_KEY?.trim();
  if (!key) {
    throw new Error(
      "Missing SUPABASE_SERVICE_ROLE_KEY (or SUPABASE_SECRET_KEY) for form writes",
    );
  }
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

function base64ToBytes(data: string): Uint8Array {
  const buf = Buffer.from(data, "base64");
  if (buf.length > MAX_RESUME_BYTES) {
    throw new Error("Resume file must be smaller than 10 MB");
  }
  if (buf.length === 0) throw new Error("Resume file is empty");
  return new Uint8Array(buf);
}

function safeFilename(name: string): string {
  const base = name.replace(/[^a-zA-Z0-9._-]+/g, "_").slice(0, 120);
  return base || "resume.bin";
}

async function uploadResume(
  supabase: SupabaseClient,
  submissionId: string,
  resume: ResumeUpload,
): Promise<{ path: string; size: number; contentType: string; filename: string }> {
  const allowed = new Set([
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ]);
  if (!allowed.has(resume.type)) {
    throw new Error("Resume must be a PDF, DOC, or DOCX file");
  }
  const bytes = base64ToBytes(resume.data);
  const filename = safeFilename(resume.name);
  const path = `resumes/${submissionId}/${filename}`;

  const { error } = await supabase.storage.from(BUCKET).upload(path, bytes, {
    contentType: resume.type,
    upsert: false,
  });
  if (error) throw new Error(`Resume upload failed: ${error.message}`);

  return {
    path,
    size: bytes.byteLength,
    contentType: resume.type,
    filename,
  };
}

async function sendNotifyEmail(opts: {
  kind: FormKind;
  email: string;
  name?: string;
  id: string;
  payload: Record<string, unknown>;
  resumePath: string | null;
}): Promise<{ status: "skipped" | "sent" | "failed"; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = (process.env.FORM_NOTIFY_TO || "dave@veep.work").trim();
  const from = (
    process.env.FORM_NOTIFY_FROM || "Veep Forms <onboarding@resend.dev>"
  ).trim();

  if (!apiKey) {
    return { status: "skipped" };
  }

  const kindLabel =
    opts.kind === "join"
      ? "Join"
      : opts.kind === "audit"
        ? "Contact / Audit"
        : "Contact";
  const who = opts.name?.trim() || opts.email;
  const subject = `[Veep ${kindLabel}] ${who}`;

  const lines = [
    `Kind: ${opts.kind}`,
    `Id: ${opts.id}`,
    `Email: ${opts.email}`,
    opts.name ? `Name: ${opts.name}` : null,
    opts.resumePath ? `Resume path: ${opts.resumePath}` : null,
    "",
    "Payload:",
    JSON.stringify(opts.payload, null, 2),
    "",
    "Supabase: form_submissions table or form-uploads/submissions/",
  ].filter((l) => l !== null);

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        text: lines.join("\n"),
      }),
    });
    if (!res.ok) {
      const body = await res.text();
      return {
        status: "failed",
        error: `Resend ${res.status}: ${body.slice(0, 300)}`,
      };
    }
    return { status: "sent" };
  } catch (e) {
    return {
      status: "failed",
      error: e instanceof Error ? e.message : String(e),
    };
  }
}

function isMissingTableError(message: string | undefined): boolean {
  if (!message) return false;
  const m = message.toLowerCase();
  return (
    m.includes("form_submissions") ||
    m.includes("schema cache") ||
    m.includes("could not find the table") ||
    m.includes("pgrst205")
  );
}

/** Persist a form submission. Uses service role. */
export async function saveFormSubmission(
  input: SaveFormInput,
): Promise<SaveFormResult> {
  const supabase = getServiceClient();
  const email = input.email.trim().toLowerCase();
  const name = input.name?.trim() || null;
  const id = randomUUID();

  let resumePath: string | null = null;
  let resumeFilename: string | null = null;
  let resumeContentType: string | null = null;
  let resumeSize: number | null = null;

  if (input.resume) {
    const up = await uploadResume(supabase, id, input.resume);
    resumePath = up.path;
    resumeFilename = up.filename;
    resumeContentType = up.contentType;
    resumeSize = up.size;
  }

  const record = {
    id,
    kind: input.kind,
    email,
    name,
    payload: input.payload,
    source_path: input.sourcePath ?? null,
    resume_path: resumePath,
    resume_filename: resumeFilename,
    resume_content_type: resumeContentType,
    resume_size: resumeSize,
    created_at: new Date().toISOString(),
  };

  let storage: "table" | "object" = "table";

  const { error: insertError } = await supabase.from("form_submissions").insert({
    ...record,
    notify_status: "pending",
  });

  if (insertError) {
    if (!isMissingTableError(insertError.message)) {
      throw new Error(`Form save failed: ${insertError.message}`);
    }
    // Table not migrated yet — durable fallback to Storage JSON.
    storage = "object";
    const body = new TextEncoder().encode(JSON.stringify(record, null, 2));
    const { error: objError } = await supabase.storage
      .from(BUCKET)
      .upload(`submissions/${id}.json`, body, {
        contentType: "application/json",
        upsert: false,
      });
    if (objError) {
      throw new Error(
        `Form save failed (no table + storage fallback failed): ${objError.message}`,
      );
    }
  }

  const notify = await sendNotifyEmail({
    kind: input.kind,
    email,
    name: name || undefined,
    id,
    payload: input.payload,
    resumePath,
  });

  if (storage === "table") {
    await supabase
      .from("form_submissions")
      .update({
        notify_status: notify.status,
        notify_error: notify.error ?? null,
      })
      .eq("id", id);
  }

  if (notify.status === "failed") {
    console.error("[forms] notify failed", notify.error);
  } else if (notify.status === "skipped") {
    console.info(
      `[forms] saved ${id} (${storage}); email skipped (set RESEND_API_KEY to enable → dave@veep.work)`,
    );
  }

  return {
    id,
    resumePath,
    notifyStatus: notify.status,
    storage,
  };
}
