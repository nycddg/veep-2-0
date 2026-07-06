import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, Eyebrow } from "@/components/site/primitives";
import { FooterCTA } from "@/components/site/FooterCTA";

export const Route = createFileRoute("/operators")({
  head: () => ({
    meta: [
      { title: "Operators — Veep" },
      { name: "description", content: "Veep operators have led through growth, transformation, fundraising, and operational change." },
      { property: "og:title", content: "Operators — Veep" },
      { property: "og:description", content: "$1B+ raised. $3B+ revenue created. $2B+ costs saved. 20+ exits." },
    ],
  }),
  component: Page,
});

const operators = [
  { n: "Maya R.", r: "Fractional C-Suite · CFO", tags: ["Series B/C", "Lender readiness", "Post-close"] },
  { n: "Jordan K.", r: "Interim COO", tags: ["Multi-site", "Ops turnaround", "Integration"] },
  { n: "Priya S.", r: "Fractional CRO", tags: ["GTM redesign", "Enterprise motion", "Pricing"] },
  { n: "Andre M.", r: "CFO / Sponsor bench", tags: ["Independent sponsor", "M&A", "Family office"] },
  { n: "Lena T.", r: "Chief of Staff", tags: ["Founder overwhelm", "Board reporting", "Ops rhythm"] },
  { n: "Ravi B.", r: "Interim CTO", tags: ["Platform rebuild", "Team stabilization", "Vendor reset"] },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="The network"
        title="Operators who have"
        italic="already done the work."
        sub="Not learning on your business. Veep operators have led CFO, COO, CRO, and CTO functions through growth, fundraising, transformation, and transitions."
      />

      <Section>
        <div className="grid md:grid-cols-3 gap-6">
          {operators.map((o) => (
            <div key={o.n} className="rounded-3xl border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-forest/15 grid place-items-center font-serif text-forest text-lg">
                  {o.n[0]}
                </div>
                <div>
                  <div className="font-serif text-xl text-cream">{o.n}</div>
                  <div className="text-xs text-stone">{o.r}</div>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {o.tags.map((t) => (
                  <span key={t} className="rounded-full bg-secondary text-cream text-xs px-3 py-1">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="max-w-2xl">
          <Eyebrow>Are you an operator?</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight text-cream">Join the network.</h2>
          <p className="mt-4 text-stone">
            We work with senior CFOs, COOs, CROs, CTOs, and Chiefs of Staff who
            want to run pivotal engagements — not fill hours.
          </p>
        </div>
      </Section>

      <FooterCTA headline="Every engagement starts with the right operator." />
    </>
  );
}
