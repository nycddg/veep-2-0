
# Premium motion pass

Restrained, editorial motion layered onto the existing design system. No copy, layout, typography, routing, form, metadata, or visual changes. All motion opt-out under `prefers-reduced-motion: reduce`.

## 1. Motion system (single source of truth)

Add tokens + utilities to `src/styles.css` so every animation uses the same vocabulary:

- Durations: `--dur-micro: 140ms`, `--dur-hover: 200ms`, `--dur-enter: 420ms`
- Easing: `--ease-standard: cubic-bezier(0.22, 1, 0.36, 1)` (used everywhere)
- Distance ceiling: 4–12px transforms only
- Utilities:
  - `@utility motion-fade-up` — opacity 0 → 1, translateY(8px → 0), `--dur-enter`, `--ease-standard`
  - `@utility motion-hover-lift` — `transition: transform var(--dur-hover), box-shadow var(--dur-hover), border-color var(--dur-hover)`; hover: `translateY(-2px)` + shadow bump
  - `@utility motion-link` — color/underline-offset transition for nav + footer links
  - `@utility motion-arrow` — `transition: transform var(--dur-hover)`; group-hover `translateX(2px)`
  - `@utility motion-focus-ring` — smooth outline-offset transition
- Global rule:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.001ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.001ms !important;
      scroll-behavior: auto !important;
    }
    .motion-fade-up { opacity: 1 !important; transform: none !important; }
  }
  ```

## 2. Section entrance (viewport-triggered)

Reuse the existing `src/components/site/useInView.ts` hook (already one-shot, no rework). Add a tiny `<Reveal>` wrapper component in `src/components/site/Reveal.tsx` that applies `motion-fade-up` when in view, with an optional `delay` prop (0/60/120/180ms max — stagger cap).

Apply `<Reveal>` selectively:
- Home: each major section wrapper (Overview, Operators, Benefits, How, Proof, StatsBand, Testimonials, FooterCTA) — one Reveal per section, not per child. Optional light stagger on card grids (max 3 steps).
- Pricing, About, Join, FAQ, Services, Compare, Contact: section wrappers only.
- Hero (`PageHero`, home hero, `OperatorCanvas`): render immediately — no in-view gate; a single quick `motion-fade-up` on mount (300ms) so above-the-fold appears confidently and never blocks LCP.

No text-per-paragraph animation. No parallax. No scroll-linked transforms.

## 3. Navigation (`SiteHeader.tsx`)

- Nav links: add `motion-link` — color transition + `underline-offset` shift on hover, 200ms.
- Active route indicator (already a bottom border): add `transition: border-color var(--dur-hover)`.
- Header background: keep sticky; add `transition: background-color var(--dur-hover), border-color var(--dur-hover)` so the existing `bg-background/85` feels intentional. No scroll-shrink, no logo scale.
- Mobile menu: fade + 4px translate on open (140ms), respecting reduced motion.

## 4. Buttons & CTAs

- Primary pill (`Book intro call` in `PageHero`, `SiteHeader`, `FooterCTA`): add `transition: background-color var(--dur-hover), box-shadow var(--dur-hover), transform var(--dur-hover)`; hover `translateY(-1px)` + subtle shadow. No scale.
- Secondary ghost link: refine underline via `motion-link` (`decoration-color` + `underline-offset` shift).
- Arrow icons (`ArrowRight` inside CTAs): wrap in `group`, icon gets `motion-arrow` → 2px translateX on group hover.
- Consistent focus ring transition via `motion-focus-ring` (offset animates in on `:focus-visible`).

## 5. Cards / editorial modules

- `EngagementTile`, `OperatorProofCard`, `TriggerBento`, `OutcomeTile`, `CompareTable` row (only where already `<Link>` or button): add `motion-hover-lift` — 2px lift, border-color to `white/25`, background tone shift. Non-interactive cards get no hover.
- Existing `op-float` / `op-float-delayed` in `OperatorCanvas`: keep, but disable under reduced motion (already covered by global rule since they use `animation`).

## 6. FAQ accordions (`src/routes/faq.tsx`)

- Use shadcn/Radix accordion transitions if present; otherwise add `data-state`-driven height + opacity transitions (200ms) and rotate the chevron/plus 90° with `transition: transform var(--dur-hover)`.

## 7. Forms (`contact.tsx`, `join.tsx`)

- Inputs/selects/textareas: `transition: border-color var(--dur-hover), box-shadow var(--dur-hover), background-color var(--dur-hover)` — smooth focus ring appearance.
- Submit button: reuse primary CTA motion; add subtle opacity dip while `disabled`/submitting (no spinner change).
- Success/error banners: `motion-fade-up` on mount only (no repeated animation, no shake).

## 8. Operator / proof / stats

- `OperatorSpotlightRail` cards: `motion-hover-lift` only where wrapped in `<Link>`.
- Headshot images: no zoom. Interactive tiles get border-color transition only.
- `StatsBand`: entrance via section-level `<Reveal>` — no count-up (per brand direction, keeping it restrained).

## 9. Pricing & comparison

- `EngagementTile` (already links): `motion-hover-lift` + border-color transition. "Most requested" pill stays static (no pulse).
- `CompareTable` rows: faint hover background only if row is actionable; otherwise none.

## 10. Footer (`SiteFooter.tsx`)

- Links get `motion-link`. No other motion. Footer stays quiet.

## Technical notes

- Zero new dependencies. Pure CSS + existing `useInView` hook + one tiny `Reveal.tsx`.
- All transitions on `opacity` / `transform` / `color` / `border-color` / `box-shadow` — no `width`/`height`/`top` (except accordion height, which is `max-height` capped or Radix-driven to avoid jank).
- No changes to route files' `head()`, no new imports in the router, no bundle-size impact beyond ~1KB CSS + ~30-line Reveal component.
- LCP protected: hero content never gated by in-view observer.

## QA checklist

Run Playwright screenshot pass at 1280×1800 and 390×844 across: `/`, `/pricing`, `/about`, `/join`, `/faq`, `/contact`, `/privacy`, `/terms`. Verify:
- No console errors, no CLS
- Reduced-motion mode disables all transforms (emulate via `prefers_reduced_motion="reduce"`)
- Hover states behave, focus rings visible, forms submit
- Nothing "calls attention to itself"

## Files touched

- `src/styles.css` — motion tokens, utilities, reduced-motion guard
- `src/components/site/Reveal.tsx` — new (~30 lines)
- `src/components/site/SiteHeader.tsx`, `SiteFooter.tsx`, `PageHero.tsx`, `FooterCTA.tsx`, `EngagementTile.tsx`, `OperatorProofCard.tsx`, `OperatorSpotlightRail.tsx`, `TriggerBento.tsx`, `OutcomeTile.tsx`, `CompareTable.tsx`, `OperatorCanvas.tsx` — apply utilities/classes
- Route files (`index.tsx`, `pricing.tsx`, `about.tsx`, `join.tsx`, `faq.tsx`, `contact.tsx`, `services.*`, `compare.*`) — wrap major section blocks in `<Reveal>` (no copy/layout changes)
