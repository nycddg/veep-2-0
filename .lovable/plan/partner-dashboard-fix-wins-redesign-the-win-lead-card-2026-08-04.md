# Partner Dashboard — fix wins + redesign the win/lead card

## 1. Fix the wins data bug

The wins column is empty because of an endpoint mismatch, not a data problem.

`fetchCsv()` builds its URL with `&sheet=<name>`. The leads tab happens to work with `sheet=0` (numeric index). But the Wins tab is referenced by its **gid** (`2126316840`), and `sheet=2126316840` is interpreted as a sheet *name* — Google silently falls back to the first tab (leads). I verified this directly: `gid=2126316840` returns the real wins rows; `sheet=2126316840` returns leads.

**Fix:** support the `gid=` parameter in `sheets.server.ts`. `fetchSheetLeads()` keeps `sheet=0`; `fetchSheetWins()` switches to `gid=2126316840`. No other logic changes needed — the parse and filter already work.

## 2. Redesign what each card shows (apply to both columns)

Today the two columns use different card shapes and different headline conventions:

- **Leads** (stacked `rounded-2xl` cards): headline = the Blurb, stage badge top-right, "Role needed · X" as a small sub-label.
- **Wins** (a flat `divide-y` list, no borders): role as small text, `engagement · industry · term` underneath. The Blurb — the actual story — isn't shown at all.

You're right that the role should lead. I'll unify both columns around one card so the dashboard reads as one system:

```text
┌─────────────────────────────────────────────┐
│ Fractional VP Operations           [ Scoping ]│  ← Role = headline, stage = badge
│ Automation integrator launching a new        │
│ AI-driven initiative needs an ops executive  │  ← Blurb = body copy
│ to own delivery from day one.                │
│ Operations · Industrial Automation · Fractional│ ← meta line
└─────────────────────────────────────────────┘
```

For wins, the same card with a "Closed ✓" / accent badge instead of a stage chip:

```text
┌─────────────────────────────────────────────┐
│ Fractional CFO                      [ Closed ]│
│ AI research organization closed a fractional │
│ CFO engagement.                              │
│ Finance · AI / Research · Fractional · Airoi │
└─────────────────────────────────────────────┘
```

Field mapping (both tabs share the same columns):

| Slot      | Lead source          | Win source          |
|-----------|----------------------|---------------------|
| Headline  | Role Needed          | Role Needed         |
| Body      | Blurb                | Blurb               |
| Meta      | Function · Industry · Engagement | Function · Industry · Engagement · Company |
| Badge     | Stage (Scoping…)     | "Closed" (accent)   |

## 3. Containers and filters

- **Containers:** promote wins from the flat divided list to the same `rounded-2xl` raised-surface card the leads use, so wins feel like earned proof rather than an afterthought. Both columns get a consistent stacked-card rhythm and spacing.
- **Column balance:** keep the asymmetric `1.6fr / 1fr` split — leads are the working list and deserve the wider column; wins stay as the supporting rail. Unifying the card visually balances them without making wins compete for space.
- **Filters:** the stage filter stays on **leads only**. Wins are all "Won," so a stage filter there is meaningless. No filter added to the wins column.

## Files changed

- `src/lib/sheets.server.ts` — add `gid=` support to `fetchCsv`; switch `fetchSheetWins()` to `gid=2126316840`. Already returns `SheetWin[]` with role/engagement_type/length/industry.
- `src/lib/sheets.functions.ts` — no change (already returns wins).
- `src/routes/_authenticated/dashboard.tsx` — render both columns with the unified card (role headline, blurb body, meta line); wins use cards instead of a divided list; win badge = "Closed".
- `src/lib/partner-data.ts` — extend `SheetWin`/`Win` typing as needed to carry `blurb`, `function`, `industry`, `company` for the body/meta lines.

## Notes

- Source label stays "Google Sheet (live)" once wins load — both columns now read live.
- The seeded admin wins in the database remain as a fallback only if the sheet read fails (already handled by the `sheetData` fallback).
