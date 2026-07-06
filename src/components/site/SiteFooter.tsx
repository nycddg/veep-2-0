import { Link } from "@tanstack/react-router";

const cols = [
  {
    title: "For Buyers",
    links: [
      { to: "/for-companies", label: "For Companies" },
      { to: "/for-portfolios", label: "For Portfolios" },
      { to: "/contact", label: "Book a discovery call" },
    ],
  },
  {
    title: "Services",
    links: [
      { to: "/services", label: "Overview" },
      { to: "/services/fractional-cfo", label: "Fractional C-Suite" },
      { to: "/services/interim", label: "Interim coverage" },
      { to: "/services/executive-bench", label: "Executive Bench" },
      { to: "/services/ai-operators", label: "AI-powered operators" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/operators", label: "Operators" },
      { to: "/partners", label: "Partners" },
      { to: "/insights", label: "Insights" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-background text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-accent-gold" />
              <span className="text-[15px] font-medium tracking-tight text-cream">Veep</span>
              <span className="font-mono text-[10px] tracking-widest text-stone-soft ml-1">™</span>
            </Link>
            <p className="mt-4 text-sm text-stone max-w-xs">
              Senior leadership, without the full-time commitment. Operator-led. AI-powered.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="font-mono text-[10px] uppercase tracking-widest text-stone-soft">
                / {c.title}
              </div>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-sm text-cream/85 hover:text-cream transition">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-6 border-t border-white/8 flex flex-col md:flex-row justify-between gap-4 font-mono text-[11px] text-stone-soft tracking-widest">
          <div>© {new Date().getFullYear()} VEEP · ALL RIGHTS RESERVED</div>
          <div className="flex gap-6">
            <span>PRIVACY</span>
            <span>TERMS</span>
            <span>HELLO@VEEP.CO</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
