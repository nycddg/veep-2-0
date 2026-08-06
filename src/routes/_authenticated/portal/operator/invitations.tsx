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
import { usePortal } from "@/lib/portal/mock-store";
import type { InvitationStatus } from "@/lib/portal/types";

export const Route = createFileRoute("/_authenticated/portal/operator/invitations")({
  head: () => ({
    meta: [
      { title: "Invitations — Veep Operator Portal" },
      { name: "description", content: "Roles Veep has invited you to consider." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Invitations — Veep Operator Portal" },
      { property: "og:description", content: "Roles Veep has invited you to consider." },
    ],
  }),
  component: Invitations,
});

function toneFor(status: InvitationStatus) {
  if (status === "New" || status === "Selected") return "accent" as const;
  if (status === "Expired" || status === "Not selected") return "warn" as const;
  return "quiet" as const;
}

function Invitations() {
  const { invitations, respondToInvitation } = usePortal();
  const [openId, setOpenId] = useState<string | null>(invitations[0]?.id ?? null);

  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="Operator portal"
        title="Invitations"
        intro="Roles Veep has matched to you. Say interested or pass — either answer helps us match faster."
      />

      <Rows>
        {invitations.map((inv) => {
          const isOpen = openId === inv.id;
          const decided = inv.status !== "New";
          return (
            <div key={inv.id}>
              <Row onClick={() => setOpenId(isOpen ? null : inv.id)}>
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                  <div className="min-w-0">
                    <h2 className="text-base text-cream">{inv.title}</h2>
                    <p className="mt-1 text-sm text-stone">
                      {inv.company} · {inv.commitment} · {inv.location}
                    </p>
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-stone-soft">
                      {inv.offerType} · respond by {fmtDate(inv.respondBy)}
                    </p>
                  </div>
                  <Status label={inv.status} tone={toneFor(inv.status)} />
                </div>
              </Row>
              {isOpen && (
                <div className="px-1 pb-6">
                  <div className="max-w-2xl space-y-5">
                    <div>
                      <Eyebrow>The brief</Eyebrow>
                      <p className="mt-1.5 text-base leading-relaxed text-stone">{inv.brief}</p>
                    </div>
                    <div>
                      <Eyebrow>What success looks like</Eyebrow>
                      <ul className="mt-1.5 space-y-1.5 text-base text-stone">
                        {inv.success.map((s) => (
                          <li key={s} className="flex gap-2.5">
                            <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {!decided && (
                      <div className="flex flex-wrap gap-3 pt-1">
                        <PrimaryButton onClick={() => respondToInvitation(inv.id, "Interested")}>
                          I'm interested
                        </PrimaryButton>
                        <GhostButton onClick={() => respondToInvitation(inv.id, "Declined")}>
                          Pass on this one
                        </GhostButton>
                      </div>
                    )}
                    {inv.status === "Interested" && (
                      <p className="text-base text-accent">
                        Noted. Veep will come back to you with next steps.
                      </p>
                    )}
                    {inv.status === "Declined" && (
                      <p className="text-base text-stone">You passed on this role.</p>
                    )}
                  </div>
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