## Site-wide premium motion pass

The project already has a well-formed motion system in `src/styles.css` (one easing `--ease-standard`, three durations `--dur-micro/hover/enter`, and utilities `motion-fade-up`, `motion-reveal`, `motion-hover-lift`, `motion-arrow`, `motion-cta`, `motion-link`, `motion-field`, `motion-collapse`), plus a `<Reveal>` component and a reduced-motion guard. Coverage is patchy — some primitives use it, most pages don't. This pass extends existing tokens (no new libraries, no new keyframes beyond one) and applies them consistently. No copy, layout, typography, routing, or visual system changes.

### Scope

**1. Motion tokens — small additions to `src/styles.css` only**
- Add `motion-underline` utility for editorial text links (animated underline via `background-size` on `background-image`, grows left→right on hover, 200ms `--ease-standard`). Used by nav, footer, inline "See scope" style links.
- Add `motion-nav-link` utility: color transition + a 1px bottom rule that fades in on hover/active/`aria-current="page"`. 180ms.
- Tighten `motion-hover-lift` from `-2px` to `-1px` (more restrained, executive feel; current -2px reads as SaaS-generic).
- Add `motion-image-tilt` for interactive image tiles: `transform: scale(1.02)` on group hover, 300ms — replaces any ad-hoc image zoom.
- All new utilities honor the existing `@media (prefers-reduced-motion: reduce)` block (add the disable rules alongside the existing ones).

**2. Section entrance — `<Reveal>`**
- `<Reveal>` currently applies `motion-fade-up` on mount, not on scroll. Convert it to use `motion-reveal` + IntersectionObserver via the existing `useInView` hook so below-fold sections animate as they enter the viewport (rootMargin `-8% 0px`, threshold `0.15`, one-shot).
- Keep the same API (`as`, `delay`, `className`, `style`) so every current call site keeps working.
- Hero content stays on mount (no observer) — appears immediately.
- No changes to route files; existing `<Reveal>` wrappers are already placed at section granularity.

**3. Navigation — `src/components/site/SiteHeader.tsx`**
- Apply `motion-nav-link` to top-level nav items (already largely there; standardize class).
- Add a very subtle scroll state: after 12px scroll, header gets `backdrop-blur` + 1px bottom rule via a boolean class toggle (opacity crossfade, no size/position change → no layout shift). Reduced-motion: instant swap.
- Mobile menu: fade + 4px slide-in for the panel (200ms), already Radix-driven where applicable.

**4. Buttons & CTAs**
- `src/components/ui/button.tsx`: add `motion-cta` to the base class so every shadcn button inherits the -1px lift + shadow on hover, focus ring transitions smoothly. Kill any `hover:scale-*` if present.
- Hand-rolled anchor pills in `src/routes/index.tsx`, `PageHero`, `FooterCTA`, etc. already share a class shape — add `motion-cta` to those pills.
- Arrow-suffix links: ensure the arrow `<span>` carries `motion-arrow` inside a `group` (already the pattern in `EngagementTile`); apply to the other arrow-suffix links across `index.tsx`, `services.*`, `for-portfolios.tsx`, `for-companies.tsx`.

**5. Cards & tiles**
- `OutcomeTile`, `EngagementTile`, `OperatorProofCard`, `TriggerBento` items, pricing tier cards in `pricing.tsx`, comparison cards in `compare.*`: add `motion-hover-lift` where the card is a link/button and does not already have it. Non-interactive stat cards stay static (per brief).

**6. FAQ accordion — `src/components/ui/accordion.tsx`**
- Content already uses `animate-accordion-up/down` keyframes from `styles.css` (see `<animations>` context) — verify keyframes exist; if not, add opacity+height keyframes (200ms `--ease-standard`).
- Chevron: current `transition-transform duration-200` is fine; change to `duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)]` for consistency.
- Remove `hover:underline` on the trigger (feels un-premium); replace with color shift to `text-cream` via `motion-link`.

**7. Forms — `src/components/ui/input.tsx`, `textarea.tsx`, `select.tsx`, `checkbox.tsx`, `radio-group.tsx`**
- Add `motion-field` to base classes so border color + ring animate on focus (160–200ms). Keeps default focus ring; just softens the transition.
- Contact/Join form submit buttons: rely on `motion-cta` from button base. Success/error state already renders via a text swap — no motion added (per "don't animate validation in a distracting way").

**8. Operator/profile & proof**
- `OperatorProofCard`, `OperatorSpotlightRail` images inside a `group` link: add `motion-image-tilt` (1.02 scale, 300ms). Overflow-hidden wrapper already present in most; add where missing.
- Carousel arrows in `CaseSwitcher` / `Testimonials`: `motion-cta` for the control buttons.
- Stats in `StatsBand`: use `<Reveal>` at the group level, no count-up.

**9. Pricing & comparison**
- Pricing tier cards: `motion-hover-lift` on the linked ones only.
- "Most requested" accent stays visual (no motion).
- Compare table rows: add a faint `hover:bg-white/[0.02]` transition (150ms) only when the row is a link; leave prose rows static.

**10. Footer — `SiteFooter.tsx`**
- Apply `motion-link` / `motion-underline` to link groups. No section-entrance motion (footer stays quiet).

### Files touched

- `src/styles.css` — add 3 utilities, tune `motion-hover-lift`, extend reduced-motion block.
- `src/components/site/Reveal.tsx` — swap to IntersectionObserver via `useInView`.
- `src/components/site/SiteHeader.tsx` — nav-link class, scroll state.
- `src/components/site/SiteFooter.tsx` — link classes.
- `src/components/site/PageHero.tsx`, `FooterCTA.tsx` — CTA classes.
- `src/components/site/OutcomeTile.tsx`, `EngagementTile.tsx`, `OperatorProofCard.tsx`, `OperatorSpotlightRail.tsx`, `CaseSwitcher.tsx`, `Testimonials.tsx`, `TriggerBento.tsx`, `AudienceTabs.tsx` — hover/lift/arrow/image classes as needed.
- `src/components/ui/button.tsx`, `input.tsx`, `textarea.tsx`, `select.tsx`, `checkbox.tsx`, `radio-group.tsx`, `accordion.tsx` — base-class motion tokens.
- Route files that hand-roll pill anchors (`src/routes/index.tsx`, `for-portfolios.tsx`, `for-companies.tsx`, `pricing.tsx`, `services.*.tsx`, `contact.tsx`, `join.tsx`, `faq.tsx`) — add `motion-cta` / `motion-arrow` classes on existing elements. No structure changes.

### Out of scope

- New keyframes beyond what's needed for the underline and image-tilt utilities.
- Any layout, color, spacing, copy, or component structure change.
- Route-transition animations (would fight SSR + would delay content).
- Count-up numbers, parallax, scroll-linked transforms, marquee changes.

### QA

Playwright screenshots (desktop 1280, tablet 834, mobile 390) on: `/`, `/pricing`, `/about`, `/join`, `/faq`, `/contact`, `/privacy`, `/terms`. Verify: (a) no layout shift on hover, (b) console clean, (c) `prefers-reduced-motion: reduce` emulation strips transforms and leaves opacity swaps only, (d) header scroll state doesn't jump, (e) accordion open/close is smooth.
