import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { FooterCTA } from "@/components/site/FooterCTA";
import { ogImageMeta } from "@/lib/seo";

const problems = [
  {
    t: "Pre-close needs arrive before the team is ready.",
    d: "Diligence, modeling, operating plans, team assessments, and value-creation planning all need to get done before the deal closes. The internal team is stretched, and the same few trusted people get called again.",
  },
  {
    t: "Post-close work moves faster than staffing.",
    d: "The deal closes. The 100-day plan starts. Reporting, integration, finance, GTM, operations, and people priorities all need owners. The company may not yet have the right leaders in place.",
  },
  {
    t: "Executive transitions create immediate gaps.",
    d: "A CFO leaves mid-fundraise. A COO exits after close. A revenue leader misses the plan. Search may be running, but the seat still needs coverage now.",
  },
  {
    t: "Relying on the same informal roster.",
    d: "Many firms rely on the same familiar operators every time they buy a company. Those people may be effective, but the firm knows stronger or better-fit talent is out there. They just do not have the time to grow and maintain a roster that may never get used.",
  },
];

const auditDeliverables = [
  "Portfolio-wide leadership and operator gap map",
  "Function coverage assessment across finance, GTM, operations, product, and people",
  "Upcoming transaction and event triggers, including diligence, close, integration, fundraise, exit, leadership transition, and value-creation work",
  "Recommended roster structure by company and function",
  "Emergency coverage path for interim vacancies",
  "Priority shortlists for likely operator needs",
];

const tiers = [
  {
    t: "Portfolio Roster",
    p: "$75k",
    per: "/ year · usage billed separately",
    best: "Built for private equity firms, family offices, holding companies, and independent sponsors that engage in frequent transactions or manage recurring operator needs across multiple companies.",
    items: [
      "Portfolio-wide intake and capacity map",
      "Quarterly portfolio capacity review",
      "Priority operator matching across portcos",
      "Pre-vetted roster across finance, GTM, operations, product, and people",
      "Emergency Operator or Pod coverage SLA",
      "Included diagnostics and shortlists",
      "Executive Capacity MSA signed once",
      "Preferred engagement rates on every SOW",
    ],
    featured: true,
  },
];

const steps = [
  { n: "01", t: "Capacity Audit", d: "Over 2 to 3 weeks, we map the portfolio, flag the seats and functions most exposed to transaction volatility, and recommend the right roster shape by company." },
  { n: "02", t: "MSA signed once", d: "Master terms, rate card, IP, confidentiality, and engagement structure are pre-approved so portcos can activate quickly without redoing paper." },
  { n: "03", t: "SOW per engagement", d: "When a company needs an owner, we scope the work, match in 72 hours, and deploy in under 10 days under the MSA." },
  { n: "04", t: "Quarterly review", d: "We revisit the portfolio map with your team: what changed, what transactions are coming, where leadership risk is rising, and what operator capacity should be pre-positioned." },
];

const included = [
  { t: "In the roster", d: "Priority access, portfolio planning, quarterly reviews, emergency coverage SLA, preferred rates, and included diagnostics." },
  { t: "Billed by SOW", d: "Advisory, Sprint, Operator in the Loop, Operator, and Pod engagements are scoped and billed per company at preferred roster rates." },
];

