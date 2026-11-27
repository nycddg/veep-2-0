import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { FooterCTA } from "@/components/site/FooterCTA";
import { Reveal } from "@/components/site/Reveal";
import { OperatorSpotlightChapter } from "@/components/site/OperatorSpotlightChapter";
import { operatorsForFunds } from "@/lib/spotlight-operators";
import { companyDeliveryProof } from "@/lib/proof-cases";
import { ogImageMeta } from "@/lib/seo";

const problems = [
  {
    t: "Pre-close diligence outpaces internal bandwidth.",
    d: "Modeling, operating plans, leadership assessments, and value-creation roadmaps have to stand up before close while the deal team is stretched across live transactions.",
  },
  {
    t: "The first 100 days move faster than executive search.",
    d: "The deal closes and the thesis begins. Reporting, integration, pricing, and finance priorities need senior ownership months before permanent hires arrive.",
  },
  {
    t: "Leadership transitions leave value exposed.",
    d: "A CFO exits ahead of a raise or a COO leaves mid-integration. Search may be running, but the function still needs experienced authority today.",
  },
  {
    t: "The same five phone numbers cannot cover every thesis.",
    d: "Relying on an informal personal network limits fit by stage, function, and sector. Building an internal platform team adds heavy fixed overhead.",
  },
];

const auditDeliverables = [
  "Portfolio-wide leadership and operating capacity map",
  "Comprehensive assessments across finance, GTM, ops, product, tech, and people",
  "Upcoming triggers including diligence, integrations, raises, and exit prep",
  "Recommended engagement shape by company",
  "Emergency interim coverage path",
  "Priority partner profiles aligned to your thesis",
];

const tiers = [
  {
    t: "Portfolio Roster",
    p: "$75k",
    per: "/ year · Company engagements billed separately",
    best: "Built for lean private equity firms, family offices, holding companies, and independent sponsors backing multiple companies without building a full internal operating team.",
    items: [
      "Portfolio-wide intake and capacity planning",
      "Quarterly portfolio capacity reviews",
      "Priority access to vetted senior operators",
      "Coverage across finance, GTM, operations, product, technology, and people",
      "Emergency Operator or Pod coverage path",
      "Included scoping diagnostics",
      "Master services agreement signed once",
      "Preferred engagement rates on every company SOW",
    ],
    featured: true,
  },
];

const steps = [
  { n: "01", t: "Capacity Audit", d: "Over 2 to 3 weeks, we map upcoming transactions, leadership risks, and value-creation priorities across the portfolio." },
  { n: "02", t: "MSA signed once", d: "Master commercial terms, rate card, IP, and confidentiality are pre-agreed so portfolio companies activate without legal drag." },
  { n: "03", t: "SOW per company mandate", d: "When a company CEO agrees a mandate, we scope the outcome in 72 hours and start execution in under 10 days." },
  { n: "04", t: "Quarterly portfolio review", d: "We revisit the capacity map with fund leadership as deals close, priorities evolve, and new transitions approach." },
];

const included = [
  { t: "In the roster ($75k/year)", d: "Portfolio capacity planning, quarterly reviews, priority operator access, emergency coverage paths, scoping diagnostics, and preferred commercial rates." },
  { t: "Billed by SOW (per company)", d: "Advisory, Sprint, Embedded or Interim Leadership, Pod, and Agent Teams mandates agreed with company leadership at preferred roster rates." },
];

