import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  DemoNote,
  Eyebrow,
  Field,
  KeyValue,
  PageHeader,
  PrimaryButton,
  Row,
  Rows,
  Status,
  inputCls,
} from "@/components/portal/ui";
import { fmtDate } from "@/lib/portal/dates";
import { companyName, usePortal } from "@/lib/portal/mock-store";

export const Route = createFileRoute("/_authenticated/portal/client/engagements")({
  head: () => ({
    meta: [
      { title: "Engagements — Veep Client Portal" },
      { name: "description", content: "Your operators, goals, updates, and change requests." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Engagements — Veep Client Portal" },
      { property: "og:description", content: "Your operators, goals, updates, and change requests." },
    ],
  }),
  component: Engagements,
});

const REQUEST_KINDS = ["Extend the engagement", "Change scope", "Replace the operator", "End early"];

function Engagements() {
  const { engagements, addEngagementRequest, companyId } = usePortal();
  const visible = companyId === "all" ? engagements : engagements.filter((e) => e.companyId === companyId);
  const active = visible.filter((e) => e.state === "Active");
  const past = visible.filter((e) => e.state === "Past");
  const [selected, setSelected] = useState<string | null>(active[0]?.id ?? null);
  const current = visible.find((e) => e.id === selected) ?? null;
  const [kind, setKind] = useState(REQUEST_KINDS[0]);
  const [body, setBody] = useState("");

  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Client portal"
        title="Engagements"
        intro="Who's working on what, how it's tracking, and how to change it."
      />

      <section>
        <h2 className="text-lg tracking-tight text-cream">Active</h2>
        <div className="mt-5">
          <Rows>
            {active.map((e) => (
              <Row key={e.id} onClick={() => setSelected(e.id)}>
                <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4">
                  <img
                    src={e.operator.photo}
                    alt={e.operator.name}
                    width={48}
                    height={48}
                    loading="lazy"
                    className="h-12 w-12 shrink-0 rounded-full object-cover"
                  />
                  <div className="min-w-0">
                    <h3 className="truncate text-base text-cream">{e.operator.name}</h3>
                    <p className="mt-1 truncate text-sm text-stone">{companyName(e.companyId)}</p>
                  </div>
                  <Status label={selected === e.id ? "Viewing" : "Active"} tone="accent" />
                </div>
              </Row>
            ))}
          </Rows>
        </div>
      </section>

      {current && (
        <section className="space-y-8">
          <div className="flex flex-wrap items-center gap-5">
            <img
              src={current.operator.photo}
              alt={current.operator.name}
              width={80}
              height={80}
              loading="lazy"
              className="h-20 w-20 shrink-0 rounded-2xl object-cover"
            />
            <div className="min-w-0">
              <Eyebrow>Your operator</Eyebrow>
              <h2 className="mt-1.5 text-xl tracking-tight text-cream">{current.operator.name}</h2>
              <p className="mt-1 text-base text-stone">{current.operator.headline}</p>
            </div>
          </div>

          <KeyValue
            items={[
              { label: "Company", value: companyName(current.companyId) },
              { label: "Offer type", value: current.offerType },
              { label: "Dates", value: `${fmtDate(current.start)} – ${fmtDate(current.end)}` },
              { label: "Client success", value: current.csContact },
            ]}
          />

          <div>
            <Eyebrow>Goals</Eyebrow>
            <ul className="mt-2 space-y-1.5 text-base text-stone">
              {current.goals.map((g) => (
                <li key={g} className="flex gap-2.5">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {g}
                </li>
              ))}
            </ul>
          </div>

          {current.files.length > 0 && (
            <div>
              <Eyebrow>Files</Eyebrow>
              <ul className="mt-2 space-y-1.5">
                {current.files.map((f) => (
                  <li key={f.name}>
                    <a href={f.href} className="text-base text-accent underline underline-offset-4">
                      {f.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <Eyebrow>Weekly updates</Eyebrow>
            <div className="mt-3">
              <Rows>
                {current.updates.length === 0 && (
                  <Row>
                    <p className="text-base text-stone">No updates posted yet.</p>
                  </Row>
                )}
                {current.updates.map((u) => (
                  <Row key={u.id}>
                    <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-stone-soft">
                      {fmtDate(u.date)} · {u.author}
                    </p>
                    <p className="mt-1.5 text-base leading-relaxed text-stone">{u.body}</p>
                  </Row>
                ))}
              </Rows>
            </div>
          </div>

          <div className="max-w-xl">
            <Eyebrow>Request a change</Eyebrow>
            <form
              className="mt-3 space-y-4"
              onSubmit={(ev) => {
                ev.preventDefault();
                if (!body.trim()) return;
                addEngagementRequest(current.id, kind, body.trim());
                setBody("");
              }}
            >
              <Field label="What kind of change?">
                <select value={kind} onChange={(e) => setKind(e.target.value)} className={inputCls}>
                  {REQUEST_KINDS.map((k) => (
                    <option key={k} value={k}>
                      {k}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Context for Veep">
                <textarea
                  rows={3}
                  maxLength={800}
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  className={inputCls}
                />
              </Field>
              <PrimaryButton type="submit" disabled={!body.trim()}>
                Send request
              </PrimaryButton>
            </form>
            {current.requests.length > 0 && (
              <div className="mt-6">
                <Rows>
                  {current.requests.map((r) => (
                    <Row key={r.id}>
                      <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-stone-soft">
                        {fmtDate(r.date)} · {r.kind}
                      </p>
                      <p className="mt-1.5 text-base text-stone">{r.body}</p>
                    </Row>
                  ))}
                </Rows>
              </div>
            )}
          </div>
        </section>
      )}

      {past.length > 0 && (
        <section>
          <h2 className="text-lg tracking-tight text-cream">Past</h2>
          <div className="mt-5">
            <Rows>
              {past.map((e) => (
                <Row key={e.id} onClick={() => setSelected(e.id)}>
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                    <div className="min-w-0">
                      <h3 className="text-base text-cream">{e.operator.name}</h3>
                      <p className="mt-1 text-sm text-stone">{companyName(e.companyId)}</p>
                    </div>
                    <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.1em] text-stone-soft">
                      {fmtDate(e.start)} – {fmtDate(e.end)}
                    </span>
                  </div>
                </Row>
              ))}
            </Rows>
          </div>
        </section>
      )}

      <DemoNote />
    </div>
  );
}