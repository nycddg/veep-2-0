import wordmarkWhite from "@/assets/veep-wordmark-white.png.asset.json";
import wordmarkNavy from "@/assets/veep-wordmark-navy.png.asset.json";
import { useSectionMotion } from "../system/useSectionMotion";

const workItems = ["one", "two", "three", "four", "five", "six"];

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
        viewBox="0 0 900 103"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M150 0V103 M450 0V28H150 M750 0V28H150" />
        {workItems.map((item) => (
          <circle key={item} className={`vh-return-work vh-work--${item}`} r="0.1" />
        ))}
      </svg>
      <div className="vh-ownership-flow">
        <div className="vh-owned-path" aria-hidden="true">
          <span />
        </div>
        <div className="vh-executive">
          <div className="vh-executive-center">
            <h3>You</h3>
            <span className="vh-remaining-work" aria-hidden="true">
              {workItems.map((item) => (
                <i key={item} className={`vh-arrived-work vh-work--${item}`} />
              ))}
            </span>
          </div>
          <p>Every decision and follow-up still comes back to you.</p>
        </div>
        <div className="vh-mandate">
          <div className="vh-mandate-scope">
            <h3 className="vh-mandate-logo" aria-label="Veep operating partners">
              <img src={wordmarkWhite.url} alt="" className="light:hidden" />
              <img src={wordmarkNavy.url} alt="" className="hidden light:block" />
            </h3>
          </div>
          <p>A senior operator owns the plan, the team, and the follow-through.</p>
        </div>
        <div className="vh-delivery">
          <div className="vh-delivery-end">
            <h3>
              The work
              <br />
              gets done.
            </h3>
          </div>
          <p>The agreed work, completed and ready for handoff.</p>
        </div>
      </div>
    </div>
  );
}
