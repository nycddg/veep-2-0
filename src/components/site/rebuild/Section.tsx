import type { ReactNode } from "react";
import { useSectionMotion } from "../system/useSectionMotion";

type Tone = "canvas" | "raised" | "field";
type Pad = "default" | "compact" | "none";

const tones: Record<Tone, string> = {
  canvas: "bg-[var(--rb-canvas)] text-[var(--rb-text)]",
  raised: "bg-[var(--rb-raised)] text-[var(--rb-text)]",
  field: "rb-on-field",
};

const pads: Record<Pad, string> = {
  default: "v-section",
  compact: "v-section v-section--compact",
  none: "",
};

export function Section({
  id,
  children,
  tone = "canvas",
  pad = "default",
  className = "",
  motion,
}: {
  id?: string;
  children: ReactNode;
  tone?: Tone;
  pad?: Pad;
  className?: string;
  motion?: "process" | "portraits" | "portfolio" | "proof";
}) {
  const sequence = useSectionMotion<HTMLElement>(Boolean(motion));
  return (
    <section
      ref={sequence.ref}
      id={id}
      className={`${tones[tone]} ${pads[pad]} ${className} ${motion ? "v-sequence" : ""}`}
      data-sequence={motion}
      data-motion={motion ? sequence.state : undefined}
    >
      {children}
    </section>
  );
}
