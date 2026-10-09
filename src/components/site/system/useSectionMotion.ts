import { useEffect, useRef, useState } from "react";

/** One entry sequence. Content is always visible; only its supporting geometry moves. */
export function useSectionMotion<T extends HTMLElement = HTMLDivElement>(enabled = true) {
  const ref = useRef<T>(null);
  const [started, setStarted] = useState(false);
  const [inView, setInView] = useState(false);
  const [visible, setVisible] = useState(true);
  const [reduced, setReduced] = useState(true);

  useEffect(() => {
    if (!enabled) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => setReduced(preference.matches);
    const syncVisibility = () => setVisible(!document.hidden);
    syncMotion();
    syncVisibility();
    preference.addEventListener("change", syncMotion);
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
      preference.removeEventListener("change", syncMotion);
      document.removeEventListener("visibilitychange", syncVisibility);
    };
  }, [enabled]);

  const state =
    !enabled || reduced ? "still" : !started ? "ready" : inView && visible ? "running" : "paused";
  return { ref, state };
}
