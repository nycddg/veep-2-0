import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { FooterCTA } from "@/components/site/FooterCTA";

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
      "Month-to-month",
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
    best: "Ongoing senior ownership before the full-time hire makes sense.",
    items: [
      "Finance, GTM, operations, product, or people",
      "Owns cadence and reporting",
      "Function buildout or leadership gap",
      "Typically 3–12 months",
    ],
    featured: true,
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
  { t: "Setup or onboarding fees", d: "Contracting, access, and onboarding are managed at no extra cost." },
  { t: "Long-term lock-in", d: "Most engagements can start focused, continue, pause, or scale as the work changes." },
  { t: "Hourly billing surprises", d: "Every engagement is scoped around the work. You know the number before you sign." },
];

const faqs = [
  {
    q: "Are there setup or matching fees?",
    a: "No. Calls with a Veep founder and operator matching are free. You only pay once an engagement is signed.",
  },
  {
    q: "Can I convert between models mid-term?",
    a: "Yes. Many engagements change shape as the work becomes clearer. Advisory can become a Sprint. A Sprint can become an Operator engagement. Operator work can expand into a Pod. Interim coverage can step down into fractional support after a permanent hire lands.",
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
      { title: "Pricing — Priced to the Work, Not the Hour | Veep" },
      { name: "description", content: "Advisory from $3k/mo · Sprint from $25k · Operator from $15k/mo · Pod from $30k/mo. Every engagement carries a 30-day fit guarantee." },
      { property: "og:title", content: "Pricing — Veep" },
      { property: "og:description", content: "Four engagement models. Priced to the work. 30-day fit guarantee." },
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
        title="Priced to the work."
        accent="Not the hour."
        sub="Every engagement is scoped to the work, urgency, and level of ownership required. Clear ranges. No hourly billing. No lock-in by default."
      />

      {/* Four tiers — data cards, no big containers, hierarchy earned by type + left rule. */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 lg:divide-x lg:divide-white/10">
            {tiers.map((t) => (
              <div
                key={t.t}
                className={`flex flex-col lg:px-6 lg:first:pl-0 lg:last:pr-0 ${
                  t.featured ? "" : ""
                }`}
              >
                <div className="flex items-baseline gap-3">
                  <div className="text-2xl text-cream">{t.t}</div>
                  {t.featured && (
                    <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
                      Most common
                    </span>
                  )}
                </div>
                <div className="mt-2 font-mono text-sm text-cream tabular-nums">
                  {t.p} <span className="text-stone-soft">{t.per}</span>
                </div>
                <p className="mt-5 text-sm text-cream/85 leading-relaxed">{t.best}</p>
                <ul className="mt-6 space-y-2.5 text-sm text-stone">
                  {t.items.map((i) => (
                    <li key={i} className="flex items-baseline gap-2.5">
                      <span className="inline-block h-1 w-1 rounded-full bg-accent shrink-0 translate-y-[-2px]" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4">
                  <Link
                    to="/services"
                    hash={t.t.toLowerCase()}
                    className="text-xs text-cream/80 hover:text-cream underline underline-offset-4 decoration-white/20 hover:decoration-white/60 transition"
                  >
                    See scope →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-12 text-sm text-stone">
            All engagements carry a 30-day fit guarantee · Response within 1 business day · No pitch deck required.
          </p>
        </div>
      </section>

      {/* What's not included */}
      <section className="py-20 md:py-28 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-accent font-mono">
              What we don't charge for
            </div>
            <h2 className="mt-5 text-3xl md:text-4xl text-cream">
              The price you see is the price you pay.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {notIncluded.map((n) => (
              <div key={n.t} className="border-t border-white/10 pt-5">
                <div className="text-lg text-cream">{n.t}</div>
                <p className="mt-3 text-sm text-stone leading-relaxed">{n.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio callout */}
      <section className="py-20 md:py-28 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="border-l-2 border-accent pl-8 md:pl-10">
            <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-accent font-mono">
              Portfolios
            </div>
            <h3 className="mt-5 text-2xl md:text-3xl text-cream">
              Executive Roster for PE, family offices, holdcos, and multi-company founders.
            </h3>
            <p className="mt-5 text-stone leading-relaxed">
              Annual executive-capacity partnership for recurring leadership gaps and
              value-creation work. Roster includes priority operator matching, quarterly
              capacity planning, emergency CFO/COO/GTM/operator coverage, capacity audits,
              and preferred commercial terms. Roster is $75k/year — operator deployments
              are billed separately by SOW at preferred rates.
            </p>
            <div className="mt-6">
              <Link
                to="/for-portfolios"
                className="text-sm text-cream/90 hover:text-cream underline underline-offset-8 decoration-white/20 hover:decoration-white/60"
              >
                See how the roster works →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="py-20 md:py-28 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-accent font-mono">
              Pricing FAQ
            </div>
            <h2 className="mt-5 text-3xl md:text-4xl text-cream">
              Straight answers to the questions we get most.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-10">
            {faqs.map((f) => (
              <div key={f.q} className="border-t border-white/10 pt-5">
                <div className="text-lg text-cream leading-snug">{f.q}</div>
                <p className="mt-3 text-sm text-stone leading-relaxed">{f.a}</p>
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
        headline="Make your next big move."
        sub="Book a 30-minute call with a Veep founder. We'll clarify the work, recommend the right model, and tell you directly if Veep isn't the answer."
      />
    </>
  );
}
