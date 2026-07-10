## Goal
Replace the current `/meetveep` redirect with a real campaign landing page that mirrors the Wix version, keeping it hidden from primary nav and the footer so it can be linked from ads and campaigns.

## Scope

**1. Route: `src/routes/meetveep.tsx`**
- Remove the existing `redirect` to `/`.
- Build a single-section page using the existing dark-navy design tokens (`bg-background`, `text-cream`, `accent`) and typography already used across the site — no new tokens or fonts.
- Wrap content in the standard `<main>` container width used elsewhere (`max-w-7xl px-4 sm:px-6 lg:px-8`).
- Route stays under the shared `__root.tsx` shell, so it inherits `SiteHeader` and `SiteFooter` automatically (per user answer). No changes to nav/footer files.
- Add route-specific `head()` with title, description, `og:title`, `og:description`, `twitter:card` — and `robots: noindex, nofollow` so campaign traffic isn't indexed.

**2. Content (verbatim from Wix)**
- H1: "The fastest way to add firepower to your team."
- Sub-copy: "When you're scaling fast, you can't afford slow hires or bad fits. Veep connects you with proven independent operators, from former founders to C-suite leaders, who embed quickly and get to work immediately. Meet the senior operators trusted by top founders to lead critical functions and drive real results. Fast."
- Bulleted checklist (reuse a check icon from `lucide-react`, matching accent color):
  - Onboarded in under a week
  - Save 40–80% vs. firms or full-time hires
  - Flexible terms: fractional, interim, or project-based
  - Risk-free 30-day guarantee
- Primary CTA button: "Meet Veep" → `https://forms.gle/LE2pMAsCW3kWsKes7` (opens in new tab, `rel="noopener noreferrer"`). Style matches the cream pill CTA used in `PageHero` / `SiteHeader`.

**3. Hero image**
- Reuse `src/assets/operator-erika-velazquez.png.asset.json` (matches the Wix hero subject/pose closely). Displayed on the right on desktop, stacked below copy on mobile. Simple rounded framing consistent with existing operator imagery — no coral blob recreation.

**4. Discoverability**
- Do NOT add links in `SiteHeader.tsx` or `SiteFooter.tsx`.
- Add `/meetveep` to `src/routes/sitemap[.]xml.ts`? No — keep it out of the sitemap so it's campaign-only.
- `robots: noindex, nofollow` meta as noted above.

## Files touched
- `src/routes/meetveep.tsx` — replace redirect with full page component + `head()`.

## Non-goals
- No changes to global nav, footer, sitemap, or other routes.
- No new components, assets, or design tokens.
- No form/analytics wiring beyond the outbound Google Form link (GA pageview fires via existing router subscription in `__root.tsx`).
