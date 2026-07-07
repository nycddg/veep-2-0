import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import wordmarkWhite from "@/assets/veep-wordmark-white.png.asset.json";
import { BOOKING_URL } from "@/lib/booking";

// Anchor links on /, plus two standalone routes (/pricing, /faq).
type NavItem =
  | { kind: "hash"; hash: string; label: string }
  | { kind: "route"; to: "/pricing" | "/faq"; label: string };

const nav: readonly NavItem[] = [
  { kind: "hash", hash: "overview", label: "Overview" },
  { kind: "hash", hash: "benefits", label: "Benefits" },
  { kind: "hash", hash: "how", label: "How it works" },
  { kind: "hash", hash: "proof", label: "Proof" },
  { kind: "route", to: "/pricing", label: "Pricing" },
  { kind: "route", to: "/faq", label: "FAQ" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur border-b border-white/8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center" aria-label="Veep home">
          <img src={wordmarkWhite.url} alt="Veep" className="h-5 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) =>
            n.kind === "hash" ? (
              <Link
                key={n.hash}
                to="/"
                hash={n.hash}
                className="px-3 py-1.5 text-sm text-stone hover:text-cream transition"
              >
                {n.label}
              </Link>
            ) : (
              <Link
                key={n.to}
                to={n.to}
                className="px-3 py-1.5 text-sm text-stone hover:text-cream transition"
                activeProps={{ className: "px-3 py-1.5 text-sm text-cream" }}
              >
                {n.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-cream px-3.5 py-1.5 text-sm font-medium text-ink hover:opacity-90 transition"
          >
            Book intro call
          </a>
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
            {nav.map((n) =>
              n.kind === "hash" ? (
                <Link
                  key={n.hash}
                  to="/"
                  hash={n.hash}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 text-sm text-cream rounded-md hover:bg-white/5"
                >
                  {n.label}
                </Link>
              ) : (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 text-sm text-cream rounded-md hover:bg-white/5"
                >
                  {n.label}
                </Link>
              ),
            )}
            <div className="pt-3">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-cream px-4 py-2 text-sm text-center font-medium text-ink"
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
