import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
  useSheetDashboard,
  useIsAdmin,
  useLeads,
  useSessionUser,
  useWins,
  LEAD_STAGES,
} from "@/lib/partner-data";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({
    meta: [
      { title: "Partner Dashboard — Veep" },
      { name: "description", content: "Live leads and recent wins for Veep operating partners." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: Dashboard,
});

type LeadRow = {
  id: string;
  role_needed?: string;
  one_liner?: string;
  blurb?: string;
  stage: string;
  func?: string;
  industry?: string;
  engagement_type?: string;
};
type WinRow = {
  id: string;
  role: string;
  blurb?: string;
  engagement_type?: string;
  length?: string;
  industry?: string;
  func?: string;
  company?: string;
};
type LeadCard = { id: string; role: string; blurb: string; stage: string; meta: string };
type WinCard = { id: string; role: string; blurb: string; meta: string };

function joinMeta(parts: (string | undefined)[]): string {
  return parts.filter((p): p is string => Boolean(p)).join(" · ");
}
function toLeadCard(l: LeadRow): LeadCard {
  return {
    id: l.id,
    role: l.role_needed ?? "Senior operator",
    blurb: l.one_liner ?? l.blurb ?? "",
    stage: l.stage,
    meta: joinMeta([l.func, l.industry, l.engagement_type]),
  };
}
function toWinCard(w: WinRow): WinCard {
  return {
    id: w.id,
    role: w.role,
    blurb: w.blurb ?? "",
    meta: joinMeta([w.func, w.industry, w.engagement_type, w.company]),
  };
}

function Dashboard() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data: user } = useSessionUser();
  const { data: isAdmin } = useIsAdmin();
  const manualLeads = useLeads();
  const manualWins = useWins();
  const sheet = useSheetDashboard();
  const [stage, setStage] = useState<string>("All");

  const sheetData = sheet.data?.configured ? sheet.data : null;
  const liveFromSheet = sheetData !== null;
  // Leads come from the live Google Sheet when available, else admin entries.
  const leads = sheetData
    ? { data: sheetData.leads, isLoading: sheet.isLoading, error: sheet.error }
    : manualLeads;
  // Wins come from the live Google Sheet (Wins tab) when available, else admin entries.
  const wins = sheetData
    ? { data: sheetData.wins, isLoading: sheet.isLoading, error: sheet.error }
    : manualWins;

  async function signOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  const leadCards = (leads.data ?? []).map((l) => toLeadCard(l as LeadRow));
  const visible = leadCards.filter((c) => stage === "All" || c.stage === stage);
  const winCards = (wins.data ?? []).map((w) => toWinCard(w as WinRow));
  const denied = manualLeads.error || manualWins.error;

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-accent font-mono">
            Partner dashboard
          </div>
          <h1 className="mt-3 text-3xl md:text-4xl text-cream tracking-tight">
            Live leads and recent wins
          </h1>
          <p className="mt-2 text-sm text-stone">
            Signed in as {user?.email}. Confidential — for Veep operating partners only.
          </p>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-stone-soft">
            Source: {liveFromSheet ? "Google Sheet (live)" : "Veep admin entries"}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {isAdmin && (
            <Link
              to="/admin"
              className="inline-flex min-h-11 items-center rounded-full border border-white/15 px-4 py-2 text-sm text-cream hover:bg-white/5"
            >
              Manage
            </Link>
          )}
          <button
            onClick={signOut}
            className="inline-flex min-h-11 items-center rounded-full border border-white/15 px-4 py-2 text-sm text-cream hover:bg-white/5"
          >
            Sign out
          </button>
        </div>
      </div>

      {denied && (
        <p className="mt-10 text-sm text-red-400">
          Your account doesn't have partner access yet. Contact Veep to be added.
        </p>
      )}

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-xl text-cream tracking-tight">Live leads</h2>
            <div className="flex flex-wrap gap-1.5">
              {["All", ...LEAD_STAGES].map((s) => (
                <button
                  key={s}
                  onClick={() => setStage(s)}
                  className={`rounded-full px-3 py-1.5 text-xs ${
                    stage === s ? "bg-cream text-ink" : "border border-white/12 text-cream/80 hover:bg-white/5"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5 space-y-3">
            {leads.isLoading && <p className="text-sm text-stone">Loading…</p>}
            {!leads.isLoading && visible.length === 0 && (
              <p className="text-sm text-stone">No live leads in this stage right now.</p>
            )}
            {visible.map((lead) => (
              <article
                key={lead.id}
                className="rounded-2xl border border-white/10 bg-[color:var(--surface-raised)] p-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="min-w-0 flex-1 text-base text-cream">{lead.role}</h3>
                  <span className="shrink-0 rounded-full border border-accent/40 px-2.5 py-1 text-[11px] uppercase tracking-[0.1em] text-accent">
                    {lead.stage}
                  </span>
                </div>
                {lead.blurb && (
                  <p className="mt-2 text-base leading-relaxed text-stone">{lead.blurb}</p>
                )}
                {lead.meta && (
                  <p className="mt-3 text-[11px] uppercase tracking-[0.1em] text-stone-soft">
                    {lead.meta}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl text-cream tracking-tight">Recent wins</h2>
          <div className="mt-5 space-y-3">
            {wins.isLoading && <p className="text-sm text-stone">Loading…</p>}
            {!wins.isLoading && winCards.length === 0 && (
              <p className="text-sm text-stone">No wins posted yet.</p>
            )}
            {winCards.map((win) => (
              <article
                key={win.id}
                className="rounded-2xl border border-white/10 bg-[color:var(--surface-raised)] p-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="min-w-0 flex-1 text-base text-cream">{win.role}</h3>
                  <span className="shrink-0 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.1em] text-accent">
                    Closed
                  </span>
                </div>
                {win.blurb && (
                  <p className="mt-2 text-base leading-relaxed text-stone">{win.blurb}</p>
                )}
                {win.meta && (
                  <p className="mt-3 text-[11px] uppercase tracking-[0.1em] text-stone-soft">
                    {win.meta}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
