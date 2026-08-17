import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BOOKING_URL } from "@/lib/booking";
import { OperatorSpotlightRail } from "./OperatorSpotlightRail";
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
  { figure: "$2B+", label: "Cost savings delivered", detail: "Across transformation, product redesign, and operational efficiency initiatives at global enterprises." },
  { figure: "$1B+", label: "Capital raised", detail: "Venture funding, structured finance, SPACs, and instruments like securitized bonds." },
  { figure: "$3B+", label: "New revenue generated", detail: "Through new business lines, go-to-market strategy, and product commercialization." },
  { figure: "20+", label: "Exits & acquisitions", detail: "Including strategic sales, integrations, and post-merger transformations." },
];

export function OperatorSpotlightChapter() {
  return (
    <>
      <div className="max-w-5xl mb-12 md:mb-14">
        <div className="eyebrow">Operator spotlight</div>
        <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
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
      <div className="mt-20 md:mt-24">
        <div className="border-t border-white/10 pt-8 mb-12">
          <div className="eyebrow">Network impact</div>
        </div>

        <div className="relative">
          <div className="motion-stagger relative grid grid-cols-2 lg:grid-cols-4 gap-y-10">
            {networkImpact.map((m, i) => (
              <div
                key={m.label}
                className="flex flex-col gap-3 group border-l border-white/10 pl-8 pr-8 odd:border-l-0 odd:pl-0 lg:odd:border-l lg:odd:pl-8 lg:first:border-l-0 lg:first:pl-0 last:pr-0 lg:pr-8 lg:last:pr-0"
              >
                <div className="flex items-center gap-2.5">
                  <div className="relative">
                    {i === 0 && (
                      <div className="motion-ping absolute inset-0 rounded-full bg-accent/40" />
                    )}
                    <div className="relative w-2 h-2 rounded-full bg-accent" />
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

        <p className="mt-12 mono-label text-right">
          Aggregated outcomes across our operator roster.
        </p>

        <div className="mt-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-t border-white/10 pt-8">
          <p className="text-sm text-stone">
            75+ vetted senior operators · Avg. 18 yrs experience · Every operator has held the seat
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group motion-link inline-flex items-center gap-2 text-sm font-medium text-cream underline underline-offset-8 hover:underline-offset-4 decoration-white/30 hover:decoration-white/70"
            >
              Book intro call <ArrowRight size={14} className="motion-arrow" />
            </a>
            <Link
              to="/contact"
              className="motion-link inline-flex items-center gap-2 text-sm text-cream/70 underline underline-offset-8 hover:underline-offset-4 decoration-white/20 hover:text-cream hover:decoration-white/50"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
