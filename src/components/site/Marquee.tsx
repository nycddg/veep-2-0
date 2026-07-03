const lines = [
  "Faster than executive search",
  "More accountable than consulting",
  "More senior than freelancers",
  "Build now. Hire later.",
  "Operator-led. AI-powered.",
  "Pay for leadership, not payroll.",
  "Executive judgment, on demand.",
  "The work cannot wait for the hire.",
];

export function Marquee() {
  const row = [...lines, ...lines];
  return (
    <div className="overflow-hidden border-y border-border bg-background py-8">
      <div className="marquee flex gap-10 whitespace-nowrap will-change-transform">
        {row.map((l, i) => (
          <div key={i} className="flex items-center gap-10">
            <span className="font-serif italic text-3xl md:text-5xl text-ink">{l}</span>
            <span className="h-2 w-2 rounded-full bg-forest" />
          </div>
        ))}
      </div>
    </div>
  );
}
