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
      className={`glass-card group rounded-3xl p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
        featured ? "ring-1 ring-accent/40" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="font-serif text-2xl text-cream tracking-tight">
          {name}
        </span>
        {featured && (
          <span className="text-[10px] font-medium uppercase tracking-wider text-accent">
            Most requested
          </span>
        )}
      </div>
      <p className="mt-3 text-sm text-stone leading-relaxed">{bestWhen}</p>
      <div className="mt-auto pt-8 flex items-center justify-between gap-4">
        <span className="font-mono text-xs text-stone-soft tracking-wide">
          {price}
        </span>
        <span className="text-xs font-medium text-cream/80 group-hover:text-accent inline-flex items-center gap-2">
          See scope →
        </span>
      </div>
    </Link>
  );
}
