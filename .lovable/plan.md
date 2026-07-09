
# Launch-polish pass

Scope: tighten what exists. No redesign, no new decorative ideas, no copy rewrites, no new sections. Preserve dark editorial voice, no italics, weights 400/500 only (600 already capped in `styles.css`).

## 1. Global system pass (`src/styles.css`, `SiteHeader`, `SiteFooter`, `PageHero`, `primitives`)

- Confirm the weight ceiling: `styles.css` already remaps `font-bold/extrabold/black/semibold` to 500. Sweep routes for stray inline `font-weight`/`fontWeight: 700` and remove.
- Contrast: promote body copy that currently uses `text-cream/60`, `text-cream/65`, `text-stone-soft`, or `text-muted-foreground/50` in card descriptions, FAQ answers, footer copy, and pricing meta to `text-cream/80` (body) or `text-stone` (secondary). Keep `stone-soft` only for mono eyebrows/indices.
- Eyebrows: cap tracking at `0.12em` (already the token). Remove ad-hoc `tracking-[0.18em]`/`0.2em` where readability drops below ~11px.
- Focus ring: already global; audit custom `<button>`/`<a>` that override with `outline-none` and restore.
- Card system: single glass shape — `bg-card rounded-2xl border border-white/10 p-6 md:p-8`. Normalize any card using `rounded-xl`, `rounded-3xl`, `p-4`, or bespoke borders.
- Section rhythm: standard `py-24 md:py-32`, container `max-w-6xl px-6`, header block `max-w-3xl mb-14 md:mb-16`, grid `gap-6 md:gap-8`. Apply across home, pricing, portfolio, about, join, services, compare, faq, proof.

## 2. Per-page audit (only what needs a tweak)

- **Homepage (`index.tsx`)** — tighten hero vertical space on desktop, fix mobile headline wraps (add `text-balance`/`sm:` breakpoints), align floating operator/match-card so it doesn't overlap CTA on md, normalize problem grid + stats band + benefits grid + comparison + FAQ + final CTA to the global rhythm.
- **Pricing (`pricing.tsx`)** — normalize card padding + height (`flex flex-col h-full`), align price rows, tighten feature list line-height, ensure primary CTA is same button on every tier, mobile: stack cards with equal spacing, no horizontal scroll.
- **Portfolio (`for-portfolios.tsx`)** — already partially cleaned; sweep remaining sections (Roster Development, Capacity Audit, engagement types, final CTA) to the same card + rhythm rules.
- **FAQ (`faq.tsx` + inline FAQ sections)** — one accordion style, `py-5` per item, `text-cream` question / `text-cream/80` answer, no divider stack + border-card duplication.
- **Footer (`SiteFooter.tsx`)** — group links into clear columns, `text-cream/70` links with `hover:text-cream`, bump email visibility, align legal row, remove Lovable badge for production.
- **About (`about.tsx`)** and **Join (`join.tsx`)** — apply global rhythm + card + contrast rules; fix any mobile-only wrap issues.
- **Nav (`SiteHeader.tsx`)** — increase link size from ~12px mono to 14px sans, clearer active state (accent underline), mobile menu tap targets ≥ 44px, sticky background solidified for legibility.

## 3. Responsive polish

- Audit each route at mobile (375), tablet (768), desktop (1280) via Playwright screenshots.
- Fix: hero heights capped on mobile, CTA stacks full-width, cards single-column with `gap-4`, comparison + pricing tables switch to stacked card view under `md`, no `overflow-x`.

## 4. Hygiene

- Remove unused imports/components flagged during the sweep.
- Verify every nav + CTA route resolves (no dead `#` anchors used as primary nav).
- Head metadata: confirm every route has real title/description/og and no "Lovable App" defaults.
- Remove Lovable badge (publish setting) before launch.

## Technical notes

- Edits are almost entirely Tailwind class swaps + small structural wrappers; no new dependencies, no new routes, no component API changes.
- Verification: `tsgo` typecheck + Playwright screenshots at 3 breakpoints for home, pricing, for-portfolios, about, join, faq.
- Out of scope: copy rewrites, brand color changes, new illustrations, new sections, animation redesign.

## Deliverables

- Updated route files under `src/routes/` and shared components under `src/components/site/`.
- No changes to `styles.css` tokens (system is already correct); only usage cleanup in components.
- Screenshot set confirming before/after on the audited pages.
