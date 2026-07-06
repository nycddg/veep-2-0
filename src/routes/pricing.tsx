import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { FooterCTA } from "@/components/site/FooterCTA";

const tiers = [
  {
    t: "Advisory",
    p: "$5k–$12.5k",
    per: "/ month",
    best: "Executive judgment on a cadence, no seat.",
    items: [
      "2–4 hours per week",
      "Board & investor prep",
      "Hiring calibration",
      "Month-to-month",
    ],
  },
  {
    t: "Fractional",
    p: "$12k–$40k",
    per: "/ month",
    best: "A senior operator runs the function.",
    items: [
      "1–3 days per week",
      "Owns cadence and reporting",
      "Capital events or function build",
      "3–12 month term",
    ],
    featured: true,
  },
  {
    t: "Interim",
    p: "$35k–$90k",
    per: "/ month",
    best: "Full-seat ownership during transition.",
    items: [
      "Full-seat accountability",
      "Preserves the search",
      "3–9 month term",
      "Structured handoff",
    ],
  },
  {
    t: "Sprint",
    p: "Scoped",
    per: "per outcome",
    best: "One critical initiative, fixed endpoint.",
    items: [
      "Fixed scope, fixed price",
      "4–12 week engagement",
      "M&A · pricing · diligence",
      "Clear success criteria",
    ],
  },
];

const notIncluded = [
  { t: "Placement fees", d: "Discovery calls and operator matching are always free." },
  { t: "Setup or onboarding fees", d: "Contracting, access, and onboarding are managed at no extra cost." },
  { t: "Long-term lock-in", d: "Monthly retainers are month-to-month after the initial term." },
  { t: "Hourly billing surprises", d: "Every engagement is scope-priced. You know the number before you sign." },
];

const faqs = [
  {
    q: "Are there setup or matching fees?",
    a: "No. Discovery calls and operator matching are free. You only pay once an engagement is signed.",
  },
  {
    q: "Can I convert between models mid-term?",
    a: "Yes. Roughly 30% of engagements change shape — interim becomes fractional after the search lands, or fractional expands into interim before a raise.",
  },
  {
    q: "How does the 30-day fit guarantee work?",
    a: "If the operator isn't right within the first 30 days, we swap them or you walk with no fee owed for the remaining term.",
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
      { title: "Pricing — Real Numbers, Not 'Contact Us' | Veep" },
      { name: "description", content: "Advisory from $5k/mo · Fractional $12k–$40k/mo · Interim $35k–$90k/mo · Sprint scoped per outcome. Every engagement carries a 30-day fit guarantee." },
      { property: "og:title", content: "Pricing — Veep" },
      { property: "og:description", content: "Four engagement models. Real prices. 30-day fit guarantee." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqSchema) }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Priced to the outcome,"
        italic="not the hour."
        sub="Every engagement is scope-priced with a fit guarantee. The ranges below are what buyers actually pay — no 'contact us for a quote'."
      />

      {/* Four tiers */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {tiers.map((t) => (
              <div
                key={t.t}
                className={`rounded-3xl p-7 flex flex-col ${
                  t.featured
                    ? "glass-card ring-1 ring-accent/40 shadow-[0_0_80px_-30px_hsl(from_var(--accent)_h_s_l_/_0.4)]"
                    : "border border-white/8 bg-white/[0.02]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
                    {t.t}
                  </div>
                  {t.featured && (
                    <span className="text-[10px] font-medium uppercase tracking-wider text-accent">
                      Most common
                    </span>
                  )}
                </div>
                <div className="mt-8 font-serif text-4xl text-cream tracking-tight">{t.p}</div>
                <div className="text-xs text-stone mt-1">{t.per}</div>
                <p className="mt-5 text-sm text-cream/85 leading-relaxed">{t.best}</p>
                <ul className="mt-6 space-y-2.5 text-sm text-stone">
                  {t.items.map((i) => (
                    <li key={i} className="flex items-baseline gap-2.5">
                      <span className="inline-block h-1 w-1 rounded-full bg-accent shrink-0 translate-y-[-2px]" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <Link
                    to="/services"
                    hash={t.t.toLowerCase()}
                    className="text-xs text-cream/80 hover:text-cream underline underline-offset-4 decoration-white/20"
                  >
                    See scope →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-stone">
            All engagements carry a 30-day fit guarantee · Response within 1 business day · No pitch deck required.
          </p>
        </div>
      </section>

      {/* What's not included */}
      <section className="py-24 md:py-32 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
              What we don't charge for
            </div>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-cream tracking-tight leading-[1.05]">
              The price you see{" "}
              <span className="italic text-stone">is the price you pay.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {notIncluded.map((n) => (
              <div key={n.t} className="glass-card rounded-3xl p-6">
                <div className="font-serif text-xl text-cream tracking-tight">{n.t}</div>
                <p className="mt-3 text-sm text-stone leading-relaxed">{n.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio callout */}
      <section className="py-24 md:py-32 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-10 md:p-12">
            <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
              Portfolios
            </div>
            <h3 className="mt-6 font-serif text-3xl md:text-4xl text-cream tracking-tight leading-[1.1]">
              Executive Bench for PE, family offices, and holdcos.
            </h3>
            <p className="mt-5 text-stone leading-relaxed">
              Annual capacity partnership: priority operator matching, quarterly planning,
              emergency CFO/COO/GTM coverage, preferred commercial terms. Bench $50k–$150k/yr;
              deployments per SOW at preferred rates.
            </p>
            <div className="mt-8">
              <Link
                to="/for-portfolios"
                className="text-sm text-cream/90 hover:text-cream underline underline-offset-8 decoration-white/20 hover:decoration-white/60"
              >
                See how the bench works →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="py-24 md:py-32 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
              Pricing FAQ
            </div>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-cream tracking-tight leading-[1.05]">
              Common questions.{" "}
              <span className="italic text-stone">Direct answers.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-3xl border border-white/8 bg-white/[0.02] p-6">
                <div className="font-serif text-xl text-cream tracking-tight leading-snug">{f.q}</div>
                <p className="mt-4 text-sm text-stone leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/faq"
              className="text-sm text-cream/80 hover:text-cream underline underline-offset-8 decoration-white/20 hover:decoration-white/60"
            >
              See the full FAQ →
            </Link>
          </div>
        </div>
      </section>

      <FooterCTA
        headline="Talk to us before you spend it."
        sub="30-minute discovery call. We'll tell you exactly which model fits — or that Veep isn't the right answer."
      />
    </>
  );
}
