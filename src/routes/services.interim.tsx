import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, CheckList, Eyebrow } from "@/components/site/primitives";
import { FooterCTA } from "@/components/site/FooterCTA";

export const Route = createFileRoute("/services/interim")({
  head: () => ({
    meta: [
      { title: "Interim Executive Coverage — Veep" },
      { name: "description", content: "An operator owns the seat while you search, transition, or reset." },
      { property: "og:title", content: "Interim Executive Coverage — Veep" },
      { property: "og:description", content: "Preserve the permanent search. Keep the work moving. Hand off cleanly." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Interim"
        title="Own the seat,"
        italic="protect the search."
        sub="When an executive departs or a search stalls, Veep places an operator who owns the full function — and hands it off cleanly when your permanent hire lands."
      />

      <Section>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <Eyebrow>What interim covers</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl text-cream">Full ownership, not advice.</h2>
            <p className="mt-4 text-stone">A Veep interim operator is accountable for the outcome for the term of the engagement.</p>
          </div>
          <CheckList items={[
            "CFO, COO, or CMO transitions",
            "Post-acquisition executive coverage",
            "Failed-search rescue",
            "Try-before-hire evaluations",
            "PE transition or new CEO reset",
            "Structured handoff to the permanent hire",
          ]} />
        </div>
      </Section>

      <Section tone="muted">
        <div className="max-w-3xl">
          <Eyebrow>Economics</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight text-cream">$35k–$90k / month.</h2>
          <p className="mt-4 text-stone">Priced to full-seat ownership. Term is typically 3–9 months with structured handoff milestones.</p>
        </div>
      </Section>

      <FooterCTA />
    </>
  );
}
