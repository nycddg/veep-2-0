import { Link } from "@tanstack/react-router";
import wordmarkWhite from "@/assets/veep-wordmark-white.png.asset.json";

type FooterLink =
  | { kind: "hash"; hash: string; label: string }
  | { kind: "route"; to: "/pricing" | "/faq" | "/contact"; label: string };

const cols: readonly { title: string; links: readonly FooterLink[] }[] = [
  {
    title: "Explore",
    links: [
      { kind: "hash", hash: "how", label: "How it works" },
      { kind: "hash", hash: "offer", label: "Engagements" },
      { kind: "hash", hash: "proof", label: "Proof" },
      { kind: "hash", hash: "faq", label: "FAQ on this page" },
    ],
  },
  {
    title: "Details",
    links: [
      { kind: "route", to: "/pricing", label: "Pricing" },
      { kind: "route", to: "/faq", label: "Full FAQ" },
      { kind: "route", to: "/contact", label: "Contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-background text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center" aria-label="Veep home">
              <img src={wordmarkWhite.url} alt="Veep" className="h-6 w-auto" />
            </Link>
            <p className="mt-4 text-sm text-stone max-w-sm leading-relaxed">
              Senior operators to own the work that can't wait. Matched in 72
              hours. Deployed in under 10 days.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-stone-soft">
                {c.title}
              </div>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}>
                    {l.kind === "hash" ? (
                      <Link to="/" hash={l.hash} className="text-sm text-cream/85 hover:text-cream transition">
                        {l.label}
                      </Link>
                    ) : (
                      <Link to={l.to} className="text-sm text-cream/85 hover:text-cream transition">
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-6 border-t border-white/8 flex flex-col md:flex-row justify-between gap-4 text-[11px] text-stone-soft tracking-widest uppercase">
          <div>© {new Date().getFullYear()} Veep · All rights reserved</div>
          <div className="flex gap-6">
            <span>hello@veep.co</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
