## Goal

A launch-polish pass over the live site. No redesign, no rewrite, no new claims. Verify first, fix only what is actually loose, faint, inconsistent, or broken, then report.

## What I already confirmed (pre-plan reads)

- Global type guards exist in `src/styles.css`: `font-bold/extrabold/black` and `font-semibold` are all clamped to weight 500, and `em, i, .italic` are forced to `font-style: normal`. So no 700–900 weights and no italics ship today.
- `/privacy` and `/terms` already carry title, description, `og:title`, `og:description`, `og:type`, `og:url`, and canonical.
- Legacy Wix-era routes (`/home`, `/agencies`, `/officehours`, `/memberdashboard`, `/copy-of-*`, `/index-legacy`, operator-name routes, `/services.*`) all resolve to redirects into `/` or a homepage anchor.

Everything else below is unverified and will be checked before it is changed.

## Approach

Each phase = audit with real signals (route crawl, DOM/computed-style reads, headless browser at 3 viewports), then a narrow set of edits. Nothing gets "fixed" that a check didn't flag.

### Phase 1 — Route + link crawl
Enumerate routes from `src/routeTree.gen.ts`. Request each: expect 200 for live pages, correct redirect target for legacy ones. Extract every `<a href>` / `<Link to>` in the codebase and confirm each target exists. Confirm homepage-anchor links from subpages route to `/#anchor` and land. Confirm no Wix URLs remain anywhere.

### Phase 2 — Copy proofread
Dump all user-facing strings per page and read them end to end: typos, grammar, punctuation, capitalization consistency, doubled/missing spaces, raw entities, apostrophe/quote characters, hyphen vs en-dash vs em-dash, service naming, CTA label collisions, unfinished-sounding lines. Includes nav, buttons, form labels, validation and success messages, FAQ answers, footer, legal pages, and all metadata strings. Fixes are corrections only — no new claims, metrics, names, or guarantees.

### Phase 3 — Typography
Sample computed styles for headings, body, eyebrow/mono labels, small print, and footer at desktop and mobile. Flag: inconsistent leading/tracking for the same role, over-tracked mono labels, body or footer text below comfortable contrast on the dark canvas, headline wraps that break at bad points, cramped multiline headings. Fix by normalizing to the existing scale — no new type styles.

### Phase 4 — Spacing, alignment, and edge discipline
Screenshot each page at desktop/tablet/mobile. Compare section vertical rhythm, container max-widths, grid gaps, card padding, radii, and border/divider treatment across pages. Tighten outliers to the dominant existing value. No new decorative elements.

### Phase 5 — Component consistency
Normalize nav + active states, primary/secondary buttons and their CTA arrows, text links, cards and rows, pricing columns, FAQ accordions, and every form control (input, select, checkbox, radio, file upload, error and success blocks), plus footer link groups — so repeated components share one set of tokens and behaviors.

### Phase 6 — Interaction and motion
Check hover, focus-visible, active, disabled, and loading states on every interactive element. Confirm nothing non-interactive looks clickable and vice versa. Confirm transitions are short and don't shift layout, and that `prefers-reduced-motion` disables/reduces the reveal and tilt effects.

### Phase 7 — Forms (`/contact`, `/join`)
Drive both forms headlessly: empty submit, invalid email, invalid LinkedIn URL, oversized/wrong-type resume, valid submit. Verify required-field marking, inline error text, loading state, duplicate-submit lock, success state, keyboard-only completion, visible focus, and mobile layout. Confirm submissions still reach the existing destination.

### Phase 8 — SEO and metadata
Per live route, assert title, description, canonical, `og:title`/`og:description`/`og:image`/`og:type`/`og:url`, twitter tags, favicon, exactly one `<h1>`, and sane heading order. Confirm redirect-only routes stay out of the sitemap, sitemap covers every indexable page, and `robots.txt` doesn't block anything live.

### Phase 9 — Accessibility
Contrast-check text, buttons, links, and borders in both themes. Verify keyboard order and visible focus, form label association, aria on accordions and icon-only controls, image alt text, and ≥44px tap targets on mobile.

### Phase 10 — Performance and hygiene
Collect console errors/warnings, failed asset requests, and oversized images. Remove unused imports and dead components. Confirm images have dimensions or aspect wrappers so nothing shifts on load. Check the build for warnings.

### Phase 11 — Responsive
Sweep 390 / 768 / 1440 / 1920 for horizontal overflow, headline wraps, CTA stacking, pricing and comparison table readability, footer layout, nav behavior, clipped content, and oversized mobile gaps.

### Phase 12 — Report
Report by category: pages audited; copy fixes; design polish; routing/link fixes; form fixes; SEO fixes; a11y fixes; performance fixes; remaining launch risks.

## Technical notes

- Verification uses headless Chromium against the running dev server plus direct HTTP checks, not eyeballing source.
- All color/spacing changes go through existing semantic tokens in `src/styles.css`; no hardcoded hex or `text-white`/`bg-black` utilities.
- `src/routeTree.gen.ts` is generated and will not be edited.
- Expectation setting: several earlier passes already covered metadata, redirects, mobile CTA sizing, light-mode contrast, and `&nbsp;` artifacts. This pass may confirm large parts are already clean — I'll report that honestly rather than churn files to look busy.
