import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { afterEach, describe, test } from "node:test";
import {
  fakeState,
  peekObject,
  resetFake,
  seedObject,
} from "@supabase/supabase-js";
import { GUSHWORK_LEAD_BUCKET, ingestGushworkLeadRaw } from "../../src/lib/gushwork-leads.server.ts";
import {
  compareStoredEnvelope,
  recordWorkflowInbox,
} from "../../src/lib/workflow-inbox.server.ts";

process.env.SUPABASE_URL = "http://127.0.0.1:54321";
process.env.SUPABASE_SERVICE_ROLE_KEY = "test-service-role-key-xxxxxxxx";

afterEach(() => {
  resetFake();
});

function sha256Of(raw: string): string {
  return createHash("sha256").update(raw).digest("hex");
}

function envelopeBody(raw: string, receivedAt = "2026-01-01T00:00:00.000Z"): {
  id: string;
  sha256: string;
  text: string;
} {
  const payload = JSON.parse(raw) as Record<string, unknown>;
  const sha256 = sha256Of(raw);
  const id = String(payload.id);
  const text = `${JSON.stringify(
    {
      id,
      sha256,
      received_at: receivedAt,
      content_type: "application/json",
      schema: "pending",
      payload,
    },
    null,
    2,
  )}\n`;
  return { id, sha256, text };
}

describe("compareStoredEnvelope", () => {
  const sha = "a".repeat(64);

  test("same when stored sha256 matches", () => {
    assert.equal(
      compareStoredEnvelope(JSON.stringify({ sha256: sha, payload: { n: 1 } }), sha),
      "same",
    );
  });

  test("different when stored sha256 disagrees", () => {
    assert.equal(
      compareStoredEnvelope(JSON.stringify({ sha256: "b".repeat(64) }), sha),
      "different",
    );
  });

  test("unreadable when text is not JSON", () => {
    assert.equal(compareStoredEnvelope("not-json", sha), "unreadable");
  });

  test("unreadable when sha256 is missing or not a string", () => {
    assert.equal(compareStoredEnvelope(JSON.stringify({ id: "x" }), sha), "unreadable");
    assert.equal(compareStoredEnvelope(JSON.stringify({ sha256: 12 }), sha), "unreadable");
    assert.equal(compareStoredEnvelope(JSON.stringify(null), sha), "unreadable");
    assert.equal(compareStoredEnvelope(JSON.stringify(["x"]), sha), "unreadable");
  });
});

describe("recordWorkflowInbox", () => {
  const input = {
    provider: "gushwork",
    sourceId: "lead-1",
    sha256: "a".repeat(64),
    bucket: "gushwork-leads",
    path: "lead-1.json",
  };

  test("throws workflow_inbox_failed on rpc error", async () => {
    await assert.rejects(
      () =>
        recordWorkflowInbox(
          {
            rpc: async () =>
              ({ data: null, error: { message: "boom" } }) as never,
          },
          input,
        ),
      /workflow_inbox_failed: boom/,
    );
  });

  test("throws workflow_inbox_bad_response when inbox_id is not a string", async () => {
    await assert.rejects(
      () =>
        recordWorkflowInbox(
          {
            rpc: async () =>
              ({ data: { inbox_id: 1, outcome: "new" }, error: null }) as never,
          },
          input,
        ),
      /workflow_inbox_bad_response/,
    );
  });

  test("throws workflow_inbox_bad_response when outcome is invalid", async () => {
    await assert.rejects(
      () =>
        recordWorkflowInbox(
          {
            rpc: async () =>
              ({
                data: [{ inbox_id: "ok", outcome: "nope" }],
                error: null,
              }) as never,
          },
          input,
        ),
      /workflow_inbox_bad_response/,
    );
  });

  test("accepts a single row object from rpc", async () => {
    const result = await recordWorkflowInbox(
      {
        rpc: async () =>
          ({
            data: { inbox_id: "uuid-1", outcome: "duplicate" },
            error: null,
          }) as never,
      },
      input,
    );
    assert.deepEqual(result, { inboxId: "uuid-1", outcome: "duplicate" });
  });
});

