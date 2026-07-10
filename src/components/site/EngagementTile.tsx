import { Link } from "@tanstack/react-router";

export function EngagementTile({
  name,
  price,
  bestWhen,
  to,
  featured = false,
}: {
  name: string;
  price: string;
  bestWhen: string;
  to: string;
  featured?: boolean;
}) {
  return (
    <Link
      to={to}
      className={`group motion-hover-lift relative flex flex-col min-h-[280px] pt-7 pb-6 pr-2 ${
        featured
          ? "pl-6 border-l-2 border-accent"
          : "pl-6 border-l border-white/10 hover:border-white/25"
      }`}
    >
      <div className="flex items-baseline gap-3">
        <span className="text-xl md:text-2xl text-cream">{name}</span>
        {featured && (
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent-coral">
            Most requested
          </span>
        )}
      </div>
      <p className="mt-4 text-sm text-stone leading-relaxed">{bestWhen}</p>
      <div className="mt-auto pt-8 flex items-baseline justify-between gap-4">
        <span className="font-mono text-xs text-cream tabular-nums">{price}</span>
        <span className="text-xs text-cream/70 group-hover:text-cream inline-flex items-center gap-1 transition-colors duration-200">
          See scope <span className="motion-arrow inline-block">→</span>
        </span>
      </div>
    </Link>
  );
}
