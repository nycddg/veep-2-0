import { Eyebrow } from "./primitives";

type Col = {
  idx: string;
  title: string;
  use: string;
  breaks: string;
  highlight?: boolean;
};

const cols: Col[] = [
  {
    idx: "0.1",
    title: "Executive search",
    use: "Permanent hires with a clearly defined role.",
    breaks: "Breaks down when the work must start immediately.",
  },
  {
    idx: "0.2",
    title: "Consulting",
    use: "Strategy, analysis, and recommendations.",
    breaks: "Breaks down when someone has to own execution.",
  },
  {
    idx: "0.3",
    title: "Freelancers",
    use: "Task-level, executional support.",
    breaks: "Break down when the work requires leadership.",
  },
  {
    idx: "0.4",
    title: "Veep",
    use: "An experienced operator steps in and owns the outcome.",
    breaks: "For senior judgment and operating ownership — now.",
    highlight: true,
  },
];

export function CompareTable() {
  return (
    <div>
      <div className="max-w-2xl">
        <Eyebrow>How Veep is different</Eyebrow>
        <h2 className="mt-6 text-4xl md:text-5xl leading-[1.05] text-cream">
          Sits in the gap between search, consulting, and freelancers.
        </h2>
      </div>
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-white/8">
        {cols.map((c) => (
          <div
            key={c.title}
            className={`p-6 md:p-7 flex flex-col gap-5 border-b border-white/8 md:border-r ${
              c.highlight ? "bg-white/[0.03]" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] tracking-widest text-stone-soft">{c.idx}</span>
              {c.highlight && (
                <span className="font-mono text-[10px] tracking-widest text-accent-gold">
                  · VEEP
                </span>
              )}
            </div>
            <div className="text-2xl leading-tight text-cream tracking-tight">{c.title}</div>
            <div className="text-sm text-stone leading-relaxed">{c.use}</div>
            <div className="text-sm text-cream/70 border-t border-white/8 pt-4 mt-auto">
              {c.breaks}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
