import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useId, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import wordmarkWhite from "@/assets/veep-wordmark-white.png.asset.json";
import wordmarkNavy from "@/assets/veep-wordmark-navy.png.asset.json";
import { BookLink } from "./rebuild/BookLink";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  { to: "/for-companies", label: "For Companies" },
  { to: "/for-portfolios", label: "For Funds" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/join", label: "Join" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const menu = menuRef.current;
    const button = buttonRef.current;
    const focusable = () =>
      menu ? Array.from(menu.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")) : [];
    const showFocus = (element?: HTMLElement | null) => {
      element?.focus({ focusVisible: true });
    };
    showFocus(focusable()[0]);

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        showFocus(button);
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusable();
      if (items.length === 0) return;
      const index = items.indexOf(document.activeElement as HTMLElement);
      const last = items.length - 1;
      if (event.shiftKey && index <= 0) {
        event.preventDefault();
        showFocus(items[last]);
      } else if (!event.shiftKey && (index === last || index === -1)) {
        event.preventDefault();
        showFocus(items[0]);
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-chrome sticky top-0 z-40 border-b border-[var(--rb-rule)]">
      <div className="ve-header-inner mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between gap-4 px-5 md:px-6 lg:h-[72px] lg:px-8">
        <Link to="/" className="flex shrink-0 items-center" aria-label="Veep home">
          <img src={wordmarkWhite.url} alt="" className="h-5 w-auto light:hidden" />
          <img src={wordmarkNavy.url} alt="" className="hidden h-5 w-auto light:block" />
        </Link>

        <div className="hidden min-w-0 items-center gap-2 lg:flex">
          <nav className="flex min-w-0 items-center gap-1" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: true }}
                className="rb-nav inline-flex min-h-11 items-center px-2.5"
                activeProps={{
                  className: "rb-nav is-active inline-flex min-h-11 items-center px-2.5",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
          <BookLink />
        </div>

        <button
          ref={buttonRef}
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center text-[var(--rb-text)] lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls={menuId}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div ref={menuRef} id={menuId} className="border-t border-[var(--rb-rule)] lg:hidden">
          <nav aria-label="Primary" className="mx-auto w-full max-w-[1200px] px-5 py-3 md:px-6">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: true }}
                onClick={() => setOpen(false)}
                className="rb-nav flex min-h-11 items-center text-[16px]"
                activeProps={{
                  className: "rb-nav is-active flex min-h-11 items-center text-[16px]",
                }}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center justify-between border-t border-[var(--rb-rule)] pt-2">
              <span className="text-[16px]">Theme</span>
              <ThemeToggle />
            </div>
            <div className="pt-3 pb-2">
              <BookLink className="w-full" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
