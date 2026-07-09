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
      "Includes six one hour sessions",
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
      "Build or reset a function",
      "Resolve leadership gaps",
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
  { t: "Long-term lock-in", d: "Start focused and continue, pause, or scale as the work changes." },
  { t: "Hourly billing surprises", d: "Scoped around the work. You know the number before you sign." },
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
        sub="Every engagement is scoped to the work, urgency, and level of ownership required. Transparent rates. No hourly billing. No lock-in by default."
      />

      {/* Four tiers — data cards, no big containers, hierarchy earned by type + left rule. */}
      <section className="bg-surface-band py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 lg:divide-x lg:divide-white/10">
            {tiers.map((t) => (
              <div
                key={t.t}
                className="flex flex-col lg:px-6 lg:first:pl-0 lg:last:pr-0"
              >
                {/* Fixed-height label slot so all four tiers align on the "Most common" baseline. */}
                <div className="h-4 mb-2">
                  {t.featured && (
                    <span className="font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-accent-coral">
                      Most common
                    </span>
                  )}
                </div>
                <div className="text-2xl text-cream">{t.t}</div>
                <div className="mt-2 font-mono text-sm text-cream tabular-nums">
                  {t.p} <span className="text-stone">{t.per}</span>
                </div>
                <p className="mt-5 text-sm text-cream/90 leading-relaxed min-h-[3.75rem]">{t.best}</p>
                <ul className="mt-6 space-y-2.5 text-sm text-cream/80">
                  {t.items.map((i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="inline-block h-1 w-1 rounded-full bg-accent shrink-0 mt-2" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6">
                  <Link
                    to="/services"
                    hash={t.t.toLowerCase()}
                    className="text-xs text-cream/90 hover:text-cream underline underline-offset-4 decoration-white/30 hover:decoration-white/70 transition"
                  >
                    See scope →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-14 text-sm text-cream/70">
            All engagements carry a 30-day fit guarantee · Response within 1 business day
          </p>
        </div>
      </section>

      {/* What's not included */}
      <section className="bg-surface-band py-20 md:py-28 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-accent font-mono">
              What we don't charge for
            </div>
            <h2 className="mt-5 text-3xl md:text-4xl text-cream">
              The price you see is{" "}
              <span className="text-accent">the price you pay.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {notIncluded.map((n) => (
              <div key={n.t} className="border-t border-white/10 pt-6">
                <div className="text-lg text-cream">{n.t}</div>
                <p className="mt-3 text-sm text-cream/75 leading-relaxed">{n.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio callout */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="border-l-2 border-accent pl-6 md:pl-10">
            <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-accent font-mono">
              Portfolios
            </div>
            <h3 className="mt-5 text-2xl md:text-3xl text-cream">
              The right operating partners, ready{" "}
              <span className="text-accent">when the portfolio needs them.</span>
            </h3>
            <p className="mt-5 text-cream/80 leading-relaxed max-w-2xl">
              Built for PE firms, family offices, holdcos, and multi-company
              founders that need senior operating support across recurring
              leadership gaps, transaction moments, and value-creation work.&nbsp;Your
              roster includes priority operator matching, quarterly capacity
              planning, emergency CFO, COO, GTM, and operator coverage, capacity
              audits, and preferred commercial terms for&nbsp;$75k/annually. Operator
              deployments are scoped separately by SOW at preferred rates.
            </p>
            <div className="mt-6">
              <Link
                to="/for-portfolios"
                className="text-sm text-cream hover:text-cream underline underline-offset-8 decoration-white/30 hover:decoration-white/70 transition"
              >
                See how the roster works →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="bg-surface-raised py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-accent font-mono">
              Pricing FAQ
            </div>
            <h2 className="mt-5 text-3xl md:text-4xl text-cream">
              Straight answers to{" "}
              <span className="text-accent">the questions we get most.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
            {faqs.map((f) => (
              <div key={f.q} className="border-t border-white/10 pt-6">
                <div className="text-lg text-cream leading-snug">{f.q}</div>
                <p className="mt-3 text-sm text-cream/80 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/faq"
              className="text-sm text-cream/90 hover:text-cream underline underline-offset-8 decoration-white/30 hover:decoration-white/70 transition"
            >
              See the full FAQ →
            </Link>
          </div>
        </div>
      </section>

      <FooterCTA
        headline={
          <>
            Make your next{" "}
            <span className="text-accent">big move.</span>
          </>
        }
        sub="Book a 30-minute call with a Veep founder. We'll clarify the work, recommend the right model, and tell you directly if Veep isn't the answer."
      />
    </>
  );
}
