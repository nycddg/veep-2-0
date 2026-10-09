import { useState } from "react";
import { Pause, Play } from "lucide-react";
import { Container } from "./Container";
import { useSectionMotion } from "../system/useSectionMotion";

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

const operatorCompanies = [
  "Industrious",
  "Morning Brew",
  "Zocdoc",
  "Etsy",
  "Polestar",
  "Maisonette",
  "Zipcar",
  "Ford's Gin",
  "Moo.com",
  "Betaworks",
  "Heavy.com",
  "IGN",
  "TaskRabbit",
  "Refinery29",
  "New Stand",
  "American Express",
  "Verizon",
  "Citi",
  "Opencare",
  "UGE",
  "frog design",
  "Deloitte",
  "?What If! Innovation",
  "AOL",
  "The New Republic",
  "NewsCred",
  "Facebook",
  "LVMH",
  "Macy's",
  "Accenture",
  "David Yurman",
  "MediaLink",
  "David Zwirner",
  "Gansevoort Hotel Group",
  "WeightWatchers",
  "Verve Mobile",
  "Big Spaceship",
  "Pursuit",
  "Google",
  "Nifty's",
];

export function ClientTicker({ kind = "full" }: { kind?: "full" | "clients" | "operators" }) {
  const fullWidth = kind !== "clients";
  const label =
    kind === "operators"
      ? "Our operators have worked at"
      : kind === "full"
        ? "Trusted by"
        : "Veep clients";
  const [paused, setPaused] = useState(false);
  const sequence = useSectionMotion();
  const names =
    kind === "operators" ? operatorCompanies : kind === "full" ? clients : selectedClients;
  const content = (
    <>
      <div className="ve-ticker-label">
        <p>{label}</p>
        {kind === "clients" && (
          <button
            type="button"
            aria-label={paused ? "Play names" : "Pause names"}
            aria-pressed={paused}
            onClick={() => setPaused(!paused)}
          >
            {paused ? <Play size={15} /> : <Pause size={15} />}
          </button>
        )}
      </div>
      <div className="ve-ticker-window">
        <div
          className={`ve-ticker-track ${paused ? "is-paused" : ""}`}
          style={
            fullWidth ? { animationDuration: kind === "operators" ? "180s" : "100s" } : undefined
          }
        >
          {[0, 1].map((copy) => (
            <ul key={copy} aria-hidden={copy === 1 ? true : undefined}>
              {names.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </>
  );
  return (
    <div
      ref={sequence.ref}
      data-motion={sequence.state}
      className={`ve-ticker ve-ticker-${kind}`}
      role={fullWidth ? "group" : undefined}
      aria-label={
        fullWidth
          ? sequence.state === "still"
            ? label
            : `${label}. Pauses while hovered or focused.`
          : undefined
      }
      tabIndex={fullWidth ? 0 : undefined}
    >
      {fullWidth ? (
        <Container className="ve-container ve-ticker-inner">{content}</Container>
      ) : (
        content
      )}
    </div>
  );
}
