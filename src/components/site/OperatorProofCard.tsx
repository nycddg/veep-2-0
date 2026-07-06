function initials(name: string) {
  return name.split(" ").filter(Boolean).slice(0, 2).map((s) => s[0]).join("");
}

export function OperatorProofCard({
  name,
  role,
  chips,
  tilt = 0,
  translateY = 0,
}: {
  name: string;
  role: string;
  chips: string[];
  tilt?: number;
  translateY?: number;
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
