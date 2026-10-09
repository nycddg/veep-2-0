import "./home-motion.css";

/** Returning work gathers in one center; an owned piece leaves as one coherent unit. */
export function HomeWorkLoop() {
  return (
    <g className="hw-system">
      {/* Three quiet axes are enough to explain where the work comes from and where it goes. */}
      <path d="M76 157H172M248 195H344M210 58V492" className="hw-guide" />
      <g transform="translate(210 176)">
        <circle r={64} className="hw-center hw-animated" />
      </g>
      <rect x={163} y={148} width={18} height={18} className="hw-work hw-left hw-animated" />
      <rect x={239} y={186} width={18} height={18} className="hw-work hw-right hw-animated" />
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
          <circle cx={0} cy={-43} r={8} className="hw-owner hw-animated" />
          <rect
            x={-18}
            y={-18}
            width={36}
            height={36}
            className="hw-work hw-selected hw-animated"
          />
        </g>
      </g>
    </g>
  );
}
