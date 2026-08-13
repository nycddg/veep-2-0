import type { ReactNode, ElementType, CSSProperties } from "react";
import { useEffect, useState } from "react";
import { useInView } from "./useInView";

/**
 * Reveal — restrained one-shot viewport entrance.
 * Content is visible by default (SSR / no-JS / before observer arms).
 * After mount, below-fold sections hide then fade in when scrolled into view.
 * prefers-reduced-motion: CSS forces always-visible.
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
  const [armed, setArmed] = useState(false);
  const [ref, inView] = useInView<HTMLElement>({
    threshold: 0.12,
    rootMargin: "-8% 0px",
  });

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setArmed(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  const mergedStyle: CSSProperties | undefined = delay
    ? { ...style, transitionDelay: `${delay}ms` }
    : style;

  // Visible until armed; then IO drives data-in.
  const shown = !armed || inView;

  return (
    <Tag
      ref={ref}
      data-in={shown ? "true" : "false"}
      className={`motion-reveal ${className}`.trim()}
      style={mergedStyle}
      {...rest}
    >
      {children}
    </Tag>
  );
}
