# Restore editorial headlines (SEO stays in metadata)

The SEO pass rewrote two visible page headlines into title-tag style text. Only two pages are affected; all other pages still carry their editorial H1s.

## What changed and what to restore

| Page | Currently on screen | Restore to |
| --- | --- | --- |
| Home (`/`) | "Veep — Senior Operators for Critical Work That Can't Wait." | "Because a job always needs to be done." |
| About (`/about`) | "About Veep — Our Founders and Operating Principles" | "Born from the inside. Built for what's next." |

Both restored lines come from the approved site copy document.

## Keep the SEO work intact

Search engines read the `<title>` and meta description, not the on-page headline, so nothing is lost:

- Home keeps title "Veep — Senior Operators for Critical Work That Can't Wait" plus its description and og tags.
- About keeps title "About Veep — Our Founders and Operating Principles" plus its description and og tags.
- The About hero sub-copy and og:title stay as they are.

## Verified as already correct (no change)

Pricing ("Priced to the work. Not the hour."), FAQ, Contact, Join, For Portfolios, Privacy, Terms — all still show editorial headlines with separate SEO titles.

## Technical notes

- `src/routes/index.tsx` — hero `<h1>` text only (around line 460).
- `src/routes/about.tsx` — `PageHero` `title` prop only.
- No metadata, layout, or styling changes.
