import { useEffect, useRef, useState } from "react";
import { useMotionPreference } from "@/lib/motionPreference";

/** One entry sequence. Content is always visible; only its supporting geometry moves. */
export function useSectionMotion<T extends HTMLElement = HTMLDivElement>(enabled = true) {
  const ref = useRef<T>(null);
  const [started, setStarted] = useState(false);
  const [inView, setInView] = useState(false);
  const [visible, setVisible] = useState(true);
  const { reduced } = useMotionPreference();

  useEffect(() => {
    if (!enabled) return;
    const syncVisibility = () => setVisible(!document.hidden);
    syncVisibility();
    document.addEventListener("visibilitychange", syncVisibility);
    const observer = new IntersectionObserver(
      ([entry]) => {
        const visibleEnough = entry.isIntersecting && entry.intersectionRatio >= 0.12;
        setInView(visibleEnough);
        if (visibleEnough) setStarted(true);
      },
      { threshold: 0.12 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", syncVisibility);
    };
  }, [enabled]);

  const state =
    !enabled || reduced ? "still" : !started ? "ready" : inView && visible ? "running" : "paused";
  return { ref, state };
}
