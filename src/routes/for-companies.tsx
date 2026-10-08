import { createFileRoute } from "@tanstack/react-router";
import { ogImageMeta } from "@/lib/seo";
import { BookLink } from "@/components/site/rebuild/BookLink";
import { Container } from "@/components/site/rebuild/Container";
import { operatorAsset } from "@/components/site/rebuild/operatorAsset";
import { Portrait } from "@/components/site/rebuild/Portrait";
import { Section } from "@/components/site/rebuild/Section";
import { TextLink } from "@/components/site/rebuild/TextLink";

const TITLE = "For Companies | Veep";
const DESCRIPTION =
  "Senior operating partners for capital readiness, growth, expansion, and leadership gaps. Defined scopes, clear ownership, and delivery managed by Veep.";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "For Companies",
  serviceType: "Senior operating partners",
  provider: { "@type": "Organization", name: "Veep" },
  description: DESCRIPTION,
  offers: [
    {
      "@type": "Offer",
      name: "Advisory",
      description: "From $3k / month",
      priceSpecification: { "@type": "PriceSpecification", price: "3000", priceCurrency: "USD" },
    },
    {
      "@type": "Offer",
      name: "Sprint",
      description: "From $25k / scope",
      priceSpecification: { "@type": "PriceSpecification", price: "25000", priceCurrency: "USD" },
    },
    {
      "@type": "Offer",
      name: "Operator",
      description: "From $15k / month",
      priceSpecification: { "@type": "PriceSpecification", price: "15000", priceCurrency: "USD" },
    },
    {
      "@type": "Offer",
      name: "Pod",
      description: "From $30k / month",
      priceSpecification: { "@type": "PriceSpecification", price: "30000", priceCurrency: "USD" },
    },
  ],
};

const work = [
  {
    id: "capital-readiness",
    title: "Capital & transaction readiness",
    situation: "A raise, financing, or transaction is approaching.",
    detail:
      "Build the models, reporting, and materials the process needs. Coordinate preparation so the business is ready for investor, lender, or buyer scrutiny.",
  },
  {
    id: "revenue-repeatability",
    title: "Revenue repeatability",
    situation: "Growth still depends on the founder.",
    detail:
      "Clarify customer focus, positioning, and pricing. Put pipeline management and a sales cadence in place that the team can run.",
  },
  {
    id: "commercial-expansion",
    title: "Commercial expansion",
    situation: "The opportunity is clear. The operating plan is missing.",
    detail:
      "Build the business case and operating plan for a new market, product, offer, or channel. Lead the launch and the coordination it requires across the business.",
  },
  {
    id: "leadership",
    title: "Leadership and operating gaps",
    situation: "A critical function needs someone in charge.",
    detail:
      "Give the work a senior owner while the team, role, or permanent hire takes shape. Maintain continuity and prepare a documented handoff.",
  },
] as const;

const responsibilities = [
  {
    role: "Lead operating partner",
    detail:
      "Runs the workplan, coordinates the people involved, and takes responsibility for execution and delivery against the agreed scope.",
  },
  {
    role: "Veep",
    detail:
      "Manages scope, quality review, escalation, and continuity through delivery and handoff.",
  },
  {
    role: "Your team",
    detail: "Provides business context and retains strategic decisions and approvals.",
  },
];

const cases = [
  {
    context: "B2B SaaS",
    result: "$6M raised in six weeks",
    subhead: "Preparing for a first institutional round",
    situation:
      "The CEO was preparing for a first institutional round without a financial model, investor materials, or fundraising experience.",
    work: "Built a three-year model and diligence-ready CAC/LTV dashboards, and coached the CEO through investor meetings and term sheets.",
    role: "Operating partner: Finance",
  },
  {
    context: "Software studio",
    result: "Project margins up 25%",
    subhead: "Rebuilding project economics and AI delivery",
    situation:
      "An $8M product development studio faced inconsistent project profitability and needed a scalable approach to AI work.",
    work: "Standardized project scoping and staffing, built an AI GTM and delivery framework, and hired a Director of AI.",
    role: "Operating partner: Growth",
  },
];

const operators = [
  {
    name: "Jian Yang",
    role: "Finance Operating Partner",
    prior: "Prior experience: Industrious, Opencare",
    bio: "At Industrious, secured $140M+ in equity funding and restructured financial operations for rapid scale.",
  },
  {
    name: "Erika Velazquez",
    role: "Marketing Operating Partner",
    prior: "Prior experience: Morning Brew, The New Republic",
    bio: "Specializes in launching and repositioning products. At Morning Brew, developed a newsletter ad product that doubled the average click-through rate.",
  },
];

