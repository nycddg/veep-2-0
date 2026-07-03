const logos = ["Verizon", "Industrious", "Morning Brew", "New Stand", "Oliver Wyman", "Bain"];

export function LogoWall() {
  return (
    <div className="border-y border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center text-xs uppercase tracking-widest text-stone">
          Operators from
        </div>
        <div className="mt-6 flex flex-wrap justify-center items-center gap-x-10 gap-y-4 opacity-70">
          {logos.map((l) => (
            <span key={l} className="font-serif text-2xl md:text-3xl text-ink/80">
              {l}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
