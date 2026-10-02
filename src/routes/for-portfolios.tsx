import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { FooterCTA } from "@/components/site/FooterCTA";
import { Reveal } from "@/components/site/Reveal";
import { OperatorSpotlightChapter } from "@/components/site/OperatorSpotlightChapter";
import { operatorsForFunds } from "@/lib/spotlight-operators";
import { ogImageMeta } from "@/lib/seo";

const problems = [
  {
    t: "Before close, the work is already moving.",
    d: "Diligence, financial models, team assessments, and operating plans compete for the same internal capacity. A clear view of the gaps helps you plan who will own the work.",
  },
  {
    t: "The 100-day plan needs owners.",
    d: "After close, reporting, integration, commercial priorities, and people decisions arrive together. The existing team may not have the capacity to lead every workstream.",
  },
  {
    t: "Leadership transitions leave work exposed.",
    d: "A planned succession, an unexpected exit, or an open executive seat can slow execution. The company needs ownership while the longer-term leadership decision takes shape.",
  },
  {
    t: "The same contacts cannot cover every mandate.",
    d: "Trusted relationships matter. But availability, functional experience, and company fit change from deal to deal. Each new priority needs the right operator and a clear scope.",
  },
];

const auditDeliverables = [
  "Portfolio-wide map of leadership and execution gaps",
  "Capacity assessment across finance, GTM, operations, product, and people",
  "Upcoming needs across diligence, close, integration, fundraising, exit, and leadership transitions",
  "Recommended operating capacity by company and priority",
  "Coverage plan for interim leadership gaps",
  "Priority shortlists for likely operating mandates",
];

const tiers = [
  {
    t: "Portfolio Roster",
    p: "$75k",
    per: "/ year · operator work billed separately",
    best: "For private equity firms, family offices, holding companies, and independent sponsors with recurring operating needs. Retain Veep for portfolio capacity planning and priority access, then scope delivery around each company's work.",
    items: [
      "Portfolio-wide intake and operating capacity map",
      "Quarterly review of priorities and capacity",
      "Priority operator matching for portfolio companies",
      "Vetted senior operators across finance, GTM, operations, product, and people",
      "Agreed emergency Operator or Pod coverage terms",
      "Included diagnostics and operator shortlists",
      "One master services agreement",
      "Preferred engagement rates on each statement of work",
    ],
    featured: true,
  },
];

const steps = [
  { n: "01", t: "Map the capacity", d: "Over 2–3 weeks, the audit identifies operating gaps, upcoming transactions, and leadership needs. We recommend where to put capacity first." },
  { n: "02", t: "Agree the relationship", d: "Set master terms, commercial terms, IP, confidentiality, and engagement structure once, so each new mandate starts from an agreed foundation." },
  { n: "03", t: "Scope and assign", d: "Define the company's work, assign a lead operator, and agree a statement of work. Operating engagements are scoped in 72 hours and started in under 10 days." },
  { n: "04", t: "Review the portfolio", d: "Each quarter, revisit priorities, upcoming transactions, and leadership changes. Adjust the capacity plan as the portfolio's needs evolve." },
];

const included = [
  { t: "Included in the roster", d: "Priority access, portfolio capacity planning, quarterly reviews, agreed emergency coverage terms, preferred rates, and included diagnostics. Veep manages the operating relationship across engagements." },
  { t: "Scoped and billed separately", d: "Operator delivery is priced by company and statement of work. Each scope defines the work, lead owner, and responsibilities. Fund and company leaders keep strategic decisions and approvals." },
];

export const Route = createFileRoute("/for-portfolios")({
  head: () => ({
    meta: [
      { title: "For Funds | Portfolio operating capacity" },
      {
        name: "description",
        content:
          "Veep gives funds senior ownership across diligence, post-close execution, leadership gaps, and value creation without building a full internal portfolio ops team.",
      },
      { property: "og:title", content: "For Funds — Portfolio operating capacity" },
      {
        property: "og:description",
        content: "Senior ownership across the portfolio. Scope the work company by company.",
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
        title="Portfolio operating capacity. Ready when the work is."
        sub="Veep gives funds senior ownership across diligence, post-close execution, leadership gaps, and value creation without building a full internal portfolio ops team. We scope each company's work, assign a lead operating partner, and stay accountable for delivery, quality, and continuity."
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
              Where portfolios lose time
            </div>
            <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
              The investment plan still needs operators.
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
              Portfolio Capacity Audit
            </h2>
            <p className="mt-6 text-stone leading-relaxed">
              Find the operating gaps before they become urgent introductions. We map current priorities and likely needs over the next 6–12 months, then identify where each company needs senior ownership, specialist support, or a plan for leadership coverage.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-10 md:gap-y-12 motion-hairline pt-12">
            <div>
              <div className="eyebrow">
                2–3 week audit
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
                After the audit
              </div>
              <div className="mt-4 font-serif font-medium text-xl text-cream tracking-tight">
                Put an owner around each priority.
              </div>
              <p className="mt-4 text-base text-stone leading-relaxed">
                Turn the capacity map into scoped engagements. Veep assigns a lead operating partner and the support each job requires. Your fund keeps the portfolio view; each company gets a clear owner for the work.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-stone">
                <li className="flex items-baseline gap-3">
                  <span className="inline-block h-1 w-1 rounded-full bg-current shrink-0 translate-y-[-2px]" />
                  <span>
                    Operator work is{" "}
                    <Link
                      to="/pricing"
                      className="motion-link text-cream underline underline-offset-4 decoration-white/30 hover:decoration-white/70"
                    >
                      billed separately by scope
                    </Link>
                  </span>
                </li>
                <li className="flex items-baseline gap-3">
                  <span className="inline-block h-1 w-1 rounded-full bg-current shrink-0 translate-y-[-2px]" />
                  <span>One master agreement; a statement of work per engagement</span>
                </li>
                <li className="flex items-baseline gap-3">
                  <span className="inline-block h-1 w-1 rounded-full bg-current shrink-0 translate-y-[-2px]" />
                  <span>
                    <a
                      href="#roster"
                      className="motion-link text-cream underline underline-offset-4 decoration-white/30 hover:decoration-white/70"
                    >
                      Portfolio Roster
                    </a>
                    : $75k/year, with preferred engagement rates
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Operator spotlight — the home /#operators chapter verbatim (Dave
          08.17 PASS4: home is the source of truth, the 75+/72h remix retires) */}
      <Reveal as="section" className="bg-surface-raised py-14 sm:py-16 md:py-28">
        <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-8">
          <OperatorSpotlightChapter
            headline="Senior operators for consequential work."
            sub="Operators with experience across transactions, integrations, leadership transitions, and company building. We select for the mandate and the business, then put clear ownership around delivery."
            operators={operatorsForFunds()}
          />
        </div>
      </Reveal>

      {/* Roster tiers */}
      <section id="roster" className="bg-surface-band py-14 sm:py-16 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mb-12 md:mb-14">
            <div className="eyebrow">
              Portfolio operating capacity
            </div>
            <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
              One operating relationship across the portfolio.
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
            Each mandate becomes an Advisory, Sprint, Operator, or Pod engagement, scoped separately at preferred roster rates.
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
              Master agreement once. Delivery company by company.
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
              What the retainer covers
            </div>
            <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
              Retain the relationship. Scope the work.
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
        headline="Where does the portfolio need an owner next?"
        sub="Book a 30-minute intro call to discuss the gaps, walk through the audit and roster model, and see whether Veep fits your firm's operating needs."
        primaryLabel="Book intro call"
      />
    </>
  );
}
