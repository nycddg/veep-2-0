import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { FooterCTA } from "@/components/site/FooterCTA";
import { Accordion } from "@/components/site/Accordion";
import { ogImageMeta } from "@/lib/seo";

type QA = { q: string; a: string };

const groups: { label: string; items: QA[] }[] = [
  {
    label: "Engagement",
    items: [
      { q: "How fast can a Veep operator start?", a: "Operating engagements are scoped in 72 hours and started in under 10 days. We confirm the right fit and availability. Agent Teams have separately agreed launch timing." },
      { q: "How is Veep different from a consultant?", a: "Veep's delivery engagements take responsibility for the agreed work: planning, execution, coordination, and handoff. Advisory is different: we provide senior judgment while your team retains execution responsibility." },
      { q: "How is Veep different from executive search?", a: "Executive search fills a permanent role. Veep takes on the job now, through a project, embedded operator, or team. Hiring can follow separately." },
      { q: "Remote or on-site?", a: "Most work is remote, with on-site time agreed for board meetings, offsites, integration, or other important moments. Interim engagements may need a regular on-site presence. We establish the arrangement in the scope." },
      { q: "Can Veep run interim coverage while we search for a permanent hire?", a: "Yes. An operator can cover the gap, stabilize the function, and help clarify what the permanent role requires. When the hire arrives, we hand over the work, decisions, and context." },
    ],
  },
  {
    label: "Operators",
    items: [
      { q: "What roles do Veep operators fill?", a: "Our operating partners include finance, growth, operations, product, technology, and people leaders. We start with the job, then decide whether it needs a Sprint, embedded Operator, Pod, or separately scoped Agent Teams engagement. Advisory supports clients who retain execution." },
      { q: "Can I browse the roster?", a: "Veep is a managed operating partner platform. We assess the work, company stage, business model, functional depth, and relevant industry experience, then recommend the fit. Profiles and references support that decision. We confirm availability before agreeing the engagement." },
      { q: "How do Agent Teams work?", a: "We scope a recurring job, its output, and the standard it must meet. Agents execute; an operating partner directs, reviews, and refines the work until it meets that standard. Technical oversight supports reliability. You retain strategic decisions and approvals. Scope and volume determine pricing." },
      { q: "What industries do you serve?", a: "We work across SaaS, services, consumer businesses, healthcare, industrial companies, and investor-backed portfolios. Relevant industry knowledge matters alongside business-model fluency, company stage, and experience with the job itself. We assess that combination before recommending an operator or team." },
    ],
  },
  {
    label: "Pricing",
    items: [
      { q: "How much does Veep cost?", a: "Advisory starts at $3k/month; Sprints at $25k/scope; Operators at $15k/month; Pods at $30k/month. Agent Teams are scoped and priced separately by scope and volume. We agree the fee before work begins." },
      { q: "Are there setup or matching fees?", a: "No. Introductory calls and matching are free. Contracting, onboarding, and access setup are included in the engagement. Fees begin under the terms of the signed agreement." },
      { q: "What if the operator is not the right fit?", a: "If the operator is not right within the first 30 days, we swap them or you walk, with no fee owed for the remaining term. This is an operator-fit guarantee." },
      { q: "Can we start with a smaller engagement?", a: "Yes. Start with the scope the job needs. Advisory suits teams seeking judgment while doing the execution. A Sprint suits a defined delivery job. Further work is scoped by agreement, rather than assumed." },
    ],
  },
  {
    label: "Portfolios & partnerships",
    items: [
      { q: "How does the Portfolio Roster work?", a: "Funds, family offices, holdcos, and multi-company founders can retain a Portfolio Roster for $75k/year. It includes portfolio planning, quarterly reviews, priority matching, and preferred engagement terms. Company work is separately scoped and billed. Fit and availability are confirmed for each deployment; roster access does not reserve operator time." },
      { q: "Do you have a referral program?", a: "Yes. We work with accountants, lenders, search firms, M&A advisors, attorneys, investors, and other referral partners. Bring us a client's job and explain where your team fits. Referral terms and delivery responsibilities are agreed separately." },
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: groups.flatMap((g) => g.items).map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQs | How Veep Works" },
      { name: "description", content: "Straight answers on Veep's delivery models, pricing, timing, operator fit, Agent Teams, and Portfolio Rosters." },
      { property: "og:title", content: "FAQs | How Veep Works" },
      { property: "og:description", content: "Straight answers on Veep's delivery models, pricing, timing, operator fit, Agent Teams, and Portfolio Rosters." },
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
    <>
      <PageHero
        eyebrow="FAQ"
        title="Straight answers. Clear expectations."
        sub="What Veep takes on, how delivery works, and what you can expect. If your question is specific to the job, bring it to a 30-minute call with a Veep founder."
      />

      {/* Groups alternate raised/ink so the long list reads as chapters, not
          one slab */}
      {groups.map((g, i) => (
        <section
          key={g.label}
          className={`${i % 2 === 0 ? "bg-surface-raised" : ""} py-12 sm:py-14 md:py-16`}
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            {/* h2 so screen readers can jump between groups; leading pinned to
                the pre-h2 value so the label renders identically. */}
            <h2 className="eyebrow mb-6 leading-[1.55]">
              {g.label}
            </h2>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {g.items.map((qa) => (
                <Accordion key={qa.q} q={qa.q} a={qa.a} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <FooterCTA
        headline={<>Have a job in mind?</>}
        sub="Tell us what needs to happen. We'll help define the work and the next step."
        primary="contact"
      />
    </>
  );
}
