import { createFileRoute } from "@tanstack/react-router";
import { DemoNote, Eyebrow, PageHeader, Row, Rows, Status } from "@/components/portal/ui";
import { fmtMoney } from "@/lib/portal/dates";
import { companyName, usePortal } from "@/lib/portal/mock-store";

export const Route = createFileRoute("/_authenticated/portal/client/billing")({
  head: () => ({
    meta: [
      { title: "Billing — Veep Client Portal" },
      { name: "description", content: "Invoices, what's outstanding, and how Veep bills." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Billing — Veep Client Portal" },
      { property: "og:description", content: "Invoices, what's outstanding, and how Veep bills." },
    ],
  }),
  component: Billing,
});

function Billing() {
  const { invoices, companyId } = usePortal();
  const visible = companyId === "all" ? invoices : invoices.filter((i) => i.companyId === companyId);
  const outstanding = visible.filter((i) => i.status !== "Paid").reduce((s, i) => s + i.amount, 0);
  const paid = visible.filter((i) => i.status === "Paid").reduce((s, i) => s + i.amount, 0);

  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Client portal"
        title="Billing"
        intro="Veep bills monthly per engagement. Terms are net 15 from the invoice date."
      />

      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <Eyebrow>Outstanding</Eyebrow>
          <div className="mt-2 text-3xl tracking-tight text-cream">{fmtMoney(outstanding)}</div>
        </div>
        <div>
          <Eyebrow>Paid to date</Eyebrow>
          <div className="mt-2 text-3xl tracking-tight text-cream">{fmtMoney(paid)}</div>
        </div>
        <div>
          <Eyebrow>Terms</Eyebrow>
          <div className="mt-2 text-3xl tracking-tight text-cream">Net 15</div>
        </div>
      </section>

      <section>
        <h2 className="text-lg tracking-tight text-cream">Invoices</h2>
        <div className="mt-5">
          <Rows>
            {visible.map((i) => (
              <Row key={i.id}>
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                  <div className="min-w-0">
                    <h3 className="text-base text-cream">
                      {i.number} · {fmtMoney(i.amount)}
                    </h3>
                    <p className="mt-1 text-sm text-stone">{companyName(i.companyId)}</p>
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-stone-soft">
                      {i.period}
                    </p>
                  </div>
                  <Status
                    label={i.status}
                    tone={i.status === "Overdue" ? "warn" : i.status === "Due" ? "accent" : "quiet"}
                  />
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