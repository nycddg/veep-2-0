import { HomeWorkLoop } from "./HomeWorkLoop";
import { Capability, Endpoint, Owner, RoutePath, Scope, Work } from "./primitives";
import type { MotionConcept } from "./stories";

function Mandate({ compact }: { compact: boolean }) {
  const cx = compact ? 180 : 300,
    cy = compact ? 216 : 246,
    w = compact ? 136 : 180,
    h = compact ? 116 : 146;
  const left = cx - w / 2,
    top = cy - h / 2,
    support = compact ? 105 : 163,
    endY = compact ? 386 : 455;
  return (
    <>
      <Scope x={left} y={top} width={w} height={h} />
      <Work x={cx} y={cy} size={30} />
      <Owner x={cx} y={top} fromX={compact ? -59 : -80} fromY={-68} />
      <Capability x={cx - support} y={cy} fromX={-25} fromY={-24} />
      <Capability x={cx + support} y={cy} fromX={25} fromY={24} />
      <RoutePath d={`M${cx - support + 10} ${cy}H${left}`} state="draw" />
      <RoutePath d={`M${left + w} ${cy}H${cx + support - 10}`} state="draw" />
      <RoutePath d={`M${cx} ${cy + 15}V${endY}`} state="draw" />
      <Endpoint x={cx} y={endY} vertical />
    </>
  );
}

function Assembly({ compact }: { compact: boolean }) {
  const cx = compact ? 171 : 292,
    cy = compact ? 240 : 262,
    size = compact ? 96 : 126,
    reach = compact ? 100 : 164;
  return (
    <>
      {/* The mandate and its owner stay fixed. Capability is what changes. */}
      <rect x={cx - size / 2} y={cy - size / 2} width={size} height={size} className="vd-scope" />
      <Work x={cx} y={cy} size={30} />
      <Owner x={cx} y={cy - size / 2} />
      <Capability x={cx - reach} y={cy} fromX={-26} fromY={-60} />
      <Capability x={cx + reach} y={cy} fromX={28} fromY={-40} />
      <Capability x={cx} y={cy + reach} fromX={-44} fromY={30} />
      <RoutePath d={`M${cx - reach + 10} ${cy}H${cx - size / 2}`} state="draw" />
      <RoutePath d={`M${cx + size / 2} ${cy}H${cx + reach - 10}`} state="draw" />
      <RoutePath d={`M${cx} ${cy + size / 2}V${cy + reach - 10}`} state="draw" />
      <Capability x={compact ? 299 : 508} y={compact ? 90 : 92} muted />
    </>
  );
}

function Portfolio({ compact }: { compact: boolean }) {
  const centers = compact ? [90, 270] : [116, 300, 484];
  const top = compact ? 80 : 82,
    boxTop = compact ? 178 : 177,
    boxW = compact ? 134 : 144,
    boxH = compact ? 217 : 226;
  const relationshipX = compact ? 180 : 300;
  return (
    <>
      {/* A shared relationship is above, never a delivery pool crossing company boundaries. */}
      <RoutePath d={`M${centers[0]} ${top}H${centers[centers.length - 1]}`} />
      <Owner x={relationshipX} y={top} />
      {centers.map((x, i) => (
        <g key={x}>
          <RoutePath d={`M${x} ${top}V${boxTop}`} state="draw" />
          <rect x={x - boxW / 2} y={boxTop} width={boxW} height={boxH} className="vd-company" />
          <path d={`M${x - boxW / 2} ${boxTop + 42}h${boxW}`} className="vd-company" />
          <path d={`M${x - 16} ${boxTop + 21}h32`} className="vd-company-mark" />
          <Scope x={x - 43} y={boxTop + 83} width={86} height={96} />
          <Work
            x={x}
            y={boxTop + 131}
            fromX={i % 2 ? 22 : -22}
            fromY={i % 2 ? -25 : 25}
            size={23}
          />
        </g>
      ))}
    </>
  );
}

function Handoff({ compact }: { compact: boolean }) {
  const left = compact ? 80 : 162,
    right = compact ? 270 : 432,
    cy = compact ? 210 : 240,
    w = compact ? 104 : 142,
    h = compact ? 118 : 146;
  const top = cy - h / 2,
    supportY = compact ? 355 : 414;
  return (
    <>
      <Scope x={left - w / 2} y={top} width={w} height={h} retiring />
      <Scope x={right - w / 2} y={top} width={w} height={h} />
      <RoutePath d={`M${left} ${cy}H${right + w / 2}`} state="draw" />
      <Owner x={right} y={top} fromX={left - right} />
      <Work x={right} y={cy} fromX={left - right} size={28} />
      <RoutePath d={`M${right} ${cy + h / 2}V${supportY - 10}`} state="draw" />
      <Capability x={right} y={supportY} arrive />
      <Endpoint x={right + w / 2} y={cy} />
    </>
  );
}

function Accent({ concept }: { concept: "scope" | "expertise" | "first-step" }) {
  if (concept === "scope")
    return (
      <>
        <rect x={68} y={30} width={244} height={190} className="vd-reference" />
        <Scope x={137} y={72} width={106} height={106} />
        <Work x={190} y={125} />
        <Capability x={90} y={125} fromX={-30} />
        <Capability x={290} y={125} fromX={30} />
        <RoutePath d="M100 125H137M243 125H280" state="draw" />
      </>
    );
  if (concept === "expertise")
    return (
      <>
        <rect x={145} y={76} width={90} height={90} className="vd-scope" />
        <Work x={190} y={121} />
        <Owner x={190} y={76} />
        <Capability x={80} y={121} fromX={-30} fromY={-40} />
        <Capability x={300} y={121} fromX={30} fromY={40} />
        <RoutePath d="M90 121H145M235 121H290" state="draw" />
        <Capability x={280} y={30} muted />
      </>
    );
  return (
    <>
      <rect x={40} y={113} width={24} height={24} className="vd-reference" />
      <RoutePath d="M52 125H338" state="draw" />
      <Scope x={229} y={80} width={90} />
      <Owner x={274} y={80} arrive />
      <Work x={274} y={125} fromX={-222} />
      <Endpoint x={338} y={125} />
    </>
  );
}

export function Composition({ concept, compact }: { concept: MotionConcept; compact: boolean }) {
  switch (concept) {
    case "desk":
      return <HomeWorkLoop />;
    case "mandate":
      return <Mandate compact={compact} />;
    case "assembly":
      return <Assembly compact={compact} />;
    case "portfolio":
      return <Portfolio compact={compact} />;
    case "handoff":
      return <Handoff compact={compact} />;
    default:
      return <Accent concept={concept} />;
  }
}
