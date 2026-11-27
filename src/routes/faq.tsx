import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { FooterCTA } from "@/components/site/FooterCTA";
import { Accordion } from "@/components/site/Accordion";
import { ogImageMeta } from "@/lib/seo";

type QA = { q: string; a: string };

const groups: { label: string; items: QA[] }[] = [
  {
    label: "Engagement",
    items: [
      { q: "How fast can a Veep engagement start?", a: "Operating engagements are scoped in 72 hours and started in under 10 days from your call with a Veep founder. Urgent interim transitions can move faster when the situation demands it." },
      { q: "How is Veep different from a consulting firm?", a: "Consultants deliver recommendations and leave implementation to your team. Veep operating partners step into live operations, build the models and commercial systems, handle exceptions alongside your leaders, and stay accountable through handoff." },
      { q: "How is Veep different from executive search?", a: "Search appoints permanent headcount over months. Veep deploys senior operators, playbooks, and workflows now so revenue, margins, and diligence readiness move immediately while any permanent hiring decision stays informed by live evidence." },
      { q: "Remote or on-site?", a: "Both. Most mandates run remotely with on-site presence for pivotal moments such as board meetings, diligence sessions, offsites, and post-close integration weeks. Interim or intensive mandates can include regular on-site time." },
      { q: "Can Veep cover an executive seat while we search for a permanent leader?", a: "Yes. Interim Leadership lets an experienced executive step into a vacant office with delegated authority, stabilize performance, and hand over a cleaner function and tested role definition when the permanent leader starts." },
    ],
  },
  {
    label: "Operators & Platform",
    items: [
      { q: "What functions and roles do Veep operating partners cover?", a: "Veep operating partners span strategic finance, GTM, operations, product, technology, people, and generalist C-suite leadership. We always start with the business outcome first, then match the partner and capacity shape to the job." },
      { q: "Can I browse the operator network?", a: "No. Veep is a governed operating partner platform, not a self-service marketplace. We scope the outcome first and recommend the exact lead partner based on stage, business model, function, and industry. Full profiles and references follow once the mandate is clear." },
      { q: "How does Veep use AI and Agent Teams?", a: "We deploy Operator-Governed Agent Teams where automation gives lean businesses institutional rigor across recurring finance reporting, pipeline discipline, founder prep, and operating reviews. Agents run the recurring execution, a senior operating partner sets the standard and resolves exceptions, a technical lead owns reliability, and you keep business approvals." },
      { q: "What industries do you serve?", a: "We work with independent businesses and portfolio companies across SaaS, AI and data, B2B services, consumer and e-commerce, multi-site healthcare and field services, media, and industrials. Industry fluency matters, and stage plus business-model fit matter just as much." },
    ],
  },
  {
    label: "Pricing",
    items: [
      { q: "How much does Veep cost?", a: "Public starting rates: Advisory from $3k/month · Sprint from $25k per scope · Embedded Operator from $15k/month · Pod from $30k/month. Interim Leadership, Managed Operating Partnerships, and Agent Teams are scoped individually to the mandate. No hourly billing." },
      { q: "Are there setup or sourcing fees?", a: "No. Scoping calls with a Veep founder, partner selection, contracting, and onboarding are included. You only pay once an agreed scope is signed." },
      { q: "What if it isn't the right fit?", a: "Every operating engagement carries a 30-day guarantee. If the engagement isn't right within the first 30 days, we make it right or you walk, with no fee owed for the remaining term." },
      { q: "Can companies engage Veep for one job or as an ongoing partner?", a: "Both. Companies engage Veep in two ways: an individual mandate for a specific decision, deliverable, function, or transition, or a Managed Operating Partnership from day one when leadership wants a partner at the table as priorities evolve." },
    ],
  },
  {
    label: "Portfolios & Partnerships",
    items: [
      { q: "How does the Portfolio Roster work for funds?", a: "Lean PE firms, family offices, holding companies, and independent sponsors retain Veep ($75k/year) for portfolio-wide capacity planning, quarterly reviews, priority operator access, emergency coverage paths, and preferred rates. Individual company mandates are agreed with each CEO and billed separately by SOW." },
      { q: "Do you have a referral program?", a: "Yes. We partner with accountants, lenders, M&A advisors, attorneys, search firms, and investors who introduce founders or funds facing a high-stakes raise, commercial reset, margin push, or transition." },
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: groups.flatMap((g) => g.items).map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
        "@type": "Answer",
        text:
          f.q === "How does Veep use AI and Agent Teams?"
            ? `${f.a} https://www.veep.work/agent-teams`
            : f.a,
      },
  })),
};

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Veep" },
      { name: "description", content: "Straight answers on Veep's operating partner model, pricing, timing, AI workflows, operator vetting, 30-day guarantee, and Portfolio Roster." },
      { property: "og:title", content: "FAQ | Veep" },
      { property: "og:description", content: "Straight answers on Veep's operating partner model, pricing, timing, AI workflows, operator vetting, 30-day guarantee, and Portfolio Roster." },
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
        title="Straight answers on model, pricing, and fit."
        sub="If your question isn't here, book a 30-minute call with a Veep founder. We'll clarify the outcome, recommend the right structure, and tell you plainly if Veep isn't the fit."
        secondarySearch={{ intent: "audit" }}
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
                <Accordion
                  key={qa.q}
                  q={qa.q}
                  a={
                    qa.q === "How does Veep use AI and Agent Teams?" ? (
                      <>
                        {qa.a}{" "}
                        <Link
                          to="/agent-teams"
                          className="motion-link text-cream underline underline-offset-4 decoration-white/40 hover:decoration-white"
                        >
                          See how Agent Teams work.
                        </Link>
                      </>
                    ) : (
                      qa.a
                    )
                  }
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      <FooterCTA />
    </>
  );
}
