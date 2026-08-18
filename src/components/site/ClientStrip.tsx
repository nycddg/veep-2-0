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
    <div className="mt-16 md:mt-24 text-center">
      <div className="eyebrow">Trusted by founders at</div>
      <div className="mt-8 mx-auto max-w-4xl flex flex-wrap justify-center gap-x-8 gap-y-3">
        {clients.map((c) => (
          <span key={c} className="text-base text-cream/60 whitespace-nowrap">
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}
