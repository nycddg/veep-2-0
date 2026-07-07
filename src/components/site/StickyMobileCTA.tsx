import { ArrowRight } from "lucide-react";
import { BOOKING_URL } from "@/lib/booking";

/**
 * StickyMobileCTA — persistent bottom "Book intro call" bar on mobile only.
 * Keeps the single primary CTA one tap away on every scroll depth.
 */
export function StickyMobileCTA() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-30 border-t border-white/10 bg-background/95 backdrop-blur px-4 py-3">
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full rounded-full bg-cream px-5 py-3 text-sm font-medium text-ink inline-flex items-center justify-center gap-2 shadow-[0_0_60px_-10px_rgba(255,255,255,0.35)]"
      >
        Book intro call <ArrowRight size={16} />
      </a>
    </div>
  );
}