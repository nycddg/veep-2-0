import type { ReactNode } from "react";
import { DualCTA, Eyebrow } from "./primitives";

export function PageHero({
  eyebrow,
  title,
  italic,
  sub,
  children,
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  sub: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-16 md:pb-20">
        <div className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.02] text-ink">
            {title} {italic && <em className="italic text-forest">{italic}</em>}
          </h1>
          <p className="mt-6 text-lg text-stone max-w-2xl">{sub}</p>
          <div className="mt-8">
            <DualCTA />
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
