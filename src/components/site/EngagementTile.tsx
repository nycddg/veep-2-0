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
      className={`glass-card rounded-3xl p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
        featured ? "ring-1 ring-accent/40" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-soft">
          {name}
        </span>
        {featured && (
          <span className="text-[10px] font-medium uppercase tracking-wider text-accent">
            Most requested
          </span>
        )}
      </div>
      <div className="mt-8 font-serif text-3xl text-cream tracking-tight">{price}</div>
      <p className="mt-4 text-sm text-stone leading-relaxed">{bestWhen}</p>
      <div className="mt-auto pt-8 text-xs font-medium text-cream/80 group-hover:text-accent inline-flex items-center gap-2">
        Learn more →
      </div>
    </Link>
  );
}
