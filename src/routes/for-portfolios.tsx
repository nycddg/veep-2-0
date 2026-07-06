import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { FooterCTA } from "@/components/site/FooterCTA";

const included = [
  "Portfolio-wide intake and quarterly capacity planning",
  "Priority operator matching with response SLA",
  "Emergency CFO / COO / GTM coverage path",
  "Preferred commercial terms across engagements",
  "Executive Capacity MSA — one agreement, SOWs per role",
  "Included diagnostics per portfolio company",
];

const benchFlow = [
  { n: "01", t: "Capacity audit", d: "Portfolio-wide leadership risk map: coverage gaps, event triggers, upcoming vacancies." },
  { n: "02", t: "MSA + bench retainer", d: "One master agreement. Bench sized to your portfolio, activated in days." },
  { n: "03", t: "Deploy on demand", d: "Each engagement scoped as an SOW. Same terms, same operator pool, no re-contracting." },
];

const partners = [
  { t: "PE, family offices, holdcos", d: "The executive bench instead of a full internal operating-partner team." },
  { t: "M&A advisors, QoE, lenders", d: "Refer operators when portfolio finance or ops needs a real owner." },
  { t: "Executive search firms", d: "Interim coverage that preserves your permanent search timeline." },
  { t: "Corporate & M&A counsel", d: "Post-close and restructuring capacity when advice runs out." },
];

export const Route = createFileRoute("/for-portfolios")({
  head: () => ({
    meta: [
      { title: "For Portfolios — An Executive Bench for PE, Family Offices & Holdcos | Veep" },
      { name: "description", content: "One master agreement. Priority operator access across every portco. Emergency coverage SLA. Deployed via SOW in under 10 days." },
      { property: "og:title", content: "For Portfolios — Veep Executive Bench" },
      { property: "og:description", content: "Executive capacity as infrastructure. One MSA, priority matching, deployed via SOW." },
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
        eyebrow="For portfolios"
        title="An executive bench"
        italic="across the portfolio."
        sub="Every portco gets priority access to vetted operators. One master agreement. Emergency coverage in days, not months. Priced as infrastructure, not per-headcount."
        secondaryLabel="Request a capacity audit"
      />

      {/* Bench flow */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
              How the bench works
            </div>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-cream tracking-tight leading-[1.05]">
              One audit. One MSA.{" "}
              <span className="italic text-stone">Deployed via SOW.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
            {benchFlow.map((s) => (
              <div key={s.n} className="bg-background p-8 flex flex-col">
                <span className="font-serif text-3xl text-accent">{s.n}</span>
                <div className="mt-5 font-serif text-2xl text-cream tracking-tight">{s.t}</div>
                <p className="mt-3 text-sm text-stone leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Included vs billed */}
      <section className="py-24 md:py-32 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
                What's included vs billed
              </div>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl text-cream tracking-tight leading-[1.05]">
                Pay for capacity.{" "}
                <span className="italic text-stone">Not per hire.</span>
              </h2>
              <p className="mt-6 text-stone text-lg leading-relaxed">
                The annual bench covers access, planning, and priority.
                Operator deployments are billed per SOW at preferred rates —
                so you fund the infrastructure, not the seat you didn't use.
              </p>
            </div>
            <div className="lg:col-span-7 grid gap-4">
              <div className="glass-card rounded-3xl p-8">
                <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
                  Included in the retainer
                </div>
                <ul className="mt-6 space-y-3">
                  {included.map((i) => (
                    <li key={i} className="flex items-baseline gap-3 text-sm text-cream/85">
                      <span className="inline-block h-1 w-1 rounded-full bg-accent shrink-0 translate-y-[-2px]" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-white/8 bg-white/[0.02] p-6">
                <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-stone-soft">
                  Billed separately, per SOW
                </div>
                <p className="mt-3 text-sm text-stone leading-relaxed">
                  Advisory ($5k–$12.5k/mo) · Fractional ($12k–$40k/mo) · Interim
                  ($35k–$90k/mo) · Sprint (scoped per outcome). Preferred rates
                  apply across all four.{" "}
                  <Link to="/pricing" className="text-cream underline underline-offset-4">
                    See pricing
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio case */}
      <section className="py-24 md:py-32 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-10 md:p-14">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4">
                <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
                  Mid-market PE fund
                </div>
                <div className="mt-6 font-serif text-4xl md:text-5xl text-cream tracking-tight">
                  9 portcos
                </div>
                <div className="mt-2 text-sm text-stone">2 emergency covers · 1 exit prep · 6 fractional seats</div>
              </div>
              <div className="md:col-span-8">
                <p className="text-cream text-lg leading-relaxed">
                  "We used to spend the first 90 days after every acquisition
                  scrambling to find a CFO. Now we have one call, one MSA, and
                  an operator in the seat before the deal is fully diligenced."
                </p>
                <div className="mt-6 text-xs text-stone">— Operating Partner, mid-market fund</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners strip */}
      <section className="py-24 md:py-32 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
              Referral network
            </div>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-cream tracking-tight leading-[1.05]">
              We partner with the advisors who{" "}
              <span className="italic text-stone">see it first.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {partners.map((p) => (
              <div key={p.t} className="rounded-3xl border border-white/8 bg-white/[0.02] p-6">
                <div className="font-serif text-xl text-cream tracking-tight">{p.t}</div>
                <p className="mt-3 text-sm text-stone leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterCTA
        headline="Ready to audit your portfolio's executive capacity?"
        sub="30-minute call. We'll map coverage gaps and event triggers, and propose the bench that fits."
      />
    </>
  );
}
