const lines = [
  "Too urgent for search",
  "Too senior for freelancers",
  "Too operational for consultants",
  "Faster than executive search",
  "More accountable than consulting",
  "Build now — hire later",
  "Operator-led · AI-powered",
  "Pay for leadership, not payroll",
  "Executive judgment, on demand",
  "The work cannot wait for the hire",
];

export function Marquee() {
  const row = [...lines, ...lines];
  return (
    <div className="overflow-hidden border-y border-white/8 bg-background py-8">
      <div className="marquee flex gap-16 whitespace-nowrap will-change-transform">
        {row.map((l, i) => (
          <div key={i} className="flex items-center gap-16">
            <span className="text-2xl md:text-3xl tracking-tight text-cream/70 font-light">
              {l}
            </span>
            <span className="font-mono text-[10px] tracking-widest text-stone-soft">
              /{String((i % lines.length) + 1).padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
