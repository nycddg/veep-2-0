## Production cleanup & launch audit for veep.work

A restrained, non-redesign pass focused on stability, correctness, SEO/indexing, accessibility, forms, redirects, and small visual polish. No changes to typography, color system, layout language, or brand direction.

### 1. Route inventory & nav integrity
- Enumerate every file in `src/routes/` and classify as: **live page**, **legacy redirect → /**, or **section redirect → / with hash**.
- Confirm current live pages stay live: `/`, `/pricing`, `/about`, `/join`, `/faq`, `/privacy`, `/terms`, plus any operator profile routes and `/meetveep` (campaign, intentionally out of nav).
- Audit `SiteHeader` nav on subpages: hash items (Overview / Operators / Benefits / How it works / Proof) already point to `to="/" hash="…"` — verify each anchor exists on the homepage. Fix any missing IDs.
- Verify every internal `<Link>` and `<a>` target resolves. Kill dead links.

### 2. Legacy Wix redirects
- Cross-check the candidate legacy path list against `src/routes/`. Any missing legacy path that could still be indexed (e.g. `/services`, `/contact`, `/book`, `/blog`, `/team`, `/home`, `/index`, `/index.html`, `/meetveep` is NOT redirected — it's a live campaign page, so exclude it, plus `/post/$` splat for old blog post URLs) gets a small `beforeLoad → redirect({ to: "/" })` file.
- Do NOT redirect `/pricing`, `/about`, `/join`, `/faq`, `/privacy`, `/terms`, `/meetveep`, or any operator profile page.
- Add a splat catch (`src/routes/$.tsx` or rely on `notFoundComponent`) so unknown URLs render the branded 404 — not a redirect (keeps `/foo` from silently masking real bugs).

### 3. Public-domain verification
- Fetch `https://veep.work/`, `https://www.veep.work/`, `/pricing`, `/about`, `/join`, `/faq` and confirm: correct canonical host, clean 301 from the non-primary, valid SSL, no residual Wix HTML/metadata/nav in the served source.
- If stale Wix content shows up publicly, diagnose (DNS, old deploy, cached CDN) and report — fixes may be outside code.

### 4. SEO & head metadata
- Ensure each live route defines its own `head()` with route-specific title + description + `og:title` + `og:description` + `og:url` + canonical (leaf only). Titles:
  - Home: `Veep | Senior Operators for Work That Can't Wait`
  - `/pricing`: `Pricing | Veep`
  - `/about`: `About | Veep`
  - `/join`: `Join Veep | Operator Network`
  - `/faq`: `FAQ | Veep`
  - `/privacy`, `/terms`: appropriate titles.
- `og:image` only on leaf routes; keep the current absolute image where already set. Never on `__root`.
- Verify `sitemap.xml` route lists every current public route (and excludes noindex/campaign routes like `/meetveep`). Verify `robots.txt` allows crawling and references the sitemap.
- Confirm one `<h1>` per page and sensible heading hierarchy.

### 5. Visible copy & entity artifacts
- Fix the visible `&nbsp;` artifact in the pricing FAQ ("Pod.&nbsp;").
- Grep the whole codebase for `&nbsp;`, stray `&amp;`, doubled spaces, unclosed quotes, malformed em/en-dashes, missing spaces after punctuation.
- Normalize CTA labels sitewide to the approved set: Book intro call, Request a capacity audit, See how it works, See full pricing, Apply below, Submit application.

### 6. Page-level QA passes (small, targeted fixes only)
For each of `/`, `/pricing`, `/about`, `/join`, `/faq`, `/privacy`, `/terms`:
- Walk the page in the preview (desktop + mobile viewport via Playwright), screenshot key sections.
- Fix only: broken anchors, spacing regressions, low-contrast text on our dark palette, mobile wraps, awkward line breaks, uneven card rhythm, missing focus rings, misaligned CTAs, image cropping bugs, section-anchor targets that don't exist.
- Do NOT introduce new decorative effects, gradients, glassmorphism, or heavier weights.

### 7. Join form hardening
- Verify required-field validation, email format, LinkedIn URL format, resume upload (accepted types + size limit), keyboard nav, focus states, loading/success/error states, duplicate-submit guard, consent copy.
- Confirm submission destination and any notification wiring; if the form currently just posts to a placeholder, flag it in the report rather than silently "fixing" it.

### 8. Footer standardization
- Confirm identical footer on every route: logo → `/`, `mailto:hello@veep.co`, working Explore/Details/Operators/Join/Privacy/Terms links, correct copyright year (2026), consistent spacing across breakpoints.

### 9. Accessibility & performance
- Icon-only buttons get `aria-label`s; verify existing ones (menu toggle already labelled).
- Alt text on all meaningful images (operator headshots, wordmark).
- Contrast check on `text-cream/60`, `/70`, `/80` variants against `bg-background` — bump the lowest tier where it fails AA on body copy.
- Lazy-load below-the-fold images; keep hero eager. Check `console` and network for errors/404s.

### 10. Final written report
Deliver a summary listing: live routes found, preserved routes, legacy redirects added, routes intentionally not redirected, broken links fixed, form issues fixed, SEO items completed, and any remaining launch risks (esp. anything only fixable via DNS / hosting).

---

### Technical notes
- All route work stays in `src/routes/`; do not touch `src/routeTree.gen.ts`.
- Public-domain checks use `curl` / `fetch_website` for headers + HTML, plus Playwright for rendered snapshots.
- Legacy redirect files use the existing pattern:
  ```ts
  export const Route = createFileRoute("/old-path")({
    beforeLoad: () => { throw redirect({ to: "/", replace: true }); },
  });
  ```
- Meta/head edits follow the per-route `head()` pattern already in `__root.tsx` and `meetveep.tsx`.
- No dependencies added; no design tokens changed; no new components introduced unless required to fix a concrete bug.

### Out of scope (explicitly)
- Brand redesign, new sections, new illustrations, gradient/glow effects, font-weight increases, replacing IBM Plex, bento-card refactors, copy rewrites beyond artifact/typo fixes.
