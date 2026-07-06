# Incorporate from live veep.work (approved subset)

Skipping items 5 (services restructure), 7 (pricing), 9 (3-step process), 11 (newsletter). Implementing the seven below.

## 1. Real operator roster → `/operators`

Replace the six fake anonymized cards (Maya R., Jordan K., …) with the 26 real operators from `/operatingpartners`. Each card: initials avatar, name, title, company line in mono (e.g. "Meta · LVMH · MediaLink · Macy's"), and industry pills. Grid goes to 3 columns on desktop to accommodate the count.

Roster ingested verbatim from the live site — Jian Yang, Miguel Ferreya de Bone, Elaine Bogart, Vanessa Kwan, Stephanie Lung, Yong Kang, Victoria Kasumu, Melanie Kingdon, Jessica Davila, Sean Park, Jennifer Kasper, Chrysi Philalithes, Erika Velazquez Alpern, Alasdair Lloyd-Jones, Christine Miranda Barnekow, Stephanie Shore, Dave Garcia, Steve Reed, Kostja Mirkovic, Mark Newhouse, Munawar Ahmed, Jorge Lopez, Laura Merling, Gary Kilponen, Andrew Silver, Bob Gower.

No headshots yet (initials avatars); text tags only for company names.

## 2. Real metrics → homepage proof strip

Replace invented figures with the four the live site uses everywhere:
- **$1B+** capital raised
- **15+** startup exits (down from our invented "20+")
- **$2B+** cost savings
- **30M** users served (replaces invented "$3B revenue created")

## 3. Real testimonial → homepage

Rewrite `Testimonials.tsx` to feature one attributed quote instead of three anonymous ones:
> "I cannot recommend this team more highly. They think, act, and engage like co-founders."
> — Jerry Kolber, Founder & CEO, Atomic Audio

Single centered/large layout, keeps the numeric `0.1 / VERIFIED` chrome.

## 4. Positioning voice → homepage

Adopt the sharper live-site phrasing:
- Hero eyebrow becomes **"Elite Strategy · Operator Hustle · Freelancer Speed"** (replaces "Operator-led · 30-day fit guarantee" — guarantee moves into the trust chips below).
- Sub-hero tagline block adds **"Second-in-command, on-demand."**
- Rename the compare-section heading to **"Better. Faster. Cheaper. Really."**

## 6. Functional coverage grid → `/services` index

Since we are NOT restructuring services (item 5 skipped), add a new section to the existing `services.index.tsx` with the five-function grid from `/fractional`:
- **Finance** — systems & processes, annual planning, FP&A, funding & IR, compliance
- **People** — talent systems, org structure, policies, internal comms, performance
- **Marketing & Revenue** — GTM, acquisition & retention, revops, market launches, product rollouts
- **Operations** — business OS, SOPs, infrastructure, geo expansion, turnarounds
- **Product** — launch & scale, user insights, vertical expansion, workflows, adoption

Section slots below the existing "Wedges we lead with" block.

## 8. Compare table → homepage

Replace the current 4-column narrative CompareTable with the live-site 6-row × 4-column matrix (dimensions × approaches):

```text
              Veep        Exec Hiring  Consulting   Freelancers
Speed         Instant     Slow         Delayed      Fast
Cost          Affordable  Expensive    Expensive    Variable
Flexibility   Scalable    Fixed        Rigid        High
Quality       Vetted      Variable     Uncertain    Unreliable
Engagement    Adaptive    Permanent    Limited      Temporary
Risk          Low         High         Costly       Inconsistent
```

Veep column highlighted. Section heading becomes "Better. Faster. Cheaper. Really." Section footer adds the "Save 40–80%" line.

## 10. Booking flow → real Fillout calendar link

Wire every primary "Book a call" CTA (SiteHeader desktop + mobile, `DualCTA` primary, hero primary in `index.tsx`) to `https://schedule.fillout.com/t/3AddME1CYfus` via `target="_blank" rel="noopener noreferrer"`. Centralize the URL in a new `src/lib/booking.ts` constant. CTA label shortens from "Book a discovery call" to "Book a call" to match live-site copy. The `/contact` form stays as the secondary path (Capacity Audit + long-form intake).

## Files touched

- `src/lib/booking.ts` (new) — BOOKING_URL constant
- `src/routes/operators.tsx` — full 26-operator rewrite
- `src/routes/index.tsx` — metrics, hero eyebrow/tagline, compare heading; no structural changes
- `src/routes/services.index.tsx` — add functional-coverage grid section
- `src/components/site/Testimonials.tsx` — Jerry Kolber single-quote layout
- `src/components/site/CompareTable.tsx` — 6×4 matrix rewrite
- `src/components/site/SiteHeader.tsx` — Fillout link, "Book a call" label
- `src/components/site/primitives.tsx` — `DualCTA` primary uses BOOKING_URL, label update

## Out of scope (per your skip list)

- Services IA restructure (Placement / Managed Projects / Dynamic Rosters)
- Pricing page rewrite to the capacity model
- 4-step → 3-step "How it works" swap
- Newsletter block
- Operator headshots (still initials avatars)
