## Goal
Fix the currently-broken Wix contact submission, and stop showing raw provider errors to visitors. Keep Wix as the destination.

## Why the form is failing
Live test result: Wix returns `400 FORMAT_ERROR` on the hidden `linked_in` field — "must match format url". Our server function sends the literal string `"N/A"` for `linked_in`, which fails Wix's URL validator. Every real submission is being rejected the same way.

## Changes

### 1. `src/lib/wix-contact.functions.ts` — send URL-valid placeholders for URL-typed fields
- Introduce a `NA_URL` constant set to `https://veep.work/na` (valid URL, unmistakably a placeholder, on our own domain).
- Use `NA_URL` for `WIX_FORM_FIELDS.linkedIn` instead of `NA`.
- Keep `NA` ("N/A") for plain-text fields (role, industries, last name fallback, etc.).
- No other logic changes; subject/routing inside Wix stays as it is today.

### 2. `src/routes/contact.tsx` — hide raw provider errors from the visitor
- In the `catch` block of `handleSubmit`, stop surfacing `err.message` (which today can contain the full Wix JSON dump).
- Always show a single friendly line to the user: *"Something went wrong sending your message. Please email hey@veep.work or try again."*
- Still `console.error` the real error server-response for debugging in the browser console / logs.

## Verification
After the edits:
1. Re-run the Playwright submission against the preview build with real-looking values.
2. Confirm the server function returns `{ success: true }` (200 body from `/_serverFn/...` no longer contains `Wix API error`).
3. Confirm the success card ("Thanks — we'll be in touch.") renders.
4. Force a failure (e.g. temporarily bad payload) and confirm the visitor sees the friendly line, not JSON.

## Out of scope (deferred)
- Switching delivery to email-to-hey@veep.work (Cloud + domain setup) — not doing this per your choice.
- Any changes to the Wix form schema itself.
- Any change to the subject line or Wix-side routing (Wix owns that; our submission tags it via the `[Capacity audit request]` / `[Discovery call request]` prefix already in the notes body).
