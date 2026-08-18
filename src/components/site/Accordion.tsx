import { useState } from "react";
import { ChevronDown } from "lucide-react";

/**
 * Accordion — the sitewide disclosure row (reference implementation from /faq).
 * motion-collapse grid-rows animation, chevron rotation, answer fade.
 * Used by the FAQ page groups and the homepage mini-FAQ.
 */
export function Accordion({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-1">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full flex items-start justify-between gap-4 sm:gap-6 py-5 text-left min-h-11 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 rounded-sm transition-colors"
      >
        <span className="text-base sm:text-lg md:text-xl text-cream tracking-tight leading-snug">
          {q}
        </span>
        <ChevronDown
          size={18}
          className={`text-cream/70 shrink-0 mt-1.5 transition-[transform,color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? "rotate-180 text-accent" : ""}`}
        />
      </button>
      <div className="motion-collapse" data-open={open ? "true" : "false"}>
        <div>
          <p
            className={`pb-6 pr-6 sm:pr-10 text-[15px] sm:text-base text-cream/80 leading-relaxed max-w-3xl transition-opacity duration-300 ${
              open ? "opacity-100 delay-100" : "opacity-0 delay-0"
            }`}
          >
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}
