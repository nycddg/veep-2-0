
# Production Cleanup & Live-Site Audit — veep.work

A scoped, restrained pass. No redesign. No new decorative effects. No brand-direction changes. Fix only what's genuinely broken, inconsistent, or launch-blocking.

## Phase 1 — Route inventory & redirect audit

Enumerate every file in `src/routes/`, classify as: **live page**, **legacy redirect**, **anchor redirect**, or **stale/orphan**.

Preserve as live: `/`, `/pricing`, `/about`, `/join`, `/faq`, `/privacy`, `/terms`, `/contact`, `/meetveep`, `/for-portfolios`.

Verify each of these redirect files still points somewhere sensible (spot-check ~30 legacy Wix routes like `/blog`, `/team`, `/agencies`, operator slugs, `/services/*`, `/compare/*`, `/en`, `/sg`, `/copy-of-*`, `/memberdashboard`, `/insights`, `/officehours`, `/operatingpartners`, `/partners`, `/fractional`, `/fundraising`, `/get-started`, `/how-it-works`, `/operators`, `/for-companies`, `/copyright`, `/post/*`, `/index-legacy`).

Flag any orphaned files (e.g. `index-legacy.tsx` — confirm intent, likely delete or convert to redirect).

Confirm `sitemap.xml` matches the live set (currently correct — 10 entries).

## Phase 2 — Header/nav on subpages

`SiteHeader` renders 5 hash links (Overview / Operators / Benefits / How it works / Proof) that all point to `/#hash`. On subpages these work via TanStack `Link to="/" hash=`. Verify scroll target IDs exist on the homepage for each. Fix any that silently fail.

## Phase 3 — Copy & HTML-artifact scrub

Grep the whole repo for:
- literal `&nbsp;`, `&amp;`, `&#`, stray HTML entities in JSX text
- double spaces in JSX string literals
- `--` where an em dash was intended
- `spellcheck-` fragments
- broken apostrophes (`&#39;`, straight quotes where curly were used inconsistently)

Fix in place without changing meaning.

## Phase 4 — Visual polish (restrained)

Only fix clear inconsistencies. Targets:
- footer spacing across pages (`SiteFooter` is shared — spot check container padding on mobile)
- CTA label consistency: canonical set = "Book intro call", "Request a capacity audit", "See how it works", "See full pricing", "Apply below", "Submit application". Rename outliers.
- CTA button treatment: primary = cream pill; secondary = underlined link. Flag hand-rolled variants.
- Weak text: any `text-white/40` or lower on small copy → bump to `/60` minimum.
- Mobile: audit `PageHero`, `FooterCTA`, pricing tier grid, operator rail for wrap/overflow.
- Awkward line breaks on section headers at md/lg widths (already partially addressed in previous passes).

Explicitly out of scope: adding cards, gradients, glows, glass, new decorative art.

## Phase 5 — Page QA passes

**Home (`/`)**: verify each of the 15 sections listed renders, has correct anchor ID, and no console errors. Check operator carousel controls, comparison table on mobile (horizontal scroll or stack), mini FAQ accordion.

**Pricing**: verify tier alignment, "See scope" behavior, portfolio callout link, pricing FAQ (already scrubbed for `&nbsp;` in prior pass — reverify).

**About**: hierarchy, founder card spacing, CTA copy.

**Join**: form audit — required fields, email/LinkedIn regex, resume file type/size, focus rings, error/success/failure states, honeypot, duplicate-submit guard, submission destination (Wix Application server fn), consent language.

**FAQ**: accordion keyboard access, group spacing, long-answer readability.

**Privacy/Terms**: verify live, readable, no legacy marketplace/consultant language.

**Contact**: reverify hardening from prior pass (aria-invalid, focus mgmt, honeypot).

## Phase 6 — Footer

Verify: logo → `/`, email `mailto:`, every column link resolves, copyright year = 2026, mobile spacing.

## Phase 7 — SEO & metadata

Per-route confirm: `title`, `description`, `og:title`, `og:description`, `og:url`, `canonical` (leaf only), `og:image` via `ogImageMeta()`. Titles match user's spec:
- Home: `Veep | Senior Operators for Work That Can't Wait`
- Pricing: `Pricing | Veep`
- About: `About | Veep`
- Join: `Join Veep | Operator Network`
- FAQ: `FAQ | Veep`

Verify `robots.txt`, `sitemap.xml`, favicon, single H1 per page, heading hierarchy, meaningful alt text.

Run `seo_chat--trigger_scan` at end.

## Phase 8 — A11y

Check color contrast on `text-cream/60` and lower against `--bg`. Verify focus rings present on all interactive elements. Icon-only buttons have `aria-label` (spot check `SiteHeader` menu button, `ThemeToggle`, carousel controls). Accordion uses proper ARIA (shadcn primitive — already correct).

## Phase 9 — Perf & console

Load each page in preview, capture console errors/warnings, network 404s. Verify below-fold images use `loading="lazy"`. Check for layout shift on hero.

## Phase 10 — Final report

Deliver a structured report covering: routes found, preserved, redirected, intentionally not redirected, broken links fixed, form issues fixed, SEO items completed, remaining launch risks.

---

## Technical notes

- Route tree lives in `src/routes/`; `routeTree.gen.ts` is generated.
- Shared metadata helper is `src/lib/seo.ts` (`ogImageMeta()`).
- Form submission uses `src/lib/wix-application.functions.ts` and `wix-contact.functions.ts`.
- Theme tokens in `src/styles.css` — do not add new ones.
- No new dependencies. No new components unless replacing a broken one.

## Estimated scope

~15–25 file edits across routes, `SiteHeader`, `SiteFooter`, `PageHero`, form primitives, and metadata blocks. No schema, no server-function changes unless a form bug is found.

## Confirmation needed before build

1. **`index-legacy.tsx`** — delete, or leave as-is?
2. **Wix form submission** — do you want me to actually submit test payloads through Playwright, or only static/code review?
3. **Console/network audit** — run Playwright against every live route (adds time), or spot-check homepage + join only?
