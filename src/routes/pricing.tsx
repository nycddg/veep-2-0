import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { FooterCTA } from "@/components/site/FooterCTA";
import { Reveal } from "@/components/site/Reveal";
import { ogImageMeta } from "@/lib/seo";

const tiers = [
  {
    t: "Advisory",
    p: "From $3k",
    per: "per month",
    best: "Senior operating judgment when your team owns execution, or a clean step-down once a heavier mandate wraps.",
    items: [
      "Board and investor prep",
      "Capital and M&A calls",
      "Commercial tradeoffs",
      "Includes six one-hour working sessions",
    ],
  },
  {
    t: "Sprint",
    p: "From $25k",
    per: "per scope",
    best: "One defined business outcome carried from scope to clean handoff, with a fixed fee and clear finish line.",
    items: [
      "Fixed scope, transparent fee",
      "Typically 4 to 12 weeks",
      "Diligence prep, GTM reset, margin work, or launch",
      "Converts cleanly into ongoing capacity",
    ],
  },
  {
    t: "Operator",
    p: "From $15k",
    per: "per month",
    best: "Embedded senior leadership running a core function or priority across finance, GTM, ops, product, tech, or people.",
    items: [
      "Build or reset a function",
      "Cover leadership transitions",
      "Swap specialties or adjust scope as priorities shift",
      "Typically 3 to 12 months",
    ],
    featured: true,
  },
  {
    t: "Pod",
    p: "From $30k",
    per: "per month",
    best: "One accountable operating partner orchestrating specialists and governed AI workflows across functions.",
    items: [
      "Multi-function launches or integrations",
      "Margin and operating resets",
      "Finance plus ops, GTM plus RevOps, AI workflows",
      "Coordinated senior delivery",
    ],
  },
];

const flexItems = [
  {
    t: "Dynamic by design",
    d: "Start with a CFO for a raise, swap in a GTM lead once the round closes, or step down to Advisory after handoff. Your operating bench reshapes as fast as your priorities do.",
  },
  {
    t: "Add workflows and specialists anytime",
    d: "Layer in functional specialists or Operator-Governed Agent Teams for recurring reporting, pipeline hygiene, and operating reviews without adding permanent headcount.",
  },
  {
    t: "Scoped up front, zero hidden fees",
    d: "Every mandate is priced to an agreed scope and finish line before you sign. No placement fees, no setup fees, and no open-ended hourly billing.",
  },
  {
    t: "30-day guarantee",
    d: "Test the partnership in live delivery. If it isn't working in the first 30 days, we fix it, swap the operator, or you walk, with no fee owed for the remaining term.",
  },
];

const buyShapes = [
  {
    when: "Need judgment on a live call. Your team runs execution.",
    shape: "Advisory",
  },
  {
    when: "One defined finish line, typically 4 to 12 weeks.",
    shape: "Sprint",
  },
  {
    when: "Own the function until it is hire-ready or stable.",
    shape: "Embedded Operator",
  },
  {
    when: "The seat cannot sit empty through a transition.",
    shape: "Interim Leadership",
  },
  {
    when: "Priorities will keep moving and you want one partner across them.",
    shape: "Managed Operating Partnership",
  },
];

