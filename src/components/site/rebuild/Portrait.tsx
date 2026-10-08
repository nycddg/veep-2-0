export function Portrait({
  src,
  objectPosition = "center 18%",
  scale,
  className = "",
  priority = false,
}: {
  src: string;
  objectPosition?: string;
  scale?: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden rounded-[4px] bg-[var(--rb-raised)] ${className}`}>
      <img
        src={src}
        alt=""
        width={660}
        height={825}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="h-full w-full object-cover"
        style={{
          objectPosition,
          transform: scale ? `scale(${scale})` : undefined,
          transformOrigin: "center top",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[#86A8FF]/30 mix-blend-overlay"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[#c4b5fd]/15 mix-blend-soft-light"
      />
    </div>
  );
}
