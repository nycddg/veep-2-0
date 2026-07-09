Convert the four operator spotlight cards from a 3-bullet list format into a single paragraph each that summarizes credentials, relevant experience, and demonstrated impact.

## Data changes

In `src/routes/index.tsx`, replace the `outcomes: string[]` field on each `spotlightOperators` entry with a single `summary: string`.

Proposed copy:

**Jian Yang — Finance Operating Partner**
> Jian has led finance and capital strategy across four continents, raising $300M+ through Series B/C, venture debt, and a SPAC IPO on the Toronto Venture Exchange. He steps into founder-led companies that need institutional-grade finance and capital-raising capability without the full-time CFO overhead.

**Erika Velazquez — Marketing Operating Partner**
> Erika has built growth engines for media and consumer brands, most recently driving 550% user growth and a 30% engagement lift at The Voice in five months. She helps leadership teams turn audience and attention into revenue, not just metrics.

**Elaine Bogart — Finance Operating Partner**
> Elaine has led $120M+ in exit value across Web3, media, and tech transactions, including Nifty's→Moonpay and P3→Deluxe. She builds the finance infrastructure, reporting discipline, and operational rigor that make companies acquirable and scalable.

**Victoria Kasumu — People Operating Partner**
> Victoria has scaled people operations from startup to operating scale, growing Zocdoc from roughly 50 to 700+ employees while maintaining high retention and engagement. She designs people infrastructure that keeps pace with revenue rather than slowing it down.

## Component changes

In `src/components/site/OperatorProofCard.tsx`, update the spotlight variant to render the `summary` field as a single paragraph instead of a `<ul>` of bullet points. Remove the outcome-list mapping and use a `<p className="text-[13px] text-stone leading-relaxed text-pretty">` for the summary. Keep the portrait, name/role, prior companies, and chips unchanged.

## Why this works for the ICP

- Founder CEOs of $5-150M businesses scan for business outcomes, not resumes.
- Each paragraph opens with one quantified proof point ($300M+ raised, 550% user growth, $120M+ exits, 50→700+ people) and ties it to a specific operating need.
- The tone is direct, credible, and founder-to-founder, avoiding corporate-speak.

## Approval needed

1. Confirm the proposed copy for each operator, or edit inline.
2. Confirm the placement: replace the existing 3 bullets in each spotlight card, keeping the rest of the card layout intact.