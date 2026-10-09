import type { CSSProperties } from "react";

const travel = (x = 0, y = 0): CSSProperties =>
  ({ "--vd-from-x": `${x}px`, "--vd-from-y": `${y}px` }) as CSSProperties;

/** A filled square always represents the work, never a person or company. */
export function Work({
  x,
  y,
  size = 26,
  fromX = 0,
  fromY = 0,
  bendX,
}: {
  x: number;
  y: number;
  bendX?: number;
  size?: number;
  fromX?: number;
  fromY?: number;
}) {
  return (
    <rect
      x={x - size / 2}
      y={y - size / 2}
      width={size}
      height={size}
      className={`vd-work vd-moving ${bendX !== undefined ? "vd-reroute" : ""}`}
      style={{ ...travel(fromX, fromY), "--vd-bend-x": `${bendX ?? 0}px` } as CSSProperties}
    />
  );
}
/** The quiet dashed boundary is potential scope; the active outline is agreed scope. */
export function Scope({
  x,
  y,
  width,
  height = width,
  retiring = false,
}: {
  x: number;
  y: number;
  width: number;
  height?: number;
  retiring?: boolean;
}) {
  return (
    <>
      <rect x={x} y={y} width={width} height={height} className="vd-reference" />
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        pathLength="1"
        className={`vd-scope ${retiring ? "vd-retire" : "vd-draw"}`}
      />
    </>
  );
}
/** An owner touches the mandate's boundary. A detached owner is only a problem-state position. */
export function Owner({
  x,
  y,
  fromX = 0,
  fromY = 0,
  arrive = false,
}: {
  x: number;
  y: number;
  fromX?: number;
  fromY?: number;
  arrive?: boolean;
}) {
  return (
    <circle
      cx={x}
      cy={y}
      r={8}
      className={`vd-owner vd-moving ${arrive ? "vd-arrive" : ""}`}
      style={travel(fromX, fromY)}
    />
  );
}
export function Capability({
  x,
  y,
  fromX = 0,
  fromY = 0,
  muted = false,
  arrive = false,
}: {
  x: number;
  y: number;
  fromX?: number;
  fromY?: number;
  muted?: boolean;
  arrive?: boolean;
}) {
  return (
    <rect
      x={x - 10}
      y={y - 10}
      width={20}
      height={20}
      className={`vd-capability vd-moving ${muted ? "vd-muted" : ""} ${arrive ? "vd-arrive" : ""}`}
      style={travel(fromX, fromY)}
    />
  );
}
export function RoutePath({
  d,
  state = "constant",
  quiet = false,
}: {
  d: string;
  state?: "constant" | "draw" | "retire";
  quiet?: boolean;
}) {
  return (
    <path
      d={d}
      pathLength="1"
      className={`vd-route ${quiet ? "vd-quiet" : ""} ${state === "constant" ? "" : `vd-${state}`}`}
    />
  );
}
export function Endpoint({ x, y, vertical = false }: { x: number; y: number; vertical?: boolean }) {
  return (
    <path
      d={vertical ? `M${x - 10} ${y}h20` : `M${x} ${y - 10}v20`}
      className="vd-endpoint vd-arrive"
    />
  );
}
