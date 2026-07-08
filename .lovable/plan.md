## Copy update across homepage, FAQ, and pricing

Replace copy in three route files with the new text provided. Preserve current layout, components, and section structure — text only. Update related component copy where the sections are componentized (proof cards, testimonials headline, engagement tiles, stats, objections, footer, header).

### Scope

**1. `src/routes/index.tsx` (homepage) — full copy swap**
- Hero: new headline "The work needs an owner.", new sub, keep both CTAs ("Book intro call" / "See how it works").
- Operator proof cards: replace with Jian Yang / Vanessa Kwan / Kostja Mirkovic / Laura Merling (Senior Finance/GTM/Operations Operator + Ex-Company + Industry chips).
- Logo strip: Google, Meta, Stripe, Coinbase, LinkedIn, Airbnb, Uber, Shopify, Goldman Sachs, LVMH, Morning Brew, Deloitte.
- "What Veep is" section — new headline + body.
- "The moment you're in" — new problem block copy.
- "Instead of" cards — Retained search / Consulting firms / Marketplaces & freelancers.
- "What we do" — new copy.
- "The Veep model" — 4 pillars (Start with the work / Senior only / Priced to scope / Guaranteed fit).
- "What you get" — 6 benefit cards with new titles/copy.
- Engagements: 4 tiles — Advisory $3.5k/mo, Sprint $15k, Operator $15k/mo, Pod $30k/mo (new descriptions).
- How it works: 4 steps — Diagnose / Scope / Match / Deploy in <10 days.
- Proof mini-cases (3): Series B SaaS Finance Sprint ($18M raised) / PE portco Ops Operator ($6.2M savings) / Founder-led GTM Sprint (+62% Q/Q pipeline).
- Stats band: 150+ / 72h / <10d / 30d.
- Testimonial: keep Jerry Kolber quote as-is (already matches).
- "Why Veep" compare table: new dimensions (Time to start / Ownership / Cost / Seniority / Exit / Risk).
- Portfolio band: new headline + "Request a capacity audit" CTA.
- "Before you book" objections (6): rewrite to new copy.
- FAQ (8): rewrite to homepage FAQ set from spec.
- Final CTA: "What critical work needs an owner right now?" with both CTAs.
- Update `<Service>` + `FAQPage` JSON-LD to match new FAQ + pricing ranges.
- Update `head()` meta if needed to reflect "The work needs an owner" positioning (keep Fractional CXO keyword secondary — user did not change positioning, so keep existing title unless copy explicitly conflicts; will keep title, refresh description to match new hero).

**2. `src/routes/faq.tsx` — full copy swap**
- New intro + grouped sections: Engagement / Operators / Pricing / Portfolios & partnerships.
- Update `FAQPage` JSON-LD to match the new questions/answers.
- Final CTA and footer CTA copy.

**3. `src/routes/pricing.tsx` — full copy swap**
- Hero: "Priced to the work. Not the hour." + new sub.
- 4 tier cards: Advisory $3.5k/mo, Sprint $15k, Operator $15k/mo, Pod $30k/mo (new bullets, remove "Interim" and "Most common" ribbon or move it to Operator as most common).
- "What we don't charge for" 4 items — updated copy.
- Portfolio callout — updated copy + range $50k–$150k/yr.
- Pricing FAQ — 3 updated Q&A.
- Update pricing `FAQPage` JSON-LD.

**4. Componentized copy touch-ups**
- `src/components/site/SiteFooter.tsx`: tagline copy is already close — update to "Senior operators to own work that cannot wait — matched in 72 hours, deployed in under 10 days."
- `src/components/site/StepFlow.tsx`: replace 4 steps with Diagnose / Scope / Match / Deploy in <10 days copy from spec.
- `src/components/site/ObjectionList.tsx`: replace 6 Q&A with the "Before you book" set.
- `src/components/site/OperatorProofCard.tsx` usage in index: pass new operator data.
- `src/components/site/EngagementTile.tsx` usage: swap to Advisory/Sprint/Operator/Pod with new prices + copy. `to` links will keep pointing at existing service routes (they redirect to `/#offer`), which is fine.
- `src/components/site/Testimonials.tsx`: unchanged (quote matches).
- `src/components/site/StatsBand.tsx`: verify labels match 150+ operators / 72h shortlist / <10d deploy / 30d fit — update if different.
- `src/components/site/CompareTable.tsx`: replace rows with the 6 new dimensions.
- `src/components/site/FooterCTA.tsx` default copy stays; homepage/pricing/FAQ pass specific headlines.

### Out of scope

- No layout, styling, or component structure changes.
- No new routes, redirects, or nav changes.
- No backend, no image generation.
- No changes to `SiteHeader` nav (labels already match spec).
- Standalone `/contact` copy untouched (user did not provide new copy).

### Files to edit

- `src/routes/index.tsx`
- `src/routes/faq.tsx`
- `src/routes/pricing.tsx`
- `src/components/site/SiteFooter.tsx`
- `src/components/site/StepFlow.tsx`
- `src/components/site/ObjectionList.tsx`
- `src/components/site/CompareTable.tsx`
- `src/components/site/StatsBand.tsx` (only if labels differ)

### Verification

- Read affected files, apply patches, then confirm build passes and spot-check `/`, `/faq`, `/pricing` in preview.
