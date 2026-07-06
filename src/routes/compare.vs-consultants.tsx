import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, Eyebrow } from "@/components/site/primitives";
import { FooterCTA } from "@/components/site/FooterCTA";
import { Check, X } from "lucide-react";

export const Route = createFileRoute("/compare/vs-consultants")({
  head: () => ({
    meta: [
      { title: "Fractional Executive vs Consultant | Veep" },
      {
        name: "description",
        content:
          "A consultant recommends. A Veep operator owns. Side-by-side comparison of accountability, cost, timeline, and outcomes.",
      },
      { property: "og:title", content: "Veep vs Consultants" },
      { property: "og:description", content: "When you need an owner, not a recommendation." },
      { property: "og:url", content: "/compare/vs-consultants" },
    ],
    links: [{ rel: "canonical", href: "/compare/vs-consultants" }],
  }),
  component: Page,
});

const rows = [
  { k: "Deliverable", veep: "Owned outcome", other: "Report and recommendations" },
  { k: "Accountability", veep: "Named senior operator on the org chart", other: "Firm-level; junior consultants execute" },
  { k: "Timeline to start", veep: "Under 10 days", other: "4–8 weeks (statement of work, staffing, kickoff)" },
  { k: "Cost", veep: "$12k–$90k / month, scope-priced", other: "$150–$400k+ per engagement, hours-priced" },
  { k: "Handoff", veep: "Documented, clean, at the end of term", other: "Deck + follow-on scope" },
  { k: "Team", veep: "One senior operator, in the seat", other: "Partner + managers + analysts" },
  { k: "Best when", veep: "You need execution and ownership", other: "You need external analysis or brand cover" },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Compare"
        title="Veep vs"
        italic="management consultants."
        sub="Consultants are great for analysis and brand cover. Veep is different: a senior operator steps in and owns the outcome — no deck, no dependency."
        index="01"
        category="Compare"
      />

      <Section>
        <div className="rounded-3xl border border-white/8 bg-card overflow-hidden">
          <div className="grid grid-cols-3 border-b border-white/8">
            <div className="p-5 font-mono text-[11px] tracking-widest text-stone-soft uppercase">Dimension</div>
            <div className="p-5 text-cream border-l border-white/8">Veep</div>
            <div className="p-5 text-stone border-l border-white/8">Consulting firm</div>
          </div>
          {rows.map((r) => (
            <div key={r.k} className="grid grid-cols-3 border-b border-white/8 last:border-b-0">
              <div className="p-5 text-sm text-stone">{r.k}</div>
              <div className="p-5 text-sm text-cream border-l border-white/8 flex items-start gap-2">
                <Check size={16} className="text-accent-gold shrink-0 mt-0.5" />
                <span>{r.veep}</span>
              </div>
              <div className="p-5 text-sm text-stone border-l border-white/8 flex items-start gap-2">
                <X size={16} className="text-stone-soft shrink-0 mt-0.5" />
                <span>{r.other}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="max-w-2xl">
          <Eyebrow>When each fits</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl text-cream leading-tight">
            Consultants are the right call when the answer is unknown. Veep is the right call when the answer is known and the work isn't happening.
          </h2>
        </div>
      </Section>

      <FooterCTA />
    </>
  );
}
