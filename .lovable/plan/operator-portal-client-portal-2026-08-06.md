# Operator Portal + Client Portal

Two signed-in portals built on the existing Veep sign-on and the existing anonymized network dashboard, with rich placeholder data so every screen is demoable today.

## Recommendations (changes to the ask)

1. **Use the real sign-on, not a TEMP role picker.** Sign-in already exists at `/auth` with a gated area and an admin/partner role table. I'll add a `client` role to the same table and route by role after sign-in. A dev-only role switcher stays behind an obvious TEMP banner, visible only to admins — so demos work without a fake login screen shipping to production.
2. **Keep the existing dashboard route alive.** `/dashboard` stays and becomes the Operator Home. The Network pulse section reuses the current live-leads + recent-wins rendering and the Google Sheet feed, with placeholder rows when the sheet is empty. `/memberdashboard` keeps redirecting there.
3. **Mock data is session-only and clearly marked.** One store, relative dates, resets on reload. Every screen backed by mock data gets a quiet "Demo data" label so nobody mistakes it for live CRM. Real data can replace the store screen by screen.
4. **Client company switcher scoped to the fund mock only.** Single-company clients never see it.
5. **Operator "Pay" naming.** I'll use "Payments" in nav — "Pay" reads like an action button.
6. **Not building this pass:** notifications beyond a static bell, file upload (links only), real PDF rendering (a styled panel stands in), and email invites (invite adds a Pending row).

## What gets built

**Shared portal shell** — wordmark home-by-role, section nav, notifications bell, user menu (profile, sign out), Support link, theme toggle inherited from the site.

**Operator portal** (`/portal/operator/*`): Home, Match invitations, Assignments, Availability, Profile, Agreements, Payments, Support.

- Home: one primary action strip → Network pulse (existing anonymized feed, 10 active + 4 wins seeded, never a company name) → assignments snapshot → availability + pay + agreements needing signature.
- Match invitations are personal and visually separate from Network pulse; detail view with Interested / Decline updating state. Other candidates are never shown.
- Availability, weekly updates, and invitation responses persist for the session.

**Client portal** (`/portal/client/*`): Home, Jobs, Proposals, Engagements, Team, Documents, Billing, Support.

- Mock account Acme Capital with Northwind Manufacturing and Blue River Foods, switchable.
- Job request form creates a Submitted job. Proposal Accept flips status and reveals the next-steps checklist. Engagement workspace shows the assigned operator as a single portrait surface, goals, weekly updates, fit-guarantee and change-request forms.
- No operator browsing anywhere in the client portal.

## Design

Content layout over container layout: spacing and type carry hierarchy, at most one raised surface per unit, no nested cards or tinted grouping panels. Dense lists (invoices, invitations, jobs, payouts) are tables with clean rows, collapsing to stacked rows under 640px. Status is quiet text or one subtle pill. One primary CTA per view. Existing site tokens only — accent used sparingly, coral reserved for destructive/featured. Both themes checked; primary flows verified at 390px.

## Technical notes

- Routes live under `src/routes/_authenticated/portal/` so the existing gate protects them; `noindex` on all, none in the sitemap.
- `src/lib/portal/mock-store.tsx` — a React context with reducer-backed session state and relative-date seed data, split into `operator-seed.ts` / `client-seed.ts`.
- Role resolution extends `src/lib/partner-data.ts` (`useIsAdmin` → `useRole`), reading the existing `user_roles` table; a migration adds `client` to the role enum plus policies/grants.
- Network pulse extracts the current lead/win card rendering from `dashboard.tsx` into shared components so the sheet-backed feed and the seeded placeholders share one presentation.
- `/dashboard` and `/admin` keep working; `/dashboard` renders the operator home.