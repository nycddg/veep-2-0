const quotes = [
  {
    quote:
      "\"I cannot recommend this team more highly. They think, act, and engage like co-founders.\"",
    name: "Jerry Kolber",
    role: "Founder & CEO, Atomic Audio",
    initials: "JK",
  },
  {
    quote:
      "\"As a founder raising capital, I couldn't have asked for a better partner. I never felt alone.\"",
    name: "Daniel Walsh",
    role: "Founder & CEO, VeroSkills",
    initials: "DW",
  },
];

export function Testimonials() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center">
        <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-accent">
          Verified — Founder testimonials
        </div>

        <div className="mt-10 md:mt-14 space-y-16 md:space-y-20">
          {quotes.map((q, i) => (
            <figure key={q.name}>
              <blockquote className="font-sans font-medium text-3xl md:text-5xl leading-[1.2] text-cream tracking-tight text-balance">
                {q.quote}
              </blockquote>
              <figcaption className="mt-10 flex items-center justify-center gap-4">
                <div className="h-11 w-11 rounded-full bg-white/5 ring-1 ring-white/20 grid place-items-center text-cream text-sm">
                  {q.initials}
                </div>
                <div className="text-left">
                  <div className="text-sm text-cream font-medium">{q.name}</div>
                  <div className="text-xs text-stone">{q.role}</div>
                </div>
              </figcaption>

              {i < quotes.length - 1 && (
                <div className="mt-16 md:mt-20 border-t border-white/10 max-w-3xl mx-auto" />
              )}
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
