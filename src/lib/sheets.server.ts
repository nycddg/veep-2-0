// Google Sheets reader for the partner dashboard. Server-only.
// Reads two tabs ("Leads" and "Wins") from the Veep dashboard sheet via
// Google's public CSV export URL — no connector, no API keys required.
// The sheet must be shared as "Anyone with the link can view".

export const SHEET_ID = "1Amf9zHrHhLEi-YFmRQT7EquLT1BrZcfVmRfaZ_vuTIQ";

const CSV_BASE = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=`;
const GID_BASE = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&gid=`;

export type SheetLead = {
  id: string;
  pseudonym: string;
  one_liner: string;
  role_needed: string;
  stage: string;
  func: string;
  industry: string;
  engagement_type: string;
};

export type SheetWin = {
  id: string;
  role: string;
  blurb: string;
  engagement_type: string;
  length: string;
  industry: string;
  func: string;
  company: string;
};

export function isSheetsConfigured(): boolean {
  return true; // public CSV endpoint needs no secrets
}

/** Parses a CSV string into a 2D array of trimmed cell values. */
function parseCsv(csv: string): string[][] {
  const rows: string[][] = [];
  let current: string[] = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < csv.length; i++) {
    const ch = csv[i];

    if (inQuotes) {
      if (ch === '"') {
        if (csv[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += ch;
      }
      continue;
    }

    if (ch === '"') {
      inQuotes = true;
      continue;
    }

    if (ch === ",") {
      current.push(field.trim());
      field = "";
      continue;
    }

    if (ch === "\n" || ch === "\r") {
      // Handle \r\n
      if (ch === "\r" && csv[i + 1] === "\n") i++;
      current.push(field.trim());
      field = "";
      rows.push(current);
      current = [];
      continue;
    }

    field += ch;
  }

  // last field/row
  if (field !== "" || current.length > 0) {
    current.push(field.trim());
    rows.push(current);
  }

  return rows;
}

async function fetchCsv(sheetRef: string): Promise<string[][]> {
  const url = sheetRef.startsWith("gid:")
    ? `${GID_BASE}${encodeURIComponent(sheetRef.slice(4))}`
    : `${CSV_BASE}${encodeURIComponent(sheetRef)}`;
  const res = await fetch(url);
  if (!res.ok) {
    const text = await res.text();
    console.error(`Google Sheets CSV fetch failed [${res.status}] ${sheetRef}: ${text}`);
    throw new Error(`Google Sheets CSV fetch failed [${res.status}]: ${text}`);
  }
  const csv = await res.text();
  return parseCsv(csv);
}

function norm(s: string): string {
  return s.trim().toLowerCase().replace(/[^a-z0-9]/g, "");
}

/** Turns a values grid into header-keyed row objects. */
function toRecords(values: string[][]): Record<string, string>[] {
  if (values.length < 2) return [];
  const header = (values[0] ?? []).map(norm);
  return values.slice(1).flatMap((row) => {
    const rec: Record<string, string> = {};
    header.forEach((key, i) => {
      if (key) rec[key] = (row[i] ?? "").toString().trim();
    });
    return Object.values(rec).some(Boolean) ? [rec] : [];
  });
}

function pick(rec: Record<string, string>, keys: string[], fallback = ""): string {
  for (const k of keys) {
    const v = rec[norm(k)];
    if (v) return v;
  }
  return fallback;
}

// The Veep dashboard sheet has two tabs:
//   gid=0          — live leads/opportunities exported from Copper CRM
//   gid=2126316840 — closed wins (Stage=Won)
// Both tabs share the same column layout. No connector or API keys required.
const WINS_GID = "2126316840";

export async function fetchSheetLeads(): Promise<SheetLead[]> {
  const records = toRecords(await fetchCsv("0"));
  return records
    .filter((rec) => norm(pick(rec, ["show on dashboard", "show", "visible"])) === "yes")
    .map((rec, i) => ({
      id: `sheet-lead-${pick(rec, ["opp id", "oppid", "id"], String(i))}`,
      pseudonym: pick(rec, ["company", "pseudonym", "name"], ""),
      one_liner: pick(rec, ["blurb", "description", "one liner", "oneliner", "summary"]),
      role_needed: pick(rec, ["role needed", "role", "roleneeded"], "Senior operator"),
      stage: pick(rec, ["stage", "status"], "Scoping"),
      func: pick(rec, ["function", "func"], ""),
      industry: pick(rec, ["industry"], ""),
      engagement_type: pick(rec, ["engagement", "engagement type", "engagementtype"], ""),
    }));
}

export async function fetchSheetWins(): Promise<SheetWin[]> {
  const records = toRecords(await fetchCsv(`gid:${WINS_GID}`));
  return records
    .filter(
      (rec) =>
        norm(pick(rec, ["stage", "status"])) === "won" &&
        norm(pick(rec, ["show on dashboard", "show", "visible"])) === "yes",
    )
    .map((rec, i) => ({
      id: `sheet-win-${pick(rec, ["opp id", "oppid", "id"], String(i))}`,
      role: pick(rec, ["role needed", "role", "roleneeded"], "Senior operator"),
      blurb: pick(rec, ["blurb", "description", "one liner", "oneliner", "summary"]),
      engagement_type: pick(rec, ["engagement", "engagement type", "engagementtype"], "—"),
      length: pick(rec, ["term", "length", "duration"], "—"),
      industry: pick(rec, ["industry"], ""),
      func: pick(rec, ["function", "func"], ""),
      company: pick(rec, ["company", "pseudonym", "name"], ""),
    }));
}
