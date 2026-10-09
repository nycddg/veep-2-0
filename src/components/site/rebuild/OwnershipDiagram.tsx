import { useSectionMotion } from "../system/useSectionMotion";

const alternatives = ["Team at capacity", "Hire in progress", "Advice in hand"];

/** The alternatives return work to the executive; a named delivery responsibility opens a path out. */
export function OwnershipDiagram() {
  const sequence = useSectionMotion();
  return (
    <div ref={sequence.ref} className="vh-ownership v-sequence" data-motion={sequence.state}>
      <div className="vh-alternatives">
        {alternatives.map((title) => (
          <div key={title}>
            <h3>{title}</h3>
          </div>
        ))}
      </div>
      <svg
        className="vh-return-lines"
        viewBox="0 0 900 64"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M150 0V64 M450 0V28H150 M750 0V28H150" />
        <circle className="vh-return-work vh-return-work--one" r="0.1" />
        <circle className="vh-return-work vh-return-work--two" r="0.1" />
        <circle className="vh-return-work vh-return-work--three" r="0.1" />
      </svg>
      <div className="vh-ownership-flow">
        <div className="vh-owned-path" aria-hidden="true">
          <span />
        </div>
        <div className="vh-executive">
          <div className="vh-executive-center">
            <h3>Your desk</h3>
            <span className="vh-remaining-work" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </div>
          <p>Decisions and coordination still depend on you.</p>
        </div>
        <div className="vh-mandate">
          <div className="vh-mandate-scope">
            <h3>
              A Veep
              <br />
              operating partner
            </h3>
          </div>
          <p>Owns strategy, execution, and team coordination.</p>
        </div>
        <div className="vh-delivery">
          <div className="vh-delivery-end">
            <h3>
              The work
              <br />
              gets done.
            </h3>
          </div>
          <p>Get the job done and hand off cleanly.</p>
        </div>
      </div>
    </div>
  );
}
