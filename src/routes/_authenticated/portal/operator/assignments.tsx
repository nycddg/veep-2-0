import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  DemoNote,
  Eyebrow,
  KeyValue,
  PageHeader,
  PrimaryButton,
  Row,
  Rows,
  Status,
  inputCls,
} from "@/components/portal/ui";
import { fmtDate } from "@/lib/portal/dates";
import { usePortal } from "@/lib/portal/mock-store";

export const Route = createFileRoute("/_authenticated/portal/operator/assignments")({
  head: () => ({
    meta: [
      { title: "Assignments — Veep Operator Portal" },
      { name: "description", content: "Your active and past Veep assignments." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Assignments — Veep Operator Portal" },
      { property: "og:description", content: "Your active and past Veep assignments." },
    ],
  }),
  component: Assignments,
});

function Assignments() {
  const { assignments, postOperatorUpdate } = usePortal();
  const active = assignments.filter((a) => a.state === "Active");
  const past = assignments.filter((a) => a.state === "Past");
  const [selected, setSelected] = useState<string | null>(active[0]?.id ?? null);
  const [draft, setDraft] = useState("");
  const current = assignments.find((a) => a.id === selected) ?? null;

  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Operator portal"
        title="Assignments"
        intro="What you're running, the goals you signed up to, and your weekly updates."
      />

      <section>
        <h2 className="text-lg tracking-tight text-cream">Active</h2>
        <div className="mt-5">
          <Rows>
            {active.map((a) => (
              <Row key={a.id} onClick={() => setSelected(a.id)}>
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                  <div className="min-w-0">
                    <h3 className="text-base text-cream">{a.job}</h3>
                    <p className="mt-1 text-sm text-stone">{a.company}</p>
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-stone-soft">
                      {a.offerType} · {fmtDate(a.start)} – {fmtDate(a.end)}
                    </p>
                  </div>
                  <Status label={selected === a.id ? "Viewing" : "Active"} tone="accent" />
                </div>
              </Row>
            ))}
          </Rows>
        </div>
      </section>

      {current && (
        <section className="space-y-8">
          <div>
            <Eyebrow>Assignment detail</Eyebrow>
            <h2 className="mt-2 text-xl tracking-tight text-cream">{current.job}</h2>
            <p className="mt-1 text-base text-stone">{current.company}</p>
          </div>

          <KeyValue
            items={[
              { label: "Offer type", value: current.offerType },
              { label: "Dates", value: `${fmtDate(current.start)} – ${fmtDate(current.end)}` },
              { label: "Client success", value: current.csContact },
              { label: "State", value: current.state },
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
            <Eyebrow>Weekly update</Eyebrow>
            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              rows={3}
              maxLength={800}
              placeholder="What moved this week, and what's blocked?"
              className={`${inputCls} mt-2`}
            />
            <div className="mt-3">
              <PrimaryButton
                disabled={!draft.trim()}
                onClick={() => {
                  postOperatorUpdate(current.id, draft.trim());
                  setDraft("");
                }}
              >
                Post update
              </PrimaryButton>
            </div>
            <div className="mt-6">
              <Rows>
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
        </section>
      )}

      <section>
        <h2 className="text-lg tracking-tight text-cream">Past</h2>
        <div className="mt-5">
          <Rows>
            {past.map((a) => (
              <Row key={a.id}>
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                  <div className="min-w-0">
                    <h3 className="text-base text-cream">{a.job}</h3>
                    <p className="mt-1 text-sm text-stone">{a.company}</p>
                  </div>
                  <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.1em] text-stone-soft">
                    {fmtDate(a.start)} – {fmtDate(a.end)}
                  </span>
                </div>
              </Row>
            ))}
          </Rows>
        </div>
      </section>

      <DemoNote />
    </div>
  );
}