import type { ReactNode, ElementType, CSSProperties } from "react";
import { useInView } from "./useInView";

/**
 * Reveal — restrained one-shot viewport entrance.
 * Fades + rises 8px when the element first enters the viewport.
 * Uses the shared motion tokens; fully disabled under prefers-reduced-motion.
 */
export function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  style,
  children,
  ...rest
}: {
  as?: ElementType;
  delay?: 0 | 60 | 120 | 180;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
} & Record<string, unknown>) {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  return (
    <Tag
      ref={ref}
      data-in={inView ? "true" : "false"}
      className={`motion-reveal ${className}`.trim()}
      style={delay ? { ...style, transitionDelay: `${delay}ms` } : style}
      {...rest}
    >
      {children}
    </Tag>
  );
}