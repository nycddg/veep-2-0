// Google Sheets reader for the partner dashboard. Server-only.
// Reads two tabs ("Leads" and "Wins") from the Veep dashboard sheet through
// the Lovable connector gateway. Columns are matched by header name.

const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_sheets/v4";

export const SHEET_ID = "1Amf9zHrHhLEi-YFmRQT7EquLT1BrZcfVmRfaZ_vuTIQ";

export type SheetLead = {
  id: string;
  pseudonym: string;
  one_liner: string;
  role_needed: string;
  stage: string;
};

export type SheetWin = {
  id: string;
  role: string;
  engagement_type: string;
  length: string;
  happened_on: string;
};

export function isSheetsConfigured(): boolean {
  return Boolean(process.env["LOVABLE_API_KEY"] && process.env["GOOGLE_SHEETS_API_KEY"]);
}

async function readRange(range: string): Promise<string[][]> {
  const lovableKey = process.env["LOVABLE_API_KEY"];
  const connectionKey = process.env["GOOGLE_SHEETS_API_KEY"];
  if (!lovableKey || !connectionKey) throw new Error("Google Sheets is not connected");

  const res = await fetch(
    `${GATEWAY_URL}/spreadsheets/${SHEET_ID}/values/${range}?majorDimension=ROWS`,
    {
      headers: {
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": connectionKey,
      },
    },
  );
  if (!res.ok) {
    const text = await res.text();
    console.error(`Google Sheets request failed [${res.status}] ${range}: ${text}`);
    throw new Error(`Google Sheets request failed [${res.status}]: ${text}`);
  }
  const json = (await res.json()) as { values?: string[][] };
  return json.values ?? [];
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

export async function fetchSheetLeads(): Promise<SheetLead[]> {
  const records = toRecords(await readRange("Leads!A1:Z1000"));
  return records.map((rec, i) => ({
    id: `sheet-lead-${i}`,
    pseudonym: pick(rec, ["pseudonym", "name", "company"], ""),
    one_liner: pick(rec, ["description", "one liner", "oneliner", "summary"]),
    role_needed: pick(rec, ["role needed", "role", "roleneeded"], "Senior operator"),
    stage: pick(rec, ["stage", "status"], "Scoping"),
  }));
}

export async function fetchSheetWins(): Promise<SheetWin[]> {
  const records = toRecords(await readRange("Wins!A1:Z1000"));
  return records.map((rec, i) => ({
    id: `sheet-win-${i}`,
    role: pick(rec, ["role", "title"], "Senior operator"),
    engagement_type: pick(rec, ["engagement type", "engagement", "type"], "Engagement"),
    length: pick(rec, ["length", "duration"], "—"),
    happened_on: pick(rec, ["date", "happened on", "closed"], ""),
  }));
}
