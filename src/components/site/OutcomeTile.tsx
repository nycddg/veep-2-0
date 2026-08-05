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
      className="group rounded-2xl border-t border-white/10 pt-6 pb-2 flex flex-col justify-between min-h-[180px] transition-colors duration-300 hover:border-accent/40"
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
