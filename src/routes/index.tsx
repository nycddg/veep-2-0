import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BOOKING_URL } from "@/lib/booking";
import { LogoWall } from "@/components/site/LogoWall";
import { Testimonials } from "@/components/site/Testimonials";
import { OperatorProofCard } from "@/components/site/OperatorProofCard";
import { OutcomeTile } from "@/components/site/OutcomeTile";
import { EngagementTile } from "@/components/site/EngagementTile";
import { StepFlow } from "@/components/site/StepFlow";
import { TrustChip } from "@/components/site/TrustChip";

const faqs = [
  {
    q: "How fast can a Veep operator start?",
    a: "Most engagements begin in under 10 days from the discovery call. Interim coverage can begin in as little as 5 days when the trigger is urgent.",
  },
  {
    q: "How much does a fractional executive cost?",
    a: "Fractional C-suite engagements run $12k–$40k per month. Interim coverage runs $35k–$90k per month. Sprint engagements are scoped per outcome. Advisory retainers start at $5k per month.",
  },
  {
    q: "How is Veep different from a consultant?",
    a: "A consultant recommends. A Veep operator owns. Our operators step into your business as the accountable executive for the outcome — not as an outside advisor writing a deck.",
  },
  {
    q: "How is Veep different from executive search?",
    a: "Search firms take 4–6 months to place a permanent hire. Veep places a senior operator in the seat in under 10 days — so the work moves now, and the permanent search runs in parallel without pressure.",
  },
  {
    q: "What if it isn't a fit?",
    a: "Every engagement carries a 30-day fit guarantee. If the operator isn't right, we swap them or you walk with no fee owed for the remaining term.",
  },
  {
    q: "Who is Veep for?",
    a: "Series A–C founders and CEOs, PE and family-office portfolio companies, and holdcos that need senior executive capacity — CFO, COO, CRO, or CTO — without committing to a full-time hire.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Executive Leadership, on Demand | Veep" },
      {
        name: "description",
        content:
          "Veep is a curated network of vetted operators — CFOs, COOs, CROs, CTOs. Buy the business outcome, not the hire. Matched in 72 hours, deployed in under 10 days.",
      },
      { property: "og:title", content: "Executive Leadership, on Demand | Veep" },
      {
        property: "og:description",
        content:
          "Senior operators who own the outcome — not consultants who recommend it. Matched in 72 hours. 30-day fit guarantee.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqSchema) }],
  }),
  component: Index,
});

const heroOperators = [
  { name: "Jian Yang", role: "Fractional CFO", chips: ["Ex-Industrious", "Real Estate"], tilt: -2, translateY: 16 },
  { name: "Vanessa Kwan", role: "Fractional CFO", chips: ["Ex-Goldman", "Consumer"], tilt: 3, translateY: -32 },
  { name: "Kostja Mirkovic", role: "Chief Revenue Officer", chips: ["Ex-LinkedIn", "B2B SaaS"], tilt: -4, translateY: 48 },
  { name: "Laura Merling", role: "Chief Operating Officer", chips: ["Ex-Google", "Mobility"], tilt: 2, translateY: 0 },
];

const outcomes = [
  { headline: "Close the raise", sub: "Rebuild the model, run diligence, negotiate terms — bridge to close in weeks, not quarters.", intent: "close-the-raise" },
  { headline: "Fix the forecast", sub: "Tighten reporting, cash discipline, and board-grade visibility inside 60 days.", intent: "fix-the-forecast" },
  { headline: "Integrate the acquisition", sub: "Stabilize ops, unify teams, and hit synergy targets after the deal closes.", intent: "integrate-the-acquisition" },
  { headline: "Unblock GTM", sub: "Reset pricing, install forecast cadence, and get founders off deals under $250k.", intent: "unblock-gtm" },
  { headline: "Ship the platform", sub: "Own the roadmap, ship what matters, and unstick engineering velocity.", intent: "ship-the-platform" },
  { headline: "Cover the seat", sub: "Interim leadership the day after departure. Search runs in parallel, without pressure.", intent: "cover-the-seat" },
];

const engagements = [
  { name: "Advisory", price: "$5k–$12.5k / mo", bestWhen: "Founder or CEO needs executive judgment on a cadence.", to: "/services" },
  { name: "Fractional", price: "$12k–$40k / mo", bestWhen: "A senior operator runs the function 1–3 days a week.", to: "/services", featured: true },
  { name: "Interim", price: "$35k–$90k / mo", bestWhen: "Full-seat ownership while the permanent search runs.", to: "/services" },
  { name: "Sprint", price: "Scoped / outcome", bestWhen: "One critical initiative, a clear endpoint, and an owner.", to: "/services" },
];

