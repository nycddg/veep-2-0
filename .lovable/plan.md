# Hide the partner login before publishing

Goal: publish the marketing site with no visible way in to the portal, while the portal itself keeps working for you at a direct URL.

## Changes

1. **Footer** — remove the "Partner Login" link from `src/components/site/SiteFooter.tsx`. The "Operators" column keeps only "Join Veep".
2. **Rest of the site** — a search across all public pages found no other login/portal links, so no further link removals are needed. (Header, homepage, and all marketing routes are clean.)
3. **Keep it out of search** — add `noindex, nofollow` meta to `/auth` and to the portal layout route, and add `Disallow: /auth`, `Disallow: /portal`, `Disallow: /admin` to `public/robots.txt`. Confirm none of these appear in `sitemap.xml`.

## Still works

- `/auth` remains reachable by typing the URL directly, so you and partners can sign in.
- `/portal/*` and `/admin` stay behind the existing auth gate, in demo mode as-is.

## Technical notes

- Removing the link also means dropping `"/auth"` from the `FooterLink` route union type.
- noindex goes in each route's `head()` meta, not the root.
