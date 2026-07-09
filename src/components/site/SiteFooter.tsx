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
    <footer className="border-t border-white/10 bg-background text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center" aria-label="Veep home">
              <img src={wordmarkWhite.url} alt="Veep" className="h-6 w-auto" />
            </Link>
            <p className="mt-5 text-sm text-stone max-w-sm leading-relaxed">
              Senior operators to own the work that can't wait. Matched in 72
              hours. Deployed in under 10 days.
            </p>
            <a
              href="mailto:hey@veep.work"
              className="mt-6 inline-block text-lg text-cream hover:text-accent underline underline-offset-8 decoration-white/20 hover:decoration-accent transition"
            >
              hey@veep.work
            </a>
          </div>
          {cols.map((c) => (
            <div key={c.title} className="md:col-span-3">
              <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-stone-soft font-mono">
                {c.title}
              </div>
              <ul className="mt-4 space-y-2.5">
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
        <div className="mt-12 pt-5 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-stone-soft">
          <div>© {new Date().getFullYear()}&nbsp;The Veep Group, LLC. All rights reserved.</div>
          <div>Senior operators for work that can't wait.</div>
        </div>
      </div>
    </footer>
  );
}
