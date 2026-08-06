import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import wordmarkWhite from "@/assets/veep-wordmark-white.png.asset.json";
import wordmarkNavy from "@/assets/veep-wordmark-navy.png.asset.json";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import { account, companies, usePortal } from "@/lib/portal/mock-store";

type NavLink = { to: string; label: string };

const operatorNav: NavLink[] = [
  { to: "/portal/operator", label: "Home" },
  { to: "/portal/operator/invitations", label: "Invitations" },
  { to: "/portal/operator/assignments", label: "Assignments" },
  { to: "/portal/operator/availability", label: "Availability" },
  { to: "/portal/operator/profile", label: "Profile" },
  { to: "/portal/operator/agreements", label: "Agreements" },
  { to: "/portal/operator/payments", label: "Payments" },
  { to: "/portal/operator/support", label: "Support" },
];

const clientNav: NavLink[] = [
  { to: "/portal/client", label: "Home" },
  { to: "/portal/client/jobs", label: "Jobs" },
  { to: "/portal/client/proposals", label: "Proposals" },
  { to: "/portal/client/engagements", label: "Engagements" },
  { to: "/portal/client/team", label: "Team" },
  { to: "/portal/client/documents", label: "Documents" },
  { to: "/portal/client/billing", label: "Billing" },
  { to: "/portal/client/support", label: "Support" },
];

export function PortalShell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isClient = pathname.startsWith("/portal/client");
  const nav = isClient ? clientNav : operatorNav;
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { companyId, setCompanyId } = usePortal();

  async function signOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  const isActive = (to: string) =>
    to === "/portal/operator" || to === "/portal/client" ? pathname === to : pathname.startsWith(to);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-background/90 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-4">
            <Link to="/" aria-label="Veep home" className="shrink-0">
              <img src={wordmarkWhite.url} alt="Veep" className="block h-5 w-auto light:hidden" />
              <img src={wordmarkNavy.url} alt="Veep" className="hidden h-5 w-auto light:block" />
            </Link>
            <span aria-hidden className="hidden h-4 w-px shrink-0 bg-white/15 sm:block" />
            <span className="truncate font-mono text-[11px] uppercase tracking-[0.12em] text-stone-soft">
              {isClient ? `${account.name} — Client portal` : "Operator portal"}
            </span>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <Link
              to={isClient ? "/portal/operator" : "/portal/client"}
              className="hidden rounded-full border border-white/15 px-3 py-1.5 text-xs text-cream transition hover:bg-white/5 sm:inline-flex"
            >
              {isClient ? "Operator view" : "Client view"}
            </Link>
            <ThemeToggle />
            <button
              onClick={signOut}
              className="hidden rounded-full px-3 py-1.5 text-xs text-stone transition hover:text-cream lg:inline-flex"
            >
              Sign out
            </button>
            <button
              className="-mr-2 min-h-11 min-w-11 p-3 text-cream lg:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle portal menu"
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="border-t border-white/10 px-4 py-3 lg:hidden" aria-label="Portal">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={`block rounded-md px-3 py-2.5 text-base ${
                  isActive(n.to) ? "text-cream" : "text-stone"
                }`}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to={isClient ? "/portal/operator" : "/portal/client"}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2.5 text-base text-accent"
            >
              Switch to {isClient ? "operator" : "client"} view
            </Link>
            <button onClick={signOut} className="block px-3 py-2.5 text-base text-stone">
              Sign out
            </button>
          </nav>
        )}
      </header>

      <div className="mx-auto flex max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <aside className="hidden w-52 shrink-0 lg:block">
          <nav className="sticky top-24 space-y-0.5" aria-label="Portal">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className={`block border-l py-1.5 pl-3 text-sm transition ${
                  isActive(n.to)
                    ? "border-accent text-cream"
                    : "border-white/10 text-stone hover:text-cream"
                }`}
              >
                {n.label}
              </Link>
            ))}
            {isClient && (
              <div className="pt-8">
                <div className="mb-2 pl-3 font-mono text-[11px] uppercase tracking-[0.1em] text-stone-soft">
                  Company
                </div>
                <select
                  value={companyId}
                  onChange={(e) => setCompanyId(e.target.value)}
                  className="w-full rounded-lg border border-white/12 bg-white/5 px-2.5 py-2 text-sm text-cream outline-none focus:border-accent"
                >
                  <option value="all">All companies</option>
                  {companies.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </nav>
        </aside>
        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}