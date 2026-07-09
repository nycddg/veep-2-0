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
      className="group relative flex flex-col min-h-[260px] pt-8 pb-6 transition"
    >
      <div className="h-4 mb-2">
        {featured && (
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent-coral">
            Most requested
          </span>
        )}
      </div>
      <span className="text-xl md:text-2xl text-cream tracking-tight">{name}</span>
      <span className="mt-2 font-mono text-xs text-cream tabular-nums">{price}</span>
      <p className="mt-5 text-sm text-stone leading-relaxed">{bestWhen}</p>
      <span className="mt-auto pt-8 text-xs text-cream/70 group-hover:text-cream inline-flex items-center gap-1 transition">
        See scope →
      </span>
    </Link>
  );
}
