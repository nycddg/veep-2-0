import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, CheckList, Eyebrow } from "@/components/site/primitives";
import { FooterCTA } from "@/components/site/FooterCTA";

export const Route = createFileRoute("/for-portfolios")({
  head: () => ({
    meta: [
      { title: "For Portfolios — Veep Executive Bench" },
      { name: "description", content: "An annual executive capacity partnership for PE, family offices, holdcos, and independent sponsors." },
      { property: "og:title", content: "For Portfolios — Veep Executive Bench" },
      { property: "og:description", content: "Priority access to vetted CFO, COO, and GTM operators across your portfolio." },
    ],
  }),
  component: Page,
});

const tiers = [
  {
    name: "Company Bench",
    price: "$15k–$35k / year",
    for: "Individual operating companies with recurring capacity needs.",
    items: [
      "Annual capacity assessment",
      "Quarterly leadership planning",
      "Priority operator matching",
      "10–20 advisory credits",
      "Preferred engagement pricing",
    ],
  },
  {
    name: "Portfolio Bench",
    price: "$50k–$150k / year",
    for: "Investors, sponsors, family offices, and holdcos.",
    items: [
      "Portfolio-wide intake",
      "Quarterly capacity review",
      "Emergency CFO / COO / GTM path",
      "Included diagnostics",
      "Executive Capacity MSA",
    ],
    featured: true,
  },
  {
    name: "Capacity Subscription",
    price: "$8k–$25k / month",
    for: "High-growth companies with cross-functional leadership needs.",
    items: [
      "Ongoing advisory access",
      "Monthly operating cadence",
      "Cross-functional triage",
      "Conversion to interim / fractional",
    ],
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="For portfolios"
        title="An executive bench, "
        italic="on retainer."
        sub="Give every company in your portfolio priority access to vetted CFO, COO, and GTM operators — without building a full internal operating-partner team."
      />

      <Section>
        <div className="max-w-2xl">
          <Eyebrow>Start here</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight text-cream">
            Executive Capacity Audit.
          </h2>
          <p className="mt-4 text-stone">
            Before you retain the bench, we run a portfolio-wide leadership map:
            which companies need CFO help, which need COO, which need GTM,
            which need interim coverage, and which upcoming events will create
            urgency in the next 6–12 months.
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-border bg-card p-8">
            <div className="font-serif text-2xl text-cream">What you get</div>
            <div className="mt-6">
              <CheckList items={[
                "Portfolio-wide leadership risk map",
                "CFO / COO / GTM coverage assessment",
                "Upcoming capital and event triggers",
                "Recommended bench structure per company",
                "Emergency coverage path",
              ]} />
            </div>
          </div>
          <div className="rounded-3xl bg-forest-deep text-forest-foreground p-8">
            <div className="font-serif text-2xl">Then: Portfolio Executive Bench</div>
            <p className="mt-4 text-forest-foreground/85 text-sm leading-relaxed">
              An annual capacity partnership. Priority access, quarterly planning,
              emergency coverage SLA, preferred commercial terms. Operator
              deployments billed separately per SOW under a Master Services Agreement.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {["Annual bench: $50k–$150k", "Usage billed separately", "MSA activated once, SOWs per role"].map((x) => (
                <li key={x} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-forest-foreground/80" /> {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <div className="max-w-2xl">
          <Eyebrow>Models</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight text-cream">
            Hire exactly as much leadership as you need.
          </h2>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-3xl p-8 border ${t.featured ? "bg-cream text-ink border-cream" : "bg-card border-border text-cream"}`}
            >
              <div className={`text-xs uppercase tracking-widest ${t.featured ? "text-ink/60" : "text-stone"}`}>
                {t.featured ? "Most common" : "Model"}
              </div>
              <div className="mt-2 font-serif text-2xl">{t.name}</div>
              <div className={`mt-2 text-sm ${t.featured ? "text-ink/70" : "text-stone"}`}>{t.for}</div>
              <div className="mt-6 font-serif text-3xl">{t.price}</div>
              <ul className="mt-6 space-y-2 text-sm">
                {t.items.map((i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className={`h-1.5 w-1.5 rounded-full ${t.featured ? "bg-ink/70" : "bg-forest"}`} /> {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <FooterCTA headline="Ready to audit your portfolio's executive capacity?" />
    </>
  );
}
