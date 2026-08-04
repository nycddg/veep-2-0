// Copper CRM REST API client. Server-only.
// Docs: https://developer.copper.com/ — auth is an API key plus the owning
// user's email, sent as headers on every request.
//
// Mapping is intentionally placeholder-level for now: it reads Opportunities
// and splits them into "live leads" (open) and "recent wins" (won). Swap the
// PIPELINE/STAGE constants below once Copper is set up.

const COPPER_BASE = "https://api.copper.com/developer_api/v1";

export type CopperLead = {
  id: string;
  pseudonym: string;
  one_liner: string;
  role_needed: string;
  stage: string;
};

export type CopperWin = {
  id: string;
  role: string;
  engagement_type: string;
  length: string;
  happened_on: string;
};

export function isCopperConfigured(): boolean {
  return Boolean(process.env["COPPER_API_KEY"] && process.env["COPPER_USER_EMAIL"]);
}

function headers() {
  const key = process.env["COPPER_API_KEY"];
  const email = process.env["COPPER_USER_EMAIL"];
  if (!key || !email) throw new Error("Copper is not configured");
  return {
    "X-PW-AccessToken": key,
    "X-PW-Application": "developer_api",
    "X-PW-UserEmail": email,
    "Content-Type": "application/json",
  };
}

async function copperPost<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${COPPER_BASE}${path}`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const text = await res.text();
    console.error(`Copper request failed [${res.status}] ${path}: ${text}`);
    throw new Error(`Copper request failed [${res.status}]: ${text}`);
  }
  return (await res.json()) as T;
}

type CopperOpportunity = {
  id: number;
  name?: string | null;
  status?: string | null;
  pipeline_stage_id?: number | null;
  monetary_value?: number | null;
  close_date?: string | null;
  company_name?: string | null;
  details?: string | null;
  tags?: string[] | null;
  date_modified?: number | null;
};

// --- Pseudonymization -------------------------------------------------
// Partners never see the real company or contact. Each record gets a stable
// codename derived from its Copper id, plus a generic descriptor built from
// tags (industry / stage) when present.

const CODENAME_A = [
  "Northbound", "Ironwood", "Harbor", "Meridian", "Cobalt", "Lantern",
  "Summit", "Foundry", "Beacon", "Quarry", "Vantage", "Cardinal",
];
const CODENAME_B = ["Alpha", "Bravo", "Delta", "Echo", "Kilo", "Nova", "Orion", "Sierra"];

export function pseudonymFor(id: number | string): string {
  const n = Math.abs(
    String(id).split("").reduce((acc, ch) => (acc * 31 + ch.charCodeAt(0)) | 0, 7),
  );
  return `${CODENAME_A[n % CODENAME_A.length]} ${CODENAME_B[(n >> 4) % CODENAME_B.length]}`;
}

function descriptorFrom(op: CopperOpportunity): string {
  const tags = (op.tags ?? []).filter(Boolean);
  if (tags.length) return tags.slice(0, 3).join(" · ");
  return "Founder-led company with an urgent operating gap.";
}

function roleFrom(op: CopperOpportunity): string {
  // Placeholder: Copper opportunity names usually carry the role.
  // Strip any company name so nothing identifying leaks through.
  const raw = op.name ?? "Senior operator";
  const company = op.company_name ?? "";
  const cleaned = company ? raw.split(company).join("").trim() : raw.trim();
  return (cleaned.replace(/^[-–—:|,\s]+|[-–—:|,\s]+$/g, "") || "Senior operator").slice(0, 120);
}

export async function fetchCopperLeads(): Promise<CopperLead[]> {
  const rows = await copperPost<CopperOpportunity[]>("/opportunities/search", {
    page_size: 50,
    sort_by: "date_modified",
    sort_direction: "desc",
    status_ids: [0], // Open
  });
  return rows.map((op) => ({
    id: String(op.id),
    pseudonym: pseudonymFor(op.id),
    one_liner: descriptorFrom(op),
    role_needed: roleFrom(op),
    stage: op.status || "Scoping",
  }));
}

export async function fetchCopperWins(): Promise<CopperWin[]> {
  const rows = await copperPost<CopperOpportunity[]>("/opportunities/search", {
    page_size: 20,
    sort_by: "date_modified",
    sort_direction: "desc",
    status_ids: [1], // Won
  });
  return rows.map((op) => ({
    id: String(op.id),
    role: roleFrom(op),
    engagement_type: (op.tags ?? [])[0] ?? "Engagement",
    length: "—",
    happened_on: op.close_date ?? new Date().toISOString().slice(0, 10),
  }));
}