const pedigree = [
  "Google", "Meta", "Stripe", "LinkedIn", "Coinbase", "Airbnb", "Uber", "Shopify",
  "Goldman Sachs", "LVMH", "Deloitte", "Morning Brew", "AT&T", "Ford", "Etsy", "Bain",
];

function Index() {
  return (
    <>
      {/* SPLIT HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-20 md:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div className="space-y-9">
              <TrustChip label="72-hour match · 30-day fit guarantee" />

              <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl leading-[1.02] text-cream tracking-tight">
                Executive leadership,{" "}
                <span className="italic text-stone">on demand.</span>
                <br />
                <span className="text-stone">Not another hire.</span>
              </h1>

              <p className="text-lg md:text-xl text-stone max-w-xl leading-relaxed font-light">
                Companies buy business outcomes — not fractional executives. Veep is the
                curated network of vetted operators who own the work. Hiring is no longer the
                only way to lead.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-cream px-8 py-4 text-sm font-medium text-ink hover:bg-cream/90 transition-all inline-flex items-center gap-2 shadow-[0_0_60px_-10px_rgba(255,255,255,0.35)]"
                >
                  Book intro call <ArrowRight size={16} />
                </a>
                <Link
                  to="/"
                  hash="how-it-works"
                  className="text-sm text-cream/80 hover:text-cream underline underline-offset-8 decoration-white/20 hover:decoration-white/60 transition pb-1"
                >
                  See how it works
                </Link>
              </div>
            </div>

            {/* Right — floating roster proof */}
            <div className="relative min-h-[520px] flex items-center justify-center">
              <div className="absolute inset-0 bg-accent/10 blur-[120px] rounded-full" aria-hidden />
              <div className="relative grid grid-cols-2 gap-4 w-full max-w-lg">
                {heroOperators.map((op) => (
                  <OperatorProofCard key={op.name} {...op} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <LogoWall />

      {/* METRICS */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { k: "$1B+", v: "capital raised" },
              { k: "15+", v: "startup exits" },
              { k: "$2B+", v: "cost savings" },
              { k: "30M", v: "users served" },
            ].map((s) => (
              <div key={s.k}>
                <div className="font-serif text-4xl md:text-5xl text-cream tracking-tight">{s.k}</div>
                <div className="mt-2 text-[11px] font-medium tracking-[0.2em] uppercase text-stone-soft">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
              Buy the outcome
            </div>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-cream tracking-tight leading-[1.05]">
              What business problem needs an{" "}
              <span className="italic text-stone">owner?</span>
            </h2>
            <p className="mt-6 text-stone text-lg leading-relaxed">
              Skip the org chart debate. Pick the outcome that's stuck — we'll place a senior
              operator who owns it end-to-end.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {outcomes.map((o) => (
              <OutcomeTile key={o.headline} {...o} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY NOT HIRE OR CONSULT */}
      <section className="py-24 md:py-32 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
              Three ways to lead
            </div>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-cream tracking-tight leading-[1.05]">
              Hiring isn't the only way to get{" "}
              <span className="italic text-stone">executive leadership.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                t: "Hire full-time",
                sub: "4–6 months to close a search. Permanent salary. Wrong-hire risk lands on you.",
                dim: true,
              },
              {
                t: "Bring in a consultant",
                sub: "Delivers a deck and a recommendation. Doesn't own the outcome. Leaves before the work lands.",
                dim: true,
              },
              {
                t: "Deploy a Veep operator",
                sub: "Senior operator in the seat in under 10 days. Owns the outcome. Hands off cleanly. 30-day fit guarantee.",
                dim: false,
              },
            ].map((c) => (
              <div
                key={c.t}
                className={`rounded-3xl p-8 ${
                  c.dim
                    ? "border border-white/8 bg-white/[0.02]"
                    : "glass-card ring-1 ring-accent/40 shadow-[0_0_80px_-30px_hsl(from_var(--accent)_h_s_l_/_0.4)]"
                }`}
              >
                <h3 className={`font-serif text-2xl tracking-tight ${c.dim ? "text-stone" : "text-cream"}`}>
                  {c.t}
                </h3>
                <p className={`mt-5 text-sm leading-relaxed ${c.dim ? "text-stone-soft" : "text-cream/85"}`}>
                  {c.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 md:py-32 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
              How Veep works
            </div>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-cream tracking-tight leading-[1.05]">
              From call to operator in the seat —{" "}
              <span className="italic text-stone">in under 10 days.</span>
            </h2>
          </div>
          <StepFlow />
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="py-24 md:py-32 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
                Which engagement fits
              </div>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl text-cream tracking-tight leading-[1.05]">
                Priced to the scope.{" "}
                <span className="italic text-stone">Not the hour.</span>
              </h2>
            </div>
            <Link
              to="/pricing"
              className="text-sm text-cream/80 hover:text-cream underline underline-offset-8 decoration-white/20 hover:decoration-white/60 transition pb-1"
            >
              See full pricing →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {engagements.map((e) => (
              <EngagementTile key={e.name} {...e} />
            ))}
          </div>
        </div>
      </section>

      {/* OPERATOR CALIBER STRIP */}
      <section className="py-24 md:py-32 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
                The Veep roster
              </div>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl text-cream tracking-tight leading-[1.05]">
                26 vetted operators.{" "}
                <span className="italic text-stone">One curated match.</span>
              </h2>
              <p className="mt-6 text-stone text-lg leading-relaxed">
                An invite-only bench of senior CFOs, COOs, CROs, CMOs, CTOs, and Chiefs of
                People — each vetted for judgment, adaptability, and speed of execution.
              </p>
              <Link
                to="/operators"
                className="mt-8 inline-flex items-center gap-2 text-sm text-cream underline underline-offset-8 decoration-white/20 hover:decoration-white/60 pb-1"
              >
                Meet the roster <ArrowRight size={14} />
              </Link>
            </div>
            <div className="lg:col-span-7 grid grid-cols-4 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
              {pedigree.map((p) => (
                <div
                  key={p}
                  className="bg-background aspect-[3/2] flex items-center justify-center px-3"
                >
                  <span className="text-sm md:text-base text-cream/60 font-light tracking-tight text-center">
                    {p}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-24 md:py-32 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
              Anonymized case studies
            </div>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-cream tracking-tight leading-[1.05]">
              What operators unlock in the{" "}
              <span className="italic text-stone">first 90 days.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                tag: "Series B SaaS · Fractional CFO",
                trigger: "Board lost confidence in finance 60 days before a bridge round.",
                outcome: "Bridge closed in 42 days at target valuation.",
                metric: "$18M raised",
              },
              {
                tag: "PE portco · Interim COO",
                trigger: "COO exited two months after acquisition. Integration stalled.",
                outcome: "Permanent COO hired at month five. EBITDA +14%.",
                metric: "$6.2M annualized savings",
              },
              {
                tag: "Founder-led · Sprint",
                trigger: "GTM stalled at $8M ARR. Founder still owned every deal above $50k.",
                outcome: "Pipeline coverage 3.1x within 90 days.",
                metric: "+62% Q/Q pipeline",
              },
            ].map((c) => (
              <div key={c.tag} className="glass-card rounded-3xl p-7 flex flex-col">
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-accent">
                  {c.tag}
                </span>
                <p className="mt-6 text-sm text-stone leading-relaxed">
                  <span className="text-cream">Trigger. </span>
                  {c.trigger}
                </p>
                <p className="mt-3 text-sm text-stone leading-relaxed">
                  <span className="text-cream">Outcome. </span>
                  {c.outcome}
                </p>
                <div className="mt-8 pt-6 border-t border-white/10 font-serif text-2xl text-cream tracking-tight">
                  {c.metric}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs uppercase tracking-[0.2em] text-stone-soft">
            Client names withheld under NDA. References available on discovery call.
          </p>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-24 md:py-32 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Testimonials />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12">
          <div>
            <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
              Common questions
            </div>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-cream tracking-tight leading-[1.05]">
              Objections we hear —{" "}
              <span className="italic text-stone">and answer.</span>
            </h2>
            <Link
              to="/faq"
              className="mt-6 inline-block text-sm text-cream/80 hover:text-cream underline underline-offset-8 decoration-white/20 pb-1"
            >
              Full FAQ →
            </Link>
          </div>
          <div className="md:col-span-2 divide-y divide-white/10 border-y border-white/10">
            {faqs.map((f) => (
              <div key={f.q} className="py-7">
                <div className="font-serif text-xl text-cream tracking-tight">{f.q}</div>
                <p className="mt-3 text-stone leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-28 md:py-40 border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/10 blur-[140px] rounded-full max-w-3xl mx-auto" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-6xl text-cream tracking-tight leading-[1.05]">
            What critical initiative doesn't have an{" "}
            <span className="italic text-stone">owner right now?</span>
          </h2>
          <p className="mt-6 text-stone text-lg max-w-2xl mx-auto leading-relaxed">
            Book a 30-minute call. Matched in 72 hours. Deployed in under 10 days.
            30-day fit guarantee.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-cream px-8 py-4 text-sm font-medium text-ink hover:bg-cream/90 transition inline-flex items-center gap-2 shadow-[0_0_60px_-10px_rgba(255,255,255,0.35)]"
            >
              Book intro call <ArrowRight size={16} />
            </a>
            <Link
              to="/contact"
              search={{ intent: "audit" }}
              className="rounded-full border border-white/20 px-8 py-4 text-sm font-medium text-cream hover:bg-white/5 transition"
            >
              Request a capacity audit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
