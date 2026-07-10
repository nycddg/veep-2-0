import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BOOKING_URL } from "@/lib/booking";
import { LogoWall } from "@/components/site/LogoWall";
import { Testimonials } from "@/components/site/Testimonials";
import { OperatorSpotlightRail } from "@/components/site/OperatorSpotlightRail";
import { OperatorCanvas } from "@/components/site/OperatorCanvas";
import { EngagementTile } from "@/components/site/EngagementTile";
import { StepFlow } from "@/components/site/StepFlow";
import { Check } from "lucide-react";
import { ObjectionList } from "@/components/site/ObjectionList";
import { FooterCTA } from "@/components/site/FooterCTA";
import jianYangHeadshot from "@/assets/operator-jian-yang.png.asset.json";
import erikaVelazquezHeadshot from "@/assets/operator-erika-velazquez.png.asset.json";
import elaineBogartHeadshot from "@/assets/operator-elaine-bogart.png.asset.json";
import victoriaKasumuHeadshot from "@/assets/operator-victoria-kasumu.png.asset.json";
import vanessaKwanHeadshot from "@/assets/operator-vanessa-kwan.png.asset.json";
import alasdairLloydJonesHeadshot from "@/assets/operator-alasdair-lloyd-jones.png.asset.json";
import alanPoussaintHeadshot from "@/assets/operator-alan-poussaint.png.asset.json";
import jenniferKasperHeadshot from "@/assets/operator-jennifer-kasper.png.asset.json";
import seanParkHeadshot from "@/assets/operator-sean-park.png.asset.json";
import jonathanLevinsonHeadshot from "@/assets/operator-jonathan-levinson.png.asset.json";
import miguelFerreyraHeadshot from "@/assets/operator-miguel-ferreyra-de-bone.png.asset.json";
import jessicaDavilaHeadshot from "@/assets/operator-jessica-davila.png.asset.json";

// ─────────────────────────────────────────────────────────────────────────────
// Content
// ─────────────────────────────────────────────────────────────────────────────

const heroOperators = [
  {
    name: "Jian Yang",
    role: "Finance Operating Partner",
    chips: ["Ex-UGE", "Real Estate"],
    tilt: -2,
    translateY: 16,
    photoUrl:
      "https://static.wixstatic.com/media/5084f0_6f67c526803546fa8695a282e5b1c292~mv2.jpg/v1/crop/x_0,y_278,w_1132,h_1133/fill/w_400,h_400,al_c,q_85,enc_avif,quality_auto/Untitled%20design%20(12)_edited.jpg",
  },
  {
    name: "Erika Velazquez",
    role: "Marketing Operating Partner",
    chips: ["Ex-Morning Brew", "New Media"],
    tilt: 3,
    translateY: -32,
    photoUrl:
      "https://static.wixstatic.com/media/5084f0_9ee6e722e8564a30a97f2c7ba2767e8b~mv2.png/v1/crop/x_115,y_307,w_938,h_940/fill/w_400,h_400,al_c,q_85,enc_avif,quality_auto/Untitled%20design%20(13).png",
  },
  {
    name: "Elaine Bogart",
    role: "Finance Operating Partner",
    chips: ["Ex-Fullscreen", "Web3"],
    tilt: -4,
    translateY: 48,
    photoUrl:
      "https://static.wixstatic.com/media/5084f0_1ae2bc09c75742eea3b45aa72d11aeee~mv2.png/v1/crop/x_0,y_283,w_1152,h_1151/fill/w_400,h_400,al_c,q_85,enc_avif,quality_auto/Untitled%20design%20(72).png",
  },
  {
    name: "Victoria Kasumu",
    role: "People Operating Partner",
    chips: ["Ex-Zocdoc", "TECH"],
    tilt: 2,
    translateY: 0,
    photoUrl:
      "https://static.wixstatic.com/media/5084f0_c97a4bd1542f40d6b6a86c2bf84410d4~mv2.png/v1/crop/x_0,y_144,w_1152,h_1152/fill/w_400,h_400,al_c,q_85,enc_avif,quality_auto/Untitled%20design%20(15).png",
  },
];

