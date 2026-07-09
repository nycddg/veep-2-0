Replace the copy on `/for-portfolios` with the new draft provided. This is a pure content update; the existing page structure, components, and styling are preserved.

Scope of changes in `src/routes/for-portfolios.tsx`:

1. **Hero section**
   - Update `PageHero` props: title becomes `Your operating partner function, ready when the portfolio needs it.` with no accent tail (the whole title is one string).
   - Subtext becomes the full new paragraph ending with the 72-hour / 10-day / 30-day guarantee lines.
   - Keep existing CTAs: `Book intro call` and `Request a capacity audit`.

2. **"Where portfolios lose time" section**
   - Replace the section heading: `Transactions create volatility. The work still needs an owner.`
   - Replace the 3 `problems` array entries with the 4 new entries: pre-close needs, post-close staffing, executive transitions, and smaller firms relying on an informal roster.

3. **"Start here" / Audit section**
   - Eyebrow stays `Start here`.
   - Heading: `Portfolio Capacity Audit.`
   - Subtext: the new paragraph about mapping transactions and operating priorities across the portfolio.
   - Replace `auditDeliverables` with the 6 new items (portfolio-wide leadership and operator gap map, function coverage assessment, upcoming transaction/event triggers, recommended roster structure, emergency coverage path, priority shortlists).
   - "Then" panel: update heading to `Portfolio Executive Roster` and subtext to the new retained operating partner paragraph. Update the bullet list to the 3 new lines: `Annual roster: $75k`, `Usage billed separately at preferred rates`, `MSA activated once, SOWs per engagement`.

4. **"Roster model" section**
   - Eyebrow: `Roster model` (singular).
   - Title: `Portfolio Roster` with no accent tail.
   - Price: `$75k / year · usage billed separately`.
   - Target audience text: `Built for private equity firms, family offices, holding companies, and independent sponsors that engage in frequent transactions or manage recurring operator needs across multiple companies.`
   - Replace `tiers` items with the 7 new includes.
   - Keep the engagement-pricing link.
   - Update the note below the tier to include `Operator in the Loop` in the list of engagement types.

5. **"How it works" section**
   - Keep eyebrow and title.
   - Replace `steps` array with the 4 new descriptions (capacity audit, MSA signed once, SOW per engagement, quarterly review).

6. **"What the retainer covers" section**
   - Keep eyebrow and title.
   - Replace `included` array with the two new descriptions for "In the roster" and "Billed by SOW".

7. **Footer CTA**
   - Headline: `Stabilize the operator gaps across your portfolio.`
   - Subtext: `Book a 30-minute call to walk through the audit and roster model. We will tell you directly whether Veep is the right operating partner function for your firm.`

No new components, routes, or dependencies are required. Page metadata (`head`) stays the same unless you want it updated.