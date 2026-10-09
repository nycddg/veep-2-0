import { useEffect, useRef, useState, type RefObject } from "react";
import { useMotionPreference } from "@/lib/motionPreference";
import "./site-motion.css";

export function motionEasing(kind: "spatial" | "effects" = "spatial") {
  return (
    getComputedStyle(document.documentElement).getPropertyValue(`--v-expressive-${kind}`).trim() ||
    "cubic-bezier(.2,0,0,1)"
  );
}

/** One finite entrance per route. Reading never depends on a hidden pre-animation state. */
export function useSiteMotion(pathname: string) {
  const { reduced } = useMotionPreference();
  const visited = useRef(new Set<string>());
  useEffect(() => {
    if (reduced || visited.current.has(pathname)) return;
    visited.current.add(pathname);
    const animations = new Set<Animation>();
    const enter = (element: Element, frames: Keyframe[], delay = 0, duration = 550) => {
      const play = (keyframes: Keyframe[], easing: string, length: number) => {
        const animation = element.animate(keyframes, {
          duration: length,
          delay,
          easing,
          fill: "backwards",
        });
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      };
      const spatial = frames.map((frame) => {
        const next = { ...frame };
        delete next.opacity;
        return next;
      });
      play(spatial, motionEasing(), duration);
      if (frames.some((frame) => frame.opacity !== undefined))
        play(
          frames.map((frame) => ({ opacity: frame.opacity })),
          motionEasing("effects"),
          240,
        );
    };
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const section = entry.target;
          if (section.matches(".vh-method")) {
            section.querySelectorAll(".vh-method-number").forEach((mark, i) =>
              enter(
                mark,
                [
                  { transform: "scale(.88)", opacity: 0.65 },
                  { transform: "scale(1)", opacity: 1 },
                ],
                i * 65,
                400,
              ),
            );
          } else if (section.matches(".vh-proof-chapter")) {
            section
              .querySelectorAll(".vh-proof-number")
              .forEach((number, i) =>
                enter(
                  number,
                  [{ transform: "translateY(6px)" }, { transform: "translateY(0)" }],
                  i * 60,
                ),
              );
          } else {
            const heading = section.querySelector("h2");
            if (heading)
              enter(
                heading,
                section.matches(".vh-impact-chapter")
                  ? [
                      { clipPath: "inset(0 0 12% 0)", transform: "translateY(8px)" },
                      { clipPath: "inset(0)", transform: "translateY(0)" },
                    ]
                  : [
                      { opacity: 0.7, transform: "translateY(6px)" },
                      { opacity: 1, transform: "translateY(0)" },
                    ],
              );
          }
          observer.unobserve(section);
        }
      },
      { threshold: 0.1 },
    );
    const frame = requestAnimationFrame(() => {
      const main = document.querySelector(".vt-page-main");
      if (!main) return;
      if (visited.current.size === 1) {
        const header = document.querySelector(".v-header-inner");
        if (header)
          enter(
            header,
            [{ transform: "translateY(-4px)" }, { transform: "translateY(0)" }],
            0,
            320,
          );
      }
      const title = main.querySelector("h1");
      const lines = title?.querySelectorAll(":scope > span");
      if (lines?.length)
        lines.forEach((line, i) =>
          enter(
            line,
            [
              { transform: "translateY(10px)", opacity: 0.8 },
              { transform: "translateY(0)", opacity: 1 },
            ],
            i * 45,
          ),
        );
      else if (title)
        enter(title, [
          { transform: "translateY(8px)", opacity: 0.8 },
          { transform: "translateY(0)", opacity: 1 },
        ]);
      main
        .querySelectorAll(".vh-hero-problems, .vh-hero-argument, .vh-hero-visual")
        .forEach((part, i) =>
          enter(
            part,
            [
              { transform: "translateY(6px)", opacity: 0.8 },
              { transform: "translateY(0)", opacity: 1 },
            ],
            80 + i * 35,
          ),
        );
      main.querySelectorAll("section").forEach((section) => {
        if (!section.querySelector("h1") && !section.matches(".vh-audiences"))
          observer.observe(section);
      });
    });
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
    };
  }, [pathname, reduced]);
}

/** Snapshot the interrupted pose before reversing; a closing menu is immediately inert. */
export function useMenuPresence(open: boolean, ref: RefObject<HTMLDivElement | null>) {
  const { reduced } = useMotionPreference();
  const [present, setPresent] = useState(open);
  const animation = useRef<Animation | null>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (reduced) {
      animation.current?.cancel();
      setPresent(open);
      return;
    }
    const style = getComputedStyle(node);
    const from = animation.current
      ? { opacity: style.opacity, transform: style.transform }
      : { opacity: open ? 0 : 1, transform: open ? "translateY(-8px)" : "translateY(0)" };
    animation.current?.cancel();
    if (open) setPresent(true);
    const current = node.animate(
      [from, { opacity: open ? 1 : 0, transform: open ? "translateY(0)" : "translateY(-4px)" }],
      {
        duration: open ? 320 : 180,
        easing: motionEasing(open ? "spatial" : "effects"),
        fill: "both",
      },
    );
    animation.current = current;
    current.onfinish = () => {
      if (!open) setPresent(false);
      animation.current = null;
      current.cancel();
    };
    return () => {
      current.onfinish = null;
    };
  }, [open, reduced, ref]);
  useEffect(() => () => animation.current?.cancel(), []);
  return open || present;
}
