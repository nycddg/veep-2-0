# Typography discipline sweep

Full-site retune to enforce the new type contract: IBM Plex Mono for display, IBM Plex Sans for UI/body, weights capped at 500 with 600 reserved for the strongest emphasis, no italics, no 700+, hierarchy from size/spacing/color — not weight.

## Baseline (styles.css)

- Add `@font-face`/preconnect requests for Plex weights **300, 400, 500, 600** only (drop 700 from the current Google Fonts href in `__root.tsx`).
- Global rules in `@layer base`:
  - `body`: `font-family: var(--font-sans); font-weight: 400; letter-spacing: -0.005em; line-height: 1.55` (already close).
  - `strong, b`: `font-weight: 500` (kill browser default 700).
  - `h1`: mono, weight 500, tracking `-0.03em`, leading 1.05.
  - `h2`: mono, weight 500, tracking `-0.02em`, leading 1.1.
  - `h3, h4`: mono, weight 500, tracking `-0.015em`, leading 1.15.
  - Existing italic override kept (no visual italic anywhere; accent color still communicates emphasis).
- New `@utility` set to standardize labels:
  - `eyebrow` — mono, 10–11px, weight 500, tracking `0.18em`, uppercase.
  - `meta-label` — mono, 11px, weight 400, tracking `0.14em`, uppercase, `text-stone-soft`.
  - `stat-figure` — mono, weight 500, tracking `-0.02em`, tabular-nums.

## Class-level cleanup (grep-driven)

- Replace every `font-bold` / `font-extrabold` / `font-black` / `font-semibold` in `src/components/site/**` and `src/routes/**` with `font-medium` (500). Retain `font-medium` where hierarchy needs it; strip it from body paragraphs and helper text so 400 is the default.
- Drop all `italic` classnames (they already render upright via CSS reset — but the class hints wrong intent). Remove from JSX so intent matches output.
- Tighten uppercase tracking: `tracking-[0.25em]` → `tracking-[0.18em]`, `tracking-widest` on 10–11px mono → `tracking-[0.14em]` for readability.
- Rebalance leading:
  - Display headings: `leading-[1.05]` (h1/large h2) or `leading-[1.1]` (medium h2/h3). Remove `leading-tight`/`leading-snug` scatter — pick one per scale tier.
  - Body paragraphs: `leading-relaxed` (1.625) stays for long copy; card descriptions move to `leading-[1.55]` for tighter rhythm.
- Numeric emphasis: add `tabular-nums` + `tracking-tight` to price/stat blocks so mono figures line up in grids.

## Component pass (rendered surfaces only)

Scope stays on files that actually render today; the stub routes and unused components (`StatsBand`, `Marquee`, `AudienceTabs`, `CompareTable`, `CaseSwitcher`, `TriggerBento`, `OutcomeTile`) are skipped this pass.

- `PageHero`, `SiteHeader`, `SiteFooter`, `StickyMobileCTA`, `TrustChip`, `FooterCTA`
- `EngagementTile`, `OperatorProofCard`, `ObjectionList`, `StepFlow`, `Testimonials`, `LogoWall`
- `src/routes/index.tsx`, `pricing.tsx`, `for-portfolios.tsx`, `contact.tsx`, `faq.tsx`, `__root.tsx`

For each, verify: eyebrow tracking, headline weight/leading, body weight = 400, price/stat uses mono + tabular-nums, CTA labels = `font-medium` max, no `italic` class, no `font-serif` mismatch (the alias points at Mono — kept for continuity, no rename).

## Rhythm and density

- Cards: standardize inner padding (`p-7`), eyebrow → title gap `mt-4`, title → body gap `mt-3`, body → footer gap `mt-auto pt-8`.
- Section vertical: `py-24 md:py-32` stays; kill the one-off `py-20`/`py-28` outliers on hero/objection sections so bands read as a series.
- Hero: subheadline max-width `max-w-xl` on home, `max-w-2xl` on interior pages; consistent `mt-8` between headline and sub.
- Pricing tiles + engagement tiles: unified min-height `min-h-[320px]`, consistent price row (mono, 500, `tracking-tight`, `tabular-nums`).

## Verification

- `bun run build:dev` clean.
- Playwright screenshots at 1280×1800 and 390×1600 for `/`, `/pricing`, `/for-portfolios`, `/contact`, `/faq`.
- `rg -n "font-(bold|extrabold|black|semibold)|\bitalic\b|tracking-\[0\.25em\]"` returns nothing in `src/routes` + `src/components/site`.
- Visual check: uppercase labels legible, mono headlines feel intentional (not spaced-out), body reads calm at 400.

## Out of scope

- No copy changes (last sweep is authoritative).
- No color/palette edits.
- No new components, no layout restructuring beyond spacing tokens.
- Stub routes and unused components untouched.
