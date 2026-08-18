const clients = [
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
 * ClientStrip — static, text-only client proof. Deliberately quieter than the
 * operator LogoWall marquee (which signals pedigree, not purchases): no
 * motion, no logos, smaller type, unambiguous "clients" framing.
 */
export function ClientStrip() {
  return (
    <div className="hidden md:block mt-16 md:mt-24 text-center">
      <div className="eyebrow">Trusted by</div>
      <div className="mt-8 mx-auto max-w-4xl flex flex-wrap justify-center gap-2">
        {clients.map((c) => (
          <span
            key={c}
            className="rounded-full border border-white/10 bg-background px-3.5 py-1.5 text-sm text-cream whitespace-nowrap"
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}
