# Add 8 new operators to the roster spotlight

Append 8 new operator profiles to the `spotlightOperators` array in `src/routes/index.tsx`, keeping the exact same card design, data shape, and copy treatment (uppercase past companies, short chips, summary sentence). The existing 4 operators (Jian, Erika, Elaine, Victoria) stay unchanged and remain first in the rail.

## New operators (in order)

1. Vanessa Kwan — Finance Operating Partner — BDG MEDIA · GOLDMAN SACHS — Digital Media / Luxury Retail / Consumer
2. Alasdair Lloyd-Jones — Growth Operating Partner — SET CREATIVE (WPP) · DAVID YURMAN — Consumer Retail / Tech / Automotive
3. Alan Poussaint — Finance Operating Partner — ROCKET INTERNET · KIXIE — Tech / SaaS / Private Capital
4. Jennifer Kasper — Marketing Operating Partner — LVMH · MACY'S — Retail / Fashion / Beauty
5. Sean Park — People Operating Partner — ACTIVANT CAPITAL · EY — Growth Equity / Professional Services / Mission-Driven
6. Jonathan Levinson — Finance Operating Partner — KIDS MADE MODERN · YELLOWHEART — E-Commerce / SaaS / Manufacturing
7. Miguel Ferreyra de Bone — Finance & Strategy Operating Partner — TASTE OF BELGIUM · FARNSWORTH CANNABIS — Consumer / Luxury / Finance
8. Jessica Davila — People Operating Partner — TASKRABBIT · BREAD — Marketplace / Fintech / Consumer

Summaries used verbatim from the message.

## Assets

Upload the 8 uploaded headshots via `lovable-assets create` from `/mnt/user-uploads/{vanessa,alasdair,alan,jennifer,sean,johnathan,miguel,jessica}.png`, writing pointers to `src/assets/operator-<slug>.png.asset.json`. Import each pointer at the top of `src/routes/index.tsx` and reference `.url` on the new entries.

## Out of scope

- No changes to `heroOperators` (hero collage stays as-is with the original 4).
- No changes to the `OperatorSpotlightRail` component itself.
- No SEO/copy changes elsewhere.
