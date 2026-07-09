// Hero visual — Barcode.
// 48 vertical lines across the panel; stroke weight ramps thin for 60%,
// rises to a plateau in the next 20%, then returns to thin. Each line fades
// from the deep navy background to cream at its center and back.

const LINES = 48;
const VB = 480;
const CY = VB / 2;
const SIDE_PAD = 40;
const USABLE_W = VB - SIDE_PAD * 2;
const COL_GAP = USABLE_W / (LINES - 1);
const START_X = SIDE_PAD;

const BAND_H = VB * 0.7;
const MAX_W = 6.5;
const MIN_W = 0.6;

function smoothstep(t: number) {
  const s = Math.max(0, Math.min(1, t));
  return s * s * (3 - 2 * s);
}

function envelopeAt(i: number) {
  const t = i / (LINES - 1);
  if (t < 0.6) return 0;
  if (t < 0.7) return smoothstep((t - 0.6) / 0.1);
  if (t < 0.8) return 1;
  if (t < 0.85) return 1 - smoothstep((t - 0.8) / 0.05);
  return 0;
}

const cols = Array.from({ length: LINES }, (_, i) => {
  const env = envelopeAt(i);
  return {
    x: START_X + i * COL_GAP,
    w: MIN_W + (MAX_W - MIN_W) * env,
  };
});

export function HeroMotif() {
  return (
    <div className="relative aspect-square w-full max-w-[520px] mx-auto">
      <div className="absolute inset-0 overflow-hidden">
        <svg
          viewBox={`0 0 ${VB} ${VB}`}
          className="absolute inset-0 h-full w-full"
          aria-hidden
        >
          <defs>
            <linearGradient
              id="lineGradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              y1={CY - BAND_H / 2}
              x2="0"
              y2={CY + BAND_H / 2}
            >
              <stop offset="0%" stopColor="var(--background, #050810)" />
              <stop offset="50%" stopColor="var(--cream, #F5F1EA)" />
              <stop offset="100%" stopColor="var(--background, #050810)" />
            </linearGradient>
          </defs>
          {cols.map((c, i) => {
            const y1 = CY - BAND_H / 2;
            const y2 = CY + BAND_H / 2;
            return (
              <line
                key={i}
                x1={c.x}
                y1={y1}
                x2={c.x}
                y2={y2}
                stroke="url(#lineGradient)"
                strokeWidth={c.w}
                strokeLinecap="butt"
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
}