const alternatives = [
  {
    option: "Your current team",
    fit: "Keep the work in-house when someone has the capacity and authority to own it. Veep adds senior capacity when the mandate would otherwise displace another critical priority.",
  },
  {
    option: "A permanent hire",
    fit: "Hire for a lasting role. Veep can own the current work while the search runs, then hand over to the new leader.",
  },
  {
    option: "A consultancy",
    fit: "A consultancy may be right for specialist analysis or a defined project. Veep's operating engagements include a named lead responsible for execution inside the business.",
  },
  {
    option: "Independent specialists",
    fit: "Specialists can deliver defined parts of the work. Veep provides a lead owner to coordinate delivery when the mandate spans people or functions.",
  },
];

const tiers = [
  {
    name: "Advisory",
    price: "From $3k / month",
    detail:
      "Senior judgment for board preparation, fundraising strategy, and high-stakes decisions. Your team retains execution ownership.",
  },
  {
    name: "Sprint",
    price: "From $25k / scope",
    detail:
      "One urgent priority with a defined owner and endpoint. Typically 4-12 weeks, shaped around the work.",
  },
  {
    name: "Operator",
    price: "From $15k / month",
    detail:
      "Embedded senior ownership of a function, initiative, or leadership gap. Typically 3-12 months.",
  },
  {
    name: "Pod",
    price: "From $30k / month",
    detail: "A lead operating partner plus specialist support for work spanning functions.",
  },
];

const delivery = [
  {
    n: "01",
    t: "Scope",
    d: "For operating engagements, we scope the work in 72 hours. Agree the responsibilities, success criteria, level of support, and price.",
  },
  {
    n: "02",
    t: "Assemble",
    d: "Select a lead operating partner and the support the work requires. Review relevant experience and references before the engagement begins.",
  },
  {
    n: "03",
    t: "Own",
    d: "Operating engagements start in under 10 days. The lead operator runs the workplan and coordinates delivery; Veep manages scope, quality, and continuity.",
  },
  {
    n: "04",
    t: "Deliver",
    d: "Complete the agreed work and hand over the documentation, context, and working materials. If the business needs further support, agree the next scope.",
  },
];

