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

const BAND_MAX = VB * 0.74;
const BAND_MIN = VB * 0.62;
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

// Low-amplitude drift — mostly uniform lines with just enough variation for personality.
function heightAt(i: number) {
  const a = Math.sin(i * 0.9 + 0.4) * 0.5 + 0.5;
  const b = Math.sin(i * 0.31 + 1.7) * 0.5 + 0.5;
  const n = a * 0.75 + b * 0.25; // 0..1
  return BAND_MIN + (BAND_MAX - BAND_MIN) * n;
}

const cols = Array.from({ length: LINES }, (_, i) => {
  const env = envelopeAt(i);
  return {
    x: START_X + i * COL_GAP,
    w: MIN_W + (MAX_W - MIN_W) * env,
    h: heightAt(i),
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
              y1={CY - BAND_MAX / 2}
              x2="0"
              y2={CY + BAND_MAX / 2}
            >
              <stop offset="0%" stopColor="#050810" />
              <stop offset="15%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#6366f1" />
              <stop offset="85%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#050810" />
            </linearGradient>
          </defs>
          {cols.map((c, i) => {
            const y1 = CY - c.h / 2;
            const y2 = CY + c.h / 2;
            return (
              <line
                key={i}
                x1={c.x}
                y1={y1}
                x2={c.x}
                y2={y2}
                stroke="url(#lineGradient)"
                strokeWidth={c.w}
                strokeLinecap="round"
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
}
