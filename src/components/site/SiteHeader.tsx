import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useId, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import wordmarkWhite from "@/assets/veep-wordmark-white.png.asset.json";
import wordmarkNavy from "@/assets/veep-wordmark-navy.png.asset.json";
import { BookLink } from "./rebuild/BookLink";
import { ThemeToggle } from "./ThemeToggle";

import { useSiteMotion, useMenuPresence } from "./system/useSiteMotion";

const nav = [
  { to: "/for-companies", label: "For Founders" },
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
  const homeRef = useRef<HTMLAnchorElement>(null);
  useSiteMotion(pathname);
  const menuPresent = useMenuPresence(open, menuRef);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const menu = menuRef.current;
    const button = buttonRef.current;
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeForDesktop = () => {
      if (!desktop.matches) return;
      const restoreFocus =
        menu?.contains(document.activeElement) || document.activeElement === button;
      setOpen(false);
      if (restoreFocus) homeRef.current?.focus();
    };
    if (desktop.matches) {
      closeForDesktop();
      return;
    }
    const focusable = () =>
      menu ? Array.from(menu.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")) : [];
    const showFocus = (element?: HTMLElement | null) => {
      element?.focus();
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
    desktop.addEventListener("change", closeForDesktop);
    return () => {
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", closeForDesktop);
    };
  }, [open]);

  return (
    <header className="v-site-chrome v-header">
      <div className="v-container v-header-inner">
        <Link
          ref={homeRef}
          to="/"
          className="v-brand-link flex shrink-0 items-center"
          aria-label="Veep home"
        >
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
                className="v-nav"
                activeProps={{
                  className: "v-nav is-active",
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
          className="v-icon-button v-menu-toggle"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls={menuId}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuPresent && (
        <div
          ref={menuRef}
          id={menuId}
          className="v-mobile-nav lg:hidden"
          inert={!open}
          aria-hidden={!open}
        >
          <nav aria-label="Primary" className="v-container">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: true }}
                onClick={() => setOpen(false)}
                className="v-nav"
                activeProps={{
                  className: "v-nav is-active",
                }}
              >
                {item.label}
              </Link>
            ))}
            <div className="v-mobile-theme">
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
