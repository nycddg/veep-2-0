import { createFileRoute, Link } from "@tanstack/react-router";
import { NetworkPulse } from "@/components/portal/NetworkPulse";
import { DemoNote, Eyebrow, PageHeader, Row, Rows, Status } from "@/components/portal/ui";
import { fmtDate } from "@/lib/portal/dates";
import { usePortal } from "@/lib/portal/mock-store";

export const Route = createFileRoute("/_authenticated/portal/operator/")({
  head: () => ({
    meta: [
      { title: "Operator Home — Veep Portal" },
      { name: "description", content: "Your invitations, assignments, and network pulse." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Operator Home — Veep Portal" },
      { property: "og:description", content: "Your invitations, assignments, and network pulse." },
    ],
  }),
  component: OperatorHome,
});

function OperatorHome() {
  const { invitations, assignments, availability, agreements, profile } = usePortal();
  const open = invitations.filter((i) => i.status === "New");
  const active = assignments.filter((a) => a.state === "Active");
  const unsigned = agreements.filter((a) => a.status === "Pending signature");

  return (
    <div className="space-y-14">
      <PageHeader
        eyebrow="Operator portal"
        title={`Good to see you, ${profile.name.split(" ")[0]}.`}
        intro="What needs you today, what you're running, and what the network is working on."
      />

      <section>
        <h2 className="text-lg tracking-tight text-cream">Needs you</h2>
        <div className="mt-5">
          <Rows>
            {open.length === 0 && unsigned.length === 0 && (
              <Row>
                <p className="text-base text-stone">Nothing waiting on you right now.</p>
              </Row>
            )}
            {open.map((i) => (
              <Row key={i.id}>
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                  <div className="min-w-0">
                    <Eyebrow>Invitation · respond by {fmtDate(i.respondBy)}</Eyebrow>
                    <h3 className="mt-1.5 text-base text-cream">{i.title}</h3>
                    <p className="mt-1 text-sm text-stone">
                      {i.company} · {i.commitment}
                    </p>
                  </div>
                  <Link
                    to="/portal/operator/invitations"
                    className="shrink-0 text-sm text-accent underline underline-offset-4"
                  >
                    Review
                  </Link>
                </div>
              </Row>
            ))}
            {unsigned.map((a) => (
              <Row key={a.id}>
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                  <div className="min-w-0">
                    <Eyebrow>Agreement</Eyebrow>
                    <h3 className="mt-1.5 text-base text-cream">{a.name}</h3>
                    <p className="mt-1 text-sm text-stone">Waiting on your signature.</p>
                  </div>
                  <Link
                    to="/portal/operator/agreements"
                    className="shrink-0 text-sm text-accent underline underline-offset-4"
                  >
                    Sign
                  </Link>
                </div>
              </Row>
            ))}
          </Rows>
        </div>
      </section>

      <section>
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="text-lg tracking-tight text-cream">Your assignments</h2>
          <Link to="/portal/operator/assignments" className="text-sm text-accent underline underline-offset-4">
            All assignments
          </Link>
        </div>
        <div className="mt-5">
          <Rows>
            {active.map((a) => (
              <Row key={a.id}>
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                  <div className="min-w-0">
                    <h3 className="text-base text-cream">{a.job}</h3>
                    <p className="mt-1 text-sm text-stone">{a.company}</p>
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-stone-soft">
                      {a.offerType} · {fmtDate(a.start)} – {fmtDate(a.end)}
                    </p>
                  </div>
                  <Status label={a.state} tone="accent" />
                </div>
              </Row>
            ))}
          </Rows>
        </div>
      </section>

      <section>
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="text-lg tracking-tight text-cream">Your availability</h2>
          <Link to="/portal/operator/availability" className="text-sm text-accent underline underline-offset-4">
            Update
          </Link>
        </div>
        <p className="mt-3 text-base text-stone">
          <span className="text-cream">{availability.status}</span> · {availability.daysPerWeek} days per week ·
          earliest start {fmtDate(availability.earliestStart)}
        </p>
        <p className="mt-2 text-sm text-stone-soft">Last updated {fmtDate(availability.updatedAt)}.</p>
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="text-lg tracking-tight text-cream">Network pulse</h2>
          <p className="mt-2 max-w-prose text-base text-stone">
            Anonymized. Industry and situation only — never a client name.
          </p>
        </div>
        <NetworkPulse />
        <DemoNote>Placeholder content — live sources connect in a later release</DemoNote>
      </section>
    </div>
  );
}