const faqs = [
  {
    q: "Can we change operators, add workflows, or adjust shape mid-engagement?",
    a: "Yes. That is the point of the model. A Sprint can convert into an Embedded Operator, an Operator can expand into a Pod with Agent Teams for recurring reporting, or you can step down to Advisory once your team owns the system. You can also swap specialties as the business shifts from one priority to the next.",
  },
  {
    q: "Are there placement, setup, or hourly surprise fees?",
    a: "No. Scoping calls with a Veep founder, partner selection, contracting, and onboarding are included. Every mandate is scoped and priced transparently before you sign, with zero hourly billing.",
  },
  {
    q: "How does the 30-day guarantee work?",
    a: "Every engagement carries a 30-day guarantee. If it isn't working in the first 30 days, we fix it, swap the operator, or you walk, with no fee owed for the remaining term.",
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
      { title: "Pricing | Veep" },
      { name: "description", content: "Transparent, scoped, dynamic operating capacity built to move at the speed of software. Advisory from $3k/mo, Sprints from $25k, Operators from $15k/mo, Pods from $30k/mo. 30-day guarantee." },
      { property: "og:title", content: "Pricing | Veep" },
      { property: "og:description", content: "Transparent, scoped, dynamic operating capacity built to move at the speed of software. Advisory from $3k/mo, Sprints from $25k, Operators from $15k/mo, Pods from $30k/mo. 30-day guarantee." },
      { property: "og:url", content: "https://www.veep.work/pricing" },
      ...ogImageMeta(),
    ],
    links: [{ rel: "canonical", href: "https://www.veep.work/pricing" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqSchema) }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Operating capacity as responsive as software."
        sub="Your org chart keeps pace with today's market, with zero surprises. Swap operators as priorities shift, layer in specialists or governed AI workflows, and scale capacity up or down as needed. Transparent, scoped, and built to flex."
        primaryLabel="Get in touch"
        primaryTo="/contact"
        secondarySearch={{ intent: "audit" }}
      />

      <Reveal as="section" id="how-companies-buy" className="bg-surface-raised py-14 sm:py-16 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-10">
            <div className="eyebrow">How we work with you</div>
          </div>

          <div className="grid md:grid-cols-2 md:divide-x md:divide-white/10 border-y border-white/10">
            <div className="py-8 md:pr-12">
              <h2 className="font-serif font-medium text-xl md:text-2xl text-cream tracking-tight">
                Individual Mandate
              </h2>
              <p className="mt-4 text-base text-stone leading-relaxed">
                One decision, one deliverable, one function, or one transition. Your team gets a defined owner for that job.
              </p>
            </div>
            <div className="py-8 md:pl-12 border-t border-white/10 md:border-t-0">
              <h2 className="font-serif font-medium text-xl md:text-2xl text-cream tracking-tight">
                Managed Operating Partnership
              </h2>
              <p className="mt-4 text-base text-stone leading-relaxed">
                One ongoing operating partner at the leadership table to help set priorities and flex operating capacity as the business evolves.
              </p>
            </div>
          </div>

          <div className="mt-14 md:mt-16">
            <div className="mono-label mb-6">Five ways the work takes shape</div>
            <div className="hidden md:grid md:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)] gap-8 pb-3">
              <div className="mono-label">When this is true</div>
              <div className="mono-label">This shape</div>
            </div>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {buyShapes.map((row) => (
                <div
                  key={row.shape}
                  className="grid md:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)] gap-2 md:gap-8 py-5"
                >
                  <p className="text-base text-stone leading-relaxed">{row.when}</p>
                  <p className="font-serif font-medium text-lg text-cream tracking-tight">{row.shape}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* Four tiers — match homepage Engagements spacing (border-t + pad, not divide-y/gap clash) */}
      <Reveal as="section" id="tiers" className="bg-surface-band py-14 sm:py-16 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 min-w-0">
            {tiers.map((t) => (
              <div
                key={t.t}
                className={`group motion-hover-lift flex flex-col md:min-h-[280px] pt-7 pb-6 pr-2 ${
                  t.featured
                    ? "border-t-2 border-accent-coral md:border-t-0 md:pl-6 md:border-l-2 md:border-accent-coral"
                    : "motion-hairline-tier md:pl-6 md:first:pl-0"
                }`}
              >
                <div className="flex items-baseline gap-3 flex-wrap">
                  <span className="font-serif font-medium text-xl text-cream">{t.t}</span>
                  {t.featured && (
                    <span className="eyebrow">
                      Most requested
                    </span>
                  )}
                </div>
                <div className="mt-2 font-mono text-sm text-cream tabular-nums">
                  {t.p} <span className="text-stone">{t.per}</span>
                </div>
                <p className="mt-4 text-base text-stone leading-relaxed">{t.best}</p>
                <ul className="mt-6 space-y-2.5 text-sm text-stone">
                  {t.items.map((i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="inline-block h-1 w-1 rounded-full bg-current shrink-0 mt-2" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-sm text-stone leading-relaxed">
            Interim Leadership, Managed Operating Partnerships, and Agent Teams are scoped individually to the mandate. Every engagement carries a 30-day guarantee.
          </p>
        </div>
      </Reveal>

      {/* Built to flex — same 4-item grid as the retired commercial-clarity block */}
      <section className="bg-surface-raised py-14 sm:py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 md:mb-14">
            <div className="eyebrow">
              Built to flex
            </div>
            <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
              Transparent, scoped, and never locked in place.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 md:gap-x-14 gap-y-10 md:gap-y-14">
            {flexItems.map((n) => (
              <div key={n.t}>
                <div className="font-serif font-medium text-xl text-cream tracking-tight">{n.t}</div>
                <p className="mt-2 text-base text-stone leading-relaxed">{n.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio callout */}
      <section className="spotlight-invert py-14 sm:py-16 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div>
            <div className="eyebrow">
              FOR FUNDS
            </div>
            <h3 className="mt-6 font-serif font-medium text-xl md:text-2xl text-cream">
              One operating relationship. Dynamic coverage across the portfolio.
            </h3>
            <p className="mt-5 text-stone leading-relaxed max-w-2xl">
              Built for lean PE firms, family offices, holding companies, and independent sponsors putting institutional firepower behind every stage of the hold. The Portfolio Roster ({"$75k"} annually) covers portfolio capacity planning, quarterly reviews, priority operator access, emergency coverage paths, and preferred rates. Individual company mandates are agreed with each CEO and billed separately by SOW.
            </p>
            <div className="mt-6">
              <Link
                to="/for-portfolios"
                className="group motion-link inline-flex items-center gap-2 text-sm text-cream underline underline-offset-8 hover:underline-offset-4 decoration-white/30 hover:decoration-white/70"
              >
                See how the roster works <ArrowRight size={14} className="motion-arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="bg-surface-raised py-14 sm:py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mb-12 md:mb-14">
            <div className="eyebrow">
              Pricing FAQ
            </div>
            <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
              Straight answers on scope, flexibility, and terms.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-10 md:gap-y-12">
            {/* An odd last item spans both columns so the grid never leaves a
                blank cell (self-correcting if a fourth question is added). */}
            {faqs.map((f) => (
              <div key={f.q} className="border-t border-white/10 pt-6 md:last:odd:col-span-2">
                <div className="text-lg text-cream tracking-tight leading-snug">{f.q}</div>
                <p className="mt-2 text-base text-stone leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/faq"
              className="group motion-link inline-flex items-center gap-2 text-sm text-cream/90 hover:text-cream underline underline-offset-8 hover:underline-offset-4 decoration-white/30 hover:decoration-white/70"
            >
              See the full FAQ <ArrowRight size={14} className="motion-arrow" />
            </Link>
          </div>
        </div>
      </section>

      <FooterCTA
        headline={<>Build an operation that keeps pace with your market.</>}
        sub="Book a 30-minute call with a Veep founder. We'll scope the outcome, map the right starting shape, and tell you plainly if Veep isn't the answer."
      />
    </>
  );
}
