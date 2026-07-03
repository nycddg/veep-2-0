import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, CheckList, Eyebrow } from "@/components/site/primitives";
import { FooterCTA } from "@/components/site/FooterCTA";
import { CompareTable } from "@/components/site/CompareTable";
import { TriggerBento } from "@/components/site/TriggerBento";

export const Route = createFileRoute("/for-companies")({
  head: () => ({
    meta: [
      { title: "For Companies — Veep" },
      { name: "description", content: "Fractional, interim, and sprint executive capacity for companies at pivotal business moments." },
      { property: "og:title", content: "For Companies — Veep" },
      { property: "og:description", content: "Senior operators who own the outcome, without the cost or delay of a full-time hire." },
    ],
  }),
  component: Page,
});

const objections = [
  {
    q: "We're already hiring for this role.",
    a: "Veep is often most useful while the search runs. The work keeps moving now, and the operator can help define what the permanent role should own.",
  },
  {
    q: "We're talking to consultants.",
    a: "Consultants are useful for analysis and recommendations. Veep is different when the issue is execution — the operator steps in and owns the outcome.",
  },
  {
    q: "We just need a freelancer.",
    a: "That may be right if the work is task-based. Veep is a better fit when the work requires senior judgment and cross-functional ownership.",
  },
  {
    q: "We're not ready for a full-time executive.",
    a: "That's exactly where Veep fits. Get the leadership you need now, without committing to a permanent hire before the role is fully clear.",
  },
  {
    q: "Fractional hasn't worked for us before.",
    a: "Usually that comes down to accountability. Veep is built around operators owning outcomes, with matching, onboarding, and transitions managed around the work.",
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="For companies"
        title="The work can't wait."
        italic="Neither should the leadership."
        sub="When you have an important outcome but no clear owner, Veep places a senior operator in your business quickly enough to matter."
      />

      <Section>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              t: "Fractional",
              d: "CFO, COO, or GTM leadership on a weekly cadence for the pivotal moment.",
              items: ["Capital raise", "Board reporting", "Finance function build"],
            },
            {
              t: "Interim",
              d: "Own the full seat while the permanent search runs.",
              items: ["CFO / COO transition", "Team stabilization", "Structured handoff"],
            },
            {
              t: "Sprint",
              d: "Ship one critical initiative with a clear endpoint.",
              items: ["GTM redesign", "M&A integration", "Pricing reset"],
            },
          ].map((p) => (
            <div key={p.t} className="rounded-3xl border border-border bg-card p-8">
              <Eyebrow>{p.t}</Eyebrow>
              <p className="mt-4 font-serif text-2xl text-ink">{p.d}</p>
              <div className="mt-6"><CheckList items={p.items} /></div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted"><TriggerBento /></Section>

      <Section><CompareTable /></Section>

      <Section>
        <div className="max-w-2xl">
          <Eyebrow>Common questions</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight text-ink">
            The objections we hear — and answer.
          </h2>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {objections.map((o) => (
            <div key={o.q} className="rounded-3xl border border-border bg-card p-6">
              <div className="font-serif text-xl text-ink">{o.q}</div>
              <p className="mt-3 text-stone text-sm leading-relaxed">{o.a}</p>
            </div>
          ))}
        </div>
      </Section>

      <FooterCTA />
    </>
  );
}
