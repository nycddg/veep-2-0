Replace the four operator-spotlight card summaries on the Veep homepage with the page-1 profile "about" text from the uploaded PDF, and append one proof "impact" stat per operator. Images will not be changed; the user will provide them separately.

Changes
- File: `src/routes/index.tsx`
- Keep the existing `spotlightOperators` array structure and the current `OperatorProofCard` rendering.
- Update the `summary` field for Jian Yang, Erika Velazquez, Victoria Kasumu, and Elaine Bogart to use the page-1 opening paragraph from their PDF profile cards.
- Append one concrete impact stat from the PDF to each about paragraph, separated as its own sentence.

Copy to use

Jian Yang
- About: Strategic finance leader and entrepreneur with a record of scaling fast-growing firms, optimizing financial operations, and securing funding.
- Impact: At Industrious, secured $140M+ in equity funding and restructured financial operations for rapid scale.

Erika Velazquez
- About: Story-driven marketer with deep expertise in brand strategy, product marketing, and audience growth. Specializes in launching, scaling, and repositioning for impact.
- Impact: At Morning Brew, developed a new newsletter ad product that doubled the average click-through rate.

Victoria Kasumu
- About: Seasoned people leader and strategic partner who builds growth-driven operations by aligning talent, culture, and business goals.
- Impact: At David Zwirner, hired 50+ employees in 90 days while reducing redundancy 30% and increasing retention 15%.

Elaine Bogart
- About: Powerhouse CFO with 15+ years of experience leading financial transformation, operational scaling, and strategic exits across SaaS, Web3, new media, and the creator economy.
- Impact: At Mojix, drove a +98% EBITDA turnaround, restructured global teams, and completed a successful international spin-off and sale.

Out of scope
- No image changes. The user will supply headshots separately.
- No changes to `OperatorProofCard.tsx` component structure; the `summary` field already renders as a single paragraph.
- No changes to roles, chips, or prior companies unless the user asks.