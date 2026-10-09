import type { CSSProperties } from "react";
import "./home-motion.css";

const incomingWork = [
  { x: -26, y: -24, fromX: -108, fromY: 0 },
  { x: 28, y: -24, fromX: 0, fromY: -80 },
  { x: -44, y: 14, fromX: -100, fromY: 0 },
  { x: -6, y: -51, fromX: 0, fromY: -55 },
  { x: 42, y: 20, fromX: 0, fromY: 84 },
  { x: -2, y: 45, fromX: 0, fromY: 60 },
];

/** Equal work circles accumulate; the coral one leaves in its own defined scope. */
export function HomeWorkLoop({ compact = false }: { compact?: boolean }) {
  const centerX = compact ? 130 : 230;
  const extraction = compact ? 120 : 195;
  const travel = compact ? 85 : 165;
  return (
    <g
      className="hw-system"
      style={
        {
          "--hw-start-x": `${-extraction - (compact ? 105 : 150)}px`,
          "--hw-center-x": `${-extraction}px`,
          "--hw-arrive-x": `${-extraction + 5}px`,
          "--hw-anticipate-x": `${-extraction - 4}px`,
          "--hw-travel": `${travel}px`,
          "--hw-overshoot": `${travel + 8}px`,
          "--hw-exit": `${travel + 24}px`,
        } as CSSProperties
      }
    >
      <path
        d={`M${compact ? 18 : 50} 120H${compact ? 402 : 690}M${centerX + 28} 16V96M${centerX + 42} 140V224`}
        className="hw-guide"
      />
      <g transform={`translate(${centerX} 120)`}>
        <circle r={48} className="hw-center hw-animated" />
        {incomingWork.map(({ x, y, fromX, fromY }, i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={10}
            className="hw-work hw-filler hw-animated"
            style={
              {
                "--hw-motion": `hw-fill-${i}`,
                "--hw-from-x": `${fromX * (compact ? 0.7 : 1)}px`,
                "--hw-from-y": `${fromY}px`,
                "--hw-land-x": `${-Math.sign(fromX) * 5}px`,
                "--hw-land-y": `${-Math.sign(fromY) * 5}px`,
              } as CSSProperties
            }
          />
        ))}
      </g>
      <g transform={`translate(${centerX + extraction} 120)`}>
        <g className="hw-carrier hw-animated">
          <rect
            x={-43}
            y={-43}
            width={86}
            height={86}
            pathLength="1"
            className="hw-scope hw-animated"
          />
          <circle r={10} className="hw-selected hw-animated" />
        </g>
      </g>
    </g>
  );
}
