# Veep website outline

24 November 2026 · Proposed information architecture and page briefs

**Make the next move while your team keeps running the business.** Veep gives buyers a way to prepare for a deal, build a source of revenue, or test an expansion before committing more of the business to it. Show the senior capacity behind that promise, what changed for comparable clients, and the smallest engagement that can move the work forward.

The organizing sequence is **business move → accountable work → evidence → terms → conversation**. Each page answers one of those questions in depth and gives the reader a way to continue from there. This is a fresh page and navigation proposal based on the [Docker audit](Docker-Site-Audit.md) and the November [brand guidelines](../references/veepwebsitenew/brand-guidelines.html), [design spec](../references/veepwebsitenew/design-spec.html), and [offer comparison](../references/veepwebsitenew/offer-comparison.html).

## Navigation and launch sitemap

**Header** · Work we own · For companies · For funds · Case studies · Engagements · **Book intro call**. The wordmark goes to Home. Direct links are short enough for a simple menu on mobile.

**Footer** · Repeat the buying routes. Add About, Join as an operator, Contact, Privacy, and Terms. Keep the FAQ beside the terms it qualifies on Engagements. Contact is the alternate inquiry route and uses the existing contact flow. Use the established booking destination for **Book intro call**.

| Page | Proposed route | Question it answers | Intended next step |
|---|---|---|---|
| Home | `/` | What can Veep help us take on? | Explore the work or choose the relevant buyer page |
| Work we own | `/work` | Can someone own this job from here to a useful finish? | Open the relevant example or compare offers |
| For companies | `/for-companies` | What could my company pursue with a senior operator available? | Read a comparable case or book an intro |
| For funds | `/for-portfolios` | How do I give a CEO operating help and plan across the portfolio? | Compare one company mandate with Portfolio Roster |
| Case studies | `/case-studies` | Where has Veep done comparable work? | Open an individual case |
| Individual case | `/case-studies/{case}` | What changed, what did the operator do, and how was the result measured? | Explore the relevant job or book an intro |
| Engagements | `/pricing` | What should Veep take on, and who executes? | Compare engagements and book an intro |
| Operating partners | `/operators` | Who has carried similar work? | Explore relevant work or book an intro |
| About | `/about` | Who are the people behind Veep, and how do they exercise judgment? | View relevant work or book an intro |
| Utilities | `/join`, `/contact`, privacy and terms | How do I apply, inquire, or find the legal terms? | Complete the relevant task |

Routes are proposed for the new sitemap. Preserve working destinations and map relevant legacy URLs and hashes during implementation. Capability details can start at anchors on `/work`, with their own URLs when a job has enough distinct material and proof to support a page.

### Clickable wireframes

Start at the [homepage](Veep-Homepage-Wireframe.html). The interior pages open directly and can be shared by their own file links.

