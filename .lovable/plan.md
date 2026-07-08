
# De-templating pass across the Veep site

Goal: keep IBM Plex, the navy/indigo palette, and the current copy, but strip the mechanical Lovable rhythm out of every page. Ship a site that feels deliberately art-directed, editorial, and founder-led.

## What I saw in the audit

Screenshots at 1280 and 390 across home, pricing, services, how-it-works, faq, contact, about, for-companies.

Recurring ticks that repeat across every route:
- Same headline pattern everywhere: mono H2 in cream + indigo tail phrase. Six of them on the home page alone. Reads like a Mad Libs template, not writing.
- Same section chrome everywhere: uppercase indigo eyebrow → mono H2 → single line of stone subhead → grid of 3–4 cards → repeat. `py-24 md:py-32` on nearly every section (`Section` in `primitives.tsx`) creates one flat rhythm and huge dead vertical space.
- Same ornament: `bg-accent/10 blur-[140px] rounded-full` glow behind hero and footer CTA. Used on `PageHero`, `FooterCTA`, and interior hero variants. Generic AI glow.
- Cards are all the same object: `border border-white/10 bg-white/[…] rounded-lg`, thin, low contrast, uniform padding. Pricing tiles, engagement tiles, step tiles, objection tiles, testimonial tiles all read as the same component in different clothes.
- Mono for every heading at every size. IBM Plex Mono at h1, h2, h3, h4 with only tracking changes. Long headlines break awkwardly (mobile hero: `Sen<br>ior`, `an owner.` on its own line). Mono was meant as an accent system, not the whole voice.
- Ambient template callouts: "MOST COMMON" / "MOST REQUESTED" over one card in a 4-up. Classic SaaS-template flag.
- CTAs compete: nav "Book intro call" pill + hero "Book intro call" pill + section DualCTAs + `FooterCTA` + `StickyMobileCTA`. Same label, same visual weight, five surfaces.
- Nav overloaded on desktop: 6 hash anchors plus Pricing and FAQ, all identical weight.
- Mobile: hero badge wraps to 2 lines with ugly hyphenation, stat/proof cards balloon to full-height blocks, engagement cards stack into a 4-tall column with no comparison affordance, tracked eyebrows (`0.18em`) look shouty at 11px.
- Footer: two thin columns floating in a very wide band, wordmark + tagline dominates, links feel like an afterthought.

## Direction

Editorial, dense, high-contrast. Sans is the voice; mono is a mark. One hero moment per route, then denser, more varied bands. Cards earn borders only where they need to be discrete objects.

Guardrails (do not change):
- Brand palette (navy canvas, indigo accent, cream, stone tokens).
- IBM Plex family choice.
- All existing copy and route structure.
- Booking URL, contact intent, TanStack Start file-based routes.

## Changes

### 1. Typography system rewrite (`src/styles.css`)
- Body and running headings move to IBM Plex Sans. Mono becomes an accent only: eyebrows, numeric labels, one "signature" phrase per page.
- Introduce a real type scale with intent, not just size:
  - Display (hero H1 only): Sans, 500, -0.035em, 1.02.
  - H2 section head: Sans, 500, -0.025em, 1.08.
  - H3 card head: Sans, 500, -0.015em, 1.2.
  - Overline mono: Mono, 500, 0.14em, 11px, `text-accent` — used sparingly, not on every section.
  - Body large / body / caption: three sizes, no more.
- Kill the global `em / i / .italic { color: accent }` swap — it turns real emphasis into a colored token everywhere it appears, including inside body copy. Reserve the indigo tail for hero headlines only, applied explicitly.
- Add `text-wrap: balance` on H1/H2 and `text-wrap: pretty` on body to fix the "an owner." and "Sen ior" wraps.
- Remove global `text-white` / random utility color usage; keep everything on `cream / stone / stone-soft`.

### 2. Section rhythm rewrite (`primitives.tsx` → `Section`)
- Drop the single `py-24 md:py-32` default. Introduce three densities: `hero`, `dense` (py-16), `spacious` (py-28). Home alternates deliberately; interior pages default to `dense`.
- Remove the "always border-t border-white/10" top rule — use a rule only where two bands need explicit separation. Use tone contrast (canvas vs `panel` glass) as the primary separator.
- Kill the retired `index` / `category` mono chrome props from the signature — dead code.

