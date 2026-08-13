import headshotAsset from "@/assets/operator-headshot.png.asset.json";

/**
 * Match dimensions — visual checklist only.
 * No UNRESOLVED percentages (DNA Phase 0). Bars are equal chrome, not scores.
 */
const MATRIX = [
  { label: "Functional Depth" },
  { label: "Business Model Familiarity" },
  { label: "Industry Expertise" },
  { label: "Life Stage Experience" },
];

export function OperatorCanvas() {
  return (
    <div className="relative w-full max-w-3xl mx-auto px-4 md:px-0">
      {/* ambient indigo glow */}
      <div className="absolute inset-0 bg-accent/10 blur-[120px] rounded-full scale-90 pointer-events-none" />

      <div className="relative">
        {/* Headshot slot */}
        <div className="relative z-10 mx-auto w-full aspect-[16/9] max-w-2xl rounded-3xl bg-[color:var(--surface-raised)] overflow-hidden shadow-2xl">
          <img
            src={headshotAsset.url}
            alt="Vetted operator headshot"
            width={1344}
            height={1017}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-bottom"
          />
        </div>

        {/* Match matrix — floating surface over hero media (no fake % scores) */}
        <div className="hidden sm:block absolute -bottom-10 right-0 md:-right-6 z-20 bg-[oklch(0.16_0.028_262)]/95 backdrop-blur-3xl rounded-2xl p-6 shadow-[0_30px_60px_rgba(0,0,0,0.5)] w-[260px] md:w-[280px] op-float-delayed">
          <p className="eyebrow text-white/80 mb-5">Match Matrix</p>
          <div className="space-y-4">
            {MATRIX.map((row) => (
              <div key={row.label}>
                <div className="mono-label text-white mb-1.5 font-medium">{row.label}</div>
                <div className="h-1 w-full bg-[oklch(1_0_0/0.15)] rounded-full overflow-hidden">
                  <div className="h-full w-full bg-accent/90" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Verified DNA proof only */}
      <p className="mt-14 sm:mt-16 text-center mono-label">
        75+ vetted senior operators · Matched in 72 hours · Deployed in under 10 days
      </p>

      <style>{`
        @keyframes op-float-delayed { 0%,100% { transform: translateY(0) } 50% { transform: translateY(12px) } }
        .op-float-delayed { animation: op-float-delayed 7s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .op-float-delayed { animation: none; }
        }
      `}</style>
    </div>
  );
}
