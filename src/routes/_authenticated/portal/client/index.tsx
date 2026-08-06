import { createFileRoute, Link } from "@tanstack/react-router";
import { Eyebrow, PageHeader, Row, Rows, Status } from "@/components/portal/ui";
import { fmtDate, fmtMoney } from "@/lib/portal/dates";
import { account, companyName, usePortal } from "@/lib/portal/mock-store";

export const Route = createFileRoute("/_authenticated/portal/client/")({
  head: () => ({
    meta: [
      { title: "Client Home — Veep Portal" },
      { name: "description", content: "Your jobs, proposals, and live engagements with Veep." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Client Home — Veep Portal" },
      { property: "og:description", content: "Your jobs, proposals, and live engagements with Veep." },
    ],
  }),
  component: ClientHome,
});

function ClientHome() {
  const { jobs, proposals, engagements, invoices, companyId } = usePortal();
  const scope = <T extends { companyId: string }>(rows: T[]) =>
    companyId === "all" ? rows : rows.filter((r) => r.companyId === companyId);

  const openJobs = scope(jobs).filter((j) => j.status !== "Closed");
  const openProposals = scope(proposals).filter((p) => p.status === "Sent" || p.status === "Under review");
  const activeEngagements = scope(engagements).filter((e) => e.state === "Active");
  const due = scope(invoices).filter((i) => i.status !== "Paid");

  return (
    <div className="space-y-14">
      <PageHeader
        eyebrow={`${account.name} · Client portal`}
        title="Here's where your work stands."
        intro="What needs a decision from you and what's running."
      />

      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Open jobs", value: openJobs.length },
          { label: "Proposals awaiting you", value: openProposals.length },
          { label: "Active engagements", value: activeEngagements.length },
          { label: "Invoices outstanding", value: due.length },
        ].map((s) => (
          <div key={s.label}>
            <Eyebrow>{s.label}</Eyebrow>
            <div className="mt-2 text-3xl tracking-tight text-cream">{s.value}</div>
          </div>
        ))}
      </section>

      <section>
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="text-lg tracking-tight text-cream">Needs a decision</h2>
          <Link to="/portal/client/proposals" className="text-sm text-accent underline underline-offset-4">
            All proposals
          </Link>
        </div>
        <div className="mt-5">
          <Rows>
            {openProposals.length === 0 && due.length === 0 && (
              <Row>
                <p className="text-base text-stone">Nothing waiting on you right now.</p>
              </Row>
            )}
            {openProposals.map((p) => (
              <Row key={p.id}>
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                  <div className="min-w-0">
                    <Eyebrow>Proposal · sent {fmtDate(p.sentOn)}</Eyebrow>
                    <h3 className="mt-1.5 text-base text-cream">{p.name}</h3>
                    <p className="mt-1 text-sm text-stone">{companyName(p.companyId)}</p>
                  </div>
                  <Link
                    to="/portal/client/proposals"
                    className="shrink-0 text-sm text-accent underline underline-offset-4"
                  >
                    Review
                  </Link>
                </div>
              </Row>
            ))}
            {due.map((i) => (
              <Row key={i.id}>
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                  <div className="min-w-0">
                    <Eyebrow>Invoice {i.number}</Eyebrow>
                    <h3 className="mt-1.5 text-base text-cream">{fmtMoney(i.amount)}</h3>
                    <p className="mt-1 text-sm text-stone">{companyName(i.companyId)}</p>
                  </div>
                  <Status label={i.status} tone={i.status === "Overdue" ? "warn" : "accent"} />
                </div>
              </Row>
            ))}
          </Rows>
        </div>
      </section>

      <section>
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="text-lg tracking-tight text-cream">Active engagements</h2>
          <Link to="/portal/client/engagements" className="text-sm text-accent underline underline-offset-4">
            All engagements
          </Link>
        </div>
        <div className="mt-5">
          <Rows>
            {activeEngagements.map((e) => (
              <Row key={e.id}>
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                  <div className="min-w-0">
                    <h3 className="text-base text-cream">{e.operator.name}</h3>
                    <p className="mt-1 text-sm text-stone">
                      {e.operator.headline} · {companyName(e.companyId)}
                    </p>
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-stone-soft">
                      {e.offerType} · {fmtDate(e.start)} – {fmtDate(e.end)}
                    </p>
                  </div>
                  <Status label="Active" tone="accent" />
                </div>
              </Row>
            ))}
          </Rows>
        </div>
      </section>
    </div>
  );
}