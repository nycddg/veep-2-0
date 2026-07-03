const stats = [
  { v: "$1B+", k: "Capital raised" },
  { v: "$3B+", k: "Revenue created" },
  { v: "$2B+", k: "Costs saved" },
  { v: "20+", k: "Exits" },
  { v: "<10 days", k: "Onboarding" },
  { v: "30 days", k: "Fit guarantee" },
];

export function StatsBand() {
  return (
    <section className="bg-forest-deep text-forest-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-forest-foreground/80">
            <span className="h-1.5 w-1.5 rounded-full bg-forest-foreground/80" /> Proof
          </div>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
            Operators who have <em className="italic">already done the work.</em>
          </h2>
          <p className="mt-4 text-forest-foreground/80 max-w-lg">
            Veep operators lead through growth, transformation, fundraising, and
            operational change. They aren't learning on your business.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 border-t border-forest-foreground/15 pt-10">
          {stats.map((s) => (
            <div key={s.k}>
              <div className="font-serif text-4xl md:text-5xl leading-none">{s.v}</div>
              <div className="mt-2 text-sm text-forest-foreground/70">{s.k}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
