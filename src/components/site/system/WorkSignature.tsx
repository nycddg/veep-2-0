import { useEffect, useRef, useState } from "react";
import { useMotionPreference } from "@/lib/motionPreference";

/** A small, intentional completion gesture. Never starts on scroll or hover. */
export function WorkSignature() {
  const { reduced } = useMotionPreference();
  const [playing, setPlaying] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);
  const mark = (
    <svg viewBox="0 0 72 36" aria-hidden="true">
      <path d="M4 18h54" stroke="currentColor" fill="none" strokeWidth="1" />
      <circle cx="58" cy="18" r="11" className="v-mini-dot" />
      <path d="m53 18 4 4 7-8" pathLength="1" className="v-mini-check" />
    </svg>
  );
  if (reduced)
    return (
      <span className="v-work-signature" aria-hidden="true">
        {mark}
      </span>
    );
  return (
    <button
      type="button"
      className="v-work-signature"
      aria-label="Replay work to completion"
      data-playing={playing ? "true" : undefined}
      onClick={() => {
        if (playing) return;
        setPlaying(true);
        timer.current = setTimeout(() => setPlaying(false), 800);
      }}
    >
      {mark}
    </button>
  );
}
