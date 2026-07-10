import type { ReactNode, ElementType, CSSProperties } from "react";

/**
 * Reveal — restrained one-shot viewport entrance.
 * Fades + rises 8px when the element first enters the viewport.
 *
 * Robust trigger: synchronously reveals elements already in (or above) the
 * viewport on mount, uses a loose IntersectionObserver for below-fold entry,
 * and hard-fails to visible after 600ms so nothing ever stays hidden.
 * Fully disabled under prefers-reduced-motion.
 */
/**
 * Reveal — restrained CSS-only mount entrance.
 * Fades in and rises 8px on first paint. Fully bypassed under
 * prefers-reduced-motion via the global reduced-motion guard in styles.css.
 * No scroll observer — the animation is subtle enough to feel intentional
 * even for sections already scrolled into view.
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
  return (
    <Tag
      className={`motion-fade-up ${className}`.trim()}
      style={delay ? { ...style, animationDelay: `${delay}ms` } : style}
      {...rest}
    >
      {children}
    </Tag>
  );
}