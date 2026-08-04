# Plan: Pull dashboard data from the live published Google Sheet (no connector)

## Goal
Replace the connector-gateway approach with a direct CSV export fetch. The server function reads the sheet via Google's public CSV export URL — no Google Workspace connection, no `GOOGLE_SHEETS_API_KEY`, no `LOVABLE_API_KEY` needed for this feature.

## Prerequisite (one-time, manual)
You must set the Google Sheet sharing to **"Anyone with the link can view"**:
1. Open the sheet in Google Sheets
2. Click **Share** (top right)
3. Under "General access," change to **"Anyone with the link"**
4. Confirm

Until this is done, the CSV export URL returns 401 and the dashboard falls back to admin entries.

## Code changes

### 1. Rewrite `src/lib/sheets.server.ts`
- Remove the connector-gateway URL, `LOVABLE_API_KEY`, and `GOOGLE_SHEETS_API_KEY` logic entirely.
- Replace `readRange()` with a `fetchCsv(sheetName)` function that hits:
  `https://docs.google.com/spreadsheets/d/{SHEET_ID}/gviz/tq?tqx=out:csv&sheet={sheetName}`
- Parse the CSV response into a `string[][]` grid (split lines, split commas — simple CSV parser).
- Keep `toRecords()`, `pick()`, `fetchSheetLeads()`, `fetchSheetWins()` logic identical — only the transport changes.
- Replace `isSheetsConfigured()` with a check that simply tests the CSV URL returns 200 (or just always returns true and lets the try/catch in the function handle failures).

### 2. Update `src/lib/sheets.functions.ts`
- Remove the `isSheetsConfigured()` check — the public CSV endpoint needs no secrets.
- Always attempt the fetch; on failure, return `{ configured: false, leads: [], wins: [] }` (existing fallback behavior stays).
- Keep the `requireSupabaseAuth` middleware and `is_member` role check (partner dashboard is still gated).

### 3. Update `src/routes/_authenticated/dashboard.tsx`
- No functional change needed. The source label already shows "Google Sheet (live)" when `configured: true`.
- The fallback to admin entries still works if the sheet fetch fails (e.g., sharing not yet set).

## What stays the same
- Supabase auth + partner role gate (only invited partners can view the dashboard)
- Manual admin entries as fallback
- Dashboard UI, lead cards, wins list, stage filter

## What gets removed
- All connector-gateway code (`GATEWAY_URL`, `X-Connection-Api-Key`, `Authorization: Bearer`)
- `isSheetsConfigured()` secret checks
- No need to ever link the Google Sheets connector

## Security note
The sheet URL is hardcoded (already public once sharing is enabled). The data is only shown to authenticated partners behind the dashboard gate — the same audience as before. No API keys are involved.
