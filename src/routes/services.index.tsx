import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { FooterCTA } from "@/components/site/FooterCTA";

const products = [
  {
    id: "advisory",
    name: "Advisory",
    price: "$5k–$12.5k / month",
    term: "Monthly · no minimum",
    when: "Founders or CEOs who need executive judgment on a cadence — without giving up a seat.",
    scope: [
      "2–4 hours per week of senior operator time",
      "Board & investor prep, hiring calibration",
      "Strategic decisions without a full function build",
    ],
    proof: "Series A founder used a fractional CFO advisor to build a 3-year model and land a $12M Series A.",
  },
  {
    id: "fractional",
    name: "Fractional",
    price: "$12k–$40k / month",
    term: "3–12 month typical term",
    when: "A function needs a real leader — CFO, COO, CRO, CMO, CTO, CPO — but not yet a full-time seat.",
    scope: [
      "1–3 days per week executive capacity",
      "Owns cadence, reporting, and the roadmap",
      "Capital events, function build, GTM redesign",
    ],
    proof: "PE-backed portco replaced $600k/yr CFO search with a fractional operator for a full year of runway.",
    featured: true,
  },
  {
    id: "interim",
    name: "Interim",
    price: "$35k–$90k / month",
    term: "3–9 months with structured handoff",
    when: "The seat is open — search running, transition underway, or coverage lost overnight.",
    scope: [
      "Full-seat ownership on the org chart",
      "Team and vendor accountability",
      "Preserves the permanent search timeline",
    ],
    proof: "Interim COO covered post-acquisition gap for 5 months. Zero board slippage, +14% EBITDA at handoff.",
  },
  {
    id: "sprint",
    name: "Sprint",
    price: "Scoped per outcome",
    term: "4–12 weeks · fixed scope, fixed price",
    when: "One critical initiative with a defined endpoint. You need an owner, not a permanent hire.",
    scope: [
      "M&A integration, diligence prep, pricing reset",
      "GTM redesign, org restructure, ERP rebuild",
      "Clear success criteria and endpoint",
    ],
    proof: "Sprint pricing reset unlocked 3.1× pipeline coverage in 90 days for a $8M ARR founder-led business.",
  },
];

const functions = [
  { t: "Finance", items: ["CFO / VP Finance", "FP&A build", "Raise & diligence", "Reporting rebuild"] },
  { t: "Operations", items: ["COO / VP Ops", "ERP & systems", "M&A integration", "Turnaround"] },
  { t: "Revenue & GTM", items: ["CRO / VP Sales", "RevOps install", "Pricing reset", "Market entry"] },
  { t: "Marketing", items: ["CMO / VP Marketing", "Brand reset", "Demand build", "Product launch"] },
  { t: "Product & Tech", items: ["CTO / CPO", "Platform ship", "Vendor cleanup", "Team stand-up"] },
  { t: "People", items: ["CPO / CHRO", "Org design", "Perf. systems", "Comp & culture"] },
];

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Engagements — Four Ways to Deploy an Operator | Veep" },
      { name: "description", content: "Advisory, Fractional, Interim, and Sprint. Real prices, real scope, real endpoints. Pick the engagement that fits the moment." },
      { property: "og:title", content: "Engagements — Veep" },
      { property: "og:description", content: "Advisory · Fractional · Interim · Sprint. One operator, one outcome, one clear endpoint." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Engagements"
        title="Four ways to deploy"
        italic="a senior operator."
        sub="One product line, priced to the scope. Pick the shape that fits — advisor, fractional lead, interim seat, or a sprint against one outcome."
        secondaryLabel="Not sure which fits? Book a call"
      />

      {/* Comparison strip */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 overflow-x-auto">
          <div className="grid grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10 min-w-[720px]">
            {products.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="bg-background p-5 hover:bg-white/[0.03] transition"
              >
                <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
                  {p.name}
                </div>
                <div className="mt-2 font-serif text-xl text-cream tracking-tight">{p.price}</div>
                <div className="mt-1 text-xs text-stone">{p.term}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Product blocks */}
      {products.map((p, i) => (
        <section
          key={p.id}
          id={p.id}
          className={`py-24 md:py-28 ${i > 0 ? "border-t border-white/10" : ""} scroll-mt-20`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-5">
                <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
                  {String(i + 1).padStart(2, "0")} — {p.name}
                </div>
                <h2 className="mt-6 font-serif text-4xl md:text-5xl text-cream tracking-tight leading-[1.05]">
                  {p.when}
                </h2>
                {p.featured && (
                  <div className="mt-5 inline-flex items-center gap-2 text-[10px] font-medium tracking-[0.2em] uppercase text-accent">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Most requested
                  </div>
                )}
              </div>
              <div className="lg:col-span-7 grid gap-4">
                <div className="glass-card rounded-3xl p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-4">
                    <div className="font-serif text-3xl md:text-4xl text-cream tracking-tight">
                      {p.price}
                    </div>
                    <div className="text-xs text-stone">{p.term}</div>
                  </div>
                  <ul className="mt-8 space-y-3">
                    {p.scope.map((s) => (
                      <li key={s} className="flex items-baseline gap-3 text-sm text-cream/85">
                        <span className="inline-block h-1 w-1 rounded-full bg-accent shrink-0 translate-y-[-2px]" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border border-white/8 bg-white/[0.02] p-6">
                  <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-stone-soft">
                    Proof point
                  </div>
                  <p className="mt-3 text-sm text-cream/90 leading-relaxed italic">
                    "{p.proof}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Functional coverage */}
      <section className="py-24 md:py-32 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
              Functional coverage
            </div>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-cream tracking-tight leading-[1.05]">
              Every executive function.{" "}
              <span className="italic text-stone">Real operators.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {functions.map((f) => (
              <div key={f.t} className="glass-card rounded-3xl p-7">
                <div className="font-serif text-2xl text-cream tracking-tight">{f.t}</div>
                <ul className="mt-6 space-y-2 text-sm text-stone">
                  {f.items.map((i) => (
                    <li key={i} className="flex items-baseline gap-3">
                      <span className="inline-block h-1 w-1 rounded-full bg-accent shrink-0 translate-y-[-2px]" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterCTA
        headline="Which engagement fits your moment?"
        sub="30-minute call. We'll classify the trigger and tell you which shape works — or that Veep isn't the right answer."
      />
    </>
  );
}
