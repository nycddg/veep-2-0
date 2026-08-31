# Reposition veep.work: Managed Marketplace → Operating Partner Platform

Same design language, same components, same tokens. This is a content, IA, and metadata pass — plus one new page type (mandates). No new typeface, no new motif, no motion library, no theme change.

Note: this intentionally overrides two lines in LOCKS.md ("do not rewrite hero thesis / offer framing") because the memo replaces the thesis. Everything else in LOCKS stays: IBM Plex Sans 500 ceiling, Mono as chrome only, dark default, `#789FFF` / `#4E7AD4` / `#F43F34`, Book intro call as homepage primary, 75+ / 72h / under 10d / 30-day fit, OperatorCanvas untouched.

## 0. Unblock first

Fix the current TypeScript build errors before any content work (PageHero `params`, `auth-middleware` middleware return type, implicit `any` in `mock-store.tsx` and `portal.functions.ts`). Build must be green before the pass starts.

## 1. The language spine

Applied consistently everywhere:

- Category: operating partner platform for companies and funds without a platform team.
- Problem: ownerless work — the priority matters, but no one senior owns it.
- Insight: the role is the symptom, the mandate is the product.
- Model: Scope the job. Assemble the capacity. Own the mandate.
- Ownership: the Operating Partner owns the work. Veep owns the account. The platform supplies capacity.
- Brand line: Critical work, owned.
- CTA: Bring us the mission-critical work with no clear owner.

Retire as lead language sitewide: "fractional executive", "marketplace", "browse the roster", "network of operators", "flexible talent", "cheaper than a hire", "AI agents / automation services". Roster and network survive only as proof underneath the offer, never as the offer.

## 2. Page-by-page

**Home** (`index.tsx`) — reordered to the memo's narrative arc, reusing existing sections:
1. Hero: "Operating partner capacity for companies and funds without a platform team." Sub carries scope/assemble/own. Primary CTA stays Book intro call.
2. Ownerless work — reframe `ProblemDiagram` around work with no owner (capital delayed, revenue founder-led, reporting non-diagnostic, 100-day plan unowned).
3. The reframe strip — "You said / the business needs" pairs (fractional CFO → capital readiness; GTM help → revenue repeatability; COO → operating cadence; AI agents → governed capacity). New content in the existing flat two-column grid pattern.
4. What we help with — six mandate cards replacing the current benefit grid, using the `EngagementTile` treatment.
5. How we work — `StepFlow` becomes Scope / Assemble / Own / Scale with governed capacity.
6. Why it works — proof list (operators who held the seat, account governance, dynamic capacity, fast scoping, fit guarantee, clean handoff). Keeps 95%, 75+, 72h, under 10d, 30-day fit.
7. Alternatives — existing comparison table, rows rewritten to "not search, not consulting, not freelance, not unmanaged AI, not a marketplace you manage".
8. Funds spotlight, testimonials, logo wall, FAQ, footer CTA — kept, copy retuned.

**Six new mandate pages** at `/mandates/*`, each on the existing `PageHero` + flat section pattern: capital-transaction-readiness, revenue-repeatability, commercial-expansion, executive-operating-bench, managed-function-offices, portfolio-ops. Each page: core message, the reframe, what's in scope, how a mandate runs, proof, CTA. Plus a `/mandates` index.

The current `/services/*` pages (`fractional-cfo`, `interim`, `executive-bench`, `ai-operators`) redirect 301-style into their mandate equivalents so no URL breaks; `/services` index redirects to `/mandates`.

**`/for-companies`** — rebuilt around the four audiences: founder-led, owner-operated, family-owned, sponsorless/investor-backed. Message per audience with how ownerless work shows up for each.

**`/for-portfolios`** — "Portfolio ops capacity for funds without a portfolio ops team." Retained roster reframed as deployable operating capacity across diligence, 100-day, integration, interim gaps, value creation, exit readiness. Retained pricing stays.

**`/how-it-works`** — Scope → Assemble → Own → Govern, plus the delivery operating system (named Operating Partner, documented scope, milestones, cadence, progress reporting, scope-change management, handoff decision).

**`/pricing`** — tier names Advisory / Sprint / Operator / Pod stay (locked public shapes) but are presented as ways to resource a mandate, under a new lead principle: "We price the work, not the seat." Hours/capacity framing removed from copy. Mandate-type → typical shape mapping added.

**`/compare` + children** — updated to the memo's competitive map (fractional execs, marketplaces, consulting, agencies, search, AI firms, VC/PE platform teams).

**`/proof`** — restructured as proof of ownership: outcomes, named Operating Partner accountability, governance, replacement capacity, references.

**`/about`, `/faq`, `/join`, `/operators`, `/contact`** — About gains the transition story. FAQ answers rewritten to mandate language (including "can I browse the roster" → no, and why). Join reframed for two operator types: lead Operating Partners who own mandates, and specialists who contribute. Contact/intake asks for the work, not the role.

**Footer + nav** — "What we help with" mandate links replace service links; tagline stays "Senior operators for work that can't wait."

## 3. SEO

New title/description/OG per mandate page, sitemap updated with `/mandates` and children, redirects for old `/services/*` URLs, org schema description updated to the operating partner platform line, single H1 per page preserved.

## 4. Technical notes

- New routes under `src/routes/mandates.*.tsx` following the existing flat file-route convention; old service routes become `beforeLoad` redirects like `partners.tsx` does today.
- No new components unless a section has no existing analogue; reuse `PageHero`, `EngagementTile`, `StepFlow`, `ObjectionList`, `Accordion`, `Reveal`, `FooterCTA`.
- No changes to `OperatorCanvas`, theme, tokens, or motion primitives.
- Portal and admin are untouched by this pass.

## 5. Sequence

1. Fix build errors.
2. Home rewrite.
3. Mandate pages + redirects + sitemap.
4. For-companies / for-portfolios / how-it-works / pricing.
5. Compare / proof / about / faq / join / contact / footer.
6. Metadata sweep and green build.

## Flags for you

- Homepage H1 changes from "Because a job always needs to be done." to the operating-partner line. Say the word if you want the editorial H1 kept and the new positioning carried in the sub.
- Nav will gain a "What we help with" item; that pushes the desktop nav to five items.
- "Critical work, owned." returns as the brand line — it was removed from the footer earlier.
