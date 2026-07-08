## Where to add it

Insert a dedicated **"Operators"** section on the homepage as its own anchor (`#operators`) and add **Operators** to the global nav between **Overview** and **Benefits**.

### Recommended placement

Between **Solution** (`#solution`) and **Benefits** (`#benefits`), i.e. new section #4 in the flow.

Rationale:
- The current page already introduces the operator concept in Solution ("senior operators own the work"). The immediate next question in a buyer's head is *"who are these people?"* Answering it there — before Benefits, Engagements, and Pricing — front-loads credibility while intent is highest.
- The Proof section further down already contains a small operator strip (line 507, `id="operators"`), but it's buried under testimonials/logos and functions as social proof, not as a spotlight. We'll promote operators to a first-class section and demote that strip to a supporting role (or remove it to avoid duplication).
- Placing it before Benefits/Pricing means every downstream claim ("own the work", "senior-only bench", "$15k/mo") is already backed by named faces.

Resulting page order:

```text
Hero → Overview → Problem → Solution → Operators (NEW) → Benefits →
Engagements → How it works → Proof → Comparison → Portfolios → FAQ → Footer CTA
```

### Section content

Header:
- Eyebrow: `Operators`
- Headline: **"Operators who've been in the seat — and delivered."**
- Sub: One line reinforcing: every operator on the bench has previously held the role they're deployed into, at a comparable-stage company, with outcomes we can reference.

Body — 4–6 spotlight cards (larger than the existing hero cards), each showing:
- Name + headshot/initials
- Current title on Veep bench (e.g. "Senior Finance Operator")
- Prior seat (e.g. "Former CFO, Industrious")
- 2–3 outcome chips (e.g. "Series C raise", "Margin +12pts", "Exit to WeWork")
- Domain tags (e.g. "Real Estate", "B2B SaaS")

Below the grid:
- Trust strip: `150+ vetted senior operators · Avg. 18 yrs experience · Every operator has held the seat before`
- Secondary CTA: `See the full bench →` linking to `#operators` on a future `/operators` page, OR `Book intro call` if we don't want to promise a bench page yet.

### Nav change

Update `SiteHeader.tsx` nav array to insert Operators after Overview:

```text
Overview · Operators · Benefits · How it works · Proof · Pricing · FAQ
```

Same treatment in the mobile menu.

### Files to change

- `src/routes/index.tsx` — add new `<section id="operators">` between Solution and Benefits; rename the existing in-Proof `<div id="operators">` to `id="operator-strip"` (or delete it) to keep the anchor unique.
- `src/components/site/SiteHeader.tsx` — add `{ kind: "hash", hash: "operators", label: "Operators" }` to the `nav` array.
- `src/components/site/OperatorProofCard.tsx` — extend props to support an optional `priorSeat` line and `outcomes` chips for the spotlight variant (hero cards keep working with existing props).

### Content you'll need to supply

Real spotlight data for 4–6 operators: name, headshot (or approve initials), prior title + company, 2–3 named outcomes, and permission to list them. Without real names/outcomes the section undercuts the exact credibility it's meant to build — I'd rather ship 4 real profiles than 6 placeholders.
