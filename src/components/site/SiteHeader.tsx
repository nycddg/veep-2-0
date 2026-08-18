import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import wordmarkWhite from "@/assets/veep-wordmark-white.png.asset.json";
import wordmarkNavy from "@/assets/veep-wordmark-navy.png.asset.json";
import { BOOKING_URL } from "@/lib/booking";
import { ThemeToggle } from "./ThemeToggle";

type NavItem =
  | { kind: "hash"; hash: string; label: string }
  | {
      kind: "route";
      to: "/pricing" | "/faq" | "/join" | "/about" | "/for-portfolios";
      label: string;
    };

const nav: readonly NavItem[] = [
  { kind: "hash", hash: "overview", label: "Overview" },
  { kind: "hash", hash: "operators", label: "Operators" },
  { kind: "hash", hash: "benefits", label: "Benefits" },
  { kind: "hash", hash: "how", label: "How It Works" },
  { kind: "hash", hash: "proof", label: "Proof" },
  { kind: "route", to: "/for-portfolios", label: "For Funds" },
  { kind: "route", to: "/pricing", label: "Pricing" },
  { kind: "route", to: "/about", label: "About" },
  { kind: "route", to: "/join", label: "Join" },
  { kind: "route", to: "/faq", label: "FAQ" },
];

/** Hash anchors hidden in the mobile drawer (still on desktop nav). */
const MOBILE_HIDDEN_HASHES = new Set(["operators", "benefits", "how", "proof"]);

const mobileNav = nav.filter(
  (n) => !(n.kind === "hash" && MOBILE_HIDDEN_HASHES.has(n.hash)),
);

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`motion-header sticky top-0 z-40 backdrop-blur border-b ${
        scrolled ? "bg-background/90 border-white/10" : "bg-background/70 border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center" aria-label="Veep home">
        <img src={wordmarkWhite.url} alt="Veep wordmark" className="h-5 w-auto block light:hidden" />
        <img src={wordmarkNavy.url} alt="Veep wordmark" className="h-5 w-auto hidden light:block" />
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5" aria-label="Primary">
          {nav.filter((n) => n.kind === "hash").map((n) => (
            <Link
              key={(n as { hash: string }).hash}
              to="/"
              hash={(n as { hash: string }).hash}
              className="group motion-link inline-flex items-center min-h-11 px-3 py-2 text-[0.8rem] text-cream/85 hover:text-cream"
            >
              <span className="motion-underline">{n.label}</span>
            </Link>
          ))}
          <span aria-hidden className="mx-3 h-4 w-px bg-white/15" />
          {nav.filter((n) => n.kind === "route").map((n) => (
            <Link
              key={(n as { to: "/pricing" | "/faq" | "/join" | "/about" | "/for-portfolios" }).to}
              to={(n as { to: "/pricing" | "/faq" | "/join" | "/about" | "/for-portfolios" }).to}
              viewTransition
              className="group motion-link inline-flex items-center min-h-11 px-3 py-2 text-[0.8rem] text-cream/85 hover:text-cream"
              activeProps={{ className: "motion-link inline-flex items-center min-h-11 px-3 py-2 text-[0.8rem] text-cream border-b border-accent-coral" }}
            >
              <span className="motion-underline">{n.label}</span>
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2 shrink-0">
          <ThemeToggle />
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="motion-cta cta-accent relative shrink-0 whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background before:absolute before:inset-x-0 before:-inset-y-1.5 before:content-['']"
          >
            Get started
          </a>
        </div>

        <div className="lg:hidden flex items-center gap-1">
          <ThemeToggle />
          <button
          className="lg:hidden p-3 -mr-2 min-h-11 min-w-11 text-cream"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Reading progress — 1px accent fill along the header's bottom edge.
          CSS scroll-driven; hidden entirely where unsupported (see styles.css). */}
      <div aria-hidden className="motion-progress absolute inset-x-0 bottom-0 h-px" />

      {open && (
        <div className="lg:hidden border-t border-white/8 bg-background">
          <div className="px-4 py-4 space-y-0.5">
            {mobileNav.map((n) =>
              n.kind === "hash" ? (
                <Link
                  key={n.hash}
                  to="/"
                  hash={n.hash}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-3 text-[0.85rem] text-cream rounded-md hover:bg-white/5"
                >
                  {n.label}
                </Link>
              ) : (
                <Link
                  key={n.to}
                  to={n.to}
                  viewTransition
                  onClick={() => setOpen(false)}
                  className="block px-3 py-3 text-[0.85rem] text-cream rounded-md hover:bg-white/5"
                >
                  {n.label}
                </Link>
              ),
            )}
            <div className="pt-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="motion-cta cta-accent block rounded-full px-4 py-3 text-sm text-center font-medium min-h-11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
