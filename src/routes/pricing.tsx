import { createFileRoute, Link } from "@tanstack/react-router";
import { Container } from "@/components/site/rebuild/Container";
import { Section } from "@/components/site/rebuild/Section";
import { TextLink } from "@/components/site/rebuild/TextLink";
import { Disclosure, PublicClose, PublicIntro } from "@/components/site/rebuild/PublicPage";
import { ogImageMeta } from "@/lib/seo";

const tiers = [
  {
    t: "Advisory",
    p: "From $3k",
    per: "per month",
    best: "Senior judgment for high-stakes decisions.",
    items: [
      "Board and investor prep",
      "Fundraise strategy",
      "Executive decisions",
      "Strategic tradeoffs",
      "Includes six one-hour sessions",
    ],
  },
  {
    t: "Sprint",
    p: "From $25k",
    per: "per scope",
    best: "One urgent priority with a clear owner and endpoint.",
    items: [
      "Fixed scope, fixed price",
      "4–12 week engagement",
      "GTM reset, fundraise, margin, diligence",
      "Clear success criteria",
    ],
  },
  {
    t: "Operator",
    p: "From $15k",
    per: "per month",
    best: "Embedded senior ownership of a function, initiative, or leadership gap.",
    items: [
      "Finance, GTM, operations, product, or people",
      "Build or reset a function",
      "Resolve leadership gaps",
      "Typically 3–12 months",
    ],
  },
  {
    t: "Pod",
    p: "From $30k",
    per: "per month",
    best: "A lead operator plus specialist support for cross-functional work.",
    items: [
      "Multi-function execution",
      "Operating reset or transformation",
      "GTM + RevOps, finance + ops, AI initiatives",
      "Coordinated senior execution",
    ],
  },
];

const notIncluded = [
  { t: "Placement fees", d: "Calls with a Veep founder and operator matching are free." },
  {
    t: "Setup or onboarding fees",
    d: "Contracting, access, and onboarding are managed at no extra cost.",
  },
  { t: "Long-term lock-in", d: "Start focused and continue, pause, or scale as the work changes." },
  {
    t: "Hourly billing surprises",
    d: "Scoped around the work. You know the number before you sign.",
  },
];

