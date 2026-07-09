# Production polish — phased launch cleanup

A three-phase pass. You review after each phase before I start the next. No brand redesign, no new decorative ideas, no copy rewrites (only fixing awkward line breaks and clipped text).

Note on system tokens up front: current `--stone-soft` is `oklch(0.55 0.03 255)` on a `oklch(0.115)` navy background — that fails WCAG AA at small sizes. That's the root cause of the "faint labels / tiny low-contrast text" complaint. Phase 1 fixes it at the token level so every page benefits without hunting per-component.

---

## Phase 1 — Foundations (site-wide primitives)

Ship first, review, then move on. Low regression risk, highest impact.

**1. Typography discipline (src/styles.css)**
- Cap all heading weights at 500; `strong`/`b` already 500. Sweep components with `rg` for `font-bold`, `font-semibold` (700/600), and `font-extrabold` — downgrade to `font-medium` (500) or remove entirely; keep 600 only for the single strongest CTA label.
- Normalize eyebrow tracking from `0.14em` → `0.12em` where currently `0.14` (mono-label utility) so small caps read cleanly at 11px.
- Add a shared `.body-copy` scale? No — keep utility classes, but tighten `text-sm` body usage: audit for `text-stone` on `text-xs` (drop to labels only).
- Fix hero headline balance: `text-wrap: balance` is already global; verify no route overrides it.

**2. Contrast tokens (src/styles.css)**
- Raise `--stone` from `oklch(0.72 …)` → `oklch(0.78 …)` (secondary body).
- Raise `--stone-soft` from `oklch(0.55 …)` → `oklch(0.66 …)` (labels/meta) — clears AA at 12px.
- Raise `--rule` from `10%` white → `12%` for card borders that currently disappear on some monitors.
- Verify `text-cream/70`, `text-cream/80`, `text-white/60` usages; replace `/60` on body text with `/80` or `text-stone`.

**3. Focus + interaction states (src/styles.css + primitives)**
- Add a global visible focus ring utility (`focus-visible:ring-2 ring-accent ring-offset-2 ring-offset-background`) applied to every `<a>`, `<button>` primitive. Currently only some CTAs have it.
- Standardize link underline offset + decoration color across `PageHero`, `FooterCTA`, `SiteFooter`, pricing, portfolio "See scope →" links — all use `underline-offset-8 decoration-white/20 hover:decoration-white/60`.

**4. CTA system (new file: src/components/site/cta.tsx or inline into primitives)**
Extract the two variants already duplicated across `PageHero`, `FooterCTA`, `SiteHeader`, index, pricing:
- `PrimaryCTA` — cream pill, ink text, arrow icon, 44px min-height.
- `SecondaryCTA` — underline link, cream/80 → cream hover.
- Replace inline copies in `PageHero`, `FooterCTA`, `SiteHeader`, `index.tsx`, `pricing.tsx`, `for-portfolios.tsx`. One component, one hover/focus behavior.

**5. Site header + footer polish**
- Header: bump nav link size from `text-sm text-stone` → `text-sm text-cream/85`; increase gap between hash nav and route nav; ensure active route uses `text-cream` (already does). Ensure mobile menu tap targets ≥ 44px.
- Footer: raise column-title contrast (currently `text-stone-soft` at 11px — worst offender); increase link contrast from `text-cream/85` → `text-cream/90`; tighten column gap on desktop, ensure email link stays the visual anchor.
- Hide the Lovable badge via `set_badge_visibility(hide_badge: true)`.

