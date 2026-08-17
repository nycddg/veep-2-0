/**
 * ProblemDiagram — the problem definition as a diagram (Dave 08.17).
 * Replaces the four prose blocks in the home Problem section. All copy is
 * carried over from the prose it replaces; no new claims.
 *
 * Shape: critical work with no owner routes through the three places it
 * could go (team, permanent hire, more advice) and every path converges on
 * the CEO's desk. Hairline connectors on the --rule token, surface-card
 * boxes at 20px radius — system grammar, no new motif.
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
    label: "More advice",
    d: "Another deck, another stack of profiles. No one steps in.",
  },
];

function Stem({ className = "" }: { className?: string }) {
  return <div className={`mx-auto h-6 w-px bg-[color:var(--rule)] ${className}`} />;
}

export function ProblemDiagram() {
  return (
    <div className="motion-stagger max-w-4xl mx-auto">
      {/* The work — no clear owner */}
      <div className="rounded-[20px] border border-white/10 bg-surface-card p-6 sm:p-7 text-center">
        <div className="mono-label">Critical work · No clear owner</div>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {work.map((w) => (
            <span
              key={w}
              className="rounded-full border border-white/10 px-3.5 py-1.5 text-sm text-cream"
            >
              {w}
            </span>
          ))}
        </div>
      </div>

      {/* Branch out — desktop draws the split, mobile keeps a single stem */}
      <div className="hidden md:block">
        <Stem />
        <div className="mx-auto w-2/3 h-px bg-[color:var(--rule)]" />
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
            className="rounded-[20px] border border-white/10 bg-surface-card p-6 text-center"
          >
            <div className="mono-label">{r.label}</div>
            <p className="mt-3 text-sm text-stone leading-relaxed text-balance">{r.d}</p>
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
        <div className="mx-auto w-2/3 h-px bg-[color:var(--rule)]" />
        <Stem />
      </div>
      <Stem className="md:hidden" />

      {/* Where it actually lands */}
      <div className="rounded-[20px] border border-white/10 bg-surface-card p-6 sm:p-8 text-center">
        <div className="mono-label flex items-center justify-center gap-2.5">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          The CEO&rsquo;s desk
        </div>
        <p className="mt-3 font-serif font-medium text-lg md:text-xl text-cream tracking-tight leading-snug">
          Everything keeps landing on you.
        </p>
      </div>
    </div>
  );
}
