// Hero visual — Lens.
// Horizontal hairlines stacked vertically; length envelope forms a lens/almond.
// Cream strokes at low opacity, center strokes shift toward indigo.
// Very slow, barely-perceptible drift. Respects prefers-reduced-motion.

const LINES = 32;
const VB = 480;                    // viewBox size
const CY = VB / 2;                 // vertical center
const ROW_GAP = 9;                 // px between rows
const START_Y = CY - ((LINES - 1) * ROW_GAP) / 2;
const MAX_W = 360;                 // widest line
const MIN_W = 22;                  // shortest line (top/bottom)

// Smooth lens envelope: cosine falloff from center.
function widthAt(i: number) {
  const t = (i - (LINES - 1) / 2) / ((LINES - 1) / 2); // -1..1
  const env = Math.cos((t * Math.PI) / 2); // 0..1..0
  // Slight power curve so the belly holds a bit longer than pure cosine
  const shaped = Math.pow(env, 0.85);
  return MIN_W + (MAX_W - MIN_W) * shaped;
}

// How "indigo" a row is (0 = cream, 1 = full indigo). Peaks at center.
function accentAt(i: number) {
  const t = (i - (LINES - 1) / 2) / ((LINES - 1) / 2);
  const env = Math.cos((t * Math.PI) / 2);
  return Math.pow(env, 6); // sharp peak — only middle 3–4 lines glow
}

const rows = Array.from({ length: LINES }, (_, i) => {
  const w = widthAt(i);
  const accent = accentAt(i);
  return {
    y: START_Y + i * ROW_GAP,
    w,
    accent,
    // Distinct phase for each row so drift feels organic, not synchronized.
    phase: (i * 37) % 100,
  };
});

export function HeroMotif() {
  return (
    <div className="relative aspect-square w-full max-w-[520px] mx-auto">
      <div className="absolute inset-0 rounded-sm border border-white/10 bg-white/[0.015] overflow-hidden">
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#F5F1EA 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Corner meta */}
        <div className="absolute top-5 left-5 font-mono text-[10px] tracking-[0.12em] uppercase text-cream/40">
          Ownership · Lens
        </div>
        <div className="absolute top-5 right-5 flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] uppercase text-cream/40">
          <span className="h-1.5 w-1.5 rounded-full bg-accent motif-pulse" />
          Active
        </div>
        <div className="absolute bottom-5 left-5 right-5 flex justify-between font-mono text-[10px] tracking-[0.12em] uppercase text-cream/30">
          <span>Streams → Owner → Output</span>
          <span>V-01</span>
        </div>

        <svg
          viewBox={`0 0 ${VB} ${VB}`}
          className="absolute inset-0 h-full w-full"
          aria-hidden
        >
          {rows.map((r, i) => {
            // Mix cream → indigo by accent factor.
            // Cream #F5F1EA ; Indigo #6366F1
            const mix = (a: number, b: number) => Math.round(a + (b - a) * r.accent);
            const R = mix(0xf5, 0x63);
            const G = mix(0xf1, 0x66);
            const B = mix(0xea, 0xf1);
            const color = `rgb(${R} ${G} ${B})`;
            // Opacity: outer lines faint, center lines fuller.
            const op = 0.18 + r.accent * 0.55;

            const x1 = (VB - r.w) / 2;
            const x2 = x1 + r.w;

            return (
              <line
                key={i}
                x1={x1}
                y1={r.y}
                x2={x2}
                y2={r.y}
                stroke={color}
                strokeOpacity={op}
                strokeWidth={1}
                strokeLinecap="round"
                className="motif-line"
                style={{
                  animationDelay: `-${r.phase / 10}s`,
                }}
              />
            );
          })}
        </svg>
      </div>

      <style>{`
        @keyframes motifLineDrift {
          0%,100% { transform: translateX(0px); }
          50%     { transform: translateX(2px); }
        }
        .motif-line {
          transform-box: fill-box;
          transform-origin: center;
          animation: motifLineDrift 9s ease-in-out infinite;
        }
        @keyframes motifPulse {
          0%, 100% { opacity: 0.5; }
          50%      { opacity: 1; }
        }
        .motif-pulse { animation: motifPulse 2.4s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .motif-line, .motif-pulse { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