**6. Card system audit (components/site/*)**
- Normalize `EngagementTile`, `OperatorProofCard`, pricing tier cards, FAQ items, portfolio cards to one padding scale (`p-6` inside; `pt-7 pb-6 px-6` for tall cards).
- Normalize border color to `border-white/10` (via `--rule` bump above) and hover to `hover:border-white/25`.
- Remove any card that mixes `bg-white/5` with a border ring (redundant); pick one.

---

## Phase 2 — Homepage + Pricing

**Homepage (src/routes/index.tsx)**
- Hero: verify tail-phrase accent, tighten sub max-width, confirm CTAs use new `PrimaryCTA`/`SecondaryCTA`.
- Logo wall: raise opacity if currently `<70%`.
- Operator canvas / floating headshots: verify alignment on 1280 / 1024 / 768 / mobile; fix any headshot that overflows on tablet.
- Problem grid, benefits grid, process, proof, comparison, FAQ: reduce section vertical padding where it exceeds `py-28` without hierarchical reason; add rhythm variance (alternate `py-20` / `py-28`) so the page doesn't feel like N identical card grids.
- Comparison table: mobile behavior — verify no horizontal scroll trap; if too wide, stack rows as cards under `md:`.
- Final CTA: use shared `FooterCTA`.

**Pricing (src/routes/pricing.tsx)**
- Tighten tier columns: align price rows to a single baseline (`min-h-` on the price block), bullets share a top position across all four columns.
- "Most common" chip: keep coral but reduce size and move above the tier name for scan order.
- "What we don't charge for": switch from 4-col compressed grid to 2×2 on md; more line-height in body.
- Pricing FAQ: current 3-col grid crowds long questions — switch to 2-col on md, 1-col mobile with more spacing.
- Portfolio callout: strengthen left-rule and confirm CTA visibility.

---

## Phase 3 — Portfolio, FAQ page, mobile pass, hygiene

**Portfolio (src/routes/for-portfolios.tsx)**
- Bring hero into parity with homepage hero (spacing, tail accent, CTA pair).
- Roster card: it's a single tier — reframe as a two-column layout (left: what's in the roster; right: what's billed by SOW) so it doesn't feel sparse.
- "How it works" 4-step + "What the retainer covers" 2-card: unify card treatment with Phase 1 card system.
- Final CTA: portfolio-specific copy in `FooterCTA` (already accepts headline/sub props).

**FAQ page (src/routes/faq.tsx)**
- Audit for clipped answers, ensure category headings use eyebrow style consistently, add more vertical breathing between items.

**Mobile pass (all pages, viewport 375 & 414)**
- Hero: reduce top padding from `pt-24` → `pt-14` on mobile; ensure headline doesn't wrap awkwardly (add `text-balance` fallback where missing).
- CTA stack: primary + secondary should stack full-width on mobile with `w-full sm:w-auto` on the pill.
- Pricing tiers: single column, ensure "Most common" chip stays with its tier.
- Comparison table: stacked card layout if not already.
- Footer: single column, larger tap targets, email link 18px+.
- Verify no `overflow-x` from illustrations or floating operator cards.

**Production hygiene**
- Metadata sweep: every route has unique `title`, `description`, `og:title`, `og:description`, self-referential `canonical` + `og:url`.
- Verify all in-page `#hash` anchors resolve to real section IDs; verify all `<Link to>` routes exist.
- Remove dead imports and any unused components surfaced during the pass.
- Confirm no console errors on `/`, `/pricing`, `/for-portfolios`, `/faq`, `/services*`, `/about`, `/contact`.
- Hide Lovable badge (done in Phase 1) and confirm publish visibility.

---

## Technical section

- **Token changes** land in `src/styles.css` under `:root` — no `@theme` shape changes, so Tailwind utilities regenerate automatically.
- **CTA extraction** creates `src/components/site/cta.tsx` exporting `PrimaryCTA` and `SecondaryLink`, then replaces inline copies in ~6 files via targeted patches (not full rewrites).
- **Card system** uses existing tokens; changes are className normalizations, no new utilities except one optional `@utility card-surface` if repetition warrants it.
- **Badge**: `publish_settings--set_badge_visibility({hide_badge: true})` — requires Pro plan; if it fails I'll surface the error and leave it for you.
- **Verification** per phase: `bun run build` for typecheck + a Playwright pass at 1280 / 768 / 375 capturing home, pricing, portfolio, FAQ; I diff screenshots against current state and flag anything I regressed.

## What I will NOT touch (unless you say so)
- Operator headshots (recently cropped).
- Route structure, URLs, copy direction.
- Illustration components (`OperatorCanvas`, `HeroMotif`) beyond alignment/overflow fixes.
- Backend, auth, or any server code.