const faqs = [
  {
    q: "Are there setup or matching fees?",
    a: "No. Calls with a Veep founder and operator matching are free. You only pay once an engagement is signed.",
  },
  {
    q: "Can I convert between models mid-term?",
    a: "Yes. Many engagements change shape as the work becomes clearer. Advisory can become a Sprint. A Sprint can become an Operator engagement. Operator work can expand into a Pod.",
  },
  {
    q: "How does the 30-day fit guarantee work?",
    a: "If the operator is not right within the first 30 days, we swap them or you walk with no fee owed for the remaining term.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing | Veep" },
      {
        name: "description",
        content:
          "Advisory from $3k/mo · Sprint from $25k · Operator from $15k/mo · Pod from $30k/mo. Operator fit is covered by a 30-day fit guarantee.",
      },
      {
        property: "og:title",
        content: "Pricing | Scope, ownership, and operating capacity | Veep",
      },
      {
        property: "og:description",
        content:
          "Advisory from $3k/mo · Sprint from $25k · Operator from $15k/mo · Pod from $30k/mo. Operator fit is covered by a 30-day fit guarantee.",
      },
      { property: "og:url", content: "https://www.veep.work/pricing" },
      ...ogImageMeta(),
    ],
    links: [{ rel: "canonical", href: "https://www.veep.work/pricing" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqSchema) }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="rebuild ve-editorial ve-public ve-pricing">
      <PublicIntro
        label="Pricing"
        title={
          <>
            Define the work.
            <br /> <span>Price the mandate.</span>
          </>
        }
        actions={
          <>
            <Link to="/contact" className="ve-button cta-accent">
              Get in touch
            </Link>
            <TextLink to="/contact" search={{ intent: "audit" }}>
              Request a capacity audit <span aria-hidden="true">↗</span>
            </TextLink>
          </>
        }
      >
        <p>
          Agree the scope, the outcomes, and the level of ownership. Then choose the operating
          capacity the work needs.
        </p>
        <p className="ve-intro-note">Transparent rates. No hourly billing. Flexible engagements.</p>
      </PublicIntro>

      <Section id="tiers" pad="none" className="ve-pricing-sheet-section">
        <Container className="ve-container">
          <div className="ve-pricing-sheet v-paper">
            <div className="ve-price-group-labels">
              <span>Senior judgment</span>
              <span>Operating delivery</span>
            </div>
            <div className="ve-price-tiers">
              {tiers.map((tier, index) => (
                <article key={tier.t} className={`ve-price-tier ve-price-tier-${index}`}>
                  <p className="ve-kicker">0{index + 1}</p>
                  <h2>{tier.t}</h2>
                  <p className="ve-tier-price">
                    <span>From</span>
                    {tier.p.replace("From ", "")}
                    <small>{tier.per}</small>
                  </p>
                  <p className="ve-tier-best">{tier.best}</p>
                  <ul>
                    {tier.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="ve-tier-owner">
                    {index === 0
                      ? "Your team owns execution."
                      : index === 3
                        ? "A lead operator coordinates the team."
                        : "A lead operator owns the work."}
                  </p>
                </article>
              ))}
            </div>
            <div className="ve-price-sheet-note">
              <span>Scope. Assemble. Own. Deliver.</span>
              <p>Starting prices. The agreed scope sets the final fee.</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="ve-price-assurance">
        <Container className="ve-container ve-assurance-layout">
          <div className="ve-fit-statement">
            <p className="ve-kicker">Operator fit</p>
            <p className="ve-fit-number">
              30<span>days</span>
            </p>
            <h2>
              Fit matters.
              <br /> We stand behind it.
            </h2>
            <p>
              If the operator isn't right within the first 30 days, we swap them or you walk, with
              no fee owed for the remaining term.
            </p>
          </div>
          <div>
            <h2 className="ve-title">
              Clear before
              <br /> you commit.
            </h2>
            <div className="ve-commercial-notes">
              {notIncluded.map((item) => (
                <div key={item.t}>
                  <h3>{item.t}</h3>
                  <p>{item.d}</p>
                </div>
              ))}
            </div>
            <p className="ve-small-note">Response within one business day.</p>
          </div>
        </Container>
      </Section>

      <Section className="ve-price-roster">
        <Container className="ve-container ve-roster-price-layout">
          <div>
            <p className="ve-kicker">For Funds & Portfolio Owners</p>
            <h2 className="ve-title">
              One operating
              <br /> relationship.
              <br /> Across the portfolio.
            </h2>
            <p className="ve-roster-price">
              $75k <span>/ year</span>
            </p>
            <p>Portfolio Roster · Annual retainer</p>
          </div>
          <div>
            <h3>Plan capacity. Scope delivery separately.</h3>
            <p>
              Portfolio planning and priority operator access, under one master agreement. Quarterly
              reviews, included diagnostics, and agreed emergency Operator or Pod coverage terms
              help prepare for what’s next.
            </p>
            <p>
              Company engagements have their own scope, statement of work, and delivery fee at
              preferred rates.
            </p>
            <TextLink to="/for-portfolios" hash="roster">
              See the full Roster relationship <span aria-hidden="true">↗</span>
            </TextLink>
          </div>
        </Container>
      </Section>

      <Section className="ve-price-agent-note">
        <Container className="ve-container ve-section-opening">
          <div>
            <p className="ve-kicker">Agent Teams</p>
            <h2 className="ve-title">
              Recurring work.
              <br /> Senior oversight.
            </h2>
          </div>
          <div>
            <p className="ve-body">
              For recurring functional work, agents support delivery under operator direction and
              technical oversight. Systems, data access, timing, pricing, review, and handoff are
              agreed for the work.
            </p>
            <TextLink to="/for-companies" hash="agent-teams">
              Explore Agent Teams <span aria-hidden="true">↗</span>
            </TextLink>
          </div>
        </Container>
      </Section>

      <Section className="ve-price-questions">
        <Container className="ve-container ve-question-layout">
          <div>
            <h2 className="ve-title">
              Before
              <br /> we begin.
            </h2>
            <TextLink to="/faq">
              All questions <span aria-hidden="true">↗</span>
            </TextLink>
          </div>
          <div>
            {faqs.map((faq) => (
              <Disclosure key={faq.q} question={faq.q}>
                <p>{faq.a}</p>
              </Disclosure>
            ))}
          </div>
        </Container>
      </Section>
      <PublicClose>
        Bring the priority, urgency, and outcome. In a 30-minute intro call, we’ll recommend the
        right scope and level of support.
      </PublicClose>
    </div>
  );
}
