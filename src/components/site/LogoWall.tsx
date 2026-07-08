const logos = [
  "Google",
  "Meta",
  "Stripe",
  "Coinbase",
  "LinkedIn",
  "Airbnb",
  "Uber",
  "Shopify",
  "Goldman Sachs",
  "LVMH",
  "Morning Brew",
  "Deloitte",
];

export function LogoWall() {
  return (
    <section className="border-y border-white/10 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="text-center text-[10px] font-medium uppercase tracking-[0.18em] text-stone-soft">
          Our operators have led at
        </div>
        <div className="mt-8 relative overflow-hidden">
          <div className="flex marquee whitespace-nowrap gap-16 items-center">
            {[...logos, ...logos].map((l, i) => (
              <span
                key={`${l}-${i}`}
                className="text-lg md:text-xl tracking-tight text-cream/50 font-light shrink-0"
              >
                {l}
              </span>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>
    </section>
  );
}