export const Route = createFileRoute("/for-companies")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "https://www.veep.work/for-companies" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      ...ogImageMeta(),
    ],
    links: [{ rel: "canonical", href: "https://www.veep.work/for-companies" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(serviceSchema) }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="rebuild">
      <Section pad="none" className="rb-company-hero">
        <Container>
          <div className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-6">
            <div className="lg:col-span-6">
              <p className="rb-mono text-[14px] leading-[1.5] text-[var(--rb-link)]">
                For companies
              </p>
              <h1 className="rb-h1 mt-4">Give critical work a senior owner.</h1>
              <p className="rb-deck mt-6">
                When the work sits between functions, depends too much on you, or needs capacity
                your team cannot spare, Veep scopes the mandate and puts a lead operating partner in
                charge.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
                <BookLink />
                <TextLink hash="work">Explore the work</TextLink>
              </div>
            </div>
            <aside className="rb-mandate-sheet mt-12 lg:col-span-5 lg:col-start-8 lg:mt-0">
              <p className="rb-caption text-[var(--rb-muted)]">Illustrative mandate</p>
              <h2 className="mt-3 text-[26px] font-medium leading-[1.2]">Capital readiness</h2>
              <p className="rb-caption mt-3 text-[var(--rb-muted)]">
                An example of a scoped arrangement. Not a client record.
              </p>
              <dl className="mt-6">
                {[
                  ["Work", "Capital readiness"],
                  ["Scope", "Model, reporting, and investor materials"],
                  ["Ownership", "Lead operating partner"],
                  ["Decisions", "Client leadership retains approvals"],
                ].map(([label, value]) => (
                  <div key={label} className="rb-mandate-entry">
                    <dt className="text-[14px] leading-[1.4] text-[var(--rb-muted)]">{label}</dt>
                    <dd className="mt-1 text-[18px] leading-[1.45]">{value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </Container>
      </Section>

      <Section id="work">
        <Container>
          <h2 className="rb-h2">Start with the work that needs to move.</h2>
          <div className="mt-10">
            {work.map((row) => (
              <article
                key={row.id}
                id={row.id}
                className="grid gap-3 border-t border-[var(--rb-rule)] py-10 lg:grid-cols-12 lg:gap-6 lg:py-12"
              >
                <p className="text-[16px] leading-[1.45] text-[var(--rb-muted)] lg:col-span-3">
                  {row.title}
                </p>
                <div className="lg:col-span-9">
                  <h3 className="max-w-[28ch] text-[26px] font-medium leading-[1.25] lg:text-[30px]">
                    {row.situation}
                  </h3>
                  <p className="mt-3 max-w-[62ch] text-[18px] leading-[1.55]">{row.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="benefits" tone="raised">
        <Container>
          <h2 className="rb-h2 max-w-[26ch]">
            An operating partner leads. Veep stays accountable.
          </h2>
          <div className="rb-responsibility-map mt-12">
            <div className="rb-execution-lane">
              <p className="rb-execution-start text-[18px] leading-[1.4]">Scoped work</p>
              <div className="rb-lead-owner">
                <h3 className="text-[26px] font-medium leading-[1.2]">Lead operating partner</h3>
                <p className="mt-3 text-[16px] leading-[1.5]">{responsibilities[0].detail}</p>
              </div>
              <p className="rb-execution-end text-[18px] leading-[1.4]">Delivery</p>
            </div>
            <div className="rb-veep-bracket">
              <h3 className="text-[22px] font-medium leading-[1.3]">Veep</h3>
              <p className="mt-2 text-[16px] leading-[1.5] text-[var(--rb-muted)]">
                {responsibilities[1].detail}
              </p>
            </div>
            <div className="rb-client-decisions">
              <h3 className="text-[22px] font-medium leading-[1.3]">Your team</h3>
              <p className="mt-2 text-[16px] leading-[1.5] text-[var(--rb-muted)]">
                {responsibilities[2].detail}
              </p>
            </div>
          </div>
          <p className="rb-body mt-8 max-w-[62ch]">
            In Advisory engagements, your team retains execution ownership. Veep provides senior
            judgment and guidance.
          </p>
        </Container>
      </Section>

      <Section id="proof" tone="field">
        <Container>
          <h2 className="rb-h2 max-w-[16ch]">What the work looks like in practice.</h2>
          <article className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-4">
              <p className="rb-caption text-[var(--rb-muted)]">B2B SaaS</p>
              <p className="rb-metric mt-3">$6M</p>
              <p className="mt-3 text-[20px] leading-[1.35] lg:text-[22px]">Raised in six weeks</p>
              <p className="rb-caption mt-4 text-[var(--rb-muted)]">Operating partner: Finance</p>
            </div>
            <div className="lg:col-span-8">
              <h3 className="max-w-[22ch] text-[26px] font-medium leading-[1.2] lg:text-[28px]">
                Preparing for a first institutional round
              </h3>
              <p className="mt-6 text-[14px] leading-[1.4] text-[var(--rb-muted)]">Situation</p>
              <p className="rb-body mt-2">{cases[0].situation}</p>
              <p className="mt-6 text-[14px] leading-[1.4] text-[var(--rb-muted)]">Work</p>
              <p className="rb-body mt-2">{cases[0].work}</p>
            </div>
          </article>
          <article className="mt-14 grid gap-4 border-t border-[var(--rb-rule)] pt-8 lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-4">
              <p className="rb-caption text-[var(--rb-muted)]">Software studio</p>
              <p className="mt-3 text-[22px] font-medium leading-[1.3] lg:text-[26px]">
                Project margins up 25%
              </p>
              <p className="rb-caption mt-4 text-[var(--rb-muted)]">Operating partner: Growth</p>
            </div>
            <div className="lg:col-span-8">
              <h3 className="text-[20px] font-medium leading-[1.3]">
                Rebuilding project economics and AI delivery
              </h3>
              <p className="mt-4 text-[14px] leading-[1.4] text-[var(--rb-muted)]">Situation</p>
              <p className="rb-body mt-2">{cases[1].situation}</p>
              <p className="mt-4 text-[14px] leading-[1.4] text-[var(--rb-muted)]">Work</p>
              <p className="rb-body mt-2">{cases[1].work}</p>
            </div>
          </article>
          <figure className="rb-client-quote mt-16">
            <blockquote>
              <p className="text-[28px] font-medium leading-[1.3] lg:text-[32px]">
                "I cannot recommend this team more highly. They think, act, and engage like
                co-founders."
              </p>
            </blockquote>
            <figcaption className="mt-4 text-[16px] leading-[1.45]">
              Jerry Kolber, Founder & CEO, Atomic Audio
            </figcaption>
            <p className="rb-caption mt-3 text-[var(--rb-muted)]">
              Attributed client experience. The cases above are anonymous engagements.
            </p>
          </figure>
        </Container>
      </Section>

      <Section id="operators">
        <Container>
          <h2 className="rb-h2">Operators who've held the seat.</h2>
          <p className="rb-body rb-measure mt-6">
            75+ vetted senior operators. We select for the work, business model, and company stage.
            You can review relevant experience and references before the engagement begins.
          </p>
          <div className="mt-12 space-y-16">
            {operators.map((person) => {
              const photo = operatorAsset(person.name);
              return (
                <article
                  key={person.name}
                  className="grid gap-6 md:grid-cols-[260px_minmax(0,1fr)]"
                >
                  <Portrait
                    src={photo.src}
                    objectPosition={photo.objectPosition}
                    scale={photo.scale}
                    className="aspect-[4/5] w-[220px] md:w-full md:max-w-[260px]"
                  />
                  <div className="max-w-[42ch]">
                    <h3 className="text-[26px] font-medium leading-[1.2]">{person.name}</h3>
                    <p className="mt-2 text-[16px] leading-[1.45]">{person.role}</p>
                    <p className="mt-1 text-[16px] leading-[1.45] text-[var(--rb-muted)]">
                      {person.prior}
                    </p>
                    <p className="mt-4 text-[20px] leading-[1.45] lg:text-[22px]">{person.bio}</p>
                  </div>
                </article>
              );
            })}
          </div>
          <p className="rb-caption mt-10 text-[var(--rb-muted)]">
            Experience shown is from the operators' careers, including roles before Veep.
          </p>
        </Container>
      </Section>

      <Section id="alternatives" pad="compact">
        <Container>
          <h2 className="rb-utility-title">When the usual options leave a gap.</h2>
          <table className="rb-options mt-10 w-full border-collapse">
            <thead>
              <tr className="border-b border-[var(--rb-rule)]">
                <th scope="col" className="w-1/4 py-4 pr-6 text-left text-[16px] font-medium">
                  Option
                </th>
                <th scope="col" className="py-4 text-left text-[16px] font-medium">
                  When it fits, and where Veep can help
                </th>
              </tr>
            </thead>
            <tbody>
              {alternatives.map((row) => (
                <tr key={row.option} className="border-b border-[var(--rb-rule)]">
                  <th
                    scope="row"
                    className="py-5 pr-6 text-left align-top text-[18px] font-medium leading-[1.4]"
                  >
                    {row.option}
                  </th>
                  <td className="py-5 align-top text-[18px] leading-[1.55]">
                    {row.fit.split(". ").length > 1 ? (
                      <>
                        <p>{row.fit.slice(0, row.fit.indexOf(". ") + 1)}</p>
                        <p className="mt-2 text-[var(--rb-muted)]">
                          {row.fit.slice(row.fit.indexOf(". ") + 2)}
                        </p>
                      </>
                    ) : (
                      row.fit
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Container>
      </Section>

      <Section id="offer" tone="raised">
        <Container>
          <h2 className="rb-h2">Scope determines the support and the price.</h2>
          <p className="rb-body rb-measure mt-6">
            Define the work first. Choose the engagement shape together.
          </p>
          <div className="mt-12 hidden border-b border-[var(--rb-rule)] pb-3 xl:grid xl:grid-cols-4">
            <p className="text-[16px] leading-[1.4] text-[var(--rb-muted)]">Senior guidance</p>
            <p className="col-span-3 pl-6 text-[16px] leading-[1.4] text-[var(--rb-muted)]">
              Operating delivery
            </p>
          </div>
          <div className="rb-tier-grid">
            {tiers.map((tier, index) => (
              <div key={tier.name}>
                <p className="text-[14px] leading-[1.4] text-[var(--rb-muted)] xl:hidden">
                  {index === 0 ? "Senior guidance" : "Operating delivery"}
                </p>
                <h3 className="mt-2 text-[24px] font-medium leading-[1.2] xl:mt-0 xl:text-[26px]">
                  {tier.name}
                </h3>
                <p className="rb-mono mt-4 text-[22px] leading-[1.3]">{tier.price}</p>
                <p className="mt-4 text-[16px] leading-[1.55] text-[var(--rb-muted)]">
                  {tier.detail}
                </p>
              </div>
            ))}
          </div>
          <TextLink to="/pricing" hash="tiers" className="mt-8">
            See engagement details
          </TextLink>
          <div className="mt-12 max-w-[62ch]">
            <h3 className="text-[22px] font-medium leading-[1.3]">30-day operator fit guarantee</h3>
            <p className="mt-3 text-[18px] leading-[1.55]">
              If the operator isn't right within the first 30 days, we swap them or you walk, with
              no fee owed for the remaining term.
            </p>
          </div>
          <div id="agent-teams" className="mt-16 border-t border-[var(--rb-rule)] pt-10">
            <h3 className="text-[26px] font-medium leading-[1.25]">
              Agent Teams for recurring work.
            </h3>
            <div className="rb-recurring-lane mt-8">
              <p className="text-[18px] leading-[1.4]">
                <span aria-hidden className="mr-3 text-[var(--rb-coral)]">
                  ↻
                </span>
                Recurring finance, founder office, growth, and operations work
              </p>
            </div>
            <div className="rb-agent-responsibilities">
              {[
                ["Operating partner", "Functional judgment, quality, and exceptions"],
                ["Technical lead", "Architecture and reliability"],
                ["Your team", "Strategic decisions and approvals"],
              ].map(([label, note]) => (
                <div key={label} className="rb-agent-role">
                  <p className="text-[18px] font-medium leading-[1.4]">{label}</p>
                  <p className="mt-2 text-[16px] leading-[1.5] text-[var(--rb-muted)]">{note}</p>
                </div>
              ))}
            </div>
            <p className="rb-body mt-8">
              For recurring finance, founder office, growth, and operations work, Veep combines
              operator direction with technical oversight. The operating partner governs functional
              judgment, quality, and exceptions. A CTO or technical lead oversees architecture and
              reliability. Your team retains strategic decisions and approvals.
            </p>
            <p className="mt-4 text-[16px] leading-[1.5]">Agent Teams are scoped separately.</p>
          </div>
        </Container>
      </Section>

      <Section id="how">
        <Container>
          <h2 className="rb-h2">From the first conversation to the handoff.</h2>
          <p className="rb-body rb-measure mt-6">
            We start with a 30-minute intro call to understand the priority, urgency, and outcome,
            and whether Veep is the right fit.
          </p>
          <ol className="mt-12 border-l border-[var(--rb-rule)] pl-6 md:pl-8">
            {delivery.map((step) => (
              <li key={step.n} className="relative pb-10">
                <span
                  aria-hidden
                  className="absolute -left-[29px] top-2 h-2.5 w-2.5 rounded-full bg-[var(--rb-link)] md:-left-[37px]"
                />
                <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                  <h3 className="text-[26px] font-medium leading-[1.2]">{step.t}</h3>
                  {step.n === "01" ? (
                    <p className="text-[20px] leading-[1.3]">Scoped in 72 hours</p>
                  ) : null}
                  {step.n === "03" ? (
                    <p className="text-[20px] leading-[1.3]">Started in under 10 days</p>
                  ) : null}
                  {step.n === "04" ? <p className="text-[20px] leading-[1.3]">Handoff</p> : null}
                </div>
                <p className="rb-body mt-3">{step.d}</p>
              </li>
            ))}
          </ol>
          <p className="max-w-[52ch] text-[16px] leading-[1.5] text-[var(--rb-muted)]">
            Scoped in 72 hours and started in under 10 days applies to operating engagements.
          </p>
        </Container>
      </Section>

      <Section pad="compact">
        <Container>
          <h2 className="max-w-[14ch] text-[36px] font-medium leading-[1.15] lg:text-[40px]">
            Tell us what needs to move.
          </h2>
          <p className="rb-body mt-4 max-w-[48ch]">
            Bring the priority, the urgency, and what a good outcome would look like. In a 30-minute
            intro call, we'll discuss the work and whether Veep is the right fit.
          </p>
          <BookLink className="mt-8" />
        </Container>
      </Section>
    </div>
  );
}