const spotlightOperators = [
  {
    name: "Jian Yang",
    role: "Finance Operating Partner",
    priorCompanies: ["INDUSTRIOUS", "OPENCARE"],
    summary:
      "Strategic finance leader and entrepreneur with a record of scaling fast-growing firms, optimizing financial operations, and securing funding. At Industrious, secured $140M+ in equity funding and restructured financial operations for rapid scale.",
    chips: ["Real Estate", "Finance", "Tech"],
    photoUrl: jianYangHeadshot.url,
  },
  {
    name: "Erika Velazquez",
    role: "Marketing Operating Partner",
    priorCompanies: ["MORNING BREW", "THE NEW REPUBLIC"],
    summary:
      "Story-driven marketer with deep expertise in brand strategy, product marketing, and audience growth. Specializes in launching and repositioning for impact. At Morning Brew, developed a new newsletter ad product that doubled the average CTR.",
    chips: ["New Media", "Consumer", "GenAI"],
    photoUrl: erikaVelazquezHeadshot.url,
  },
  {
    name: "Elaine Bogart",
    role: "Finance Operating Partner",
    priorCompanies: ["Fullscreen", "Nifty's"],
    summary:
      "Powerhouse CFO with 15+ years of experience leading financial transformation and strategic exits across SaaS, Web3, and new media. At Mojix, drove a +98% EBITDA turnaround and completed a successful international sale.",
    chips: ["Tech", "Web3", "Media"],
    photoUrl: elaineBogartHeadshot.url,
  },
  {
    name: "Victoria Kasumu",
    role: "People Operating Partner",
    priorCompanies: ["Zocdoc", "Pager Health"],
    summary:
      "Seasoned people leader who builds growth-focused operations by aligning talent, culture, and business goals. At David Zwirner, hired 50+ employees in 90 days while reducing redundancy 30% and increasing retention 15%.",
    chips: ["Hospitality", "TECH", "Healthcare"],
    photoUrl: victoriaKasumuHeadshot.url,
  },
  {
    name: "Vanessa Kwan",
    role: "Finance Operating Partner",
    priorCompanies: ["BDG MEDIA", "GOLDMAN SACHS"],
    summary:
      "Strategic finance and operations leader with 15+ years across investment banking, luxury retail, and digital media. At BDG Media, rose from Director to EVP Head of Finance and redesigned seller commissions, improving gross margins by 4 points.",
    chips: ["Digital Media", "Luxury Retail", "Consumer"],
    photoUrl: vanessaKwanHeadshot.url,
    photoPosition: "center 15%",
    photoScale: 1.03,
  },
  {
    name: "Alasdair Lloyd-Jones",
    role: "Growth Operating Partner",
    priorCompanies: ["SET CREATIVE (WPP)", "DAVID YURMAN"],
    summary:
      "Global brand strategist and creative operator with a record of scaling consumer brands and leading high-impact transformation. As CEO of SET Creative, scaled revenue 5x and led the firm through a successful sale to WPP.",
    chips: ["Consumer Retail", "Tech", "Automotive"],
    photoUrl: alasdairLloydJonesHeadshot.url,
  },
  {
    name: "Alan Poussaint",
    role: "Finance Operating Partner",
    priorCompanies: ["ROCKET INTERNET", "KIXIE"],
    summary:
      "Builds CFO-grade systems for founder-led companies. His experience spans private capital allocation, revenue-tech operations at Kixie, and fractional CFO delivery through Apex CFO AI.",
    chips: ["Tech", "SaaS", "Private Capital"],
    photoUrl: alanPoussaintHeadshot.url,
    photoPosition: "center 15%",
    photoScale: 1.03,
  },
  {
    name: "Jennifer Kasper",
    role: "Growth Operating Partner",
    priorCompanies: ["LVMH", "MACY'S"],
    summary:
      "Senior marketing leader with deep experience across global retail, beauty, fashion, media, and customer strategy. At at LVMH, unified group media strategy across 75+ Maisons and built cross-brand agency models.",
    chips: ["Retail", "Fashion", "Beauty"],
    photoUrl: jenniferKasperHeadshot.url,
  },
  {
    name: "Sean Park",
    role: "People Operating Partner",
    priorCompanies: ["ACTIVANT CAPITAL", "EY"],
    summary:
      "People strategy leader who turns org design, leadership, and talent systems into business growth levers. As CPO at Activant Capital, led portfolio talent strategy and served as interim CHRO on a portfolio path to a $2B exit.",
    chips: ["Growth Equity", "PRO SERVICES", "TECH"],
    photoUrl: seanParkHeadshot.url,
    photoPosition: "center 15%",
    photoScale: 1.03,
  },
  {
    name: "Jonathan Levinson",
    role: "Finance Operating Partner",
    priorCompanies: ["KIDS MADE MODERN", "YELLOWHEART"],
    summary:
      "Finance and operations leader with 25+ years turning founder assumptions into investor-ready plans and operating discipline. Has led or supported $65M+ in M&A and fundraising transactions.",
    chips: ["E-Commerce", "SaaS", "Manufacturing"],
    photoUrl: jonathanLevinsonHeadshot.url,
    photoPosition: "center 15%",
    photoScale: 1.03,
  },
  {
    name: "Miguel Ferreyra de Bone",
    role: "Finance Operating Partner",
    priorCompanies: ["TASTE OF BELGIUM", "FARNSWORTH CANNABIS"],
    summary:
      "Seasoned operator with a track record of building and transforming companies across finance, strategy, operations, GTM, and product. Brings board-level judgment and hands-on operating experience across consumer, luxury, and finance.\u00a0",
    chips: ["Consumer", "Luxury", "Finance"],
    photoUrl: miguelFerreyraHeadshot.url,
    photoPosition: "center 15%",
    photoScale: 1.03,
  },
  {
    name: "Jessica Davila",
    role: "People Operating Partner",
    priorCompanies: ["TASKRABBIT", "BREAD"],
    summary:
      "People strategy leader with a record of guiding companies through scale, acquisition, and leadership change. At TaskRabbit, rebuilt people strategy while scaling from 250 to 500 employees across 9 countries.",
    chips: ["Marketplace", "Fintech", "Consumer"],
    photoUrl: jessicaDavilaHeadshot.url,
    photoPosition: "center 15%",
    photoScale: 1.03,
  },
];

