/**
 * In-memory stand-in for @supabase/supabase-js, used only by unit tests
 * via an esbuild alias. Not a network client.
 */

type RpcError = { message: string } | null;

type InboxRow = {
  id: string;
  provider: string;
  source_id: string;
  payload_sha256: string;
  storage_bucket: string | null;
  storage_path: string | null;
  status: string;
  conflict_sha256: string[];
};

export type FakeMode = "ok" | "missing_table" | "bad_response";

export const fakeState = {
  mode: "ok" as FakeMode,
  skipNextDownload: false,
  objects: new Map<string, string>(),
  buckets: new Set<string>(),
  inbox: new Map<string, InboxRow>(),
};

export function resetFake(): void {
  fakeState.mode = "ok";
  fakeState.skipNextDownload = false;
  fakeState.objects.clear();
  fakeState.buckets.clear();
  fakeState.inbox.clear();
}

export function objectKey(bucket: string, path: string): string {
  return `${bucket}/${path}`;
}

export function peekObject(bucket: string, path: string): string | undefined {
  return fakeState.objects.get(objectKey(bucket, path));
}

export function seedObject(bucket: string, path: string, body: string): void {
  fakeState.buckets.add(bucket);
  fakeState.objects.set(objectKey(bucket, path), body);
}

function inboxKey(provider: string, sourceId: string): string {
  return `${provider}\0${sourceId}`;
}

function newId(): string {
  return crypto.randomUUID();
}

function recordInboxRpc(args: Record<string, unknown>): {
  data: unknown;
  error: RpcError;
} {
  if (fakeState.mode === "missing_table") {
    return {
      data: null,
      error: { message: 'relation "workflow_inbox" does not exist' },
    };
  }
  if (fakeState.mode === "bad_response") {
    return { data: { inbox_id: 1, outcome: "new" }, error: null };
  }

  const provider = String(args.p_provider ?? "");
  const sourceId = String(args.p_source_id ?? "");
  const sha256 = String(args.p_sha256 ?? "");
  const bucket = args.p_bucket == null ? null : String(args.p_bucket);
  const path = args.p_path == null ? null : String(args.p_path);
  const key = inboxKey(provider, sourceId);
  const existing = fakeState.inbox.get(key);

  if (!existing) {
    const row: InboxRow = {
      id: newId(),
      provider,
      source_id: sourceId,
      payload_sha256: sha256,
      storage_bucket: bucket,
      storage_path: path,
      status: "new",
      conflict_sha256: [],
    };
    fakeState.inbox.set(key, row);
    return {
      data: [{ inbox_id: row.id, outcome: "new" }],
      error: null,
    };
  }

  if (existing.payload_sha256 === sha256) {
    return {
      data: [{ inbox_id: existing.id, outcome: "duplicate" }],
      error: null,
    };
  }

  if (!existing.conflict_sha256.includes(sha256)) {
    existing.conflict_sha256.push(sha256);
  }
  existing.status = "conflict";
  return {
    data: [{ inbox_id: existing.id, outcome: "conflict" }],
    error: null,
  };
}

export function createClient(_url: string, _key: string, _options?: unknown) {
  return {
    storage: {
      async getBucket(id: string) {
        if (fakeState.buckets.has(id)) {
          return { data: { id }, error: null };
        }
        return { data: null, error: { message: "Bucket not found" } };
      },
      async createBucket(id: string) {
        fakeState.buckets.add(id);
        return { data: { name: id }, error: null };
      },
      from(bucket: string) {
        return {
          async download(path: string) {
            if (fakeState.skipNextDownload) {
              fakeState.skipNextDownload = false;
              return { data: null, error: { message: "Object not found" } };
            }
            const body = fakeState.objects.get(objectKey(bucket, path));
            if (body == null) {
              return { data: null, error: { message: "Object not found" } };
            }
            return {
              data: new Blob([body], { type: "application/json" }),
              error: null,
            };
          },
          async upload(path: string, body: string, options?: { upsert?: boolean }) {
            const key = objectKey(bucket, path);
            if (fakeState.objects.has(key) && !options?.upsert) {
              return {
                data: null,
                error: { message: "The resource already exists" },
              };
            }
            const text = typeof body === "string" ? body : String(body);
            fakeState.objects.set(key, text);
            fakeState.buckets.add(bucket);
            return { data: { path }, error: null };
          },
        };
      },
    },
    async rpc(fn: string, args: Record<string, unknown> = {}) {
      if (fn === "record_workflow_inbox") {
        return recordInboxRpc(args);
      }
      return { data: null, error: { message: `unknown rpc ${fn}` } };
    },
  };
}
