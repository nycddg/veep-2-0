## Goal

Migrate `veep.work/privacy` and `veep.work/terms` into this site as simple interior pages that match the existing visual language, and expose them only in the footer (not the global nav).

## New route files

Both routes use the shared `PageHero` (dark editorial hero with mono eyebrow, cream headline + indigo accent tail, cream pill CTA + ghost link) and reuse the existing max-w-7xl container, cream/stone text tokens, IBM Plex typography, and `FooterCTA` for closing.

### `src/routes/privacy.tsx`
- `createFileRoute("/privacy")` with full `head()`: unique title ("Privacy Policy | Veep"), description, og:title, og:description.
- Hero: eyebrow "Legal", title "Privacy", accent "Policy.", sub-line referencing the effective date and that it explains how The Veep Group, LLC collects, uses, and protects information.
- Body: single-column prose section (`max-w-3xl`, `text-stone` body, cream `h2` section titles with mono eyebrow-style numbering) rendered from a typed `sections` array so the file stays compact. Section list mirrors the source: About Veep, Information We Collect (Personal, Optional Demographic, Automatically Collected), Cookies & Tracking, How We Use Your Information, How We Share Your Information, Data Storage & Security, Children's Privacy, Communications & Marketing, Third-Party Links, Legal Disclosures, Changes to This Policy, Contact Us. Copy migrated verbatim from the source, lightly cleaned (remove stray zero-width chars, fix "Servic" typo, keep bullet lists as `ul`).
- Contact block links `hey@veep.work` and internal `/terms`.
- Closes with `FooterCTA`.

### `src/routes/terms.tsx`
- `createFileRoute("/terms")` with its own unique `head()` metadata.
- Hero: eyebrow "Legal", title "Terms of", accent "Service.", sub-line referencing last updated date.
- Same prose treatment as privacy. Sections migrated verbatim: Overview of Our Service, Acceptance of Terms, Updates to These Terms, Privacy (links to `/privacy`), Jurisdictional Compliance, Account Responsibility & Platform Monitoring, Our Intellectual Property, Copyright Compliance, Feedback, Acceptable Use Policy, Third-Party Links, Disclaimers, Limitation of Liability, Termination, Governing Law & Dispute Resolution, Miscellaneous, Questions.
- The source references an external Copyright Policy page — render as plain text (no link) since we are not migrating that page.

## Footer changes (`src/components/site/SiteFooter.tsx`)

- Extend the `FooterLink` route union to include `"/privacy" | "/terms"`.
- Add a third column titled "Legal" with links to Privacy and Terms.
- No changes to `SiteHeader` / global nav.

## Out of scope

- No changes to global navigation.
- No new shared components; both pages use `PageHero` and `FooterCTA` only.
- No CMS/markdown pipeline — content lives inline in the route files as typed data.
