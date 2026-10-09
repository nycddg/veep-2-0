import { createHash, timingSafeEqual } from "node:crypto";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

export const GUSHWORK_LEAD_BUCKET = "gushwork-leads";
export const GUSHWORK_LEAD_MAX_BYTES = 256 * 1024;
export const GUSHWORK_LEAD_TOKEN_HEADER = "x-veep-gushwork-token";

type ServiceClient = SupabaseClient;

function env(name: string): string {
  return (process.env[name] ?? "").trim();
}

export function gushworkLeadSecretConfigured(): boolean {
  return env("GUSHWORK_LEAD_INGEST_SECRET").length >= 16;
}

function serviceClient(): ServiceClient {
  const url = env("SUPABASE_URL") || env("VITE_SUPABASE_URL");
  const key = env("SUPABASE_SERVICE_ROLE_KEY") || env("SUPABASE_SECRET_KEY");
  if (!url || !key) {
    throw new Error("Supabase service env is missing");
  }
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

function bearerToken(request: Request): string {
  const raw = request.headers.get("authorization") ?? "";
  const match = raw.match(/^Bearer\s+(.+)$/i);
  return match?.[1]?.trim() ?? "";
}

function safeEqual(a: string, b: string): boolean {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  if (left.length !== right.length || left.length === 0) {
    return false;
  }
  return timingSafeEqual(left, right);
}

export function gushworkLeadAuthorized(request: Request): boolean {
  const expected = env("GUSHWORK_LEAD_INGEST_SECRET");
  if (expected.length < 16) {
    return false;
  }
  const header = (request.headers.get(GUSHWORK_LEAD_TOKEN_HEADER) ?? "").trim();
  const bearer = bearerToken(request);
  return safeEqual(header, expected) || safeEqual(bearer, expected);
}

async function ensureBucket(client: ServiceClient): Promise<void> {
  const { data, error } = await client.storage.getBucket(GUSHWORK_LEAD_BUCKET);
  if (data && !error) {
    return;
  }
  const created = await client.storage.createBucket(GUSHWORK_LEAD_BUCKET, {
    public: false,
    fileSizeLimit: GUSHWORK_LEAD_MAX_BYTES,
    allowedMimeTypes: ["application/json", "text/plain"],
  });
  if (created.error && !/already exists/i.test(created.error.message)) {
    throw created.error;
  }
}

function leadIdFromPayload(payload: unknown, sha256: string): string {
  if (payload && typeof payload === "object" && !Array.isArray(payload)) {
    const rec = payload as Record<string, unknown>;
    for (const key of ["id", "lead_id", "leadId", "uuid", "submission_id"]) {
      const value = rec[key];
      if (typeof value === "string" && value.trim() && value.length <= 128) {
        return value.trim().replace(/[^a-zA-Z0-9._-]/g, "_");
      }
    }
  }
  return sha256;
}

export type GushworkLeadIngestResult = {
  ok: true;
  duplicate: boolean;
  id: string;
  sha256: string;
  received_at: string;
};

export async function ingestGushworkLeadRaw(
  raw: string,
  contentType: string,
): Promise<GushworkLeadIngestResult> {
  let payload: unknown;
  try {
    payload = JSON.parse(raw);
  } catch {
    throw new Error("invalid_json");
  }
  if (payload === null || typeof payload !== "object") {
    throw new Error("invalid_json");
  }

  const sha256 = createHash("sha256").update(raw).digest("hex");
  const id = leadIdFromPayload(payload, sha256);
  const received_at = new Date().toISOString();
  const envelope = {
    id,
    sha256,
    received_at,
    content_type: contentType || "application/json",
    schema: "pending",
    payload,
  };
  const body = `${JSON.stringify(envelope, null, 2)}\n`;
  const path = `${id}.json`;

  const client = serviceClient();
  await ensureBucket(client);

  const existing = await client.storage.from(GUSHWORK_LEAD_BUCKET).download(path);
  if (existing.data && !existing.error) {
    return { ok: true, duplicate: true, id, sha256, received_at };
  }

  const uploaded = await client.storage.from(GUSHWORK_LEAD_BUCKET).upload(path, body, {
    contentType: "application/json",
    upsert: false,
  });
  if (uploaded.error) {
    if (/already exists|duplicate|resource already/i.test(uploaded.error.message)) {
      return { ok: true, duplicate: true, id, sha256, received_at };
    }
    throw uploaded.error;
  }

  return { ok: true, duplicate: false, id, sha256, received_at };
}

export function gushworkLeadStatusPage(): string {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="robots" content="noindex,nofollow">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Veep Gushwork lead ingest</title>
  <style>
    body { font-family: ui-sans-serif, system-ui, sans-serif; margin: 3rem auto; max-width: 40rem; color: #111; line-height: 1.45; }
    h1 { font-size: 1.25rem; }
    code { font-size: 0.95em; }
    p { margin: 0.75rem 0; }
  </style>
</head>
<body>
  <h1>Veep Gushwork lead ingest</h1>
  <p>Status: live. Schema: pending Hari sample.</p>
  <p>POST JSON to this URL. Header <code>${GUSHWORK_LEAD_TOKEN_HEADER}</code> or <code>Authorization: Bearer</code>.</p>
  <p>Raw payload is stored. Field mapping is off until the sample lands. No LLM on ingest.</p>
</body>
</html>
`;
}
