import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  DemoNote,
  Field,
  PageHeader,
  PrimaryButton,
  Row,
  Rows,
  Status,
  inputCls,
} from "@/components/portal/ui";
import { usePortal } from "@/lib/portal/mock-store";
import type { TeamMember } from "@/lib/portal/types";

export const Route = createFileRoute("/_authenticated/portal/client/team")({
  head: () => ({
    meta: [
      { title: "Team — Veep Client Portal" },
      { name: "description", content: "Who from your side and Veep's has access." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Team — Veep Client Portal" },
      { property: "og:description", content: "Who from your side and Veep's has access." },
    ],
  }),
  component: Team,
});

const ROLES: TeamMember["role"][] = ["Admin", "Billing", "Viewer"];

function Team() {
  const { team, inviteTeammate } = usePortal();
  const [form, setForm] = useState({ name: "", email: "", role: "Viewer" as TeamMember["role"] });

  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Client portal"
        title="Team"
        intro="Everyone with access to this portal, on your side and Veep's."
      />

      <section>
        <Rows>
          {team.map((m) => (
            <Row key={m.id}>
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                <div className="min-w-0">
                  <h2 className="text-base text-cream">{m.name}</h2>
                  <p className="mt-1 truncate text-sm text-stone">{m.email}</p>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-stone-soft">
                    {m.role}
                  </p>
                </div>
                <Status label={m.status} tone={m.status === "Pending" ? "accent" : "quiet"} />
              </div>
            </Row>
          ))}
        </Rows>
      </section>

      <section>
        <h2 className="text-lg tracking-tight text-cream">Invite someone</h2>
        <form
          className="mt-5 max-w-xl space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            if (!form.name.trim() || !form.email.trim()) return;
            inviteTeammate(form.name.trim(), form.email.trim(), form.role);
            setForm({ name: "", email: "", role: "Viewer" });
          }}
        >
          <Field label="Name">
            <input
              value={form.name}
              maxLength={120}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputCls}
            />
          </Field>
          <Field label="Email">
            <input
              type="email"
              value={form.email}
              maxLength={255}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputCls}
            />
          </Field>
          <Field label="Access level">
            <select
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value as TeamMember["role"] })}
              className={inputCls}
            >
              {ROLES.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </Field>
          <PrimaryButton type="submit" disabled={!form.name.trim() || !form.email.trim()}>
            Send invite
          </PrimaryButton>
        </form>
      </section>

      <DemoNote />
    </div>
  );
}