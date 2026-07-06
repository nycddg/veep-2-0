import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, Eyebrow } from "@/components/site/primitives";
import { FooterCTA } from "@/components/site/FooterCTA";

export const Route = createFileRoute("/operators")({
  head: () => ({
    meta: [
      { title: "Meet the Veep Operators | Fractional & Interim CXOs" },
      { name: "description", content: "Veep operators are senior CFOs, COOs, CROs, and CTOs with 15+ years running finance, ops, GTM, and product through growth, capital events, and transitions." },
      { property: "og:title", content: "Operators — Veep" },
      { property: "og:description", content: "$1B+ raised. $3B+ revenue created. $2B+ costs saved. 20+ exits." },
      { property: "og:url", content: "/operators" },
    ],
    links: [{ rel: "canonical", href: "/operators" }],
  }),
  component: Page,
});

const operators = [
  { n: "Maya R.", r: "Fractional CFO", pedigree: "15 yrs · ex-CFO, Morning Brew · led 3 Series C raises", tags: ["Series B/C", "Lender readiness", "Post-close"] },
  { n: "Jordan K.", r: "Interim COO", pedigree: "18 yrs · former COO, multi-site services · 4 integrations", tags: ["Multi-site", "Ops turnaround", "Integration"] },
  { n: "Priya S.", r: "Fractional CRO", pedigree: "12 yrs · ex-VP Sales, enterprise SaaS · $0→$40M ARR", tags: ["GTM redesign", "Enterprise motion", "Pricing"] },
  { n: "Andre M.", r: "CFO · Sponsor bench", pedigree: "20 yrs · 6 platform deals with independent sponsors", tags: ["Independent sponsor", "M&A", "Family office"] },
  { n: "Lena T.", r: "Chief of Staff", pedigree: "10 yrs · CoS to two Series C CEOs · ops rhythm rebuilds", tags: ["Founder overwhelm", "Board reporting", "Ops rhythm"] },
  { n: "Ravi B.", r: "Interim CTO", pedigree: "17 yrs · ex-VP Eng at Verizon · 2 platform rebuilds", tags: ["Platform rebuild", "Team stabilization", "Vendor reset"] },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="The network"
        title="Operators who have"
        italic="already done the work."
        sub="Veep operators are not learning on your business. They have led CFO, COO, CRO, and CTO functions through growth, fundraising, transformation, and transitions — and they bring that pattern-matching from day one."
      />

      <Section>
        <div className="grid md:grid-cols-3 gap-6">
          {operators.map((o) => (
            <div key={o.n} className="rounded-3xl border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-forest/15 grid place-items-center text-forest text-lg tracking-tight">
                  {o.n[0]}
                </div>
                <div>
                  <div className="text-xl text-cream tracking-tight">{o.n}</div>
                  <div className="text-xs text-stone">{o.r}</div>
                </div>
              </div>
              <p className="mt-5 text-sm text-stone leading-relaxed">{o.pedigree}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {o.tags.map((t) => (
                  <span key={t} className="rounded-full bg-secondary text-cream text-xs px-3 py-1">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-xs font-mono uppercase tracking-widest text-stone-soft">
          / Operator identities anonymized until engagement. Full profiles on discovery call.
        </p>
      </Section>

      <Section tone="muted">
        <div className="max-w-2xl">
          <Eyebrow>Are you an operator?</Eyebrow>
          <h2 className="mt-4 text-4xl md:text-5xl leading-tight text-cream">Join the network.</h2>
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
