import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BOOKING_URL } from "@/lib/booking";
import heroHeadshot from "@/assets/operator-headshot.png.asset.json";
import { LogoWall } from "@/components/site/LogoWall";
import { Testimonials } from "@/components/site/Testimonials";
import { OperatorSpotlightChapter } from "@/components/site/OperatorSpotlightChapter";
import { OperatorCanvas } from "@/components/site/OperatorCanvas";
import { ClientStrip } from "@/components/site/ClientStrip";
import { EngagementTile } from "@/components/site/EngagementTile";
import { StepFlow } from "@/components/site/StepFlow";
import { ProblemDiagram } from "@/components/site/ProblemDiagram";
import { MandateCatalog } from "@/components/site/MandateCatalog";
import { PlatformStrata } from "@/components/site/PlatformStrata";
import { homeProofCases } from "@/lib/proof-cases";
import { FooterCTA } from "@/components/site/FooterCTA";
import { Accordion } from "@/components/site/Accordion";
import { Reveal } from "@/components/site/Reveal";
import { ogImageMeta } from "@/lib/seo";

// ─────────────────────────────────────────────────────────────────────────────
// Content
// ─────────────────────────────────────────────────────────────────────────────

const alternatives = [
  { t: "Permanent hire", d: "Months to recruit, heavy fees, and permanent commitment before the role is proven. The business waits while the search runs." },
  { t: "Consulting firms", d: "Recommendations without operating accountability. Once the slides are delivered, implementation lands back on your team." },
  { t: "Freelancers and advisors", d: "Profiles to vet and variable seniority. More coordination and quality risk for leadership, not less." },
];

const benefits = [
  { t: "Revenue that repeats", d: "Clear pricing, forecast discipline, and a weekly commercial cadence so growth stops depending on the founder closing every deal." },
  { t: "Margins that hold up", d: "Pinpoint where delivery or operations bleed margin and give managers the numbers and authority to fix it." },
  { t: "Numbers built for scrutiny", d: "Models, unit economics, and data rooms reconciled contract by contract so leadership walks into boardrooms and diligence composed." },
  { t: "Responsive as software", d: "Assemble senior leadership, execution specialists, and governed AI workflows around live priorities without adding permanent overhead." },
  { t: "Capabilities that compound", d: "Ownership includes the finish. Every engagement hands over playbooks, models, and systems your team keeps running." },
  { t: "Backed by Veep governance", d: "Scoped in 72 hours, started in under 10 days, with a 30-day guarantee and Veep oversight on quality and continuity." },
];

const engagements = [
  {
    name: "Advisory",
    price: "From $3k / mo",
    bestWhen: "Senior operating judgment for high-stakes calls: board and investor prep, capital strategy, and strategic tradeoffs. Your team runs execution.",
    to: "/pricing" as const,
    hash: "tiers",
  },
  {
    name: "Sprint",
    price: "From $25k / scope",
    bestWhen: "One defined business outcome carried from scope to handoff, typically in 4 to 12 weeks: diligence prep, GTM reset, margin work, or market launch.",
    to: "/pricing" as const,
    hash: "tiers",
  },
  {
    name: "Operator",
    price: "From $15k / mo",
    bestWhen: "Embedded senior leadership running a core function or priority across finance, GTM, operations, product, or people until handoff or scale.",
    to: "/pricing" as const,
    hash: "tiers",
    featured: true,
  },
  {
    name: "Pod",
    price: "From $30k / mo",
    bestWhen: "One accountable lead orchestrating specialists across functions for launches, post-close integrations, operating resets, or AI-enabled transformation.",
    to: "/pricing" as const,
    hash: "tiers",
  },
];

const differentiators = [
  {
    dim: "Time to move",
    veep: "Scoped in 72 hours, started in under 10 days",
    old: "Months of executive search, slow scoping, or profile browsing",
  },
  {
    dim: "Accountability",
    veep: "Senior operating partner owns delivery, backed by Veep",
    old: "Slide decks, recruiter shortlists, or unmanaged contractors",
  },
  {
    dim: "Leverage",
    veep: "Senior operators, proven playbooks, and governed AI workflows",
    old: "One person's hours or generic frameworks",
  },
  {
    dim: "Cost model",
    veep: "Scoped up front, built to flex as priorities shift. Never billed by the hour.",
    old: "Heavy search fees plus fixed headcount, or open-ended consulting",
  },
  {
    dim: "Seniority",
    veep: "Operators who have held the seat. No juniors or career consultants.",
    old: "Junior consulting leverage or unvetted marketplace talent",
  },
  {
    dim: "What lasts",
    veep: "Working systems, playbooks, and clean transfer to your team",
    old: "Recommendations on a shelf or ongoing vendor dependency",
  },
  {
    dim: "Downside risk",
    veep: "30-day guarantee. Fix it, swap, or walk.",
    old: "You absorb the wrong hire or stalled implementation",
  },
];

