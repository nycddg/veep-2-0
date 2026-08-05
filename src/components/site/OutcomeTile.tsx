import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function OutcomeTile({
  headline,
  sub,
  intent,
}: {
  headline: string;
  sub: string;
  intent: string;
}) {
  return (
    <Link
      to="/contact"
      search={{ intent }}
      className="group glass-card rounded-3xl p-8 flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.06]"
    >
      <div className="flex justify-between items-start">
        <h3 className="font-serif text-2xl md:text-[26px] text-cream leading-[1.1] tracking-tight max-w-[14ch]">
          {headline}
        </h3>
        <ArrowUpRight
          size={20}
          className="text-stone-soft group-hover:text-accent transition-colors shrink-0"
        />
      </div>
      <p className="text-sm text-stone leading-relaxed mt-6">{sub}</p>
    </Link>
  );
}
