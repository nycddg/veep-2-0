import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

const mandates = [
  {
    name: "Transaction Readiness",
    outcome: "Walk into diligence knowing which numbers hold up.",
    deliverables: [
      "3-year model and use of proceeds",
      "Diligence pack that survives investor questions",
      "Reporting cadence the board can run",
    ],
    proofId: "proof-raise",
  },
  {
    name: "Revenue Repeatability",
    outcome: "Turn founder-led selling into a motion the team can run.",
    deliverables: [
      "Pricing and packaging that hold",
      "Pipeline stages and forecast discipline",
      "Weekly commercial cadence",
    ],
    proofId: "proof-studio",
  },
  {
    name: "Commercial Expansion",
    outcome: "Open the next line of business without breaking the current one.",
    deliverables: [
      "Offer and market thesis",
      "Launch plan with owners",
      "Margin rules so the new work does not subsidize the old",
    ],
    proofId: "proof-studio",
  },
] as const;

export function MandateCatalog() {
  return (
    <div className="border-y border-white/10 divide-y divide-white/10">
      {mandates.map((m) => (
        <div
          key={m.name}
          className="grid items-start gap-6 py-8 md:py-10 lg:grid-cols-12 lg:grid-rows-[auto_auto] lg:gap-x-10 lg:gap-y-3"
        >
          <div className="lg:col-span-4 lg:col-start-1 lg:row-span-2 lg:grid lg:grid-rows-subgrid">
            <h3 className="font-serif font-medium text-xl md:text-2xl text-cream tracking-tight leading-snug">
              {m.name}
            </h3>
            <p className="mt-3 text-base text-stone leading-relaxed lg:mt-0">{m.outcome}</p>
          </div>
          <ul className="space-y-2.5 lg:col-span-5 lg:col-start-5 lg:row-start-2">
            {m.deliverables.map((d) => (
              <li
                key={d}
                className="font-mono text-[0.8125rem] leading-relaxed tracking-wide text-stone"
              >
                {d}
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-start lg:col-span-3 lg:col-start-10 lg:row-start-2">
            <Link
              to="/"
              hash={m.proofId}
              activeOptions={{ includeHash: true }}
              className="group motion-link inline-flex items-start gap-2 text-sm text-cream/90 hover:text-cream underline underline-offset-8 hover:underline-offset-4 decoration-white/30 hover:decoration-white/70 min-h-11"
            >
              See the work <ArrowRight size={14} className="motion-arrow" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
