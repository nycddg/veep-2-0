# Veep polish-site copy

On-page copy from this polish clone, the site at `http://127.0.0.1:8090`. Not the live veep.work site. Strings are what the pages render now. This is a source document for a UX copywriter, not a rewrite.

**As of:** 8 October 2026  
**Scope:** pages and chrome in this clone. Signed-in portals, admin, and auth are out. Redirect-only URLs are listed at the end; they have no page of their own.

The homepage hero is the current line: "Founders, CEOs, owner-operators, and funds hire Veep when mission-critical work has no clear owner and needs to move now." A few `<title>` and meta descriptions were not updated with the page and still use an older sentence. Those are marked **Unchanged tag** and are not the on-page copy.

## How to read it

Each block is in reading order. Labels mean:

| Label | What it is |
| --- | --- |
| Meta | Browser title and search/social description. Not shown in the page body. |
| Eyebrow | Small mono label above a section. |
| Headline | The section's main line. |
| Body | Supporting paragraph. |
| Item | A card, column, row, or list entry: title, then body. |
| CTA | A button or text link, with where it goes. |
| Proof | A number, name, quote, or comparison cell. |
| Field | A form label, option, or validation message. |
| Note | Something a writer should know about this copy. Not on the page. |

**Voice already in the product:** IBM Plex Sans for heads and body. Mono is for eyebrows, labels, stats, and prices only. No italics on marketing UI. No em dashes in marketing copy is the rule; a few older strings still contain them and are marked.

**Header button changes by page.** On `/`, `/for-companies`, and `/for-portfolios` it says **Book intro call**. Everywhere else it says **Get started**. Both open the booking form.

**Footer blurb changes on those same three pages.** Elsewhere it uses the shorter default.

---

## Shared chrome

### Header

**Logo alt:** Veep wordmark  
**Logo link label:** Veep home

**Desktop nav, left of the divider**

- Overview → `/#overview`
- Operators → `/#operators`
- Benefits → `/for-companies#benefits`
- How It Works → `/for-companies#how`
- Proof → `/#proof`

**Desktop nav, right of the divider**

- For Companies → `/for-companies`
- For Funds → `/for-portfolios`
- Pricing → `/pricing`
- About → `/about`
- Join → `/join`
- FAQ → `/faq`

**Note:** The mobile menu hides Operators, Benefits, How It Works, and Proof. It keeps Overview plus the route links, then the header button.

**Controls**

- Switch to light mode / Switch to dark mode
- Toggle menu
- Book intro call, or Get started (see above)

### Footer

**On `/`, `/for-companies`, and `/for-portfolios`**

- **Body:** Veep puts senior ownership around critical work. We scope the job, assemble the team, and own delivery.
- **Signature:** Critical work, owned.

**On every other public page**

- **Body:** Vetted senior operators who step in to own critical work, now. Matched in 72 hours. Ready to go in under 10 days.
- **Signature:** Senior operators for work that can't wait.

**Email:** hey@veep.work

**Column: Explore**

- How It Works → `/for-companies#how`
- Engagements → `/for-companies#offer`
- Proof → `/#proof`
- Mini FAQ → `/#faq`

**Column: Details**

- About
- For Companies
- For Funds
- Pricing
- Full FAQ
- Contact

**Column: Operators**

- Join Veep

**Column: Legal**

- Privacy Policy
- Terms of Service

**Legal line:** © {year} The Veep Group, LLC. All rights reserved.

### Organization description (structured data, not on the page)

- **Name:** Veep
- **Legal name:** The Veep Group, LLC
- **Description:** Veep places vetted senior operators inside founder-led companies to own critical work. Matched in 72 hours. Deployed in under 10 days. 30-day fit guarantee.
- **Slogan:** Senior operators for work that can't wait.
- **Email:** hey@veep.work

### Closing band

Used at the bottom of most pages. Each page can replace the headline, the line under it, and the button. Defaults:

- **Headline:** Your next big move starts here.
- **Body:** Matched in 72 hours. Deployed in under 10 days. 30-day fit guarantee.
- **Primary CTA:** Speak with our founders → booking form
- **When the page asks for contact instead:** Get in touch → `/contact`
- **Secondary CTA:** Request a capacity audit → `/contact?intent=audit`

### Page-not-found

- **Label:** [404] / NOT FOUND
- **Headline:** 404
- **Headline:** Page not found
- **Body:** The page you're looking for doesn't exist or has moved.
- **CTA:** Back to Veep → `/`

### Load error

- **Label:** [ERR] / SOMETHING BROKE
- **Headline:** This page didn't load
- **Body:** Something went wrong. Try again or head back home.
- **CTA:** Try again
- **CTA:** Go home → `/`

---

## Homepage `/`

On-page copy, in reading order. `#capacity` is the ownership headline and the three service rows.

### Hero

- **Headline:** Because a job always needs to be done.
- **Body:** Founders, CEOs, owner-operators, and funds hire Veep when mission-critical work has no clear owner and needs to move now.
- **Checks:** Scoped in 72 hours · Started in under 10 days · 30-day guarantee
- **Image alt:** Vetted operator headshot
- **Card title:** Assigned Operating Partner
- **Match rows:** Functional Depth 97% · Business Model Fluency 95% · Industry Expertise 98% · Life Stage Experience 100%
- **Note:** The match card is hidden below the small breakpoint.
- **Eyebrow:** Trusted by
- **Names:** Atomic Audio, VeroSkills, Spring Break, Dieux, SipMargs, Procure Impact, Substantial, Fowler Laundry Solutions, Northstar Vets, Energy Growth Holdings, Bandyworks, Artists & Fleas, Frequency, Synthetic Studio, GUMDAY, Soundview Medical Supply
- **Primary CTA:** Book intro call → booking form
- **Secondary CTA:** See how it works → `/for-companies#how`

### The moment you're in

- **Eyebrow:** The moment you're in
- **Headline:** The priority is clear. The owner isn't.
- **Label:** Critical work · No clear owner
- **Work chips:** Fundraise · GTM reset · Operating gap · Margin leakage · Key vacancy
- **Item:** The team. At capacity. The priority keeps slipping.
- **Item:** A permanent hire. The search is running. The work still needs an owner.
- **Item:** Outside advice. The direction is clear. Execution still lands on your team.
- **Label:** The CEO's desk
- **Line:** Every unresolved decision comes back to you.

### Meet Veep

- **Eyebrow:** Meet Veep
- **Body:** Veep gives companies and funds the operating partner capacity and transformation capabilities found inside top VC and PE firms. We deliver on demand ownership of critical work, from preparing for a raise to rebuilding how the business runs.

**The work**

