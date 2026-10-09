import type { CSSProperties } from "react";
import "./home-motion.css";

const incomingWork = [
  { x: 184, y: 154, fromX: -108, fromY: 0 },
  { x: 238, y: 154, fromX: 106, fromY: 0 },
  { x: 166, y: 187, fromX: -100, fromY: 0 },
  { x: 204, y: 125, fromX: 0, fromY: -77 },
  { x: 252, y: 196, fromX: 92, fromY: 0 },
  { x: 244, y: 220, fromX: 100, fromY: 0 },
];

/** Work accumulates and expands the center; the coral square is selected and advanced. */
export function HomeWorkLoop() {
  return (
    <g className="hw-system">
      <path d="M76 154H184M252 196H344M210 58V492" className="hw-guide" />
      <g transform="translate(210 176)">
        <circle r={48} className="hw-center hw-animated" />
      </g>
      {incomingWork.map(({ x, y, fromX, fromY }, i) => (
        <rect
          key={i}
          x={x - 10}
          y={y - 10}
          width={20}
          height={20}
          className="hw-work hw-filler hw-animated"
          style={
            {
              "--hw-motion": `hw-fill-${i}`,
              "--hw-from-x": `${fromX}px`,
              "--hw-from-y": `${fromY}px`,
              "--hw-land-x": `${-Math.sign(fromX) * 5}px`,
              "--hw-land-y": `${-Math.sign(fromY) * 5}px`,
              "--hw-tilt": `${i % 2 === 0 ? 6 : -6}deg`,
            } as CSSProperties
          }
        />
      ))}
      <g transform="translate(210 315)">
        <g className="hw-carrier hw-animated">
          <rect
            x={-43}
            y={-43}
            width={86}
            height={86}
            pathLength="1"
            className="hw-scope hw-animated"
          />
          <rect x={-10} y={-10} width={20} height={20} className="hw-selected hw-animated" />
        </g>
      </g>
    </g>
  );
}
