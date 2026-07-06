import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { FooterCTA } from "@/components/site/FooterCTA";
import { LogoWall } from "@/components/site/LogoWall";

const stats = [
  { k: "$1B+", v: "Capital raised" },
  { k: "$3B+", v: "Revenue created" },
  { k: "$2B+", v: "Costs saved" },
  { k: "20+", v: "Startup exits" },
];

const cases = [
  {
    tag: "Series B SaaS · Fractional CFO",
    trigger: "Board lost confidence in finance 60 days before a bridge round.",
    action: "Fractional CFO rebuilt the model, ran diligence, and owned lender conversations.",
    outcome: "Bridge closed in 42 days at target valuation.",
    metric: "$18M raised",
  },
  {
    tag: "PE portco · Interim COO",
    trigger: "COO exited two months after acquisition. Integration stalled.",
    action: "Interim COO covered the seat, unified two teams, ran the search in parallel.",
    outcome: "Permanent COO hired at month five. EBITDA +14% at handoff.",
    metric: "$6.2M annualized savings",
  },
  {
    tag: "Founder-led · Sprint",
    trigger: "GTM stalled at $8M ARR. Founder still owned every deal above $50k.",
    action: "12-week sprint: reset pricing, ICP, and installed weekly RevOps cadence.",
    outcome: "Pipeline coverage 3.1× within 90 days. Founder off deals below $250k.",
    metric: "+62% Q/Q pipeline",
  },
];

const quotes = [
  {
    q: "I cannot recommend this team more highly. They think, act, and engage like co-founders.",
    n: "Jerry Kolber",
    r: "Founder & CEO, Atomic Audio",
    i: "JK",
  },
  {
    q: "Matched us with a CFO who understood the board dynamic on day one. Bridge closed 6 weeks later.",
    n: "Series B Founder",
    r: "Vertical SaaS",
    i: "SF",
  },
  {
    q: "The interim COO stabilized the team, and by the time our permanent hire landed the playbook was written.",
    n: "PE Operating Partner",
    r: "Mid-market fund",
    i: "OP",
  },
];

export const Route = createFileRoute("/proof")({
  head: () => ({
    meta: [
      { title: "Proof — Outcomes, Case Studies & Testimonials | Veep" },
      { name: "description", content: "$1B+ raised. $3B+ revenue created. $2B+ saved. 20+ exits. Three case studies from Veep engagements — with the trigger, the action, and the number that mattered." },
      { property: "og:title", content: "Proof — Veep" },
      { property: "og:description", content: "Anonymized case studies and testimonials from Series B founders, PE portcos, and holdcos." },
      { property: "og:url", content: "/proof" },
    ],
    links: [{ rel: "canonical", href: "/proof" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Proof"
        title="$1B+ raised. $3B+ revenue."
        italic="20+ exits."
        sub="Veep operators have led at Google, LinkedIn, Meta, LVMH, Goldman Sachs, Morning Brew, and Coinbase — and shipped the outcomes below inside real engagements."
        secondaryLabel="Meet the roster"
        secondaryTo="/operators"
      />

      {/* Track record */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((s) => (
              <div key={s.k}>
                <div className="font-serif text-4xl md:text-5xl text-cream tracking-tight">{s.k}</div>
                <div className="mt-2 text-[11px] font-medium tracking-[0.2em] uppercase text-stone-soft">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LogoWall />

      {/* Case studies */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
              Case studies
            </div>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-cream tracking-tight leading-[1.05]">
              Three engagements.{" "}
              <span className="italic text-stone">The numbers that moved.</span>
            </h2>
          </div>
          <div className="grid gap-6 md:gap-8">
            {cases.map((c) => (
              <div key={c.tag} className="glass-card rounded-3xl p-8 md:p-10">
                <div className="grid md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-3">
                    <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
                      {c.tag}
                    </div>
                    <div className="mt-6 font-serif text-3xl md:text-4xl text-cream tracking-tight">
                      {c.metric}
                    </div>
                  </div>
                  <div className="md:col-span-9 grid md:grid-cols-3 gap-6">
                    {[
                      { k: "Trigger", v: c.trigger },
                      { k: "Action", v: c.action },
                      { k: "Outcome", v: c.outcome },
                    ].map((row) => (
                      <div key={row.k}>
                        <div className="text-[10px] uppercase tracking-[0.2em] text-stone-soft">
                          {row.k}
                        </div>
                        <p className="mt-2 text-sm text-cream/85 leading-relaxed">
                          {row.v}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
              What buyers say
            </div>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-cream tracking-tight leading-[1.05]">
              Voices from{" "}
              <span className="italic text-stone">the seat.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {quotes.map((t) => (
              <figure key={t.n} className="glass-card rounded-3xl p-7 flex flex-col">
                <blockquote className="font-serif text-xl text-cream leading-snug italic">
                  "{t.q}"
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-white/5 ring-1 ring-white/20 grid place-items-center text-cream text-xs">
                    {t.i}
                  </div>
                  <div>
                    <div className="text-sm text-cream font-medium">{t.n}</div>
                    <div className="text-xs text-stone">{t.r}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <FooterCTA />
    </>
  );
}
