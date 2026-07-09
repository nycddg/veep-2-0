## Goal

Replace the four operator spotlight photos on the home page with the newly uploaded headshots.

## Steps

1. Create Lovable Asset pointers from the four uploads (keeps binaries out of the repo):
   - `user-uploads://jianyangheadshot.png` → `src/assets/operator-jian-yang.png.asset.json`
   - `user-uploads://erikaheadshot.png` → `src/assets/operator-erika-velazquez.png.asset.json`
   - `user-uploads://elainebogartheadshot.png` → `src/assets/operator-elaine-bogart.png.asset.json`
   - `user-uploads://victoriakasumuheadshot.png` → `src/assets/operator-victoria-kasumu.png.asset.json`

2. In `src/routes/index.tsx`, import the four `.asset.json` pointers and replace each entry's `photoUrl` in the `spotlightOperators` array with the imported pointer's `.url`.

## Out of scope

- No changes to `OperatorProofCard` — it already renders `photoUrl` with the grayscale + accent overlay treatment that matches the uploaded portraits.
- No copy changes to names, roles, prior companies, summaries, or chips.
