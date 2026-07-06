import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import wordmarkWhite from "@/assets/veep-wordmark-white.png.asset.json";

const nav = [
  { to: "/services", label: "Services" },
  { to: "/for-companies", label: "For Companies" },
  { to: "/for-portfolios", label: "For Portfolios" },
  { to: "/pricing", label: "Pricing" },
  { to: "/operators", label: "Operators" },
  { to: "/faq", label: "FAQ" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur border-b border-white/8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center" aria-label="Veep home">
          <img src={wordmarkWhite.url} alt="Veep" className="h-5 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-1.5 text-sm text-stone hover:text-cream transition"
              activeProps={{ className: "px-3 py-1.5 text-sm text-cream" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Link
            to="/contact"
            className="rounded-full bg-cream px-3.5 py-1.5 text-sm font-medium text-ink hover:opacity-90 transition"
          >
            Book a discovery call
          </Link>
        </div>

        <button
          className="lg:hidden p-2 -mr-2 text-cream"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/8 bg-background">
          <div className="px-4 py-4 space-y-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 text-sm text-cream rounded-md hover:bg-white/5"
              >
                {n.label}
              </Link>
            ))}
            <div className="pt-3">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-cream px-4 py-2 text-sm text-center font-medium text-ink"
              >
                Book a discovery call
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
