import { PageIndex } from "@/components/site/rebuild/PageIndex";
import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/site/rebuild/Container";
import { Section } from "@/components/site/rebuild/Section";
import { BookLink } from "@/components/site/rebuild/BookLink";
import { TextLink } from "@/components/site/rebuild/TextLink";
import { Disclosure, PublicClose, PublicIntro } from "@/components/site/rebuild/PublicPage";
import { ogImageMeta } from "@/lib/seo";

type QA = { q: string; a: string };

const groups: { label: string; items: QA[] }[] = [
  {
    label: "Engagement",
    items: [
      {
        q: "How fast can a Veep operator start?",
        a: "Operating engagements are scoped in 72 hours and started in under 10 days. The scope defines the delivery timeline.",
      },
      {
        q: "How is Veep different from a consultant?",
        a: "Veep operating engagements include a named lead responsible for execution and delivery inside the business. Veep manages scope, quality, and continuity. Advisory is available when your team retains execution ownership.",
      },
      {
        q: "How is Veep different from executive search?",
        a: "Search is for permanent hiring. Veep is for critical work that needs senior ownership now, while the permanent hiring decision stays open.",
      },
      {
        q: "Remote or on-site?",
        a: "Both. Most Advisory, Sprint, and Operator engagements are remote with on-site presence for key moments: board meetings, offsites, integrations, planning sessions, and major operating milestones. Interim or high-intensity engagements may include regular on-site time.",
      },
      {
        q: "Can Veep run interim coverage while we search for a permanent hire?",
        a: "Yes. It is one of the most common use cases. A Veep operator covers the leadership gap, stabilizes the function, preserves momentum, and helps define the permanent role.",
      },
    ],
  },
  {
    label: "Operators",
    items: [
      {
        q: "What roles do Veep operators fill?",
        a: "Veep operators include CFOs, COOs, CROs, CMOs, CTOs, CPOs, people leaders, chiefs of staff, GMs, and functional experts. But we start with the work, not the title. The mandate determines the engagement: Advisory, Sprint, Operator, or Pod.",
      },
      {
        q: "How is the operator selected?",
        a: "We match operators to the work, urgency, company stage, function, industry, and business model. You review relevant profiles and references before the engagement begins.",
      },
      {
        q: "Do you use AI?",
        a: "Yes. Agent Teams are a distinct scoped offer for recurring finance, founder office, growth, and operations work. Agents support the agreed work. An operating partner provides functional judgment, quality review, and exception handling; a technical lead owns architecture, permissions, integrations, monitoring, and reliability. Your team retains strategic decisions and approvals. Systems, data access, timing, pricing, review requirements, and handoff are agreed in the scope.",
      },
      {
        q: "What industries do you serve?",
        a: "Veep works with founder-led, owner-led, investor-backed, and portfolio companies across sectors. Common areas include SaaS, AI/data companies, B2B services, DTC and e-commerce, multi-site services, healthcare services, consumer brands, industrial services, field services, and PE-backed portfolio companies. We match operating experience to the mandate, business model, and company stage.",
      },
    ],
  },
  {
    label: "Pricing",
    items: [
      {
        q: "How much does Veep cost?",
        a: "Starting prices: Advisory from $3k/month · Sprint from $25k/scope · Operator from $15k/month · Pod from $30k/month. Every engagement is scoped to the work, urgency, and level of ownership required.",
      },
      {
        q: "Are there setup or matching fees?",
        a: "No. Calls with a Veep founder and operator matching are free. Contracting, onboarding, and access setup are included in the engagement. You only pay once an engagement is signed.",
      },
      {
        q: "What if the operator is not the right fit?",
        a: "Veep offers a 30-day operator fit guarantee. If the operator isn't right within the first 30 days, we swap them or you walk, with no fee owed for the remaining term.",
      },
      {
        q: "Can we start with a smaller engagement?",
        a: "Yes. Many companies start with Advisory or a Sprint before moving into an ongoing Operator engagement. That's often the right path when the role is still undefined or the work is urgent but focused.",
      },
    ],
  },
  {
    label: "Portfolios & partnerships",
    items: [
      {
        q: "How does the Portfolio Roster work?",
        a: "PE firms, family offices, holding companies, independent sponsors, search funds, and multi-company founders can retain Veep as an operating-capacity partner. The annual relationship includes portfolio intake and operating capacity planning, quarterly reviews, priority operator matching and shortlists, included diagnostics, agreed emergency Operator or Pod coverage terms, one master services agreement, and preferred rates on separately scoped engagements. Annual Roster pricing is $75k/year. Operator delivery is scoped and billed separately in each statement of work.",
      },
      {
        q: "What is a Portfolio Capacity Audit?",
        a: "Over 2–3 weeks, Veep maps current priorities and likely needs over the next 6–12 months. The audit identifies operating capacity gaps, upcoming needs, and recommended coverage for company mandates. You leave with a company-by-company view of the capacity the portfolio needs.",
      },
      {
        q: "Do you have a referral program?",
        a: "Yes. We share economics with accountants, lenders, search firms, M&A advisors, attorneys, investors, and other partners who send us the right work. The best referrals are companies with critical work that needs senior ownership now.",
      },
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: groups
    .flatMap((g) => g.items)
    .map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
};

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Veep" },
      {
        name: "description",
        content:
          "How Veep engagements work: pricing, timing, operator vetting, fit guarantee, and how the Portfolio Roster works.",
      },
      { property: "og:title", content: "FAQ — Straight answers on cost, timing & fit | Veep" },
      {
        property: "og:description",
        content:
          "Pricing, timing, operator vetting, the 30-day fit guarantee, and how Veep's Portfolio Roster works for portfolios.",
      },
      { property: "og:url", content: "https://www.veep.work/faq" },
      ...ogImageMeta(),
    ],
    links: [{ rel: "canonical", href: "https://www.veep.work/faq" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqSchema) }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="rebuild ve-editorial ve-public ve-faq">
      <PublicIntro
        label="Questions & answers"
        title={
          <>
            Straight answers.
            <br /> <span>Before we start.</span>
          </>
        }
        actions={
          <>
            <BookLink />
            <TextLink to="/contact">
              Ask us directly <span aria-hidden="true">↗</span>
            </TextLink>
          </>
        }
      >
        <p>
          Who owns the work, how soon it can start, and what it costs. Here’s what to expect from a
          Veep engagement.
        </p>
      </PublicIntro>
      <Section className="ve-faq-section" pad="none">
        <Container className="ve-container ve-faq-layout">
          <PageIndex
            label="Question categories"
            items={groups.map((group, i) => ({
              href: `#questions-${i + 1}`,
              label: group.label,
              number: `0${i + 1}`,
            }))}
          />
          <div>
            {groups.map((group, i) => (
              <section className="ve-faq-group" id={`questions-${i + 1}`} key={group.label}>
                <h2>{group.label}</h2>
                {group.items.map((item) => (
                  <Disclosure key={item.q} question={item.q}>
                    <p>{item.a}</p>
                  </Disclosure>
                ))}
              </section>
            ))}
          </div>
        </Container>
      </Section>
      <PublicClose
        contact
        title={
          <>
            Still have
            <br /> a question<span className="ve-period">?</span>
          </>
        }
      >
        Tell us what you’re considering. We’ll answer your questions and recommend the right next
        step.
      </PublicClose>
    </div>
  );
}
