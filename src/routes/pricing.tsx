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
  { t: "Placement fees", d: "Bottleneck Calls and operator matching are free." },
  { t: "Setup or onboarding fees", d: "Contracting, access, and onboarding are managed at no extra cost." },
  { t: "Long-term lock-in", d: "Most engagements can start focused, continue, pause, or scale as the work changes." },
  { t: "Hourly billing surprises", d: "Every engagement is scoped around the work. You know the number before you sign." },
];

const faqs = [
  {
    q: "Are there setup or matching fees?",
    a: "No. Bottleneck Calls and operator matching are free. You only pay once an engagement is signed.",
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
        italic="Not the hour."
        sub="Every engagement is scoped around the work, urgency, complexity, and level of ownership required. Clear ranges. No browsing. No hourly surprises. No long-term lock-in by default."
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
                <div className="flex items-start justify-between gap-3">
                  <div className="font-serif text-2xl text-cream tracking-tight">
                    {t.t}
                  </div>
                  {t.featured && (
                    <span className="text-[10px] font-medium uppercase tracking-wider text-accent">
                      Most common
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm text-cream/85 leading-relaxed">{t.best}</p>
                <ul className="mt-6 space-y-2.5 text-sm text-stone">
                  {t.items.map((i) => (
                    <li key={i} className="flex items-baseline gap-2.5">
                      <span className="inline-block h-1 w-1 rounded-full bg-accent shrink-0 translate-y-[-2px]" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between gap-4">
                  <span className="font-mono text-xs text-stone-soft tracking-wide">
                    {t.p} {t.per}
                  </span>
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
            <h2 className="mt-6 font-serif text-3xl md:text-4xl text-cream tracking-tight leading-[1.05]">
              The price you see{" "}
              <span className="text-accent">is the price you pay.</span>
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
              Executive Roster for PE, family offices, holdcos, and multi-company founders.
            </h3>
            <p className="mt-5 text-stone leading-relaxed">
              Annual executive-capacity partnership for recurring leadership gaps and
              value-creation work. Roster includes priority operator matching, quarterly
              capacity planning, emergency CFO/COO/GTM/operator coverage, capacity audits,
              and preferred commercial terms. Roster is $75k/year — operator deployments
              are billed separately by SOW at preferred rates.
            </p>
            <div className="mt-8">
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
      <section className="py-24 md:py-32 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
              Pricing FAQ
            </div>
            <h2 className="mt-6 font-serif text-3xl md:text-4xl text-cream tracking-tight leading-[1.05]">
              Common questions.{" "}
              <span className="text-accent">Direct answers.</span>
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
        sub="Book a 30-minute Bottleneck Call. We will help clarify the work, recommend the right model, and tell you directly if Veep is not the right answer."
      />
    </>
  );
}
