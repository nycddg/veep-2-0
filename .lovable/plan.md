# Site copy v5 — drop-in plan

Pure copy replacement across live pages and shared chrome. No structural rewrites. Two items need a design decision (flagged at bottom); everything else is straight text swap.

## Files changed

### Shared chrome

- `**src/components/site/SiteFooter.tsx**`
  - Tagline: → "Vetted senior operators who step in to own critical work, now. Matched in 72 hours. Deployed in under 10 days."
  - Sign-off (bottom-right small line): "Senior operators for work that can't wait." → **"Critical work, owned."**
- `**src/components/site/FooterCTA.tsx**` — no change; default already matches v5.

### Home (`src/routes/index.tsx`)

- **Meta**: og:title → "Critical work, owned. | Veep"
- **Section 2 "What Veep is"**: rewrite both paragraphs per v5 (adds "investment firms", removes "before the permanent executive hire makes sense", adds "when permanent headcount is the wrong answer for the work that needs to move now").
- **Section 3 problems array**: retitle item 2 → "The work cannot wait for a perfect org chart." + updated body; retitle item 3 → "You are stuck in the middle." Update supporting copy.
- **Alternatives array ("Instead of")**: replace titles/bodies with v5: **Full-time hire** / **Consulting firms** / **Freelancers and advisors**.
- **Add close line** under alternatives grid: *"Three options. None of them get you the outcomes you need, when you need them..now. But Veep does."*
- **Section 4 "What we do"** intro: swap "unfortunately coming back to you to solve" → "landing back on you to solve"; append product-line strapline: *"Vetted senior operators who step in to own critical work, now."*
- **Benefits H2**: "Executive capacity, before the executive hire." → **"Four reasons to believe. Plus the practical terms."** (Note: v5 heading says "four" but there are still 6 numbered items. Keeping the 6 items — heading is v5's own wording.)
- **Engagements H2**: "Pick the level of support the work needs." → **"Four engagement shapes. Same promise."** Expand each engagement `bestWhen` to v5 fuller descriptions. Add a caption line under the 4 tiles: *"Lead with the work. Choose the shape after the work is clear."*
- **Differentiators (compare table)**: add 7th row **"Outcomes when you need them"** — Veep: "Now" / Old: "After the search, after the deck, or variable quality" (inserted between Ownership and Cost).
- **Add closing line under compare table**: same "Three options…" close.
- **New band between compare table and objections — "For portfolios"** (flagged, see below).

### About (`src/routes/about.tsx`)

- "The problem" body: append "Ownerless work kept landing on founders."
- "Meet Veep" body: swap to v5 (remove "flexible,"; append "Veep delivers on-demand operating capacity.").
- FooterCTA `headline` prop: "Your next big move starts here." → **"Tell us what cannot wait."** (sub already matches v5).

### Pricing (`src/routes/pricing.tsx`)

- FooterCTA `headline`: "Make your next big move." → **"Tell us what cannot wait."** (sub already matches v5).
- Everything else already matches.

### FAQ (`src/routes/faq.tsx`)

- Engagement Q "How is Veep different from executive search?": drop "before the full-time hire makes sense" phrasing; use v5 wording.
- Portfolios Q "How does the Executive Roster work…": swap "holdcos" → "holding companies", "executive-capacity" → "operating-capacity".
- Referral Q: "before a permanent hire makes sense" → "companies with critical work that needs senior ownership now."

### Contact (`src/routes/contact.tsx`)

- Default (call) H1: "What critical initiative doesn't have an owner?" → **"What critical work doesn't have an owner?"**
- Audit H1 already matches.

### Join (`src/routes/join.tsx`)

- Meta description updated to v5 wording ("Apply to Veep's invite-only network…").
- Criterion #2 body: "not management" → "not management theater"; "fractional experience" → "fractional or interim experience".

### Meet Veep (`src/routes/meetveep.tsx`)

- Meta title/description/OG per v5.
- Body paragraphs updated to v5 ("Your company may not be ready, willing, or able…" / "Veep matches founder-led companies…").
- Insert a "Product line" strapline above the bullets: *"Vetted senior operators who step in to own critical work, now."*
- Bullets updated to v5 exact wording:
  - "Deployed in under 10 days"
  - "Save 40–80% vs. firms or permanent hires"
  - "Flexible terms: scoped to the work (advisory, project, or ongoing)"
  - "30-day fit guarantee"

### Privacy (`src/routes/privacy.tsx`)

- Section 01 body: rewrite per v5 ("invite-only network that connects businesses ('Clients') with vetted senior operators ('Operating Partners') for advisory, project, and ongoing operating engagements").

### Terms (`src/routes/terms.tsx`)

- Section 01 body: "managed marketplace platform" → "managed platform"; "vetted consultants" → "vetted senior operators"; "fractional, advisory, or project-based executive services" → "advisory, project-based, and ongoing executive operating services".

### Not touching (v5 has no changes, or purely off-nav)

- `AudienceTabs.tsx`, `TriggerBento.tsx`, `CaseSwitcher.tsx`, `CompareTable.tsx`, `StatsBand.tsx` — belong to legacy off-nav routes (`/service`, `/en`, etc.) not in v5 nav; leaving unchanged.
- `Testimonials.tsx`, `ObjectionList.tsx`, `OperatorSpotlightRail` operator data, `PageHero`, `EngagementTile` — copy already matches v5.
- Operator profile microcopy in `heroOperators` / `spotlightOperators` arrays — v5 unchanged.

---

## 🎨 Design decisions needed (flagging before build)

1. **New "For portfolios" band on the home page** (v5 Section 11, between compare table and "Before you book"). v5 wants:
  > Eyebrow: "For PE, VC, family offices, and holding companies"
  > H2: "Portfolio companies don't pause for a search."
  > Body paragraph + two CTAs: "See how portfolio rosters work" · "Request a capacity audit →"
   **Options**: (a) match the existing Pricing-page "Portfolios callout" treatment (left navy rule, quiet band) — safest and consistent; (b) build a new dedicated band with more visual weight (image, stats, or split layout). **Default to (a)** unless you want (b).
2. **v5 Benefits heading says "Four reasons"** but the on-page grid has **six** benefits. Two paths:
  - (a) Use v5's heading verbatim ("Four reasons to believe…") and accept the mismatch, or
  - (b) Rephrase heading to "Six reasons to believe. Plus the practical terms." to match the grid count.
   **Recommend (b)** — cleaner. Confirm which.

Everything else is a straight text swap with zero structural or design impact. Once you answer the two flags I'll implement in one pass.  
  
1. a match existing  
2. b. six reasons