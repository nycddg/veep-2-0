# Production launch pass — remaining work

Decisions from you:
1. Keep `/services*`, `/contact`, `/meetveep`, `/for-portfolios`, `/compare*` all live.
2. Redirect all 12 operator profile routes to `/#operators` (operator spotlight anchor).
3. Harden `/contact` form to the same standard as `/join`.
4. Generate one dark editorial `og:image` sitewide.

## 1. Route cleanup

- Point 12 operator profile files (`alasdairlloydjones`, `andrewsilver`, `davegarcia`, `elainebogart`, `erikavelazquez`, `jenniferkasper`, `jianyang`, `lauramerling`, `marknewhouse`, `munawarahmed`, `seanpark`, `victoriakasumu`) at `redirect({ to: "/", hash: "operators" })` instead of bare `/`.
- Delete stale files with no purpose: `copy-of-fractional`, `copy-of-mark-newhouse-profile-page`, `copy-of-scale-diagnostic`, `memberdashboard`, `copyright`, `index-legacy`, `index[.]html`. (If any of these already contain a redirect, keep the redirect; only remove true dead files.)
- Leave `/services*` outlets and existing sub-redirects as-is (Pricing "See scope" links continue to work via existing `/services/*` → `/#offer|portfolios` redirects).
- Confirm sitemap already reflects live routes; no change needed unless a route is removed.

## 2. Contact form hardening

`src/routes/contact.tsx` — it already has zod validation, submit guard, loading/error/success states, and dup-submit ref. Remaining gaps to close:
- Add `aria-invalid` and field-level error placement (currently one top-level error).
- Add `name` field autofocus, `noValidate` retained, honeypot field to reduce spam.
- Add explicit success-state focus management (move focus to confirmation heading).
- Extract shared zod schema so validation runs the same way `/join` does.

## 3. Social share image

- Generate a single 1200×630 dark editorial card: cream wordmark "Veep" on `#0f0f0f`, small tagline "Senior operators for work that can't wait", IBM Plex Sans, minimal grid motif — matches current dark editorial system, no new brand.
- Save to `src/assets/og-card.jpg.asset.json` via `imagegen` + `lovable-assets`.
- Wire absolute CDN URL into `og:image` and `twitter:image` on leaf routes only: `/`, `/pricing`, `/about`, `/join`, `/faq`, `/contact`, `/for-portfolios`, `/meetveep`, `/privacy`, `/terms`, `/compare*`. Not on `__root.tsx`.
- Add `twitter:card = summary_large_image` alongside.

## 4. Metadata sweep (leaf routes)

For each of the routes above, verify `head()` has: `title`, `description`, `og:title`, `og:description`, `og:url` (self-referencing absolute), `og:image`, `twitter:card`, `twitter:image`, and a `<link rel="canonical">` pointing at itself. Titles already normalized last turn; fill gaps only.

## 5. Copy + a11y polish (restrained)

- Grep `src/` for `&nbsp;`, `&amp;`, doubled spaces — fix any residuals.
- FAQ accordion: verify `aria-expanded`, keyboard (Enter/Space), focus-visible ring.
- Footer: confirm dynamic © year, mailto, parity across pages.
- Bump `text-cream/60` → `/75` where WCAG contrast fails on small text.
- Lazy-load below-fold operator headshots (`loading="lazy" decoding="async"`).

## 6. Live-domain verification

Curl `https://veep.work/`, `www.veep.work/`, `/pricing`, `/about`, `/join`, `/faq`, `/privacy`, `/terms`, `/contact`, `/sitemap.xml`, `/robots.txt`, plus one legacy (`/blog`) and one operator-profile (`/seanpark`) → confirm 200/301 as expected and no Wix artifacts.

## 7. Final report

Deliver a summary listing: routes preserved, routes redirected, stale files removed, contact form fixes, og:image URL, metadata gaps closed, copy/a11y fixes, live-domain results, remaining risks.

## Out of scope

No redesign, no new brand system, no color/font changes, no new sections, no /services page rewrite.
