function initials(name: string) {
  return name.split(" ").filter(Boolean).slice(0, 2).map((s) => s[0]).join("");
}

export function OperatorProofCard({
  name,
  role,
  chips,
  tilt = 0,
  translateY = 0,
  priorSeat,
  outcomes,
}: {
  name: string;
  role: string;
  chips: string[];
  tilt?: number;
  translateY?: number;
  priorSeat?: string;
  outcomes?: string[];
}) {
  return (
    <div
      className="glass-card p-5 rounded-3xl shadow-2xl transition-all duration-500 hover:rotate-0 hover:translate-y-0"
      style={{ transform: `rotate(${tilt}deg) translateY(${translateY}px)` }}
    >
      <div className="flex items-center gap-4 mb-5">
        <div className="w-14 h-14 rounded-2xl bg-white/5 ring-1 ring-white/20 grid place-items-center text-cream text-sm font-medium tracking-tight">
          {initials(name)}
        </div>
        <div>
          <h4 className="font-medium text-cream text-lg tracking-tight leading-tight font-sans">
            {name}
          </h4>
          <p className="text-xs text-accent font-medium tracking-wider uppercase mt-0.5">
            {role}
          </p>
        </div>
      </div>
      {priorSeat && (
        <p className="text-sm text-stone leading-relaxed mb-4 border-t border-white/10 pt-4">
          {priorSeat}
        </p>
      )}
      {outcomes && outcomes.length > 0 && (
        <ul className="mb-4 space-y-1.5">
          {outcomes.map((o) => (
            <li key={o} className="text-xs text-stone-soft flex gap-2">
              <span className="text-accent">→</span>
              <span>{o}</span>
            </li>
          ))}
        </ul>
      )}
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