### 3. Hero rework (`PageHero`, `src/routes/index.tsx` hero, `HeroVisual`)
- Remove the `bg-accent/10 blur-[140px]` glow from `PageHero` and `FooterCTA`. Replace with a single, subtle, hand-placed grain/gradient wash that is unique per page hero (home = operator card stack asymmetry; interior = editorial rule + oversized index number).
- Home hero: shorter top pad (mobile especially), asymmetric two-column with the operator cards spilling into the type column at desktop, single primary CTA, `See how it works` as a quiet text link — not two pills fighting.
- Interior heroes get a big serialized index (`01 / Pricing`), a real H1 in sans, one line of subhead, one CTA. No secondary "Request a capacity audit" ghost link on every page — keep it only on Pricing and Home.

### 4. Card system rework
- Replace the uniform `EngagementTile`, `OutcomeTile`, `ObjectionList` item, `OperatorProofCard`, `Testimonials` card with two real card variants:
  - **Data card** (pricing / engagement): no border, strong internal type hierarchy, numeric price gets its own mono display weight, "See scope →" becomes an inline underlined action, not a pseudo-link floating in the corner. Kill the "MOST COMMON / MOST REQUESTED" banner — mark the recommended tier via a left rule + label inline with the title.
  - **Editorial card** (proof, testimonials, objections): no border, uses a top hairline + generous baseline, quote sets in sans regular with proper hanging punctuation, attribution in mono caption.
- Standardize on one radius (`--radius: 0.5rem`) — remove per-component overrides. Buttons stay `rounded-full`, cards stay `rounded-lg`, inputs stay `rounded-md`. Nothing else.

### 5. Buttons, CTAs, hover/focus
- One primary style, one secondary, one tertiary link — codify in `primitives.tsx`.
- Add real hover states: primary CTA gets a subtle inset ring on hover, secondary gets a filled hover, tertiary link gets underline reveal. All get visible `:focus-visible` ring using `--ring`.
- Retire `StickyMobileCTA`. Nav CTA is enough on mobile; the sticky bar competes with in-content CTAs and hides the last section.
- Enforce label discipline: primary is always "Book intro call", never restyled per surface; secondary varies by page intent.

### 6. Navigation (`SiteHeader`)
- Split into two nav groups visually: product (Overview / How it works / Proof) and commercial (Pricing / FAQ). Group with spacing and a hairline, not identical link chips.
- On tablet, collapse hash anchors into a "Explore" disclosure; keep Pricing / FAQ / Book intro call visible.
- Mobile sheet: real hierarchy — primary routes large, secondary anchors smaller, CTA pinned to bottom.

### 7. Footer (`SiteFooter`)
- Regrid to 12-col: wordmark + tagline in 5, three link columns in 6, meta row full width. Tighten padding. Add a real contact block (email as a large link, not caps micro-text). Kill uppercase `0.14em` legal text — plain sentence case.

### 8. Mobile polish pass
- Hero badge: shorten to a single token + dot per page ("72-hour match"), not a 3-part sentence that wraps.
- Card stacks: cap max height, drop internal padding one step, and switch pricing to a horizontal swipe row on <640px so tiers stay comparable.
- Reduce `tracking-[0.18em]` eyebrows to `0.12em` at ≤14px; keep the wider tracking only at ≥16px.
- Fix the LogoWall marquee cutoff on mobile (edge fade mask).

### 9. Home page (`src/routes/index.tsx`) rhythm
Reorder for editorial pacing rather than uniform bands:
1. Hero (dense, asymmetric).
2. Logo wall — thin, no eyebrow.
3. What Veep is — single wide statement, no card, tight.
4. Trigger moments — bento with unequal cells (`TriggerBento` exists; enforce asymmetry).
5. Engagements — data cards, remove MOST COMMON banner.
6. How it works — horizontal step flow, numeric-forward.
7. Proof — editorial testimonial spread, one hero quote + two supporting, not a 3-up grid of equals.
8. Objections — single-column narrative, not tiled cards.
9. FooterCTA — smaller, single CTA, no glow ornament.

### 10. Cleanup
- Remove dead exports in `primitives.tsx` (`MockPanel`, `FloatingChip`, retired props).
- Remove unused `border-t first:border-t-0` chain now that `Section` handles rules explicitly.
- Add a `text-balance` utility and apply on all H1/H2.

## Out of scope
- No new routes, no copy rewrites beyond CTA label discipline, no illustration redraws (the pyramid + operator cards stay), no palette change, no font swap outside Sans/Mono role reassignment.

## Verification
After changes, re-capture the same 8 routes at 1280 and 390, review side-by-side against the current screenshots, and confirm: reduced repetition of the mono+accent headline pattern, no `bg-accent/10 blur` ornament outside one intentional use, single primary CTA per surface, cards visibly differentiated between data and editorial variants, mobile hero fits above the fold with no awkward wraps.
