import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Operator = {
  name: string;
  role: string;
  priorCompanies?: string[];
  summary?: string;
  chips: string[];
  photoUrl?: string;
  featured?: boolean;
};

function initials(name: string) {
  return name.split(" ").filter(Boolean).slice(0, 2).map((s) => s[0]).join("");
}

function OperatorCard({ op }: { op: Operator }) {
  const accent = op.featured ? "accent-coral" : "accent";
  return (
    <article
      tabIndex={0}
      className={`group relative flex-shrink-0 w-[300px] sm:w-[320px] lg:w-[340px] aspect-[3/4] snap-start overflow-hidden rounded-2xl bg-[#0a0f1d] cursor-pointer transition-colors duration-300 border ${
        op.featured ? "border-[color:var(--color-accent-coral)]/40" : "border-white/5 hover:border-white/15"
      } focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background`}
      aria-label={`${op.name}, ${op.role}`}
    >
      {/* Portrait */}
      <div className="absolute inset-0 transition-all duration-500 group-hover:scale-105 group-focus-within:scale-105">
        {op.photoUrl ? (
          <img
            src={op.photoUrl}
            alt={op.name}
            className="w-full h-full object-cover object-top grayscale brightness-90 transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-100 group-focus-within:grayscale-0 group-focus-within:brightness-100"
          />
        ) : (
          <div className="w-full h-full grid place-items-center bg-accent/10 text-accent/70 font-mono text-5xl">
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

      {/* Corner legibility gradient — top-right only, keeps face clear */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-cream/20 transition-opacity duration-500 group-hover:opacity-0 group-focus-within:opacity-0" />

      {/* Meta — top left */}
      <div className="absolute top-5 left-5 text-left z-10 max-w-[75%]">
        <h3
          className="font-sans font-medium text-ink text-lg sm:text-xl leading-tight tracking-tight"
        >
          {op.name}
        </h3>
        <div
          className="font-mono text-[10px] uppercase tracking-[0.14em] mt-1 text-ink/80"
        >
          {op.role}
        </div>
        {op.priorCompanies && op.priorCompanies.length > 0 && (
          <div
            className="font-mono text-[10px] text-ink/70 mt-2 leading-relaxed uppercase tracking-[0.1em]"
          >
            {op.priorCompanies.map((c, i) => (
              <span key={c}>
                {i > 0 && <br />}
                {c}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Slide-up summary */}
      <div
        className={`absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 group-focus-within:translate-y-0 transition-transform duration-500 ease-out bg-background/30 backdrop-blur-md p-6 border-t z-20 ${
          op.featured ? "border-[color:var(--color-accent-coral)]/40" : "border-accent/30"
        }`}
      >
        <p className="font-sans text-cream text-sm leading-relaxed">{op.summary}</p>
        {op.chips.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
            {op.chips.map((c) => (
              <span
                key={c}
                className="font-mono text-[10px] uppercase tracking-[0.14em] text-stone-soft"
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
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent shrink-0">
            {current} // {total}
          </span>
          <div className="relative h-px flex-1 bg-white/10 max-w-md">
            <div
              className="absolute inset-y-0 left-0 bg-accent/70 transition-[width] duration-200"
              style={{ width: `${Math.max(8, progress * 100)}%` }}
            />
          </div>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Previous operator"
            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-cream/60 hover:text-accent hover:border-accent/40 transition-colors"
          >
            <ArrowLeft size={15} />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Next operator"
            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-cream/60 hover:text-accent hover:border-accent/40 transition-colors"
          >
            <ArrowRight size={15} />
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