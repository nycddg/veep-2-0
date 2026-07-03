import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, CheckList, Eyebrow } from "@/components/site/primitives";
import { FooterCTA } from "@/components/site/FooterCTA";

export const Route = createFileRoute("/services/ai-operators")({
  head: () => ({
    meta: [
      { title: "AI-powered Operators — Veep" },
      { name: "description", content: "A-list executives. Unlimited AI staff. Operator governs the work — AI executes routine tasks." },
      { property: "og:title", content: "AI-powered Operators — Veep" },
      { property: "og:description", content: "Department-level output without the department-level headcount." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="AI-powered"
        title="A-list executives."
        italic="Unlimited AI staff."
        sub="AI makes the operator more powerful. It does not replace the operator. You get department-level output without adding department-level headcount."
      />

      <Section>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { n: "01", t: "Operator governs", d: "The Veep operator owns the outcome, defines the work, and holds the standard." },
            { n: "02", t: "AI agents execute", d: "Routine and repeatable tasks — reporting, extraction, drafting, reconciliation — run under supervision." },
            { n: "03", t: "Operator reviews", d: "Every output is reviewed, edited, and directed by the senior operator before it reaches you." },
          ].map((s) => (
            <div key={s.n} className="rounded-3xl border border-border bg-card p-8">
              <div className="font-serif text-4xl text-forest">{s.n}</div>
              <div className="mt-4 font-serif text-2xl text-ink">{s.t}</div>
              <p className="mt-3 text-stone text-sm leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <Eyebrow>What this unlocks</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl text-ink">Leverage without dilution.</h2>
          </div>
          <CheckList items={[
            "More department-level output per operator",
            "Faster reporting and forecasting cycles",
            "Higher-quality first drafts of board and lender materials",
            "Lower total cost than adding headcount",
            "Governed by a senior operator, not by a tool",
          ]} />
        </div>
      </Section>

      <FooterCTA />
    </>
  );
}
