## Goal

Produce a single markdown file containing every piece of user-facing copy across the site so you can review and mark up edits.

## Deliverable

`/mnt/documents/veep-site-copy.md` — delivered as a downloadable artifact in chat.

## Structure

Organized by route / component, in the order a visitor encounters them. Each entry shows:
- Section name + source file path (so edits map back to code)
- The exact strings (eyebrows, headlines, subheads, body, CTAs, tab labels, metrics, list items, meta title/description)

### Sections covered

1. **Global chrome**
   - `SiteHeader` (nav labels, CTA)
   - `SiteFooter` (columns, links, tagline)
   - `FooterCTA` (default + per-page overrides)
   - Root `<head>` meta defaults

2. **Home `/`** (`src/routes/index.tsx`)
   - Hero (eyebrow, H1, sub, CTAs, rating row)
   - LogoWall, Marquee lines
   - AudienceTabs, StatsBand, CompareTable, TriggerBento, CaseSwitcher, Testimonials

3. **Services**
   - `/services` index
   - `/services/fractional-cfo`
   - `/services/interim`
   - `/services/executive-bench`
   - `/services/ai-operators`

4. **Audience pages**
   - `/for-companies`
   - `/for-portfolios`
   - `/operators`
   - `/partners`

5. **Other routes**
   - `/about`
   - `/insights` (post titles + descriptions)
   - `/contact`

6. **Per-page meta** — title, description, og:title, og:description for every route.

## Process

Read every route file and site component, extract all string literals used for display, and assemble the markdown. No code changes.
