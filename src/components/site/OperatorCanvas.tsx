import headshotAsset from "@/assets/operator-headshot.png.asset.json";

const MATRIX = [
  { label: "Functional Depth", value: 97 },
  { label: "Business Model Familiarity", value: 95 },
  { label: "Industry Expertise", value: 98 },
  { label: "Life Stage Experience", value: 100 },
];

function MatchMatrixCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-[oklch(0.16_0.028_262)]/95 backdrop-blur-3xl rounded-2xl p-6 shadow-[0_30px_60px_rgba(0,0,0,0.5)] ${className}`}
    >
      <p className="eyebrow text-white/80 mb-5">Match Matrix</p>
      <div className="space-y-4">
        {MATRIX.map((row) => (
          <div key={row.label}>
            <div className="flex justify-between mono-label text-[0.61875rem] tracking-[0.14em] text-white mb-1.5 font-medium">
              <span>{row.label}</span>
              <span>{row.value}%</span>
            </div>
            <div className="h-1 w-full bg-[oklch(1_0_0/0.15)] rounded-full overflow-hidden">
              <div
                className="h-full bg-accent"
                style={{
                  width: `${row.value}%`,
                  boxShadow: row.value === 100 ? "0 0 8px rgba(120,159,255,0.5)" : undefined,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

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

        {/* Match matrix — tablet/desktop only (hidden on mobile) */}
        <div className="hidden sm:block absolute -bottom-10 right-0 md:-right-6 z-20 w-[260px] md:w-[280px]">
          <MatchMatrixCard />
        </div>
      </div>

      <p className="mt-10 sm:mt-14 md:mt-16 text-center mono-label">
        95% match success rate · 75+ vetted senior operators
      </p>
    </div>
  );
}
