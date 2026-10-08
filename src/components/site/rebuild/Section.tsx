import type { ReactNode } from "react";

type Tone = "canvas" | "raised" | "field";
type Pad = "default" | "compact" | "none";

const tones: Record<Tone, string> = {
  canvas: "bg-[var(--rb-canvas)] text-[var(--rb-text)]",
  raised: "bg-[var(--rb-raised)] text-[var(--rb-text)]",
  field: "rb-on-field",
};

const pads: Record<Pad, string> = {
  default: "py-14 md:py-16 lg:py-24",
  compact: "py-10 lg:py-16",
  none: "",
};

export function Section({
  id,
  children,
  tone = "canvas",
  pad = "default",
  className = "",
}: {
  id?: string;
  children: ReactNode;
  tone?: Tone;
  pad?: Pad;
  className?: string;
}) {
  return (
    <section id={id} className={`${tones[tone]} ${pads[pad]} ${className}`}>
      {children}
    </section>
  );
}
