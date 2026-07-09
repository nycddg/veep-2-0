import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { FooterCTA } from "@/components/site/FooterCTA";

const problems = [
  {
    t: "Unplanned executive transitions",
    d: "A CFO leaves a portco mid-fundraise. A COO exits weeks before an integration. The search runs; the seat still needs an owner.",
  },
  {
    t: "Value creation stalls between board meetings",
    d: "The 100-day plan is clear on the slide. Nobody in the company has capacity to actually own it end-to-end.",
  },
  {
    t: "Every portco rebuilds the same roster",
    d: "Each company runs its own operator search from scratch — different sources, different quality bars, no leverage across the portfolio.",
  },
];

const auditDeliverables = [
  "Portfolio-wide leadership risk map",
  "Function coverage assessment across finance, GTM, ops, product, and people",
  "Upcoming capital and event triggers (fundraise, integration, exit, transition)",
  "Recommended roster structure per company",
  "Emergency coverage path for interim vacancies",
];

const tiers = [
  {
    t: "Portfolio Roster",
    p: "$75k",
    per: "/ year · usage billed separately",
    best: "Investors, family offices, holdcos, and independent sponsors.",
    items: [
      "Portfolio-wide intake and capacity map",
      "Quarterly capacity review",
      "Priority operator matching across portcos",
      "Emergency Operator / Pod coverage SLA",
      "Included diagnostics and shortlists",
      "Executive Capacity MSA signed once",
      "Preferred engagement rates on every SOW",
    ],
    featured: true,
  },
];

const steps = [
  { n: "01", t: "Capacity Audit", d: "2–3 weeks. We map the portfolio, flag the seats most at risk, and recommend a roster shape per company." },
  { n: "02", t: "MSA signed once", d: "Master terms, rate card, IP, and confidentiality — pre-approved so every portco can activate without redoing paper." },
  { n: "03", t: "SOW per engagement", d: "When a company needs an owner, we scope, match in 72 hours, and deploy in under 10 days under the MSA." },
  { n: "04", t: "Quarterly review", d: "We revisit the map with the operating team — what shifted, what's coming, what to pre-position." },
];

const included = [
  { t: "In the roster", d: "Access, planning, quarterly review, emergency coverage SLA, preferred rates, and included diagnostics." },
  { t: "Billed by SOW", d: "Advisory, Sprint, Operator, and Pod engagements are scoped and billed per company at preferred roster rates." },
];

export const Route = createFileRoute("/for-portfolios")({
  head: () => ({
    meta: [
      { title: "For Portfolios — Executive Capacity Partnership | Veep" },
      {
        name: "description",
        content:
          "An annual executive roster for PE, VC, family offices, and holdcos. Priority access to vetted senior operators, quarterly capacity planning, emergency coverage — matched in 72 hours.",
      },
      { property: "og:title", content: "For Portfolios — Veep Executive Roster" },
      {
        property: "og:description",
        content: "Portfolio-wide executive capacity, on retainer. Ready when the work needs an owner.",
      },
      { property: "og:url", content: "/for-portfolios" },
    ],
    links: [{ rel: "canonical", href: "/for-portfolios" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="For Portfolios"
        title="An executive roster,"
        accent="on retainer."
        sub="Priority access to vetted senior operators across every portco, ready the moment critical work needs an owner. Matched in 72 hours. Deployed in under 10 days. 30-day fit guarantee."
      />

      {/* Problem */}
      <section className="bg-surface-raised py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 md:mb-14">
            <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-accent">
              Where portfolios lose time
            </div>
            <h2 className="mt-6 text-3xl md:text-4xl text-cream tracking-tight leading-[1.1] text-balance">
              The seat is open.{" "}
              <span className="text-accent">The work is not.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-10 border-t border-white/10 pt-10">
            {problems.map((p) => (
              <div key={p.t}>
                <div className="text-lg sm:text-xl text-cream tracking-tight leading-snug">{p.t}</div>
                <p className="mt-4 text-sm text-cream/75 leading-relaxed">{p.d}</p>
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
            <h2 className="mt-6 text-3xl md:text-4xl text-cream tracking-tight leading-[1.1] text-balance">
              Executive Capacity Audit.
            </h2>
            <p className="mt-6 text-cream/80 leading-relaxed">
              Before you retain the roster, we run a portfolio-wide leadership map: which
              companies need what, which upcoming events will create urgency in the next
              6–12 months, and where a Veep operator would move the number.
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
                Portfolio Executive Roster
              </div>
              <p className="mt-4 text-sm text-cream/80 leading-relaxed">
                An annual capacity partnership. Priority access, quarterly planning,
                emergency coverage SLA, and preferred commercial terms. Operator
                deployments billed separately per SOW under a Master Services Agreement.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-cream/85">
                {[
                  "Annual roster: $75k",
                  "Usage billed separately at preferred rates",
                  "MSA activated once, SOWs per role",
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
          <div className="max-w-2xl mb-12 md:mb-14">
            <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-accent">
              Roster models
            </div>
            <h2 className="mt-6 text-3xl md:text-4xl text-cream tracking-tight leading-[1.1] text-balance">
              Retain exactly as much capacity{" "}
              <span className="text-accent">as the portfolio needs.</span>
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
                  {t.p} <span className="text-cream/60">{t.per}</span>
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
            Engagements convert cleanly into Advisory, Sprint, Operator, or Pod work at
            preferred roster rates.
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
            <h2 className="mt-6 text-3xl md:text-4xl text-cream tracking-tight leading-[1.1] text-balance">
              One agreement.{" "}
              <span className="text-accent">Every portco activated.</span>
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
            <h2 className="mt-6 text-3xl md:text-4xl text-cream tracking-tight leading-[1.1] text-balance">
              Roster access is retained.{" "}
              <span className="text-accent">Operator work is scoped.</span>
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
        headline="Map your portfolio's executive capacity."
        sub="Book a 30-minute call to walk through the audit and roster. We'll tell you directly whether Veep is the right partner for your portfolio."
      />
    </>
  );
}
