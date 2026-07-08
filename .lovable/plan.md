Replace all mentions of "Bottleneck Call" across the site with the new "30-minute call with a Veep founder" framing, keeping the tone consistent with the existing site voice.

## Files and exact changes

1. **src/components/site/FooterCTA.tsx**
   - Change: `Book a 30-minute Bottleneck Call. Matched in 72 hours...` → `Book a 30-minute call with a Veep founder. Matched in 72 hours...`

2. **src/components/site/ObjectionList.tsx**
   - Change: `We run a 30-minute Bottleneck Call to clarify the work...` → `We run a 30-minute call with a Veep founder to clarify the work...`

3. **src/routes/pricing.tsx**
   - Change: `Book a 30-minute Bottleneck Call. We'll clarify the work...` → `Book a 30-minute call with a Veep founder. We'll clarify the work...`
   - Change: `Bottleneck Calls and operator matching are free.` → `Calls with a Veep founder and operator matching are free.`
   - Change: `No. Bottleneck Calls and operator matching are free.` → `No. Calls with a Veep founder and operator matching are free.`

4. **src/routes/faq.tsx**
   - Change: `Most engagements begin in under 10 days from the Bottleneck Call.` → `Most engagements begin in under 10 days from the call with a Veep founder.`
   - Change: `No. Bottleneck Calls and operator matching are free.` → `No. Calls with a Veep founder and operator matching are free.`
   - Change: `If the answer is not here, book a Bottleneck Call.` → `If the answer is not here, book a 30-minute call with a Veep founder.`

## What stays the same

- The surrounding copy, CTAs, and structure of each component/page.
- No new files, no route changes, no dependency installs.

## Verification

- Run a build to confirm no JSX/string breakage.
- Search the codebase after the edit to confirm zero remaining "Bottleneck Call" references.

## Open question

For the plural mentions (`Bottleneck Calls and operator matching are free`), the rewrite becomes `Calls with a Veep founder and operator matching are free`. If you'd prefer a different phrasing like `Intro calls with a Veep founder...`, let me know — otherwise I'll proceed with the plan above.