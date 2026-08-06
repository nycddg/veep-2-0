# Remove network pulse from Client portal

Keep the Operator portal's anonymized network pulse; remove it from the Client portal.

## What to change

- Remove `NetworkPulse` import and usage from `src/routes/_authenticated/portal/client/index.tsx`.
- Update the `PageHeader` intro on the Client home so it no longer references "what the network is working on".
- Leave the Operator home (`src/routes/_authenticated/portal/operator/index.tsx`) and the `NetworkPulse` component unchanged.

## Verification

- Client home renders without the "Network pulse" section.
- Client home intro still reads naturally.
- Operator home still shows its network pulse section.
- Typecheck passes and no dead imports remain.
