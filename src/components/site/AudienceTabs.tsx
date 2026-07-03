import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { CheckList, Eyebrow, MockPanel, FloatingChip } from "./primitives";
import { ArrowUpRight } from "lucide-react";

type Pillar = {
  eyebrow: string;
  title: string;
  bullets: string[];
  href: "/services/fractional-cfo" | "/services/interim" | "/services/executive-bench" | "/services/ai-operators" | "/for-portfolios";
  panelTitle: string;
  panelRows: { k: string; v: string }[];
};

const companiesPillars: Pillar[] = [
  {
    eyebrow: "Fractional",
    title: "A C-suite operator, running the function.",
    bullets: [
      "CFO, CCO, CTO, CMO, or COO capacity on an ongoing cadence",
      "Owns the function, the team, and the board narrative",
      "Board and investor reporting, GTM cadence, or product roadmap",
      "Scoped before you commit to a full-time hire",
    ],
    href: "/services/fractional-cfo",
    panelTitle: "Fractional C-suite",
    panelRows: [
      { k: "Onboarded", v: "< 10 days" },
      { k: "Cadence", v: "Weekly + on-call" },
      { k: "Guarantee", v: "30-day fit" },
    ],
  },
  {
    eyebrow: "Interim",
    title: "Own the seat while the search runs.",
    bullets: [
      "Full ownership of a C-level seat during transition",
      "Preserves the permanent search",
      "Clarifies what the full-time hire should actually own",
      "Stabilizes the team and the board narrative",
    ],
    href: "/services/interim",
    panelTitle: "Interim CFO / CCO / CTO / CMO / COO",
    panelRows: [
      { k: "Coverage", v: "Full seat" },
      { k: "Term", v: "3–9 months" },
      { k: "Handoff", v: "Structured" },
    ],
  },
  {
    eyebrow: "Sprint",
    title: "Ship one critical initiative with a clear endpoint.",
    bullets: [
      "GTM redesign, pricing reset, org redesign",
      "Capital raise, M&A integration, or transaction prep",
      "Product, platform, or ERP rebuild",
      "One senior operator, one outcome, one deadline",
    ],
    href: "/services/ai-operators",
    panelTitle: "Sprint engagement",
    panelRows: [
      { k: "Scope", v: "Single outcome" },
      { k: "Timeline", v: "6–12 weeks" },
      { k: "Team", v: "Operator + AI" },
    ],
  },
];

const portfoliosPillars: Pillar[] = [
  {
    eyebrow: "Bench",
    title: "An executive bench across the portfolio.",
    bullets: [
      "Priority access to vetted CFO, CCO, CTO, CMO, and COO operators",
      "Emergency coverage path for interim vacancies",
      "Quarterly executive capacity planning",
      "Preferred commercial terms on engagements",
    ],
    href: "/services/executive-bench",
    panelTitle: "Portfolio Executive Bench",
    panelRows: [
      { k: "Response SLA", v: "5 business days" },
      { k: "Included", v: "Diagnostics + planning" },
      { k: "Usage", v: "Billed separately" },
    ],
  },
  {
    eyebrow: "Audit",
    title: "Executive Capacity Audit for the portfolio.",
    bullets: [
      "Portfolio-wide leadership risk map",
      "CFO / CCO / CTO / CMO / COO coverage assessment",
      "Upcoming capital and event triggers",
      "Recommended bench structure per company",
    ],
    href: "/for-portfolios",
    panelTitle: "Capacity Audit",
    panelRows: [
      { k: "Duration", v: "2–3 weeks" },
      { k: "Output", v: "Risk map + plan" },
      { k: "Format", v: "Portfolio review" },
    ],
  },
  {
    eyebrow: "MSA",
    title: "Executive Capacity MSA, activated in days.",
    bullets: [
      "Master agreement signed once, SOWs per role",
      "Standard terms pre-approved across portcos",
      "Sourcing, replacement, QA, and billing managed",
      "Works for serial acquirers and holdcos",
    ],
    href: "/services/executive-bench",
    panelTitle: "Executive Capacity MSA",
    panelRows: [
      { k: "Setup", v: "One agreement" },
      { k: "Activation", v: "Per SOW" },
      { k: "Ops", v: "Fully managed" },
    ],
  },
];

export function AudienceTabs() {
  const [tab, setTab] = useState<"companies" | "portfolios">("companies");
  const pillars = tab === "companies" ? companiesPillars : portfoliosPillars;

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="max-w-2xl">
          <Eyebrow>How Veep engages</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-[1.05] text-ink">
            One platform. <em className="italic text-forest">Two ways to buy.</em>
          </h2>
          <p className="mt-4 text-stone max-w-lg">
            Individual companies buy engagements against a specific business
            moment. Investors and holdcos retain an executive bench across
            their portfolio.
          </p>
        </div>

        <div className="inline-flex rounded-full border border-border p-1 bg-card self-start">
          {[
            { id: "companies", label: "For Companies" },
            { id: "portfolios", label: "For Portfolios" },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id as typeof tab)}
              className={`px-4 py-2 text-sm rounded-full transition ${
                tab === t.id ? "bg-ink text-cream" : "text-stone hover:text-ink"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-16">
        {pillars.map((p, idx) => (
          <div
            key={p.title}
            className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
              idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div>
              <Eyebrow>{p.eyebrow}</Eyebrow>
              <h3 className="mt-4 font-serif text-3xl md:text-4xl text-ink leading-tight">
                {p.title}
              </h3>
              <div className="mt-6">
                <CheckList items={p.bullets} />
              </div>
              <Link
                to={p.href}
                className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-forest hover:opacity-80"
              >
                Learn more <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="relative">
              <MockPanel>
                <div className="text-xs uppercase tracking-widest text-stone">{p.eyebrow}</div>
                <div className="mt-1 font-serif text-2xl text-ink">{p.panelTitle}</div>
                <div className="mt-5 grid grid-cols-3 gap-3">
                  {p.panelRows.map((r) => (
                    <div key={r.k} className="rounded-xl bg-secondary p-3">
                      <div className="text-[10px] uppercase tracking-widest text-stone">{r.k}</div>
                      <div className="mt-1 text-sm font-medium text-ink">{r.v}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 space-y-2">
                  {p.bullets.slice(0, 3).map((b) => (
                    <div key={b} className="rounded-xl border border-border px-4 py-3 text-sm text-ink flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-forest" /> {b}
                    </div>
                  ))}
                </div>
              </MockPanel>
              <FloatingChip label="Model" value={p.eyebrow} className="absolute -top-4 -right-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
