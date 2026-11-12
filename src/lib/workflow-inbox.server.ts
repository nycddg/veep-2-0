import type { SupabaseClient } from "@supabase/supabase-js";

export type InboxOutcome = "new" | "duplicate" | "conflict";

export type RecordWorkflowInboxInput = {
  provider: string;
  sourceId: string;
  sha256: string;
  bucket?: string;
  path?: string;
};

export type RecordWorkflowInboxResult = {
  inboxId: string;
  outcome: InboxOutcome;
};

type InboxRpcRow = {
  inbox_id?: unknown;
  outcome?: unknown;
};

function isInboxOutcome(value: unknown): value is InboxOutcome {
  return value === "new" || value === "duplicate" || value === "conflict";
}

function rowFromRpcData(data: unknown): InboxRpcRow | null {
  if (Array.isArray(data)) {
    const first = data[0];
    if (first && typeof first === "object") {
      return first as InboxRpcRow;
    }
    return null;
  }
  if (data && typeof data === "object") {
    return data as InboxRpcRow;
  }
  return null;
}

export async function recordWorkflowInbox(
  client: Pick<SupabaseClient, "rpc">,
  input: RecordWorkflowInboxInput,
): Promise<RecordWorkflowInboxResult> {
  const { data, error } = await client.rpc("record_workflow_inbox", {
    p_provider: input.provider,
    p_source_id: input.sourceId,
    p_sha256: input.sha256,
    p_bucket: input.bucket ?? null,
    p_path: input.path ?? null,
  });

  if (error) {
    const message = error.message || "unknown";
    throw new Error(`workflow_inbox_failed: ${message}`);
  }

  const row = rowFromRpcData(data);
  if (!row || typeof row.inbox_id !== "string" || !isInboxOutcome(row.outcome)) {
    throw new Error("workflow_inbox_bad_response");
  }

  return { inboxId: row.inbox_id, outcome: row.outcome };
}

export function compareStoredEnvelope(
  storedText: string,
  sha256: string,
): "same" | "different" | "unreadable" {
  try {
    const parsed: unknown = JSON.parse(storedText);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return "unreadable";
    }
    const storedSha = (parsed as { sha256?: unknown }).sha256;
    if (typeof storedSha !== "string") {
      return "unreadable";
    }
    return storedSha === sha256 ? "same" : "different";
  } catch {
    return "unreadable";
  }
}
