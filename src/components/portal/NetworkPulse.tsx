import { fmtShort } from "@/lib/portal/dates";
import { networkLeads, networkWins } from "@/lib/portal/mock-store";
import { DemoNote, Eyebrow, Rows, Row, SectionTitle } from "./ui";

/**
 * Anonymized view of what the network is working on. No company names, no
 * client-identifying detail — industry and situation only.
 */
export function NetworkPulse({ leadLimit = 5, winLimit = 4 }: { leadLimit?: number; winLimit?: number }) {
  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-14">
      <section>
        <SectionTitle aside={<Eyebrow>{networkLeads.length} open</Eyebrow>}>Live leads</SectionTitle>
        <p className="mt-2 max-w-prose text-base text-stone">
          Anonymized roles Veep is scoping and matching right now.
        </p>
        <div className="mt-5">
          <Rows>
            {networkLeads.slice(0, leadLimit).map((l) => (
              <Row key={l.id}>
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                  <div className="min-w-0">
                    <h3 className="text-base text-cream">{l.role}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-stone">{l.blurb}</p>
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-stone-soft">
                      {l.industry} · {l.engagement} · {l.term}
                    </p>
                  </div>
                  <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.1em] text-accent">
                    {l.stage}
                  </span>
                </div>
              </Row>
            ))}
          </Rows>
        </div>
        <div className="mt-4">
          <DemoNote />
        </div>
      </section>

      <section>
        <SectionTitle>Recent wins</SectionTitle>
        <p className="mt-2 max-w-prose text-base text-stone">
          Roles the network closed and what changed.
        </p>
        <div className="mt-5">
          <Rows>
            {networkWins.slice(0, winLimit).map((w) => (
              <Row key={w.id}>
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                  <div className="min-w-0">
                    <h3 className="text-base text-cream">{w.role}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-stone">{w.blurb}</p>
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-stone-soft">
                      {w.industry} · {w.engagement} · {w.length}
                    </p>
                  </div>
                  <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.1em] text-stone-soft">
                    {fmtShort(w.closedOn)}
                  </span>
                </div>
              </Row>
            ))}
          </Rows>
        </div>
        <div className="mt-4">
          <DemoNote />
        </div>
      </section>
    </div>
  );
}