describe("ingestGushworkLeadRaw", () => {
  const rawA = JSON.stringify({ id: "lead-1", name: "Ada" });
  const rawB = JSON.stringify({ id: "lead-1", name: "Bea" });

  test("first capture stores the object and records inbox new", async () => {
    const result = await ingestGushworkLeadRaw(rawA, "application/json");
    assert.equal(result.ok, true);
    assert.equal(result.duplicate, false);
    assert.equal(result.conflict, false);
    assert.equal(result.inbox, "new");
    assert.equal(result.id, "lead-1");
    assert.equal(result.sha256, sha256Of(rawA));
    const stored = peekObject(GUSHWORK_LEAD_BUCKET, "lead-1.json");
    assert.ok(stored);
    assert.equal(compareStoredEnvelope(stored, result.sha256), "same");
  });

  test("duplicate of the same payload does not rewrite storage", async () => {
    const first = await ingestGushworkLeadRaw(rawA, "application/json");
    const storedAfterFirst = peekObject(GUSHWORK_LEAD_BUCKET, "lead-1.json");
    const second = await ingestGushworkLeadRaw(rawA, "application/json");
    assert.equal(second.duplicate, true);
    assert.equal(second.conflict, false);
    assert.equal(second.inbox, "duplicate");
    assert.equal(peekObject(GUSHWORK_LEAD_BUCKET, "lead-1.json"), storedAfterFirst);
    assert.equal(first.sha256, second.sha256);
  });

  test("conflict leaves the stored object untouched", async () => {
    await ingestGushworkLeadRaw(rawA, "application/json");
    const storedAfterFirst = peekObject(GUSHWORK_LEAD_BUCKET, "lead-1.json");
    assert.ok(storedAfterFirst);
    const second = await ingestGushworkLeadRaw(rawB, "application/json");
    assert.equal(second.conflict, true);
    assert.equal(second.duplicate, false);
    assert.equal(second.inbox, "conflict");
    assert.equal(second.sha256, sha256Of(rawB));
    assert.equal(peekObject(GUSHWORK_LEAD_BUCKET, "lead-1.json"), storedAfterFirst);
    assert.equal(compareStoredEnvelope(storedAfterFirst, sha256Of(rawA)), "same");
  });

  test("legacy object with no inbox row is recorded as new and treated as duplicate when hashes match", async () => {
    const seeded = envelopeBody(rawA, "2025-12-01T00:00:00.000Z");
    seedObject(GUSHWORK_LEAD_BUCKET, "lead-1.json", seeded.text);
    const result = await ingestGushworkLeadRaw(rawA, "application/json");
    assert.equal(result.duplicate, true);
    assert.equal(result.conflict, false);
    assert.equal(result.inbox, "new");
    assert.equal(peekObject(GUSHWORK_LEAD_BUCKET, "lead-1.json"), seeded.text);
  });

  test("upload race compares the stored envelope and does not overwrite", async () => {
    const seeded = envelopeBody(rawA, "2025-12-02T00:00:00.000Z");
    seedObject(GUSHWORK_LEAD_BUCKET, "lead-1.json", seeded.text);
    fakeState.skipNextDownload = true;
    const same = await ingestGushworkLeadRaw(rawA, "application/json");
    assert.equal(same.duplicate, true);
    assert.equal(same.conflict, false);
    assert.equal(peekObject(GUSHWORK_LEAD_BUCKET, "lead-1.json"), seeded.text);

    fakeState.skipNextDownload = true;
    const conflicted = await ingestGushworkLeadRaw(rawB, "application/json");
    assert.equal(conflicted.conflict, true);
    assert.equal(conflicted.duplicate, false);
    assert.equal(peekObject(GUSHWORK_LEAD_BUCKET, "lead-1.json"), seeded.text);
  });

  test("missing inbox table still captures and returns inbox unrecorded", async () => {
    fakeState.mode = "missing_table";
    const result = await ingestGushworkLeadRaw(rawA, "application/json");
    assert.equal(result.ok, true);
    assert.equal(result.duplicate, false);
    assert.equal(result.conflict, false);
    assert.equal(result.inbox, "unrecorded");
    assert.ok(peekObject(GUSHWORK_LEAD_BUCKET, "lead-1.json"));
  });

  test("invalid JSON is still rejected", async () => {
    await assert.rejects(
      () => ingestGushworkLeadRaw("not-json", "application/json"),
      /invalid_json/,
    );
    await assert.rejects(
      () => ingestGushworkLeadRaw("null", "application/json"),
      /invalid_json/,
    );
    assert.equal(fakeState.objects.size, 0);
  });
});
