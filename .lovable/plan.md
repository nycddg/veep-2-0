# Partner dashboard reads from Google Sheets

Replace the Copper CRM data source with your Google Sheet, read live on each dashboard load.

Sheet: `1Amf9zHrHhLEi-YFmRQT7EquLT1BrZcfVmRfaZ_vuTIQ`

## Sheet format

Two tabs, each with a header row in row 1. Columns are matched by header name, so order doesn't matter and extra columns are ignored.

**Leads** tab:

```text
Description        | Role Needed        | Stage
Logistics scale-up | Interim COO        | Matching
```

**Wins** tab:

```text
Role          | Engagement Type | Length   | Date
Interim CFO   | Fractional      | 4 months | 2026-07-01
```

Stage values should match the existing filters: Scoping, Matching, Proposal, Closing, Won. Blank rows are skipped. Text is shown to partners exactly as written — no pseudonymizing — so keep the sheet safe to share.

## How it works

- Connect the Google Sheets connector so the app can read the sheet with your Google account.
- The dashboard fetches both tabs on load through a server function that first confirms the signed-in user is a Veep partner or admin. Results are cached briefly so a refresh isn't a new API call every second.
- The source line reads "Source: Google Sheet (live)". If the sheet can't be read, the dashboard falls back to the manual admin entries already in the database and says so.
- `/admin` keeps working as the fallback editor for leads and wins.

## What gets removed

Copper is dropped entirely: `src/lib/copper.server.ts`, `src/lib/copper.functions.ts`, and the `useCopperDashboard` hook.

## Technical notes

- New `src/lib/sheets.server.ts` calls the connector gateway at `https://connector-gateway.lovable.dev/google_sheets/v4/spreadsheets/{id}/values/{tab}!A1:Z1000`, with `LOVABLE_API_KEY` and the linked `GOOGLE_SHEETS_API_KEY` headers. Header row drives column mapping; rows are normalized into the existing `Lead` and `Win` types (synthetic ids from the row index).
- New `src/lib/sheets.functions.ts` exposes `getSheetDashboard` with `requireSupabaseAuth` plus the existing `is_member` role check.
- `src/lib/partner-data.ts` swaps `useCopperDashboard` for `useSheetDashboard`; `src/routes/_authenticated/dashboard.tsx` updates its source label and fallback logic.
- No database changes.
