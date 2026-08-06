import { createFileRoute } from "@tanstack/react-router";
import { DemoNote, PageHeader, Row, Rows, Status } from "@/components/portal/ui";
import { fmtDate } from "@/lib/portal/dates";
import { companyName, usePortal } from "@/lib/portal/mock-store";

export const Route = createFileRoute("/_authenticated/portal/client/documents")({
  head: () => ({
    meta: [
      { title: "Documents — Veep Client Portal" },
      { name: "description", content: "Your MSAs, SOWs, NDAs, and proposals in one place." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Documents — Veep Client Portal" },
      { property: "og:description", content: "Your MSAs, SOWs, NDAs, and proposals in one place." },
    ],
  }),
  component: Documents,
});

function Documents() {
  const { documents, companyId } = usePortal();
  const visible = companyId === "all" ? documents : documents.filter((d) => d.companyId === companyId);

  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="Client portal"
        title="Documents"
        intro="Everything you've signed with Veep, plus anything waiting on a signature."
      />

      <Rows>
        {visible.map((d) => (
          <Row key={d.id}>
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
              <div className="min-w-0">
                <h2 className="text-base text-cream">{d.name}</h2>
                <p className="mt-1 text-sm text-stone">{companyName(d.companyId)}</p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-stone-soft">
                  {d.kind} · {fmtDate(d.dated)}
                </p>
              </div>
              <Status label={d.status} tone={d.status === "Pending signature" ? "warn" : "quiet"} />
            </div>
          </Row>
        ))}
      </Rows>

      <DemoNote />
    </div>
  );
}