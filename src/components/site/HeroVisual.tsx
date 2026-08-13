import { GradientPyramid } from "./illustrations";

const cols = [
  { k: "0.1", h: "Fractional", d: "C-suite capacity for the pivotal moment." },
  { k: "0.2", h: "Interim", d: "Own the seat while the search runs." },
  { k: "0.3", h: "Sprint", d: "Ship one outcome with a clear endpoint." },
  { k: "0.4", h: "Roster", d: "Portfolio-wide executive capacity." },
  { k: "0.5", h: "AI Ops", d: "Operators governing unlimited AI staff." },
];

export function HeroVisual() {
  return (
    <div className="w-full">
      <div className="text-center">
        <div className="mono-label">
          / POWERED BY
        </div>
        <div className="mt-3 text-3xl md:text-4xl tracking-tight text-cream">
          Operator Roster<sup className="mono-label ml-1 normal-case tracking-normal">™</sup>
        </div>
      </div>
      <GradientPyramid className="w-full h-[300px] mt-6" />
      <div className="grid grid-cols-5 gap-4 pt-6 border-t border-white/8">
        {cols.map((c) => (
          <div key={c.k}>
            <div className="text-[12px] leading-snug">
              <span className="text-cream">{c.h}</span>{" "}
              <span className="text-stone">{c.d}</span>
            </div>
            <div className="mt-6 mono-label">
              {c.k}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
