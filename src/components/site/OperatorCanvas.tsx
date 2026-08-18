import { useEffect, useState } from "react";
import headshotAsset from "@/assets/operator-headshot.png.asset.json";
import { useInView } from "./useInView";

/**
 * OperatorCanvas — homepage signature (D2 / Phase 3).
 * Locks: matrix bars+% kept · 95%+75+ kept · no float · matrix sm+ only · labels −10%.
 * C1 bar fill once · C2 assigned-partner card · C3 16/9 · C4 no mobile matrix.
 */
const MATRIX = [
  { label: "Functional Depth", value: 97 },
  { label: "Business Model Familiarity", value: 95 },
  { label: "Industry Expertise", value: 98 },
  { label: "Life Stage Experience", value: 100 },
] as const;

function MatchMatrixCard({
  animate,
  className = "",
}: {
  animate: boolean;
  className?: string;
}) {
  return (
    <div
      className={`match-matrix-card rounded-[15px] bg-[color:oklch(0.225_0.024_258)]/95 backdrop-blur-xl p-4 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.55)] light:shadow-[0_16px_40px_-18px_rgba(26,31,58,0.28)] text-left ${className}`}
    >
      <p className="eyebrow mb-4 !text-[10px] text-center !text-[color:oklch(0.98_0_0)]">
        Assigned Operating Partner
      </p>
      <div className="space-y-2.5">
        {MATRIX.map((row, i) => (
          <div key={row.label}>
            <div className="flex justify-between items-baseline gap-2 text-[10px] text-stone mb-1">
              <span className="min-w-0 text-left leading-snug">{row.label}</span>
              <span className="shrink-0 tabular-nums">{row.value}%</span>
            </div>
            <div className="h-[3px] w-full rounded-full bg-white/10 light:bg-ink/10 overflow-hidden">
              <div
                className={`h-full rounded-full bg-accent-coral ${
                  row.value === 100 ? "shadow-[0_0_10px_color-mix(in_oklab,var(--accent-coral)_45%,transparent)]" : ""
                }`}
                style={{
                  width: animate ? `${row.value}%` : "0%",
                  // Bars fill in sequence — one gesture, top to bottom.
                  transition: `width 700ms cubic-bezier(0.16, 1, 0.3, 1) ${i * 90}ms`,
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
  const [ref, inView] = useInView<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -8% 0px",
  });
  const [barsOn, setBarsOn] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setBarsOn(true);
      return;
    }
    // One frame delay so transition from 0 → value paints
    const id = window.requestAnimationFrame(() => setBarsOn(true));
    return () => window.cancelAnimationFrame(id);
  }, [inView]);

  return (
    <div ref={ref} className="relative w-full max-w-3xl mx-auto px-4 md:px-0">
      {/* Ambient accent — quieter so photo + card lead. Dark only: paper doesn't glow. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[70%] w-[70%] rounded-full bg-accent/8 blur-[90px] light:hidden"
      />

      <div className="relative mx-auto w-full max-w-[20rem] sm:max-w-2xl">
        {/* Headshot — mobile portrait 3/4 (spotlight parity); sm+ 16/9 under matrix */}
        <div className="relative z-10 aspect-[3/4] sm:aspect-[16/9] overflow-hidden rounded-[15px] bg-[color:var(--surface-raised)] shadow-[0_24px_60px_-28px_rgba(0,0,0,0.65)] light:shadow-[0_20px_48px_-24px_rgba(26,31,58,0.22)]">
          <img
            src={headshotAsset.url}
            alt="Vetted operator headshot"
            width={1344}
            height={1017}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover object-bottom scale-110 origin-bottom sm:scale-100"
          />
          {/* Soft bottom vignette so matrix reads over photo edge (sm+) */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-background/50 to-transparent light:from-background/30 max-sm:hidden"
          />
        </div>

        {/* Assigned-partner card — hangs off the photo’s bottom-right, matching
            the right overhang. Proof line below is spaced from this card. */}
        <div className="pointer-events-none hidden sm:block absolute -bottom-5 -right-5 z-20 w-[240px]">
          <div className="pointer-events-auto">
            <MatchMatrixCard animate={barsOn} />
          </div>
        </div>
      </div>

      {/* Proof — mt-6 from the photo on mobile; sm+ adds the card hang
          (-bottom-5) so the gap is card-to-line, not photo-to-line. */}
      <p className="mt-6 sm:mt-11 text-center mono-label text-cream/80">
        95% match success rate · 75+ vetted senior operators
      </p>
    </div>
  );
}
