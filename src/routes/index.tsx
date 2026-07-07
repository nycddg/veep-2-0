import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BOOKING_URL } from "@/lib/booking";
import { LogoWall } from "@/components/site/LogoWall";
import { Testimonials } from "@/components/site/Testimonials";
import { OperatorProofCard } from "@/components/site/OperatorProofCard";
import { EngagementTile } from "@/components/site/EngagementTile";
import { StepFlow } from "@/components/site/StepFlow";
import { TrustChip } from "@/components/site/TrustChip";
import { ObjectionList } from "@/components/site/ObjectionList";
import { FooterCTA } from "@/components/site/FooterCTA";

// ─────────────────────────────────────────────────────────────────────────────
// Content
// ─────────────────────────────────────────────────────────────────────────────

const heroOperators = [
  { name: "Jian Yang", role: "Fractional CFO", chips: ["Ex-Industrious", "Real Estate"], tilt: -2, translateY: 16 },
  { name: "Vanessa Kwan", role: "Fractional CFO", chips: ["Ex-Goldman", "Consumer"], tilt: 3, translateY: -32 },
  { name: "Kostja Mirkovic", role: "Chief Revenue Officer", chips: ["Ex-LinkedIn", "B2B SaaS"], tilt: -4, translateY: 48 },
  { name: "Laura Merling", role: "Chief Operating Officer", chips: ["Ex-Google", "Mobility"], tilt: 2, translateY: 0 },
];

const problems = [
  {
    t: "The exec seat is open — and the work isn't waiting.",
    d: "A CFO exits mid-quarter. A COO leaves after the acquisition closes. The team stalls while the board asks who's driving.",
  },
  {
    t: "The raise slipped and the model won't hold up.",
    d: "Diligence is coming and the forecast doesn't reconcile. You need board-grade finance now, not in six months.",
  },
  {
    t: "GTM plateaued and the founder still owns every deal.",
    d: "Pipeline coverage is thin, pricing is soft, and the CEO is a bottleneck. You need a revenue owner who can install rigor this quarter.",
  },
  {
    t: "Ops is a mess and headcount won't fix it.",
    d: "The company outran its systems. You need a senior operator to rebuild the machine — not another IC to babysit chaos.",
  },
];

const alternatives = [
  { t: "Retained search", d: "4–6 months to close. 20–30% first-year comp. Wrong-hire risk lands on you." },
  { t: "Consulting firms", d: "$150–400k for a deck. Recommends, doesn't own. Leaves before the work lands." },
  { t: "Job boards & freelancers", d: "Weeks of sourcing. Junior candidates. No accountability for the outcome." },
];

const benefits = [
  { t: "Own the outcome", d: "Operators step in as the accountable executive, not an outside advisor." },
  { t: "Deploy in under 10 days", d: "Shortlist in 72 hours. Onboarded and driving the work inside 10 days." },
  { t: "Senior-only bench", d: "150+ invite-only CFOs, COOs, CROs, and CTOs. No consultants. No juniors." },
  { t: "No 6-figure retainers", d: "Priced to the scope, not the hour. 40–80% less than search plus a full-time hire." },
  { t: "Clean handoff", d: "When the outcome lands or a permanent hire arrives, you get documentation — not dependency." },
  { t: "30-day fit guarantee", d: "If the operator isn't right, we swap them or you walk. No fee owed for the remaining term." },
];

const engagements = [
  {
    name: "Advisory",
    price: "$5k–$12.5k / mo",
    bestWhen: "Founder or CEO needs executive judgment on a cadence — board prep, hiring, fundraise strategy.",
    to: "/pricing" as const,
  },
  {
    name: "Fractional",
    price: "$12k–$40k / mo",
    bestWhen: "A senior CXO runs the function 1–3 days a week. Best for scaling companies pre-full-time hire.",
    to: "/pricing" as const,
    featured: true,
  },
  {
    name: "Interim",
    price: "$35k–$90k / mo",
    bestWhen: "Full-seat ownership while the permanent search runs. Best when a CXO exits or a seat is vacant.",
    to: "/pricing" as const,
  },
  {
    name: "Sprint",
    price: "Scoped / outcome",
    bestWhen: "One critical initiative — fundraise, integration, GTM reset — with a clear endpoint and an owner.",
    to: "/pricing" as const,
  },
];

