import { useState } from "react";

function initials(name: string) {
  return name.split(" ").filter(Boolean).slice(0, 2).map((s) => s[0]).join("");
}


type OperatorProofCardProps = {
  name: string;
  role: string;
  chips: string[];
  photoUrl?: string;
  priorCompanies?: string[];
  /** Deprecated: free-text sentence. Prefer priorCompanies. */
  priorSeat?: string;
  summary?: string;
  /** Deprecated: use summary. */
  outcomes?: string[];
  /** "spotlight" = full editorial portrait card. "compact" = small hero collage card. */
  variant?: "spotlight" | "compact";
  tilt?: number;
  translateY?: number;
};

export function OperatorProofCard({
  name,
  role,
  chips,
  photoUrl,
  priorCompanies,
  priorSeat,
  summary,
  outcomes,
  variant = "spotlight",
  tilt = 0,
  translateY = 0,
}: OperatorProofCardProps) {
  if (variant === "compact") {
    return (
      <div
        className="glass-card p-5 rounded-3xl shadow-2xl transition-all duration-500 hover:rotate-0 hover:translate-y-0"
        style={{ transform: `rotate(${tilt}deg) translateY(${translateY}px)` }}
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-2xl bg-accent/10 ring-1 ring-white/15 grid place-items-center text-cream text-sm font-medium tracking-tight overflow-hidden">
            {photoUrl ? (
              <img
                src={photoUrl}
                alt={name}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-top grayscale"
              />
            ) : (
              initials(name)
            )}
          </div>
          <div>
            <h4 className="font-medium text-cream text-base tracking-tight leading-tight font-sans">
              {name}
            </h4>
            <p className="text-[11px] text-accent font-medium tracking-[0.14em] uppercase mt-0.5">
              {role}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {chips.map((c) => (
            <span
              key={c}
              className="text-[10px] px-2.5 py-1 bg-white/5 rounded-full border border-white/10 text-stone"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    );
  }

  const companies =
    priorCompanies && priorCompanies.length > 0
      ? priorCompanies
      : priorSeat
      ? [priorSeat]
      : [];

  const [expanded, setExpanded] = useState(false);
  const summaryId = `operator-summary-${name.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <figure className="group flex flex-col overflow-hidden rounded-lg bg-white/[0.02] ring-1 ring-white/8 transition-colors hover:ring-white/15 lg:w-[95%] lg:mx-auto">

      {/* Portrait */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-accent/10">
        {photoUrl ? (
          <>
            <img
              src={photoUrl}
              alt={name}
              loading="lazy"
              decoding="async"
              className="motion-image-tilt absolute inset-0 h-full w-full object-cover object-top grayscale contrast-[1.05]"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-accent/25 mix-blend-multiply"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent"
            />
          </>
        ) : (
          <div className="absolute inset-0 grid place-items-center">
            <div className="font-mono text-5xl md:text-6xl tracking-tight text-accent/70">
              {initials(name)}
            </div>
          </div>
        )}
      </div>

      {/* Caption */}
      <figcaption className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <h3 className="font-sans text-lg text-cream tracking-tight leading-tight text-balance">
            {name}
          </h3>
          <p className="mt-1 text-sm text-stone leading-snug">{role}</p>
        </div>

        {companies.length > 0 && (
          <div className="border-t border-white/10 pt-3">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-cream/70 leading-relaxed">
              {companies.join("  ·  ")}
            </div>
          </div>
        )}

        {(summary || (outcomes && outcomes.length > 0)) && (
          <div className="flex h-[176px] flex-col gap-1.5 overflow-hidden pb-2">
            <div
              id={summaryId}
              className={`text-[13px] text-stone leading-relaxed text-pretty overflow-hidden transition-[max-height] duration-300 ease-out ${
                expanded ? "max-h-[150px]" : "line-clamp-2 max-h-[42px]"
              }`}
            >
              {summary || outcomes?.join(" ")}
            </div>
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              aria-controls={summaryId}
              className="self-start text-[11px] font-medium text-accent hover:opacity-80 transition"
            >
              {expanded ? "Show less" : "Read more"}
            </button>
          </div>
        )}




        {chips.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-x-3 gap-y-1 pt-1">
            {chips.map((c) => (
              <span
                key={c}
                className="font-mono text-[10px] uppercase tracking-[0.14em] text-stone-soft"
              >
                {c}
              </span>
            ))}
          </div>
        )}
      </figcaption>
    </figure>
  );
}
