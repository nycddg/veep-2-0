import { useState } from "react";
import { Pause, Play } from "lucide-react";

const careers = [
  "Industrious",
  "Morning Brew",
  "Zocdoc",
  "LVMH",
  "TaskRabbit",
  "Goldman Sachs",
  "Activant Capital",
  "David Yurman",
];
const clients = [
  "Atomic Audio",
  "VeroSkills",
  "Dieux",
  "Procure Impact",
  "Fowler Laundry Solutions",
];

export function ClientTicker({ kind = "careers" }: { kind?: "careers" | "clients" }) {
  const [paused, setPaused] = useState(false);
  const names = kind === "careers" ? careers : clients;
  return (
    <div className={`ve-ticker ve-ticker-${kind}`}>
      <div className="ve-ticker-label">
        <p>{kind === "careers" ? "Our operators have built at" : "Selected Veep clients"}</p>
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
        <div className={`ve-ticker-track ${paused ? "is-paused" : ""}`}>
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
      {kind === "careers" && (
        <p className="ve-ticker-note">Operator career experience, including roles before Veep.</p>
      )}
    </div>
  );
}
