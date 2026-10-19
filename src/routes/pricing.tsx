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
    best: "Senior judgment. Your team executes.",
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
    best: "One critical job. A clear outcome and an endpoint.",
    items: [
      "Fixed scope, fixed price",
      "4–12 week engagement",
      "GTM, fundraising prep, margins, diligence",
      "Clear success criteria",
    ],
  },
  {
    t: "Operator",
    p: "From $15k",
    per: "per month",
    best: "Embedded leadership for work that needs sustained attention.",
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
    best: "One accountable lead, with specialists around the job.",
    items: [
      "Work spanning functions",
      "Operating reset or transformation",
      "GTM + RevOps, finance + ops, AI initiatives",
      "One coordinated delivery team",
    ],
  },
];

const notIncluded = [
  { t: "Placement fees", d: "Scoping calls and operator matching are free." },
  { t: "Setup or onboarding fees", d: "Contracting, access, and onboarding are included in the engagement." },
  { t: "Agreed commitment", d: "Agree the term upfront. Extend or change the scope together." },
  { t: "Hourly billing surprises", d: "Agree the scope and fee before signing. No hourly surprises." },
];

const faqs = [
  {
    q: "Are there setup or matching fees?",
    a: "No. Calls with a Veep founder and operator matching are free. You pay for the signed engagement.",
  },
  {
    q: "Can I convert between models mid-term?",
    a: "Yes, by agreement. A Sprint can lead to an Operator engagement, or a Pod can support a broader job. We agree the revised scope and fee before changing the work.",
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
      { name: "description", content: "Advisory, Sprints, Operators, Pods, and separately scoped Agent Teams. Clear scope, agreed fees, and terms that fit the work." },
      { property: "og:title", content: "Pricing | Veep" },
      { property: "og:description", content: "Advisory, Sprints, Operators, Pods, and separately scoped Agent Teams. Clear scope, agreed fees, and terms that fit the work." },
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
        title="Senior hands, on terms that fit the work."
        sub="Bring the job. We define the scope, the outcome, and the right way to deliver. You know the fee before the work starts."
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
          <p className="mt-10 text-sm text-stone">
            Agent Teams: separately scoped and priced by scope and volume. Operator-fit terms below.
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
              Know the job. Know the fee.
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
              Build the bench your portfolio calls for.
            </h3>
            <p className="mt-5 text-stone leading-relaxed max-w-2xl">
              For funds, family offices, holdcos, and multi-company founders with recurring operating needs. The Portfolio Roster is $75k/year for portfolio planning, quarterly reviews, priority matching, and preferred engagement terms. Company work is scoped and billed separately. Confirmed fit and availability determine each deployment; the roster does not reserve an operator's time.
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
              Clear terms. Straight answers.
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
        headline={<>Bring us the job.</>}
        sub="Tell us what needs to happen and what is getting in the way. We'll recommend the right scope and tell you directly if Veep isn't the answer."
      />
    </>
  );
}
