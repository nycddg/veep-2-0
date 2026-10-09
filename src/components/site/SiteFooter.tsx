import { Link } from "@tanstack/react-router";
import wordmarkWhite from "@/assets/veep-wordmark-white.png.asset.json";
import wordmarkNavy from "@/assets/veep-wordmark-navy.png.asset.json";
import { MotionPreference } from "./MotionPreference";

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
    <footer className="v-site-chrome v-footer">
      <div className="v-container">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-12">
          <div className="col-span-2 md:col-span-4">
            <Link to="/" className="inline-flex items-center" aria-label="Veep home">
              <img src={wordmarkWhite.url} alt="" className="h-6 w-auto light:hidden" />
              <img src={wordmarkNavy.url} alt="" className="hidden h-6 w-auto light:block" />
            </Link>
            <p className="v-footer-intro">Operating partner capacity for companies and funds.</p>
            <a href="mailto:hey@veep.work" className="v-text-link">
              hey@veep.work
            </a>
          </div>
          {cols.map((col) => (
            <div key={col.title} className="min-w-0 md:col-span-2">
              <p className="text-[14px] font-medium leading-[1.5]">{col.title}</p>
              <ul className="v-footer-links mt-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      hash={link.hash}
                      activeOptions={{ exact: true, includeHash: Boolean(link.hash) }}
                      className="v-footer-link"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <MotionPreference />
        <p className="v-footer-signature">Critical work, owned.</p>
        <div className="v-footer-end">
          <p className="v-caption">
            © {new Date().getFullYear()} The Veep Group, LLC. All rights reserved.
          </p>
          <p className="v-caption">An operating partner platform.</p>
        </div>
      </div>
    </footer>
  );
}
