import type { ReactNode, ElementType, CSSProperties } from "react";
import { useInView } from "./useInView";

/**
 * Reveal — restrained one-shot viewport entrance.
 * Uses motion-reveal (opacity + 8px rise) toggled via IntersectionObserver.
 * Elements above/near the viewport on mount reveal immediately; below-fold
 * elements reveal as they enter. Fully bypassed under prefers-reduced-motion
 * (motion-reveal collapses to no-op via the global guard in styles.css).
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
  const [ref, inView] = useInView<HTMLElement>({
    threshold: 0.12,
    rootMargin: "-8% 0px",
  });
  const mergedStyle: CSSProperties | undefined = delay
    ? { ...style, transitionDelay: `${delay}ms` }
    : style;
  return (
    <Tag
      ref={ref}
      data-in={inView ? "true" : "false"}
      className={`motion-reveal ${className}`.trim()}
      style={mergedStyle}
      {...rest}
    >
      {children}
    </Tag>
  );
}