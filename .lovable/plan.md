## Audit findings

Scanned every route in `src/routes/` and every component in `src/components/site/`. Grouping issues by severity.

### P0 — visible bugs

1. **"Book a call" CTA is invisible** — `src/components/site/SiteHeader.tsx` L49 and L83 use `bg-cream ... text-cream` (cream text on cream background). Both desktop and mobile primary CTAs read as a blank pill. Change to `text-ink` (or `text-background`).

2. **Homepage "Book a call" hero button** — check `primitives.tsx` `DualCTA` (L98) uses `bg-cream text-ink` which is correct. Confirmed OK, but audit L28 (`Section` accent) uses `bg-cream text-ink` on the light-tone section — OK.

3. **Featured pricing card on dark background is low-contrast** — `services.fractional-cfo.tsx` L63 and `for-portfolios.tsx` L122 render the featured tier as `bg-ink text-cream border-ink` on top of an already dark `bg-background` section, so the card visually disappears. Featured tier should invert to cream/light or use a distinct accent border.

### P1 — cross-page inconsistencies

4. **Two competing CTA styles** — header uses `rounded-md`; hero + FooterCTA use `rounded-full`. Pick one (recommend `rounded-full` to match the site's pill language) and apply consistently in `SiteHeader` desktop + mobile.

5. **Mixed section heading fonts** — most redesigned sections use `text-4xl tracking-tight` (Inter Tight), but many route pages still use `font-serif text-4xl` on H2s (`services.*`, `for-portfolios`, `for-companies`, `operators`, `about`, `contact`, `insights`). Because `--font-serif` was remapped to Inter Tight this renders the same, but the class is misleading and inconsistent with the new system. Standardize on plain `text-4xl tracking-tight` and drop `font-serif`.

6. **404 / Error pages use old palette** — `__root.tsx` NotFound and Error components use `font-serif`, `bg-ink`, `text-cream`, `text-foreground` mixed with `bg-background`. Update to match dark theme + new type system.

7. **Section indexing inconsistent** — Homepage uses `[0N] / CATEGORY` indexed sections; sub-pages (`services.*`, `for-companies`, `for-portfolios`, `about`, `operators`, `partners`, `insights`, `contact`) do NOT. Add matching `[0N]` indices via `Section index=... category=...` to every sub-page for consistency.

8. **PageHero vs. inline hero drift** — `contact.tsx` L29–41 hand-rolls a hero instead of using `PageHero`. Convert to `<PageHero>` so eyebrow, title, italic, and sub styling match every other page.

### P2 — content and copy consistency

9. **"Fractional CFO" vs "Fractional C-Suite"** — `CaseSwitcher.tsx` L11 still says "Fractional CFO stepped in…". Rewrite as "A Veep fractional CFO stepped in…" or "Our fractional finance operator…" so it reads as a specific role placement, not the product name. Product name is "Fractional C-Suite" everywhere else.

10. **`AudienceTabs.tsx` L53** — panel title "Interim CFO / COO" — rename to "Interim coverage" to match `/services/interim` route title and footer link.

11. **Footer link parity** — `SiteFooter` "Services" column lists 4 wedges, header nav only exposes top-level `/services`. Fine, but ensure `/services` index actually links to every wedge in the same order (it does — verified).

12. **Contact page eyebrow color** — L34 uses `italic text-forest` for the emphasized clause; `forest` now maps to warm gold. Confirm this is intentional or switch to `text-stone` for a subtler read consistent with the rest of the site.

### P3 — token / class hygiene

13. **Legacy tokens still in code** — `text-forest`, `bg-forest/15`, `bg-forest-deep`, `text-forest-foreground` appear in 8 files. They still render (remapped to gold/charcoal) but are semantically misleading now. Optional pass: rename to `text-accent-gold`, `bg-accent-gold/15`, `bg-ink`, `text-cream` for clarity. Non-visual.

14. **`font-serif` class usage** — same story as #5; kept working via CSS remap. Optional cleanup pass to remove the class everywhere.

## Fix plan (only P0–P2, in order)

1. `SiteHeader.tsx` — fix invisible "Book a call" (desktop L49 + mobile L83): `bg-cream text-ink rounded-full`; also switch "Talk to us" to `rounded-full` for consistency.
2. `services.fractional-cfo.tsx` + `for-portfolios.tsx` pricing grids — swap featured tier to `bg-cream text-ink border-cream` so it pops on dark.
3. `__root.tsx` NotFound + Error — restyle to dark palette (`bg-background text-cream`, Inter Tight sizes, pill CTAs matching site).
4. `contact.tsx` — replace inline hero with `<PageHero>`; keep tabs + form.
5. Add `Section index=... category=...` wrappers to every sub-page so all pages carry the `[0N] / CATEGORY` chrome.
6. Standardize section H2s to `text-4xl md:text-5xl tracking-tight` (drop `font-serif`) across `services.*`, `for-*`, `about`, `operators`, `partners`, `insights`, `contact`.
7. `CaseSwitcher.tsx` L11 copy tweak.
8. `AudienceTabs.tsx` L53 panel title → "Interim coverage".
9. `contact.tsx` L34 — swap `text-forest` to `text-stone` on the emphasized clause.

P3 (token renames) skipped unless you want the full cleanup pass — they render correctly today.

## Out of scope

- No new routes, no copy rewrites beyond items #9–10, no illustration changes, no responsive/layout redesign.
- No dependency changes.

Approve and I'll implement P0–P2 in one pass, then screenshot `/`, `/for-companies`, `/services/fractional-cfo`, and `/contact` to verify.