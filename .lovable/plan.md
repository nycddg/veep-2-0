# Migrate `/about` from veep.work

Replace the current `/about` redirect stub with a real editorial About page, in Veep's dark-tone system (mono eyebrows, PageHero, hairline rows on `bg-surface-raised`, no bento cards). Rewrite copy in the site's voice ("senior operators", "work that can't wait", "matched in 72 hours, deployed in under 10 days") and add the page to nav + footer.

## Route

**`src/routes/about.tsx`** — remove `redirect`, replace with real page.

- `head()`: title "About Veep — Senior operators for work that can't wait", unique description, og:title / og:description / og:url + canonical.
- `PageHero`
  - eyebrow: "About Veep"
  - title: "Born from the inside."
  - accent: "Built for what's next."
  - sub: "After decades inside high-growth startups, private companies, and public institutions, we saw the same pattern — companies moving slower, execution getting lost, senior operators stuck advising instead of owning. Veep is the answer."
  - secondaryLabel: "See the roster" → `/` hash `operators`
- Section 1 — "The problem / Meet Veep" on `bg-surface-raised`, two-row editorial layout with hairline dividers (no cards):
  - Row 1 `THE PROBLEM`: "Operators felt stuck inside bloated orgs, while companies struggled to find senior talent that could lead fast and deliver with focus."
  - Row 2 `MEET VEEP`: "Companies get flexible, high-impact operators. Operators get the freedom and focus to lead. Matched in 72 hours. Deployed in under 10 days."
- Section 2 — "Built the hard way. Rebuilt the smart way." Editorial split: left column eyebrow + h2 + paragraph, right column a 4-item numbered list (mirrors `join.tsx` criteria rhythm):
  - "Onboarded in under 10 days"
  - "Save 40–80% vs. firms or full-time hires"
  - "Flexible terms: interim, fractional, or project-based"
  - "30-day fit guarantee"
- Section 3 — "Founding team" on `bg-surface-raised`. Eyebrow `FOUNDING TEAM`, h2 "Founders first. Operators always.", short intro. Three founders in a `grid md:grid-cols-3 gap-10` — plain layout, no cards: small role label, name in cream tracking-tight, one-sentence bio, hairline `border-t border-white/10` above each. No portrait images (source photos not available in repo; keep typographic).
  - Dave Garcia — Co-Founder — "Launched products, led pivots, landed exits. Now helping others move faster with Veep."
  - Jian Yang — Co-Founder — "Raised big, scaled fast, exited right. Now helping operators do the same, smarter."
  - Mark Newhouse — Co-Founder — "Built brands, transformed orgs, sold startups. Now building alongside operators at Veep."
- Section 4 — Closing CTA band: eyebrow "Tap a Veep", h2 "Your next big move starts here.", one-line sub, primary cream pill → `BOOKING_URL`, secondary link → `/contact`. Matches `FooterCTA` treatment used elsewhere; if `FooterCTA` component fits, use it directly.

## Nav & footer

- `src/components/site/SiteHeader.tsx`: add `{ kind: "route", to: "/about", label: "About" }` in the right-side route group before `/join`. Extend `to` union to include `/about`.
- `src/components/site/SiteFooter.tsx`: add `{ kind: "route", to: "/about", label: "About" }` to the "Details" column (top of list). Extend `FooterLink` union.

## Visual rules
- No new tokens, colors, fonts, or images.
- No rounded bento cards for the problem/team blocks — use `border-t border-white/10` dividers on `bg-surface-raised`.
- Numbered items use `font-mono text-sm text-accent tabular-nums` `01/02/03` markers like `join.tsx`.
- Reuse `PageHero`; reuse `FooterCTA` if its API accepts custom title/eyebrow.

## Out of scope
- No founder photos (source images not available; typographic only).
- No backend, no CMS, no new routes beyond `/about`.
- No changes to any other page besides header/footer nav.

## Files touched
- edit `src/routes/about.tsx`
- edit `src/components/site/SiteHeader.tsx`
- edit `src/components/site/SiteFooter.tsx`
