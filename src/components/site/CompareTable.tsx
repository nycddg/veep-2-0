import { Eyebrow } from "./primitives";

const cols = [
  {
    title: "Executive search",
    breaks: "Breaks down when the work must start immediately.",
    use: "Permanent hires with a clearly defined role.",
    tone: "muted",
  },
  {
    title: "Consulting",
    breaks: "Breaks down when someone has to own execution.",
    use: "Strategy, analysis, and recommendations.",
    tone: "muted",
  },
  {
    title: "Freelancers",
    breaks: "Break down when the work requires leadership.",
    use: "Task-level, executional support.",
    tone: "muted",
  },
  {
    title: "Veep",
    breaks: "For senior judgment and operating ownership — now.",
    use: "An experienced operator steps in and owns the outcome.",
    tone: "forest",
  },
] as const;

export function CompareTable() {
  return (
    <div>
      <div className="max-w-2xl">
        <Eyebrow>How Veep is different</Eyebrow>
        <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight text-ink">
          Sits in the gap between search, consulting, and freelancers.
        </h2>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cols.map((c) => (
          <div
            key={c.title}
            className={`rounded-3xl border p-6 md:p-7 flex flex-col gap-4 ${
              c.tone === "forest"
                ? "bg-forest-deep text-forest-foreground border-transparent"
                : "bg-card border-border text-ink"
            }`}
          >
            <div className={`text-xs uppercase tracking-widest ${c.tone === "forest" ? "text-forest-foreground/80" : "text-stone"}`}>
              Category
            </div>
            <div className="font-serif text-2xl leading-tight">{c.title}</div>
            <div className={`text-sm ${c.tone === "forest" ? "text-forest-foreground/85" : "text-stone"}`}>
              {c.use}
            </div>
            <div className={`text-sm border-t pt-4 mt-auto ${c.tone === "forest" ? "border-forest-foreground/20" : "border-border"}`}>
              {c.breaks}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
