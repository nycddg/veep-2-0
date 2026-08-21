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
          <Link to="/portal/operator" className="text-cream underline underline-offset-4">
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
      <PortalAdmin />
    </Shell>
  );

}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 md:py-20 space-y-14">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-accent font-mono">
            Admin
          </div>
          <h1 className="mt-3 text-3xl text-cream tracking-tight">Manage the partner dashboard</h1>
        </div>
        <Link
          to="/portal/operator"
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
    <div className="rounded-[6px] border border-white/10 bg-[color:var(--surface-raised)] p-6">
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

type Tab = "companies" | "operators" | "clients" | "jobs" | "engagements";

function PortalAdmin() {
  const qc = useQueryClient();
  const [tab, setTab] = useState<Tab>("companies");

  const companies = useQuery({
    queryKey: ["portal-admin", "companies"],
    queryFn: async () => {
      const { data, error } = await supabase.from("companies").select("*").order("name");
      if (error) throw error;
      return data ?? [];
    },
  });

  const operators = useQuery({
    queryKey: ["portal-admin", "operators"],
    queryFn: async () => {
      const { data, error } = await supabase.from("operators").select("*").order("name");
      if (error) throw error;
      return data ?? [];
    },
  });

  const clients = useQuery({
    queryKey: ["portal-admin", "clients"],
    queryFn: async () => {
      const { data, error } = await supabase.from("clients").select("*, companies(name)").order("name");
      if (error) throw error;
      return data ?? [];
    },
  });

  const jobs = useQuery({
    queryKey: ["portal-admin", "jobs"],
    queryFn: async () => {
      const { data, error } = await supabase.from("jobs").select("*, companies(name)").order("created_at", { ascending: false });
      if (error) throw error;
      return data ?? [];
    },
  });

  const engagements = useQuery({
    queryKey: ["portal-admin", "engagements"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("engagements")
        .select("*, companies(name), operators(name)")
        .order("start_date", { ascending: false });
      if (error) throw error;
      return data ?? [];
    },
  });

  const [companyForm, setCompanyForm] = useState({ name: "", slug: "", plan: "", domain: "" });
  const [operatorForm, setOperatorForm] = useState({ name: "", headline: "", photo_url: "" });
  const [error, setError] = useState<string | null>(null);

  async function addCompany(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const { error } = await supabase.from("companies").insert({
      name: companyForm.name.trim().slice(0, 160),
      slug: companyForm.slug.trim().slice(0, 80) || null,
      plan: companyForm.plan.trim().slice(0, 40) || null,
      domain: companyForm.domain.trim().slice(0, 120) || null,
      is_demo: true,
      source: "manual",
    });
    if (error) return setError(error.message);
    setCompanyForm({ name: "", slug: "", plan: "", domain: "" });
    qc.invalidateQueries({ queryKey: ["portal-admin"] });
  }

  async function addOperator(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const { error } = await supabase.from("operators").insert({
      name: operatorForm.name.trim().slice(0, 160),
      headline: operatorForm.headline.trim().slice(0, 200) || null,
      photo_url: operatorForm.photo_url.trim().slice(0, 500) || null,
      is_demo: true,
      source: "manual",
    });
    if (error) return setError(error.message);
    setOperatorForm({ name: "", headline: "", photo_url: "" });
    qc.invalidateQueries({ queryKey: ["portal-admin"] });
  }

  async function archive(table: string, id: string, archived: boolean) {
    const client = supabase.from(table as any);
    await client.update({ archived }).eq("id", id);
    qc.invalidateQueries({ queryKey: ["portal-admin"] });
  }

  async function remove(table: string, id: string) {
    await supabase.from(table as any).delete().eq("id", id);
    qc.invalidateQueries({ queryKey: ["portal-admin"] });
  }


  const tabs: { key: Tab; label: string }[] = [
    { key: "companies", label: "Companies" },
    { key: "operators", label: "Operators" },
    { key: "clients", label: "Clients" },
    { key: "jobs", label: "Jobs" },
    { key: "engagements", label: "Engagements" },
  ];

  return (
    <Card title="Portal data">
      <div className="flex flex-wrap gap-2 border-b border-white/8 pb-4">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`rounded-full px-3 py-1.5 text-xs ${tab === t.key ? "bg-white/10 text-cream" : "text-stone hover:text-cream"}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}

      {tab === "companies" && (
        <div className="space-y-4">
          <form onSubmit={addCompany} className="grid gap-3 sm:grid-cols-5">
            <input required placeholder="Company name" value={companyForm.name} onChange={(e) => setCompanyForm({ ...companyForm, name: e.target.value })} className={`${inputCls} sm:col-span-2`} />
            <input placeholder="Slug" value={companyForm.slug} onChange={(e) => setCompanyForm({ ...companyForm, slug: e.target.value })} className={inputCls} />
            <input placeholder="Plan" value={companyForm.plan} onChange={(e) => setCompanyForm({ ...companyForm, plan: e.target.value })} className={inputCls} />
            <button className="min-h-11 rounded-full bg-cream px-5 text-sm font-medium text-ink">Add</button>
          </form>
          <div className="divide-y divide-white/8 border-t border-white/8">
            {(companies.data ?? []).map((row) => (
              <div key={row.id} className="flex flex-wrap items-center gap-3 py-3">
                <div className={`min-w-0 flex-1 text-sm ${row.archived ? "text-stone-soft line-through" : "text-cream"}`}>
                  {row.name} <span className="text-stone-soft">· {row.plan ?? "—"}</span>
                </div>
                <button onClick={() => archive("companies", row.id, !row.archived)} className="text-xs text-cream/80 underline underline-offset-4">
                  {row.archived ? "Restore" : "Archive"}
                </button>
                <button onClick={() => remove("companies", row.id)} className="text-xs text-red-400 underline underline-offset-4">Delete</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "operators" && (
        <div className="space-y-4">
          <form onSubmit={addOperator} className="grid gap-3 sm:grid-cols-4">
            <input required placeholder="Operator name" value={operatorForm.name} onChange={(e) => setOperatorForm({ ...operatorForm, name: e.target.value })} className={inputCls} />
            <input placeholder="Headline" value={operatorForm.headline} onChange={(e) => setOperatorForm({ ...operatorForm, headline: e.target.value })} className={inputCls} />
            <input placeholder="Photo URL" value={operatorForm.photo_url} onChange={(e) => setOperatorForm({ ...operatorForm, photo_url: e.target.value })} className={inputCls} />
            <button className="min-h-11 rounded-full bg-cream px-5 text-sm font-medium text-ink">Add</button>
          </form>
          <div className="divide-y divide-white/8 border-t border-white/8">
            {(operators.data ?? []).map((row) => (
              <div key={row.id} className="flex flex-wrap items-center gap-3 py-3">
                <div className={`min-w-0 flex-1 text-sm ${row.archived ? "text-stone-soft line-through" : "text-cream"}`}>
                  {row.name} <span className="text-stone-soft">· {row.headline ?? "—"}</span>
                </div>
                <button onClick={() => archive("operators", row.id, !row.archived)} className="text-xs text-cream/80 underline underline-offset-4">
                  {row.archived ? "Restore" : "Archive"}
                </button>
                <button onClick={() => remove("operators", row.id)} className="text-xs text-red-400 underline underline-offset-4">Delete</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "clients" && (
        <div className="divide-y divide-white/8 border-t border-white/8">
          {(clients.data ?? []).map((row) => (
            <div key={row.id} className="flex flex-wrap items-center gap-3 py-3">
              <div className={`min-w-0 flex-1 text-sm ${row.archived ? "text-stone-soft line-through" : "text-cream"}`}>
                {row.name} <span className="text-stone-soft">· {row.companies?.name ?? "—"} · {row.email}</span>
              </div>
              <button onClick={() => archive("clients", row.id, !row.archived)} className="text-xs text-cream/80 underline underline-offset-4">
                {row.archived ? "Restore" : "Archive"}
              </button>
              <button onClick={() => remove("clients", row.id)} className="text-xs text-red-400 underline underline-offset-4">Delete</button>
            </div>
          ))}
        </div>
      )}

      {tab === "jobs" && (
        <div className="divide-y divide-white/8 border-t border-white/8">
          {(jobs.data ?? []).map((row) => (
            <div key={row.id} className="flex flex-wrap items-center gap-3 py-3">
              <div className={`min-w-0 flex-1 text-sm ${row.archived ? "text-stone-soft line-through" : "text-cream"}`}>
                {row.title} <span className="text-stone-soft">· {row.companies?.name ?? "—"} · {row.status}</span>
              </div>
              <button onClick={() => archive("jobs", row.id, !row.archived)} className="text-xs text-cream/80 underline underline-offset-4">
                {row.archived ? "Restore" : "Archive"}
              </button>
              <button onClick={() => remove("jobs", row.id)} className="text-xs text-red-400 underline underline-offset-4">Delete</button>
            </div>
          ))}
        </div>
      )}

      {tab === "engagements" && (
        <div className="divide-y divide-white/8 border-t border-white/8">
          {(engagements.data ?? []).map((row) => (
            <div key={row.id} className="flex flex-wrap items-center gap-3 py-3">
              <div className={`min-w-0 flex-1 text-sm ${row.archived ? "text-stone-soft line-through" : "text-cream"}`}>
                {row.operators?.name ?? "—"} at {row.companies?.name ?? "—"} <span className="text-stone-soft">· {row.state} · {row.offer_type ?? "—"}</span>
              </div>
              <button onClick={() => archive("engagements", row.id, !row.archived)} className="text-xs text-cream/80 underline underline-offset-4">
                {row.archived ? "Restore" : "Archive"}
              </button>
              <button onClick={() => remove("engagements", row.id)} className="text-xs text-red-400 underline underline-offset-4">Delete</button>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}

