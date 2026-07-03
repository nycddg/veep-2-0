
# Veep Marketing Site — Andela-inspired build

A full marketing site for Veep that mirrors Andela's information architecture and visual rhythm (near-white background, deep forest green accent, serif display + grotesque sans, pill nav, rounded cards, generous whitespace). Copy is drawn from the SDR Messaging Guide and the strategic memo.

## Design system (very close to Andela)

- **Palette:** background `#FCFBF8`, ink `#0A0A0A`, deep forest green `#1E5A3A` (primary), muted stone grays for secondary text, hairline borders.
- **Type:** serif display (Instrument Serif or Fraunces) for H1/H2, grotesque sans (Söhne feel via Inter Tight or Geist) for body/UI.
- **Components:** pill top nav with dark pill primary CTA + outlined secondary; rounded 16–20px cards with soft shadows; green-check bullet lists; star/rating row; logo marquee; tabbed switcher; alternating text/media rows; floating UI chips on product screenshots.
- All colors, radii, shadows registered as semantic tokens in `src/styles.css`.

## Information architecture (routes)

```text
/                          Home
/for-companies             Individual company buyers (CFO wedge)
/for-portfolios            PE / family office / holdco (Executive Bench)
/services                  Overview of engagement types
/services/fractional-cfo   CFO capacity wedge
/services/interim          Interim executive coverage
/services/executive-bench  Annual bench / capacity partnership
/services/ai-operators     Operator-led, AI-powered
/operators                 Elite operator network + proof
/partners                  Referral partners (accountants, lenders, search, M&A, PE)
/insights                  Blog/insights shell (index + one sample post)
/about                     Company + team + track record
/contact                   Discovery call booking + audit request
```

Each route gets its own `head()` with unique title / description / og:title / og:description. `og:image` only on leaf routes with a real hero image (skipped where none exists). The home route inherits root metadata but root metadata is rewritten to real Veep copy.

## Homepage sections (Andela's 10-section rhythm)

1. **Top nav** — pill nav: For Companies · For Portfolios · Services · Operators · Partners · Insights · About. Dual CTA: "Book a discovery call" (dark pill) + "Request a Capacity Audit" (outlined).
2. **Hero** — serif headline "Senior operators. Owned outcomes." with italicized promise "Leadership when you need it — not when hiring catches up." Sub: Veep's core positioning line. Dual CTA. Small rating/proof row.
3. **Logo wall** — placeholder logos (Verizon, Industrious, Morning Brew, New Stand, Oliver Wyman) with an "Operators from" eyebrow.
4. **Audience switcher (tabbed)** — two tabs: *For Companies* / *For Portfolios*. Each tab reveals a tailored 3-pillar stack with eyebrow, outcome headline, checklist bullets, product/screenshot visual, and "Learn more" link.
   - Companies pillars: Fractional CFO capacity · Interim coverage · Sprint execution.
   - Portfolios pillars: Executive Bench · Portfolio capacity audit · Executive Capacity MSA.
5. **"Operators, not more advice"** — animated marquee of one-liners from the SDR guide ("Faster than executive search", "More accountable than consulting", "More senior than freelancers", "Build now. Hire later", "Operator-led. AI-powered").
6. **Positioning stats block** — dark forest-green section with hard numbers: $1B+ capital raised · $3B+ revenue created · $2B+ costs saved · 20+ exits · Onboarded in <10 days · 30-day fit guarantee.
7. **How Veep is different** — 4-column compare table: Executive Search vs Consulting vs Freelancers vs Veep, with a short "breaks down when…" line per column, then Veep's differentiator.
8. **Pivotal moments grid** — bento of triggers grouped Growth / Operational / Leadership / Strategic (capital raise, CFO departure, M&A, GTM redesign, PE transition, turnaround, etc.).
9. **Case study switcher** — tabbed hero-metric cards (3 tabs) with a single big stat + short narrative per case (illustrative, not fabricated as specific client claims — framed as engagement patterns).
10. **Named testimonials + ratings row** — 2–3 executive-style pull quotes with role/company placeholders.
11. **Footer CTA band** — serif "What critical initiative doesn't have an owner right now?" + dual CTA.
12. **Footer** — sitemap, contact, social, legal.

## Other route content (concise)

- **/for-companies** — hero tailored to individual company buyers, 3 pillars (Fractional / Interim / Sprint), objection-handling FAQ from the guide, dual CTA.
- **/for-portfolios** — hero for PE/family office/holdco, Executive Bench pitch, "Executive Capacity Audit" free wedge, pricing bands ($50k–$150k/yr framing without hard commitment), MSA explainer.
- **/services** — overview of Advisory / Fractional / Interim / Sprint tiers with "leadership, not labor" framing; links to each sub-service.
- **/services/fractional-cfo** — CFO wedge deep dive with lender-readiness, capital-raise, diligence-prep triggers and a productized diagnostic offer.
- **/services/interim** — coverage during search / post-departure / transitions.
- **/services/executive-bench** — annual bench model, portfolio audit, MSA structure, what's included vs billed separately.
- **/services/ai-operators** — "A-list executives. Unlimited AI staff." Explains operator governs / AI executes / operator reviews.
- **/operators** — operator network positioning, proof stack, sample operator cards (placeholder), CTA for talent to join.
- **/partners** — referral programs for accountants, lenders, search firms, M&A/QoE, investors; per-audience pitch language and CTA to become a partner.
- **/insights** — index of 3 placeholder posts + one full sample post styled editorially.
- **/about** — company story, founding thesis, principles ("Sell the moment. Sell the outcome."), team placeholders, track record.
- **/contact** — dual conversion form: "Book a discovery call" (Calendly-ready embed slot) + "Request a Capacity Audit" (typed form fields, submits to a stub server function that logs; wired for future Cloud/CRM).

## Technical details

- Stack per project conventions: TanStack Start file-based routing under `src/routes/`, `__root.tsx` updated with real Veep title/description/OG + shared nav/footer, `<Outlet />` preserved.
- Fonts loaded via `<link>` in `__root.tsx` head (per Tailwind v4 rules) — Instrument Serif + Inter Tight from Google Fonts.
- Design tokens (background, ink, forest, stone, radii, elegant shadow, forest gradient) added to `src/styles.css` `@theme inline` block. No hardcoded color utilities in components.
- Reusable components under `src/components/site/` (Header, Footer, PillNav, DualCTA, PillarCard, LogoWall, Marquee, StatsBand, CompareTable, TriggerBento, CaseSwitcher, Testimonials, FooterCTA).
- Contact form uses a `createServerFn` in `src/lib/contact.functions.ts` with a Zod validator; currently logs and returns success (no Cloud enabled yet — can be wired to Lovable Cloud + email later if you want).
- Each route file sets its own `head()`; error/notFound boundaries left as-is from the template.
- No stock imagery generated in this pass — hero/product visuals use tasteful CSS/SVG mock UI chips (Andela-style floating cards over abstract shapes) so we don't ship generic AI hero images. Image generation can be added in a follow-up.

## Out of scope for this pass

- Real client logos (uses stylized placeholders).
- Live Calendly / CRM wiring (slot is present, provider not connected).
- Blog CMS (static sample post only).
- Auth / dashboard.

Approve and I'll build it.
