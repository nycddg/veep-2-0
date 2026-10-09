import wordmarkWhite from "@/assets/veep-wordmark-white.png.asset.json";
import wordmarkNavy from "@/assets/veep-wordmark-navy.png.asset.json";
import { useSectionMotion } from "../system/useSectionMotion";

import { useWorkPhysics } from "../physics/useWorkPhysics";
import "../physics/work-physics.css";

function measureOwnership(node: SVGSVGElement | SVGGElement) {
  const host = node.closest(".vh-ownership")!;
  const root = host.getBoundingClientRect();
  const rect = (selector: string) => {
    const r = host.querySelector(selector)!.getBoundingClientRect();
    return { x: r.left - root.left, y: r.top - root.top, width: r.width, height: r.height };
  };
  const desk = rect(".vh-executive-center"),
    box = rect(".vh-mandate-scope");
  const end = rect(".vh-delivery-end");
  const vertical = box.y > desk.y + desk.height;
  return {
    desk: {
      center: { x: desk.x + desk.width / 2, y: desk.y + desk.height / 2 },
      radius: desk.width / 2 - 2,
    },
    box: { x: box.x + 2, y: box.y + 2, width: box.width - 4, height: box.height - 4 },
    deskObstacles: [rect(".vh-executive-center h3")],
    boxObstacles: [rect(".vh-mandate-logo")],
    end: { x: end.x + end.width / 2, y: end.y + end.height / 2 },
    radius: vertical ? 4 : 5,
    vertical,
    count: 6,
  };
}

const alternatives = ["Team at capacity", "Hire in progress", "Advice in hand"];

/** The alternatives return work to the executive; a named delivery responsibility opens a path out. */
export function OwnershipDiagram() {
  const sequence = useSectionMotion();
  const physics = useWorkPhysics(measureOwnership, "ownership");
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
      </svg>
      <div className="vh-ownership-flow">
        <div className="vh-owned-path" aria-hidden="true" />
        <div className="vh-executive">
          <div className="vh-executive-center">
            <h3>You</h3>
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
            <span className="sr-only">The work gets done.</span>
          </div>
          <p>The agreed work, completed and ready for handoff.</p>
        </div>
      </div>
      <svg ref={physics} className="wp-overlay" aria-hidden="true">
        {Array.from({ length: 6 }, (_, i) => (
          <circle key={i} data-body={i} className="wp-ball" r={5} opacity={0} />
        ))}
        <path data-check className="wp-check" d="M10 25l9 9 19-21" pathLength="1" opacity={0} />
      </svg>
    </div>
  );
}
