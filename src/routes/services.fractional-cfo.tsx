import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, CheckList, Eyebrow } from "@/components/site/primitives";
import { FooterCTA } from "@/components/site/FooterCTA";

export const Route = createFileRoute("/services/fractional-cfo")({
  head: () => ({
    meta: [
      { title: "Fractional CFO — Veep" },
      { name: "description", content: "CFO capacity for companies at capital, lender, reporting, and diligence inflection points." },
      { property: "og:title", content: "Fractional CFO — Veep" },
      { property: "og:description", content: "The strategic finance leader you need now, without the cost of a full-time hire." },
    ],
  }),
  component: Page,
});

const triggers = [
  "Raising capital or negotiating a debt facility",
  "Preparing for lender diligence or an audit",
  "Board / investor reporting that needs to survive scrutiny",
  "Buying or selling a company",
  "Founder still owning finance strategy",
  "CFO / VP Finance departure",
  "Finance function outgrew the controller",
  "13-week cash and forecasting rebuild",
];

const packages = [
  { name: "CFO Capacity — Light", price: "$12k–$18k / mo", for: "Reporting cadence, monthly close discipline, board packages." },
  { name: "CFO Capacity — Core", price: "$18k–$28k / mo", for: "Capital raise support, lender readiness, forecasting, function scoping.", featured: true },
  { name: "CFO Capacity — Intensive", price: "$28k–$40k / mo", for: "Full transaction prep, M&A integration, or complex turnarounds." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Fractional CFO"
        title="Strategic finance,"
        italic="on the day you need it."
        sub="A senior CFO steps into your business, owns the outcome, and leaves cleanly. Onboarded in under 10 days, with a 30-day fit guarantee."
      />

      <Section>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <Eyebrow>When teams call</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl text-ink">Triggers we see every week.</h2>
            <p className="mt-4 text-stone">Any one of these is enough to talk.</p>
          </div>
          <CheckList items={triggers} />
        </div>
      </Section>

      <Section tone="muted">
        <div className="max-w-2xl">
          <Eyebrow>Packages</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight text-ink">Priced to the scope, not the hour.</h2>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {packages.map((p) => (
            <div key={p.name} className={`rounded-3xl p-8 border ${p.featured ? "bg-ink text-cream border-ink" : "bg-card border-border text-ink"}`}>
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
            <h3 className="mt-4 font-serif text-3xl md:text-4xl">Finance Leadership Diagnostic.</h3>
            <p className="mt-4 text-forest-foreground/85">
              A 2–3 week engagement priced $5k–$15k. Assess the finance function,
              build a 90-day CFO roadmap, and recommend the right operator. Credited
              against the first month if you continue.
            </p>
          </div>
        </div>
      </Section>

      <FooterCTA />
    </>
  );
}
