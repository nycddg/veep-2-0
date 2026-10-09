import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import {
  GUSHWORK_LEAD_MAX_BYTES,
  gushworkLeadAuthorized,
  gushworkLeadSecretConfigured,
  gushworkLeadStatusPage,
  ingestGushworkLeadRaw,
} from "../lib/gushwork-leads.server";

function json(status: number, body: Record<string, unknown>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "x-robots-tag": "noindex, nofollow",
      "cache-control": "no-store",
    },
  });
}

function html(status: number, body: string): Response {
  return new Response(body, {
    status,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "x-robots-tag": "noindex, nofollow",
      "cache-control": "no-store",
    },
  });
}

async function handlePost(request: Request): Promise<Response> {
  if (!gushworkLeadSecretConfigured()) {
    return json(503, { ok: false, error: "ingest_not_configured" });
  }
  if (!gushworkLeadAuthorized(request)) {
    return json(401, { ok: false, error: "unauthorized" });
  }

  const contentType = request.headers.get("content-type") ?? "";
  if (contentType && !contentType.toLowerCase().includes("application/json")) {
    return json(415, { ok: false, error: "unsupported_media_type" });
  }

  const buf = Buffer.from(await request.arrayBuffer());
  if (buf.byteLength === 0) {
    return json(400, { ok: false, error: "empty_body" });
  }
  if (buf.byteLength > GUSHWORK_LEAD_MAX_BYTES) {
    return json(413, { ok: false, error: "payload_too_large" });
  }

  try {
    const result = await ingestGushworkLeadRaw(buf.toString("utf8"), contentType);
    return json(result.duplicate ? 200 : 201, result);
  } catch (err) {
    const message = err instanceof Error ? err.message : "ingest_failed";
    if (message === "invalid_json") {
      return json(400, { ok: false, error: "invalid_json" });
    }
    console.error("gushwork lead ingest failed", message);
    return json(500, { ok: false, error: "ingest_failed" });
  }
}

export const Route = createFileRoute("/api/gushwork-leads")({
  server: {
    handlers: {
      GET: async () => html(200, gushworkLeadStatusPage()),
      HEAD: async () =>
        new Response(null, {
          status: 200,
          headers: {
            "x-robots-tag": "noindex, nofollow",
            "cache-control": "no-store",
          },
        }),
      POST: async ({ request }) => handlePost(request),
    },
  },
});
