import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, CheckList, Eyebrow } from "@/components/site/primitives";
import { FooterCTA } from "@/components/site/FooterCTA";

export const Route = createFileRoute("/services/fractional-cfo")({
  head: () => ({
    meta: [
      { title: "Fractional C-Suite — Veep" },
      { name: "description", content: "Fractional C-Suite capacity — CFO, COO, CTO, CRO, CMO, or CPO — for companies at capital, growth, and operating inflection points." },
      { property: "og:title", content: "Fractional C-Suite — Veep" },
      { property: "og:description", content: "The senior executive you need now — any C-suite role — without the cost of a full-time hire." },
    ],
  }),
  component: Page,
});

const triggers = [
  "Raising capital, negotiating debt, or preparing for diligence",
  "Board / investor reporting that needs to survive scrutiny",
  "Scaling ops, supply chain, or delivery through a growth step-change",
  "GTM, revenue, or pricing motion that has stalled",
  "Product, tech, or platform strategy without a permanent leader",
  "Executive departure — CFO, COO, CTO, CRO, CMO, or CPO",
  "Founder still owning a function that has outgrown them",
  "Buying, selling, or integrating a company",
];

const packages = [
  { name: "C-Suite Capacity — Light", price: "$12k–$18k / mo", for: "Cadence, reporting discipline, and executive coverage for one function." },
  { name: "C-Suite Capacity — Core", price: "$18k–$28k / mo", for: "Function build, capital or growth event support, and permanent-hire scoping.", featured: true },
  { name: "C-Suite Capacity — Intensive", price: "$28k–$40k / mo", for: "Full transaction prep, turnaround, or multi-function leadership load." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Fractional C-Suite"
        title="Any C-suite role,"
        italic="on the day you need it."
        sub="CFO, COO, CTO, CRO, CMO, or CPO — a senior operator steps into your business, owns the outcome, and leaves cleanly. Onboarded in under 10 days, with a 30-day fit guarantee."
      />

      <Section>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <Eyebrow>When teams call</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl text-cream">Triggers we see every week.</h2>
            <p className="mt-4 text-stone">Any one of these is enough to talk — across any C-suite function.</p>
          </div>
          <CheckList items={triggers} />
        </div>
      </Section>

      <Section tone="muted">
        <div className="max-w-2xl">
          <Eyebrow>Packages</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight text-cream">Priced to the scope, not the hour.</h2>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {packages.map((p) => (
            <div key={p.name} className={`rounded-3xl p-8 border ${p.featured ? "bg-ink text-cream border-ink" : "bg-card border-border text-cream"}`}>
              <div className={`text-xs uppercase tracking-widest ${p.featured ? "text-cream/70" : "text-stone"}`}>Package</div>
              <div className="mt-2 font-serif text-2xl">{p.name}</div>
              <div className="mt-4 font-serif text-3xl">{p.price}</div>
              <p className={`mt-4 text-sm ${p.featured ? "text-cream/80" : "text-stone"}`}>{p.for}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl bg-forest-deep text-forest-foreground p-10 md:p-14">
          <div className="max-w-2xl">
            <Eyebrow>Start smaller</Eyebrow>
            <h3 className="mt-4 font-serif text-3xl md:text-4xl">Executive Leadership Diagnostic.</h3>
            <p className="mt-4 text-forest-foreground/85">
              A 2–3 week engagement priced $5k–$15k. Assess the function that needs
              leadership, build a 90-day executive roadmap, and recommend the right
              operator for the role. Credited against the first month if you continue.
            </p>
          </div>
        </div>
      </Section>

      <FooterCTA />
    </>
  );
}
