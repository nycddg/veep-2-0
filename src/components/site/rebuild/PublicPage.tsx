import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { BookLink } from "./BookLink";
import { Container } from "./Container";
import { Section } from "./Section";

export function PublicIntro({
  label,
  title,
  children,
  actions,
  className = "",
}: {
  label: string;
  title: ReactNode;
  children: ReactNode;
  actions?: ReactNode;
  className?: string;
}) {
  return (
    <Section pad="none" className={`ve-public-intro ${className}`}>
      <Container className="ve-container">
        <p className="ve-kicker">{label}</p>
        <div className="ve-public-opening">
          <h1>{title}</h1>
          <div className="ve-public-intro-copy">
            {children}
            {actions && <div className="ve-public-actions">{actions}</div>}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function PublicClose({
  title = (
    <>
      What needs
      <br /> to move<span className="ve-period">?</span>
    </>
  ),
  children,
  contact = false,
}: {
  title?: ReactNode;
  children: ReactNode;
  contact?: boolean;
}) {
  return (
    <Section className="ve-close">
      <Container className="ve-container ve-close-layout">
        <h2>{title}</h2>
        <div>
          <p>{children}</p>
          {contact ? (
            <Link to="/contact" className="ve-button cta-accent">
              Get in touch
            </Link>
          ) : (
            <BookLink />
          )}
        </div>
      </Container>
    </Section>
  );
}

export function Disclosure({ question, children }: { question: string; children: ReactNode }) {
  return (
    <details className="ve-disclosure">
      <summary>
        <span>{question}</span>
        <span className="ve-disclosure-mark" aria-hidden="true">
          +
        </span>
      </summary>
      <div>{children}</div>
    </details>
  );
}
