import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useIsAdmin, useLeads, useWins, LEAD_STAGES } from "@/lib/partner-data";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Partner Admin — Veep" },
      { name: "description", content: "Manage live leads, recent wins, and partner access." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: Admin,
});

const inputCls =
  "w-full rounded-lg border border-white/12 bg-white/5 px-3 py-2 text-sm text-cream outline-none focus:border-accent";

function Admin() {
  const { data: isAdmin, isLoading } = useIsAdmin();

  if (isLoading) return <Shell><p className="text-sm text-stone">Loading…</p></Shell>;
  if (!isAdmin)
    return (
      <Shell>
        <p className="text-sm text-stone">
          This area is for Veep admins.{" "}
          <Link to="/dashboard" className="text-cream underline underline-offset-4">
            Back to the dashboard
          </Link>
          .
        </p>
      </Shell>
    );

  return (
    <Shell>
      <LeadsAdmin />
      <WinsAdmin />
      <PartnersAdmin />
    </Shell>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 md:py-20 space-y-14">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-accent font-mono">
            Admin
          </div>
          <h1 className="mt-3 text-3xl text-cream tracking-tight">Manage the partner dashboard</h1>
        </div>
        <Link
          to="/dashboard"
          className="inline-flex min-h-11 items-center rounded-full border border-white/15 px-4 py-2 text-sm text-cream hover:bg-white/5"
        >
          View dashboard
        </Link>
      </div>
      {children}
    </section>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[color:var(--surface-raised)] p-6">
      <h2 className="text-lg text-cream tracking-tight">{title}</h2>
      <div className="mt-5 space-y-4">{children}</div>
    </div>
  );
}

function LeadsAdmin() {
  const qc = useQueryClient();
  const leads = useLeads(true);
  const [form, setForm] = useState({ pseudonym: "", one_liner: "", role_needed: "", stage: "Scoping" });
  const [error, setError] = useState<string | null>(null);

  async function add(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const { error } = await supabase.from("leads").insert({
      pseudonym: form.pseudonym.trim().slice(0, 120),
      one_liner: form.one_liner.trim().slice(0, 400),
      role_needed: form.role_needed.trim().slice(0, 120),
      stage: form.stage,
    });
    if (error) return setError(error.message);
    setForm({ pseudonym: "", one_liner: "", role_needed: "", stage: "Scoping" });
    qc.invalidateQueries({ queryKey: ["leads"] });
  }

  async function patch(id: string, values: { stage?: string; archived?: boolean }) {
    await supabase.from("leads").update(values).eq("id", id);
    qc.invalidateQueries({ queryKey: ["leads"] });
  }

  async function remove(id: string) {
    await supabase.from("leads").delete().eq("id", id);
    qc.invalidateQueries({ queryKey: ["leads"] });
  }

  return (
    <Card title="Live leads">
      <form onSubmit={add} className="grid gap-3 sm:grid-cols-2">
        <input required placeholder="Pseudonym" value={form.pseudonym} onChange={(e) => setForm({ ...form, pseudonym: e.target.value })} className={inputCls} />
        <input required placeholder="Role needed" value={form.role_needed} onChange={(e) => setForm({ ...form, role_needed: e.target.value })} className={inputCls} />
        <input required placeholder="Anonymized one-liner" value={form.one_liner} onChange={(e) => setForm({ ...form, one_liner: e.target.value })} className={`${inputCls} sm:col-span-2`} />
        <select value={form.stage} onChange={(e) => setForm({ ...form, stage: e.target.value })} className={inputCls}>
          {LEAD_STAGES.map((s) => (
            <option key={s} value={s} className="bg-background">{s}</option>
          ))}
        </select>
        <button className="min-h-11 rounded-full bg-cream px-5 text-sm font-medium text-ink">Add lead</button>
      </form>
      {error && <p className="text-sm text-red-400">{error}</p>}

      <div className="divide-y divide-white/8 border-t border-white/8">
        {(leads.data ?? []).map((lead) => (
          <div key={lead.id} className="flex flex-wrap items-center gap-3 py-3">
            <div className="min-w-0 flex-1">
              <div className={`text-sm ${lead.archived ? "text-stone-soft line-through" : "text-cream"}`}>
                {lead.pseudonym} · {lead.role_needed}
              </div>
              <div className="text-xs text-stone">{lead.one_liner}</div>
            </div>
            <select
              value={lead.stage}
              onChange={(e) => patch(lead.id, { stage: e.target.value })}
              className="rounded-lg border border-white/12 bg-white/5 px-2 py-1.5 text-xs text-cream"
            >
              {LEAD_STAGES.map((s) => (
                <option key={s} value={s} className="bg-background">{s}</option>
              ))}
            </select>
            <button onClick={() => patch(lead.id, { archived: !lead.archived })} className="text-xs text-cream/80 underline underline-offset-4">
              {lead.archived ? "Restore" : "Archive"}
            </button>
            <button onClick={() => remove(lead.id)} className="text-xs text-red-400 underline underline-offset-4">
              Delete
            </button>
          </div>
        ))}
      </div>
    </Card>
  );
}

