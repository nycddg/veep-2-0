import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { OperatorSpotlightRail } from "./OperatorSpotlightRail";
import { ClientStrip } from "./ClientStrip";
import { spotlightOperators } from "@/lib/spotlight-operators";

/**
 * OperatorSpotlightChapter — the home /#operators chapter as designed, shared
 * verbatim with For Funds (Dave 08.17 PASS4: home is the source of truth, no
 * per-page remixes). Eyebrow + h2 + body, the spotlight rail, the 75+
 * footnote, the Network impact dotted stat grid, and the aggregated-outcomes
 * chrome. Locked numbers live here once; render inside the page's own
 * section wrapper + container.
 */

const networkImpact = [
  { figure: "$2B+", label: "Cost savings delivered", detail: "Across transformation, product redesign, and operational efficiency initiatives." },
  { figure: "$1B+", label: "Capital raised", detail: "Across venture funding, structured finance, and other capital raises." },
  { figure: "$3B+", label: "New revenue generated", detail: "Through new business lines, go-to-market strategy, and product commercialization." },
  { figure: "20+", label: "Exits & acquisitions", detail: "Across strategic sales, acquisitions, and related integration work." },
];

export function OperatorSpotlightChapter({
  headline = "Operators who've held the seat.",
  sub = "Senior leaders who have built teams, run functions, and delivered through change. We select for the work, your business model, and your company stage, with experience and references you can assess.",
  operators = spotlightOperators,
  ctaTo = "/for-companies",
  ctaLabel = "For founders",
}: {
  headline?: string;
  sub?: string;
  operators?: typeof spotlightOperators;
  ctaTo?: "/for-companies" | "/contact" | "/for-portfolios";
  ctaLabel?: string;
}) {
  return (
    <>
      <div className="max-w-5xl mb-12 md:mb-14">
        <div className="eyebrow">Operator spotlight</div>
        <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
          {headline}
        </h2>
        <p className="mt-8 text-stone text-base md:text-lg leading-relaxed">
          {sub}
        </p>
      </div>
      <OperatorSpotlightRail operators={operators} />

      {/* Network impact */}
      <div className="mt-[30px] md:mt-[46px]">
        <div className="eyebrow">Operator Impact at companies you admire</div>
        <div className="mt-[50px] relative">
          <div className="motion-stagger relative grid grid-cols-2 lg:grid-cols-4 gap-y-10">
            {networkImpact.map((m, i) => (
              <div
                key={m.label}
                className="flex flex-col gap-3 group pr-8 last:pr-0 lg:pr-8 lg:last:pr-0 border-white/10 even:border-l even:pl-8 lg:[&:nth-child(n+2)]:border-l lg:[&:nth-child(n+2)]:pl-8"
              >
                <div className="flex items-center gap-2.5">
                  <div className="relative shrink-0">
                    <div
                      className="problem-diagram-pulse absolute inset-0 rounded-full bg-accent-coral/50"
                      style={{ animationDelay: `${i * 0.45}s` }}
                    />
                    <div className="relative w-2 h-2 rounded-full bg-accent-coral" />
                  </div>
                  <span className="mono-label font-medium">
                    {m.label}
                  </span>
                </div>
                <div className="stat-figure text-4xl md:text-5xl text-cream leading-none">
                  {m.figure}
                </div>
                <p className="text-xs text-stone leading-relaxed">
                  {m.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        <ClientStrip />

        <div className="mt-10 md:mt-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-t border-white/10 pt-8">
          <p className="text-sm text-stone">
            75+ vetted senior operators · Average 18 years' experience · Every operator has held the seat
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <Link
              to={ctaTo}
              className="group motion-link inline-flex items-center gap-2 text-sm font-medium text-cream underline underline-offset-8 hover:underline-offset-4 decoration-white/30 hover:decoration-white/70"
            >
              {ctaLabel} <ArrowRight size={14} className="motion-arrow" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
