import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, Eyebrow } from "@/components/site/primitives";
import { FooterCTA } from "@/components/site/FooterCTA";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Veep" },
      { name: "description", content: "Advisory, fractional, interim, and sprint engagement models — plus a portfolio bench and AI-powered operators." },
      { property: "og:title", content: "Services — Veep" },
      { property: "og:description", content: "Four ways to engage a senior operator, matched to how urgent and how deep the work is." },
    ],
  }),
  component: Page,
});

const modes = [
  { t: "Advisory", d: "Executive judgment for a founder, CEO, or leadership team.", price: "$5k–$12.5k / month" },
  { t: "Fractional", d: "A senior operator runs the function on an ongoing basis.", price: "$12k–$35k / month" },
  { t: "Interim", d: "An operator owns the seat while you search or transition.", price: "$35k–$90k / month" },
  { t: "Sprint", d: "A senior operator ships one critical initiative with a clear endpoint.", price: "Scoped per outcome" },
];

const services = [
  { to: "/services/fractional-cfo" as const, t: "Fractional C-suite", d: "Any C-suite role — CFO, COO, CTO, CRO, CMO, or CPO — at inflection points." },
  { to: "/services/interim" as const, t: "Interim coverage", d: "Own the executive seat during search, transition, or reset." },
  { to: "/services/executive-bench" as const, t: "Executive Bench", d: "Annual capacity partnership for portfolios and holdcos." },
  { to: "/services/ai-operators" as const, t: "AI-powered operators", d: "Senior operators governing unlimited AI staff." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Leadership,"
        italic="not labor."
        sub="Veep is not selling cheap executive time. Veep is selling the right level of leadership for the work — for as long as you need it."
      />

      <Section>
        <div className="grid md:grid-cols-4 gap-4">
          {modes.map((m) => (
            <div key={m.t} className="rounded-3xl border border-border bg-card p-6">
              <Eyebrow>{m.t}</Eyebrow>
              <p className="mt-4 text-sm text-stone leading-relaxed">{m.d}</p>
              <div className="mt-6 font-serif text-xl text-cream">{m.price}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="max-w-2xl">
          <Eyebrow>Deep dives</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight text-cream">
            Wedges we lead with.
          </h2>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-4">
          {services.map((s) => (
            <Link key={s.to} to={s.to} className="group rounded-3xl border border-border bg-card p-8 hover:shadow-elegant transition">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="font-serif text-2xl text-cream">{s.t}</div>
                  <p className="mt-3 text-stone text-sm max-w-md">{s.d}</p>
                </div>
                <ArrowUpRight className="text-forest group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <FooterCTA />
    </>
  );
}
