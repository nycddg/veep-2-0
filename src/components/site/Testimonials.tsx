const quotes = [
  {
    quote:
      "I cannot recommend this team more highly. They think, act, and engage like co-founders.",
    name: "Jerry Kolber",
    role: "Founder & CEO, Atomic Audio",
    initials: "JK",
  },
  {
    quote:
      "As a founder raising capital, I couldn\u2019t have asked for a better partner.\u00a0\nI never felt alone.",
    name: "Daniel Walsh",
    role: "Founder & CEO, VeroSkills",
    initials: "DW",
  },
];

export function Testimonials() {
  const [hero, ...supporting] = quotes;

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center">
        <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-accent">
          Verified — Founder testimonials
        </div>

        <figure className="mt-10">
          <blockquote className="font-sans font-medium text-3xl md:text-5xl leading-[1.2] text-cream tracking-tight text-balance">
            {hero.quote}
          </blockquote>
          <figcaption className="mt-10 flex items-center justify-center gap-4">
            <div className="h-11 w-11 rounded-full bg-white/5 ring-1 ring-white/20 grid place-items-center text-cream text-sm">
              {hero.initials}
            </div>
            <div className="text-left">
              <div className="text-sm text-cream font-medium">{hero.name}</div>
              <div className="text-xs text-stone">{hero.role}</div>
            </div>
          </figcaption>
        </figure>
      </div>

      {supporting.length > 0 && (
        <div className="mt-16 md:mt-20 border-t border-white/10 pt-10 md:pt-14 max-w-3xl">
          {supporting.map((q) => (
            <figure key={q.name}>
              <blockquote className="font-sans text-xl md:text-2xl leading-snug text-cream/90 tracking-tight text-pretty whitespace-pre-line">
                {q.quote}
              </blockquote>
              <figcaption className="mt-5 font-mono text-[11px] uppercase tracking-[0.12em] text-stone-soft">
                {q.name} — {q.role}
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </div>
  );
}
