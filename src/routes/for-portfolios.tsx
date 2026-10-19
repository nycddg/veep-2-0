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
    t: "Pre-close needs arrive before the team is ready.",
    d: "Diligence, financial models, team assessments, and operating plans need more than a place on the deal checklist. Your team is stretched. The work needs experienced hands before close.",
  },
  {
    t: "Post-close work moves faster than staffing.",
    d: "The deal closes. The plan meets the business. Reporting, integration, growth, and people priorities need someone to carry them through, even while permanent leadership is taking shape.",
  },
  {
    t: "Executive transitions create immediate gaps.",
    d: "A CFO leaves mid-raise. A COO exits after close. Revenue misses the plan. Search can fill the seat. The business needs leadership while it runs.",
  },
  {
    t: "Relying on the same informal roster.",
    d: "You know who to call. Until they are unavailable, the job needs different experience, or three companies need help at once. Build a broader bench around the work your portfolio actually faces.",
  },
];

const auditDeliverables = [
  "Portfolio-wide leadership and operator gap map",
  "Coverage across finance, GTM, operations, product, and people",
  "Upcoming triggers: diligence, close, integration, fundraising, exit, leadership transitions, and value-creation work",
  "Recommended roster structure by company and function",
  "Emergency coverage path for interim vacancies",
  "Priority shortlists for likely operator needs",
];

const tiers = [
  {
    t: "Portfolio Roster",
    p: "$75k",
    per: "/ year · usage billed separately",
    best: "For funds, family offices, holdcos, and multi-company founders with recurring operating needs. Priority matching, subject to fit and availability; operator time is not reserved.",
    items: [
      "Portfolio-wide intake and capacity map",
      "Quarterly portfolio capacity review",
      "Priority operator matching across portcos",
      "Pre-vetted roster across finance, GTM, operations, product, and people",
      "Emergency Operator or Pod coverage: agreed SLA",
      "Included diagnostics and shortlists",
      "Executive Capacity MSA signed once",
      "Preferred engagement rates on every SOW",
    ],
    featured: true,
  },
];

const steps = [
  { n: "01", t: "Capacity Audit", d: "In 2–3 weeks, map the portfolio's operating gaps, transaction triggers, and priorities. Establish where help is needed and the experience each company requires." },
  { n: "02", t: "MSA signed once", d: "Agree master terms, rates, IP, confidentiality, and engagement structure once. Each company can then start its own scope without reopening the full agreement." },
  { n: "03", t: "SOW per engagement", d: "Confirm the job and fit. Activate the company SOW. Operating work scoped in 72 hours, started in under 10 days." },
  { n: "04", t: "Quarterly review", d: "Review what has changed, what is coming, and where the work needs attention. Update priorities and the roster plan with your team each quarter." },
];

const included = [
  { t: "In the roster", d: "Portfolio planning, quarterly reviews, priority matching, diagnostics, preferred rates, and emergency coverage under agreed terms." },
  { t: "Billed by SOW", d: "Company Advisory, Sprint, Operator, and Pod engagements. Agent Teams are separately scoped and priced by scope and volume." },
];

export const Route = createFileRoute("/for-portfolios")({
  head: () => ({
    meta: [
      { title: "For Funds | Veep Portfolio Roster" },
      {
        name: "description",
        content:
          "Operating partners for diligence, integration, growth, and leadership gaps. Retain a Portfolio Roster; scope each company's work separately.",
      },
      { property: "og:title", content: "For Funds | Veep Portfolio Roster" },
      {
        property: "og:description",
        content: "Operating partners for diligence, integration, growth, and leadership gaps. Retain a Portfolio Roster; scope each company's work separately.",
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
        title="The deal has a team. The work needs one, too."
        sub="Veep gives funds experienced operating partners for diligence, transition, integration, and value creation. We help define the job and carry it through. Operating engagements scoped in 72 hours. Started in under 10 days. Operator fit and availability confirmed before deployment."
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
              WHERE YOUR PORTFOLIOS LOSE TIME
            </div>
            <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
              Transactions change the business. Someone has to carry the work.
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
              Get ahead of the work that will otherwise become urgent. We map operating gaps, upcoming transactions, and likely priorities across the next 6–12 months. You get a view of which companies need support, what the job requires, and where experienced operators can make the difference.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-10 md:gap-y-12 motion-hairline pt-12">
            <div>
              <div className="eyebrow">
                2–3-week audit
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
                Post audit
              </div>
              <div className="mt-4 font-serif font-medium text-xl text-cream tracking-tight">
                On-demand Operating Partners
              </div>
              <p className="mt-4 text-base text-stone leading-relaxed">
                Bring in operating partners against the priorities the audit identifies. A retained Portfolio Roster adds planning and priority matching. Each company engagement has its own scope and fee.
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
                  <span>MSA activated once, SOWs per engagement</span>
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
                    : $75k/year
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
            headline="Held the seat. Know the stakes."
            sub="Finance, growth, operations, and people leaders who have carried companies through transactions, integrations, and leadership gaps. Handpicked for senior judgment and hands-on delivery. We match that experience to the work in front of you."
            operators={operatorsForFunds()}
          />
        </div>
      </Reveal>

      {/* Roster tiers */}
      <section id="roster" className="bg-surface-band py-14 sm:py-16 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mb-12 md:mb-14">
            <div className="eyebrow">
              Roster model
            </div>
            <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
              A portfolio bench built around your needs.
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
            Company work is separately scoped as Advisory, Sprint, Operator, or Pod engagements at agreed preferred rates.
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
              Agree the terms. Get each job underway.
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
              Roster access is retained. Operator work is scoped.
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
        headline={<>Put the portfolio's priorities in capable hands.</>}
        sub="Bring us the portfolio, the pressure points, and what needs to happen next. In a 30-minute call, we'll help determine whether the audit and roster model fit."
      />
    </>
  );
}
