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

/**
 * CompareTable — rendered inside the one light section on the site.
 * Colors are locked to the light palette (ink on cream). Do not read
 * dark tokens here.
 */
export function CompareTable() {
  return (
    <div>
      <div className="max-w-2xl">
        <div className="font-mono text-[11px] tracking-widest uppercase text-ink/50">
          / How Veep is different
        </div>
        <h2 className="mt-6 text-4xl md:text-5xl leading-[1.05] text-ink tracking-tight">
          Sits in the gap between search, consulting, and freelancers.
        </h2>
      </div>
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-ink/10">
        {cols.map((c) => (
          <div
            key={c.title}
            className={`p-6 md:p-7 flex flex-col gap-5 border-b border-ink/10 md:border-r md:border-r-ink/10 ${
              c.highlight ? "bg-ink/[0.04]" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] tracking-widest text-ink/50">{c.idx}</span>
              {c.highlight && (
                <span
                  className="font-mono text-[10px] tracking-widest bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #56C7C0, #F2A47C 60%, #EE6A4D)",
                  }}
                >
                  · VEEP
                </span>
              )}
            </div>
            <div className="text-2xl leading-tight text-ink tracking-tight">{c.title}</div>
            <div className="text-sm text-ink/60 leading-relaxed">{c.use}</div>
            <div className="text-sm text-ink/75 border-t border-ink/10 pt-4 mt-auto">
              {c.breaks}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
