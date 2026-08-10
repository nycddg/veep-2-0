/**
 * Server-side form intake — Supabase (service role) + Google Workspace notify.
 * Replaces Lovable connector-gateway → Wix for /join and /contact.
 *
 * Primary: form_submissions table
 * Fallback: JSON in storage form-uploads/submissions/{id}.json
 * Notify: Gmail API as dave@veep.work (OAuth refresh token on Vercel)
 */
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { randomUUID } from "node:crypto";
import { readFileSync, existsSync } from "node:fs";

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
const GMAIL_TOKEN_URI = "https://oauth2.googleapis.com/token";
const GMAIL_SEND_URL = "https://gmail.googleapis.com/gmail/v1/users/me/messages/send";

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

type GoogleOAuthCreds = {
  client_id: string;
  client_secret: string;
  refresh_token: string;
};

function loadGoogleOAuthCreds(): GoogleOAuthCreds | null {
  const client_id = process.env.GOOGLE_CLIENT_ID?.trim() || process.env.FORM_GMAIL_CLIENT_ID?.trim();
  const client_secret =
    process.env.GOOGLE_CLIENT_SECRET?.trim() || process.env.FORM_GMAIL_CLIENT_SECRET?.trim();
  const refresh_token =
    process.env.GOOGLE_REFRESH_TOKEN?.trim() || process.env.FORM_GMAIL_REFRESH_TOKEN?.trim();

  if (client_id && client_secret && refresh_token) {
    return { client_id, client_secret, refresh_token };
  }

  // Local/dev fallback: Hermes Workspace token (not available on Vercel)
  const tokenPath =
    process.env.GOOGLE_TOKEN_JSON_PATH?.trim() || "/opt/data/google_token.json";
  if (existsSync(tokenPath)) {
    try {
      const raw = JSON.parse(readFileSync(tokenPath, "utf8")) as Record<string, string>;
      if (raw.client_id && raw.client_secret && raw.refresh_token) {
        return {
          client_id: raw.client_id,
          client_secret: raw.client_secret,
          refresh_token: raw.refresh_token,
        };
      }
    } catch {
      /* ignore */
    }
  }
  return null;
}

async function getGoogleAccessToken(creds: GoogleOAuthCreds): Promise<string> {
  const body = new URLSearchParams({
    client_id: creds.client_id,
    client_secret: creds.client_secret,
    refresh_token: creds.refresh_token,
    grant_type: "refresh_token",
  });
  const res = await fetch(GMAIL_TOKEN_URI, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  const json = (await res.json()) as { access_token?: string; error?: string; error_description?: string };
  if (!res.ok || !json.access_token) {
    throw new Error(
      `Google token refresh failed: ${json.error || res.status} ${json.error_description || ""}`.trim(),
    );
  }
  return json.access_token;
}

function buildRfc822(opts: {
  from: string;
  to: string;
  subject: string;
  text: string;
  replyTo?: string;
}): string {
  const encodeSubject = (s: string) => {
    // RFC 2047 for non-ascii
    if (/^[\x20-\x7E]*$/.test(s)) return s;
    return `=?UTF-8?B?${Buffer.from(s, "utf8").toString("base64")}?=`;
  };
  const headers = [
    `From: ${opts.from}`,
    `To: ${opts.to}`,
    opts.replyTo ? `Reply-To: ${opts.replyTo}` : null,
    `Subject: ${encodeSubject(opts.subject)}`,
    "MIME-Version: 1.0",
    'Content-Type: text/plain; charset="UTF-8"',
    "Content-Transfer-Encoding: 8bit",
  ].filter(Boolean);
  return `${headers.join("\r\n")}\r\n\r\n${opts.text}`;
}

function toBase64Url(raw: string): string {
  return Buffer.from(raw, "utf8")
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

async function sendViaGmailApi(opts: {
  from: string;
  to: string;
  subject: string;
  text: string;
  replyTo?: string;
}): Promise<void> {
  const creds = loadGoogleOAuthCreds();
  if (!creds) {
    throw new Error(
      "Gmail OAuth not configured (set GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN)",
    );
  }
  const accessToken = await getGoogleAccessToken(creds);
  const raw = toBase64Url(buildRfc822(opts));
  const res = await fetch(GMAIL_SEND_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ raw }),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Gmail send failed ${res.status}: ${body.slice(0, 400)}`);
  }
}

/** SMTP app-password path (optional). Uses undici-free raw sockets via nodemailer-less fetch? 
 *  We implement via Gmail API only for zero extra deps. App password users set the same
 *  OAuth env path or use Google "App passwords" with a future SMTP adapter. */

async function sendNotifyEmail(opts: {
  kind: FormKind;
  email: string;
  name?: string;
  id: string;
  payload: Record<string, unknown>;
  resumePath: string | null;
}): Promise<{ status: "skipped" | "sent" | "failed"; error?: string }> {
  const to = (process.env.FORM_NOTIFY_TO || "dave@veep.work").trim();
  const from = (
    process.env.FORM_NOTIFY_FROM || "Veep Forms <dave@veep.work>"
  ).trim();

  const creds = loadGoogleOAuthCreds();
  if (!creds) {
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
    `From form: ${opts.email}`,
    opts.name ? `Name: ${opts.name}` : null,
    opts.resumePath ? `Resume path: ${opts.resumePath}` : null,
    "",
    "Payload:",
    JSON.stringify(opts.payload, null, 2),
    "",
    "Supabase: form_submissions (or form-uploads/submissions/)",
    `Site: https://veep-2-0.vercel.app`,
  ].filter((l) => l !== null);

  try {
    await sendViaGmailApi({
      from,
      to,
      subject,
      text: lines.join("\n"),
      replyTo: opts.email,
    });
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
      `[forms] saved ${id} (${storage}); email skipped (set GOOGLE_CLIENT_ID/SECRET/REFRESH_TOKEN for Workspace Gmail notify → dave@veep.work)`,
    );
  }

  return {
    id,
    resumePath,
    notifyStatus: notify.status,
    storage,
  };
}
