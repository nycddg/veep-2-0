import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BOOKING_URL } from "@/lib/booking";
import heroHeadshot from "@/assets/operator-headshot.png.asset.json";
import { LogoWall } from "@/components/site/LogoWall";
import { Testimonials } from "@/components/site/Testimonials";
import { OperatorSpotlightChapter } from "@/components/site/OperatorSpotlightChapter";
import { OperatorCanvas } from "@/components/site/OperatorCanvas";
import { EngagementTile } from "@/components/site/EngagementTile";
import { StepFlow } from "@/components/site/StepFlow";
import { Check } from "lucide-react";
import { ObjectionList } from "@/components/site/ObjectionList";
import { ProblemDiagram } from "@/components/site/ProblemDiagram";
import { FooterCTA } from "@/components/site/FooterCTA";
import { Accordion } from "@/components/site/Accordion";
import { Reveal } from "@/components/site/Reveal";
import { ogImageMeta } from "@/lib/seo";

// ─────────────────────────────────────────────────────────────────────────────
// Content
// ─────────────────────────────────────────────────────────────────────────────

const alternatives = [
  { t: "Permanent hire", d: "Months to hire. Permanent commitment. Wrong-hire risk lands on you, and the work waits for the search to finish." },
  { t: "Consulting firms", d: "Smart recommendations. Then they hand you a deck and the work still lands on you or your team." },
  { t: "Freelancers and advisors", d: "Profiles to browse. Variable seniority. More decisions and oversight for the founder, not fewer." },
];

const benefits = [
  { t: "Own the work", d: "Operators step in to take responsibility for critical work, not advise from the sidelines." },
  { t: "Deploy in under 10 days", d: "Matched to the work. Shortlist in 72 hours. Onboarded and in the work inside 10 days." },
  { t: "Senior-only roster", d: "75+ vetted senior operators across finance, GTM, operations, product, people, technology, and strategy." },
  { t: "No permanent commitment", d: "Senior ownership without the commit. Engagements can pause, extend, or scale with the work." },
  { t: "Clean handoff", d: "When the work lands or a permanent hire arrives, you get documentation, context, and continuity." },
  { t: "30-day fit guarantee", d: "If the operator isn't the right fit, we swap them or you walk. Exit the agreement with no penalties." },
];

const engagements = [
  {
    name: "Advisory",
    price: "From $3k / mo",
    bestWhen: "Senior judgment and direction for high-stakes decisions: board and investor prep, fundraise strategy, executive decisions, and strategic tradeoffs. Not full ownership of execution.",
    to: "/pricing" as const,
    hash: "tiers",
  },
  {
    name: "Sprint",
    price: "From $25k / scope",
    bestWhen: "Time-boxed. Clear scope. Clear outcome. Fast start: GTM reset, fundraise, margin work, diligence, or transaction prep across 4–12 weeks.",
    to: "/pricing" as const,
    hash: "tiers",
  },
  {
    name: "Operator",
    price: "From $15k / mo",
    bestWhen: "Embedded senior ownership of critical work across finance, GTM, operations, product, or people. Build or reset a function, resolve leadership gaps (typically 3–12 months).",
    to: "/pricing" as const,
    hash: "tiers",
    featured: true,
  },
  {
    name: "Pod",
    price: "From $30k / mo",
    bestWhen: "Multiple operators coordinated against a larger work program: GTM + RevOps, finance + ops, AI initiatives, or an operating reset across the company.",
    to: "/pricing" as const,
    hash: "tiers",
  },
];

const differentiators = [
  {
    dim: "Time to start",
    veep: "Shortlist in 72 hours, deployed in under 10 days",
    old: "Months to hire, weeks to scope, or endless profile browsing",
  },
  {
    dim: "Ownership",
    veep: "Senior operator owns the work",
    old: "Recommendations, candidates, tools, or hourly help",
  },
  {
    dim: "OUTCOMES",
    veep: "High quality work immediately",
    old: "After the search, after the deck, or with variable quality",
  },
  {
    dim: "Cost",
    veep: "Priced to scope and level of support",
    old: "Search fees plus salary, or large consulting engagements",
  },
  {
    dim: "Seniority",
    veep: "Vetted senior operators only",
    old: "Variable; junior consultants for leverage or unvetted freelancers",
  },
  {
    dim: "Exit",
    veep: "Clean handoff with documentation",
    old: "Deck delivered, search continues, or dependency grows",
  },
  {
    dim: "Risk",
    veep: "30-day fit guarantee. Swap or walk.",
    old: "You own the miss",
  },
];

