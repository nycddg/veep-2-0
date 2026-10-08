import { Link } from "@tanstack/react-router";
import wordmarkWhite from "@/assets/veep-wordmark-white.png.asset.json";
import wordmarkNavy from "@/assets/veep-wordmark-navy.png.asset.json";

type FooterLink = {
  label: string;
  to:
    | "/for-companies"
    | "/for-portfolios"
    | "/pricing"
    | "/about"
    | "/faq"
    | "/contact"
    | "/join"
    | "/privacy"
    | "/terms";
  hash?: string;
};

const cols: readonly { title: string; links: readonly FooterLink[] }[] = [
  {
    title: "Explore",
    links: [
      { to: "/for-companies", label: "For Companies" },
      { to: "/for-portfolios", label: "For Funds" },
      { to: "/pricing", label: "Pricing" },
      { to: "/about", label: "About" },
    ],
  },
  {
    title: "Details",
    links: [
      { to: "/for-companies", hash: "how", label: "How delivery works" },
      { to: "/for-companies", hash: "proof", label: "Selected work" },
      { to: "/faq", label: "FAQ" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Operators",
    links: [{ to: "/join", label: "Apply to join Veep" }],
  },
  {
    title: "Legal",
    links: [
      { to: "/privacy", label: "Privacy Policy" },
      { to: "/terms", label: "Terms of Service" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="site-chrome ve-site-footer border-t border-[var(--rb-rule)]">
      <div className="ve-footer-inner mx-auto w-full max-w-[1200px] px-5 py-14 md:px-6 md:py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-12">
          <div className="col-span-2 md:col-span-4">
            <Link to="/" className="inline-flex items-center" aria-label="Veep home">
              <img src={wordmarkWhite.url} alt="" className="h-6 w-auto light:hidden" />
              <img src={wordmarkNavy.url} alt="" className="hidden h-6 w-auto light:block" />
            </Link>
            <p className="rb-support mt-5 max-w-[36ch] text-[var(--rb-text)]">
              Operating partner capacity for companies and funds.
            </p>
            <a
              href="mailto:hey@veep.work"
              className="rb-link mt-6 inline-flex min-h-11 items-center"
            >
              hey@veep.work
            </a>
          </div>
          {cols.map((col) => (
            <div key={col.title} className="min-w-0 md:col-span-2">
              <p className="text-[14px] font-medium leading-[1.5]">{col.title}</p>
              <ul className="mt-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      hash={link.hash}
                      activeOptions={{ exact: true, includeHash: Boolean(link.hash) }}
                      className="inline-flex min-h-11 items-center text-[16px] leading-[1.4] text-[var(--rb-text)] underline decoration-[var(--rb-rule)] underline-offset-4 hover:decoration-[var(--rb-link)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="ve-footer-signature">Critical work, owned.</p>
        <div className="mt-8 flex flex-col justify-between gap-3 border-t border-[var(--rb-rule)] pt-6 md:mt-8 md:flex-row md:items-center">
          <p className="rb-caption text-[var(--rb-muted)]">
            © {new Date().getFullYear()} The Veep Group, LLC. All rights reserved.
          </p>
          <p className="rb-caption text-[var(--rb-muted)]">An operating partner platform.</p>
        </div>
      </div>
    </footer>
  );
}
