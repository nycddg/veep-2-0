import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/for-companies", label: "For Companies" },
  { to: "/for-portfolios", label: "For Portfolios" },
  { to: "/services", label: "Services" },
  { to: "/operators", label: "Operators" },
  { to: "/partners", label: "Partners" },
  { to: "/insights", label: "Insights" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur border-b border-white/8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-accent-gold" />
          <span className="text-[15px] font-medium tracking-tight text-cream">Veep</span>
          <span className="font-mono text-[10px] tracking-widest text-stone-soft ml-1">™</span>
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
            search={{ intent: "audit" }}
            className="rounded-full border border-white/15 px-3.5 py-1.5 text-sm text-cream hover:bg-white/5 transition"
          >
            Talk to us
          </Link>
          <Link
            to="/contact"
            className="rounded-full bg-cream px-3.5 py-1.5 text-sm font-medium text-ink hover:opacity-90 transition"
          >
            Book a call
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
            <div className="pt-3 flex flex-col gap-2">
              <Link to="/contact" search={{ intent: "audit" }} onClick={() => setOpen(false)}
                className="rounded-md border border-white/15 px-4 py-2 text-sm text-center text-cream">
                Talk to us
              </Link>
              <Link to="/contact" onClick={() => setOpen(false)}
                className="rounded-md bg-cream px-4 py-2 text-sm text-center text-cream">
                Book a call
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
