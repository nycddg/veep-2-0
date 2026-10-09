import { useEffect, useId, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { selectedSpotlights, type SpotlightAudience } from "./spotlightSelections";

const DWELL_MS = 11_000;

/** A small editorial sequence. Profiles are evidence, never selectable inventory. */
export function OperatorSpotlight({ audience }: { audience: SpotlightAudience }) {
  const isHome = audience === "home";
  const people = selectedSpotlights(audience);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [inView, setInView] = useState(false);
  const [documentVisible, setDocumentVisible] = useState(true);
  // Start static on both server and client, then honor the reader's preference.
  const [reducedMotion, setReducedMotion] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);
  const id = useId();
  const count = people.length;
  const playing = !paused && !hovered && !focused && inView && documentVisible && !reducedMotion;

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => setReducedMotion(preference.matches);
    const syncVisibility = () => setDocumentVisible(!document.hidden);
    syncPreference();
    syncVisibility();
    preference.addEventListener("change", syncPreference);
    document.addEventListener("visibilitychange", syncVisibility);
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting && entry.intersectionRatio >= 0.35),
      { threshold: [0, 0.35] },
    );
    if (rootRef.current) observer.observe(rootRef.current);
    return () => {
      preference.removeEventListener("change", syncPreference);
      document.removeEventListener("visibilitychange", syncVisibility);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!playing) return;
    // A fresh dwell after any pause gives the reader the full time to read.
    const timer = window.setTimeout(() => setActive((value) => (value + 1) % count), DWELL_MS);
    return () => window.clearTimeout(timer);
  }, [active, count, playing]);

  return (
    <div
      ref={rootRef}
      className={`ve-spotlight ve-spotlight--${audience}`}
      role="region"
      aria-label="Operating partner experience"
      aria-describedby={isHome ? `${id}-description` : undefined}
      tabIndex={isHome ? 0 : undefined}
      data-motion={playing ? "playing" : "paused"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
    >
      {isHome && (
        <p className="ve-spotlight-sr-copy" id={`${id}-description`}>
          Operating partner experience. This portrait sequence pauses while hovered or focused and
          stays still when reduced motion is preferred.
        </p>
      )}
      <div className="ve-spotlight-stage" aria-hidden={isHome ? undefined : true}>
        {people.map((person, index) => {
          const relative = (index - active + count) % count;
          const position =
            relative === 0
              ? "prime"
              : relative === 1
                ? "right"
                : relative === count - 1
                  ? "left"
                  : "back";
          return (
            <div
              key={person.name}
              className="ve-spotlight-portrait"
              data-position={position}
              data-depth={relative}
              aria-hidden={isHome && relative !== 0 ? true : undefined}
            >
              <img
                src={person.photoUrl}
                alt=""
                width={1152}
                height={1440}
                loading={audience === "home" ? "eager" : "lazy"}
                decoding="async"
                style={{
                  objectPosition: person.photoPosition ?? "center 65%",
                  ...(isHome && relative === 0 ? { transform: person.heroCrop } : {}),
                }}
              />
              {!isHome && (
                <span className="ve-spotlight-photo-label">
                  {person.role.replace(" Operating Partner", "")}
                </span>
              )}
              {isHome && relative === 0 && (
                <article className="ve-spotlight-overlay" aria-label={person.name} aria-live="off">
                  <h2 className="ve-spotlight-overlay-name">{person.name}</h2>
                  <p className="ve-spotlight-overlay-role">{person.role}</p>
                  <p className="ve-spotlight-overlay-proof">{person.heroCredential}</p>
                </article>
              )}
            </div>
          );
        })}
      </div>
      {!isHome && (
        <div className="ve-spotlight-editorial">
          <div className="ve-spotlight-copy" id={`${id}-copy`} aria-live="off">
            {people.map((person, index) => (
              <article
                key={person.name}
                className={
                  active === index
                    ? "ve-spotlight-story is-prime"
                    : "ve-spotlight-story ve-spotlight-offstage"
                }
                id={`${id}-${index}`}
                aria-label={`${person.name}, ${person.role}`}
              >
                <p className="ve-spotlight-context">{person.context}</p>
                <h3>{person.name}</h3>
                <p className="ve-spotlight-role">{person.role}</p>
                <p className="ve-spotlight-evidence">{person.evidence}</p>
              </article>
            ))}
          </div>
          <div className="ve-spotlight-controls">
            <span className="ve-spotlight-count" aria-hidden="true">
              0{active + 1} / 0{count}
            </span>
            <div
              className="ve-spotlight-indicators"
              role="group"
              aria-label="Choose an editorial spotlight"
            >
              {people.map((person, index) => (
                <button
                  key={person.name}
                  type="button"
                  aria-label={`Spotlight ${person.name}`}
                  aria-pressed={active === index}
                  aria-controls={`${id}-${index}`}
                  onClick={() => {
                    setActive(index);
                    setPaused(true);
                  }}
                >
                  <span />
                </button>
              ))}
            </div>
            {!reducedMotion && (
              <button
                type="button"
                className="ve-spotlight-playback"
                aria-label={paused ? "Resume automatic spotlights" : "Pause automatic spotlights"}
                onClick={() => setPaused((value) => !value)}
              >
                {paused ? (
                  <Play size={13} aria-hidden="true" />
                ) : (
                  <Pause size={13} aria-hidden="true" />
                )}
                <span>{paused ? "Resume" : "Pause"}</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