const problems = [
  {
    t: "Critical work with no clear owner.",
    d: "A fundraise, GTM reset, operating issue, margin problem, or leadership gap keeps coming back to the founder. The team is busy, but the priority is still stuck.",
  },
  {
    t: "The hire can come later. The work cannot.",
    d: "A full-time executive may be the right answer eventually. The search takes months, the role may still be undefined, and the business needs movement now.",
  },
  {
    t: "The founder is still in the middle.",
    d: "Sales decisions, finance questions, operational escalations, people issues, and strategic initiatives keep landing on the CEO's desk.",
  },
  {
    t: "More advice is not enough.",
    d: "You don't need another deck or a stack of candidate profiles. You need someone senior to step in, take responsibility, and move the work.",
  },
];

const alternatives = [
  { t: "Retained search", d: "Months to hire. Permanent commitment. Wrong-hire risk lands on you." },
  { t: "Consulting firms", d: "Recommendations without ownership. The work still lands back on your team." },
  { t: "Marketplaces and freelancers", d: "Profiles to browse. Variable quality. More decisions and oversight for the founder." },
];

const benefits = [
  { t: "Own the work", d: "Operators step in to take responsibility for critical work, not advise from the sidelines." },
  { t: "Deploy in under 10 days", d: "Algorithmic matching. Shortlist in 72 hours. Onboarded and in the work inside 10 days." },
  { t: "Senior-only roster", d: "75+ vetted senior operators across finance, GTM, operations, product, people, technology, and strategy." },
  { t: "No permanent commitment", d: "Senior ownership without the commit — engagements can pause, extend, or scale with the work." },
  { t: "Clean handoff", d: "When the work lands or a permanent hire arrives, you get documentation, context, and continuity." },
  { t: "30-day fit guarantee", d: "If the operator isn't the right fit, we swap them or you walk — no fee owed for the remaining term." },
];

