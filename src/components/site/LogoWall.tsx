const logos = [
  "Atomic Audio",
  "VeroSkills",
  "Spring Break",
  "Dieux",
  "SipMargs",
  "Procure Impact",
  "Substantial",
  "Fowler Laundry Solutions",
  "Northstar Vets",
  "Energy Growth Holdings",
  "Bandyworks",
  "Artists & Fleas",
  "Frequency",
  "Synthetic Studio",
  "GUMDAY",
  "Soundview Medical Supply",
];


/**
 * TrustedByTicker — client names in the same chip marquee as
 * ClientStrip (work history). Sits under the homepage canvas.
 */
export function TrustedByTicker() {
  return (
    <div className="relative overflow-hidden">
      <div
        className="flex marquee whitespace-nowrap gap-2 items-center"
        style={{ animationDuration: "35s" }}
      >
        {[...logos, ...logos].map((l, i) => (
          <span
            key={`${l}-${i}`}
            className="rounded-[6px] border border-white/10 bg-background px-3.5 py-1.5 text-sm text-cream whitespace-nowrap shrink-0"
          >
            {l}
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}

export function LogoWall() {
  return (
    <section className="border-t border-white/10 md:border-b bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-14">
        <div className="eyebrow text-center">Trusted by</div>
        <div className="mt-14">
          <TrustedByTicker />
        </div>
      </div>
    </section>
  );
}
