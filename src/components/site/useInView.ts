import { useEffect, useRef, useState } from "react";

/**
 * useInView — one-shot IntersectionObserver hook.
 * Returns a ref to attach and a boolean that flips true the first time
 * the element crosses the viewport threshold, then stays true.
 *
 * Safety net: if the element is already within the viewport at mount, we
 * flip immediately (synchronous getBoundingClientRect check). If the observer
 * never fires for any reason (stale layout, zero-height parent, browser
 * quirk), a fallback timer reveals the element so content is never stuck.
 */
export function useInView<T extends Element = HTMLDivElement>(
  { threshold = 0.12, rootMargin = "0px 0px -5% 0px" }: IntersectionObserverInit = {}
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
    // Already on screen at mount? Reveal immediately.
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < vh && rect.bottom > 0) {
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
    // Safety fallback — never leave content invisible.
    const t = window.setTimeout(() => setInView(true), 1200);
    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, [inView, threshold, rootMargin]);

  return [ref, inView] as const;
}
