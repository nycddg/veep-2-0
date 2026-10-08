import { createFileRoute } from "@tanstack/react-router";
import { ogImageMeta } from "@/lib/seo";
import { BookLink } from "@/components/site/rebuild/BookLink";
import { Container } from "@/components/site/rebuild/Container";
import { operatorAsset } from "@/components/site/rebuild/operatorAsset";
import { Portrait } from "@/components/site/rebuild/Portrait";
import { PortfolioMap } from "@/components/site/rebuild/PortfolioMap";
import { Section } from "@/components/site/rebuild/Section";
import { TextLink } from "@/components/site/rebuild/TextLink";

const TITLE = "For Funds | Veep";
const DESCRIPTION =
  "Portfolio operating capacity for funds and portfolio owners. One operating relationship, with delivery scoped company by company.";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "For Funds",
  serviceType: "Portfolio operating capacity",
  provider: { "@type": "Organization", name: "Veep" },
  description: DESCRIPTION,
};

const stages = [
  {
    title: "Before close",
    body: "Financial models, team assessments, and operating plans help identify what the business will need and who should own the work.",
  },
  {
    title: "After close",
    body: "Reporting, integration, commercial priorities, and people decisions arrive together. Put senior ownership around the workstreams the team cannot absorb.",
  },
  {
    title: "During ownership",
    body: "Build commercial systems, strengthen finance and operations, and lead defined improvement mandates as the company's needs change.",
  },
  {
    title: "Ahead of exit",
    body: "Prepare the financial and operating materials, reporting, and coordination a transaction requires.",
  },
];

const cadence = [
  { label: "Agree once", body: "Set master terms and the operating relationship." },
  {
    label: "Scope each mandate",
    body: "Define the company's work and assemble the operating capacity it needs.",
  },
  {
    label: "Review quarterly",
    body: "Revisit priorities, upcoming transactions, and leadership changes across the portfolio.",
  },
];

const operators = [
  {
    name: "Alan Poussaint",
    role: "Finance Operating Partner",
    bio: "Former Principal at Lincolnshire Management and CFO of a Rocket Internet portfolio company. Brings experience across private equity, strategic finance, and company building.",
  },
  {
    name: "Sean Park",
    role: "People Operating Partner",
    bio: "Former CPO at Activant Capital, with experience in portfolio talent strategy, organization design, and interim people leadership.",
  },
];

const outputs = [
  {
    title: "Capacity map",
    body: "Leadership and execution gaps across finance, GTM, operations, product, and people, organized by company and priority.",
  },
  {
    title: "Upcoming needs",
    body: "Operating requirements around diligence, close, integration, fundraising, exit, and leadership transitions.",
  },
  {
    title: "Recommended coverage",
    body: "Suggested operating capacity, interim leadership coverage, and priority operator shortlists for likely mandates.",
  },
];

const included = [
  "Portfolio intake and operating capacity planning",
  "Quarterly reviews of priorities and capacity",
  "Priority operator matching and shortlists",
  "Included diagnostics",
  "Agreed emergency Operator or Pod coverage terms",
  "One master services agreement",
  "Preferred rates on separately scoped engagements",
];

