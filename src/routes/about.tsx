import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, Eyebrow } from "@/components/site/primitives";
import { FooterCTA } from "@/components/site/FooterCTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Veep" },
      { name: "description", content: "Veep places vetted senior operators inside companies to own the outcome — without the cost, delay, or commitment of a full-time executive." },
      { property: "og:title", content: "About — Veep" },
      { property: "og:description", content: "Operator-led. AI-powered. Built for pivotal business moments." },
    ],
  }),
  component: Page,
});

const principles = [
  { t: "Sell the moment.", d: "The question is rarely 'do you need a CFO'. It's 'what critical initiative has no owner right now'." },
  { t: "Sell the outcome.", d: "Operators are matched to a specific business result — not a title, not a timesheet." },
  { t: "Operator-led.", d: "Judgment and accountability sit with a senior operator, not a slide deck or an AI tool." },
  { t: "Managed model.", d: "You focus on the outcome. Veep manages matching, contracting, onboarding, and transitions." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Built for the"
        italic="pivotal business moment."
        sub="Veep sits in the gap between executive search, consulting, and freelancers. When a company has an important outcome and no clear owner, we place a senior operator inside the business — quickly enough to matter."
      />

      <Section>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <Eyebrow>Principles</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight text-cream">What we run on.</h2>
          </div>
          <div className="grid gap-4">
            {principles.map((p) => (
              <div key={p.t} className="rounded-3xl border border-border bg-card p-6">
                <div className="font-serif text-xl text-cream">{p.t}</div>
                <p className="mt-2 text-stone text-sm">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <div className="max-w-3xl">
          <Eyebrow>Track record</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight text-cream">
            $1B+ raised. $3B+ revenue created. $2B+ costs saved. 20+ exits.
          </h2>
          <p className="mt-4 text-stone">
            Operator experience includes Verizon, Industrious, Morning Brew, New Stand, and Oliver Wyman.
          </p>
        </div>
      </Section>

      <FooterCTA />
    </>
  );
}
