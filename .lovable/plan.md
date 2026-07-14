
# Production cleanup & launch audit — veep.work

Scope: no redesign, no brand change. Fix bugs, routing, metadata, forms, a11y, polish. Preserve current dark editorial system, IBM Plex Sans/Mono, no italics, weights 400–600.

## 1. Route & redirect audit

Enumerate every file in `src/routes/` and classify as **live**, **redirect**, or **stale**.

Preserve (live, no redirect): `/`, `/pricing`, `/about`, `/join`, `/faq`, `/privacy`, `/terms`, `/for-portfolios`, `/meetveep`, `/contact`, `/services*` (currently live, needs decision — see Open Questions), `/compare*`, plus operator profile pages that are currently rendered (audit each; several are already redirects).

Confirm already-redirecting legacy routes still 302→`/`: `/service`, `/roster`, `/team`, `/get-started`, `/book`, `/fractional`, `/fundraising`, `/sprints`, `/operatingpartners`, `/scale-diagnostic`, `/businessos`, `/subscribe`, `/webinar`, `/blog`, `/post/*`, `/agencies`, `/officehours`, `/home`, `/en`, `/sg`, `/index-legacy`, `/how-it-works`→`/#how`, `/operators`→`/#operators`, `/proof`→`/#proof`, `/partners`→`/#portfolios`, `/for-companies`→`/#solution`, `/insights`→`/`.

Add redirects for any remaining stale files with no purpose (e.g. `copy-of-*`, `memberdashboard`, `copyright`, `en`, `sg`, `index-legacy`, `index[.]html`) — either redirect to `/` or delete the route file.

Reconcile `sitemap.xml` `entries[]` with the final live-route list; remove any entry that is actually a redirect.

## 2. Nav on subpages

`SiteHeader` renders hash links (Overview, Operators, Benefits, How, Proof) as `<Link to="/" hash="…">` — verify these navigate home + scroll on subpages. Confirm scroll restoration and hash handling work; add `resetScroll` handling if needed.

## 3. Live-site verification (public domain)

Fetch each of these via curl and inspect response headers + HTML:
- `https://veep.work/` and `https://www.veep.work/` → confirm one canonical, other 301s
- `/pricing`, `/about`, `/join`, `/faq`, `/privacy`, `/terms`
- A sample legacy redirect (`/blog`, `/post/…`)
- `/sitemap.xml`, `/robots.txt`

Confirm SSL, no Wix HTML/nav/meta leaking, no builder artifacts.

## 4. Visible copy artifacts

Grep entire `src/` for `&nbsp;`, `&amp;`, doubled spaces, unbalanced quotes, stray dashes. Known: pricing page portfolio callout contains `&nbsp;` inside JSX text (renders literally). Replace with real spaces or `{"\u00a0"}`.

## 5. Visual polish pass (restrained)

Per page (`/`, `/pricing`, `/about`, `/join`, `/faq`, `/for-portfolios`, `/privacy`, `/terms`, `/contact`):
- section vertical rhythm consistency (`py-20 md:py-28` baseline)
- small text contrast (`text-cream/70` and below → bump where WCAG < 4.5)
- CTA label + spacing consistency (see §7)
- mobile wraps: check breakpoints 375/414/768
- footer spacing parity across pages

No new gradients, cards, glows, weight changes.

## 6. Homepage QA (`src/routes/index.tsx` + section components)

Walk through hero → footer sections. Fix: anchor scroll on load, active nav underline behavior, carousel controls if present (OperatorSpotlightRail, Testimonials, CaseSwitcher), image aspect-ratio containers, stats alignment (StatsBand), comparison table mobile overflow, FAQ accordion keyboard, final CTA hierarchy.

## 7. CTA label audit

Normalize wording across the site to the approved set:
- "Book intro call"
- "Request a capacity audit"
- "See how it works"
- "See full pricing"
- "Apply below"
- "Submit application"

