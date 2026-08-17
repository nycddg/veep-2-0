import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function EngagementTile({
  name,
  price,
  bestWhen,
  to,
  hash,
  featured = false,
}: {
  name: string;
  price: string;
  bestWhen: string;
  to: string;
  hash?: string;
  featured?: boolean;
}) {
  return (
    <Link
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      to={to as any}
      hash={hash}
      className={`group motion-hover-lift relative flex flex-col md:min-h-[280px] pt-7 pb-6 pr-2 ${
        featured
          ? "border-t-2 border-accent md:border-t-0 md:pl-6 md:border-l-2 md:border-accent"
          : "border-t border-white/10 md:border-t-0 md:pl-6 md:border-l md:border-white/10 md:hover:border-white/25"
      }`}
    >
      <div className="flex items-baseline gap-3">
        <span className="font-serif font-medium text-xl text-cream">{name}</span>
        {featured && (
          <span className="eyebrow text-accent-coral">
            Most requested
          </span>
        )}
      </div>
      <p className="mt-4 text-base text-stone leading-relaxed">{bestWhen}</p>
      <div className="mt-6 md:mt-auto pt-4 md:pt-8 flex items-baseline justify-between gap-4">
        <span className="font-mono text-xs text-cream tabular-nums">{price}</span>
        <span className="text-xs text-cream/70 group-hover:text-cream inline-flex items-center gap-1.5 transition-colors duration-200">
          See scope <ArrowRight size={12} className="motion-arrow" />
        </span>
      </div>
    </Link>
  );
}
