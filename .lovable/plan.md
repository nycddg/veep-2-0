# Site-wide copy sweep

Rewrite user-facing copy across the site so it reads like a sharp founder/senior copywriter wrote it — clear, specific, confident, human. No new claims, metrics, or capabilities invented. Layout, structure, components, and pricing numbers stay as-is; only strings change.

## Scope (files with real copy today)

Pages
- `src/routes/index.tsx` (home — hero, problem, solution, engagements, proof, FAQ, CTA)
- `src/routes/pricing.tsx` (tier cards, FAQ, comparison strip)
- `src/routes/for-portfolios.tsx` (PE/VC audience page)
- `src/routes/contact.tsx` (form headers, helper text, success/empty states)
- `src/routes/faq.tsx`
- `src/routes/__root.tsx` (default title, description, og/twitter metadata)

Shared components
- `PageHero`, `EngagementTile`, `OutcomeTile`, `TriggerBento`, `ObjectionList`, `StatsBand`, `StepFlow`, `AudienceTabs`, `CaseSwitcher`, `CompareTable`, `LogoWall`, `Testimonials`, `Marquee`, `TrustChip`, `FooterCTA`, `StickyMobileCTA`, `SiteHeader`, `SiteFooter`, `OperatorProofCard`

Stubs (`about`, `compare*`, `how-it-works`, `insights`, `operators`, `partners`, `proof`, `services*`) are 5-line placeholders — leave untouched this pass.

## Rewrite rules

Kill on sight: unlock, elevate, seamless, robust, empower, leverage, transform, revolutionize, next-level, game-changing, cutting-edge, tailored solutions, designed to help you, in today's fast-paced world, "whether you're…", "say goodbye to…". Cut excess em dashes, three-part list tics ("faster, smarter, better"), inflated adjectives, vague benefit claims, generic motivational lines.

Tone target per section:
- Hero — one sharp promise, named audience, one visible outcome. Subhead adds the how in <20 words.
- Problem — plain-language pain, no melodrama.
- Solution — mechanism, not adjectives.
- Benefits — what changes for the buyer, phrased concretely.
- Features — one line each: what it is, why it matters.
- Pricing — reduce hesitation; what's included, who it's for, what happens next.
- Portfolio / proof — concrete situations, credible framing, no invented stats.
- CTAs — verbs, low friction ("Book a 20-min intro", "See engagement scope", "Talk to a partner").
- Metadata — real title (<60ch) + description (<160ch) per route, matching og/twitter, no "Lovable" defaults.

## Guardrails

- Preserve current positioning (Operators / Advisory / Sprint / Pod, PE/VC + founder audiences, price tiers).
- No new metrics, logos, testimonials, guarantees, or capabilities.
- If an existing claim is vague, sharpen wording without changing meaning.
- Keep all routes, props, class names, and component APIs unchanged — text-only edits.
- Keep pricing numbers ($3k, $25k, etc.) exactly as they are.
- Nav labels stay short; only rewrite where a label reads awkwardly.

## Verification

- `bun run build:dev` clean.
- Spot-check `/`, `/pricing`, `/for-portfolios`, `/contact`, `/faq` via Playwright screenshot at 1280×1800; confirm no banned words remain (`rg -i` sweep for the AI-tic list).