Grep for variants ("Book a call", "See pricing", "Apply now") and standardize.

## 8. Pricing page

Fix `&nbsp;` in portfolio callout. Verify tier alignment (already uses fixed-height label slot). Confirm "See scope →" links resolve — `/services#advisory|sprint|operator|pod`; verify `services` route renders those anchors.

## 9. About page

Read `src/routes/about.tsx`. Check founder card spacing parity, hero hierarchy, CTA copy consistency, image alt text.

## 10. Join / application form (launch-critical)

Read `src/routes/join.tsx` and `src/lib/wix-application.functions.ts`. Verify:
- required-field validation, email + LinkedIn URL regex, resume file-type + size limit
- keyboard nav, visible focus rings, error/success/loading/failure states, duplicate-submit guard
- submission destination + notification path
- consent/privacy language
- mobile layout

Fix any gaps; add zod schema if missing.

## 11. FAQ page

Accordion: keyboard (Enter/Space/arrow), `aria-expanded`, focus-visible; anchor-to-item on load if `#slug` present; spacing between groups; readable answer contrast.

## 12. Footer

Standardize `SiteFooter` across all pages: logo→`/`, mailto, Explore + Details columns, Privacy, Terms, © year (dynamic), consistent spacing, mobile stack.

## 13. SEO & indexing

Per-route `head()`: title, description, canonical, og:title/description, twitter card, one H1. Recommended titles:
- `/`  Veep | Senior Operators for Work That Can't Wait
- `/pricing`  Pricing | Veep
- `/about`  About | Veep
- `/join`  Join Veep | Operator Network
- `/faq`  FAQ | Veep

Verify `sitemap.xml` matches live routes, `robots.txt` allows all, favicon present, JSON-LD Organization on `__root`.

## 14. Accessibility

Contrast audit on `text-cream/60`–`/70` and `text-stone-soft`. Focus rings on all interactive elements. Button vs link semantics. Form labels + `aria-invalid`. Alt text on operator/hero images. Accordion ARIA. `prefers-reduced-motion` respected in Reveal/Marquee.

## 15. Performance

- lazy-load below-fold operator headshots (`loading="lazy" decoding="async"`)
- confirm no full-page CLS from font swap (Plex loaded via `<link>` in `__root`)
- prune unused route files (see §1)
- console clean: check for the SSR hydration warning already visible (`data-tsd-source` mismatch on `<html>` in `__root.tsx`) — investigate; may be dev-only artifact from the source-map plugin, but confirm it doesn't ship to prod

## 16. Final report

Deliver a summary: live routes, redirects added/verified, links fixed, form issues fixed, SEO/metadata completed, remaining risks.

---

## Technical execution order

1. Route inventory + redirect/delete stale files → update `sitemap.xml`
2. Fix `&nbsp;` + copy artifacts (fast pass)
3. Per-route `head()` audit (metadata)
4. Join form hardening (highest launch risk)
5. FAQ + homepage a11y/keyboard
6. Footer/CTA normalization
7. Visual polish + contrast bumps
8. Public-domain curl verification
9. Console/network sweep on live preview
10. Final report

## Open questions

1. **`/services`, `/services/*`, `/contact`, `/meetveep`, `/for-portfolios`, `/compare`** — these are currently live pages. Keep all live, or redirect any of them to `/` for launch?
2. **Operator profile routes** (`alasdairlloydjones`, `elainebogart`, `erikavelazquez`, `jenniferkasper`, `jianyang`, `seanpark`, `victoriakasumu`, `andrewsilver`, `davegarcia`, `lauramerling`, `marknewhouse`, `munawarahmed`) — keep as public profile pages, or redirect to `/`?
3. **Contact form** on `/contact` — same production-grade treatment as `/join`, or leave as-is?
4. `og:image` — none currently set on leaf routes. Generate a branded social card, or leave to hosting default?
