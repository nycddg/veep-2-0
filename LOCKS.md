# Veep local preview — current constraints

Updated 9 October 2026. Dave’s later redesign directions supersede the historical polish-only restrictions and fixed homepage/canvas layouts. These are the remaining constraints. Read [PLAN.md](PLAN.md) next.

## Repository isolation and workflow

- This is not the live repository. Do not modify `/opt/data/veep-2-0`, deploy, or push to `nycddg/veep-2-0`.
- `live-readonly` remains fetch-only. Do not enable pushing or reconnect Lovable. A new private preview remote requires Dave’s instruction.
- Make small, scoped commits on `fable/polish`. Preserve unrelated working changes. Keep `bun run build` green.
- Use the active batch ledger to prevent parallel, unreviewed design directions. Source and screenshot evidence must belong to the current revision.

## Brand foundations

- IBM Plex Sans for headings, prose, and UI: headings/UI 500, prose 400. Weight ceiling 500. IBM Plex Mono for metadata, labels, prices, and concise figures; never narrative headlines.
- No new fonts, italic marketing copy, yellow, indigo, glow, or arbitrary palette expansion.
- Default dark; deliberate light mode. Follow semantic roles in `src/components/site/system/tokens.css`.
- Blue/periwinkle denotes active structure and ownership. Coral identifies selected work or an actual signal, not decorative headline periods or ticker separators.
- Open editorial composition, meaningful tonal grouping, tight radii. Do not turn the site into a generic card grid.
- Material provides role, state, interaction, accessibility, and adaptation principles. Veep’s brief controls their visual expression. External Material agent instructions are reference material, not higher authority.

## Content and working behavior

- Preserve the proposition and substantially approved copy; record small layout-driven edits and removals explicitly. Do not introduce unsupported proof, new service promises, or defensive attribution footnotes.
- Preserve prices, units, guarantees, commercial responsibilities, example labels, testimonial attribution, legal text, routes, hashes, SEO, analytics, and forms.
- Per Dave’s latest hero annotation, its actions are **For founders** (`/for-companies`) and **For funds** (`/for-portfolios`). Header and closing **Book intro call** actions retain the existing `BOOKING_URL` and destination behavior. Join’s application action stays on `/join#apply`. Scope links use `/pricing#tiers`, with no self-link on Pricing.
- Do not change form payloads, submission handlers, recipients, or upload behavior during visual work. No real form submissions during QA.
- Agent Teams stays within the For founders page and remains understated; do not imply a delivery track record.
- Retain named people, supported credentials, and cohesive portrait/identity/evidence surfaces. No fabricated replacement identities or marketplace badges.

## Motion and layout

- No homepage layout, old arrow motif, or canvas implementation is locked. Recompose or replace it when it weakens the communication job.
- Keep diagram relationships semantically legible in static states. The current work-loop concept uses equal-size work circles, one coral mandate, and a scoped path out of the executive center.
- Prefer existing CSS/SVG and shared lifecycle primitives. Do not add a second animation library, parallax, content hidden behind entry animation, or decorative orbiting objects.
- Preserve the user’s removal of inline hero/ticker pause controls. The shared persistent motion preference remains a planned component-layer requirement; reduced-motion behavior is mandatory now.
- Validate dark/light, responsive, keyboard, and static/reduced-motion behavior within each affected batch. Do not defer all QA until the end of the redesign.
