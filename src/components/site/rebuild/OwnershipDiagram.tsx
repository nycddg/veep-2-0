import { useSectionMotion } from "../system/useSectionMotion";

const steps = [
  ["Scope", "A clear scope, outcome, and responsibilities."],
  ["Assemble", "A lead operating partner and the support the work needs."],
  ["Own", "A lead operating partner runs execution. Veep stays accountable."],
  ["Deliver", "Complete the agreed work and hand off, or agree the next scope."],
];

/** One mandate progresses through four responsibilities. Every step is visible without motion. */
export function OwnershipDiagram() {
  const sequence = useSectionMotion();
  return (
    <div ref={sequence.ref} className="vh-ownership v-sequence" data-motion={sequence.state}>
      <div className="vh-mandate-path" aria-hidden="true">
        <span className="vh-mandate-progress" />
        <span className="vh-mandate-cursor" />
      </div>
      <ol className="vh-ownership-steps">
        {steps.map(([title, description], index) => (
          <li key={title}>
            <span className="vh-step-number">0{index + 1}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
