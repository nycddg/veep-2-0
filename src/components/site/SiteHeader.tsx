import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import wordmarkWhite from "@/assets/veep-wordmark-white.png.asset.json";
import { BOOKING_URL } from "@/lib/booking";

type NavItem = {
  to: "/pricing" | "/about" | "/join" | "/faq";
  label: string;
};

const nav: readonly NavItem[] = [
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/join", label: "Join" },
  { to: "/faq", label: "FAQ" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur border-b border-white/8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center" aria-label="Veep home">
          <img src={wordmarkWhite.url} alt="Veep" className="h-5 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-2 text-sm text-cream/80 hover:text-cream transition"
              activeProps={{ className: "px-3 py-2 text-sm text-cream" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-cream px-4 py-1.5 text-sm font-medium text-ink hover:bg-cream/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background transition"
          >
            Book intro call
          </a>
        </div>

        <button
          className="lg:hidden p-3 -mr-2 min-h-11 min-w-11 text-cream"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/8 bg-background">
          <div className="px-4 py-4 space-y-0.5">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="block px-3 py-3 text-base text-cream rounded-md hover:bg-white/5"
              >
                {n.label}
              </Link>
            ))}
            <div className="pt-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-cream px-4 py-3 text-sm text-center font-medium text-ink"
              >
                Book intro call
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
