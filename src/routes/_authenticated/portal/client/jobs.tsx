import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  DemoNote,
  Eyebrow,
  Field,
  PageHeader,
  PrimaryButton,
  Row,
  Rows,
  Status,
  inputCls,
} from "@/components/portal/ui";
import { fmtDate } from "@/lib/portal/dates";
import { companyName, usePortal } from "@/lib/portal/mock-store";


export const Route = createFileRoute("/_authenticated/portal/client/jobs")({
  head: () => ({
    meta: [
      { title: "Jobs — Veep Client Portal" },
      { name: "description", content: "Tell Veep what needs doing and track where each job stands." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Jobs — Veep Client Portal" },
      { property: "og:description", content: "Tell Veep what needs doing and track where each job stands." },
    ],
  }),
  component: Jobs,
});

const URGENCY = ["Immediate", "Within 30 days", "Within 60 days", "This quarter"];
const OWNERS = [
  { value: "founder", label: "The founder or CEO" },
  { value: "internal", label: "Someone internal, part-time" },
  { value: "vendor", label: "An agency or vendor" },
  { value: "none", label: "Nobody" },
];

function Jobs() {
  const { jobs, submitJob, companyId, companies } = usePortal();
  const visible = companyId === "all" ? jobs : jobs.filter((j) => j.companyId === companyId);
  const [openId, setOpenId] = useState<string | null>(null);
  const [form, setForm] = useState({
    title: "",
    success: "",
    ownedToday: "founder",
    urgency: URGENCY[0],
    companyId: companies[0]?.id ?? "",
    constraints: "",
  });
  const [confirmed, setConfirmed] = useState(false);


  return (
    <div className="space-y-14">
      <PageHeader
        eyebrow="Client portal"
        title="Jobs"
        intro="Describe the job to be done in plain language. Veep replies within one business day."
      />

      <section>
        <h2 className="text-lg tracking-tight text-cream">Request a job</h2>
        <form
          className="mt-5 max-w-xl space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            if (!form.title.trim() || !form.success.trim()) return;
            submitJob(form);
            setForm({ ...form, title: "", success: "", constraints: "" });
            setConfirmed(true);
          }}
        >
          <Field label="What needs doing?">
            <input
              value={form.title}
              maxLength={140}
              onChange={(e) => {
                setConfirmed(false);
                setForm({ ...form, title: e.target.value });
              }}
              placeholder="Own the finance function through the next raise"
              className={inputCls}
            />
          </Field>
          <Field label="What does success look like?">
            <textarea
              rows={3}
              maxLength={600}
              value={form.success}
              onChange={(e) => {
                setConfirmed(false);
                setForm({ ...form, success: e.target.value });
              }}
              className={inputCls}
            />
          </Field>
          <Field label="Who owns this today?">
            <select
              value={form.ownedToday}
              onChange={(e) => setForm({ ...form, ownedToday: e.target.value })}
              className={inputCls}
            >
              {OWNERS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="How urgent?">
            <select
              value={form.urgency}
              onChange={(e) => setForm({ ...form, urgency: e.target.value })}
              className={inputCls}
            >
              {URGENCY.map((u) => (
                <option key={u} value={u}>
                  {u}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Company">
            <select
              value={form.companyId}
              onChange={(e) => setForm({ ...form, companyId: e.target.value })}
              className={inputCls}
            >
              {companies.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Constraints (optional)">
            <input
              value={form.constraints}
              maxLength={200}
              onChange={(e) => setForm({ ...form, constraints: e.target.value })}
              className={inputCls}
            />
          </Field>
          <div className="flex flex-wrap items-center gap-4">
            <PrimaryButton type="submit" disabled={!form.title.trim() || !form.success.trim()}>
              Submit job
            </PrimaryButton>
            {confirmed && (
              <span className="text-base text-accent">
                Submitted. Veep replies within one business day.
              </span>
            )}
          </div>
        </form>
      </section>

      <section>
        <h2 className="text-lg tracking-tight text-cream">Your jobs</h2>
        <div className="mt-5">
          <Rows>
            {visible.map((j) => {
              const isOpen = openId === j.id;
              return (
                <div key={j.id}>
                  <Row onClick={() => setOpenId(isOpen ? null : j.id)}>
                    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                      <div className="min-w-0">
                        <h3 className="text-base text-cream">{j.title}</h3>
                        <p className="mt-1 text-sm text-stone">{companyName(j.companyId)}</p>
                        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-stone-soft">
                          {j.urgency} · submitted {fmtDate(j.createdAt)}
                        </p>
                      </div>
                      <Status
                        label={j.status}
                        tone={j.status === "On hold" ? "warn" : j.status === "In engagement" ? "accent" : "quiet"}
                      />
                    </div>
                  </Row>
                  {isOpen && (
                    <div className="max-w-2xl space-y-5 px-1 pb-6">
                      <div>
                        <Eyebrow>Success looks like</Eyebrow>
                        <p className="mt-1.5 text-base leading-relaxed text-stone">{j.success}</p>
                      </div>
                      {j.constraints && (
                        <div>
                          <Eyebrow>Constraints</Eyebrow>
                          <p className="mt-1.5 text-base text-stone">{j.constraints}</p>
                        </div>
                      )}
                      <div>
                        <Eyebrow>Progress</Eyebrow>
                        <ol className="mt-2 space-y-2">
                          {j.timeline.map((t) => (
                            <li key={t.date + t.note} className="flex gap-3 text-base text-stone">
                              <span className="w-28 shrink-0 font-mono text-[11px] uppercase tracking-[0.1em] text-stone-soft">
                                {fmtDate(t.date)}
                              </span>
                              {t.note}
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </Rows>
        </div>
      </section>

      <DemoNote />
    </div>
  );
}