function WinsAdmin() {
  const qc = useQueryClient();
  const wins = useWins(true);
  const [form, setForm] = useState({ role: "", engagement_type: "", length: "" });
  const [error, setError] = useState<string | null>(null);

  async function add(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const { error } = await supabase.from("wins").insert({
      role: form.role.trim().slice(0, 120),
      engagement_type: form.engagement_type.trim().slice(0, 120),
      length: form.length.trim().slice(0, 60),
    });
    if (error) return setError(error.message);
    setForm({ role: "", engagement_type: "", length: "" });
    qc.invalidateQueries({ queryKey: ["wins"] });
  }

  async function patch(id: string, values: { archived?: boolean }) {
    await supabase.from("wins").update(values).eq("id", id);
    qc.invalidateQueries({ queryKey: ["wins"] });
  }

  async function remove(id: string) {
    await supabase.from("wins").delete().eq("id", id);
    qc.invalidateQueries({ queryKey: ["wins"] });
  }

  return (
    <Card title="Recent wins">
      <form onSubmit={add} className="grid gap-3 sm:grid-cols-4">
        <input required placeholder="Role" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} className={inputCls} />
        <input required placeholder="Engagement type" value={form.engagement_type} onChange={(e) => setForm({ ...form, engagement_type: e.target.value })} className={inputCls} />
        <input required placeholder="Length" value={form.length} onChange={(e) => setForm({ ...form, length: e.target.value })} className={inputCls} />
        <button className="min-h-11 rounded-full bg-cream px-5 text-sm font-medium text-ink">Add win</button>
      </form>
      {error && <p className="text-sm text-red-400">{error}</p>}

      <div className="divide-y divide-white/8 border-t border-white/8">
        {(wins.data ?? []).map((win) => (
          <div key={win.id} className="flex flex-wrap items-center gap-3 py-3">
            <div className={`min-w-0 flex-1 text-sm ${win.archived ? "text-stone-soft line-through" : "text-cream"}`}>
              {win.role} · {win.engagement_type} · {win.length}
            </div>
            <button onClick={() => patch(win.id, { archived: !win.archived })} className="text-xs text-cream/80 underline underline-offset-4">
              {win.archived ? "Restore" : "Archive"}
            </button>
            <button onClick={() => remove(win.id)} className="text-xs text-red-400 underline underline-offset-4">
              Delete
            </button>
          </div>
        ))}
      </div>
    </Card>
  );
}

function PartnersAdmin() {
  const qc = useQueryClient();
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"partner" | "admin">("partner");
  const [error, setError] = useState<string | null>(null);

  const invites = useQuery({
    queryKey: ["invites"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("partner_invites")
        .select("id, email, role, accepted_at, revoked, created_at")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data ?? [];
    },
  });

  async function invite(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const { error } = await supabase
      .from("partner_invites")
      .insert({ email: email.trim().toLowerCase().slice(0, 255), role });
    if (error) return setError(error.message);
    setEmail("");
    qc.invalidateQueries({ queryKey: ["invites"] });
  }

  async function setRevoked(id: string, inviteEmail: string, revoked: boolean) {
    await supabase.from("partner_invites").update({ revoked }).eq("id", id);
    if (revoked) {
      const { data: profile } = await supabase
        .from("profiles")
        .select("id")
        .eq("email", inviteEmail)
        .maybeSingle();
      if (profile) await supabase.from("user_roles").delete().eq("user_id", profile.id);
    }
    qc.invalidateQueries({ queryKey: ["invites"] });
  }

  return (
    <Card title="Partners">
      <form onSubmit={invite} className="grid gap-3 sm:grid-cols-3">
        <input required type="email" placeholder="Email to invite" value={email} onChange={(e) => setEmail(e.target.value)} className={`${inputCls} sm:col-span-1`} />
        <select value={role} onChange={(e) => setRole(e.target.value as "partner" | "admin")} className={inputCls}>
          <option value="partner" className="bg-background">Partner</option>
          <option value="admin" className="bg-background">Admin</option>
        </select>
        <button className="min-h-11 rounded-full bg-cream px-5 text-sm font-medium text-ink">Invite</button>
      </form>
      {error && <p className="text-sm text-red-400">{error}</p>}

      <div className="divide-y divide-white/8 border-t border-white/8">
        {(invites.data ?? []).map((row) => (
          <div key={row.id} className="flex flex-wrap items-center gap-3 py-3">
            <div className="min-w-0 flex-1">
              <div className={`text-sm ${row.revoked ? "text-stone-soft line-through" : "text-cream"}`}>
                {row.email}
              </div>
              <div className="text-xs text-stone">
                {row.role} · {row.accepted_at ? "signed up" : "invited"}
              </div>
            </div>
            <button
              onClick={() => setRevoked(row.id, row.email, !row.revoked)}
              className="text-xs text-cream/80 underline underline-offset-4"
            >
              {row.revoked ? "Restore access" : "Revoke access"}
            </button>
          </div>
        ))}
      </div>
    </Card>
  );
}
