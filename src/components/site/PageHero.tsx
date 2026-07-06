import type { ReactNode } from "react";
import { DualCTA, Eyebrow } from "./primitives";

export function PageHero({
  eyebrow,
  title,
  italic,
  sub,
  children,
  index = "01",
  category,
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  sub: string;
  children?: ReactNode;
  index?: string;
  category?: string;
}) {
  const cat = (category ?? eyebrow).toUpperCase();
  return (
    <section className="bg-background text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between border-t border-white/8 pt-5">
          <span className="font-mono text-[11px] tracking-widest text-stone-soft">[{index}]</span>
          <span className="font-mono text-[11px] tracking-widest text-stone-soft">/ {cat}</span>
        </div>
        <div className="pt-16 md:pt-24 pb-16 md:pb-20">
          <div className="max-w-4xl">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-8 text-5xl md:text-7xl leading-[1.02] text-cream tracking-tight">
              {title}{" "}
              {italic && <span className="text-stone">{italic}</span>}
            </h1>
            <p className="mt-8 text-lg text-stone max-w-2xl">{sub}</p>
            <div className="mt-10">
              <DualCTA />
            </div>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