export const Route = createFileRoute("/for-portfolios")({
  head: () => ({
    meta: [
      { title: "For Funds | Veep Portfolio Operating Platform" },
      {
        name: "description",
        content:
          "Top firms invest more than capital. Veep gives lean funds, family offices, and holding companies senior operators, playbooks, and technology through one relationship, with company mandates scoped separately.",
      },
      { property: "og:title", content: "For Funds | Veep Portfolio Operating Platform" },
      {
        property: "og:description",
        content: "Top firms invest more than capital. Veep gives lean funds, family offices, and holding companies senior operators, playbooks, and technology through one relationship, with company mandates scoped separately.",
      },
      { property: "og:url", content: "https://www.veep.work/for-portfolios" },
      ...ogImageMeta(),
    ],
    links: [{ rel: "canonical", href: "https://www.veep.work/for-portfolios" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="FOR FUNDS"
        title="Ready when the portfolio can't wait."
        sub="Top firms deploy senior operators, playbooks, and technology to make portfolio companies stronger and more valuable. Veep puts that same firepower behind lean funds, family offices, and holding companies through one relationship, with company mandates scoped in 72 hours and started in under 10 days."
        primaryLabel="Request a capacity audit"
        primaryTo="/contact"
        primarySearch={{ intent: "audit" }}
        secondaryLabel="See pricing"
        secondaryTo="/pricing"
      />

      {/* Problem */}
      <section className="bg-surface-raised py-14 sm:py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mb-12 md:mb-14">
            <div className="eyebrow">
              WHERE VALUE STALLS
            </div>
            <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
              Sponsored is not owned.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {problems.map((p, i) => (
              <div key={p.t} className="motion-row-wash rounded-[6px] bg-surface-card p-6 sm:p-7">
                <div className="eyebrow">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-3 font-serif font-medium text-xl text-cream tracking-tight leading-snug">
                  {p.t}
                </div>
                <p className="mt-2 text-base text-stone leading-relaxed">
                  {p.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capacity Audit entry point */}
      <Reveal as="section" className="py-14 sm:py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mb-12 md:mb-14">
            <div className="eyebrow">
              Start here
            </div>
            <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
              Find the gaps before they become urgent introductions.
            </h2>
            <p className="mt-6 text-stone leading-relaxed">
              Through a 2 to 3 week Portfolio Capacity Audit, we map leadership, functional, and workflow capacity against upcoming transactions, transitions, and value-creation plans across the next 6 to 12 months. You see which companies need what, when the work turns urgent, and where senior ownership is missing.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-10 md:gap-y-12 motion-hairline pt-12">
            <div>
              <div className="eyebrow">
                2 to 3 weeks
              </div>
              <div className="mt-4 font-serif font-medium text-xl text-cream tracking-tight">Deliverables</div>
              <ul className="mt-6 space-y-3 text-sm text-stone">
                {auditDeliverables.map((d) => (
                  <li key={d} className="flex items-baseline gap-3">
                    <span className="inline-block h-1 w-1 rounded-full bg-current shrink-0 translate-y-[-2px]" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:border-l md:border-white/10 md:pl-12">
              <div className="eyebrow">
                Governance
              </div>
              <div className="mt-4 font-serif font-medium text-xl text-cream tracking-tight">
                Who owns what
              </div>
              <p className="mt-4 text-base text-stone leading-relaxed">
                The fund keeps the investment decisions. Company leadership keeps the strategic calls and agrees each mandate. Veep owns agreed operating delivery.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-stone">
                <li className="flex items-baseline gap-3">
                  <span className="inline-block h-1 w-1 rounded-full bg-current shrink-0 translate-y-[-2px]" />
                  <span>
                    Standard{" "}
                    <Link
                      to="/pricing"
                      className="motion-link text-cream underline underline-offset-4 decoration-white/30 hover:decoration-white/70"
                    >
                      rates
                    </Link>{" "}
                    apply
                  </span>
                </li>
                <li className="flex items-baseline gap-3">
                  <span className="inline-block h-1 w-1 rounded-full bg-current shrink-0 translate-y-[-2px]" />
                  <span>MSA signed once, SOW per company mandate</span>
                </li>
                <li className="flex items-baseline gap-3">
                  <span className="inline-block h-1 w-1 rounded-full bg-current shrink-0 translate-y-[-2px]" />
                  <span>
                    <a
                      href="#roster"
                      className="motion-link text-cream underline underline-offset-4 decoration-white/30 hover:decoration-white/70"
                    >
                      Portfolio Roster
                    </a>{" "}
                    retainer: $75k/year
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal>

      <section id="delivery-proof" className="bg-surface-band py-14 sm:py-16 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 md:mb-12">
            <div className="eyebrow">Case studies</div>
            <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
              Value created inside the company.
            </h2>
            <p className="mt-6 text-base text-stone leading-relaxed">
              Operators owned the job, moved the numbers, and left leadership in a stronger position.
            </p>
          </div>
          <div className="grid md:grid-cols-2 border-y border-white/10">
            {companyDeliveryProof.map((c, i) => (
              <article
                key={c.id}
                className={`py-8 md:py-10 ${
                  i === 0
                    ? "border-b border-white/10 md:border-b-0 md:border-r md:pr-12"
                    : "md:pl-12"
                }`}
              >
                <div className="mono-label">Case study</div>
                <h3 className="mt-4 font-serif font-medium text-2xl text-cream tracking-tight leading-snug">
                  {c.result}
                </h3>
                <p className="mt-3 text-sm text-cream/80">{c.label}</p>
                <p className="mt-5 text-sm text-stone leading-relaxed">
                  <span className="text-cream">Trigger. </span>
                  {c.trigger}
                </p>
                <p className="mt-3 text-sm text-stone leading-relaxed">
                  <span className="text-cream">Work. </span>
                  {c.work}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Operator spotlight — the home /#operators chapter verbatim (Dave
          08.17 PASS4: home is the source of truth, the 75+/72h remix retires) */}
      <Reveal as="section" className="bg-surface-raised py-14 sm:py-16 md:py-28">
        <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-8">
          <OperatorSpotlightChapter
            headline="Operators built for portfolio value creation."
            sub="Finance, commercial, operations, and people leaders who have carried diligence, post-close integration, interim transitions, and margin work before. Backed by Veep governance. No juniors. No career consultants."
            operators={operatorsForFunds()}
          />
        </div>
      </Reveal>

      {/* Roster tiers */}
      <section id="roster" className="bg-surface-band py-14 sm:py-16 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mb-12 md:mb-14">
            <div className="eyebrow">
              Portfolio Roster
            </div>
            <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
              One operating relationship. Company-by-company delivery.
            </h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            {tiers.map((t) => (
              <div
                key={t.t}
                className="motion-row-wash rounded-[6px] bg-surface-card p-5 sm:p-8"
              >
                <div className="font-serif font-medium text-xl text-cream">{t.t}</div>
                <div className="mt-2 font-mono text-sm text-cream tabular-nums break-words">
                  {t.p}{" "}<span className="text-stone whitespace-normal">{t.per}</span>
                </div>
                <p className="mt-5 text-base text-stone leading-relaxed">{t.best}</p>
                <ul className="mt-6 space-y-2.5 text-sm text-stone">
                  {t.items.map((i) => (
                    <li key={i} className="flex items-baseline gap-2.5">
                      <span className="inline-block h-1 w-1 rounded-full bg-current shrink-0 translate-y-[-2px]" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4">
                  <Link
                    to="/pricing"
                    hash="tiers"
                    className="group motion-link inline-flex items-center gap-1.5 text-xs text-cream/85 hover:text-cream underline underline-offset-4 decoration-white/25 hover:decoration-white/70"
                  >
                    See engagement pricing <ArrowRight size={12} className="motion-arrow" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-12 text-sm text-stone text-center max-w-2xl mx-auto">
            Company mandates deploy as Advisory, Sprints, Embedded or Interim Leadership, Pods, or Agent Teams under preferred roster terms.
          </p>
        </div>
      </section>

      {/* How it works — drops off the roster band to raised so the two money
          chapters stop reading as one slab */}
      <Reveal as="section" className="bg-surface-raised py-14 sm:py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mb-12 md:mb-14">
            <div className="eyebrow">
              How It Works
            </div>
            <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
              One agreement. Every portfolio company ready to move.
            </h2>
          </div>
          <div className="motion-stagger grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-10 md:gap-x-14 gap-y-10 md:gap-y-12 motion-hairline pt-10 md:pt-12">
            {steps.map((s) => (
              <div key={s.n}>
                <div className="eyebrow">{s.n}</div>
                <div className="mt-4 font-serif font-medium text-xl text-cream tracking-tight">{s.t}</div>
                <p className="mt-2 text-base text-stone leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Included vs. billed */}
      <section className="py-14 sm:py-16 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="eyebrow">
              Commercial split
            </div>
            <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
              Portfolio readiness is retained. Company delivery is scoped.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-10 md:gap-y-12">
            {included.map((i) => (
              <div
                key={i.t}
                className="md:border-l md:border-white/10 md:pl-12 md:first:border-l-0 md:first:pl-0"
              >
                <div className="font-serif font-medium text-xl text-cream tracking-tight">{i.t}</div>
                <p className="mt-2 text-base text-stone leading-relaxed">{i.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterCTA
        headline={<>Put operating firepower behind your thesis.</>}
        sub="Book a 30-minute call to review a live portfolio priority or walk through the Portfolio Capacity Audit. We'll tell you directly whether Veep fits your firm."
      />
    </>
  );
}
