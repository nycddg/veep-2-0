import { useEffect, useState } from "react";
import headshotAsset from "@/assets/operator-headshot.png.asset.json";
import { useInView } from "./useInView";

/**
 * OperatorCanvas — homepage signature (D2 / Phase 3).
 * Locks: matrix bars+% kept · 95%+75+ kept · no float · matrix sm+ only · labels −10%.
 * C1 bar fill once · C2 “Match Matrix” · C3 16/9 · C4 no mobile matrix.
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
      className={`rounded-2xl border border-white/12 bg-[color:var(--surface-raised)]/95 backdrop-blur-xl p-5 sm:p-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.55)] light:border-ink/10 light:shadow-[0_16px_40px_-18px_rgba(26,31,58,0.18)] ${className}`}
    >
      <p className="eyebrow text-cream/75 mb-5">Match Matrix</p>
      <div className="space-y-3.5">
        {MATRIX.map((row) => (
          <div key={row.label}>
            <div className="flex justify-between items-baseline gap-3 mono-label text-[0.61875rem] tracking-[0.14em] text-cream mb-1.5 font-medium">
              <span className="min-w-0 truncate">{row.label}</span>
              <span className="shrink-0 tabular-nums text-cream/90">{row.value}%</span>
            </div>
            <div className="h-[3px] w-full rounded-full bg-white/10 light:bg-ink/10 overflow-hidden">
              <div
                className={`h-full rounded-full bg-accent ${
                  row.value === 100 ? "shadow-[0_0_10px_color-mix(in_oklab,var(--accent)_45%,transparent)]" : ""
                }`}
                style={{
                  width: animate ? `${row.value}%` : "0%",
                  transition: "width 420ms cubic-bezier(0.22, 1, 0.36, 1)",
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
      {/* Ambient accent — quieter so photo + card lead */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[70%] w-[70%] rounded-full bg-accent/8 blur-[90px] light:bg-accent/12"
      />

      <div className="relative">
        {/* Headshot — 16/9 locked */}
        <div className="relative z-10 mx-auto w-full max-w-2xl aspect-[16/9] overflow-hidden rounded-2xl sm:rounded-3xl bg-[color:var(--surface-raised)] ring-1 ring-white/10 light:ring-ink/10 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.65)] light:shadow-[0_20px_48px_-24px_rgba(26,31,58,0.22)]">
          <img
            src={headshotAsset.url}
            alt="Vetted operator headshot"
            width={1344}
            height={1017}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover object-bottom"
          />
          {/* Soft bottom vignette so matrix reads over photo edge */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/50 to-transparent light:from-background/30"
          />
        </div>

        {/* Match matrix — tablet/desktop only (C4) */}
        <div className="pointer-events-none hidden sm:block absolute -bottom-8 right-0 md:-right-5 z-20 w-[248px] md:w-[272px]">
          <div className="pointer-events-auto">
            <MatchMatrixCard animate={barsOn} />
          </div>
        </div>
      </div>

      {/* Proof — closer to assembly; clear of matrix overhang on sm+ */}
      <p className="mt-8 sm:mt-14 md:mt-16 text-center mono-label text-cream/80">
        95% match success rate · 75+ vetted senior operators
      </p>
    </div>
  );
}
