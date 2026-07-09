
## Goal

Raise execution quality across the entire site without changing brand direction. Result: a site that reads as deliberately art-directed — restrained, editorial, founder-led — not templated.

## Scope

All 20+ routes under `src/routes/` and every component in `src/components/site/`, audited at desktop, tablet, and mobile.

## 1. Typography system (global, in `src/styles.css`)

Codify one system so pages stop inventing sizes.

- **Weight ceiling.** Force weights to `400` (default), `500` (headings/emphasis), `600` (only where truly needed — CTAs, price figures). Sweep every component and remove `font-bold`, `font-semibold` above 600, `font-extrabold`, `font-black`, and any inline `font-weight: 700+`. Base `strong/b` stays 500 (already correct).
- **Italics.** Global `em/i/.italic { font-style: normal }` already set — additionally strip any lingering `italic` utility classes in JSX so intent is visible in source.
- **Type scale.** Lock a small ladder (roughly): display 56/64/72, h1 40/48, h2 32/36, h3 22/26, h4 18/22, body 16/26, small 14/22, mono-caption 11/16. Replace ad-hoc `text-[Npx]` and inconsistent `text-2xl/text-3xl/text-4xl` mixes with this ladder.
- **Mono role.** Reserve IBM Plex Mono for: eyebrows, section indices, numeric figures (prices/stats), one signature phrase per page. Remove mono from paragraph body, nav, buttons, and captions where it's leaked in.
- **Tracking.** Cut noisy uppercase tracking (`0.18em`+) down to `0.12–0.14em` for eyebrows, `0.08em` for small caps labels. Remove uppercase entirely from anything longer than ~4 words.
- **Leading.** Standardize: display `1.02–1.06`, h2/h3 `1.1–1.2`, body `1.55–1.65`, small `1.5`.
- **Wraps.** `text-balance` on all h1/h2 (already default). Add `text-pretty` to lead paragraphs. Hard-audit hero headlines at 375/414/768 px for orphans and add `<br class="hidden md:block">` where wraps are genuinely awkward — but delete existing decorative `<br>`s that harm mobile.
- **Numerics.** All prices, stats, KPIs use `stat-figure` utility (tabular-nums, mono, -0.02em). Sweep for one-off number styling.

## 2. Component pass (`src/components/site/`)

Normalize the shared vocabulary first, then routes inherit it.

- **`SiteHeader`** — even nav item spacing, single hover treatment, consistent CTA sizing with route buttons.
- **`SiteFooter`** — column widths on a grid, consistent label style (mono 11), one link hover, no italics.
- **`PageHero`** — one hero rhythm (eyebrow → h1 → lead → CTA row → optional meta). Same top/bottom padding tokens on every page.
- **`primitives.tsx`** (Button/Badge/Card/Section) — audit variants: same radius (`rounded-md` primary, `rounded-full` pills only for chips), same border weight, same padding scale, same focus ring, no shadow-loud states.
- **`OperatorProofCard`, `EngagementTile`, `OutcomeTile`, `TriggerBento`** — equal card heights via grid rows, uniform inner padding (24/28/32), uniform meta row (mono caption + hairline), remove decorative flourishes that don't earn their place.
- **`Testimonials`** — hero quote already refined; verify supporting quote rhythm, remove any residual bold.
- **`StatsBand`, `LogoWall`, `Marquee`, `TrustChip`** — one label style, one figure style, consistent gap tokens.
- **`CompareTable`, `CaseSwitcher`, `AudienceTabs`, `ObjectionList`, `StepFlow`** — align cell padding, tab underline weight, list marker rhythm.
- **`FooterCTA`** — one final-CTA pattern reused across routes.

## 3. Route pass (`src/routes/`)

For each route: verify hero rhythm, section spacing tokens, CTA hierarchy, mobile stack, meta accuracy.

Routes in scope: `index`, `pricing`, `proof`, `about`, `services*` (5), `for-companies`, `for-portfolios`, `operators`, `partners`, `how-it-works`, `insights`, `faq`, `contact`, `compare*` (3).

Section spacing tokens: `py-24 md:py-32` for major bands, `py-16 md:py-20` for secondary bands, `gap-8 md:gap-12` for grids, `space-y-4` for prose blocks. Replace ad-hoc paddings.

## 4. Hierarchy + conversion

- Every section: one primary focal point (headline), one secondary (lead), one action (CTA or proof link). Demote everything else with color/scale.
- CTAs: two variants only — primary (cream on ink) and ghost (cream outline). Same height, same padding, same radius everywhere. Kill any third variant.
- Pricing: strengthen the recommended tier via border/scale, not color noise. Align feature-row baselines.
- Proof: portrait-led operator cards (already in), keep visual weight consistent across the row.

## 5. Responsive audit

Manually verify at 375, 414, 768, 1024, 1280, 1440. Fix: hero wraps, pricing card stack, portfolio grid collapse, nav overflow, footer column stack, form field widths, CTA row wrap. Mobile spacing goes tighter (`py-16` bands, `gap-6` grids) but never cramped.

## 6. Verification

- Grep sweep for banned tokens: `font-bold`, `font-extrabold`, `font-black`, `font-semibold` (case-by-case → 500), `italic`, `font-weight: 7`, `font-weight: 8`, `font-weight: 9`.
- Typecheck.
- Playwright screenshots at 3 breakpoints for `/`, `/pricing`, `/proof`, `/services`, `/for-companies`, `/about` — review, iterate on any regressions.

## Technical notes

- One PR-sized batch of edits: styles.css tokens first, primitives second, then components, then routes. Each layer inherits from the previous so changes compound cleanly.
- No new dependencies. No new colors. No new fonts.
- `Note:` the brief mentions "IBM Plex Mono headlines" but the current design system uses IBM Plex Sans for headlines and Mono as a supporting mark. I'll keep the Sans-headline direction (matches current CSS + brand memory) and make Mono feel deliberate in its reserved roles (eyebrows, indices, figures, one signature phrase per page). If you actually want mono headlines, say so and I'll re-plan the type system.

## Out of scope

Copywriting, information architecture changes, new sections, new illustrations, backend, and analytics.
