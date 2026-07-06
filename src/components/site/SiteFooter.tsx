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
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="inline-block h-6 w-6 rounded-full bg-forest" />
              <span className="font-serif text-2xl text-ink">Veep</span>
            </Link>
            <p className="mt-4 text-sm text-stone max-w-xs">
              Senior leadership, without the full-time commitment. Operator-led. AI-powered.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-xs uppercase tracking-widest text-stone-soft">{c.title}</div>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-sm text-ink hover:text-forest transition">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-xs text-stone">
          <div>© {new Date().getFullYear()} Veep. All rights reserved.</div>
          <div className="flex gap-6">
            <span>Privacy</span>
            <span>Terms</span>
            <span>hello@veep.co</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
