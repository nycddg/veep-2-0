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
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-block h-6 w-6 rounded-full bg-forest" />
          <span className="font-serif text-2xl leading-none text-ink">Veep</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 rounded-full border border-border/70 bg-card/60 px-2 py-1.5">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-1.5 text-sm text-stone hover:text-ink transition rounded-full"
              activeProps={{ className: "px-3 py-1.5 text-sm text-ink bg-secondary rounded-full" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Link
            to="/contact"
            search={{ intent: "audit" }}
            className="rounded-full border border-ink/20 px-4 py-2 text-sm font-medium text-ink hover:bg-secondary transition"
          >
            Capacity Audit
          </Link>
          <Link
            to="/contact"
            className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-cream hover:opacity-90 transition"
          >
            Book a discovery call
          </Link>
        </div>

        <button
          className="lg:hidden p-2 -mr-2 text-ink"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 text-sm text-ink rounded-md hover:bg-secondary"
              >
                {n.label}
              </Link>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <Link to="/contact" search={{ intent: "audit" }} onClick={() => setOpen(false)}
                className="rounded-full border border-ink/20 px-4 py-2 text-sm text-center text-ink">
                Capacity Audit
              </Link>
              <Link to="/contact" onClick={() => setOpen(false)}
                className="rounded-full bg-ink px-4 py-2 text-sm text-center text-cream">
                Book a discovery call
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
