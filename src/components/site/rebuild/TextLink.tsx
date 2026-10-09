import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type Dest =
  | "/"
  | "/for-companies"
  | "/for-portfolios"
  | "/pricing"
  | "/faq"
  | "/join"
  | "/about"
  | "/contact";

export function TextLink({
  to,
  hash,
  search,
  children,
  className = "",
}: {
  to?: Dest;
  hash?: string;
  search?: { intent: string };
  children: ReactNode;
  className?: string;
}) {
  const classNames = `rb-link v-text-link ${className}`;
  if (!to) {
    return (
      <a href={hash ? `#${hash}` : "#"} className={classNames}>
        {children}
      </a>
    );
  }
  if (to === "/contact") {
    return (
      <Link to="/contact" search={search ?? {}} hash={hash} className={classNames}>
        {children}
      </Link>
    );
  }
  return (
    <Link to={to} hash={hash} className={classNames}>
      {children}
    </Link>
  );
}
