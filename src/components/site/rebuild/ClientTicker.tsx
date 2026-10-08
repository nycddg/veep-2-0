import { useState } from "react";
import { Pause, Play } from "lucide-react";

// Full client list from the original polish site's ClientStrip.
const clients = [
  "Atomic Audio",
  "VeroSkills",
  "Spring Break",
  "Dieux",
  "SipMargs",
  "Procure Impact",
  "Substantial",
  "Fowler Laundry Solutions",
  "Northstar Vets",
  "Energy Growth Holdings",
  "Bandyworks",
  "Artists & Fleas",
  "Frequency",
  "Synthetic Studio",
  "GUMDAY",
  "Soundview Medical Supply",
];
const selectedClients = [
  "Atomic Audio",
  "VeroSkills",
  "Dieux",
  "Procure Impact",
  "Fowler Laundry Solutions",
];

export function ClientTicker({ kind = "full" }: { kind?: "full" | "clients" }) {
  const [paused, setPaused] = useState(false);
  const names = kind === "full" ? clients : selectedClients;
  return (
    <div className={`ve-ticker ve-ticker-${kind}`}>
      <div className="ve-ticker-label">
        <p>{kind === "full" ? "Trusted by" : "Selected Veep clients"}</p>
        <button
          type="button"
          aria-label={paused ? "Play names" : "Pause names"}
          aria-pressed={paused}
          onClick={() => setPaused(!paused)}
        >
          {paused ? <Play size={15} /> : <Pause size={15} />}
        </button>
      </div>
      <div className="ve-ticker-window">
        <div
          className={`ve-ticker-track ${paused ? "is-paused" : ""}`}
          style={kind === "full" ? { animationDuration: "100s" } : undefined}
        >
          {[0, 1].map((copy) => (
            <ul key={copy} aria-hidden={copy === 1 ? true : undefined}>
              {names.map((name) => (
                <li key={name}>
                  {name}
                  <span aria-hidden="true">↗</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
