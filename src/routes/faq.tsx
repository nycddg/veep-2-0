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
      { q: "How fast can a Veep operator start?", a: "Most engagements begin in under 10 days from the discovery call. Emergency interim coverage can start in as little as 5 days." },
      { q: "How is Veep different from a consultant?", a: "A consultant recommends. A Veep operator owns. Our operators step into your business as the accountable executive — not as an outside advisor writing a deck." },
      { q: "How is Veep different from executive search?", a: "Search takes 4–6 months to close. Veep places a senior operator in the seat in under 10 days so the work moves now, and the permanent search runs in parallel without pressure." },
      { q: "Remote or on-site?", a: "Both. Most fractional and advisory engagements are remote with periodic on-site presence. Interim engagements often include weekly on-site time." },
      { q: "Can Veep run interim coverage while we search for a permanent hire?", a: "Yes — one of the most common engagements. The interim operator preserves the timeline and helps write the spec for the permanent role." },
    ],
  },
  {
    label: "Operators",
    items: [
      { q: "What roles do Veep operators fill?", a: "CFO, COO, CRO, CMO, CTO, CPO, and Chief of Staff — as advisory, fractional, interim, or sprint engagements." },
      { q: "Can I browse the roster?", a: "No. Veep is a managed model. Every match is hand-run by a partner against the specific outcome. Full profiles and references are shared once we understand the moment." },
      { q: "Do you use AI?", a: "Yes — operators use AI to execute routine work under supervision. The operator still governs and reviews. AI never replaces the seat." },
      { q: "What industries do you serve?", a: "SaaS, DTC and e-commerce, multi-site services, healthcare services, industrial and B2B, and PE portcos across sectors." },
    ],
  },
  {
    label: "Pricing",
    items: [
      { q: "How much does a fractional executive cost?", a: "Advisory $5k–$12.5k/mo · Fractional $12k–$40k/mo · Interim $35k–$90k/mo · Sprint scoped per outcome. All ranges are what buyers actually pay." },
      { q: "Are there setup or matching fees?", a: "No. Discovery calls and matching are free. You only pay once an engagement is signed." },
      { q: "What if the operator isn't the right fit?", a: "Every engagement carries a 30-day fit guarantee. We swap the operator or you walk with no fee owed for the remaining term." },
      { q: "Can we start with a smaller engagement?", a: "Yes. Most fractional CFO engagements start with a 2–3 week Executive Leadership Diagnostic ($5k–$15k), credited against the first month if you continue." },
    ],
  },
  {
    label: "Portfolios & partnerships",
    items: [
      { q: "How does the Executive Bench work for portfolios?", a: "PE firms, family offices, and holdcos retain the bench annually ($50k–$150k/yr) for priority matching, quarterly capacity planning, and emergency CFO/COO/GTM coverage. Operator deployments billed separately per SOW." },
      { q: "Do you have a referral program?", a: "Yes. We share economics with accountants, lenders, search firms, M&A advisors, and counsel who send us the right work. Reach out via the contact form." },
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
      { title: "FAQ — Direct Answers on Cost, Timing & Fit | Veep" },
      { name: "description", content: "How Veep engagements work: pricing, timing, operator vetting, fit guarantee, and how the portfolio bench works." },
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
        sub="If the answer isn't here, book a discovery call — we'll answer in 30 minutes."
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-14">
          {groups.map((g) => (
            <div key={g.label}>
              <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent mb-6">
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
