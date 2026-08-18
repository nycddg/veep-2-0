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
    best: "Senior judgment for high-stakes decisions.",
    items: [
      "Board and investor prep",
      "Fundraise strategy",
      "Executive decisions",
      "Strategic tradeoffs",
      "Includes six one-hour sessions",
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
    best: "Ongoing senior ownership for your most critical initiatives.",
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
    a: "Yes. Many engagements change shape as the work becomes clearer. Advisory can become a Sprint. A Sprint can become an Operator engagement. Operator work can expand into a Pod.",
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
      { title: "Pricing | Veep" },
      { name: "description", content: "Advisory from $3k/mo · Sprint from $25k · Operator from $15k/mo · Pod from $30k/mo. Every engagement carries a 30-day fit guarantee." },
      { property: "og:title", content: "Pricing — Priced to the work, not the hour | Veep" },
      { property: "og:description", content: "Advisory from $3k/mo · Sprint from $25k · Operator from $15k/mo · Pod from $30k/mo. Every engagement carries a 30-day fit guarantee." },
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
        title="Priced to the work. Not the hour."
        sub="Every engagement is scoped to the work, urgency, and level of ownership required. Transparent rates. No hourly billing. No lock-in by default."
        primaryLabel="Get in touch"
        primaryTo="/contact"
      />

      {/* Four tiers — match homepage Engagements spacing (border-t + pad, not divide-y/gap clash) */}
      <Reveal as="section" id="tiers" className="bg-surface-band py-14 sm:py-16 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 min-w-0">
            {tiers.map((t) => (
              <div
                key={t.t}
                className={`group motion-hover-lift flex flex-col md:min-h-[280px] pt-7 pb-6 pr-2 ${
                  t.featured
                    ? "border-t-2 border-accent md:border-t-0 md:pl-6 md:border-l-2 md:border-accent"
                    : "motion-hairline-tier md:pl-6"
                }`}
              >
                <div className="flex items-baseline gap-3 flex-wrap">
                  <span className="font-serif font-medium text-xl text-cream">{t.t}</span>
                  {t.featured && (
                    <span className="eyebrow text-accent-coral">
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
                      <span className="inline-block h-1 w-1 rounded-full bg-accent shrink-0 mt-2" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm text-stone">
            All engagements carry a 30-day fit guarantee · Response within 1 business day
          </p>
        </div>
      </Reveal>

      {/* What's not included — drops off the tiers band to raised so the page
          breathes ink → band → raised → invert → raised instead of slab-slab */}
      <section className="bg-surface-raised py-14 sm:py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 md:mb-14">
            <div className="eyebrow">
              What we don't charge for
            </div>
            <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
              The price you see is the price you pay.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 md:gap-x-14 gap-y-10 md:gap-y-14">
            {notIncluded.map((n) => (
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
              The right operating partners, ready when the portfolio needs them.
            </h3>
            <p className="mt-5 text-stone leading-relaxed max-w-2xl">
              Built for PE firms, family offices, holdcos, and multi-company
              founders that need senior operating support across recurring
              leadership gaps, transaction moments, and value-creation work.
              Portfolio Rosters include priority operator matching, quarterly
              capacity planning, preferred commercial terms, as well as
              emergency CFO, COO, and operator coverage for {"$75k"} annually.
              Operator engagements are scoped separately by SOW at preferred
              rates.
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
              Straight answers to the questions we get most.
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
        headline={<>Tell us what cannot wait.</>}
        sub="Book a 30-minute call with a Veep founder. We'll clarify the work, recommend the right model, and tell you directly if Veep isn't the answer."
      />
    </>
  );
}
