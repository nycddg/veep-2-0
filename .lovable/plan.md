## Update operator spotlight cards with real profiles

Pull data from the four veep.work profiles into `spotlightOperators` in `src/routes/index.tsx`, and pass the Wix-hosted headshot URLs into `OperatorProofCard` (it already supports `photoUrl`).

### New card content

**Jian Yang** — Finance Operating Partner
- Prior: UGE International · CBRE
- Outcomes: Raised $300M+ in capital (Series B/C, venture debt, SPAC IPO) · Led UGE through SPAC IPO on Toronto Venture Exchange · Ran finance teams across 4 continents
- Chips: Real Estate, Finance, Tech
- Photo: `https://static.wixstatic.com/media/5084f0_6f67c526803546fa8695a282e5b1c292~mv2.jpg/v1/crop/x_0,y_278,w_1132,h_1133/fill/w_400,h_400,al_c,q_85,enc_avif,quality_auto/Untitled%20design%20(12)_edited.jpg`

**Erika Velazquez** — Marketing Operating Partner
- Prior: Morning Brew · The Guardian
- Outcomes: Drove 550% user growth + 30% engagement lift at The Voice in 5 months · 2x CTR and new ad revenue streams at Morning Brew · 5x increase in deal size
- Chips: New Media, Consumer, GenAI
- Photo: `https://static.wixstatic.com/media/5084f0_9ee6e722e8564a30a97f2c7ba2767e8b~mv2.png/v1/crop/x_115,y_307,w_938,h_940/fill/w_400,h_400,al_c,q_85,enc_avif,quality_auto/Untitled%20design%20(13).png`

**Elaine Bogart** — Finance Operating Partner
- Prior: Fullscreen · Nifty's
- Outcomes: Led $120M+ in exit value (Nifty's→Moonpay, P3→Deluxe, Seibo→4Wall) · Built finance infra for 10x revenue growth at Fullscreen · 98% EBITDA improvement at Mojix
- Chips: Tech, Web3, Media
- Photo: `https://static.wixstatic.com/media/5084f0_1ae2bc09c75742eea3b45aa72d11aeee~mv2.png/v1/crop/x_0,y_283,w_1152,h_1151/fill/w_400,h_400,al_c,q_85,enc_avif,quality_auto/Untitled%20design%20(72).png`

**Victoria Kasumu** — People Operating Partner
- Prior: Zocdoc · Pager Health
- Outcomes: Scaled Zocdoc from ~50 to 700+ with high retention · Raised eNPS +30 points at a leading SaaS company · Enabled 40% team growth at Pager Health
- Chips: Hospitality, Tech/SaaS, Healthcare
- Photo: `https://static.wixstatic.com/media/5084f0_c97a4bd1542f40d6b6a86c2bf84410d4~mv2.png/v1/crop/x_0,y_144,w_1152,h_1152/fill/w_400,h_400,al_c,q_85,enc_avif,quality_auto/Untitled%20design%20(15).png`

### Also update

- `heroOperators` array (the compact hero collage) to the same four people with matching photos, so the hero and spotlight sections stay consistent.

### Files touched
- `src/routes/index.tsx` — replace `spotlightOperators` and `heroOperators` array contents; add `photoUrl` field on each.

No component changes needed — `OperatorProofCard` already renders `photoUrl` in both `spotlight` and `compact` variants.