| Page | Wireframe |
|---|---|
| Work we own | [Work and deliverables](interiors/work.html) |
| For companies | [Company decisions and engagement options](interiors/companies.html) |
| For funds | [Company mandates, Portfolio Roster, and the audit](interiors/funds.html) |
| Case studies | [Index](interiors/case-studies.html) · [Software studio](interiors/case-studio.html) · [Seed round](interiors/case-capital.html) · [Monthly close](interiors/case-close.html) · [Industrial audit](interiors/case-industrial.html) |
| Engagements | [Comparison and terms](interiors/pricing.html#tiers) |
| Operating partners | [Profiles and relevant experience](interiors/operators.html) |
| About and writing | [About](interiors/about.html) · [Zero to Something](interiors/writing.html) |
| Utility | [Operator application](interiors/join.html#apply) · [Contact](interiors/contact.html) · [Audit inquiry](interiors/contact.html?intent=audit) |

## 1. Home

**Revision brief.** Lead with the reason a founder, CEO, or fund calls Veep. Important work needs to move, nobody has the capacity or authority to own it, and it keeps landing back on leadership. Veep brings companies and funds the operating partner capacity found inside top VC and PE firms. Getting ready for a deal, growing revenue, and launching a business line are applications of that proposition.

### The buying sequence

| Order | Question in the buyer’s mind | Content decision |
|---|---|---|
| 1. Wayfinding and immediate action | I already know why I’m here. Where do I go? | Keep Companies, Funds, Work, and booking easy to find. Give a fund partner with several companies to plan for a direct route to the existing [Portfolio Capacity Audit](interiors/funds.html). Use a promotional bar only for a timely offer relevant to the audience. |
| 2. Positioning | Why would I call Veep? | Lead with the trigger in the established positioning. “Founders, CEOs, owner-operators, and funds hire Veep when mission-critical work has no clear owner and needs to move now.” Follow with the operating partner proposition. Test whether a reader can name both the situation and what they are buying after the first screen. |
| 3. Early credibility | Who has trusted you with work like this? | Keep the selected-client strip immediately below the promise. Use approved names or marks. Attribute individual results only where the case names the client. |
| 4. Reasons to choose Veep | What changes because Veep is involved? | Make three benefits tangible. Senior judgment helps a CEO choose what to do first, as in the veterinary group’s close before its ERP project. An accountable lead carries work across functions, as in the CFO’s work from model to investor diligence. Capacity inside the business lets the core team keep delivering, as in the studio’s launch while existing client work continued. Link to the underlying cases. Deal, growth, and expansion remain useful categories on [Work](interiors/work.html). |
| 5. How it works | What would actually move off my desk? | Use the [studio](interiors/case-studio.html) as one worked example. Begin with scoping, staffing, and margin decisions returning to the CEO. Show what the COO took on, who owned project delivery afterward, and who took over the new practice. A viewer should be able to trace each transfer with the adjacent prose covered and motion paused. |
| 6. Independent proof | Does this hold up beyond that example? | Lead with two different clients. The [SaaS company](interiors/case-capital.html) raised $6M against a $4M target in six weeks. The [veterinary group](interiors/case-close.html) cut its monthly close from about 25 days to eight. Use the attributed Atomic Audio quote for the experience of working with Veep. Keep the studio’s results attached to its demonstration. |
| 7. Breadth and recall | Is there someone here who has carried my kind of work? | Bridge from results to named [operating partners](interiors/operators.html). Pair a person with prior responsibility, such as Jian Yang’s financing experience at Industrious or Alasdair Lloyd-Jones leading SET Creative through its sale. Label these as career experience. Aggregate Veep scale or momentum would need its own sourced figure and period. |
| 8. First useful action | What can I do before a sales call? | Offer to help the visitor frame a live priority. A company buyer identifies the outcome, deadline, and who owns it today, and gets a short brief they can copy or bring to a call. A fund buyer can start with one company or see the audit’s scope, timing, and output. The company brief is a proposed new interaction. Link engagement terms as supporting detail. |
| 9. Editorial | How do these people think? | Feature one published issue around a decision the visitor recognizes, with a specific reason to read it. “Nobody Is Deciding About AI” can speak to a leader deciding who owns the next move after several experiments. Keep its publication date and archive link visible. |
| 10. Conversion and deeper navigation | What happens if I reach out? | Keep “Bring us the job.” Invite the visitor to bring the priority and deadline to a Veep founder. Show booking and written contact together. The footer should also route visitors directly to company and fund work, cases, engagement terms, operators, writing, and the agent-readable brief. |

### Review test

Read only the headings and calls to action. Can a founder say when to call Veep, why an operating partner helps, what that person could own, what evidence supports the claim, and what the founder can do today? Can a fund partner find both the single-company and portfolio routes? Check the diagram again with its supporting paragraphs hidden. Check every result against its case and every named operator claim against that operator’s profile.

## 2. Work we own

Translate the buyer’s situation into work that can be commissioned. Buyers should be able to enter through this page directly from a referral or search.

| Buyer job | Recognizable trigger | What an operator could carry | What the client can use | Nearest evidence |
|---|---|---|---|---|
| Get ready for a raise or transaction | A raise, financing, or acquisition has a deadline | Build the forecast, resolve diligence questions, and strengthen the reporting behind the model | An editable model, documented assumptions, and a diligence package the team can defend | B2B SaaS capital readiness |
| Turn a commercial opportunity into revenue | A customer wants a new offer, or signed partners have yet to produce orders | Test willingness to pay, work the first accounts, and establish what the team can repeat | Buyer evidence and a decision on where to invest next | Software studio’s AI practice and pilots |
| Get an operating change done | An acquisition, close, or cross-functional change needs an owner | Rebuild the work, coordinate contributors, and get the new cadence through handoff | A process a named team can run, with known exceptions and owners | Veterinary group’s monthly close |
| Put a leader in charge of a function | A vacancy, launch, or transition leaves a function or initiative exposed | Own the agreed function or initiative and run its operating cadence | Continuity through the transition and a handoff the incoming owner can use | Relevant operating experience and permissioned cases when available |

The Work catalog opens with a category index. Transaction readiness pairs the $6M seed-round case with the work the fractional CFO carried. Revenue and expansion feature the studio case and its documented results. Operating change uses a labeled before-and-after timeline from the veterinary case. The leadership diagram shows what transfers from the interim operating partner to the incoming lead and where strategic approvals stay. Relevant operating experience sits alongside it. Each chapter leads to evidence or engagement terms. The approved scope spans strategic finance, GTM, operations, product, and people.

## 3. For companies

Help a founder or executive decide what to give an operator and what to keep with the team.

1. **Open with the company’s decision.** “A customer wants a second offer. Find out who else will pay for it while your team keeps serving the first.” Label the example wherever its status could be confused with a case.
2. **Show three situations.** A financing on a deadline, a new revenue opportunity, and leadership or operating coverage during change. Link each to the related Work section. Lead with the consequence for the company.
3. **Show one company engagement up close.** Put the client’s decision, named role, operator’s remit, and usable output next to a real approved case. Include the operating relationship explicitly. The lead runs the agreed work, Veep governs scope, quality, escalation, and continuity, and the client retains strategic decisions and approvals.
4. **Show relevant experience.** Use short attributed profiles. Jian Yang secured equity funding and rebuilt finance operations at Industrious. Alasdair Lloyd-Jones grew SET Creative’s revenue fivefold as its CEO and led the sale to WPP. Attribute the results to the work each person did in their career.
5. **Help the buyer decide how much to delegate.** Route to the engagement comparison. Show what the company retains, what Veep can manage, and where a lead assumes delegated executive authority.
6. **Describe Agent Teams briefly.** Give a recurring job an accountable operator and a technical lead who manages access and reliability. Link to the engagement terms.
7. **Close with a buying question.** “What has to move, and by when?” **Book intro call** follows the answer.

Use an opportunity-led editorial opening, a concrete case spread, and a small responsibility comparison. Give recurring work a short section linked to the pricing detail.

## 4. For funds

**Get a CEO help now. Plan for the rest of the portfolio.** If a transaction, leadership gap, or integration is already on the calendar, start with that company. If priorities are emerging across the portfolio, make those needs visible and decide which ones deserve dedicated capacity.

1. **Start with a CEO’s need.** Show a portfolio company that needs someone to carry finance through diligence or integration. State what the fund can put beside the CEO and what the company can do as a result.
2. **Show the two buying paths.** One company can commission a mandate on its own. A fund can buy Portfolio Roster for **$75,000/year** for portfolio planning and priority matching, with quarterly reviews and an annual refresh. Each company engagement is scoped and billed separately at preferred rates. Confirm operator fit and availability for each scope.
3. **Draw the relationship.** A single fund-level agreement connects to independent company mandates. Label who buys the roster, who commissions each scope, who owns the work, and where approvals sit. Pair the diagram with a short text equivalent.
4. **Offer a Portfolio Capacity Audit.** The audit takes 2–3 weeks and looks ahead 6–12 months. It leaves the fund with each company’s priority, timing, capacity gap, and recommended next step. The reader can [discuss a capacity audit](https://www.veep.work/contact?intent=audit).
5. **Show comparable company work.** Use the veterinary company’s faster close and the industrial services company’s first formal audit. Add fund-level evidence when there is a documented fund mandate and a result measured across companies.
6. **Close on the question a fund can answer.** “Which company needs operating coverage next?” Offer **Book intro call** and **See Portfolio Roster terms**.

One company moment opens the page. The fund/company diagram explains the two levels of responsibility. Use a compact planning artifact and one evidence spread for the second half.

## 5. Case studies

Let a buyer verify capability against a comparable job and share the evidence with another decision-maker.

**Index.** Feature the studio and list the three finance and operating cases by buyer job. Use a compact list at launch. Add filters when the collection is large enough to justify them. The [case index](interiors/case-studies.html) links to all four case drafts.

**Detail.** Open with the client’s stakes and a result with its period or baseline. Follow with the operator’s assignments, a point where their judgment mattered, what was handed back, the measured result, and a related job. Use names, quotes, client marks, and work artifacts with permission. An anonymized case can keep its specificity through the work and the measurement.

| Case | Story and evidence | What to confirm before publication |
|---|---|---|
| Software studio expansion | A fractional COO strengthened project scoping and delivery while helping launch an AI practice. Project gross margins rose 25% and the CEO spent 66% less time on operations. The practice secured three pilot clients and a $2M+ prospective pipeline. | Measurement periods and permission for the expanded account. Keep the pipeline qualifier with the figure. |
| B2B SaaS seed round | A fractional CFO built a three-year model and data-room materials for the company’s first institutional round. The company closed $6M against a $4M target in six weeks, and the CFO continued with board preparation and investor communications. | Permission for the expanded account and any work sample. Apply the six-week period to the close. |
| Veterinary group monthly close | A fractional CFO prioritized accounting and reporting ahead of an ERP project and supported acquisition integration. Close fell from about 25 days to eight while the CEO led fundraising. | Measurement period and permission for the expanded account. |
| Industrial services audit | A major debt facility raised a family-owned company’s reporting requirements. A fractional CFO led its first formal audit and NetSuite implementation and strengthened planning and lender reporting. | Permission for the anonymized account and any further detail. |

The next case opportunities are a new channel with attributable orders or booked revenue and a fund mandate with credible results across several companies.

## 6. Engagements

Compare buyer situations, who executes, and what the client gets. Preserve the pricing route and prior section links. Confirm the applicable starting fees, timelines, and fit terms for the new architecture before publishing.

| Offer | Responsibility and useful finish |
|---|---|
| Advise · Advisory | Veep provides senior judgment. The client decides and executes. |
| Build · Projects & sprints | Veep delivers a defined mandate and hands over the agreed result. |
| Operate · Embedded leadership | A partner leads an ongoing function or strategic agenda within an agreed remit. |
| Lead · Interim leadership | An interim executive assumes delegated authority through a transition and hands over to the next lead. |
| Partner · Managed operating partnerships | Veep provides operating capacity across several priorities and functions. The client and Veep agree changes in scope. |

Show Agent Teams and Portfolio Roster alongside their relevant scope. Portfolio Roster covers fund-level planning and priority access for $75,000/year. Company work is scoped and billed separately at preferred rates. The FAQ answers who approves work and what transfers at handoff.

## 7. About and utility pages

- **Operating partners.** Give the six profiles a home alongside named operators and evidence from their careers. Sector depth can overlap with functional expertise.
- **About.** Start with who takes responsibility for the work. Show founders and a few operators through attributed judgments, relevant prior assignments, and links to actual work. If using aggregate career figures, label them as such beside the numbers. Give prospective operators a route to Join.
- **Join.** Explain the mandates operators carry, expectations on ownership and handoff, and the application path. Give the form a clear completion state.
- **Contact, Privacy, and Terms.** Each has one task and an unambiguous completion or destination. Keep contact and application paths distinct.

## 8. Writing and newsletter

Zero to Something should give readers a point of view on decisions they’re making now. The homepage keeps the published issues and archive. The next field note can ask when to turn a commercial experiment into a permanent team.

### Draft field note — When has a new sales channel earned a permanent team?

A signed partner can spend a quarter without putting you in front of a buyer. Spend that quarter learning whether the channel can sell before you budget for a team to run it.

Start with a paid order. Find out who put the offer in front of the buyer, why the buyer paid, and what your team had to do to close the deal. Then see if another seller can do it with another buyer. A second order starts to show you have a channel if the economics hold and the delivery team can carry the work again.

Write down what would earn the next dollar before you start. If every deal needs the founder on the call, work out what the founder is doing that the partner can’t do yet. If buyers want the offer but the cost of delivery wipes out the margin, fix the offer and test again. If another seller can close it and the team can deliver it at a margin you can live with, you have a case for putting someone in charge.

The people you hire will inherit whatever you learned in that first quarter. Give them a way to sell and deliver the work they can build on.

## Design direction for the first wireframe

- **Choose the form by the information.** Use spacious type for the proposition, aligned rows for comparisons, one document-style excerpt for how work happens, and larger areas for persuasive evidence. Use similar-sized modules for items readers actually need to compare.
- **Develop an original visual language around assigned work.** Use the November brand’s IBM Plex typography, locally paired cream and ink fields, ownership blue, and sparing coral for an actual job or decision signal. Use a scope boundary when it explains responsibility. Docker’s illustration and interface treatments are reference observations. Veep’s source imagery is the operator’s work.
- **Make every specimen answer three questions.** What is the work, who owns it, and what can the client do once it is finished? Show the complete reading state on load. Motion can help reveal a handoff when it clarifies those answers. Keep essential labels, the conclusion, and the next action available in the static state.
- **Vary pace without changing the alignment.** The homepage changes from proposition to demonstration to proof. Engagements stays aligned and predictable. Cases open with a summary and then settle into a reading column. Funds earns a diagram because it has two levels of responsibility.

## Build and validation order

1. **Assemble the content before drawing components.** Use the approved offers and the four drafted cases. Confirm the claims and permissions listed in the case brief and use the labeled Agent Teams example for recurring work.
2. **Wireframe Home, Work, one case, and Engagements as one buying journey.** Use real headings, offers, and results in the wireframes. Check that a visitor can move from the job to evidence and terms in two deliberate clicks from each job section. Confirm that a case entered directly from a referral can lead back to its job and to booking.
3. **Build the two audience pages against the shared facts.** Check that a founder can correctly explain what their operator owns and a fund partner can describe the roster fee and the separate company scope. Finish About and the required utility screens with established destinations and protected behavior.
4. **Validate with buyer tasks.** Test a founder with a diligence deadline, a CEO who needs function coverage, and a fund partner with two portfolio needs. Ask each what Veep will own, what they would buy, what proof they found, and how they would start. Repeat at mobile and desktop widths. Check keyboard navigation, zoom, contrast, and reduced motion before release.
5. **Expand in response to demand.** Use recurring buyer questions and substantial evidence to choose the first standalone Work detail and the first resource, such as a diligence-readiness checklist or scoped handoff guide. Add a search or filtering layer once the content collection requires it.

Confidence is **high** on separating the buyer job, case, and commercial comparison. Confidence is **moderate** on the four initial job labels and the header order until buyer task testing. Public case pages depend on permission and source material. Route names and draft headings are proposals.
