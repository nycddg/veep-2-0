# Full site copy export

Compile all user-facing copy from the site into a single Markdown file delivered as a downloadable artifact at `/mnt/documents/veep-site-copy.md`.

## Scope — pages to include

Primary marketing/site routes:
- Home (`/`)
- About (`/about`)
- Pricing (`/pricing`)
- FAQ (`/faq`)
- For Portfolios (`/for-portfolios`)
- Meet Veep (`/meetveep`)
- Contact (`/contact`)
- Join (`/join`)
- Privacy (`/privacy`)
- Terms (`/terms`)

Shared chrome (extracted once):
- Site header nav labels
- Site footer
- Footer CTA block

## Structure of the output file

```
# Veep — Site Copy

## Global
### Header nav
### Footer

## Page: Home  (/)
- Meta title / description
- Section-by-section copy in reading order (eyebrow, headline, sub, bullets, CTAs)

## Page: About  (/about)
…etc per page
```

Each page section preserves:
- Meta title + description (from `head()`)
- Eyebrows, headlines, subheads, body paragraphs
- List items, tile copy, CTA button labels
- Testimonial quotes / attributions where present

## Out of scope (unless you say otherwise)

- Legacy / duplicate routes (`index-legacy`, `copy-of-*`, `home.tsx`, `en.tsx`, `sg.tsx`, per-operator profile pages, `businessos`, `fractional`, `services.*`, `compare.*`, `blog`, `post.$`, etc.) — the `llms.txt` canonical page list drives inclusion.
- Auto-generated files (routeTree, sitemap).
- Code/props, class names, image URLs.

## Deliverable

One file: `/mnt/documents/veep-site-copy.md`, surfaced via `<presentation-artifact>`.

Tell me if you want additional routes (e.g. operator profile pages, service sub-pages, or legacy pages) included before I build it.
