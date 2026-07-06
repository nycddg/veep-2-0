import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, Eyebrow } from "@/components/site/primitives";
import { FooterCTA } from "@/components/site/FooterCTA";

const faqs = [
  {
    q: "What is Veep?",
    a: "Veep is a firm that places senior fractional and interim executives — CFO, COO, CRO, CTO — inside companies for pivotal moments. A senior operator owns the outcome. Engagements typically begin in under 10 days.",
  },
  {
    q: "How much does a fractional CFO cost?",
    a: "At Veep, fractional CFO engagements run $12k–$40k per month depending on scope. Advisory retainers start at $5k per month. Interim CFO coverage runs $35k–$90k per month for full-seat ownership.",
  },
  {
    q: "How is a fractional executive different from a consultant?",
    a: "A consultant analyzes and recommends. A fractional executive owns and delivers. Veep operators step into your business as the accountable executive for a defined outcome — not as an outside advisor writing a report.",
  },
  {
    q: "How is Veep different from an executive search firm?",
    a: "Executive search takes 4–6 months to place a permanent hire. Veep places a senior operator in the seat in under 10 days so the work moves now. The permanent search can continue in parallel — often the interim operator helps clarify what the permanent role should own.",
  },
  {
    q: "How fast can a Veep operator start?",
    a: "Most engagements begin in under 10 days from the discovery call. Emergency interim coverage can begin in 5 days when the trigger is urgent.",
  },
  {
    q: "What if the operator isn't the right fit?",
    a: "Every Veep engagement carries a 30-day fit guarantee. If the operator isn't right, we swap them or you walk with no fee owed for the remaining term.",
  },
  {
    q: "Who is Veep for?",
    a: "Series A–C founders and CEOs, PE and family-office portfolio companies, holdcos, and independent sponsors — anyone who needs senior executive capacity without committing to a full-time hire.",
  },
  {
    q: "What roles do Veep operators fill?",
    a: "CFO, COO, CRO, CMO, CTO, CPO, and Chief of Staff — as advisory, fractional, interim, or sprint engagements.",
  },
  {
    q: "Can Veep run interim coverage while we search for a permanent hire?",
    a: "Yes. This is one of the most common engagements. An interim operator preserves the search timeline, keeps the function running, and helps write the spec for the permanent role.",
  },
  {
    q: "Do Veep operators work remotely or on-site?",
    a: "Both. Most fractional and advisory engagements are remote with periodic on-site presence. Interim engagements often include weekly on-site time depending on the company and function.",
  },
  {
    q: "What industries does Veep serve?",
    a: "SaaS, DTC and e-commerce, multi-site services, healthcare services, industrial and B2B, and PE portfolio companies across sectors.",
  },
  {
    q: "How does the Executive Bench work for portfolios?",
    a: "PE firms, family offices, and holdcos retain the Executive Bench annually ($50k–$150k/yr) for priority operator access, quarterly capacity planning, and emergency CFO/COO/GTM coverage across the portfolio. Individual operator deployments are billed separately per SOW.",
  },
  {
    q: "Does Veep help with M&A, integration, or diligence?",
    a: "Yes. Sprint engagements cover M&A integration, diligence prep, working-capital analysis, and post-close operational integration. Fractional and interim CFOs also lead capital raises, refinancing, and lender readiness.",
  },
  {
    q: "Can we start with a smaller engagement?",
    a: "Yes. Most CFO engagements start with a 2–3 week Executive Leadership Diagnostic ($5k–$15k), credited against the first month if you continue.",
  },
  {
    q: "How do I get started?",
    a: "Book a 30-minute discovery call. We diagnose the trigger, classify the urgency, and match a senior operator — or tell you Veep isn't the right answer.",
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

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Fractional & Interim Executive FAQ | Veep" },
      {
        name: "description",
        content:
          "Direct answers on fractional CFO cost, interim executive timelines, Veep vs consultants, Veep vs executive search, and how engagements work.",
      },
      { property: "og:title", content: "FAQ — Veep" },
      { property: "og:description", content: "Straight answers on cost, timing, fit, and how Veep engagements work." },
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
        sub="If the answer you need isn't here, book a discovery call — we'll answer it in 30 minutes or less."
        index="01"
        category="FAQ"
      />

      <Section>
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <Eyebrow>Contents</Eyebrow>
            <ul className="mt-6 space-y-2 text-sm text-stone">
              {faqs.map((f, i) => (
                <li key={f.q}>
                  <a href={`#q-${i}`} className="hover:text-cream transition">
                    {String(i + 1).padStart(2, "0")}. {f.q}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2 divide-y divide-white/8 border-y border-white/8">
            {faqs.map((f, i) => (
              <div key={f.q} id={`q-${i}`} className="py-7">
                <div className="flex gap-4">
                  <span className="font-mono text-[11px] tracking-widest text-stone-soft pt-1.5 w-8 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="text-xl text-cream tracking-tight">{f.q}</div>
                    <p className="mt-2 text-stone leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <FooterCTA />
    </>
  );
}