export const Route = createFileRoute("/for-portfolios")({
  head: () => ({
    meta: [
      { title: "For Portfolios — On-call senior operators for the work that can't wait | Veep" },
      {
        name: "description",
        content:
          "A retained Portfolio Roster for PE firms, family offices, holdcos, and multi-company founders. Priority access to vetted senior operators for diligence, transition, integration, value creation, and interim leadership — matched in 72 hours.",
      },
      { property: "og:title", content: "For Portfolios — Veep Portfolio Roster" },
      {
        property: "og:description",
        content: "On-call senior operators for the work that can't wait. Retained capacity across your portfolio.",
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
        eyebrow="For Portfolios"
        title="The right operating partners, ready when the portfolio needs them."
        sub="Access a vetted roster of senior operators across finance, GTM, operations, product, and people. Use us before a transaction, after close, during integration, or whenever a portfolio company needs senior ownership. Matched in 72 hours. Deployed in under 10 days. 30-day fit guarantee."
      />

      {/* Problem */}
      <section className="bg-surface-raised py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mb-14 md:mb-16">
            <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-accent">
              Where portfolios lose time
            </div>
            <h2 className="mt-6 text-3xl md:text-4xl text-cream tracking-tight leading-[1.1]">
              Transactions create volatility. The work still needs an owner.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6 md:gap-8">
            {problems.map((p, i) => (
              <div
                key={p.t}
                className="bg-card rounded-2xl border border-white/10 p-6 md:p-8"
              >
                <div className="font-mono text-[11px] tracking-[0.14em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-4 text-xl md:text-2xl text-cream tracking-tight leading-snug">
                  {p.t}
                </div>
                <p className="mt-5 text-base text-cream/70 leading-relaxed">
                  {p.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capacity Audit entry point */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 md:mb-14">
            <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-accent">
              Start here
            </div>
            <h2 className="mt-6 text-3xl md:text-4xl text-cream tracking-tight leading-[1.1] text-balance allow-wrap">
              Portfolio Capacity Audit
            </h2>
            <p className="mt-6 text-cream/80 leading-relaxed">
              Before you retain the roster, we map where transactions and operating priorities are likely to create staffing volatility across the portfolio. We identify which companies need what, which upcoming events could create urgency in the next 6 to 12 months, and where a Veep operator would help stabilize execution.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 border-t border-white/10 pt-10">
            <div>
              <div className="text-xl sm:text-2xl text-cream tracking-tight">What you get</div>
              <ul className="mt-6 space-y-3 text-sm text-cream/85">
                {auditDeliverables.map((d) => (
                  <li key={d} className="flex items-baseline gap-3">
                    <span className="inline-block h-1 w-1 rounded-full bg-accent shrink-0 translate-y-[-2px]" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:border-l md:border-white/10 md:pl-12">
              <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-accent">
                Then
              </div>
              <div className="mt-4 text-xl sm:text-2xl text-cream tracking-tight">
                Portfolio Roster
              </div>
              <p className="mt-4 text-sm text-cream/80 leading-relaxed">
                A retained operating partner function for firms that do not want to build one internally. Veep gives your firm priority access to vetted senior operators who can support transactions, integrations, interim gaps, and value-creation work across the portfolio.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-cream/85">
                {[
                  "Portfolio Program: $75k",
                  "Usage billed separately at preferred rates",
                  "MSA activated once, SOWs per engagement",
                ].map((x) => (
                  <li key={x} className="flex items-baseline gap-3">
                    <span className="inline-block h-1 w-1 rounded-full bg-accent-gold shrink-0 translate-y-[-2px]" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Roster tiers */}
      <section className="bg-surface-band py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mb-12 md:mb-14">
            <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-accent">
              Roster model
            </div>
            <h2 className="mt-6 text-3xl md:text-4xl text-cream tracking-tight leading-[1.1]">
              On call operators for the work that can't wait.
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            {tiers.map((t) => (
              <div
                key={t.t}
                className="rounded-3xl border border-white/10 bg-card p-6 sm:p-8 md:p-10"
              >
                <div className="text-xl sm:text-2xl text-cream">{t.t}</div>
                <div className="mt-2 font-mono text-sm text-cream tabular-nums">
                  {t.p} <span className="text-cream/70">{t.per}</span>
                </div>
                <p className="mt-5 text-sm text-cream/85 leading-relaxed">{t.best}</p>
                <ul className="mt-6 space-y-2.5 text-sm text-cream/80">
                  {t.items.map((i) => (
                    <li key={i} className="flex items-baseline gap-2.5">
                      <span className="inline-block h-1 w-1 rounded-full bg-accent shrink-0 translate-y-[-2px]" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4">
                  <Link
                    to="/pricing"
                    className="text-xs text-cream/85 hover:text-cream underline underline-offset-4 decoration-white/25 hover:decoration-white/70 transition"
                  >
                    See engagement pricing →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-12 text-sm text-cream/75 text-center max-w-2xl mx-auto">
            Engagements convert cleanly into Advisory, Sprint, Operator, or Pod work at preferred roster rates.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-surface-band py-20 md:py-28 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 md:mb-14">
            <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-accent">
              How it works
            </div>
            <h2 className="mt-6 text-3xl md:text-4xl text-cream tracking-tight leading-[1.1] text-balance allow-wrap">
              One agreement. Every portfolio company activated.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-10 border-t border-white/10 pt-10">
            {steps.map((s) => (
              <div key={s.n}>
                <div className="font-mono text-[11px] tracking-[0.14em] text-accent">{s.n}</div>
                <div className="mt-4 text-lg sm:text-xl text-cream tracking-tight">{s.t}</div>
                <p className="mt-3 text-sm text-cream/75 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Included vs. billed */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-accent">
              What the retainer covers
            </div>
            <h2 className="mt-6 text-3xl md:text-4xl text-cream tracking-tight leading-[1.1] text-balance allow-wrap">
              Roster access is retained. Operator work is scoped.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 border-t border-white/10 pt-10">
            {included.map((i) => (
              <div key={i.t}>
                <div className="text-lg sm:text-xl text-cream tracking-tight">{i.t}</div>
                <p className="mt-3 text-sm text-cream/75 leading-relaxed">{i.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterCTA
        headline={<>Stabilize the operator gaps across your portfolio.</>}
        sub="Book a 30-minute call to walk through the audit and roster model. We will tell you directly whether Veep is the right operating partner function for your firm."
      />
    </>
  );
}
