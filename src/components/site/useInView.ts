import { useEffect, useRef, useState } from "react";

/**
 * useInView — one-shot IntersectionObserver hook.
 * Returns a ref to attach and a boolean that flips true the first time
 * the element crosses the viewport threshold, then stays true.
 */
export function useInView<T extends Element = HTMLDivElement>(
  { threshold = 0.2, rootMargin = "-10% 0px" }: IntersectionObserverInit = {}
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold, rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [inView, threshold, rootMargin]);

  return [ref, inView] as const;
}
