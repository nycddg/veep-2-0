## Goal
Connect the operator application form on `/join` to a Wix form so every submission lands in the Wix Forms collection, with the applicant's resume file stored in Wix Media Manager and linked inside the submission.

## How it will work
1. Applicant fills out the existing form on `/join` and attaches a resume.
2. On submit, the browser sends FormData to a TanStack Start server function.
3. Server function validates the data, uploads the resume to Wix Media Manager, then submits all fields to the Wix Forms API via the Lovable connector gateway.
4. The UI shows a success confirmation (same as today) or a clear error message if Wix rejects the submission.

## What you need to do first
- Connect the Wix account `garcda6@gmail.com` to this project via the Lovable connector prompt. This will expose `WIX_API_KEY` and `LOVABLE_API_KEY` to the server runtime.
- Identify the target Wix form: either share the Wix form ID, or we'll query your sites and forms and let you pick one.

## Implementation steps

### 1. Wix connection & discovery
- Link the Wix connector to the project using `standard_connectors--connect` (connector ID: `wix`).
- Query available Wix sites through the gateway (`POST /site-list/v2/sites/query`) to get the site ID.
- Query the Wix Forms list (`GET /form-submission-service/v4/forms` or equivalent) to discover the target form ID and its field keys.
- Persist the chosen site ID and form ID as runtime config (env vars or a project setting file).

### 2. Resume upload to Wix Media Manager
- Add a server-only helper `src/lib/wix.server.ts` that:
  - Calls `POST /site-media/v1/files/upload-url` to generate a signed upload URL.
  - PUTs the resume file bytes to the signed URL.
  - Returns the Wix media file ID and public URL.
- This keeps the resume in the same Wix site as the form submission.

### 3. Form submission server function
- Create `src/lib/wix-application.functions.ts` exposing a `submitApplication` server function.
- It accepts `FormData`, validates required fields with Zod, and:
  - Reads the resume file and uploads it via the Wix Media Manager helper.
  - Maps form fields to the Wix form field keys discovered in step 1.
  - Calls `POST /form-submission-service/v4/submissions` through the Lovable gateway with the resume media URL included as a field value.
- Returns `{ success: true }` or `{ success: false, error: string }`.

### 4. Frontend wiring
- In `src/routes/join.tsx`, replace the current `onSubmit={() => setSubmitted(true)}` stub with a real handler:
  - Build `FormData` from the form fields and resume file.
  - Call `submitApplication` via `useServerFn`.
  - Show a loading state on the submit button.
  - On success, render the existing "Application received" confirmation.
  - On error, display a friendly inline message and allow retry.

### 5. Security & error handling
- All Wix API calls happen server-side; credentials never reach the browser.
- Validate file type (PDF, DOC, DOCX) and size (max 10 MB) before uploading.
- Surface Wix validation errors (e.g., missing required Wix fields) without leaking raw API keys.

## Files to touch
- `src/lib/wix.server.ts` — new server-only Wix gateway helper
- `src/lib/wix-application.functions.ts` — new server function for the submission
- `src/routes/join.tsx` — wire the real submit handler
- `src/lib/wix-config.ts` — new config file for site ID / form ID (or use env vars)

## Testing
- After connecting Wix, submit a test application through the preview.
- Verify the submission appears in the Wix Forms dashboard and the resume opens from Media Manager.
- Check error handling by submitting without required fields and with an oversized file.

## Open decisions
- The exact Wix form to target (we need the form ID or permission to discover it).
- Whether the form already has fields matching the application (name, email, LinkedIn, role, etc.) or we should create a new Wix form to match our data.