const engagements = [
  {
    name: "Advisory",
    price: "From $3k / mo",
    bestWhen: "Senior judgment for high-stakes decisions — board prep, fundraising, transactions, executive issues, and strategic tradeoffs.",
    to: "/pricing" as const,
  },
  {
    name: "Sprint",
    price: "From $25k / scope",
    bestWhen: "One urgent priority with a clear owner and endpoint — fundraise readiness, GTM reset, margin improvement, operating cadence, or transaction prep.",
    to: "/pricing" as const,
  },
  {
    name: "Operator",
    price: "From $15k / mo",
    bestWhen: "Ongoing senior ownership without a permanent executive hire. Best when a function, initiative, or leadership gap needs consistent operating support.",
    to: "/pricing" as const,
    featured: true,
  },
  {
    name: "Pod",
    price: "From $30k / mo",
    bestWhen: "A lead operator plus specialist support for cross-functional work — GTM + RevOps, AI transformation, new market launch, or operating reset.",
    to: "/pricing" as const,
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
    veep: "30-day fit guarantee — swap or walk",
    old: "You own the miss",
  },
];

const cases = [
  {
    tag: "B2B SAAS · FINANCE OPERATING PARTNER",
    trigger: "CEO was preparing for a first institutional round without a financial model, investor materials, or fundraising experience.",
    outcome: "Built a 3-year model, diligence-ready CAC/LTV dashboards, and coached the CEO through term sheets and investor meetings.",
    metric: "$6M raised in 6 weeks",
  },
  {
    tag: "SOFTWARE STUDIO · GROWTH OPERATING PARTNER",
    trigger: "An $8M product development studio was stuck firefighting, with inconsistent project profitability and no scalable path into AI.",
    outcome: "Installed standardized project scoping and staffing, built an AI GTM and delivery framework, and hired a Director of AI.",
    metric: "Project margins up 25%",
  },
  {
    tag: "PODCAST PUBLISHER · BUSINESS OPERATING PARTNER",
    trigger: "A profitable, bootstrapped publisher with millions in revenue had never raised outside capital and had no financial model or growth plan.",
    outcome: "Built the company's first financial model, defined use of proceeds, and sourced investors representing over a third of the round.",
    metric: "Sourced 35% of capital",
  },
];

const networkImpact = [
  { figure: "$2B+", label: "Cost savings delivered", detail: "Across transformation, product redesign, and operational efficiency initiatives at global enterprises." },
  { figure: "$1B+", label: "Capital raised", detail: "Venture funding, structured finance, SPACs, and instruments like securitized bonds." },
  { figure: "$3B+", label: "NEW REVENUE GENERATED", detail: "Through new business lines, go-to-market strategy, and product commercialization." },
  { figure: "20+", label: "EXITS & ACQUISITIONS", detail: "Including strategic sales, integrations, and post-merger transformations." },
];

const faqs = [
  {
    q: "What is a Veep operator?",
    a: "A Veep operator is a vetted senior operator who steps into your business to own critical work before a full-time executive hire makes sense. Depending on the need, that operator may be a CFO, COO, CRO, CMO, CTO, product leader, people leader, chief of staff, or functional expert.",
  },
  {
    q: "How fast can a Veep operator start?",
    a: "Shortlist in 72 hours. Operator deployed in under 10 days. Urgent interim or leadership-gap coverage can move faster when needed.",
  },
  {
    q: "How much does Veep cost?",
    a: "Advisory starts at $3k/month. Sprints start at $25k. Operators start at $15k/month. Pods start at $30k/month. Every engagement is scoped to the work.",
  },
  {
    q: "How is Veep different from a consulting firm?",
    a: "A consultant recommends. A Veep operator owns. Our operators step into the work, set the rhythm, build the materials, make decisions with the team, and move the priority forward.",
  },
  {
    q: "How is Veep different from executive search?",
    a: "Search is for permanent hiring. Veep is for critical work that needs senior ownership before the full-time hire makes sense. The work moves now, while the permanent hiring decision stays open.",
  },
  {
    q: "Who is Veep for?",
    a: "Veep is built for founder-led, owner-led, and investor-backed companies with real revenue, real teams, and growing complexity. Most clients are doing $5M–$150M in revenue, though the right fit depends more on the work than the exact company size.",
  },
  {
    q: "What if it is not a fit?",
    a: "Every engagement carries a 30-day fit guarantee. If the operator is not right, we swap them or you walk with no fee owed for the remaining term.",
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
  serviceType: "Senior operator placement",
  provider: { "@type": "Organization", name: "Veep" },
  areaServed: ["North America", "Europe"],
  description:
    "Veep places vetted senior operators — CFOs, COOs, CROs, CMOs, CTOs, product, people, and functional leaders — inside founder-led companies to own critical work in under 10 days.",
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
      { title: "Senior operators for work that can't wait | Veep" },
      {
        name: "description",
        content:
          "Veep helps founder-led companies bring in vetted senior operators to own critical work — matched in 72 hours, deployed in under 10 days. 30-day fit guarantee.",
      },
      { property: "og:title", content: "Senior operators for work that can't wait | Veep" },
      {
        property: "og:description",
        content:
          "Veep helps founder-led companies bring in vetted senior operators to own critical work — matched in 72 hours, deployed in under 10 days. 30-day fit guarantee.",
      },
      { property: "og:url", content: "https://www.veep.work/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://www.veep.work/" }],
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
    <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-accent">
      {children}
    </div>
  );
}