const differentiators = [
  {
    dim: "Time to seat",
    veep: "Under 10 days",
    old: "4–6 months (search) · 6–10 weeks (consulting)",
  },
  {
    dim: "Ownership",
    veep: "Owns the outcome as the executive",
    old: "Recommendations, permanent hire risk, or hourly help",
  },
  {
    dim: "Cost",
    veep: "$5k–$90k/mo, priced to scope",
    old: "20–30% first-year comp + salary, or $150–400k engagements",
  },
  {
    dim: "Seniority",
    veep: "Invite-only senior operators only",
    old: "Variable — junior consultants, unknown freelancers",
  },
  {
    dim: "Exit",
    veep: "Clean handoff to permanent hire, documented",
    old: "Deck delivered, follow-on scope proposed, or wrong-hire lawsuit",
  },
  {
    dim: "Risk",
    veep: "30-day fit guarantee — swap or walk",
    old: "None — you own the miss",
  },
];

const cases = [
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
];

const faqs = [
  {
    q: "What is a fractional CXO?",
    a: "A fractional CXO is a senior executive (CFO, COO, CRO, CTO) who runs a function part-time — typically 1–3 days a week — instead of joining full-time. You get executive judgment and ownership without a permanent salary.",
  },
  {
    q: "How fast can a Veep operator start?",
    a: "Shortlist in 72 hours. Operator in the seat in under 10 days. Interim coverage can begin in as little as 5 days when the trigger is urgent.",
  },
  {
    q: "How much does a fractional CXO cost?",
    a: "Fractional runs $12k–$40k per month. Interim runs $35k–$90k per month. Advisory starts at $5k per month. Sprint engagements are scoped per outcome.",
  },
  {
    q: "How is Veep different from a consulting firm?",
    a: "A consultant recommends. A Veep operator owns. Our operators step into your business as the accountable executive for the outcome — not as an outside advisor writing a deck.",
  },
  {
    q: "How is Veep different from executive search?",
    a: "Search firms take 4–6 months to place a permanent hire. Veep places a senior operator in the seat in under 10 days — so the work moves now, and the permanent search runs in parallel without pressure.",
  },
  {
    q: "Who is Veep for?",
    a: "Series A–C founders and CEOs of scaling companies ($3M–$150M revenue), plus PE and family-office portfolio companies that need senior CFO, COO, CRO, or CTO capacity without committing to a full-time hire.",
  },
  {
    q: "What if it isn't a fit?",
    a: "Every engagement carries a 30-day fit guarantee. If the operator isn't right, we swap them or you walk with no fee owed for the remaining term.",
  },
  {
    q: "Where does Veep operate?",
    a: "Veep operators work remotely across North America and Europe with on-site availability for key moments — board meetings, offsites, integration weeks.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────────────────────────────────────

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Fractional CXO placement",
  provider: { "@type": "Organization", name: "Veep" },
  areaServed: ["North America", "Europe"],
  description:
    "Veep places senior fractional and interim CXOs — CFO, COO, CRO, CTO — inside scaling companies in under 10 days.",
  offers: [
    { "@type": "Offer", name: "Advisory", priceSpecification: { "@type": "PriceSpecification", price: "5000-12500", priceCurrency: "USD" } },
    { "@type": "Offer", name: "Fractional", priceSpecification: { "@type": "PriceSpecification", price: "12000-40000", priceCurrency: "USD" } },
    { "@type": "Offer", name: "Interim", priceSpecification: { "@type": "PriceSpecification", price: "35000-90000", priceCurrency: "USD" } },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Route
// ─────────────────────────────────────────────────────────────────────────────

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fractional CXO in Under 10 Days — Veep" },
      {
        name: "description",
        content:
          "Veep places a senior fractional CXO — CFO, COO, CRO, CTO — inside your scaling company in under 10 days. Operator-led. 30-day fit guarantee.",
      },
      { property: "og:title", content: "Fractional CXO in Under 10 Days — Veep" },
      {
        property: "og:description",
        content:
          "Get a senior CFO, COO, CRO, or CTO owning the outcome — matched in 72 hours, deployed in under 10 days. 30-day fit guarantee.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: Index,
});

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

function InlineCTA({ label = "Book intro call" }: { label?: string }) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-cream px-7 py-3.5 text-sm font-medium text-ink hover:bg-cream/90 transition inline-flex items-center gap-2 shadow-[0_0_60px_-10px_rgba(255,255,255,0.35)]"
      >
        {label} <ArrowRight size={16} />
      </a>
      <span className="text-xs text-stone-soft tracking-wide">
        30-minute call · Reply within 1 business day · 30-day fit guarantee
      </span>
    </div>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
      {children}
    </div>
  );
}

