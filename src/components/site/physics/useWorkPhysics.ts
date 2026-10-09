import { useEffect, useRef } from "react";
import { springProgress, expressive } from "./motionScheme";
import { WorkSimulation, type WorkGeometry } from "./workSimulation";

/** Integrates at 120Hz, writes SVG positions without React renders, pauses offscreen. */
export function useWorkPhysics(
  measure: (node: SVGGElement | SVGSVGElement) => WorkGeometry,
  mode: "hero" | "ownership",
) {
  const ref = useRef<SVGGElement & SVGSVGElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const host = node.closest(mode === "hero" ? ".vm-scene" : ".vh-ownership")!;
    const circles = Array.from(node.querySelectorAll<SVGCircleElement>("[data-body]"));
    const check = node.querySelector<SVGPathElement>("[data-check]");
    let sim: WorkSimulation;
    let accumulator = 0,
      last = 0,
      frame = 0,
      wasStill = false;
    const draw = () => {
      circles.forEach((c) => {
        c.style.opacity = "0";
      });
      const bodies = [...sim.bodies];
      if (sim.incoming) bodies.push(sim.incoming);
      if (sim.selected && !bodies.includes(sim.selected)) bodies.push(sim.selected);
      for (const b of bodies) {
        const c = circles[b.id];
        c.setAttribute("cx", String(b.x));
        c.setAttribute("cy", String(b.y));
        c.setAttribute("r", String(b.r * (b === sim.selected ? sim.scale : 1)));
        c.style.opacity = String(
          sim.opacity *
            (b === sim.incoming ? springProgress(sim.arrivalTime, expressive.effects) : 1),
        );
        c.setAttribute(
          "class",
          b.id === sim.geometry.count - 1
            ? "wp-ball wp-ball--selected"
            : `wp-ball wp-ball--${b.id % 5}`,
        );
      }
      if (check) {
        check.setAttribute(
          "transform",
          `translate(${sim.geometry.end.x - 24} ${sim.geometry.end.y - 24})`,
        );
        check.style.opacity = String(sim.check > 0 ? sim.opacity : 0);
        check.style.strokeDashoffset = String(1 - sim.check);
      }
      node.setAttribute("data-stage", sim.stage);
    };
    const state = () =>
      mode === "hero"
        ? {
            still: host.getAttribute("data-animate") !== "true",
            playing: host.getAttribute("data-playing") === "true",
          }
        : {
            still: host.getAttribute("data-motion") === "still",
            playing: host.getAttribute("data-motion") === "running",
          };
    const resize = () => {
      sim = new WorkSimulation(measure(node));
      wasStill = state().still;
      if (wasStill) sim.resolved();
      accumulator = 0;
      draw();
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(mode === "hero" ? node.ownerSVGElement! : host);
    host
      .querySelectorAll(".vh-executive-center h3, .vh-mandate-logo")
      .forEach((element) => observer.observe(element));
    const tick = (now: number) => {
      const { still, playing } = state();
      if (still && !wasStill) {
        sim.resolved();
        draw();
      }
      if (!still && wasStill) {
        sim.reset();
        accumulator = 0;
      }
      if (!still && playing && !document.hidden) {
        accumulator += Math.min((now - (last || now)) / 1000, 0.05);
        while (accumulator >= 1 / 120) {
          sim.update(1 / 120);
          accumulator -= 1 / 120;
        }
        draw();
      }
      wasStill = still;
      last = now;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [measure, mode]);
  return ref;
}