function Index() {
  return (
    <>
      {/* 1 — HERO */}
      <section id="overview" className="relative overflow-hidden scroll-mt-20">
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 md:pt-24 pb-20 md:pb-28 flex flex-col items-center text-center">
          <h1 className="text-[2.5rem] leading-[1.02] sm:text-5xl md:text-6xl lg:text-7xl tracking-tight sm:leading-[0.98] text-cream mb-6">
            Because a job{"\u00a0"}always{" "}needs{"\u00a0"}to be done.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-stone max-w-2xl leading-relaxed mb-10">
            Vetted senior operators to own urgent priorities and high-stakes
            decisions before you are ready, willing, or able to make
            full-time hires.
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 sm:gap-x-8 gap-y-3 mb-14 md:mb-16 text-sm text-cream/90">
            {["Invite-only network", "72-hour match", "30-day fit guarantee"].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <Check size={18} className="text-accent" strokeWidth={2.5} />
                {t}
              </div>
            ))}
          </div>

          <OperatorCanvas />

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-5 mt-24 md:mt-20 w-full">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto justify-center rounded-full bg-cream px-7 py-3.5 text-sm font-medium text-ink hover:bg-cream/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background transition inline-flex items-center gap-2 min-h-11"
            >
              Book intro call <ArrowRight size={16} />
            </a>
            <Link
              to="/"
              hash="how"
              className="text-sm text-cream/85 hover:text-cream underline underline-offset-8 decoration-white/25 hover:decoration-white/60 transition pb-1"
            >
              See how it works
            </Link>
          </div>
        </div>
      </section>

      <LogoWall />

      {/* 2 — WHAT IS VEEP (extractable AI-search definition) */}
      <section>
        <div className="mx-auto max-w-[55.2rem] px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <SectionEyebrow>WHAT VEEP IS</SectionEyebrow>
          <p className="mt-6 font-serif text-xl sm:text-2xl md:text-3xl text-cream tracking-tight leading-snug">
            An invite-only network of operating partners ready to own the work that can't wait. Founders and CEOs hire us to solve their biggest challenges across finance, GTM, operations, product, people, fundraising, and strategy.
          </p>
          <p className="mt-4 text-sm text-stone">
            Built for companies with real revenue and growing complexity, before the
            full-time executive hire makes sense.
          </p>
        </div>
      </section>

      {/* 3 — PROBLEM */}
      <section id="problem" className="bg-surface-raised py-20 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 md:mb-14">
            <SectionEyebrow>The moment you're in</SectionEyebrow>
            <h2 className="mt-6 font-serif text-3xl md:text-4xl text-cream tracking-tight leading-[1.05] allow-wrap">
              Your business is too important for ownerless work.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10 md:gap-x-14 border-t border-white/10">
            {problems.map((p) => (
              <div key={p.t} className="pt-8 md:pt-10">
                <h3 className="font-serif text-xl text-cream tracking-tight leading-snug">{p.t}</h3>
                <p className="mt-4 text-sm text-stone leading-relaxed max-w-md">{p.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 md:mt-20 border-t border-white/10 pt-10">
            <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-stone-soft mb-8">Instead of</div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-10">
              {alternatives.map((a) => (
                <div key={a.t}>
                  <div className="font-serif text-xl text-cream/90 tracking-tight">{a.t}</div>
                  <p className="mt-3 text-sm text-stone leading-relaxed">{a.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4 — SOLUTION */}
      <section id="solution" className="py-20 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <SectionEyebrow>What we do</SectionEyebrow>
              <h2 className="mt-6 font-serif text-3xl md:text-4xl text-cream tracking-tight leading-[1.05] allow-wrap">
                Built for the{"\u00a0"}job to be done.
              </h2>
              <p className="mt-8 text-stone text-base md:text-lg leading-relaxed">
                Tell us what's in the way, not moving, or unfortunately coming back to
                you to solve. We shape the work and define the outcomes, recommend the
                right level of support (Advisory, Sprint, Operator, or Pod), and match
                operators to the job.
              </p>
              <p className="mt-4 text-stone text-base md:text-lg leading-relaxed">
                When the work lands or the permanent hire arrives, we hand off with
                results and documentation, not ongoing dependency.
              </p>
            </div>
            <div className="space-y-6 lg:border-l lg:border-white/10 lg:pl-10">
              <div className="font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-accent">The Veep model</div>
              {[
                ["Start with the work, not the title", "We diagnose the priority, urgency, and outcome before deciding whether the answer is advisory, a sprint, an operator, a pod, or recurring operating capacity."],
                ["Senior only", "Every operator is a vetted senior leader — former founders, CFOs, COOs, CROs, CMOs, CTOs, as well as product and people leaders."],
                ["Priced to scope", "Advisory, Sprint, Operator, or Pod structured around the work and outcomes."],
                ["Guaranteed fit", "30 days to prove it. If the operator is not right, we swap them or you walk."],
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
      {/* 4.5 — OPERATORS SPOTLIGHT */}
      <section id="operators" className="py-20 md:py-28 border-t border-white/10 scroll-mt-20">
        <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-8">

          <div className="max-w-2xl mb-12 md:mb-14">
            <SectionEyebrow>Operator spotlight</SectionEyebrow>
            <h2 className="mt-6 font-serif text-3xl md:text-4xl text-cream tracking-tight leading-[1.05] allow-wrap">
              Operators who've held the seat and delivered.
            </h2>
            <p className="mt-8 text-stone text-base md:text-lg leading-relaxed">
              Every Veep operator has held the role they're deployed into, at a
              comparable-stage company, with outcomes we can reference. No juniors, no
              generalists, no career consultants.
            </p>
          </div>
          <OperatorSpotlightRail operators={spotlightOperators} />

          <p className="mt-8 text-left text-sm text-stone">
            Just a few of the 75+ operators in our invite-only network.
          </p>

          {/* Network impact */}
          <div className="mt-16">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-accent/20" />
              <SectionEyebrow>Network impact</SectionEyebrow>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-accent/20" />
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-secondary">
              {/* Subtle dot grid */}
              <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                  backgroundSize: "20px 20px",
                }}
              />

              <div className="relative grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/5">
                {networkImpact.map((m, i) => (
                  <div
                    key={m.label}
                    className="p-7 md:p-10 flex flex-col gap-3 group transition-colors duration-300 hover:bg-white/[0.015]"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="relative">
                        {i === 0 && (
                          <div className="absolute inset-0 animate-ping rounded-full bg-accent/40" />
                        )}
                        <div className="relative w-2 h-2 rounded-full bg-accent" />
                      </div>
                      <span className="font-mono text-[10px] text-stone-soft uppercase tracking-[0.14em] font-medium">
                        {m.label}
                      </span>
                    </div>
                    <div className="font-serif text-3xl md:text-4xl text-cream tracking-tight leading-none">
                      {m.figure}
                    </div>
                    <p className="text-xs text-stone leading-relaxed">
                      {m.detail}
                    </p>
                  </div>
                ))}
              </div>

              {/* Scan line */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.07] to-transparent h-20 -top-20 animate-scan pointer-events-none" />
            </div>

            <p className="mt-4 text-sm text-stone">
              Aggregated outcomes across our operator roster.
            </p>
          </div>

          <div className="mt-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-t border-white/10 pt-8">
            <p className="text-sm text-stone">
              75+ vetted senior operators · Avg. 18 yrs experience · Every operator has held the seat
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-cream underline underline-offset-8 decoration-white/30 hover:decoration-white/70 transition"
            >
              Meet operators for your work <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* 5 — BENEFITS */}
      <section id="benefits" className="bg-surface-raised py-20 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 md:mb-14">
            <SectionEyebrow>What you get</SectionEyebrow>
            <h2 className="mt-6 font-serif text-3xl md:text-4xl text-cream tracking-tight leading-[1.05] allow-wrap">
              Executive capacity, before the executive hire.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 border-t border-white/10 pt-10">
            {benefits.map((b, i) => (
              <div key={b.t}>
                <div className="font-mono text-[10px] tracking-[0.14em] text-accent">
                  0{i + 1}
                </div>
                <div className="mt-4 font-serif text-2xl text-cream tracking-tight leading-tight">
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
      <section id="offer" className="bg-surface-band py-20 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-14">
            <div className="max-w-2xl">
              <SectionEyebrow>Engagements</SectionEyebrow>
              <h2 className="mt-6 font-serif text-3xl md:text-4xl text-cream tracking-tight leading-[1.05] allow-wrap">
                Pick the level of support the work needs.
              </h2>
            </div>
            <Link
              to="/pricing"
              className="text-sm text-cream/90 hover:text-cream underline underline-offset-8 decoration-white/30 hover:decoration-white/70 transition pb-1"
            >
              See full pricing →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {engagements.map((e) => (
              <EngagementTile key={e.name} {...e} />
            ))}
          </div>
        </div>
      </section>

      {/* 7 — HOW IT WORKS */}
      <section id="how" className="bg-surface-raised py-20 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 md:mb-14">
            <SectionEyebrow>How it works</SectionEyebrow>
            <h2 className="mt-6 font-serif text-3xl md:text-4xl text-cream tracking-tight leading-[1.05] allow-wrap">
              From first call to operator in the seat in under 10 days.
            </h2>
          </div>
          <StepFlow />
        </div>
      </section>

      {/* 8 — PROOF */}
      <section id="proof" className="py-20 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 md:mb-16">
            <SectionEyebrow>Proof</SectionEyebrow>
            <h2 className="mt-6 font-serif text-3xl md:text-4xl text-cream tracking-tight leading-[1.05] allow-wrap">
              What senior operators change in the first 90 days.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-10 border-t border-white/10">
            {cases.map((c) => (
              <div key={c.tag} className="pt-8 flex flex-col">
                <span className="text-[10px] font-medium tracking-[0.14em] uppercase text-accent">
                  {c.tag}
                </span>
                <p className="mt-6 text-sm text-stone leading-relaxed">
                  <span className="text-cream">Trigger. </span>{c.trigger}
                </p>
                <div className="my-5 border-t border-white/10" />
                <p className="text-sm text-stone leading-relaxed">
                  <span className="text-cream">Outcome. </span>{c.outcome}
                </p>
                <div className="mt-auto pt-6 font-serif text-xl text-accent tracking-tight">
                  {c.metric}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-10 border-y border-white/10">
            {[
              { k: "75+", v: "vetted operators" },
              { k: "72h", v: "to shortlist" },
              { k: "<10d", v: "to deploy" },
              { k: "30d", v: "fit guarantee" },
            ].map((s) => (
              <div key={s.k}>
                <div className="font-mono text-4xl md:text-5xl text-cream tracking-tight" style={{ fontFeatureSettings: '"zero", "ss01"' }}>{s.k}</div>
                <div className="mt-2 font-mono text-[11px] font-medium tracking-[0.12em] uppercase text-stone-soft">
                  {s.v}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 md:mt-20">
            <Testimonials />
          </div>

          <div className="mt-16">
            <InlineCTA />
          </div>
        </div>
      </section>

      {/* 9 — DIFFERENTIATION */}
      <section id="vs" className="bg-surface-band py-20 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 md:mb-14">
            <SectionEyebrow>Why Veep</SectionEyebrow>
            <h2 className="mt-6 font-serif text-3xl md:text-4xl text-cream tracking-tight leading-[1.05] allow-wrap">
              How Veep compares to the alternatives.
            </h2>
          </div>

          <div className="border-y border-white/10 divide-y divide-white/10">
            <div className="hidden md:grid md:grid-cols-[1fr_1.5fr_1.5fr]">
              <div className="p-5 font-mono text-[10px] uppercase tracking-[0.12em] text-stone-soft">Dimension</div>
              <div className="p-5 font-mono text-[10px] uppercase tracking-[0.12em] text-stone-soft">The old way</div>
              <div className="p-5 font-mono text-[10px] uppercase tracking-[0.12em] text-accent">Veep</div>
            </div>
            {differentiators.map((r) => (
              <div key={r.dim} className="grid md:grid-cols-[1fr_1.5fr_1.5fr] gap-y-2 gap-x-0 p-5 md:p-0">
                <div className="md:p-5 font-mono text-[11px] uppercase tracking-[0.12em] text-stone-soft">
                  {r.dim}
                </div>
                <div className="md:p-5 text-sm text-stone leading-relaxed">{r.old}</div>
                <div className="md:p-5 text-sm text-cream leading-relaxed md:bg-accent/[0.06]">
                  {r.veep}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — FOR PORTFOLIOS (secondary audience band) */}
      <section id="portfolios" className="bg-surface-raised py-20 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 md:gap-10 items-center border-t border-white/10 pt-12 md:pt-16">
            <div className="lg:col-span-3 space-y-5">
              <SectionEyebrow>For PE, VC, and family-office portfolios</SectionEyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-cream tracking-tight leading-[1.1] allow-wrap">
                Stabilize the operational gaps transactions create.
              </h2>
              <p className="text-stone leading-relaxed">
                Transactions create volatility before close, after close, and during integration. Leadership seats open. The plan is clear, but the company often lacks the senior capacity to own the work. Veep gives transaction-active firms a retained roster of vetted operators, ready to support diligence, transition, integration, value creation, and interim leadership needs across the portfolio.
              </p>
            </div>
            <div className="lg:col-span-2 flex flex-col lg:items-end gap-4">
              <Link
                to="/for-portfolios"
                className="w-full sm:w-auto text-center rounded-full bg-cream px-7 py-3.5 text-sm font-medium text-ink hover:bg-cream/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background transition min-h-11 inline-flex items-center justify-center"
              >
                See how portfolio rosters work
              </Link>
              <Link
                to="/contact"
                search={{ intent: "audit" }}
                className="text-sm text-cream/85 hover:text-cream underline underline-offset-8 decoration-white/25 hover:decoration-white/60"
              >
                Request a capacity audit →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 11 — OBJECTIONS */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 md:mb-14">
            <SectionEyebrow>Before you book</SectionEyebrow>
            <h2 className="mt-6 font-serif text-3xl md:text-4xl text-cream tracking-tight leading-[1.05] allow-wrap">
              The questions founders ask on the first call.
            </h2>
          </div>
          <ObjectionList />
          <div className="mt-14">
            <InlineCTA />
          </div>
        </div>
      </section>

      {/* 12 — FAQ */}
      <section id="faq" className="bg-surface-raised py-20 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 md:mb-14">
            <SectionEyebrow>MINI FAQ</SectionEyebrow>
            <h2 className="mt-6 font-serif text-3xl md:text-4xl text-cream tracking-tight leading-[1.05] allow-wrap">
              Straight answers.
            </h2>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {faqs.map((f) => (
              <details key={f.q} className="group py-6 md:py-7">
                <summary className="cursor-pointer flex items-start justify-between gap-6 text-cream list-none [&::-webkit-details-marker]:hidden hover:text-cream transition">
                  <span className="font-serif text-lg md:text-xl tracking-tight">{f.q}</span>
                  <span className="text-accent text-xl leading-none pt-1 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-stone leading-relaxed text-sm md:text-base max-w-3xl">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 text-sm text-stone">
            More detail on the{" "}
            <Link to="/faq" className="text-cream underline underline-offset-4 decoration-white/40 hover:decoration-white">
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