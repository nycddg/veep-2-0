import { createFileRoute } from "@tanstack/react-router";
import { ogImageMeta } from "@/lib/seo";
import { BookLink } from "@/components/site/rebuild/BookLink";
import { Container } from "@/components/site/rebuild/Container";
import { operatorAsset } from "@/components/site/rebuild/operatorAsset";
import { Portrait } from "@/components/site/rebuild/Portrait";
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
    <div className="rebuild">
      <Section pad="none" className="rb-funds-hero">
        <Container>
          <p className="rb-mono text-[14px] leading-[1.5] text-[var(--rb-link)]">For funds</p>
          <h1 className="rb-h1 rb-funds-title mt-4">Operating capacity across your portfolio.</h1>
          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-6">
              <p className="rb-deck">
                Veep gives private equity firms, family offices, holding companies, and independent
                sponsors senior operating capacity without building a full internal platform team.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
                <BookLink />
                <TextLink hash="audit">Explore the capacity audit</TextLink>
              </div>
            </div>
            <p className="rb-relationship-note text-[18px] leading-[1.55] lg:col-span-4 lg:col-start-9">
              Your fund has one operating relationship. Each company gets a scoped engagement and a
              lead owner for the work.
            </p>
          </div>
        </Container>
      </Section>

      <Section id="lifecycle" pad="none" className="pb-14 pt-8 md:pb-16 lg:pb-24 lg:pt-10">
        <Container>
          <h2 className="rb-utility-title">The investment plan still needs operators.</h2>
          <div className="relative mt-10">
            <div
              className="pointer-events-none absolute left-0 right-0 top-[4px] hidden h-px bg-[var(--rb-rule)] lg:block"
              aria-hidden
            />
            <ol className="border-l border-[var(--rb-rule)] pl-6 lg:grid lg:grid-cols-4 lg:gap-6 lg:border-l-0 lg:pl-0">
              {stages.map((stage) => (
                <li key={stage.title} className="relative py-6 lg:py-0 lg:pt-6">
                  <span
                    aria-hidden
                    className="absolute -left-[29px] top-8 h-2.5 w-2.5 rounded-full bg-[var(--rb-text)] lg:left-0 lg:top-0"
                  />
                  <h3 className="text-[24px] font-medium leading-[1.2] lg:text-[26px]">
                    {stage.title}
                  </h3>
                  <p className="mt-3 text-[18px] leading-[1.55] text-[var(--rb-muted)]">
                    {stage.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
          <p className="mt-8 border-t border-[var(--rb-coral)] pt-4 text-[18px] leading-[1.5] lg:mt-10">
            Leadership changes can happen at any point. Veep can provide ownership while the
            longer-term leadership decision takes shape.
          </p>
        </Container>
      </Section>

      <Section id="relationship" tone="raised">
        <Container>
          <h2 className="rb-h2 max-w-[30ch]">
            One operating relationship. Work scoped company by company.
          </h2>
          <div className="rb-portfolio-band mt-12">
            <div className="rb-portfolio-band-title">
              <h3 className="text-[24px] font-medium leading-[1.2] lg:text-[28px]">
                Across the portfolio
              </h3>
              <p className="mt-3 text-[16px] leading-[1.45] text-[var(--rb-muted)]">
                One master agreement
              </p>
            </div>
            <p className="rb-body rb-portfolio-intro">
              Capacity planning, priority operator access, and quarterly reviews help the fund
              prepare for upcoming needs. One master agreement establishes the relationship.
            </p>
            <ul className="rb-shared-capacity">
              {["Capacity planning", "Priority operator access", "Quarterly review"].map((item) => (
                <li key={item} className="text-[18px] leading-[1.4]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rb-company-branches">
            {["Capital readiness", "Commercial expansion", "Leadership coverage"].map((work) => (
              <article key={work} className="rb-company-mandate">
                <h4 className="text-[22px] font-medium leading-[1.25]">{work}</h4>
                <p className="mt-2 text-[16px] leading-[1.45] text-[var(--rb-muted)]">
                  Separate scope + lead owner
                </p>
                <p className="rb-mandate-fee mt-6 text-[16px] leading-[1.45]">
                  Separate statement of work and delivery fee
                </p>
              </article>
            ))}
          </div>
          <p className="mt-5 text-[16px] leading-[1.45] text-[var(--rb-muted)]">
            Illustrative company mandates, not named clients.
          </p>
          <h3 className="mt-10 text-[24px] font-medium leading-[1.2] lg:text-[28px]">
            Inside each company
          </h3>
          <p className="rb-body mt-4">
            Each engagement defines the work, lead owner, responsibilities, and price in a separate
            statement of work. Veep manages scope, quality, and continuity through delivery.
          </p>
          <ol className="mt-12 grid gap-6 border-t border-[var(--rb-rule)] pt-8 md:grid-cols-3">
            {cadence.map((item) => (
              <li key={item.label}>
                <h3 className="text-[18px] font-medium leading-[1.4]">{item.label}</h3>
                <p className="mt-2 text-[16px] leading-[1.5] text-[var(--rb-muted)]">{item.body}</p>
              </li>
            ))}
          </ol>
          <p className="rb-support mt-10 max-w-[62ch]">
            Fund and company leaders retain strategic decisions and approvals. Veep can also support
            an existing operating team with specialist or additional capacity around a defined
            mandate.
          </p>
        </Container>
      </Section>

      <Section id="operators">
        <Container>
          <h2 className="rb-h2">Experience inside investment firms and operating companies.</h2>
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            {operators.map((person) => {
              const photo = operatorAsset(person.name);
              return (
                <article key={person.name}>
                  <Portrait
                    src={photo.src}
                    objectPosition={photo.objectPosition}
                    scale={photo.scale}
                    className="aspect-[4/5] w-full max-w-[250px]"
                  />
                  <h3 className="mt-5 text-[26px] font-medium leading-[1.2]">{person.name}</h3>
                  <p className="mt-2 text-[16px] leading-[1.45]">{person.role}</p>
                  <p className="mt-3 max-w-[36ch] text-[18px] leading-[1.55] text-[var(--rb-muted)]">
                    {person.bio}
                  </p>
                </article>
              );
            })}
          </div>
          <p className="rb-caption rb-measure mt-10 text-[var(--rb-muted)]">
            Experience shown is from the operators' careers, including roles before Veep. We select
            from 75+ vetted senior operators for the mandate and the business.
          </p>
        </Container>
      </Section>

      <Section id="audit">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-5">
              <p className="rb-support">Portfolio Capacity Audit</p>
              <h2 className="rb-h2 mt-4">See where operating capacity will be needed next.</h2>
              <p className="rb-body mt-6">
                Over 2-3 weeks, we map current priorities and likely needs over the next 6-12
                months. The audit identifies where each company needs senior ownership, specialist
                support, or a plan for leadership coverage.
              </p>
              <TextLink to="/contact" search={{ intent: "audit" }} className="mt-6">
                Request a capacity audit
              </TextLink>
            </div>
            <div className="rb-audit-structure lg:col-span-7">
              <p className="text-[16px] leading-[1.45] text-[var(--rb-muted)]">
                Illustrative structure, not client findings.
              </p>
              <div className="mt-6 grid gap-5">
                {[
                  ["Company + priority", "Capital readiness"],
                  ["Upcoming need", "A raise, financing, or transaction is approaching"],
                  ["Recommended coverage", "Finance support with a lead operating partner"],
                ].map(([label, sample], index) => (
                  <div key={label} className="rb-audit-annotation">
                    <span className="rb-mono text-[14px] text-[var(--rb-muted)]" aria-hidden>
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="text-[20px] font-medium leading-[1.3] lg:text-[22px]">
                        {label}
                      </h3>
                      <p className="mt-2 text-[16px] leading-[1.5] text-[var(--rb-muted)]">
                        {sample}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {outputs.map((item) => (
              <div key={item.title}>
                <h3 className="text-[20px] font-medium leading-[1.3]">{item.title}</h3>
                <p className="mt-3 text-[16px] leading-[1.55] text-[var(--rb-muted)]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="roster" tone="field">
        <Container>
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

      <Section pad="compact">
        <Container>
          <h2 className="max-w-[18ch] text-[36px] font-medium leading-[1.15] lg:text-[40px]">
            Where will your portfolio need operating capacity next?
          </h2>
          <p className="rb-body mt-4 max-w-[48ch]">
            Bring the current company gaps and upcoming transactions. In a 30-minute intro call,
            we'll discuss the work, the operating relationship, and whether Veep is the right fit.
          </p>
          <BookLink className="mt-8" />
        </Container>
      </Section>
    </div>
  );
}
