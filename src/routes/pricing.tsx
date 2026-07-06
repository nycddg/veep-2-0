import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, Eyebrow, CheckList } from "@/components/site/primitives";
import { FooterCTA } from "@/components/site/FooterCTA";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Fractional & Interim Executive Pricing | Veep" },
      {
        name: "description",
        content:
          "Transparent pricing for Veep engagements: Advisory from $5k/mo, Fractional $12k–$40k/mo, Interim $35k–$90k/mo, Sprint scoped per outcome.",
      },
      { property: "og:title", content: "Pricing — Veep" },
      { property: "og:description", content: "Every engagement model, with real prices and what's included." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqSchema) }],
  }),
  component: Page,
});

const tiers = [
  {
    t: "Advisory",
    p: "$5k–$12.5k / month",
    best: "Founders and CEOs who want executive judgment without a full seat.",
    items: [
      "2–4 hours per week of senior operator time",
      "Board & investor prep",
      "Strategic decisions and hiring calibration",
      "Monthly retainer, month-to-month",
    ],
  },
  {
    t: "Fractional",
    p: "$12k–$40k / month",
    best: "Companies that need a real CFO, COO, CRO, or CTO on cadence.",
    items: [
      "1–3 days per week executive capacity",
      "Owns a function's cadence and reporting",
      "Capital events, function build, GTM redesign",
      "3–12 month typical term",
    ],
    featured: true,
  },
  {
    t: "Interim",
    p: "$35k–$90k / month",
    best: "Executive seat is open — search running, or transition underway.",
    items: [
      "Full-seat ownership",
      "Team and vendor accountability",
      "Preserves the permanent search",
      "3–9 month term with structured handoff",
    ],
  },
  {
    t: "Sprint",
    p: "Scoped per outcome",
    best: "One critical initiative with a defined endpoint.",
    items: [
      "Fixed scope, fixed price",
      "M&A integration · Pricing reset · Diligence prep",
      "Clear success criteria",
      "4–12 week engagement",
    ],
  },
];

const faqs = [
  {
    q: "Are there setup or matching fees?",
    a: "No. Discovery calls and operator matching are free. You only pay once an engagement is signed.",
  },
  {
    q: "Can I convert an interim engagement to fractional (or vice versa)?",
    a: "Yes. Roughly 30% of engagements change shape mid-term — an interim seat becomes fractional coverage after the search lands, or a fractional seat expands into interim before a raise.",
  },
  {
    q: "How does the 30-day fit guarantee work?",
    a: "If the operator isn't right within the first 30 days, we swap them or you walk with no fee owed for the remaining term.",
  },
  {
    q: "What if I don't know which model fits?",
    a: "That's what the discovery call is for. Most companies start with either Advisory or Fractional; PE portfolios usually start with the Executive Bench.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Real prices,"
        italic="not 'contact us'."
        sub="Every engagement is priced to the scope, not the hour. The ranges below are what buyers actually pay."
        index="04"
        category="Pricing"
      />

      <Section>
        <div className="grid md:grid-cols-4 gap-4">
          {tiers.map((t) => (
            <div
              key={t.t}
              className={`rounded-3xl p-6 border ${
                t.featured ? "bg-cream text-ink border-cream" : "bg-card text-cream border-border"
              }`}
            >
              <div className={`text-xs uppercase tracking-widest ${t.featured ? "text-ink/60" : "text-stone-soft"}`}>
                {t.featured ? "Most common" : "Model"}
              </div>
              <div className="mt-2 text-2xl tracking-tight">{t.t}</div>
              <div className="mt-3 text-2xl tracking-tight">{t.p}</div>
              <p className={`mt-3 text-sm ${t.featured ? "text-ink/75" : "text-stone"}`}>{t.best}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {t.items.map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className={`mt-2 h-1 w-1 rounded-full shrink-0 ${t.featured ? "bg-ink/60" : "bg-accent-gold"}`} />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-stone">
          All engagements carry a 30-day fit guarantee. Response within 1 business day. No pitch deck required.
        </p>
      </Section>

      <Section tone="muted">
        <div className="max-w-2xl">
          <Eyebrow>Portfolios</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl leading-tight text-cream">Executive Bench for PE, family offices, and holdcos.</h2>
          <p className="mt-4 text-stone">
            Annual capacity partnership: priority operator matching, quarterly planning, emergency
            CFO/COO/GTM coverage, preferred commercial terms. Bench $50k–$150k/yr; deployments per SOW.
          </p>
          <div className="mt-6">
            <Link to="/services/executive-bench" className="text-sm text-cream underline underline-offset-4 hover:text-accent-gold">
              Executive Bench details →
            </Link>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <Eyebrow>Pricing FAQ</Eyebrow>
            <h2 className="mt-6 text-3xl md:text-4xl leading-[1.05] text-cream">Common pricing questions.</h2>
          </div>
          <div className="md:col-span-2">
            <CheckList items={faqs.map((f) => f.q)} />
            <div className="mt-8 space-y-6">
              {faqs.map((f) => (
                <div key={f.q}>
                  <div className="text-lg text-cream">{f.q}</div>
                  <p className="mt-2 text-stone">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <FooterCTA
        headline="Talk to us before you spend it."
        sub="30-minute discovery call. We'll tell you exactly which model fits — or that Veep isn't the right answer."
      />
    </>
  );
}