const cases = homeProofCases;

const faqs = [
  {
    q: "Is this right for my business?",
    a: "You are a founder, CEO, owner-operator, or lean fund leader with a critical priority that needs senior ownership and institutional firepower: getting diligence-ready, building repeatable revenue, expanding margins, opening a new market, or filling a leadership gap.",
  },
  {
    q: "How do companies engage Veep?",
    a: "Either through an individual mandate (Advisory from $3k/month, Sprints from $25k, Embedded Operators from $15k/month, Pods from $30k/month, plus Interim Leadership and Agent Teams) or a Managed Operating Partnership when leadership wants a partner at the table across stages.",
  },
  {
    q: "How fast can work begin?",
    a: "Operating engagements are scoped in 72 hours and started in under 10 days. Urgent interim coverage can move faster when a transition cannot wait.",
  },
  {
    q: "Who actually carries the work?",
    a: "Every lead operating partner has held the seat at a comparable stage across finance, GTM, operations, product, technology, or people, backed by Veep playbooks, execution specialists, and governance.",
  },
  {
    q: "How does the 30-day guarantee work?",
    a: "Every engagement carries a 30-day guarantee. If it isn't working in the first 30 days, we fix it, swap the operator, or you walk, with no fee owed for the remaining term.",
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
    "Independent businesses and lean funds hire Veep to deploy senior operators, playbooks, and technology built to grow revenue, expand margins, and withstand scrutiny. Scoped in 72 hours. Started in under 10 days.",
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
      { title: "Veep | Operating Partners for the Job to Be Done" },
      {
        name: "description",
        content:
          "Independent businesses and lean funds hire Veep for senior operators, playbooks, and technology built to grow revenue, expand margins, and withstand scrutiny.",
      },
      { property: "og:title", content: "Veep | Operating Partners for the Job to Be Done" },
      {
        property: "og:description",
        content:
          "Independent businesses and lean funds hire Veep for senior operators, playbooks, and technology built to grow revenue, expand margins, and withstand scrutiny.",
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
    "group motion-cta cta-accent rounded-[6px] whitespace-nowrap px-7 py-3.5 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background inline-flex items-center justify-center gap-2 min-h-11";
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
        30-minute scoping call · Reply within 1 business day · 30-day guarantee
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
      <div className="mt-4 mono-label">Assigned lead: {c.role}</div>
      <p className="mt-4 text-sm text-stone leading-relaxed">
        <span className="text-cream">Trigger. </span>
        {c.trigger}
      </p>
      <p className="mt-3 text-sm text-stone leading-relaxed">
        <span className="text-cream">Work & result. </span>
        {c.outcome}
      </p>
    </>
  );

  return (
    <div
      id={c.id}
      className={`motion-row-wash flex h-full flex-col scroll-mt-24 rounded-[6px] bg-surface-card ${pad}`}
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
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 md:pt-24 pb-16 sm:pb-20 md:pb-28 flex flex-col items-center text-center">
          <h1 className="motion-fade-up font-medium text-[2.25rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl tracking-tight sm:leading-[0.98] text-cream text-balance allow-wrap break-words mb-6">
            Because a job always needs to be done.
          </h1>

          <p className="motion-fade-up motion-delay-1 text-base sm:text-lg text-stone max-w-2xl leading-relaxed mb-14 md:mb-16">
            An operating partner platform for independent businesses and lean funds.{" "}
            <br className="hidden sm:inline" />
            Grow revenue, expand margins, and withstand scrutiny.
          </p>

          <div className="motion-fade-up motion-delay-3 w-full">
            <OperatorCanvas />
          </div>

          <div className="motion-fade-up motion-delay-4 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-5 mt-10 sm:mt-16 md:mt-20 w-full">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group motion-cta cta-accent rounded-[6px] whitespace-nowrap px-7 py-3.5 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background inline-flex items-center justify-center gap-2 min-h-11"
            >
              Bring us the job
            </a>
            <Link
              to="/"
              hash="how"
              activeOptions={{ includeHash: true }}
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
            Top firms invest more than capital. They deploy senior operators, playbooks, and technology to make companies stronger and more valuable. Veep gives you that same firepower to build the business you've been working toward, and the one investors, lenders, and buyers will underwrite.
          </p>
        </div>
      </Reveal>

      {/* vs. traditional options — directly under Meet Veep at every breakpoint */}
      <Reveal as="section" id="alternatives" className="order-3 md:order-2 bg-surface-raised py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mono-label mb-8">vs. traditional options</div>
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
      </Reveal>

      {/* Problem — before Meet Veep on mobile */}
      <Reveal as="section" id="problem" className="order-1 md:order-3 bg-surface-raised py-14 sm:py-16 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mb-12 md:mb-14 text-left">
            <SectionEyebrow>The reality</SectionEyebrow>
            <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
              The org chart doesn't cover every job.
            </h2>
          </div>

          <ProblemDiagram />

        </div>
      </Reveal>
      </div>

      {/* Mandates — folds the old #solution rail. Outcome lives here; operators,
          leverage, and price each have their own chapter. */}
      <Reveal as="section" id="mandates" className="py-14 sm:py-16 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 md:mb-12">
            <SectionEyebrow>What we take on</SectionEyebrow>
            <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
              Start with what needs to be true on the other side.
            </h2>
            <p className="mt-6 text-stone text-base md:text-lg leading-relaxed">
              A raise, a sales motion, or a new line of business. We step in and carry the work to the finish.
            </p>
          </div>
          <MandateCatalog />
        </div>
      </Reveal>

      {/* Operators + network impact — shared chapter (source of truth for
          For Funds too; see OperatorSpotlightChapter) */}
      <Reveal as="section" id="operators" className="bg-surface-raised py-14 sm:py-16 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-8">
          <OperatorSpotlightChapter />
        </div>
      </Reveal>

      {/* Institutional leverage — compact, framed, not a second full chapter */}
      <Reveal as="section" id="leverage" className="py-10 sm:py-12 md:py-16 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[6px] border border-white/10 px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12">
            <div className="max-w-3xl mb-8">
              <SectionEyebrow>Playbooks & Agent Teams</SectionEyebrow>
              <h2 className="mt-4 font-serif font-medium text-2xl sm:text-3xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
                One governed mandate. Three layers.
              </h2>
              <p className="mt-4 text-base text-stone leading-relaxed">
                One lead partner orchestrates specialists, proven playbooks, and governed AI workflows so a lean team runs with big-firm rigor. You keep strategic approvals.
              </p>
            </div>
            <PlatformStrata compact />
            <Link
              to="/agent-teams"
              className="group motion-link mt-8 inline-flex items-center gap-2 text-sm text-cream/90 hover:text-cream underline underline-offset-8 hover:underline-offset-4 decoration-white/30 hover:decoration-white/70 min-h-11"
            >
              See how Agent Teams work <ArrowRight size={14} className="motion-arrow" />
            </Link>
          </div>
        </div>
      </Reveal>

      {/* Benefits */}
      <Reveal as="section" id="benefits" className="hidden md:block py-14 sm:py-16 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mb-12 md:mb-14">
            <SectionEyebrow>Veep impact</SectionEyebrow>
            <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
              Build a stronger, more valuable business.
            </h2>
          </div>
          <div className="motion-stagger grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {benefits.map((b, i) => (
              <div key={b.t} className="motion-row-wash rounded-[6px] bg-surface-card p-6 sm:p-7">
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
            <InlineCTA label="Bring us the job" mode="contact" />
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
                Outcome first. Engagement shape second.
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
            Interim leadership, managed operating partnerships, and Agent Teams are also scoped to the mandate.
          </p>
        </div>
      </Reveal>

      {/* How it works */}
      <Reveal as="section" id="how" className="py-14 sm:py-16 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mb-12 md:mb-14">
            <SectionEyebrow>How It Works</SectionEyebrow>
            <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
              From first call to live execution in under 10 days.
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
              Real business outcomes, delivered fast.
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
              { k: "72h", v: "scoped" },
              { k: "<10d", v: "started" },
              { k: "30d", v: "guarantee" },
            ].map((s) => (
              <div key={s.k}>
                <div className="stat-figure text-4xl md:text-5xl text-cream">{s.k}</div>
                <div className="mt-2 mono-label font-medium">
                  {s.v}
                </div>
              </div>
            ))}
          </div>

          <ClientStrip />

          <div className="md:mt-24">
            <Testimonials />
          </div>

          <div className="mt-16">
            <InlineCTA centered label="Book intro call" />
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
                Sponsored is not owned.
              </h2>
              <p className="text-base text-stone leading-relaxed">
                Your investment thesis sets the direction, but portfolio companies do not pause for an executive search. Veep gives lean funds, family offices, and holding companies one operating relationship to deploy senior operators, playbooks, and technology across diligence, first-100-days execution, integration, and value creation. The fund keeps investment decisions, each CEO agrees their company's mandate, and Veep owns delivery.
              </p>
            </div>
            <div className="lg:col-span-2 flex flex-col items-start lg:items-end gap-4">
              <Link
                to="/for-portfolios"
                className="motion-cta cta-accent-dark rounded-[6px] whitespace-nowrap px-7 py-3.5 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background min-h-11 inline-flex items-center justify-center"
              >
                See how Veep works for funds
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

      {/* Straight answers — merged Before you book + mini FAQ */}
      <Reveal as="section" id="faq" className="bg-surface-raised py-14 sm:py-16 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mb-12 md:mb-14">
            <SectionEyebrow>Straight answers</SectionEyebrow>
            <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
              The questions leaders ask on the first call.
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