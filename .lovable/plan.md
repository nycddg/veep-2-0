# Plan: Portal operational data — admin-managed database with future source integrations

## Recommendation
Build both.

- **Database now**: Supabase tables for the portal operational data (operators, clients, companies, engagements, assignments, jobs, proposals, invoices, documents, agreements, invitations, payouts). This lets the demo feel real and gives Veep admins control.
- **Admin view now**: A single admin area where the Veep team can add/edit/archive content per person and per company. No self-serve for clients/operators.
- **Source integrations later**: Design the tables so rows can be tagged with an external source (e.g., `copper`, `quickbooks`, `google_docs`) and a source ID. When Copper, QuickBooks, or Google integrations are ready, the same rows can be seeded or synced from those systems without re-architecting the portal.
- **Mock store stays during transition**: Keep the existing `PortalStoreProvider` as a session-only fallback until the real database is wired in. That way the portal keeps working while we migrate section by section.

## Why not self-serve or external-only?

- **External-only today** would mean building fragile integrations before we know the exact field mappings, and the demo would depend on live credentials. Too slow and risky for a demo-first goal.
- **Self-serve** would let clients/operators edit their own data, which you explicitly ruled out.
- **Admin-managed database** gives the team control, makes the demo real, and creates the future integration target.

## Phase 1: Database schema (this plan)

Add tables in `public`:

- `companies` — name, domain, slug, plan, status, notes
- `operators` — profile name, headline, photo URL, highlights, functions, industries, stages, proof points, preferences, LinkedIn, marketing opt-in, availability status
- `operator_availability` — operator_id, days_per_week, earliest_start, blackouts, travel, updated_at
- `clients` — company_id, name, email, role
- `engagements` — company_id, operator_id, job_id, offer_type, start, end, state, goals, cs_contact, files, updates, requests
- `assignments` — operator_id, company_id, job, offer_type, start, end, state, goals, files, updates
- `jobs` — company_id, title, status, urgency, owned_today, success, constraints, timeline
- `proposals` — company_id, job_id, name, sent_on, status, commercial, inclusions
- `invoices` — company_id, number, period, amount, status
- `payouts` — operator_id, engagement_id, date, amount, status
- `documents` — company_id, name, kind, status, dated, source_url
- `agreements` — operator_id, name, kind, status, dated
- `invitations` — operator_id, title, company_id, commitment, location, respond_by, status, brief, success, offer_type
- `operator_team_members` — operator_id, name, email, role, status
- `client_team_members` — company_id, name, email, role, status

Each table gets:
- `id`, `created_at`, `updated_at`
- `created_by` (admin user id)
- `source` text field (`manual`, `copper`, `quickbooks`, `google_docs`) defaulting to `manual`
- `external_id` text field for the source record ID
- Standard GRANTs for `authenticated` and `service_role`
- RLS policies: admin full access; read access scoped to the owning operator or client company

Create a `portal_admins` or reuse `user_roles` with `admin` for admin access. Portal users will use the existing `profiles` + `user_roles` pattern, but with new roles like `operator`, `client`, `portal_admin` added to `app_role` enum.

## Phase 2: Admin view

Extend `/admin` (or create `/portal/admin`) with management sections:

- **Companies**: list, add, edit, archive
- **Operators**: create operator profile, link to user, set availability
- **Clients**: create client, link to company
- **Engagements / Assignments**: create and manage per company/operator
- **Jobs / Proposals / Invoices**: create per company
- **Documents / Agreements / Invitations**: create per operator or company

UI pattern: simple two-column layout — left sidebar list of companies or operators, right panel form and related records. Use the same `Surface` and `Row` components already in the portal for visual consistency.

## Phase 3: Seed the demo

After the schema is created, seed realistic demo data that matches the current mock store. The portal then reads from the database instead of `mock-store.tsx` for those sections. We migrate one section at a time:

1. Operator profiles + availability
2. Client companies + jobs
3. Engagements + assignments
4. Proposals + invoices + documents
5. Invitations + agreements

Once all sections are migrated, remove the mock store.

## Phase 4: Future integrations (not in this plan, but designed for it)

When you are ready:

- **Copper**: sync companies, people, opportunities, engagements into the same tables, marking `source = 'copper'` and `external_id = <copper id>`.
- **QuickBooks**: sync invoices and payouts.
- **Google Docs/Drive**: sync document links into `documents.source_url`.
- **Google Sheets**: can remain for the public partner dashboard (leads/wins) and also seed operator/client static data.

Because the admin view writes the same tables, you can mix manual and synced data without changing the portal UI.

## What stays the same

- The portal routes and visual design in `PortalShell`.
- The partner dashboard (leads/wins) continues reading from Google Sheets as it does now.
- No self-serve for clients/operators.
- Supabase auth + role-based access.

## What changes

- New database tables in Supabase.
- New admin screens to manage portal data.
- Portal components switch from `usePortal` mock data to real database queries using `useServerFn` + Supabase.
- `mock-store.tsx` is eventually removed after the migration.

## First step

Create the schema and seed demo data. Then build the admin company/operator management screens. Then wire the Operator Home and Client Home to read from the database.
