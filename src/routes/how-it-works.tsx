import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { FooterCTA } from "@/components/site/FooterCTA";
import { StepFlow } from "@/components/site/StepFlow";

const cols = [
  {
    tag: "Executive search",
    speed: "4–6 months to close",
    ownership: "Permanent hire — you own the risk",
    cost: "20–30% first-year comp, up front",
    exit: "None. Wrong-hire risk lands on you.",
    dim: true,
  },
  {
    tag: "Consulting firm",
    speed: "6–10 weeks to kickoff",
    ownership: "Recommendations, not the seat",
    cost: "$150–400k+ per engagement",
    exit: "Deck delivered, follow-on scope proposed",
    dim: true,
  },
  {
    tag: "Freelance operator",
    speed: "Fast, but variable",
    ownership: "Task-level, not cross-functional",
    cost: "Hourly, unpredictable",
    exit: "Ends when the calendar ends",
    dim: true,
  },
  {
    tag: "Veep",
    speed: "72-hour match · under 10 days to seat",
    ownership: "Senior operator owns the outcome",
    cost: "Scope-priced, monthly or fixed",
    exit: "Clean handoff. 30-day fit guarantee.",
    dim: false,
  },
];

const principles = [
  { t: "Sell the moment.", d: "The question is rarely 'do you need a CFO'. It's 'what critical initiative has no owner right now'." },
  { t: "Sell the outcome.", d: "Operators are matched to a specific business result — not a title, not a timesheet." },
  { t: "Operator-led.", d: "Judgment and accountability sit with a senior operator, not a slide deck or an AI tool." },
  { t: "Managed model.", d: "You focus on the outcome. Veep manages matching, contracting, onboarding, and transitions." },
];

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How Veep Works — From Call to Operator in Under 10 Days" },
      { name: "description", content: "Veep vs executive search, consulting, and freelancers. How the match, deploy, and handoff process actually works — plus the AI-powered leverage model." },
      { property: "og:title", content: "How Veep Works" },
      { property: "og:description", content: "Match in 72 hours. Deploy in under 10 days. Operator owns the outcome, then hands off cleanly." },
      { property: "og:url", content: "/how-it-works" },
    ],
    links: [{ rel: "canonical", href: "/how-it-works" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="Matched in 72 hours."
        italic="In the seat in under 10 days."
        sub="Veep is a managed model. You bring the moment. We run the match, the contracting, the onboarding, and the handoff — so the operator's first day is spent on the outcome."
        secondaryLabel="See the four engagements"
        secondaryTo="/services"
      />

      {/* The 4 steps */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
              The path
            </div>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-cream tracking-tight leading-[1.05]">
              Four steps.{" "}
              <span className="italic text-stone">No pitch deck required.</span>
            </h2>
          </div>
          <StepFlow />
        </div>
      </section>

      {/* Comparison — replaces /compare */}
      <section id="vs" className="py-24 md:py-32 border-t border-white/10 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
              Why not hire or consult
            </div>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-cream tracking-tight leading-[1.05]">
              Every alternative solves one slice.{" "}
              <span className="italic text-stone">Veep is the whole answer.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {cols.map((c) => (
              <div
                key={c.tag}
                className={`rounded-3xl p-7 flex flex-col ${
                  c.dim
                    ? "border border-white/8 bg-white/[0.02]"
                    : "glass-card ring-1 ring-accent/40 shadow-[0_0_80px_-30px_hsl(from_var(--accent)_h_s_l_/_0.4)]"
                }`}
              >
                <div className={`text-[10px] font-medium uppercase tracking-[0.25em] ${c.dim ? "text-stone-soft" : "text-accent"}`}>
                  {c.tag}
                </div>
                <div className="mt-6 space-y-4">
                  {[
                    { k: "Speed", v: c.speed },
                    { k: "Ownership", v: c.ownership },
                    { k: "Cost", v: c.cost },
                    { k: "Exit", v: c.exit },
                  ].map((row) => (
                    <div key={row.k}>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-stone-soft">
                        {row.k}
                      </div>
                      <div className={`mt-1.5 text-sm leading-snug ${c.dim ? "text-stone" : "text-cream"}`}>
                        {row.v}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI-powered — replaces /services/ai-operators */}
      <section id="ai" className="py-24 md:py-32 border-t border-white/10 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
                AI-powered operators
              </div>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl text-cream tracking-tight leading-[1.05]">
                A-list executives.{" "}
                <span className="italic text-stone">Unlimited AI staff.</span>
              </h2>
              <p className="mt-6 text-stone text-lg leading-relaxed">
                AI makes the operator more powerful. It does not replace the operator.
                You get department-level output without adding department-level headcount.
              </p>
            </div>
            <div className="lg:col-span-7 grid gap-4">
              {[
                { n: "01", t: "Operator governs", d: "The Veep operator owns the outcome, defines the work, and holds the standard." },
                { n: "02", t: "AI agents execute", d: "Routine and repeatable tasks — reporting, extraction, drafting, reconciliation — run under supervision." },
                { n: "03", t: "Operator reviews", d: "Every output is edited and directed by the senior operator before it reaches you." },
              ].map((s) => (
                <div key={s.n} className="glass-card rounded-3xl p-6 flex gap-6">
                  <div className="font-serif text-3xl text-accent">{s.n}</div>
                  <div>
                    <div className="font-serif text-2xl text-cream tracking-tight">{s.t}</div>
                    <p className="mt-2 text-sm text-stone leading-relaxed">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 md:py-32 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
              What we run on
            </div>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-cream tracking-tight leading-[1.05]">
              Four principles.{" "}
              <span className="italic text-stone">Every engagement.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {principles.map((p) => (
              <div key={p.t} className="rounded-3xl border border-white/8 bg-white/[0.02] p-7">
                <div className="font-serif text-2xl text-cream tracking-tight">{p.t}</div>
                <p className="mt-4 text-sm text-stone leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterCTA />
    </>
  );
}