function Index() {
  return (
    <>
      {/* 1 — HERO */}
      <section id="overview" className="relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-x-0 top-0 h-[520px] bg-accent/10 blur-[140px] rounded-full max-w-3xl mx-auto pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-20 md:pb-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-9">
              <TrustChip label="72-hour match · 10-day deploy · 30-day fit guarantee" />

              <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl leading-[1.02] text-cream tracking-tight">
                Get a fractional CXO owning the outcome in under 10 days —{" "}
                <span className="italic text-stone">without a 90-day search.</span>
              </h1>

              <p className="text-lg md:text-xl text-stone max-w-xl leading-relaxed font-light">
                Veep places a senior CFO, COO, CRO, or CTO inside your scaling company as the
                accountable executive — matched in 72 hours, in the seat in under 10 days.
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
                  hash="how"
                  className="text-sm text-cream/80 hover:text-cream underline underline-offset-8 decoration-white/20 hover:decoration-white/60 transition pb-1"
                >
                  See how it works
                </Link>
              </div>
            </div>

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

      {/* 2 — WHAT IS VEEP (extractable AI-search definition) */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <SectionEyebrow>What Veep is</SectionEyebrow>
          <p className="mt-6 font-serif text-2xl md:text-3xl text-cream tracking-tight leading-snug">
            Veep is a fractional CXO firm that places senior CFO, COO, CRO, and CTO operators
            inside scaling companies in under 10 days.
          </p>
          <p className="mt-4 text-sm text-stone">
            Built for Series A–C founders and CEOs. 150+ vetted operators. 30-day fit guarantee.
          </p>
        </div>
      </section>

      {/* 3 — PROBLEM */}
      <section id="problem" className="py-24 md:py-32 border-t border-white/10 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <SectionEyebrow>The moment you're in</SectionEyebrow>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-cream tracking-tight leading-[1.05]">
              You don't have six months to hire the executive{" "}
              <span className="italic text-stone">you need this quarter.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((p) => (
              <div key={p.t} className="glass-card rounded-3xl p-7">
                <h3 className="font-serif text-xl text-cream tracking-tight leading-snug">{p.t}</h3>
                <p className="mt-4 text-sm text-stone leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {alternatives.map((a) => (
              <div key={a.t} className="rounded-3xl border border-white/8 bg-white/[0.02] p-6">
                <div className="text-[10px] uppercase tracking-[0.2em] text-stone-soft">Instead of</div>
                <div className="mt-3 font-serif text-xl text-stone tracking-tight">{a.t}</div>
                <p className="mt-3 text-sm text-stone-soft leading-relaxed">{a.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — SOLUTION */}
      <section id="solution" className="py-24 md:py-32 border-t border-white/10 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionEyebrow>What we do</SectionEyebrow>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl text-cream tracking-tight leading-[1.05]">
                A senior operator in the seat —{" "}
                <span className="italic text-stone">owning the outcome, not a deck.</span>
              </h2>
              <p className="mt-8 text-stone text-lg leading-relaxed">
                Tell us the initiative that's stuck. We match one or two senior CXOs from an
                invite-only bench of 150+ operators — CFOs, COOs, CROs, CTOs who've led at
                Stripe, Google, LinkedIn, Goldman, and Meta. They start inside 10 days as the
                accountable executive.
              </p>
              <p className="mt-4 text-stone text-lg leading-relaxed">
                When the outcome lands or a permanent hire arrives, we hand off — with
                documentation, not dependency.
              </p>
            </div>
            <div className="glass-card rounded-3xl p-10 space-y-6">
              <div className="text-[10px] uppercase tracking-[0.25em] text-accent">The Veep model</div>
              {[
                ["Match to outcome, not title", "We diagnose the trigger and match a CXO to it — not the org chart."],
                ["Senior only", "Every operator is a former CFO, COO, CRO, or CTO. Invite-only bench."],
                ["Priced to scope", "Advisory, Fractional, Interim, or Sprint — $5k–$90k/mo. No hourly billing."],
                ["Guaranteed fit", "30 days to prove it. Swap the operator or walk."],
              ].map(([t, d]) => (
                <div key={t} className="border-t border-white/10 pt-5 first:border-0 first:pt-0">
                  <div className="font-serif text-xl text-cream tracking-tight">{t}</div>
                  <p className="mt-2 text-sm text-stone leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5 — BENEFITS */}
      <section id="benefits" className="py-24 md:py-32 border-t border-white/10 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <SectionEyebrow>What you get</SectionEyebrow>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-cream tracking-tight leading-[1.05]">
              Executive capacity —{" "}
              <span className="italic text-stone">without the executive hire.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <div key={b.t} className="glass-card rounded-3xl p-7">
                <div className="font-mono text-[10px] tracking-[0.2em] text-accent">
                  0{i + 1}
                </div>
                <div className="mt-5 font-serif text-2xl text-cream tracking-tight leading-tight">
                  {b.t}
                </div>
                <p className="mt-3 text-sm text-stone leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-14">
            <InlineCTA />
          </div>
        </div>
      </section>

      {/* 6 — OFFER / ENGAGEMENTS */}
      <section id="offer" className="py-24 md:py-32 border-t border-white/10 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <SectionEyebrow>Engagements</SectionEyebrow>
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

      {/* 7 — HOW IT WORKS */}
      <section id="how" className="py-24 md:py-32 border-t border-white/10 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <SectionEyebrow>How it works</SectionEyebrow>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-cream tracking-tight leading-[1.05]">
              From intro call to operator in the seat —{" "}
              <span className="italic text-stone">in under 10 days.</span>
            </h2>
          </div>
          <StepFlow />
        </div>
      </section>

      {/* 8 — PROOF */}
      <section id="proof" className="py-24 md:py-32 border-t border-white/10 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <SectionEyebrow>Proof</SectionEyebrow>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-cream tracking-tight leading-[1.05]">
              What operators unlock in the{" "}
              <span className="italic text-stone">first 90 days.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {cases.map((c) => (
              <div key={c.tag} className="glass-card rounded-3xl p-7 flex flex-col">
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-accent">
                  {c.tag}
                </span>
                <p className="mt-6 text-sm text-stone leading-relaxed">
                  <span className="text-cream">Trigger. </span>{c.trigger}
                </p>
                <p className="mt-3 text-sm text-stone leading-relaxed">
                  <span className="text-cream">Outcome. </span>{c.outcome}
                </p>
                <div className="mt-8 pt-6 border-t border-white/10 font-serif text-2xl text-cream tracking-tight">
                  {c.metric}
                </div>
              </div>
            ))}
          </div>

          <div id="operators" className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-10 border-y border-white/10 scroll-mt-20">
            {[
              { k: "150+", v: "vetted operators" },
              { k: "72h", v: "to shortlist" },
              { k: "<10d", v: "to deploy" },
              { k: "30d", v: "fit guarantee" },
            ].map((s) => (
              <div key={s.k}>
                <div className="font-serif text-4xl md:text-5xl text-cream tracking-tight">{s.k}</div>
                <div className="mt-2 text-[11px] font-medium tracking-[0.2em] uppercase text-stone-soft">
                  {s.v}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <Testimonials />
          </div>

          <div className="mt-16">
            <InlineCTA />
          </div>
        </div>
      </section>

      {/* 9 — DIFFERENTIATION */}
      <section id="vs" className="py-24 md:py-32 border-t border-white/10 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <SectionEyebrow>Why Veep</SectionEyebrow>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-cream tracking-tight leading-[1.05]">
              The old way vs.{" "}
              <span className="italic text-stone">the operator way.</span>
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 overflow-hidden divide-y divide-white/10">
            <div className="hidden md:grid grid-cols-3 bg-white/[0.03]">
              <div className="p-5 text-[10px] uppercase tracking-[0.2em] text-stone-soft">Dimension</div>
              <div className="p-5 text-[10px] uppercase tracking-[0.2em] text-stone-soft">The old way</div>
              <div className="p-5 text-[10px] uppercase tracking-[0.2em] text-accent">Veep</div>
            </div>
            {differentiators.map((r) => (
              <div key={r.dim} className="grid md:grid-cols-3 gap-2 md:gap-0 p-5 md:p-0">
                <div className="md:p-5 font-mono text-[11px] uppercase tracking-widest text-stone-soft">
                  {r.dim}
                </div>
                <div className="md:p-5 text-sm text-stone leading-relaxed">{r.old}</div>
                <div className="md:p-5 text-sm text-cream leading-relaxed md:bg-accent/[0.04]">
                  {r.veep}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — FOR PORTFOLIOS (secondary audience band) */}
      <section id="portfolios" className="py-24 md:py-32 border-t border-white/10 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-10 md:p-14 grid lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3 space-y-5">
              <SectionEyebrow>For PE, VC, and family-office portfolios</SectionEyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-cream tracking-tight leading-[1.1]">
                Portfolio-wide executive capacity — on standby, deployable in days.
              </h2>
              <p className="text-stone leading-relaxed">
                We run capacity audits across your portfolio, map exec risk per company, and
                place operators the moment a seat opens or a value-creation initiative stalls.
              </p>
            </div>
            <div className="lg:col-span-2 flex lg:justify-end">
              <Link
                to="/contact"
                search={{ intent: "audit" }}
                className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-cream hover:bg-white/5 transition"
              >
                Request a capacity audit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 11 — OBJECTIONS */}
      <section className="py-24 md:py-32 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <SectionEyebrow>Before you book</SectionEyebrow>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-cream tracking-tight leading-[1.05]">
              The questions founders ask{" "}
              <span className="italic text-stone">on the first call.</span>
            </h2>
          </div>
          <ObjectionList />
          <div className="mt-14">
            <InlineCTA />
          </div>
        </div>
      </section>

      {/* 12 — FAQ */}
      <section id="faq" className="py-24 md:py-32 border-t border-white/10 scroll-mt-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <SectionEyebrow>FAQ</SectionEyebrow>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-cream tracking-tight leading-[1.05]">
              Straight answers.
            </h2>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {faqs.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="cursor-pointer flex items-start justify-between gap-6 text-cream">
                  <span className="font-serif text-xl tracking-tight">{f.q}</span>
                  <span className="text-accent text-xl leading-none pt-1 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-stone leading-relaxed text-sm max-w-3xl">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 text-sm text-stone">
            More detail on the{" "}
            <Link to="/faq" className="text-cream underline underline-offset-4 decoration-white/30 hover:decoration-white/70">
              full FAQ page
            </Link>.
          </div>
        </div>
      </section>

      {/* 13 — FINAL CTA */}
      <FooterCTA />
    </>
  );
}