# Seed demo dashboard content

Add sample data so the partner dashboard shows a realistic, fully populated view.

## Live leads (10)

Pseudonymized companies with a one-liner, the role needed, and a pipeline stage spread across the funnel:

| Pseudonym | Role needed | Stage |
|---|---|---|
| Northwind Atlas | Interim CFO | Scoping |
| Cobalt Harbor | VP Operations | Scoping |
| Meridian Nova | Head of RevOps | Qualifying |
| Silver Birch | Interim CMO | Qualifying |
| Ironwood Peak | Supply Chain Lead | Matching |
| Lantern Bay | Interim Controller | Matching |
| Copper Ridge | Head of People | Proposal |
| Quiet Harbor | VP Customer Success | Proposal |
| Amber Field | Interim COO | Signed |
| Bright Anchor | Head of Product Ops | Signed |

Each gets a short one-liner describing the situation (e.g. "PE-backed SaaS closing a Series C, needs finance leadership through the raise") and a sort order so the board reads top-down by stage.

## Recent wins (5)

Role, engagement type, length, and a date within the last few months:

- Interim CFO — Fractional — 6 months
- VP Operations — Full-time placement — Permanent
- Head of RevOps — Project — 12 weeks
- Interim CMO — Fractional — 4 months
- Supply Chain Lead — Project — 8 weeks

## Technical notes

- Rows are inserted into the existing `leads` and `wins` tables with `archived = false`.
- No schema, code, or UI changes — data only, removable later from `/admin`.
- The dashboard falls back to these admin entries because Copper credentials aren't configured yet, so the source label will read "Veep admin entries".
