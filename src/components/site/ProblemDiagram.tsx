/**
 * ProblemDiagram — the problem definition as a diagram (Dave 08.17).
 * Replaces the four prose blocks in the home Problem section. All copy is
 * carried over from the prose it replaces; no new claims.
 *
 * Shape: critical work with no owner routes through the three places it
 * could go (team, permanent hire, consultants) and every path converges on
 * the CEO's desk. Hairline connectors on the --rule token, surface-card
 * boxes at 15px radius — system grammar, no new motif.
 */

const work = ["Fundraise", "GTM reset", "Operating issue", "Margin problem"];

const routes = [
  {
    label: "The team",
    d: "Busy. The priority is still stuck.",
  },
  {
    label: "A permanent hire",
    d: "A search takes months. The business needs to move now.",
  },
  {
    label: "Consultants",
    d: "Another deck and more decisions for you. No one steps in.",
  },
];

function Stem({ className = "" }: { className?: string }) {
  return (
    <div
      className={`problem-diagram-line mx-auto h-6 w-px bg-[color:var(--rule)] ${className}`}
    />
  );
}

function DeskDot({ delay = false }: { delay?: boolean }) {
  return (
    <span className="relative inline-flex h-[7.2px] w-[7.2px] shrink-0">
      <span
        aria-hidden
        className={`problem-diagram-pulse absolute inset-0 rounded-full bg-accent-coral/50 ${
          delay ? "problem-diagram-pulse-delay" : ""
        }`}
      />
      <span className="relative inline-block h-full w-full rounded-full bg-accent-coral" />
    </span>
  );
}

export function ProblemDiagram() {
  return (
    <div className="problem-diagram max-w-4xl mx-auto">
      {/* The work — no clear owner */}
      <div className="problem-diagram-box motion-row-wash rounded-[6px] bg-surface-card p-6 sm:p-7 text-center">
        <div className="problem-diagram-copy">
          <div className="mono-label">Critical work · No clear owner</div>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {work.map((w) => (
              <span
                key={w}
                className="rounded-[6px] border border-white/10 bg-background px-3.5 py-1.5 text-sm text-cream"
              >
                {w}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Branch out — desktop draws the split, mobile keeps a single stem */}
      <div className="hidden md:block">
        <Stem />
        <div className="problem-diagram-line mx-auto w-2/3 h-px bg-[color:var(--rule)]" />
        <div className="grid grid-cols-3">
          <Stem />
          <Stem />
          <Stem />
        </div>
      </div>
      <Stem className="md:hidden" />

      {/* Where it could go */}
      <div className="grid md:grid-cols-3 gap-3 md:gap-5">
        {routes.map((r) => (
          <div
            key={r.label}
            className="problem-diagram-box motion-row-wash rounded-[6px] bg-surface-card p-6 text-center"
          >
            <div className="problem-diagram-copy">
              <div className="mono-label">{r.label}</div>
              <p className="mt-3 text-sm text-stone leading-relaxed text-balance">{r.d}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Converge — mirror of the branch */}
      <div className="hidden md:block">
        <div className="grid grid-cols-3">
          <Stem />
          <Stem />
          <Stem />
        </div>
        <div className="problem-diagram-line mx-auto w-2/3 h-px bg-[color:var(--rule)]" />
        <Stem />
      </div>
      <Stem className="md:hidden" />

      {/* Where it actually lands */}
      <div className="problem-diagram-box motion-row-wash rounded-[6px] bg-surface-card p-6 sm:p-8 text-center">
        <div className="problem-diagram-copy">
          <div className="flex justify-center">
            <div className="mono-label inline-flex items-center gap-2.5">
              <DeskDot />
              The CEO&rsquo;s desk
              <DeskDot delay />
            </div>
          </div>
          <p className="mt-3 font-serif font-medium text-lg md:text-xl text-cream tracking-tight leading-snug">
            Everything keeps landing on you.
          </p>
        </div>
      </div>
    </div>
  );
}
