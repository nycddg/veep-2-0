import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  DemoNote,
  Eyebrow,
  GhostButton,
  PageHeader,
  PrimaryButton,
  Row,
  Rows,
  Status,
} from "@/components/portal/ui";
import { fmtDate } from "@/lib/portal/dates";
import { companyName, usePortal } from "@/lib/portal/mock-store";
import type { Proposal } from "@/lib/portal/types";

export const Route = createFileRoute("/_authenticated/portal/client/proposals")({
  head: () => ({
    meta: [
      { title: "Proposals — Veep Client Portal" },
      { name: "description", content: "Review, accept, or decline Veep proposals." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Proposals — Veep Client Portal" },
      { property: "og:description", content: "Review, accept, or decline Veep proposals." },
    ],
  }),
  component: Proposals,
});

function tone(status: Proposal["status"]) {
  if (status === "Accepted") return "accent" as const;
  if (status === "Expired" || status === "Declined") return "warn" as const;
  return "quiet" as const;
}

function Proposals() {
  const { proposals, setProposalStatus, companyId } = usePortal();
  const visible = companyId === "all" ? proposals : proposals.filter((p) => p.companyId === companyId);
  const [openId, setOpenId] = useState<string | null>(visible[0]?.id ?? null);

  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="Client portal"
        title="Proposals"
        intro="What Veep is proposing, what it costs, and what happens once you accept."
      />

      <Rows>
        {visible.map((p) => {
          const isOpen = openId === p.id;
          const open = p.status === "Sent" || p.status === "Under review";
          return (
            <div key={p.id}>
              <Row onClick={() => setOpenId(isOpen ? null : p.id)}>
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                  <div className="min-w-0">
                    <h2 className="text-base text-cream">{p.name}</h2>
                    <p className="mt-1 text-sm text-stone">{companyName(p.companyId)}</p>
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-stone-soft">
                      Sent {fmtDate(p.sentOn)}
                    </p>
                  </div>
                  <Status label={p.status} tone={tone(p.status)} />
                </div>
              </Row>
              {isOpen && (
                <div className="max-w-2xl space-y-6 px-1 pb-6">
                  <dl className="grid gap-5 sm:grid-cols-2">
                    {p.commercial.map((c) => (
                      <div key={c.label}>
                        <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-stone-soft">
                          {c.label}
                        </dt>
                        <dd className="mt-1.5 text-base text-cream">{c.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <div>
                    <Eyebrow>What's included</Eyebrow>
                    <ul className="mt-2 space-y-1.5 text-base text-stone">
                      {p.inclusions.map((i) => (
                        <li key={i} className="flex gap-2.5">
                          <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {open && (
                    <div className="flex flex-wrap gap-3">
                      <PrimaryButton onClick={() => setProposalStatus(p.id, "Accepted")}>
                        Accept proposal
                      </PrimaryButton>
                      <GhostButton onClick={() => setProposalStatus(p.id, "Declined")}>
                        Decline
                      </GhostButton>
                    </div>
                  )}
                  {p.status === "Accepted" && (
                    <div>
                      <Eyebrow>What happens next</Eyebrow>
                      <ol className="mt-2 space-y-1.5 text-base text-stone">
                        <li>1. Veep countersigns the SOW and sends it to Documents.</li>
                        <li>2. Your operator is confirmed and introduced within 5 business days.</li>
                        <li>3. Kickoff is scheduled with your client success contact.</li>
                      </ol>
                    </div>
                  )}
                  {p.status === "Declined" && (
                    <p className="text-base text-stone">Declined. Veep will follow up on alternatives.</p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </Rows>

      <DemoNote />
    </div>
  );
}