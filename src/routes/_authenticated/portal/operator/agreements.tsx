import { createFileRoute } from "@tanstack/react-router";
import { DemoNote, PageHeader, PrimaryButton, Row, Rows, Status } from "@/components/portal/ui";
import { fmtDate } from "@/lib/portal/dates";
import { usePortal } from "@/lib/portal/mock-store";

export const Route = createFileRoute("/_authenticated/portal/operator/agreements")({
  head: () => ({
    meta: [
      { title: "Agreements — Veep Operator Portal" },
      { name: "description", content: "Your Veep network agreement and engagement SOWs." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Agreements — Veep Operator Portal" },
      { property: "og:description", content: "Your Veep network agreement and engagement SOWs." },
    ],
  }),
  component: Agreements,
});

function Agreements() {
  const { agreements, signAgreement } = usePortal();

  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="Operator portal"
        title="Agreements"
        intro="Your network agreement and the SOW for each engagement. Signing here is a demo action."
      />

      <Rows>
        {agreements.map((a) => (
          <Row key={a.id}>
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
              <div className="min-w-0">
                <h2 className="text-base text-cream">{a.name}</h2>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-stone-soft">
                  {a.kind} · {fmtDate(a.dated)}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <Status
                  label={a.status}
                  tone={a.status === "Pending signature" ? "warn" : "quiet"}
                />
                {a.status === "Pending signature" && (
                  <PrimaryButton onClick={() => signAgreement(a.id)}>Sign</PrimaryButton>
                )}
              </div>
            </div>
          </Row>
        ))}
      </Rows>

      <DemoNote />
    </div>
  );
}