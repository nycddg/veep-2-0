// Weight lifts: work gets picked up, owned, organized.
// A messy stack of bars (unowned work) at the bottom-left lifts, rotates, and
// settles into a clean aligned column on the right (owned work).
// Pure SVG + CSS keyframes. Respects prefers-reduced-motion.

type Bar = {
  // Source (messy pile) position + rotation
  sx: number;
  sy: number;
  sr: number; // rotation deg
  w: number;  // bar width
  // Destination (owned column) y-slot
  dy: number;
  // Timing
  delay: number;
};

const BAR_H = 10;
const DEST_X = 240;
const DEST_W = 140;
const CYCLE = 12; // seconds

// Six bars, staggered. Source positions spread across the left pile so bars
// sit distinctly; rotations are around each bar's own center.
const BARS: Bar[] = [
  { sx: 70,  sy: 372, sr: -8, w: 150, dy: 100, delay: 0.0 },
  { sx: 95,  sy: 340, sr:  5, w: 130, dy: 122, delay: 1.6 },
  { sx: 60,  sy: 310, sr: -3, w: 160, dy: 144, delay: 3.2 },
  { sx: 105, sy: 280, sr:  9, w: 120, dy: 166, delay: 4.8 },
  { sx: 75,  sy: 250, sr: -6, w: 140, dy: 188, delay: 6.4 },
  { sx: 90,  sy: 220, sr:  4, w: 130, dy: 210, delay: 8.0 },
];

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
          Work · Owned
        </div>
        <div className="absolute top-5 right-5 flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] uppercase text-cream/40">
          <span className="h-1.5 w-1.5 rounded-full bg-accent motif-pulse" />
          Active
        </div>
        <div className="absolute bottom-5 left-5 right-5 flex justify-between font-mono text-[10px] tracking-[0.12em] uppercase text-cream/30">
          <span>Load → Owner</span>
          <span>V-01</span>
        </div>

        <svg viewBox="0 0 440 440" className="absolute inset-0 h-full w-full" aria-hidden>
          {/* Column guide on the right — where owned work stacks */}
          <line
            x1={DEST_X}
            y1={90}
            x2={DEST_X}
            y2={230}
            stroke="#F5F1EA"
            strokeOpacity="0.12"
            strokeDasharray="2 4"
          />
          <line
            x1={DEST_X + DEST_W}
            y1={90}
            x2={DEST_X + DEST_W}
            y2={230}
            stroke="#F5F1EA"
            strokeOpacity="0.12"
            strokeDasharray="2 4"
          />

          {BARS.map((b, i) => {
            const startDy = b.dy;
            const startDx = DEST_X + DEST_W / 2;
            const style: React.CSSProperties = {
              // custom props consumed by keyframes
              ["--sx" as string]: `${b.sx}px`,
              ["--sy" as string]: `${b.sy}px`,
              ["--sr" as string]: `${b.sr}deg`,
              ["--dx" as string]: `${startDx}px`,
              ["--dy" as string]: `${startDy}px`,
              animationDelay: `${b.delay}s`,
            };
            return (
              <g key={i} className="motif-bar" style={style}>
                <rect
                  x={-b.w / 2}
                  y={-BAR_H / 2}
                  width={b.w}
                  height={BAR_H}
                  rx={1}
                  fill="#F5F1EA"
                  fillOpacity="0.85"
                />
              </g>
            );
          })}

          {/* Final aligned column ghosts (very faint) to hint destination */}
          {BARS.map((b, i) => (
            <rect
              key={`ghost-${i}`}
              x={DEST_X - DEST_W / 2 + DEST_W / 2}
              y={b.dy - BAR_H / 2}
              width={DEST_W}
              height={BAR_H}
              rx={1}
              fill="#6366F1"
              fillOpacity="0.06"
            />
          ))}
        </svg>
      </div>

      <style>{`
        @keyframes motifBar {
          /* Rest at source */
          0% {
            transform: translate(var(--sx), var(--sy)) rotate(var(--sr));
            opacity: 0.85;
          }
          /* Lift: rise + un-rotate */
          18% {
            transform: translate(var(--sx), calc(var(--sy) - 40px)) rotate(0deg);
            opacity: 1;
          }
          /* Travel to destination x, still above final y */
          32% {
            transform: translate(var(--dx), calc(var(--dy) - 30px)) rotate(0deg);
            opacity: 1;
          }
          /* Settle into slot */
          40%, 100% {
            transform: translate(var(--dx), var(--dy)) rotate(0deg);
            opacity: 1;
          }
        }
        .motif-bar {
          transform-box: fill-box;
          transform-origin: 0 0;
          animation: motifBar ${CYCLE}s cubic-bezier(0.22, 0.61, 0.36, 1) infinite;
        }
        @keyframes motifPulse {
          0%, 100% { opacity: 0.5; }
          50%      { opacity: 1; }
        }
        .motif-pulse { animation: motifPulse 2.4s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .motif-bar, .motif-pulse { animation: none !important; }
          .motif-bar { transform: translate(var(--dx), var(--dy)); }
        }
      `}</style>
    </div>
  );
}
