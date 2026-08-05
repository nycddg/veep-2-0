# Site-wide flatten: content layout over container layout

Visual structure only. No copy, route, token, SEO, or data changes. Dark and light both preserved.

## Audit findings

**Home (/)**
- `OperatorCanvas` hero: three stacked surfaces — headshot frame + "Match History" glass card + "Match Matrix" glass card. Two floating glass panels over one media surface = container collage. Inside Match Matrix, each stat row has its own filled track chrome.
- Trigger grid section (index.tsx ~622): outer `rounded-3xl border border-white/10 bg-secondary` wrapper whose only job is to hold a grid of cells that already have hairline dividers — frame-for-the-frame.
- `OutcomeTile`: glass-card tiles used for a grid of plain outcomes; these are links, so the surface is defensible but the glass+border+blur stack is heavier than needed.
- `ObjectionList`: `glass-card rounded-3xl` per objection inside an already-banded section — non-interactive boxes where spacing + one hairline would do.
- `AudienceTabs`: bordered/tinted panel (`border border-white/10 bg-white/[0.02] rounded-md p-8`) containing its own bordered header row — card-inside-card.

**For Portfolios (/for-portfolios)**
- `bg-card rounded-2xl border border-white/10` cards sitting inside `bg-surface-raised` band (line ~112) and `rounded-3xl border bg-card` inside `bg-surface-band` (line ~197): panel-inside-panel, plus border+bg double chrome.

**Join (/join)**
- Two `glass-card rounded-3xl` blocks (success state and form). The form is a legitimate single surface; the success confirmation is a box around plain content.
- Error message on its own `bg-red-500/10 rounded-xl` tray inside the form card.
- Filter/tag pills `border + bg-white/[0.03]` on non-interactive metadata rows.

**Pricing, FAQ, About**
- Already content-layout (divider rules + spacing, no per-item cards). No flattening needed beyond consistency checks.

**Shared**
- `SiteHeader` / `SiteFooter` / `FooterCTA`: single band + buttons, already clean. Header bar stays.
- `Testimonials`, `StatsBand`, `TriggerBento`, `CompareTable`, `StepFlow`, `EngagementTile`: already hairline/spacing based. Leave.

## Changes

1. **Hero (`OperatorCanvas`)** — headshot stays the single media surface (one rounded frame, one shadow). Remove the "Match History" floating glass card; keep the Match Matrix as the ONE floating surface, and strip its inner filled stat trays so bars sit directly on the card with spacing. Fix mobile so nothing overflows.
2. **index.tsx trigger grid** — delete the outer rounded/bordered/bg wrapper; keep the internal hairline grid on the section background.
3. **`OutcomeTile`** — drop `glass-card`; keep the rounded hit area with a single hairline and hover tint (still a link).
4. **`ObjectionList`** — replace glass cards with a divided list: hairline separators, spacing-driven grouping, no per-item box.
5. **`AudienceTabs`** — flatten the right-hand panel: remove border/bg/rounded, keep the internal hairline header rule and spacing. Tab strip keeps its surface (interactive control).
6. **`for-portfolios`** — strip `bg-card`, border, and rounded from both card grids; group with top hairline + spacing on the section background.
7. **`join`** — success state becomes centered type with an accent mark, no box. Error text loses its filled tray (accent-colored text + hairline). Metadata pills lose the fill, keep mono type + gap. The application form keeps ONE surface.
8. **Rhythm pass** — normalize gaps where a wrapper is removed: 24–32px between clusters, 12–16px between related items, 4–8px for label/value pairs. No new borders added to compensate.
9. **Light mode** — verify each touched surface in `html.light`; remove any leftover glass overrides that become gray wells.

## Kept containers (intentional)
- Header bar, buttons, inputs, tab chips, carousel arrows — interactive hit targets.
- Operator portrait cards and hover bio overlay — image is the surface.
- Join application form — one form = one surface.
- Match Matrix — the single hero floating callout.

## Verification
Playwright pass at desktop and mobile widths, dark and light: no card-inside-card, one shadow per unit, no horizontal overflow, hero has one floating surface.
