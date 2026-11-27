const layers = [
  {
    label: "Lead operating partner",
    role: "Sets priorities, holds the quality bar, and resolves exceptions.",
  },
  {
    label: "Execution specialists",
    role: "Carry specialized functional work across finance, GTM, ops, and product.",
  },
  {
    label: "Operator-governed Agent Teams",
    role: "Run recurring reporting, research, and prep under partner review.",
  },
] as const;

const ownership = [
  "Agents run recurring prep",
  "Operating partner sets the standard and resolves exceptions",
  "Technical lead owns reliability",
  "Client keeps approvals",
] as const;

export function PlatformStrata({ compact = false }: { compact?: boolean }) {
  const pad = compact ? "px-4 py-3.5 sm:px-5 sm:py-4" : "px-5 py-5 md:px-6 md:py-6";
  return (
    <div>
      <div className="overflow-hidden rounded-[6px] border border-white/10">
        {layers.map((layer, i) => (
          <div
            key={layer.label}
            className={`grid sm:grid-cols-[minmax(0,16rem)_1fr] gap-1.5 sm:gap-8 sm:items-baseline ${pad} ${
              i > 0 ? "border-t border-white/10" : ""
            }`}
          >
            <div className="font-serif font-medium text-lg text-cream tracking-tight">
              {layer.label}
            </div>
            <p className="text-sm text-stone leading-relaxed sm:text-right">{layer.role}</p>
          </div>
        ))}
      </div>
      {compact ? null : (
        <div className="relative mt-8">
          <span
            aria-hidden
            className="pointer-events-none absolute top-[3px] left-1 hidden h-px bg-[color:var(--rule)] md:block md:right-[calc(25%-0.25rem)]"
          />
          <ol
            aria-label="How ownership moves"
            className="grid grid-cols-1 md:grid-cols-4"
          >
            {ownership.map((line, i) => {
              const last = i === ownership.length - 1;
              return (
                <li
                  key={line}
                  className="relative flex gap-4 py-4 first:pt-0 last:pb-0 md:flex-col md:gap-4 md:px-4 md:py-0 md:first:pl-0 md:last:pr-0"
                >
                  {last ? null : (
                    <span
                      aria-hidden
                      className="absolute top-6 bottom-0 left-[3px] w-px bg-[color:var(--rule)] md:hidden"
                    />
                  )}
                  <span
                    aria-hidden
                    className="relative z-10 mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-coral md:mt-0"
                  />
                  <p className="font-mono text-[0.6875rem] leading-relaxed tracking-[0.06em] text-stone-soft">
                    {line}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      )}
    </div>
  );
}
