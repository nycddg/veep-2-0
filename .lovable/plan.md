# Editorial redesign — remove the AI-bento feel

## Direction

Keep the dark navy canvas, IBM Plex system, copy, page structure, and offer intact. Remove the reflex of wrapping every content unit in a rounded, faintly-bordered card. Move weight to typography, rules, alignment, and negative space. Introduce section-to-section rhythm variation so the page stops feeling like a stack of identical bento tiles.

## Global token/system changes (`src/styles.css`)

- Reduce global radius: `--radius: 0.5rem` → `0.25rem`. Kill pillowy corners on everything derived from it (buttons stay pill via explicit `rounded-full`; big panels become near-square).
- Retire `glass-card` as the default container. Keep the utility available but stop using it for content blocks — reserve for one or two deliberate emphasis moments (final CTA, one operator spotlight).
- Add two new editorial utilities:
  - `.rule-row` — top hairline + generous vertical padding, no background, no border on sides.
  - `.col-rule` — vertical hairline between columns (used to replace card grids with divided columns).
- Slightly stronger `--rule` opacity so hairlines can carry structure without needing a box around them.

## Homepage (`src/routes/index.tsx`) — section by section

1. **Problems ("Critical work with no clear owner", etc.)** — Currently a 2×2 card grid. Replace with a numbered editorial list: `01 / 02 / 03 / 04` mono index at left, headline in Plex Sans display size, sub in stone, hairline between rows. No card, no border box.

2. **"Instead of" alternatives** — Replace three cards with a three-column split divided by vertical hairlines (`col-rule`), left-aligned, no backgrounds. Section itself sits under a `rule-row` top hairline with a mono eyebrow.

3. **Operator spotlight (`OperatorProofCard` spotlight variant)** — Keep the portrait, but drop the ringed card chrome. Portraits become full-bleed rectangles with a hairline caption block underneath (name, role, prior companies in mono, summary as pretty-wrapped paragraph). One spotlight can retain a subtle container as the deliberate emphasis moment.

4. **Stats / Network Impact** — Replace the even bento grid with an asymmetric editorial table: figure in large mono display, label + detail in a two-column row with a top hairline. 4 rows × 2 columns on desktop, stacked on mobile. No card backgrounds.

5. **Benefits (6 items)** — Convert from grid-of-cards to a two-column list of hairline rows. Each row: small mono index, bold title line, stone sub. Removes the "SaaS feature grid" look entirely.

6. **Engagements / Pricing preview (`EngagementTile`)** — Rewrite as a restrained pricing table: name (left), price (mono, tabular), best-when (paragraph), link. Vertical hairlines divide columns on desktop; horizontal hairlines stack on mobile. "Featured" indicated only by a mono `MOST COMMON` micro-label above the name — no colored box.

7. **How it works (`StepFlow`)** — Currently four boxed panels separated by a background rule. Replace with a horizontal editorial process: mono step number, title, description; separated by vertical hairlines on desktop, stacked hairline rows on mobile. No box backgrounds.

8. **Proof cases (`cases` array)** — Convert the three proof cards into three tall editorial columns divided by vertical rules: mono tag on top, trigger paragraph, outcome paragraph separated by a hairline, metric in large mono display at bottom. Keep the equal-spacing divider learning from the prior turn but applied without a card shell.

9. **Comparison / differentiators** — Present as a real editorial table: dimension in mono left column, Veep column, Old-way column, hairlines between rows. Header row uses eyebrow micro-caps.

10. **FAQ** — Replace 2-column card grid with a single-column editorial Q&A: hairline between items, question in Plex Sans display size, answer indented under it. Optionally use a `<details>` for progressive disclosure without any card chrome.

11. **Final CTA (`FooterCTA`)** — This is one of the few places a deliberate container earns its keep. Keep an emphasis block but square it off (radius from token), remove faint ring, use a strong background contrast + tight typographic composition (headline left, CTA right — asymmetric, not centered).

## Shared components touched

- `src/components/site/OperatorProofCard.tsx` — spotlight variant: remove `rounded-lg bg-white/[0.02] ring-1 ring-white/8` chrome; caption sits on a top hairline.
- `src/components/site/StepFlow.tsx` — remove `bg-white/10 rounded-3xl overflow-hidden border` wrapper; adopt hairline dividers.
- `src/components/site/EngagementTile.tsx` — rebuilt as a table row (see #6).
- `src/components/site/ObjectionList.tsx` — remove `glass-card rounded-3xl` grid; convert to hairline Q&A list.
- `src/components/site/StatsBand.tsx` — audit and reshape to match #4.
- `src/components/site/CompareTable.tsx` — audit; ensure it's a true editorial table (no rounded panels).
- `src/components/site/FooterCTA.tsx` — asymmetric composition (see #11).
- `src/components/site/Testimonials.tsx` — already de-carded in the last turn; keep, verify radius/hairline consistent with the new system.
- `src/components/site/PageHero.tsx` — verify hero uses left-aligned or intentionally-composed layout, not a centered card.

## Secondary pages

Apply the same rules to the pages that reuse the bento vocabulary: `pricing.tsx`, `services.tsx` and its children, `how-it-works.tsx`, `proof.tsx`, `compare.tsx` (+ children), `for-companies.tsx`, `for-portfolios.tsx`, `faq.tsx`, `about.tsx`. Same moves each time: swap card grids for hairline rows / divided columns / editorial tables; reduce radius; keep a container only where emphasis earns it.

## Guardrails

- No copy changes.
- No brand/color changes beyond radius and rule strength.
- No layout that hurts scannability — every list still reads top-to-bottom, tables still align on the same baseline.
- Keep exactly one or two "hero moment" containers per page (final CTA, one spotlight) so contrast against the newly card-less sections is visible.
- Mobile: all divided-column layouts collapse to hairline-stacked rows.

## Technical notes

- Radius change is a single token edit; everything derived (`rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-3xl`) still renders — just tighter. `rounded-full` (pills, avatars) is unaffected.
- Vertical column rules use `divide-x divide-white/10` on the grid parent — no per-child border management.
- Editorial tables use CSS grid with `grid-cols-[auto_1fr_1fr]` and `border-t border-white/10` on rows, avoiding real `<table>` layout issues while keeping semantics via `role="table"` where useful.

## Out of scope

- Header/nav restyle.
- Motion/animation additions.
- Any content, offer, or route changes.
