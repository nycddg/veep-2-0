
## Audit of current live Lovable routes

From `src/routes/`, these routes exist and MUST be preserved:

**Real pages:** `/`, `/about`, `/compare`, `/compare/vs-consultants`, `/compare/vs-executive-search`, `/contact`, `/faq`, `/for-companies`, `/for-portfolios`, `/join`, `/pricing`, `/privacy`, `/terms`, `/sitemap.xml`

**Already-existing in-app redirects (keep as-is):** `/how-it-works`, `/insights`, `/operators`, `/partners`, `/proof`, `/services`, `/services/ai-operators`, `/services/executive-bench`, `/services/fractional-cfo`, `/services/interim`

Note: there is no `/portfolio` route — the closest is `/for-portfolios`. No `/blog` route.

## Candidate classification

**Preserve (already live, do NOT redirect):**
`/about`, `/join`, `/privacy`, `/terms`, `/contact`, `/services`

**Redirect to `/` (legacy Wix, not part of current site):**

Static: `/agencies`, `/alasdairlloydjones`, `/copy-of-scale-diagnostic`, `/andrewsilver`, `/blog`, `/businessos`, `/copy-of-fractional`, `/copyright`, `/davegarcia`, `/elainebogart`, `/erikavelazquez`, `/fractional`, `/fundraising`, `/home`, `/jenniferkasper`, `/jianyang`, `/lauramerling`, `/marknewhouse`, `/meetveep`, `/memberdashboard`, `/munawarahmed`, `/officehours`, `/operatingpartners`, `/scale-diagnostic`, `/seanpark`, `/sprints`, `/subscribe`, `/victoriakasumu`, `/webinar`, `/copy-of-mark-newhouse-profile-page`, `/index`, `/index.html`, `/service`, `/roster`, `/team`, `/get-started`, `/book`, `/en`, `/sg`

Blog splat: `/post/*` (covers the four listed posts plus any others)

## Implementation

Follow the existing project pattern (see `src/routes/insights.tsx`): a route file that throws `redirect({ to: "/" })` inside `beforeLoad`. This runs on the server for direct visits AND on the client for internal navigation, so it works on the veep.work custom domain, not just via internal `<Link>` clicks. `redirect()` in TanStack Router issues a real HTTP redirect (SSR) / `router.navigate({ replace: true })` equivalent (client) — history is not trapped.

### Files to add

One tiny route file per legacy path, each of the form:

```tsx
// src/routes/agencies.tsx
import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/agencies")({
  beforeLoad: () => { throw redirect({ to: "/" }); },
});
```

Full list (~40 files):

```
agencies.tsx, alasdairlloydjones.tsx, copy-of-scale-diagnostic.tsx,
andrewsilver.tsx, blog.tsx, businessos.tsx, copy-of-fractional.tsx,
copyright.tsx, davegarcia.tsx, elainebogart.tsx, erikavelazquez.tsx,
fractional.tsx, fundraising.tsx, home.tsx, jenniferkasper.tsx,
jianyang.tsx, lauramerling.tsx, marknewhouse.tsx, meetveep.tsx,
memberdashboard.tsx, munawarahmed.tsx, officehours.tsx,
operatingpartners.tsx, scale-diagnostic.tsx, seanpark.tsx,
sprints.tsx, subscribe.tsx, victoriakasumu.tsx, webinar.tsx,
copy-of-mark-newhouse-profile-page.tsx, index-legacy.tsx (path "/index"),
index-html.tsx (path via `index[.]html.tsx`), service.tsx, roster.tsx,
team.tsx, get-started.tsx, book.tsx, en.tsx, sg.tsx,
post.$.tsx (splat: catches /post/anything)
```

### Trailing slash / case handling

TanStack Router normalizes trailing slashes by default, so `/blog/` matches the `/blog` route. Wix URLs are lowercase; no case variants needed. No extra work required.

### Catch-all fallback

**Not adding a global catch-all splat.** The root route already has a `notFoundComponent` (custom 404 with a "Back to Veep" CTA), which is the right behavior for typos and unknown URLs — a blanket redirect to `/` would hide real 404s and hurt SEO. The explicit legacy list above covers every Wix path the user provided.

## Report the plan will produce after build

1. **Preserved live routes:** `/`, `/about`, `/contact`, `/join`, `/pricing`, `/privacy`, `/terms`, `/services*`, `/faq`, `/compare*`, `/for-companies`, `/for-portfolios`, plus existing anchor redirects.
2. **Redirected legacy paths:** the ~40 files listed above, all → `/` (replace).
3. **Skipped (already live):** `/about`, `/join`, `/privacy`, `/terms`, `/contact`, `/services`.
4. **Catch-all fallback:** intentionally not added, to preserve the existing 404 page for genuine typos.

## Verification

After the files are created, hit each of these on the preview and note the final URL:

- `/about`, `/pricing` → stay (200)
- `/blog`, `/fractional`, `/operatingpartners`, `/scale-diagnostic`, `/sprints`, `/webinar` → `/`
- `/post/understanding-fractional-cfo-pricing-insights`, `/post/advantages-of-hiring-fractional-executives` → `/`
- `/portfolio` → 404 (route was never valid; not in Wix candidate list either)
