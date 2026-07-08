import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { FooterCTA } from "@/components/site/FooterCTA";
import { ChevronDown } from "lucide-react";

type QA = { q: string; a: string };

const groups: { label: string; items: QA[] }[] = [
  {
    label: "Engagement",
    items: [
      { q: "How fast can a Veep operator start?", a: "Most engagements begin in under 10 days from the Bottleneck Call. Urgent leadership-gap or interim coverage can move faster when the work cannot wait." },
      { q: "How is Veep different from a consultant?", a: "A consultant recommends. A Veep operator owns. Our operators step into the work, set the rhythm, build the materials, make decisions with the team, and move the priority forward." },
      { q: "How is Veep different from executive search?", a: "Search is for permanent hiring. Veep is for critical work that needs senior ownership before the full-time hire makes sense. We help the work move now while the permanent hiring decision stays open." },
      { q: "Remote or on-site?", a: "Both. Most Advisory, Sprint, and Operator engagements are remote with on-site presence for key moments: board meetings, offsites, integrations, planning sessions, and major operating milestones. Interim or high-intensity engagements may include regular on-site time." },
      { q: "Can Veep run interim coverage while we search for a permanent hire?", a: "Yes. It is one of the most common use cases. A Veep operator can cover the leadership gap, stabilize the function, preserve momentum, and help define what the permanent role should actually become." },
    ],
  },
  {
    label: "Operators",
    items: [
      { q: "What roles do Veep operators fill?", a: "Veep operators include CFOs, COOs, CROs, CMOs, CTOs, CPOs, people leaders, chiefs of staff, GMs, and functional experts. But we start with the work, not the title. Depending on the need, the right structure may be Advisory, Sprint, Operator, Pod, or Operator in the Loop." },
      { q: "Can I browse the roster?", a: "No. Veep is a managed model, not a self-service marketplace. We recommend the operator based on the work, urgency, company stage, function, industry, business model, and fit. Full profiles and references are shared once we understand the priority. Marketplaces give you options. Veep gives you the operator." },
      { q: "Do you use AI?", a: "Yes, where it improves capacity, consistency, and speed. AI can support recurring workflows, research, reporting, content, data cleanup, analysis, and internal process work. But the operator provides judgment, oversight, quality control, and business context. AI supports the work. The operator owns the outcome." },
      { q: "What industries do you serve?", a: "Veep works with founder-led, owner-led, investor-backed, and portfolio companies across sectors. Common areas include SaaS, AI/data companies, B2B services, DTC and e-commerce, multi-site services, healthcare services, consumer brands, industrial services, field services, and PE-backed portfolio companies. The better question is not only industry. It is whether we have the right operator for the work." },
    ],
  },
  {
    label: "Pricing",
    items: [
      { q: "How much does Veep cost?", a: "Typical ranges: Advisory from $3k/month · Sprint from $25k · Operator from $15k/month · Pod from $30k/month. Every engagement is scoped to the work, urgency, and level of ownership required." },
      { q: "Are there setup or matching fees?", a: "No. Bottleneck Calls and operator matching are free. Contracting, onboarding, and access setup are included in the engagement. You only pay once an engagement is signed." },
      { q: "What if the operator is not the right fit?", a: "Every engagement carries a 30-day fit guarantee. If the operator isn't right, we swap them or you walk — no fee owed for the remaining term." },
      { q: "Can we start with a smaller engagement?", a: "Yes. Many companies start with Advisory or a Sprint before moving into an ongoing Operator engagement. That's often the right path when the role is still undefined or the work is urgent but focused." },
    ],
  },
  {
    label: "Portfolios & partnerships",
    items: [
      { q: "How does the Executive Roster work for portfolios?", a: "PE firms, family offices, holdcos, independent sponsors, search funds, and multi-company founders can retain Veep as an executive-capacity partner. The Roster typically includes priority matching, quarterly capacity planning, emergency CFO/COO/GTM/operator coverage, capacity audits, and preferred commercial terms. Annual Roster pricing is $75k/year, with operator deployments billed separately by SOW." },
      { q: "Do you have a referral program?", a: "Yes. We share economics with accountants, lenders, search firms, M&A advisors, attorneys, investors, and other partners who send us the right work. The best referrals are companies with critical work that needs senior ownership before a full-time hire makes sense." },
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
      { title: "FAQ — Straight Answers on Cost, Timing & Fit | Veep" },
      { name: "description", content: "How Veep engagements work: pricing, timing, operator vetting, fit guarantee, and how the Executive Roster for portfolios works." },
      { property: "og:title", content: "FAQ — Veep" },
      { property: "og:description", content: "Straight answers on cost, timing, and fit." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqSchema) }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Straight answers"
        italic="on cost, timing, and fit."
        sub="If the answer is not here, book a Bottleneck Call. We will help clarify the work, the right level of support, and whether Veep is the right fit."
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-14">
          {groups.map((g) => (
            <div key={g.label}>
              <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent mb-6">
                {g.label}
              </div>
              <div className="divide-y divide-white/8 border-y border-white/8">
                {g.items.map((qa) => (
                  <Accordion key={qa.q} q={qa.q} a={qa.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <FooterCTA />
    </>
  );
}

function Accordion({ q, a }: QA) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-2">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-start justify-between gap-6 py-4 text-left"
      >
        <span className="font-serif text-lg md:text-xl text-cream tracking-tight leading-snug">
          {q}
        </span>
        <ChevronDown
          size={18}
          className={`text-stone shrink-0 mt-1.5 transition-transform ${open ? "rotate-180 text-accent" : ""}`}
        />
      </button>
      {open && (
        <p className="pb-5 pr-10 text-sm text-stone leading-relaxed">{a}</p>
      )}
    </div>
  );
}