- **Item:** Transaction Readiness. Become financeable, bankable, and diligence-ready.
- **Item:** Revenue Repeatability. Establish and run consistent commercial systems.
- **Item:** Commercial Expansion. Launch new markets, products, and services.

**How that work is owned**

- **Headline:** The work gets ownership, with Veep accountable for scope, quality, and continuity.
- **Row, label For funds is only on the third:** Operating Partners. Senior operators for leadership gaps and work the current team cannot absorb. → `/for-companies#benefits`
- **Row:** Agent Teams. Operator-governed workflows for finance, founder office, growth, and operations work.
- **Row:** Portfolio Operations. Deployable operating capacity across the portfolio without building a full internal platform team. → `/for-portfolios`

**Sequence**

- **01 Scope.** Define the job, timeline, and outcomes.
- **02 Assemble.** Build the right program structure.
- **03 Own.** Drive delivery through completion.

- **CTA:** For Companies → `/for-companies`
- **CTA:** For Funds → `/for-portfolios`

### Operator spotlight

Shared with For Companies. For Funds uses the same module with a different headline, body, order, and link. Bios are in [Operator roster](#operator-roster).

- **Eyebrow:** Operator spotlight
- **Headline:** Operators who've held the seat.
- **Body:** Senior leaders who have built teams, run functions, and delivered through change. We select for the work, your business model, and your company stage, with experience and references you can assess.

**Operator impact**

- **Eyebrow:** Operator Impact at companies you admire
- **$2B+** Cost savings delivered. Across transformation, product redesign, and operational efficiency initiatives.
- **$1B+** Capital raised. Across venture funding, structured finance, and other capital raises.
- **$3B+** New revenue generated. Through new business lines, go-to-market strategy, and product commercialization.
- **20+** Exits & acquisitions. Across strategic sales, acquisitions, and related integration work.

**Company chips under that grid, desktop only:** Industrious, Morning Brew, Zocdoc, Etsy, Polestar, Maisonette, Zipcar, Ford's Gin, Moo.com, Betaworks, Heavy.com, IGN, TaskRabbit, Refinery29, New Stand, American Express, Verizon, Citi, Opencare, UGE, frog design, Deloitte, ?What If! Innovation, AOL, The New Republic, NewsCred, Facebook, LVMH, Macy's, Accenture, David Yurman, MediaLink, David Zwirner, Gansevoort Hotel Group, WeightWatchers, Verve Mobile, Big Spaceship, Pursuit, Google, Nifty's, and more.

- **Line:** 75+ vetted senior operators · Average 18 years' experience · Every operator has held the seat
- **CTA:** For Companies → `/for-companies`

### Proof

**Note:** The proof headline, the three case cards, and the four stats are desktop only. Testimonials and the button show on every width.

- **Eyebrow:** Proof
- **Headline:** Outcomes delivered in 90 days or less.

**Case: B2B SAAS**

- **Figure:** $6M
- **Kicker:** Raised in 6 weeks
- **Accessible name for that figure:** $6M raised in 6 weeks
- **Role:** Operating partner: Finance
- **Trigger.** The CEO was preparing for a first institutional round without a financial model, investor materials, or fundraising experience.
- **Outcome.** Built a three-year model and diligence-ready CAC/LTV dashboards, and coached the CEO through investor meetings and term sheets.

**Case: SOFTWARE STUDIO**

- **Metric:** Project margins up 25%
- **Role:** Operating partner: Growth
- **Trigger.** An $8M product development studio faced inconsistent project profitability and needed a scalable approach to AI work.
- **Outcome.** Standardized project scoping and staffing, built an AI GTM and delivery framework, and hired a Director of AI.

**Case: PODCAST PUBLISHER**

- **Metric:** 35% of the round sourced
- **Role:** Operating partner: Business
- **Trigger.** A profitable, bootstrapped publisher with millions in revenue was preparing to raise outside capital without a financial model or growth plan.
- **Outcome.** Built the first financial model, defined use of proceeds, and sourced investors representing over a third of the round.

**Stats**

- **75+** Vetted senior operators
- **72h** To scope
- **<10d** To start
- **30d** Fit guarantee

**Testimonials**

- **Eyebrow:** Founder testimonials
- "I cannot recommend this team more highly. They think, act, and engage like co-founders." Jerry Kolber, Founder & CEO, Atomic Audio
- "As a founder raising capital, I couldn't have asked for a better partner. I never felt alone." Daniel Walsh, Founder & CEO, VeroSkills

- **CTA:** Book intro call → booking form

### For funds, on the homepage

- **Eyebrow:** For funds
- **Headline:** Portfolio work needs an owner, too.
- **Body:** Add portfolio operating capacity without building a full internal team. Veep helps funds identify gaps and assign senior ownership across diligence, post-close execution, integration, leadership transitions, and exit readiness. One operating relationship, with the work scoped company by company.
- **CTA:** Explore portfolio ops → `/for-portfolios`
- **CTA:** Request a capacity audit → `/contact?intent=audit`

### Why Veep

**Note:** This whole section is desktop only.

- **Eyebrow:** Why Veep
- **Headline:** How Veep compares to the alternatives.
- **Column labels:** Dimension · The old way · Veep

| Dimension | The old way | Veep |
| --- | --- | --- |
| Time to start | Months to hire, weeks to scope, or endless profile browsing | Shortlist in 72 hours, deployed in under 10 days |
| Ownership | Recommendations, candidates, tools, or hourly help | Senior operator owns the work |
| OUTCOMES | After the search, after the deck, or with variable quality | High quality work immediately |
| Cost | Search fees plus salary, or large consulting engagements | Priced to scope and level of support |
| Seniority | Variable; junior consultants for leverage or unvetted freelancers | Vetted senior operators only |
| Exit | Deck delivered, search continues, or dependency grows | Clean handoff with documentation |
| Risk | You own the miss | 30-day fit guarantee. Swap or walk. |

**Note:** The Outcomes row label is stored in all caps. The others are title case.

### Straight answers

**Note:** Desktop only. These four are also the FAQ structured data on the homepage.

- **Eyebrow:** FAQ
- **Headline:** Straight answers.

**What is a Veep operating partner?**  
A vetted senior leader who takes responsibility for a defined body of work inside your business. The engagement may cover a function, a critical initiative, or a leadership gap. Veep manages scope, quality, and continuity around the work.

**How is Veep different from a consulting firm?**  
Veep operating engagements include a named lead responsible for execution and delivery inside the business. Advisory is available when you need senior judgment and your team will carry out the work.

**How is Veep different from executive search?**  
Executive search fills a permanent role. Veep gives current work a senior owner, including while a search is underway. The engagement can end with a documented handoff to your new hire or existing team.

**Where does Veep operate?**  
Veep operators work remotely across North America and Europe, with on-site availability for key moments such as board meetings, offsites, integration weeks, and major operating milestones.

- **Line:** More detail on the full FAQ page. → `/faq`

### Close

- **Headline:** Bring the priority that keeps coming back.
- **Body:** Book a 30-minute intro call to clarify the work, discuss the support it needs, and see whether Veep is the right fit.
- **Primary CTA:** Book intro call → booking form
- **Secondary CTA:** Request a capacity audit → `/contact?intent=audit`

### Unchanged tags

These are not on the page. They still use the previous sentence.

- **Title:** Veep: Senior Operators for Work That Can't Wait
- **Meta and Open Graph description:** Veep puts a senior operating partner in charge of the critical work your team cannot absorb. We define the outcome, assemble the team, and own delivery.
- **Service structured data:** Veep puts a senior operating partner in charge of critical work. We define the outcome, assemble the team, and own delivery.

---

## For Companies `/for-companies`

**Meta title:** For Companies | Portfolio operating capacity  
**Meta description:** Veep gives funds senior ownership across diligence, post-close execution, leadership gaps, and value creation without building a full internal portfolio ops team.  
**Open Graph title:** For Companies — Portfolio operating capacity  
**Open Graph description:** Senior ownership across the portfolio. Scope the work company by company.

**Note:** The hero, meta, and closing band on this URL currently use fund language. The middle of the page (the model, the alternatives, the benefits, the bench, and how it works) is written for a company. For Funds uses the same hero and the same close.

### Hero

- **Eyebrow:** For companies
- **Headline:** Portfolio operating capacity. Ready when the work is.
- **Body:** Veep gives funds senior ownership across diligence, post-close execution, leadership gaps, and value creation without building a full internal portfolio ops team. We scope each company's work, assign a lead operating partner, and stay accountable for delivery, quality, and continuity.
- **Primary CTA:** Request a capacity audit → `/contact?intent=audit`
- **Secondary CTA:** See pricing → `/pricing`

### What we do

- **Eyebrow:** What we do
- **Headline:** Built for the job to be done.
- **Body:** Tell us what's in the way, not moving, or landing back on you to solve. We shape the work and define the outcomes, recommend the right level of support (Advisory, Sprint, Operator, or Pod), and match operators to the job.
- **Body:** When the work lands or the permanent hire arrives, we hand off with results and documentation, not ongoing dependency.
- **Line, desktop only:** Vetted senior operators who step in to own critical work, now.

**The Veep model**

- **Eyebrow:** The Veep model
- **Item:** Start with the work, not the title. We diagnose the priority, urgency, and outcome before deciding whether the answer is advisory, a sprint, an operator, a pod, or recurring operating capacity.
- **Item:** Senior only. Every operator is a vetted senior leader: former founders, CFOs, COOs, CROs, CMOs, CTOs, as well as product and people leaders.
- **Item:** Priced to scope. Advisory, Sprint, Operator, or Pod structured around the work and outcomes.
- **Item:** Guaranteed fit. 30 days to prove it. If the operator is not right, we swap them or you walk.

**When the usual options leave a gap**

- **Label:** When the usual options leave a gap
- **Item:** Permanent hire. The right answer for a lasting role. When the work is urgent or the role is still taking shape, you need ownership during the search.
- **Item:** Consulting firms. Useful for specialist analysis and recommendations. When execution is the gap, someone also needs to lead the work inside the business.
- **Item:** Freelancers and advisors. Useful for defined tasks or expert judgment. Cross-functional work also needs a lead owner to coordinate delivery and make the pieces work together.

### Operator spotlight

Same roster, impact figures, company chips, and 75+ line as the homepage. The link changes.

- **CTA:** Discuss the work → `/contact`

### What you get

**Note:** This section is desktop only. The header link Benefits points here.

- **Eyebrow:** What you get
- **Headline:** Senior ownership. Clear accountability.
- **01** A clear owner. A lead operating partner runs the workplan, coordinates delivery, and keeps the agreed priority moving.
- **02** Started in under 10 days. Operating engagements are scoped in 72 hours and started in under 10 days.
- **03** Experience that fits. 75+ vetted senior operators, selected for the mandate, business model, and company stage.
- **04** Support that fits the work. Start with a defined scope. Agree the next step as the work changes: continue, expand, or hand over.
- **05** A clean handoff. Your team gets the documentation, context, and working materials needed to carry the work forward.
- **06** 30-day fit guarantee. If the operator isn't right, we swap them or you walk, with no fee owed for the remaining term.
- **CTA:** Discuss the work → `/contact`
- **Fine print:** 30-minute intro call · Reply within 1 business day · 30-day fit guarantee

### Executive bench

- **Eyebrow:** Executive Bench
- **Headline:** The right support for the job.
- **CTA:** See full pricing → `/pricing`

**Advisory.** From $3k / mo. Senior judgment for board prep, fundraise strategy, and high-stakes decisions. Your team retains execution ownership. See scope → `/pricing#tiers`

**Sprint.** From $25k / scope. One urgent priority with a defined owner and endpoint. Fundraise preparation, a GTM reset, margin work, or diligence over 4–12 weeks. See scope → `/pricing#tiers`

**Operator.** Most requested. From $15k / mo. Embedded senior ownership of a function, initiative, or leadership gap. Typically 3–12 months, shaped around the work. See scope → `/pricing#tiers`

**Pod.** From $30k / mo. A lead operating partner plus specialist support for work spanning functions, such as finance and operations or GTM and RevOps. See scope → `/pricing#tiers`

- **Line:** Define the work first. Choose the engagement shape together.

### How it works

- **Eyebrow:** How It Works
- **Headline:** From urgent priority to owned work.
- **01 Clarify.** A 30-minute intro call to understand the work, urgency, and outcome, and whether Veep is the right fit.
- **02 Scope.** Within 72 hours, define the work, responsibilities, success criteria, and recommended engagement shape.
- **03 Assemble.** Select a lead operating partner and the supporting capacity required, matched to the mandate and company.
- **04 Own.** Start in under 10 days. The operator runs the work; Veep manages scope, quality, and continuity.

### Before you book

- **Eyebrow:** Before you book
- **Headline:** What to know before the first call.

**Is this right for me?**  
You lead a business with critical work the team cannot absorb: preparing for capital, rebuilding sales, entering a market, fixing operations, or covering a leadership gap. Bring the priority; we'll assess the fit.

**How much does it cost?**  
Advisory starts at $3k/month, Sprints at $25k/scope, Operators at $15k/month, and Pods at $30k/month. Scope and level of support determine the price.

**How quickly can we start?**  
Operating engagements are scoped in 72 hours and started in under 10 days. We clarify responsibilities and the starting plan before work begins.

**How do you choose the operator?**  
We select for the work, business model, and company stage. You can review relevant experience and references before the engagement begins.

**What if it isn't a fit?**  
The operator has a 30-day fit guarantee. We swap them or you walk, with no fee owed for the remaining engagement term.

**What happens on the intro call?**  
In 30 minutes, we clarify the work, urgency, and support you need. If Veep fits, we move into scoping. We'll tell you directly if another route makes more sense.

- **CTA, desktop only:** Book intro call → booking form
- **Fine print:** 30-minute intro call · Reply within 1 business day · 30-day fit guarantee

### Close

- **Headline:** Where does the portfolio need an owner next?
- **Body:** Book a 30-minute intro call to discuss the gaps, walk through the audit and roster model, and see whether Veep fits your firm's operating needs.
- **Primary CTA:** Book intro call → booking form
- **Secondary CTA:** Request a capacity audit → `/contact?intent=audit`

---

## For Funds `/for-portfolios`

**Meta title:** For Funds | Portfolio operating capacity  
**Meta description:** Veep gives funds senior ownership across diligence, post-close execution, leadership gaps, and value creation without building a full internal portfolio ops team.  
**Open Graph title:** For Funds — Portfolio operating capacity  
**Open Graph description:** Senior ownership across the portfolio. Scope the work company by company.

### Hero

- **Eyebrow:** For funds
- **Headline:** Portfolio operating capacity. Ready when the work is.
- **Body:** Veep gives funds senior ownership across diligence, post-close execution, leadership gaps, and value creation without building a full internal portfolio ops team. We scope each company's work, assign a lead operating partner, and stay accountable for delivery, quality, and continuity.
- **Primary CTA:** Request a capacity audit → `/contact?intent=audit`
- **Secondary CTA:** See pricing → `/pricing`

### Where portfolios lose time

- **Eyebrow:** Where portfolios lose time
- **Headline:** The investment plan still needs operators.
- **01** Before close, the work is already moving. Diligence, financial models, team assessments, and operating plans compete for the same internal capacity. A clear view of the gaps helps you plan who will own the work.
- **02** The 100-day plan needs owners. After close, reporting, integration, commercial priorities, and people decisions arrive together. The existing team may not have the capacity to lead every workstream.
- **03** Leadership transitions leave work exposed. A planned succession, an unexpected exit, or an open executive seat can slow execution. The company needs ownership while the longer-term leadership decision takes shape.
- **04** The same contacts cannot cover every mandate. Trusted relationships matter. But availability, functional experience, and company fit change from deal to deal. Each new priority needs the right operator and a clear scope.

### Portfolio Capacity Audit

- **Eyebrow:** Start here
- **Headline:** Portfolio Capacity Audit
- **Body:** Find the operating gaps before they become urgent introductions. We map current priorities and likely needs over the next 6–12 months, then identify where each company needs senior ownership, specialist support, or a plan for leadership coverage.

**2–3 week audit**

- **Title:** Deliverables
- Portfolio-wide map of leadership and execution gaps
- Capacity assessment across finance, GTM, operations, product, and people
- Upcoming needs across diligence, close, integration, fundraising, exit, and leadership transitions
- Recommended operating capacity by company and priority
- Coverage plan for interim leadership gaps
- Priority shortlists for likely operating mandates

**After the audit**

- **Title:** Put an owner around each priority.
- **Body:** Turn the capacity map into scoped engagements. Veep assigns a lead operating partner and the support each job requires. Your fund keeps the portfolio view; each company gets a clear owner for the work.
- Operator work is billed separately by scope. → `/pricing`
- One master agreement; a statement of work per engagement
- Portfolio Roster: $75k/year, with preferred engagement rates. → `#roster`

### Operator spotlight

- **Eyebrow:** Operator spotlight
- **Headline:** Senior operators for consequential work.
- **Body:** Operators with experience across transactions, integrations, leadership transitions, and company building. We select for the mandate and the business, then put clear ownership around delivery.
- **Note:** Same twelve operators and the same impact figures as the homepage. The order leads with Alan Poussaint, Sean Park, Jian Yang, Elaine Bogart, Jonathan Levinson, Vanessa Kwan, then the rest.
- **CTA:** Discuss the work → `/contact`
- **Line:** 75+ vetted senior operators · Average 18 years' experience · Every operator has held the seat

### Portfolio operating capacity

- **Eyebrow:** Portfolio operating capacity
- **Headline:** One operating relationship across the portfolio.
- **Title:** Portfolio Roster
- **Price:** $75k / year · operator work billed separately
- **Body:** For private equity firms, family offices, holding companies, and independent sponsors with recurring operating needs. Retain Veep for portfolio capacity planning and priority access, then scope delivery around each company's work.
- Portfolio-wide intake and operating capacity map
- Quarterly review of priorities and capacity
- Priority operator matching for portfolio companies
- Vetted senior operators across finance, GTM, operations, product, and people
- Agreed emergency Operator or Pod coverage terms
- Included diagnostics and operator shortlists
- One master services agreement
- Preferred engagement rates on each statement of work
- **CTA:** See engagement pricing → `/pricing#tiers`
- **Line:** Each mandate becomes an Advisory, Sprint, Operator, or Pod engagement, scoped separately at preferred roster rates.

### How it works

- **Eyebrow:** How It Works
- **Headline:** Master agreement once. Delivery company by company.
- **01 Map the capacity.** Over 2–3 weeks, the audit identifies operating gaps, upcoming transactions, and leadership needs. We recommend where to put capacity first.
- **02 Agree the relationship.** Set master terms, commercial terms, IP, confidentiality, and engagement structure once, so each new mandate starts from an agreed foundation.
- **03 Scope and assign.** Define the company's work, assign a lead operator, and agree a statement of work. Operating engagements are scoped in 72 hours and started in under 10 days.
- **04 Review the portfolio.** Each quarter, revisit priorities, upcoming transactions, and leadership changes. Adjust the capacity plan as the portfolio's needs evolve.

### What the retainer covers

- **Eyebrow:** What the retainer covers
- **Headline:** Retain the relationship. Scope the work.
- **Item:** Included in the roster. Priority access, portfolio capacity planning, quarterly reviews, agreed emergency coverage terms, preferred rates, and included diagnostics. Veep manages the operating relationship across engagements.
- **Item:** Scoped and billed separately. Operator delivery is priced by company and statement of work. Each scope defines the work, lead owner, and responsibilities. Fund and company leaders keep strategic decisions and approvals.

### Close

Same as For Companies.

- **Headline:** Where does the portfolio need an owner next?
- **Body:** Book a 30-minute intro call to discuss the gaps, walk through the audit and roster model, and see whether Veep fits your firm's operating needs.
- **Primary CTA:** Book intro call → booking form
- **Secondary CTA:** Request a capacity audit → `/contact?intent=audit`

---

## Pricing `/pricing`

**Meta title:** Pricing | Veep  
**Meta description:** Advisory from $3k/mo · Sprint from $25k · Operator from $15k/mo · Pod from $30k/mo. Every engagement carries a 30-day fit guarantee.  
**Open Graph title:** Pricing — Priced to the work, not the hour | Veep  
**Open Graph description:** same as the meta description.

### Hero

- **Eyebrow:** Pricing
- **Headline:** Priced to the work. Not the hour.
- **Body:** Every engagement is scoped to the work, urgency, and level of ownership required. Transparent rates. No hourly billing. No lock-in by default.
- **Primary CTA:** Get in touch → `/contact`
- **Secondary CTA:** Request a capacity audit → `/contact`

### Tiers

**Advisory.** From $3k per month. Senior judgment for high-stakes decisions.

- Board and investor prep
- Fundraise strategy
- Executive decisions
- Strategic tradeoffs
- Includes six one-hour sessions

**Sprint.** From $25k per scope. One urgent priority with a clear owner and endpoint.

- Fixed scope, fixed price
- 4–12 week engagement
- GTM reset, fundraise, margin, diligence
- Clear success criteria

**Operator.** Most requested. From $15k per month. Ongoing senior ownership for your most critical initiatives.

- Finance, GTM, operations, product, or people
- Build or reset a function
- Resolve leadership gaps
- Typically 3–12 months

**Pod.** From $30k per month. A lead operator plus specialist support for cross-functional work.

- Multi-function execution
- Operating reset or transformation
- GTM + RevOps, finance + ops, AI initiatives
- Coordinated senior execution

- **Line:** All engagements carry a 30-day fit guarantee · Response within 1 business day

### What we don't charge for

- **Eyebrow:** What we don't charge for
- **Headline:** The price you see is the price you pay.
- **Item:** Placement fees. Calls with a Veep founder and operator matching are free.
- **Item:** Setup or onboarding fees. Contracting, access, and onboarding are managed at no extra cost.
- **Item:** Long-term lock-in. Start focused and continue, pause, or scale as the work changes.
- **Item:** Hourly billing surprises. Scoped around the work. You know the number before you sign.

### For funds

- **Eyebrow:** For funds
- **Headline:** The right operating partners, ready when the portfolio needs them.
- **Body:** Built for PE firms, family offices, holdcos, and multi-company founders that need senior operating support across recurring leadership gaps, transaction moments, and value-creation work. Portfolio Rosters include priority operator matching, quarterly capacity planning, preferred commercial terms, as well as emergency CFO, COO, and operator coverage for $75k annually. Operator engagements are scoped separately by SOW at preferred rates.
- **CTA:** See how the roster works → `/for-portfolios`

### Pricing FAQ

- **Eyebrow:** Pricing FAQ
- **Headline:** Straight answers to the questions we get most.

**Are there setup or matching fees?**  
No. Calls with a Veep founder and operator matching are free. You only pay once an engagement is signed.

**Can I convert between models mid-term?**  
Yes. Many engagements change shape as the work becomes clearer. Advisory can become a Sprint. A Sprint can become an Operator engagement. Operator work can expand into a Pod.

**How does the 30-day fit guarantee work?**  
If the operator is not right within the first 30 days, we swap them or you walk with no fee owed for the remaining term.

- **CTA:** See the full FAQ → `/faq`

### Close

- **Headline:** Tell us what cannot wait.
- **Body:** Book a 30-minute call with a Veep founder. We'll clarify the work, recommend the right model, and tell you directly if Veep isn't the answer.
- **Primary CTA:** Speak with our founders → booking form
- **Secondary CTA:** Request a capacity audit → `/contact?intent=audit`

---

## About `/about`

**Meta title:** About Veep — Our Founders and Operating Principles  
**Meta description:** Meet the founders behind Veep and the operating principles that shape every engagement — a small roster of senior operators who embed, build, and deliver.  
**Open Graph title:** About Veep — Who we are and why we built it  
**Open Graph description:** Born from the inside. Built for what's next. Meet the founders and principles behind Veep's senior operator model.

**Note:** The meta description and two principle lines still use em dashes.

### Hero

- **Eyebrow:** About Veep
- **Headline:** Born from the inside. Built for what's next.
- **Body:** After decades inside high-growth startups and large institutions, we kept seeing the same pattern: critical work slowed down, ownership got blurry, and the default answer was to add more headcount. Veep was built for a different path.
- **Primary CTA:** Book a 30-minute call → booking form
- **Secondary CTA:** See how it works → `/how-it-works` (redirects to `/for-companies#how`)

### The problem / Meet Veep

- **Eyebrow:** The problem
- **Body:** Operators felt stuck inside bloated orgs. Companies struggled to find senior capacity that could lead fast and deliver with focus. The market rewarded process over ownership. Ownerless work kept landing on founders.
- **Eyebrow:** Meet Veep
- **Body:** Companies get high-impact operators who own outcomes. Operators get the freedom and focus to lead. Matched in 72 hours. Deployed in under 10 days. Veep delivers on-demand operating capacity.

### What we believe

- **Eyebrow:** What we believe
- **Headline:** Built the hard way. Rebuilt the smart way.
- **Body:** Decades of lessons, one roster. The future belongs to leaner teams, faster decisions, and hands-on operators trusted to lead.
- **01** Onboarded in under 10 days. From intro call to embedded operator, measured in days — not the months a retained search takes.
- **02** Shortlist in 72 hours. Deployed in under 10 days. Focused shortlist while permanent hire stays open — work moves in days, not search cycles.
- **03** Flexible terms. Scoped to the initiative, not to a five-year plan.
- **04** 30-day fit guarantee. 30 days to prove it. If the operator is not right, we swap them or you walk.

### Founding team

- **Eyebrow:** Founding team
- **Headline:** Founders first. Operators always.
- **Body:** A founding team shaped by firsthand experience building, scaling, and leading from inside.
- **Co-Founder.** Dave Garcia. Launched products, led pivots, landed exits. Now helping founders move faster with Veep.
- **Co-Founder.** Jian Yang. Raised big, scaled fast, exited right. Now helping founders do the same, smarter.
- **Co-Founder.** Mark Newhouse. Built brands, transformed orgs, sold startups. Now building alongside founders at Veep.

### Close

- **Headline:** Tell us what cannot wait.
- **Body:** Tell us about the work. If it's a fit, we'll scope the engagement and match you with a Veep within 72 hours.
- **Primary CTA:** Get in touch → `/contact`
- **Secondary CTA:** Request a capacity audit → `/contact?intent=audit`

---

## FAQ `/faq`

**Meta title:** FAQ | Veep  
**Meta description:** How Veep engagements work: pricing, timing, operator vetting, fit guarantee, and how the Portfolio Roster works.  
**Open Graph title:** FAQ — Straight answers on cost, timing & fit | Veep  
**Open Graph description:** Pricing, timing, operator vetting, the 30-day fit guarantee, and how Veep's Portfolio Roster works for portfolios.

### Hero

- **Eyebrow:** FAQ
- **Headline:** Straight answers on cost, timing, and fit.
- **Body:** If the answer is not here, book a 30-minute call with a Veep founder. We will help clarify the work, the right level of support, and whether Veep is the right fit.
- **Primary CTA:** Book a 30-minute call → booking form
- **Secondary CTA:** Request a capacity audit → `/contact`

### Engagement

**How fast can a Veep operator start?**  
Most engagements begin in under 10 days from the call with a Veep founder. Urgent leadership-gap or interim coverage can move faster when the work cannot wait.

**How is Veep different from a consultant?**  
A consultant recommends. A Veep operator owns. Our operators step into the work, set the rhythm, build the materials, make decisions with the team, and move the priority forward.

**How is Veep different from executive search?**  
Search is for permanent hiring. Veep is for critical work that needs senior ownership now, while the permanent hiring decision stays open.

**Remote or on-site?**  
Both. Most Advisory, Sprint, and Operator engagements are remote with on-site presence for key moments: board meetings, offsites, integrations, planning sessions, and major operating milestones. Interim or high-intensity engagements may include regular on-site time.

**Can Veep run interim coverage while we search for a permanent hire?**  
Yes. It is one of the most common use cases. A Veep operator can cover the leadership gap, stabilize the function, preserve momentum, and help define what the permanent role should actually become.

### Operators

**What roles do Veep operators fill?**  
Veep operators include CFOs, COOs, CROs, CMOs, CTOs, CPOs, people leaders, chiefs of staff, GMs, and functional experts. But we start with the work, not the title. Depending on the need, the right structure may be Advisory, Sprint, Operator, or Pod.

**Can I browse the roster?**  
No. Veep is a managed model, not a self-service marketplace. We recommend the operator based on the work, urgency, company stage, function, industry, business model, and fit. Full profiles and references are shared once we understand the priority. Marketplaces give you options. Veep gives you the operator.

**Do you use AI?**  
Yes, where it improves capacity, consistency, and speed. AI can support recurring workflows, research, reporting, content, data cleanup, analysis, and internal process work. But the operator provides judgment, oversight, quality control, and business context. AI supports the work. The operator owns the outcome.

**What industries do you serve?**  
Veep works with founder-led, owner-led, investor-backed, and portfolio companies across sectors. Common areas include SaaS, AI/data companies, B2B services, DTC and e-commerce, multi-site services, healthcare services, consumer brands, industrial services, field services, and PE-backed portfolio companies. The better question is not only industry. It is whether we have the right operator for the work.

### Pricing

**How much does Veep cost?**  
Typical ranges: Advisory from $3k/month · Sprint from $25k · Operator from $15k/month · Pod from $30k/month. Every engagement is scoped to the work, urgency, and level of ownership required.

**Are there setup or matching fees?**  
No. Calls with a Veep founder and operator matching are free. Contracting, onboarding, and access setup are included in the engagement. You only pay once an engagement is signed.

**What if the operator is not the right fit?**  
Every engagement carries a 30-day fit guarantee. If the operator isn't right, we swap them or you walk — no fee owed for the remaining term.

**Note:** That last answer contains an em dash.

**Can we start with a smaller engagement?**  
Yes. Many companies start with Advisory or a Sprint before moving into an ongoing Operator engagement. That's often the right path when the role is still undefined or the work is urgent but focused.

### Portfolios & partnerships

**How does the Portfolio Roster work?**  
PE firms, family offices, holding companies, independent sponsors, search funds, and multi-company founders can retain Veep as an operating-capacity partner. The Roster typically includes priority matching, quarterly capacity planning, emergency CFO/COO/GTM/operator coverage, capacity audits, and preferred commercial terms. Annual Roster pricing is $75k/year, with operator deployments billed separately by SOW.

**Do you have a referral program?**  
Yes. We share economics with accountants, lenders, search firms, M&A advisors, attorneys, investors, and other partners who send us the right work. The best referrals are companies with critical work that needs senior ownership now.

### Close

- **Headline:** Your next big move starts here.
- **Body:** Matched in 72 hours. Deployed in under 10 days. 30-day fit guarantee.
- **Primary CTA:** Get in touch → `/contact`
- **Secondary CTA:** Request a capacity audit → `/contact?intent=audit`

---

## Contact `/contact`

Two versions. The audit version shows when the URL has `intent=audit`.

**Meta title:** Contact | Veep  
**Meta description:** Get in touch with Veep. Response within one business day. Matched in 72 hours. Deployed in under 10 days.  
**Open Graph description:** Tell us the moment. We'll match a senior operator who can start in under 10 days.

### Discovery call

- **Eyebrow:** Discovery call
- **Headline:** What critical work doesn't have an owner?
- **Body:** 30-minute call. Response within one business day. Matched in 72 hours. Deployed in under 10 days. 30-day fit guarantee.
- **Primary CTA:** Request a call → `#contact-form`
- **Secondary CTA:** See how it works → `/how-it-works`

**What happens next**

1. Reply within 1 business day
2. 30-minute diagnostic call
3. Operator shortlist within 72 hours
4. 30-day fit guarantee

**Field:** What's the biggest initiative without an owner?  
**Submit:** Send inquiry

### Capacity audit

- **Eyebrow:** Capacity audit
- **Headline:** Map the portfolio's executive risk.
- **Body:** A structured audit of leadership risk across your portfolio, with a recommended roster structure per company. Delivered in 2–3 weeks.
- **Primary CTA:** Request an audit → `#contact-form`
- **Secondary CTA:** See how it works → `/how-it-works`

**What happens next**

1. Portfolio-wide risk map
2. CFO / COO / GTM coverage assessment
3. Recommended roster structure per company
4. Emergency coverage path

**Field:** Portfolio size or context  
**Submit:** Request the audit

### Shared form

- **Fields:** Name * · Work email * · Company · Role · Timing
- **Timing options:** Immediate — start in weeks · Inside 30–60 days · Inside 90 days · Exploring
- **Disclosure:** Add company, role, or timing (optional)
- **Fine print:** By submitting you agree to be contacted by Veep about your inquiry.
- **Success headline:** Thanks — we'll be in touch.
- **Success body:** A Veep partner will reach out within one business day.
- **Send error:** Something went wrong sending your message. Please email hey@veep.work or try again.
- **Validation:** Please enter your name. · Please enter a valid email. · Please describe the initiative.

**Outcome labels**, used when a link passes `outcome`:

- Close the raise
- Fix the forecast
- Integrate the acquisition
- Unblock GTM
- Ship the platform
- Cover the seat
- Prep for exit

If one is present, the form shows an **Outcome** chip and prefills the message with "Interested in: {outcome}".

---

## Join `/join`

**Meta title:** Join Veep | Operator Network  
**Meta description:** Apply to Veep's invite-only network of senior operators. Own critical work for high-growth companies. Matched in 72 hours. Deployed in under 10 days.  
**Open Graph title:** Join Veep — Operator roster  
**Open Graph description:** Senior operators who embed, build, and deliver. Apply to the roster.

### Hero

- **Eyebrow:** Join Veep
- **Headline:** An invite-only network on call for the work that cannot wait.
- **Body:** Veep represents a small roster of senior operators who embed, build, and deliver. If you're ready to own the work that can't wait for high-growth companies, we want to meet you.
- **Primary CTA:** Apply below → `#apply`
- **Secondary CTA:** See how it works → `/how-it-works`

### Who we're looking for

- **Eyebrow:** Who we're looking for
- **Headline:** A curated roster of business builders.
- **Body:** We stay small on purpose. Every operator on the roster has run the seat before and can start inside two weeks.
- **01** Senior operating experience. Prior seat as a founder, CEO, GM, or C-suite / SVP leader. You've owned outcomes end-to-end, not advised from the sidelines.
- **02** Built for high impact. You're motivated by hands-on work, not management theater. You want to work with high-growth companies, own meaningful initiatives, win, and move on to the next challenge. Prior consulting or interim experience is a plus, but not required.
- **03** Track record in fast-paced environments. Bootstrapped, VC-backed, PE-backed, public — you've delivered under pressure with real constraints and short runway.
- **04** References and standards to match. Strong references, a bias to action, and a commitment to the craft. The roster stays small on purpose.

### Application

- **Eyebrow:** What happens next
1. We review every application personally
2. Intro conversation with a Veep founder
3. References and roster onboarding
4. Matched to engagements as they come in
- **Fine print:** Roster spots are limited. We respond to every serious application within one business week.

**Fields**

- First name *
- Last name *
- Work email *
- LinkedIn URL * (placeholder https://)
- Highest executive role held *: CEO / Founder · President / COO · CFO · CRO / CMO · CPO / CTO · GM / SVP · Other. Placeholder: Select a role…
- Resume *
- Add background details (optional)
- Personal site
- Experience embedding as an operator or advisor: Yes / No
- Company types you've worked with: Bootstrapped · VC-backed · PE-backed · Private · Public · Family-owned · Non-profit / NGO
- Growth stages you've worked with: Seed · Series A · Series B–C · Series D+ · IPO or equivalent · Buyout · Other
- Functional expertise: CEO / GM · Strategy & Operations · Finance · People · Go-to-Market · Sales, Marketing & Revenue · Product · Operations · Other
- Industry experience. Placeholder: e.g. SaaS, fintech, healthcare
- Anything else we should know?
- How did you hear about Veep?

- **Submit:** Submit application
- **Loading:** Submitting…
- **Fine print:** By submitting you agree to be contacted by Veep about your application.
- **Success headline:** Application received.
- **Success body:** A Veep founder will review it and be in touch.

**Validation**

- Please upload a resume.
- Resume must be smaller than 10 MB.
- Resume must be a PDF, DOC, or DOCX file.
- Please enter a valid LinkedIn profile URL.
- Please pick Yes or No for operator/advisor experience under Add background details, or leave that section closed and try again.
- Something went wrong. Please try again.

---

## Meet Veep `/meetveep`

**Note:** This page is `noindex, nofollow`. It is not in the sitemap.

**Meta title:** Meet Veep | Senior Operators for Work That Can't Wait  
**Meta description:** Veep connects founder-led companies with vetted senior operators who step in to own critical work, now. Deployed in under 10 days. 30-day fit guarantee.  
**Open Graph / Twitter description:** Vetted senior operators who step in to own critical work, now. Deployed in under 10 days. 30-day fit guarantee.

- **Eyebrow:** Meet Veep
- **Headline:** The work needs an owner.
- **Image alt:** Senior Veep operator
- **Body:** Your company may not be ready, willing, or able to make the permanent executive hire. The fundraise, GTM reset, margin issue, leadership gap, or operating priority still needs to move.
- **Body:** Veep matches founder-led companies with vetted senior operators for the job to be done. Critical work gets owned before a permanent hire is in place.
- **Line:** Vetted senior operators who step in to own critical work, now.
- Shortlist in 72 hours. Deployed in under 10 days.
- Flexible terms: scoped to the work (advisory, project, or ongoing)
- 30-day fit guarantee
- 75+ vetted senior operators · Avg. 18 yrs in seat
- **CTA:** Request an operator → `/contact`
- **CTA:** See how it works → `/how-it-works`

**Engagements**

- **Eyebrow:** Engagements
- **Headline:** Four shapes. One promise.
- **Body:** Advisory, Sprint, Operator, and Pod — priced to the work, not the hour.
- **Note:** That body contains an em dash.
- **CTA:** See pricing → `/pricing#tiers`
- **CTA:** For Funds → `/for-portfolios`

### Close

- **Headline:** Tell us what cannot wait.
- **Body:** Tell us about the work. We'll clarify the need, recommend the right model, and tell you directly if Veep isn't the answer.
- **Primary CTA:** Get in touch → `/contact`
- **Secondary CTA:** Request a capacity audit → `/contact?intent=audit`

---

## Operator roster

Shown on the homepage, For Companies, and For Funds. Each card has a name, a role, prior companies, a short bio, and three chips.

**Jian Yang.** Finance Operating Partner. Industrious, Opencare.  
Strategic finance leader and entrepreneur with a record of scaling fast-growing firms, optimizing financial operations, and securing funding. At Industrious, secured $140M+ in equity funding and restructured financial operations for rapid scale.  
Chips: Real Estate, Finance, Tech

**Erika Velazquez.** Marketing Operating Partner. Morning Brew, The New Republic.  
Story-driven marketer with deep expertise in brand strategy, product marketing, and audience growth. Specializes in launching and repositioning for impact. At Morning Brew, developed a new newsletter ad product that doubled the average CTR.  
Chips: New Media, Consumer, GenAI

**Elaine Bogart.** Finance Operating Partner. Fullscreen, Nifty's.  
Powerhouse CFO with 15+ years of experience leading financial transformation and strategic exits across SaaS, Web3, and new media. At Mojix, drove a +98% EBITDA turnaround and completed a successful international sale.  
Chips: Tech, Web3, Media

**Victoria Kasumu.** People Operating Partner. Zocdoc, Pager Health.  
Seasoned people leader who builds growth-focused operations by aligning talent, culture, and business goals. At David Zwirner, hired 50+ employees in 90 days while reducing redundancy 30% and increasing retention 15%.  
Chips: Hospitality, Tech, Healthcare

**Vanessa Kwan.** Finance Operating Partner. BDG Media, Goldman Sachs.  
Strategic finance and operations leader with 15+ years across investment banking, luxury retail, and digital media. At BDG Media, rose from Director to EVP Head of Finance and redesigned seller commissions, improving gross margins by 4 points.  
Chips: Digital Media, Luxury Retail, Consumer

**Alasdair Lloyd-Jones.** Growth Operating Partner. SET Creative (WPP), David Yurman.  
Global brand strategist and creative operator with a record of scaling consumer brands and leading high-impact transformation. As CEO of SET Creative, scaled revenue 5x and led the firm through a successful sale to WPP.  
Chips: Consumer Retail, Tech, Automotive

**Alan Poussaint.** Finance Operating Partner. Rocket Internet, Kixie.  
Transaction-ready finance operator with PE roots and marketplace scale; former Principal at Lincolnshire Management ($1.8B AUM), then CFO of a Rocket Internet portfolio company during the build of Indonesia's largest e-commerce platform.  
Chips: Tech, SaaS, Private Capital

**Jennifer Kasper.** Growth Operating Partner. LVMH, Macy's.  
Senior marketing leader with deep experience across global retail, beauty, fashion, media, and customer strategy. At LVMH, unified group media strategy across 75+ Maisons and built cross-brand agency models.  
Chips: Retail, Fashion, Beauty

**Sean Park.** People Operating Partner. Activant Capital, EY.  
People strategy leader who turns org design, leadership, and talent systems into business growth levers. As CPO at Activant Capital, led portfolio talent strategy and served as interim CHRO on a portfolio path to a $2B exit.  
Chips: Growth Equity, Pro Services, Tech

**Jonathan Levinson.** Finance Operating Partner. Kids Made Modern, Yellowheart.  
Finance and operations leader with 25+ years turning founder assumptions into investor-ready plans and operating discipline. Has led or supported $65M+ in M&A and fundraising transactions.  
Chips: E-Commerce, SaaS, Manufacturing

**Miguel Ferreyra de Bone.** Finance Operating Partner. Taste of Belgium, Farnsworth Cannabis.  
Seasoned operator with a track record of building and transforming companies across finance, strategy, operations, GTM, and product. Brings board-level judgment and hands-on operating experience across consumer, luxury, and finance.  
Chips: Consumer, Luxury, Finance

**Jessica Davila.** People Operating Partner. TaskRabbit, Bread.  
People strategy leader with a record of guiding companies through scale, acquisition, and leadership change. At TaskRabbit, rebuilt people strategy while scaling from 250 to 500 employees across 9 countries.  
Chips: Marketplace, Fintech, Consumer

---

## Privacy `/privacy`

Legal page. Hero and section titles are here so a writer can see the frame. The clause text is the legal source in `src/routes/privacy.tsx`.

**Meta title:** Privacy Policy | Veep  
**Meta description:** How The Veep Group, LLC collects, uses, shares, and protects your information across veep.work and the Veep platform.

- **Eyebrow:** Legal
- **Headline:** Privacy Policy.
- **Body:** How The Veep Group, LLC collects, uses, shares, and protects your information when you use veep.work and the Veep platform.
- **Primary CTA:** Learn more → `/about`
- **Secondary CTA:** Contact us → `/contact`
- **Label:** Effective date
- **Date:** April 1, 2025
- **Intro:** At Veep, your privacy matters. This Privacy Policy explains how The Veep Group, LLC ("Veep," "we," "us," or "our") collects, uses, shares, and protects your information through the use of our website (www.veep.work) and any related features, tools, or services (collectively, the "Service"). By accessing or using the Service, you agree to the terms outlined in this Privacy Policy.

**Sections:** 01 About Veep · 02 Information we collect · 03 Cookies and tracking technologies · 04 How we use your information · 05 How we share your information · 06 Data storage & security · 07 Children's privacy · 08 Communications & marketing · 09 Third-party links · 10 Legal disclosures · 11 Changes to this policy · 12 Contact us (The Veep Group, LLC, hey@veep.work, link to Terms of Service)

The close uses the default band: "Your next big move starts here."

---

## Terms `/terms`

**Meta title:** Terms of Service | Veep  
**Meta description:** The Terms of Service that govern access to and use of The Veep Group, LLC's platform, website, and related services.

- **Eyebrow:** Legal
- **Headline:** Terms of Service.
- **Body:** These Terms govern your access to and use of The Veep Group, LLC's platform, website, and related services. Please read them carefully.
- **Primary CTA:** Learn more → `/about`
- **Secondary CTA:** Contact us → `/contact`
- **Label:** Last updated
- **Date:** April 1, 2025
- **Intro:** Welcome to Veep. These Terms of Use ("Terms") govern your access to and use of The Veep Group, LLC's platform, website, and related services (collectively, the "Service"). By accessing or using the Service — including www.veep.work or any future websites we operate (the "Website") — you agree to be bound by these Terms.

**Sections:** 01 Overview of our service · 02 Acceptance of terms · 03 Updates to these terms · 04 Privacy · 05 Jurisdictional compliance · 06 Account responsibility & platform monitoring · 07 Our intellectual property · 08 Copyright compliance · 09 Feedback · then the remaining numbered sections through 17 Questions? (hey@veep.work)

The close uses the default band.

---

## Redirects

These URLs do not have their own copy. They send people to a live page.

| URL | Goes to |
| --- | --- |
| `/how-it-works` | `/for-companies#how` |
| `/proof` | `/#proof` |
| `/operators` | `/#operators` |
| `/partners` | `/#portfolios` |
| `/compare`, `/compare/vs-consultants`, `/compare/vs-executive-search` | `/#vs` |
| `/services/interim`, `/services/ai-operators`, `/services/fractional-cfo`, `/services/` | `/#offer` |
| `/services/executive-bench` | `/#portfolios` |
| Named operator URLs (Jian Yang, and the other profile slugs) | `/#operators` |

`/#offer` is not a section on the homepage. Engagements live at `/for-companies#offer`. The Why Veep comparison at `/#vs` is desktop only.

Those routes do not render their own copy.
