
## Plan: Apply reviewed site copy

Update every user-facing string across the site to match `Veep_Site_Copy_-_Updated_2026-07-06.md`. Structure, layouts, styling, and components stay as-is — only text content (headlines, subs, eyebrows, list items, meta, CTAs, tabs, cards, quotes) changes.

### Files to edit

**Global / shared components**
- `src/routes/__root.tsx` — root `<head>` title/description/og
- `src/components/site/SiteHeader.tsx` — nav labels + CTAs
- `src/components/site/SiteFooter.tsx` — tagline + link groups + legal row
- `src/components/site/FooterCTA.tsx` — default headline/sub (per-page overrides applied where the component is used)
- `src/components/site/primitives.tsx` — `DualCTA` labels, `Eyebrow`/`RatingRow` text
- `src/lib/error-page.ts` (or wherever 404/error copy lives) — 404 + error page strings
- `src/components/site/HeroVisual.tsx` — `Operator Bench™` kicker + 5 columns (Fractional/Interim/Sprint/Bench/AI-powered)
- `src/components/site/LogoWall.tsx` — kicker + logo list
- `src/components/site/Marquee.tsx` — full 10-line list (adds "Too urgent for search", "Too senior for freelancers", "Too operational for consultants")
- `src/components/site/StatsBand.tsx` — H2, sub, 6 stats
- `src/components/site/CompareTable.tsx` — eyebrow, H2, 4 columns (rewritten "use / breaks down" copy)
- `src/components/site/TriggerBento.tsx` — eyebrow, H2, sub, 4 groups
- `src/components/site/CaseSwitcher.tsx` — eyebrow, H2, 3 tabs/cases
- `src/components/site/Testimonials.tsx` — eyebrow, H2, 3 quotes
- `src/components/site/AudienceTabs.tsx` — eyebrow, H2, sub, tabs, all pillars for both audiences

**Route pages**
- `src/routes/index.tsx` — hero label/eyebrow/H1/sub
- `src/routes/for-companies.tsx` — meta, hero, 3 cards, common-questions Q&A
- `src/routes/for-portfolios.tsx` — meta, hero, Capacity Audit block, 3 tiers
- `src/routes/services.index.tsx` — meta, hero, 4 engagement modes, deep-dive cards
- `src/routes/services.fractional-cfo.tsx` — meta, hero, triggers list, 3 packages, diagnostic block (rewritten to cover full C-suite, not just CFO)
- `src/routes/services.interim.tsx` — meta, hero, coverage list, economics (mostly minor tweaks)
- `src/routes/services.executive-bench.tsx` — meta, hero, included list, 3 tiers, FooterCTA override
- `src/routes/services.ai-operators.tsx` — meta, hero, 3 steps, unlocks list
- `src/routes/operators.tsx` — meta, hero, 6 operator cards, join-network block, FooterCTA override
- `src/routes/partners.tsx` — meta, hero, 6 partner categories, FooterCTA override
- `src/routes/about.tsx` — meta, hero, 4 principles, track record
- `src/routes/insights.tsx` — meta, hero, 3 posts
- `src/routes/contact.tsx` — meta, hero, both tab panels, form field labels, submit buttons, fine print, success state

### Approach

1. Read each target file to capture current structure.
2. Replace strings in place using search-replace edits — no layout, class, or component-shape changes.
3. Where the new copy adds/removes list items (e.g. Marquee gains 3 lines, fractional-cfo triggers expand across C-suite), extend the existing data arrays.
4. Where per-page `FooterCTA` overrides are specified, pass `headline`/`sub` props at the call site.
5. Verify build after edits.

### Out of scope

- No new routes, no new components, no visual/design changes.
- No changes to the assets, fonts, or color tokens updated in earlier turns.
