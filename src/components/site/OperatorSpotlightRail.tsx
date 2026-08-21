import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Operator = {
  name: string;
  role: string;
  priorCompanies?: string[];
  summary?: string;
  chips: string[];
  photoUrl?: string;
  photoPosition?: string;
  photoScale?: number;
  featured?: boolean;
};

function initials(name: string) {
  return name.split(" ").filter(Boolean).slice(0, 2).map((s) => s[0]).join("");
}

function OperatorCard({ op }: { op: Operator }) {
  return (
    <article
      tabIndex={0}
      className={`group relative flex-shrink-0 w-[300px] sm:w-[320px] lg:w-[340px] aspect-[3/4] snap-start overflow-hidden rounded-[6px] bg-[color:var(--surface-raised)] cursor-pointer transition-colors duration-300 ${
        op.featured ? "ring-1 ring-inset ring-[color:var(--color-accent-coral)]/40" : ""
      } focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background`}
      aria-label={`${op.name}, ${op.role}`}
    >
      {/* Portrait */}
      <div className="absolute inset-0 transition-all duration-500 group-hover:scale-105 group-focus-within:scale-105">
        {op.photoUrl ? (
          <img
            src={op.photoUrl}
            alt={op.name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover brightness-90 transition-all duration-500 group-hover:brightness-100 group-focus-within:brightness-100"
            style={{
              objectPosition: op.photoPosition ?? "top",
              transform: op.photoScale ? `scale(${op.photoScale})` : undefined,
              transformOrigin: op.photoScale ? "top center" : undefined,
            }}
          />
        ) : (
          <div className="w-full h-full grid place-items-center bg-accent-coral/10 text-accent-coral/70 font-mono text-5xl">
            {initials(op.name)}
          </div>
        )}
      </div>

      {/* Blue (or coral) tint overlay — ~10-15% */}
      <div
        className={`absolute inset-0 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0 group-focus-within:opacity-0 ${
          op.featured ? "bg-[color:var(--color-accent-coral)]/10" : "bg-accent/10"
        }`}
      />

      {/* Meta — top left. Always dark ink on photo (do not follow theme cream/ink flip). */}
      <div className="absolute top-5 left-5 text-left z-10 max-w-[75%]">
        <h3 className="font-sans font-medium text-[oklch(0.16_0.03_265)] text-lg sm:text-xl leading-tight tracking-tight drop-shadow-[0_1px_1px_rgb(255_255_255/0.35)]">
          {op.name}
        </h3>
        <div className="mono-label mt-1 text-[oklch(0.22_0.03_265)]/85">
          {op.role}
        </div>
        {op.priorCompanies && op.priorCompanies.length > 0 && (
          <div className="mono-label mt-2 leading-relaxed text-[oklch(0.22_0.03_265)]/75">
            {op.priorCompanies.map((c, i) => (
              <span key={c}>
                {i > 0 && <br />}
                {c}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Slide-up summary — no top hairline (was accent border-t) */}
      <div
        className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 group-focus-within:translate-y-0 transition-transform duration-500 ease-out bg-background/60 backdrop-blur-md p-6 z-20"
      >
        <p className="font-sans text-cream text-[0.85rem] leading-relaxed">{op.summary}</p>
        {op.chips.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
            {op.chips.map((c) => (
              <span
                key={c}
                className="mono-label text-cream/70"
              >
                {c}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export function OperatorSpotlightRail({ operators }: { operators: Operator[] }) {
  const railRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [index, setIndex] = useState(1);

  const updateProgress = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const p = max > 0 ? el.scrollLeft / max : 0;
    setProgress(p);
    // rough current-card index based on scroll position
    const card = el.querySelector<HTMLElement>("article");
    const cardWidth = card ? card.offsetWidth + 24 /* gap */ : el.clientWidth;
    const i = Math.min(operators.length, Math.max(1, Math.round(el.scrollLeft / cardWidth) + 1));
    setIndex(i);
  }, [operators.length]);

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    updateProgress();
    el.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      el.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [updateProgress]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = railRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("article");
    const cardWidth = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
  };

  const total = String(operators.length).padStart(2, "0");
  const current = String(index).padStart(2, "0");

  return (
    <div>
      <div
        ref={railRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 scroll-smooth no-scrollbar cursor-grab active:cursor-grabbing"
      >
        {operators.map((op) => (
          <OperatorCard key={op.name} op={op} />
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between gap-6">
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <span className="eyebrow shrink-0">
            {current} / {total}
          </span>
          <div className="relative h-px flex-1 bg-white/10 max-w-md">
            <div
              className="absolute inset-y-0 left-0 bg-accent-coral/70 transition-[width] duration-200"
              style={{ width: `${Math.max(8, progress * 100)}%` }}
            />
          </div>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Previous operator"
            className="group w-11 h-11 rounded-[6px] border border-white/10 flex items-center justify-center text-cream/60 hover:text-accent-coral transition-colors duration-200"
          >
            <ArrowLeft size={15} className="motion-arrow" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Next operator"
            className="group w-11 h-11 rounded-[6px] border border-white/10 flex items-center justify-center text-cream/60 hover:text-accent-coral transition-colors duration-200"
          >
            <ArrowRight size={15} className="motion-arrow" />
          </button>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}