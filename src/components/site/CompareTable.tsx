/**
 * CompareTable — 6 dimensions × 4 approaches, adapted from the live veep.work
 * "How we stack up" grid. Veep column highlighted. Renders inside the one
 * light section on the site (bg-cream, text-ink).
 */

type Row = {
  dim: string;
  veep: string;
  exec: string;
  consulting: string;
  freelance: string;
};

const rows: Row[] = [
  { dim: "Speed",       veep: "Instant",    exec: "Slow",      consulting: "Delayed",   freelance: "Fast" },
  { dim: "Cost",        veep: "Affordable", exec: "Expensive", consulting: "Expensive", freelance: "Variable" },
  { dim: "Flexibility", veep: "Scalable",   exec: "Fixed",     consulting: "Rigid",     freelance: "High" },
  { dim: "Quality",     veep: "Vetted",     exec: "Variable",  consulting: "Uncertain", freelance: "Unreliable" },
  { dim: "Engagement",  veep: "Adaptive",   exec: "Permanent", consulting: "Limited",   freelance: "Temporary" },
  { dim: "Risk",        veep: "Low",        exec: "High",      consulting: "Costly",    freelance: "Inconsistent" },
];

export function CompareTable() {
  return (
    <div>
      <div className="max-w-2xl">
        <div className="font-mono text-[11px] tracking-widest uppercase text-ink/50">
          / How we stack up
        </div>
        <h2 className="mt-6 text-4xl md:text-5xl leading-[1.05] text-ink tracking-tight">
          Better. Faster. Cheaper. Really.
        </h2>
        <p className="mt-6 text-ink/70 max-w-xl">
          Executive hiring, consulting, and freelancers each solve one slice.
          Veep sits in the middle — vetted senior operators who embed, execute,
          and stay flexible.
        </p>
      </div>

      <div className="mt-14 overflow-x-auto">
        <table className="w-full min-w-[720px] border-t border-ink/10 text-left">
          <thead>
            <tr>
              <th className="p-4 md:p-5 border-b border-ink/10 w-1/5"></th>
              <th className="p-4 md:p-5 font-mono text-[11px] tracking-widest uppercase text-ink border-b border-ink/10 bg-ink/[0.04] w-1/5">
                / Veep
              </th>
              <th className="p-4 md:p-5 font-mono text-[11px] tracking-widest uppercase text-ink/50 border-b border-ink/10 w-1/5">
                Exec. Hiring
              </th>
              <th className="p-4 md:p-5 font-mono text-[11px] tracking-widest uppercase text-ink/50 border-b border-ink/10 w-1/5">
                Consulting Firm
              </th>
              <th className="p-4 md:p-5 font-mono text-[11px] tracking-widest uppercase text-ink/50 border-b border-ink/10 w-1/5">
                Freelancers
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.dim}>
                <td className="p-4 md:p-5 font-mono text-[11px] tracking-widest uppercase text-ink/50 border-b border-ink/10 align-middle">
                  {r.dim}
                </td>
                <td className="p-4 md:p-5 text-ink text-lg tracking-tight border-b border-ink/10 bg-ink/[0.04]">
                  {r.veep}
                </td>
                <td className="p-4 md:p-5 text-ink/70 text-lg tracking-tight border-b border-ink/10">
                  {r.exec}
                </td>
                <td className="p-4 md:p-5 text-ink/70 text-lg tracking-tight border-b border-ink/10">
                  {r.consulting}
                </td>
                <td className="p-4 md:p-5 text-ink/70 text-lg tracking-tight border-b border-ink/10">
                  {r.freelance}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-xs font-mono uppercase tracking-widest text-ink/50">
        / Save 40–80% vs. direct hiring, executive search, and consulting firms.
      </p>
    </div>
  );
}
