import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  DemoNote,
  Field,
  PageHeader,
  PrimaryButton,
  inputCls,
} from "@/components/portal/ui";
import { fmtDate } from "@/lib/portal/dates";
import { usePortal } from "@/lib/portal/mock-store";
import type { Availability } from "@/lib/portal/types";

export const Route = createFileRoute("/_authenticated/portal/operator/availability")({
  head: () => ({
    meta: [
      { title: "Availability — Veep Operator Portal" },
      { name: "description", content: "Tell Veep when and how much you can take on." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Availability — Veep Operator Portal" },
      { property: "og:description", content: "Tell Veep when and how much you can take on." },
    ],
  }),
  component: AvailabilityPage,
});

const STATUSES: Availability["status"][] = ["Open", "Limited", "Full", "Paused"];

function AvailabilityPage() {
  const { availability, saveAvailability } = usePortal();
  const [form, setForm] = useState(availability);
  const [saved, setSaved] = useState(false);

  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="Operator portal"
        title="Availability"
        intro="Keep this current and you'll see better-fit invitations. It's the first thing we filter on."
      />

      <form
        className="max-w-xl space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          saveAvailability(form);
          setSaved(true);
        }}
      >
        <Field label="Status">
          <select
            value={form.status}
            onChange={(e) => {
              setSaved(false);
              setForm({ ...form, status: e.target.value as Availability["status"] });
            }}
            className={inputCls}
          >
            {STATUSES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Days per week">
          <input
            type="number"
            min={0}
            max={5}
            value={form.daysPerWeek}
            onChange={(e) => {
              setSaved(false);
              setForm({ ...form, daysPerWeek: Number(e.target.value) });
            }}
            className={inputCls}
          />
        </Field>

        <Field label="Earliest start">
          <input
            type="date"
            value={form.earliestStart}
            onChange={(e) => {
              setSaved(false);
              setForm({ ...form, earliestStart: e.target.value });
            }}
            className={inputCls}
          />
        </Field>

        <Field label="Travel">
          <input
            value={form.travel}
            maxLength={120}
            onChange={(e) => {
              setSaved(false);
              setForm({ ...form, travel: e.target.value });
            }}
            className={inputCls}
          />
        </Field>

        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-stone-soft">Blackouts</div>
          <div className="mt-3 space-y-3">
            {form.blackouts.map((b, idx) => (
              <div key={b.id} className="flex flex-wrap items-center gap-3">
                <input
                  type="date"
                  value={b.from}
                  onChange={(e) => {
                    setSaved(false);
                    const next = [...form.blackouts];
                    next[idx] = { ...b, from: e.target.value };
                    setForm({ ...form, blackouts: next });
                  }}
                  className={`${inputCls} w-auto`}
                />
                <span className="text-sm text-stone-soft">to</span>
                <input
                  type="date"
                  value={b.to}
                  onChange={(e) => {
                    setSaved(false);
                    const next = [...form.blackouts];
                    next[idx] = { ...b, to: e.target.value };
                    setForm({ ...form, blackouts: next });
                  }}
                  className={`${inputCls} w-auto`}
                />
                <button
                  type="button"
                  onClick={() => {
                    setSaved(false);
                    setForm({ ...form, blackouts: form.blackouts.filter((x) => x.id !== b.id) });
                  }}
                  className="text-sm text-stone underline underline-offset-4 hover:text-cream"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => {
                setSaved(false);
                setForm({
                  ...form,
                  blackouts: [
                    ...form.blackouts,
                    { id: `b-${Date.now()}`, from: form.earliestStart, to: form.earliestStart },
                  ],
                });
              }}
              className="text-sm text-accent underline underline-offset-4"
            >
              Add a blackout
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <PrimaryButton type="submit">Save availability</PrimaryButton>
          {saved && <span className="text-base text-accent">Saved for this session.</span>}
        </div>
        <p className="text-sm text-stone-soft">Last updated {fmtDate(availability.updatedAt)}.</p>
      </form>

      <DemoNote>Demo data — saves persist for this session only</DemoNote>
    </div>
  );
}