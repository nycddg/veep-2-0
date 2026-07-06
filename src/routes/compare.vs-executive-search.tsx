import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, Eyebrow } from "@/components/site/primitives";
import { FooterCTA } from "@/components/site/FooterCTA";
import { Check, X } from "lucide-react";

export const Route = createFileRoute("/compare/vs-executive-search")({
  head: () => ({
    meta: [
      { title: "Interim CFO vs Executive Search | Veep" },
      {
        name: "description",
        content:
          "Executive search takes 4–6 months. Veep places an interim operator in the seat in under 10 days — and preserves the permanent search.",
      },
      { property: "og:title", content: "Veep vs Executive Search" },
      { property: "og:description", content: "Keep the work moving while the permanent search runs." },
      { property: "og:url", content: "/compare/vs-executive-search" },
    ],
    links: [{ rel: "canonical", href: "/compare/vs-executive-search" }],
  }),
  component: Page,
});

const rows = [
  { k: "Time to seat filled", veep: "Under 10 days", other: "4–6 months (search + notice)" },
  { k: "Cost", veep: "$35k–$90k / month, no placement fee", other: "25–33% of first-year comp (~$100k–$250k)" },
  { k: "Commitment", veep: "3–9 months, term flexible", other: "Permanent; long unwind if wrong" },
  { k: "Risk", veep: "30-day fit guarantee — swap or walk", other: "Placement warranty only; disruption on exit" },
  { k: "Complementary?", veep: "Yes — interim runs while search runs", other: "Complements Veep; not exclusive" },
  { k: "Best when", veep: "Work can't wait; role scope still evolving", other: "Role is stable and the seat is long-term" },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Compare"
        title="Veep vs"
        italic="executive search."
        sub="They're not competitors — they're complements. Veep places an operator in the seat now so the search doesn't have to be rushed."
        index="02"
        category="Compare"
      />

      <Section>
        <div className="rounded-3xl border border-white/8 bg-card overflow-hidden">
          <div className="grid grid-cols-3 border-b border-white/8">
            <div className="p-5 font-mono text-[11px] tracking-widest text-stone-soft uppercase">Dimension</div>
            <div className="p-5 text-cream border-l border-white/8">Veep (Interim)</div>
            <div className="p-5 text-stone border-l border-white/8">Executive search</div>
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
          <Eyebrow>How buyers use both</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl text-cream leading-tight">
            Run search on the timeline it deserves. Run the business on the timeline it needs.
          </h2>
          <p className="mt-4 text-stone">
            A Veep interim operator often helps write the spec for the permanent hire — and hands off to them cleanly on day one.
          </p>
        </div>
      </Section>

      <FooterCTA />
    </>
  );
}
