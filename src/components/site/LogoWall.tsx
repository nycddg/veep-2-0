const logos = ["Verizon", "Industrious", "Morning Brew", "New Stand", "Oliver Wyman", "Bain"];

export function LogoWall() {
  return (
    <div className="border-y border-white/8 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center font-mono text-[11px] uppercase tracking-widest text-stone-soft">
          / OPERATORS FROM
        </div>
        <div className="mt-6 flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
          {logos.map((l) => (
            <span key={l} className="text-lg md:text-xl tracking-tight text-cream/50 font-light">
              {l}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