const cases = [
  {
    tag: "B2B SAAS",
    role: "Finance Operating Partner",
    trigger: "CEO was preparing for a first institutional round without a financial model, investor materials, or fundraising experience.",
    outcome: "Built a 3-year model, diligence-ready CAC/LTV dashboards, and coached the CEO through term sheets and investor meetings.",
    metric: "$6M raised in 6 weeks",
    figure: "$6M",
    kicker: "Raised in 6 weeks",
  },
  {
    tag: "SOFTWARE STUDIO",
    role: "Growth Operating Partner",
    trigger: "An $8M product development studio was stuck firefighting, with inconsistent project profitability and no scalable path into AI.",
    outcome: "Installed standardized project scoping and staffing, built an AI GTM and delivery framework, and hired a Director of AI.",
    metric: "Project margins up 25%",
  },
  {
    tag: "PODCAST PUBLISHER",
    role: "Business Operating Partner",
    trigger: "A profitable, bootstrapped publisher with millions in revenue had never raised outside capital and had no financial model or growth plan.",
    outcome: "Built the company's first financial model, defined use of proceeds, and sourced investors representing over a third of the round.",
    metric: "Sourced 35% of capital",
  },
];

// Mini FAQ — non-dupes of ObjectionList ("Before you book")
const faqs = [
  {
    q: "What is a Veep operator?",
    a: "A Veep operator is a vetted senior operator who steps into your business to own critical work before a permanent executive hire makes sense. Depending on the need, that operator may be a CFO, COO, CRO, CMO, CTO, product leader, people leader, chief of staff, or functional expert.",
  },
  {
    q: "How is Veep different from a consulting firm?",
    a: "A consultant recommends. A Veep operator owns. Our operators step into the work, set the rhythm, build the materials, make decisions with the team, and move the priority forward.",
  },
  {
    q: "How is Veep different from executive search?",
    a: "Search is for permanent hiring. Veep is for critical work that needs senior ownership before the permanent hire makes sense. The work moves now, while the permanent hiring decision stays open.",
  },
  {
    q: "Where does Veep operate?",
    a: "Veep operators work remotely across North America and Europe, with on-site availability for key moments such as board meetings, offsites, integration weeks, and major operating milestones.",
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
  serviceType: "Senior operator deployment",
  provider: { "@type": "Organization", name: "Veep" },
  areaServed: ["North America", "Europe"],
  description:
    "Veep places vetted senior operators (CFOs, COOs, CROs, CMOs, CTOs, product, people, and functional leaders) inside founder-led companies to own critical work in under 10 days.",
  offers: [
    { "@type": "Offer", name: "Advisory", priceSpecification: { "@type": "PriceSpecification", price: "3000", priceCurrency: "USD" } },
    { "@type": "Offer", name: "Sprint", priceSpecification: { "@type": "PriceSpecification", price: "25000", priceCurrency: "USD" } },
    { "@type": "Offer", name: "Operator", priceSpecification: { "@type": "PriceSpecification", price: "15000", priceCurrency: "USD" } },
    { "@type": "Offer", name: "Pod", priceSpecification: { "@type": "PriceSpecification", price: "30000", priceCurrency: "USD" } },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Route
// ─────────────────────────────────────────────────────────────────────────────

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Veep: Senior Operators for Work That Can't Wait" },
      {
        name: "description",
        content:
          "Veep helps founder-led companies bring in vetted senior operators to own critical work. Matched in 72 hours, deployed in under 10 days. 30-day fit guarantee.",
      },
      { property: "og:title", content: "Veep: Senior Operators for Work That Can't Wait" },
      {
        property: "og:description",
        content:
          "Veep helps founder-led companies bring in vetted senior operators to own critical work. Matched in 72 hours, deployed in under 10 days. 30-day fit guarantee.",
      },
      { property: "og:url", content: "https://www.veep.work/" },
      { property: "og:type", content: "website" },
      ...ogImageMeta(),
    ],
    links: [
      { rel: "canonical", href: "https://www.veep.work/" },
      {
        rel: "preload",
        as: "image",
        href: heroHeadshot.url,
        fetchPriority: "high",
      },
    ],
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

function InlineCTA({
  label = "Book intro call",
  mode = "book",
  centered = false,
}: {
  label?: string;
  mode?: "book" | "contact";
  /** Testimonial-section variant: centered pill, no fine print. */
  centered?: boolean;
}) {
  const className =
    "group motion-cta cta-accent rounded-full px-7 py-3.5 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background inline-flex items-center justify-center gap-2 min-h-11";
  const pill =
    mode === "contact" ? (
      <Link to="/contact" className={className}>
        {label}
      </Link>
    ) : (
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {label}
      </a>
    );
  if (centered) {
    return <div className="mt-6 flex justify-center">{pill}</div>;
  }
  return (
    <div className="flex flex-col items-start gap-4.5">
      {pill}
      <span className="text-xs text-stone-soft tracking-wide">
        30-minute call · Reply within 1 business day · 30-day fit guarantee
      </span>
    </div>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow">{children}</div>;
}

function CaseCard({
  c,
  featured = false,
}: {
  c: (typeof cases)[number];
  featured?: boolean;
}) {
  const pad = featured ? "p-7 md:p-8" : "p-5 sm:p-7";

  const body = (
    <>
      {featured && c.figure && c.kicker ? (
        <div className="mt-4" role="img" aria-label={c.metric}>
          <div
            aria-hidden="true"
            className="proof-figure stat-figure text-[4.125rem] md:text-[4.95rem] lg:text-[6.6rem] text-cream leading-none"
          >
            {c.figure}
          </div>
          <div
            aria-hidden="true"
            className="mt-3 font-serif font-medium text-xl md:text-2xl text-cream tracking-tight leading-snug"
          >
            {c.kicker}
          </div>
        </div>
      ) : (
        <div className="mt-4 font-serif font-medium text-xl text-cream tracking-tight leading-snug text-balance">
          {c.metric}
        </div>
      )}
      <div className="mt-4 mono-label">Assigned veep: {c.role}</div>
      <p className="mt-4 text-sm text-stone leading-relaxed">
        <span className="text-cream">Trigger. </span>
        {c.trigger}
      </p>
      <p className="mt-3 text-sm text-stone leading-relaxed">
        <span className="text-cream">Outcome. </span>
        {c.outcome}
      </p>
    </>
  );

  return (
    <div
      className={`motion-row-wash flex h-full flex-col rounded-[15px] bg-surface-card ${pad}`}
    >
      <span className="eyebrow">{c.tag}</span>
      {featured ? (
        <div className="flex min-h-0 flex-1 flex-col justify-center">{body}</div>
      ) : (
        body
      )}
    </div>
  );
}

function Index() {
  return (
    <>
      {/* Hero */}
      <section id="overview" className="relative overflow-hidden scroll-mt-20">
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 md:pt-24 pb-20 md:pb-28 flex flex-col items-center text-center">
          <h1 className="motion-fade-up font-medium text-[2.25rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl tracking-tight sm:leading-[0.98] text-cream text-balance allow-wrap break-words mb-6">
            Because a job always needs to be done.
          </h1>

          <p className="motion-fade-up motion-delay-1 text-base sm:text-lg text-stone max-w-2xl leading-relaxed mb-10">
            Vetted senior operators to own urgent priorities and high-stakes
            decisions before you are ready, willing, or able to make
            permanent hires.
          </p>

          <div className="motion-fade-up motion-delay-2 flex flex-wrap justify-center gap-x-6 sm:gap-x-8 gap-y-3 mb-14 md:mb-16 text-sm text-cream/90">
            {["Invite-only network", "72-hour match", "30-day fit guarantee"].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <Check size={18} className="text-accent" strokeWidth={2.5} />
                {t}
              </div>
            ))}
          </div>

          <div className="motion-fade-up motion-delay-3 w-full">
            <OperatorCanvas />
          </div>

          <div className="motion-fade-up motion-delay-4 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-5 mt-12 sm:mt-20 w-full">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group motion-cta cta-accent rounded-full px-7 py-3.5 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background inline-flex items-center justify-center gap-2 min-h-11"
            >
              Book intro call
            </a>
            <Link
              to="/"
              hash="how"
              className="motion-link text-sm text-cream/85 hover:text-cream underline underline-offset-8 hover:underline-offset-4 decoration-white/25 hover:decoration-white/60 pb-1"
            >
              See how it works
            </Link>
          </div>
        </div>
      </section>

      <LogoWall />

      <div className="flex flex-col">
      {/* What Veep is — after Problem on mobile */}
      <Reveal as="section" className="order-2 md:order-1">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <SectionEyebrow>MEET VEEP</SectionEyebrow>
          <p className="mt-6 font-serif text-xl sm:text-2xl md:text-3xl text-cream tracking-tight leading-snug">
            An invite-only network of operating partners ready to own the work that can't wait. Founders, CEOs, and investment firms hire Veep when important work has no owner across finance, GTM, operations, product, people, fundraising, and strategy.
          </p>
          <p className="mt-6 text-sm text-stone">
            Built for companies with real revenue and growing complexity that need a critical outcome now.
          </p>
        </div>
      </Reveal>

      {/* Problem — before Meet Veep on mobile */}
      <Reveal as="section" id="problem" className="order-1 md:order-2 bg-surface-raised py-14 sm:py-16 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mb-12 md:mb-14 text-center md:text-left">
            <SectionEyebrow>The moment you're in</SectionEyebrow>
            <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
              Your business is too important for ownerless work.
            </h2>
          </div>

          <ProblemDiagram />

          <div className="mt-20 md:mt-24 motion-hairline pt-12">
            <div className="mono-label mb-8">Instead of</div>
            <div className="motion-stagger grid md:grid-cols-3 gap-y-10">
              {alternatives.map((a) => (
                <div
                  key={a.t}
                  className="border-t border-white/10 pt-8 first:border-t-0 first:pt-0 md:border-t-0 md:pt-0 md:border-l md:border-white/10 md:pl-10 md:first:border-l-0 md:first:pl-0 md:pr-10 md:last:pr-0"
                >
                  <div className="font-serif font-medium text-xl text-cream/90 tracking-tight">{a.t}</div>
                  <p className="mt-2 text-base text-stone leading-relaxed">{a.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
      </div>

      {/* Solution */}
      <Reveal as="section" id="solution" className="border-t border-white/10 md:border-t-0 py-14 sm:py-16 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <SectionEyebrow>What we do</SectionEyebrow>
              <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
                Built for the job to be done.
              </h2>
              <p className="mt-8 text-stone text-base md:text-lg leading-relaxed">
                Tell us what's in the way, not moving, or landing back on you to solve.
                We shape the work and define the outcomes, recommend the right level of
                support (Advisory, Sprint, Operator, or Pod), and match operators to the job.
              </p>
              <p className="mt-4 text-stone text-base md:text-lg leading-relaxed">
                When the work lands or the permanent hire arrives, we hand off with
                results and documentation, not ongoing dependency.
              </p>
              <p className="mt-6 eyebrow hidden md:block !text-cream">
                Vetted senior operators who step in to own critical work, now.
              </p>
            </div>
            <div className="motion-stagger divide-y divide-white/10 lg:border-l lg:border-white/10 lg:pl-14">
              <div className="eyebrow pb-6">The Veep model</div>
              {[
                ["Start with the work, not the title", "We diagnose the priority, urgency, and outcome before deciding whether the answer is advisory, a sprint, an operator, a pod, or recurring operating capacity."],
                ["Senior only", "Every operator is a vetted senior leader: former founders, CFOs, COOs, CROs, CMOs, CTOs, as well as product and people leaders."],
                ["Priced to scope", "Advisory, Sprint, Operator, or Pod structured around the work and outcomes."],
                ["Guaranteed fit", "30 days to prove it. If the operator is not right, we swap them or you walk."],
              ].map(([t, d]) => (
                <div key={t} className="py-6 last:pb-0">
                  <div className="font-serif font-medium text-xl text-cream tracking-tight">{t}</div>
                  <p className="mt-2 text-base text-stone leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* Operators + network impact — shared chapter (source of truth for
          For Funds too; see OperatorSpotlightChapter) */}
      <Reveal as="section" id="operators" className="bg-surface-raised py-14 sm:py-16 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-8">
          <OperatorSpotlightChapter />
        </div>
      </Reveal>

      {/* Benefits */}
      <Reveal as="section" id="benefits" className="hidden md:block py-14 sm:py-16 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mb-12 md:mb-14">
            <SectionEyebrow>What you get</SectionEyebrow>
            <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
              Senior ownership on your terms.
            </h2>
          </div>
          <div className="motion-stagger grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {benefits.map((b, i) => (
              <div key={b.t} className="motion-row-wash rounded-[15px] bg-surface-card p-6 sm:p-7">
                <div className="eyebrow">
                  0{i + 1}
                </div>
                <div className="mt-3 font-serif font-medium text-xl text-cream tracking-tight leading-tight">
                  {b.t}
                </div>
                <p className="mt-2 text-base text-stone leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <InlineCTA />
          </div>
        </div>
      </Reveal>

      {/* Engagements */}
      <Reveal as="section" id="offer" className="bg-surface-band py-14 sm:py-16 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-14">
            <div className="max-w-2xl">
              <SectionEyebrow>Engagements</SectionEyebrow>
              <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
                Four engagement shapes. One promise.
              </h2>
            </div>
            <Link
              to="/pricing"
              className="group motion-link inline-flex items-center gap-2 text-sm text-cream/90 hover:text-cream underline underline-offset-8 hover:underline-offset-4 decoration-white/30 hover:decoration-white/70 pb-1"
            >
              See full pricing <ArrowRight size={14} className="motion-arrow" />
            </Link>
          </div>
          <div className="motion-stagger grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {engagements.map((e) => (
              <EngagementTile key={e.name} {...e} />
            ))}
          </div>
          <p className="mt-10 text-sm text-stone max-w-3xl">
            Lead with the work. Choose the shape after the work is clear.
          </p>
        </div>
      </Reveal>

      {/* How it works */}
      <Reveal as="section" id="how" className="py-14 sm:py-16 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mb-12 md:mb-14">
            <SectionEyebrow>How It Works</SectionEyebrow>
            <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
              From first call to operator in the seat in under 10 days.
            </h2>
          </div>
          <StepFlow />
        </div>
      </Reveal>

      {/* Proof */}
      <Reveal as="section" id="proof" className="bg-surface-raised py-14 sm:py-16 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mb-12 md:mb-14 hidden md:block">
            <SectionEyebrow>Proof</SectionEyebrow>
            <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap hidden md:block">
              What senior operators change in the first 90 days.
            </h2>
          </div>

          <div className="motion-stagger hidden md:grid md:grid-cols-2 gap-4 md:gap-5">
            <CaseCard c={cases[0]} featured />
            <div className="flex flex-col gap-4 md:gap-5">
              <CaseCard c={cases[1]} />
              <CaseCard c={cases[2]} />
            </div>
          </div>

          <div className="motion-stagger hidden md:grid mt-12 md:mt-20 grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-10 motion-hairline-y">
            {[
              { k: "75+", v: "vetted operators" },
              { k: "72h", v: "to shortlist" },
              { k: "<10d", v: "to deploy" },
              { k: "30d", v: "fit guarantee" },
            ].map((s) => (
              <div key={s.k}>
                <div className="stat-figure text-4xl md:text-5xl text-cream">{s.k}</div>
                <div className="mt-2 mono-label font-medium">
                  {s.v}
                </div>
              </div>
            ))}
          </div>

          <div className="md:mt-24">
            <Testimonials />
          </div>

          <div className="mt-16">
            <InlineCTA centered />
          </div>
        </div>
      </Reveal>

      {/* Why Veep */}
      <Reveal as="section" id="vs" className="hidden md:block bg-surface-band py-14 sm:py-16 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mb-12 md:mb-14">
            <SectionEyebrow>Why Veep</SectionEyebrow>
            <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
              How Veep compares to the alternatives.
            </h2>
          </div>

          <div className="grid grid-cols-[auto_minmax(min-content,1fr)_minmax(min-content,1fr)] border-y border-white/10 divide-y divide-white/10">
            <div className="hidden md:grid md:grid-cols-subgrid md:col-span-3">
              <div className="p-5 mono-label">Dimension</div>
              <div className="p-5 mono-label">The old way</div>
              <div className="p-5 eyebrow">Veep</div>
            </div>
            {differentiators.map((r) => (
              <div key={r.dim} className="group grid md:grid-cols-subgrid md:col-span-3 gap-y-2 gap-x-0 p-5 md:p-0">
                <div className="md:p-5 mono-label transition-colors duration-200 group-hover:text-cream">
                  {r.dim}
                </div>
                <div className="md:p-5 text-base text-stone leading-relaxed">{r.old}</div>
                <div className="md:p-5 text-base text-cream leading-relaxed md:bg-accent/[0.06] light:md:bg-foreground/5 motion-row-wash">
                  {r.veep}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* For Funds */}
      <Reveal as="section" id="portfolios" className="spotlight-invert py-14 sm:py-16 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 md:gap-14 items-center">
            <div className="lg:col-span-3 space-y-5">
              <SectionEyebrow>FOR FUNDS</SectionEyebrow>
              <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
                Portfolio companies don't pause for a search.
              </h2>
              <p className="text-base text-stone leading-relaxed">
                Transactions create volatility before close, after close, and during integration. Leadership seats open. The plan is clear, but the company often lacks the senior capacity to own the work. Veep gives transaction-active firms a retained roster of vetted operators, ready to support diligence, transition, integration, value creation, and interim leadership needs across the portfolio.
              </p>
            </div>
            <div className="lg:col-span-2 flex flex-col items-start lg:items-end gap-4">
              <Link
                to="/for-portfolios"
                className="motion-cta cta-accent-dark rounded-full px-7 py-3.5 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background min-h-11 inline-flex items-center justify-center"
              >
                See how portfolio rosters work
              </Link>
              <Link
                to="/contact"
                search={{ intent: "audit" }}
                className="group motion-link inline-flex items-center gap-2 text-sm text-cream/85 hover:text-cream underline underline-offset-8 hover:underline-offset-4 decoration-white/25 hover:decoration-white/60"
              >
                Request a capacity audit <ArrowRight size={14} className="motion-arrow" />
              </Link>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Before you book (objections) */}
      <Reveal as="section" className="py-14 sm:py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mb-12 md:mb-14">
            <SectionEyebrow>Before you book</SectionEyebrow>
            <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
              The questions founders ask on the first call.
            </h2>
          </div>
          <ObjectionList />
          <div className="mt-14 hidden md:block">
            <InlineCTA />
          </div>
        </div>
      </Reveal>

      {/* Mini FAQ (non-dupes + link) */}
      <Reveal as="section" id="faq" className="hidden md:block bg-surface-raised py-14 sm:py-16 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mb-12 md:mb-14">
            <SectionEyebrow>FAQ</SectionEyebrow>
            <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
              Straight answers.
            </h2>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {faqs.map((f) => (
              <Accordion key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
          <div className="mt-8 text-sm text-stone">
            More detail on the{" "}
            <Link to="/faq" className="motion-link text-cream underline underline-offset-4 decoration-white/40 hover:decoration-white">
              full FAQ page
            </Link>.
          </div>
        </div>
      </Reveal>

      {/* Final CTA */}
      <FooterCTA />
    </>
  );
}