export const Route = createFileRoute("/for-portfolios")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "https://www.veep.work/for-portfolios" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      ...ogImageMeta(),
    ],
    links: [{ rel: "canonical", href: "https://www.veep.work/for-portfolios" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(serviceSchema) }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="rebuild ve-editorial ve-funds">
      <Section pad="none" className="ve-funds-hero">
        <Container className="ve-container">
          <div className="ve-funds-opening">
            <p className="ve-kicker">For Funds & Portfolio Owners</p>
            <h1>
              The thesis is clear.
              <br />{" "}
              <span>
                Put operators
                <br /> behind it.
              </span>
            </h1>
            <div className="ve-funds-intro">
              <p>
                Veep gives private equity firms, family offices, holding companies, and independent
                sponsors senior operating capacity without building a full internal platform team.
              </p>
              <BookLink />
              <TextLink hash="audit">
                Explore the capacity audit <span aria-hidden="true">↘</span>
              </TextLink>
            </div>
          </div>
          <div id="lifecycle" className="ve-lifecycle">
            <div className="ve-lifecycle-caption">
              <h2>
                From diligence
                <br /> through exit.
              </h2>
              <p>
                The work changes.
                <br /> The operating relationship stays.
              </p>
            </div>
            <ol>
              {stages.map((stage, index) => (
                <li key={stage.title}>
                  <span className="ve-phase-number" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <h3>{stage.title}</h3>
                  <p>{stage.body}</p>
                </li>
              ))}
            </ol>
            <div className="ve-leadership-track">
              <span aria-hidden="true" />
              <p>
                Leadership changes can happen at any point. Veep provides ownership while the
                longer-term leadership decision takes shape.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="audit" className="ve-audit-section ve-fund-entry">
        <Container className="ve-container">
          <div className="ve-section-opening">
            <h2 className="ve-title">
              Start with
              <br /> the need.
            </h2>
            <p className="ve-body">
              One company’s urgent mandate, or a view across the portfolio. We can start with
              either.
            </p>
          </div>
          <div className="ve-fund-entry-grid">
            <article className="ve-company-entry">
              <p className="ve-kicker">A known company priority</p>
              <h3>
                Put an owner
                <br /> on the work now.
              </h3>
              <p>
                Bring the upcoming transaction, exposed leadership seat, or initiative that keeps
                falling back on the investment team.
              </p>
              <p>
                We define the company mandate, agree the scope and price, and assemble the operating
                capacity it needs. An urgent company mandate can start on its own.
              </p>
              <BookLink />
            </article>
            <article className="ve-capacity-brief">
              <div className="ve-capacity-brief-label">
                <p className="ve-kicker">Portfolio Capacity Audit</p>
                <span>2–3 weeks</span>
              </div>
              <h3>See the needs ahead.</h3>
              <p>
                Map current priorities and likely needs over the next 6–12 months. See which
                companies need senior ownership, specialist support, or leadership coverage.
              </p>
              <dl>
                {outputs.map((item) => (
                  <div key={item.title}>
                    <dt>{item.title}</dt>
                    <dd>{item.body}</dd>
                  </div>
                ))}
              </dl>
              <TextLink to="/contact" search={{ intent: "audit" }}>
                Request a capacity audit <span aria-hidden="true">↗</span>
              </TextLink>
            </article>
          </div>
        </Container>
      </Section>

      <Section id="relationship" className="ve-relationship-section">
        <Container className="ve-container">
          <div className="ve-section-opening">
            <h2 className="ve-title">
              Across the portfolio.
              <br /> Inside the company.
            </h2>
            <p className="ve-body">
              One operating relationship connects portfolio planning to company delivery. Each
              mandate gets its own scope, lead owner, responsibilities, and price.
            </p>
          </div>
          <PortfolioMap />
          <ol className="ve-portfolio-cadence">
            {cadence.map((item, i) => (
              <li key={item.label}>
                <span aria-hidden="true">0{i + 1}</span>
                <div>
                  <h3>{item.label}</h3>
                  <p>{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="ve-relationship-boundary">
            Veep manages scope, quality, and continuity through delivery. Fund and company leaders
            retain strategic decisions and approvals. We can also support an existing operating team
            with specialist or additional capacity.
          </p>
        </Container>
      </Section>

      <Section id="operators" className="ve-fund-experience">
        <Container className="ve-container">
          <h2 className="ve-title">
            They know both sides
            <br /> of the table.
          </h2>
          <div className="ve-career-proof">
            <p>
              <strong>20+</strong>
              <span>exits & acquisitions</span>
            </p>
            <p>Aggregated outcomes across our operators’ careers.</p>
          </div>
          <div className="ve-fund-people">
            <div className="ve-fund-portraits">
              {operators.map((person) => {
                const photo = operatorAsset(person.name);
                return (
                  <figure key={person.name}>
                    <Portrait
                      src={photo.src}
                      objectPosition={photo.objectPosition}
                      scale={photo.scale}
                      className="aspect-[4/5] w-full"
                    />
                    <figcaption>{person.name}</figcaption>
                  </figure>
                );
              })}
            </div>
            <div className="ve-fund-careers">
              {operators.map((person) => (
                <article key={person.name}>
                  <p className="ve-kicker">{person.role}</p>
                  <h3>{person.name}</h3>
                  <p>{person.bio}</p>
                </article>
              ))}
              <p className="ve-provenance">
                Experience shown is from the operators’ careers, including roles before Veep.
                Selected from 75+ vetted senior operators for the mandate and business.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="roster" tone="field" className="ve-roster-section">
        <Container className="ve-container">
          <h2 className="rb-h2">Keep the operating relationship in place.</h2>
          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-4">
              <h3 className="text-[26px] font-medium leading-[1.2]">Portfolio Roster</h3>
              <p className="rb-mono rb-roster-price mt-4 text-[var(--rb-text)]">$75k / year</p>
              <p className="mt-3 max-w-[24ch] text-[18px] leading-[1.45]">
                Operator delivery is scoped and billed separately.
              </p>
            </div>
            <div className="lg:col-span-8">
              <p className="rb-body">
                For funds and portfolio owners with recurring operating needs. Retain Veep for
                portfolio capacity planning and priority access, then scope delivery around each
                company's work.
              </p>
              <h3 className="mt-10 text-[18px] font-medium leading-[1.4]">
                Included in the annual relationship
              </h3>
              <ul className="rb-support mt-4 list-disc space-y-2 pl-5">
                {included.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h3 className="mt-10 text-[18px] font-medium leading-[1.4]">
                Scoped company by company
              </h3>
              <p className="rb-body mt-4">
                Delivery is defined and priced in each statement of work. The mandate determines
                whether the engagement takes the shape of Advisory, Sprint, Operator, or Pod. Fund
                and company leaders retain strategic decisions and approvals.
              </p>
              <p className="rb-support mt-4">
                Operating engagements are scoped in 72 hours and started in under 10 days.
              </p>
              <TextLink to="/pricing" hash="tiers" className="mt-4">
                See engagement pricing
              </TextLink>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="ve-close">
        <Container className="ve-container ve-close-layout">
          <h2>
            Where does the
            <br /> portfolio need
            <br /> an owner next<span className="ve-period">?</span>
          </h2>
          <div>
            <p>
              Bring one urgent mandate or the gaps you see across the portfolio. In a 30-minute
              intro call, we’ll discuss the work and the right starting point.
            </p>
            <BookLink />
          </div>
        </Container>
      </Section>
    </div>
  );
}
