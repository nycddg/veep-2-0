# Partner Dashboard — private live leads + recent wins

Rebuild the old Wix member dashboard as a proper gated area on veep.work, with individual partner logins and an admin screen so you can post updates yourself.

## What partners see

A single page at `/dashboard`, in the existing Veep dark editorial style:

- **Live leads** — cards/rows showing: pseudonym, anonymized one-liner, role needed, stage. Grouped or filterable by stage.
- **Recent wins** — compact list showing: role, engagement type, length.
- Header shows who is signed in, with sign out.

Nothing here is public: no sitemap entry, `noindex`, and the page redirects to sign-in when logged out.

## How people get in

- Email + password sign-in at `/auth`, plus Google sign-in.
- **No open sign-up.** You invite partners from the admin screen; only invited emails can create an account. Anyone else is bounced with "Ask Veep for an invite."
- You can revoke a partner at any time — they lose access immediately.

## Admin screen

At `/admin`, visible only to accounts you mark as admin:

- Add / edit / archive live leads (pseudonym, one-liner, role, stage, sort order).
- Add / edit / archive recent wins (role, engagement type, length, date).
- Manage partners: invite by email, see who has signed in, revoke access.

## Technical notes

- Enable Lovable Cloud (database + auth). Roles live in a separate `user_roles` table (`admin`, `partner`) with a `has_role()` security-definer function — never on the profile row.
- Tables: `profiles`, `user_roles`, `partner_invites`, `leads`, `wins`. RLS on all of them: `leads`/`wins` readable only by authenticated users holding the `partner` or `admin` role; writes restricted to `admin`. Explicit `GRANT`s to `authenticated` and `service_role`, no `anon` access.
- Routes go under `src/routes/_authenticated/` using the integration-managed gate; `/admin` adds a role check. Public `/auth` route handles sign-in, Google OAuth via the Lovable broker, and invite-gated sign-up.
- Legacy `/memberdashboard` route currently redirects to `/`; it will redirect to `/dashboard` instead so old links keep working.
- Google sign-in gets enabled on the auth provider in the same change.

## Out of scope for this pass

Per-partner personalization (only your leads), comments/notes, notifications, and file attachments. Easy to add later once the base is live.
