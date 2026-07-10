## SEO audit — current state

Root `__root.tsx` has solid sitewide defaults (title, description, OG/Twitter card + image, Organization JSON-LD, GA). Nine routes have their own `head()`: `/`, `/about`, `/pricing`, `/for-portfolios`, `/contact`, `/join`, `/faq`, `/privacy`, `/terms`.

Three concrete gaps to fix:

### 1. Copy drift in existing head() blocks

Recent chat edits renamed "Portfolio Executive Roster" → "Portfolio Roster", but `for-portfolios.tsx` head still reads:

- title: *"For Portfolios — Executive Capacity Partnership | Veep"*
- og:title: *"For Portfolios — Veep Executive Roster"*
- description mentions "quarterly capacity planning, emergency coverage" — no longer on-page

Update to reflect the current "Portfolio Roster / on-call operators" positioning.

### 2. Canonical + og:url are relative

All nine `head()` blocks use `href: "/faq"`, `content: "/about"`, etc. Crawlers need absolute URLs. Switch to `https://www.veep.work<path>` (the sitemap's target domain, confirmed in project URLs).

### 3. Sitemap is stale

`src/routes/sitemap[.]xml.ts` has `BASE_URL = ""` and only 4 entries (`/`, `/pricing`, `/faq`, `/contact`). Update to:

- `BASE_URL = "https://www.veep.work"`
- Add the other real public routes with head(): `/about`, `/for-portfolios`, `/join`, `/privacy`, `/terms`

### Out of scope (calling out, not fixing)

~55 route files have no `head()` — most are drafts / unlinked (`copy-of-*`, `index-legacy`, `index[.]html`, individual operator profile pages like `alasdairlloydjones`, `davegarcia`, plus `home`, `en`, `sg`, `meetveep`, etc.). Adding SEO to all of them is a much larger content exercise (needs per-page titles/descriptions you'd want to write yourself), and several look like they should be deleted rather than indexed.

**Question before I build:** should I also add `head()` + sitemap entries for the linked-but-uncovered active pages (`/how-it-works`, `/for-companies`, `/services`, `/roster`, `/sprints`, `/blog`, `/get-started`)? Or keep this pass tight to fixing the three items above and handle the rest in a follow-up?

add: add `head()` + sitemap entries for the linked-but-uncovered active pages (`/how-it-works`, `/for-companies`, `/services`, `/roster`, `/sprints`, `/blog`, `/get-started`)

&nbsp;