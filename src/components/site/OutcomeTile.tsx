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
      className="group flex flex-col justify-between min-h-[180px] border-t border-white/10 pt-7 transition-colors duration-300 hover:border-white/30"
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
