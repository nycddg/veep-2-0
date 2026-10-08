import { createFileRoute } from "@tanstack/react-router";
import { ogImageMeta } from "@/lib/seo";
import { BookLink } from "@/components/site/rebuild/BookLink";
import { Container } from "@/components/site/rebuild/Container";
import { OperatorSpotlight } from "@/components/site/rebuild/OperatorSpotlight";
import { WorkMandate } from "@/components/site/rebuild/WorkMandate";
import { AgentTeam } from "@/components/site/rebuild/AgentTeam";
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
    <div className="rebuild ve-editorial ve-companies">
      <Section pad="none" className="ve-company-hero">
        <Container className="ve-container">
          <p className="ve-kicker">For Companies</p>
          <div className="ve-company-opening">
            <h1>
              Give critical work
              <br /> <span>a senior owner.</span>
            </h1>
            <div>
              <p>
                The business needs to move, and your team is already at capacity. Veep puts a lead
                operating partner in charge of the work that keeps coming back to you.
              </p>
              <BookLink />
            </div>
          </div>
          <WorkMandate />
        </Container>
      </Section>

      <Section id="benefits" className="ve-accountability">
        <Container className="ve-container">
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

      <Section id="proof" pad="none" className="ve-case-section">
        <Container className="ve-container">
          <div className="ve-case-heading">
            <h2 className="ve-title">
              The work.
              <br /> The difference it made.
            </h2>
            <p>
              Selected Veep engagements.
              <br /> Companies anonymized.
            </p>
          </div>
          <article className="ve-case-primary">
            <div className="ve-case-result">
              <p className="ve-kicker">B2B SaaS · Finance operating partner</p>
              <p className="ve-proof-number">$6M</p>
              <p className="ve-proof-label">Raised in six weeks.</p>
            </div>
            <div className="ve-case-story">
              <h3>
                From first-round preparation
                <br /> to investor conversations.
              </h3>
              <p>{cases[0].situation}</p>
              <p>{cases[0].work}</p>
              <div className="ve-case-artifacts">
                <span>3-year model</span>
                <span>CAC / LTV reporting</span>
                <span>Investor meeting support</span>
              </div>
            </div>
          </article>
          <article className="ve-case-secondary">
            <div>
              <p className="ve-kicker">Software studio · Growth operating partner</p>
              <h3>
                Better project economics.
                <br /> A path into AI delivery.
              </h3>
              <p>{cases[1].situation}</p>
              <p>{cases[1].work}</p>
            </div>
            <div className="ve-secondary-result">
              <p>
                25<span>%</span>
              </p>
              <h4>Project margins up</h4>
              <span>At an $8M product development studio</span>
            </div>
          </article>
          <figure className="ve-testimonial">
            <span className="ve-quote-mark" aria-hidden="true">
              “
            </span>
            <blockquote>
              I cannot recommend this team more highly. They think, act, and engage like
              co-founders.
            </blockquote>
            <figcaption>
              <span>Jerry Kolber</span>Founder & CEO, Atomic Audio
            </figcaption>
            <p>Attributed client experience, separate from the anonymous cases above.</p>
          </figure>
        </Container>
      </Section>

      <Section id="operators" className="ve-company-people">
        <Container className="ve-container">
          <div className="ve-section-opening">
            <h2 className="ve-title">
              They’ve held the seat.
              <br /> They know the work.
            </h2>
            <p className="ve-body">
              75+ vetted senior operators. Selected for the work, business model, and company stage.
              Review relevant experience and references before the engagement begins.
            </p>
          </div>
          <OperatorSpotlight audience="companies" />
        </Container>
      </Section>

      <Section id="alternatives" pad="compact">
        <Container className="ve-container">
          <h2 className="rb-utility-title">Choose the help the job requires.</h2>
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
        <Container className="ve-container">
          <h2 className="rb-h2">Size the support to the work.</h2>
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
        </Container>
      </Section>

      <Section id="agent-teams" className="ve-agents-section">
        <Container className="ve-container">
          <AgentTeam />
        </Container>
      </Section>

      <Section id="how">
        <Container className="ve-container ve-delivery-layout">
          <div>
            <h2 className="ve-title">
              From the first
              <br /> conversation
              <br /> to the handoff.
            </h2>
            <p className="ve-body">
              We start with a 30-minute intro call to understand the priority, urgency, and outcome,
              and whether Veep is the right fit.
            </p>
            <div className="ve-delivery-speed">
              <p>
                <strong>72h</strong>
                <span>Scoped in 72 hours</span>
              </p>
              <p>
                <strong>&lt;10d</strong>
                <span>Started in under 10 days</span>
              </p>
            </div>
            <p className="ve-provenance">
              Timing applies to operating engagements, not completion of the mandate.
            </p>
          </div>
          <ol className="ve-delivery-steps">
            {delivery.map((step) => (
              <li key={step.n}>
                <span>{step.n}</span>
                <div>
                  <h3>{step.t}</h3>
                  <p>{step.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section className="ve-close">
        <Container className="ve-container ve-close-layout">
          <h2>
            Bring the
            <br /> stuck priority<span className="ve-period">.</span>
          </h2>
          <div>
            <p>
              You don’t need to know the title or team. Tell us what changed, what needs to move,
              and what happens if it doesn’t. In a 30-minute intro call, we’ll clarify the work and
              whether Veep is the right fit.
            </p>
            <BookLink />
          </div>
        </Container>
      </Section>
    </div>
  );
}
