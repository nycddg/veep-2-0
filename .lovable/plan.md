# Migrate `/join` from veep.work

Bring the "Join Veep" operator-application flow into this site, translated into Veep's current editorial dark-tone system (no bento cards, hairline dividers, mono eyebrows, `PageHero` treatment).

## New routes

1. **`src/routes/join.tsx`** — operator application page (primary migration target).
   - `PageHero` — eyebrow "Join Veep", title "Step into the future of" / accent "executive leadership.", sub rewritten to match site voice (top ~1% of independent operators; embed, build, deliver; matched in 72 hours; deployed in under 10 days).
   - Section 1 "Who we're looking for" — editorial two-column split on `bg-surface-raised` with hairline `border-t border-white/10` rows. Bullets adapted from source: prior founder / C-suite / GM / SVP experience; interested in interim, fractional, or advisory engagements; track record in fast-paced environments; strong references; fractional experience a plus, not required.
   - Section 2 "Apply" — form on ink surface, same field styling as `contact.tsx` (reuse `Field` + `inputCls`; do not re-import from contact — inline them to keep routes independent). Fields (grouped, progressive `<details>` for optional):
     - Required: First name, Last name, Work email, LinkedIn URL, Resume (file input), Highest executive role held (select: CEO/Founder, President/COO, CFO, CRO/CMO, CPO/CTO, GM/SVP, Other).
     - Optional details: Personal site, Fractional/interim experience (Yes/No), Company types (checkbox group: Bootstrapped, VC-backed, PE-backed, Private, Public, Family-owned, Non-profit), Growth stages (Seed, Series A, Series B–C, Series D+, IPO, Buyout, Other), Functional expertise (CEO/GM, Strategy & Ops, Finance, People, GTM, Sales/Marketing/Revenue, Product, Operations, Other), Industry experience (text), Anything else (textarea), How did you hear of us (text).
     - Submit → local `useState` success card (same pattern as contact).
   - `head()`: unique title/description/og — "Join Veep — Apply to the operator roster".

2. **Nav & footer wiring**
   - `src/components/site/SiteHeader.tsx`: add `{ kind: "route", to: "/join", label: "Join" }` after FAQ in the right-side route group (both desktop + mobile nav). Extend the `to` union type.
   - `src/components/site/SiteFooter.tsx`: add a new "For operators" column (or append to Details) with `Join Veep → /join`. Extend `FooterLink` `to` union.

3. **Copy consistency pass**
   - Replace source's marketing tone ("top 1%", "powerful peer network") with Veep phrasing already used on site: "senior operators", "work that can't wait", "matched in 72 hours, deployed in under 10 days", "30-day fit guarantee" where relevant.
   - Mono eyebrows (`font-mono text-[10px] uppercase tracking-[0.12em] text-accent`), numbered `01/02/03` list markers like contact page.

## Visual rules (match existing site)
- No new bento/rounded cards for the criteria list — use `border-t border-white/10` row separators on `bg-surface-raised`.
- Form stays in a single restrained container (mirror contact.tsx `glass-card` since that pattern is still used for the form itself).
- No new colors, tokens, or fonts.
- No backend — form submit is client-only success state, matching contact.tsx.

## Out of scope
- No new server function, no file upload backend, no email integration.
- No changes to other pages beyond header/footer nav additions.
- No route-tree hand-edits (`routeTree.gen.ts` regenerates).

## Files touched
- add `src/routes/join.tsx`
- edit `src/components/site/SiteHeader.tsx`
- edit `src/components/site/SiteFooter.tsx`
