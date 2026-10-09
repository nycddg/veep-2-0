import { useCallback } from "react";
import { useWorkPhysics } from "../physics/useWorkPhysics";
import "../physics/work-physics.css";
import "./home-motion.css";

/** Physical bodies share collision rules with the ownership diagram. */
export function HomeWorkLoop({ compact = false }: { compact?: boolean }) {
  const centerX = compact ? 130 : 230;
  const boxX = compact ? 292 : 552;
  const measure = useCallback(
    () => ({
      desk: { center: { x: centerX, y: 120 }, radius: 76 },
      box: { x: boxX, y: 77, width: 86, height: 86 },
      deskObstacles: [],
      boxObstacles: [],
      end: { x: boxX + 43, y: 120 },
      radius: 10,
      vertical: false,
      count: 7,
      completeInBox: true,
    }),
    [centerX, boxX],
  );
  const ref = useWorkPhysics(measure, "hero");
  return (
    <g ref={ref} className="wp-hero">
      <path
        d={`M0 120H${compact ? 420 : 740}M${centerX + 28} 16V96M${centerX + 42} 140V224`}
        className="hw-guide"
      />
      <circle cx={centerX} cy={120} r={76} className="wp-boundary wp-client" />
      <rect x={boxX} y={77} width={86} height={86} className="wp-boundary wp-scope" />
      {Array.from({ length: 7 }, (_, i) => (
        <circle key={i} data-body={i} className="wp-ball" r={10} opacity={0} />
      ))}
    </g>
  );
}
