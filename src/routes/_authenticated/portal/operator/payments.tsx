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
import { fmtDate, fmtMoney } from "@/lib/portal/dates";
import { usePortal } from "@/lib/portal/mock-store";

export const Route = createFileRoute("/_authenticated/portal/operator/payments")({
  head: () => ({
    meta: [
      { title: "Payments — Veep Operator Portal" },
      { name: "description", content: "Your Veep payout history and invoice submissions." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Payments — Veep Operator Portal" },
      { property: "og:description", content: "Your Veep payout history and invoice submissions." },
    ],
  }),
  component: Payments,
});

function Payments() {
  const { payouts, assignments, submitInvoice } = usePortal();
  const active = assignments.filter((a) => a.state === "Active");
  const [engagement, setEngagement] = useState(
    active[0] ? `${active[0].company} — ${active[0].job}` : "",
  );
  const [amount, setAmount] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Operator portal"
        title="Payments"
        intro="Submit an invoice and track what Veep has paid you."
      />

      <section>
        <h2 className="text-lg tracking-tight text-cream">Submit an invoice</h2>
        <form
          className="mt-5 max-w-xl space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            const value = Number(amount);
            if (!engagement || !Number.isFinite(value) || value <= 0) return;
            submitInvoice(engagement, value);
            setAmount("");
            setSent(true);
          }}
        >
          <Field label="Engagement">
            <select
              value={engagement}
              onChange={(e) => {
                setSent(false);
                setEngagement(e.target.value);
              }}
              className={inputCls}
            >
              {active.map((a) => (
                <option key={a.id} value={`${a.company} — ${a.job}`}>
                  {a.company} — {a.job}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Amount (USD)">
            <input
              type="number"
              min={1}
              value={amount}
              onChange={(e) => {
                setSent(false);
                setAmount(e.target.value);
              }}
              className={inputCls}
            />
          </Field>
          <div className="flex flex-wrap items-center gap-4">
            <PrimaryButton type="submit" disabled={!amount}>
              Submit invoice
            </PrimaryButton>
            {sent && <span className="text-base text-accent">Submitted. It's showing as processing.</span>}
          </div>
        </form>
      </section>

      <section>
        <h2 className="text-lg tracking-tight text-cream">Payout history</h2>
        <div className="mt-5">
          <Rows>
            {payouts.map((p) => (
              <Row key={p.id}>
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                  <div className="min-w-0">
                    <h3 className="text-base text-cream">{fmtMoney(p.amount)}</h3>
                    <p className="mt-1 truncate text-sm text-stone">{p.engagement}</p>
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-stone-soft">
                      {fmtDate(p.date)}
                    </p>
                  </div>
                  <Status label={p.status} tone={p.status === "Processing" ? "accent" : "quiet"} />
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