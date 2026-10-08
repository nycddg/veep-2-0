import { useState } from "react";

const clients = [
  "Atomic Audio",
  "VeroSkills",
  "Dieux",
  "Procure Impact",
  "Fowler Laundry Solutions",
];

const gap = "\u00A0\u00A0\u00A0·\u00A0\u00A0\u00A0";
const line = `${clients.join(gap)}${gap}`;
const staticLine = `${clients.join("  ·  ")}  ·`;

export function ClientTicker() {
  const [paused, setPaused] = useState(false);

  return (
    <div className="rb-client-line mt-10 border-t border-[var(--rb-rule)] pt-4">
      <div className="flex items-center justify-between gap-4">
        <p className="rb-caption text-[var(--rb-muted)]">Selected Veep clients</p>
        <button
          type="button"
          className="rb-ticker-pause min-h-11 items-center px-3 text-[14px] text-[var(--rb-muted)] underline decoration-1 underline-offset-[0.22em]"
          aria-pressed={paused}
          onClick={() => setPaused((value) => !value)}
        >
          {paused ? "Play client names" : "Pause client names"}
        </button>
      </div>
      <p className="rb-ticker-static mt-3 text-[18px] leading-[1.45] md:text-[20px]">
        {staticLine}
      </p>
      <div className="rb-ticker-move mt-3 overflow-hidden">
        <div className={`rb-ticker-track ${paused ? "is-paused" : ""}`}>
          <p>{line}</p>
          <p aria-hidden="true">{line}</p>
        </div>
      </div>
    </div>
  );
}
