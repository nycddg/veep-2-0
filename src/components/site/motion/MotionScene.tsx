import { useEffect, useId, useRef, useState, type CSSProperties } from "react";
import { Pause, Play, RotateCcw } from "lucide-react";
import { Composition } from "./compositions";
import { stories, type MotionConcept } from "./stories";
import { useMotionPreference } from "@/lib/motionPreference";
import "./motion.css";

/** Explicit loop support; every scene retains a complete static SSR/reduced-motion state. */
export function MotionScene({
  concept,
  className = "",
  compact: small = false,
  motion = "auto",
  frame = "resolved",
}: {
  concept: MotionConcept;
  className?: string;
  compact?: boolean;
  motion?: "auto" | "still";
  frame?: "problem" | "resolved";
}) {
  const ref = useRef<HTMLElement>(null);
  const id = useId();
  const [mobile, setMobile] = useState(false);
  const { reduced } = useMotionPreference();
  const [inView, setInView] = useState(false);
  const [started, setStarted] = useState(false);
  const [visible, setVisible] = useState(true);
  const [paused, setPaused] = useState(false);
  const [finished, setFinished] = useState(false);
  const [replay, setReplay] = useState(0);
  const story = stories[concept];
  const looping = story.loop === true;
  const complete = finished && !looping;
  const accent = ["scope", "expertise", "first-step"].includes(concept);

  useEffect(() => {
    const narrow = window.matchMedia("(max-width: 600px)");
    const sync = () => {
      setMobile(narrow.matches);
      setFinished(false);
    };
    const visibility = () => setVisible(!document.hidden);
    sync();
    visibility();
    narrow.addEventListener("change", sync);
    document.addEventListener("visibilitychange", visibility);
    const observer = new IntersectionObserver(
      ([entry]) => {
        const shown = entry.isIntersecting && entry.intersectionRatio >= 0.25;
        setInView(shown);
        if (shown) setStarted(true);
      },
      { threshold: [0, 0.25] },
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      narrow.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", visibility);
      observer.disconnect();
    };
  }, []);

  const still = reduced || motion === "still" || frame === "problem";
  const animate = started && !still;
  const playing = animate && inView && visible && !paused;
  return (
    <figure
      ref={ref}
      className={`vm-scene vm-scene--${concept} ${accent ? "vm-accent" : ""} ${small ? "vm-small" : ""} ${className}`}
      data-frame={frame}
      data-animate={animate}
      data-playing={playing}
      data-finished={complete}
      data-loop={looping}
      style={{ "--vm-duration": `${story.seconds}s` } as CSSProperties}
    >
      <svg
        key={`${concept === "desk" ? "horizontal" : mobile}-${replay}`}
        viewBox={
          concept === "desk"
            ? mobile || small
              ? "0 0 420 240"
              : "0 0 740 240"
            : accent
              ? "0 0 380 250"
              : mobile
                ? "0 0 360 450"
                : "0 0 600 520"
        }
        className="vm-art"
        role="img"
        aria-labelledby={`${id}-title ${id}-desc`}
        onAnimationEnd={(event) => {
          if (!looping && event.animationName === "vm-clock") setFinished(true);
        }}
      >
        <title id={`${id}-title`}>{story.title}</title>
        <desc id={`${id}-desc`}>
          {frame === "problem" ? story.problem : still ? story.resolution : story.description}
        </desc>
        <Composition concept={concept} compact={mobile || (concept === "desk" && small)} />
        <g className="vm-clock" />
      </svg>
      {concept !== "desk" && (
        <figcaption>
          {!still && (
            <button
              type="button"
              className="vm-control"
              aria-label={`${complete ? "Replay" : paused ? "Play" : "Pause"} animation: ${story.title}`}
              onClick={() => {
                if (complete) {
                  setReplay((value) => value + 1);
                  setFinished(false);
                  setPaused(false);
                } else setPaused((value) => !value);
              }}
            >
              {complete ? (
                <RotateCcw size={14} />
              ) : paused ? (
                <Play size={14} />
              ) : (
                <Pause size={14} />
              )}
              <span>{complete ? "Replay" : paused ? "Play" : "Pause"}</span>
            </button>
          )}
        </figcaption>
      )}
    </figure>
  );
}
