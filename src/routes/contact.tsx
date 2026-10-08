import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import { PublicIntro } from "@/components/site/rebuild/PublicPage";
import { Container } from "@/components/site/rebuild/Container";
import { Section } from "@/components/site/rebuild/Section";
import { Check, Loader2 } from "lucide-react";
import { submitContactInquiry } from "@/lib/wix-contact.functions";
import { ogImageMeta } from "@/lib/seo";

const searchSchema = z.object({
  // Optional so the canonical /contact URL does not 307-redirect to add a
  // default search param. Absent intent is treated as "call".
  intent: z.string().optional(),
  outcome: z.string().optional(),
});

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Veep" },
      {
        name: "description",
        content:
          "Tell Veep about your company or portfolio priorities. We define the work, assemble the right operating capacity, and own delivery. Response within one business day.",
      },
      { property: "og:title", content: "Contact | Veep" },
      {
        property: "og:description",
        content:
          "Tell us about the critical work that needs an owner. Start with the priority, urgency, and outcome.",
      },
      { property: "og:url", content: "https://www.veep.work/contact" },
      ...ogImageMeta(),
    ],
    links: [{ rel: "canonical", href: "https://www.veep.work/contact" }],
  }),
  validateSearch: searchSchema,
  component: Page,
});

const outcomeLabels: Record<string, string> = {
  "close-the-raise": "Close the raise",
  "fix-the-forecast": "Fix the forecast",
  "integrate-the-acquisition": "Integrate the acquisition",
  "unblock-gtm": "Unblock GTM",
  "ship-the-platform": "Ship the platform",
  "cover-the-seat": "Cover the seat",
  "prep-for-exit": "Prep for exit",
};

function Page() {
  const { intent, outcome } = Route.useSearch();
  const isAudit = intent === "audit";
  const preselected = outcome ? (outcomeLabels[outcome] ?? outcome) : undefined;
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const submittingRef = useRef(false);
  const successHeadingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (submitted) successHeadingRef.current?.focus();
  }, [submitted]);

  const contactSchema = z.object({
    name: z.string().trim().min(1, "Please enter your name.").max(100),
    email: z.string().trim().email("Please enter a valid email.").max(255),
    context: z.string().trim().min(1, "Please describe the initiative.").max(2000),
    company: z.string().trim().max(200).optional(),
    role: z.string().trim().max(200).optional(),
    timing: z.string().trim().max(50).optional(),
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submittingRef.current) return;
    setErrors({});
    setSubmitError(null);

    const fd = new FormData(e.currentTarget);
    // Honeypot: real users leave this blank. Bots fill every field.
    if ((fd.get("company_website") as string)?.trim()) {
      setSubmitted(true);
      return;
    }
    const parsed = contactSchema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      context: fd.get("context"),
      company: fd.get("company") ?? undefined,
      role: fd.get("role") ?? undefined,
      timing: fd.get("timing") ?? undefined,
    });
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "form");
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      // Focus the first invalid field for keyboard/screen-reader users.
      const firstKey = Object.keys(fieldErrors)[0];
      if (firstKey) {
        const el = e.currentTarget.elements.namedItem(firstKey) as HTMLElement | null;
        el?.focus();
      }
      return;
    }

    submittingRef.current = true;
    setLoading(true);
    try {
      await submitContactInquiry({
        data: {
          name: parsed.data.name,
          email: parsed.data.email,
          message: parsed.data.context,
          company: parsed.data.company ?? "",
          role: parsed.data.role ?? "",
          timing: parsed.data.timing ?? "",
          intent: isAudit ? "audit" : "call",
          outcome: preselected ?? "",
        },
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Contact form submission failed:", err);
      setSubmitError(
        "Something went wrong sending your message. Please email hey@veep.work or try again.",
      );
    } finally {
      submittingRef.current = false;
      setLoading(false);
    }
  };

  return (
    <div className="rebuild ve-editorial ve-public ve-contact">
      <PublicIntro
        label={isAudit ? "Portfolio Capacity Audit" : "Contact Veep"}
        title={
          isAudit ? (
            <>
              See what the
              <br /> portfolio
              <br /> <span>needs next.</span>
            </>
          ) : (
            <>
              Tell us what
              <br /> <span>needs to move.</span>
            </>
          )
        }
        actions={
          <a href="#contact-form" className="ve-button cta-accent">
            {isAudit ? "Request an audit" : "Send an inquiry"}
          </a>
        }
      >
        <p>
          {isAudit
            ? "Over 2–3 weeks, we map current priorities and likely needs over the next 6–12 months. Start with the companies, the upcoming moments, and the work that needs senior ownership."
            : "Bring the priority, the urgency, and what a good outcome would look like. We’ll help clarify the work, the operating capacity it needs, and whether Veep is the right fit."}
        </p>
        <p className="ve-intro-note">Response within one business day.</p>
      </PublicIntro>
      <Section id="contact-form" className="ve-inquiry-section">
        <Container className="ve-container ve-form-layout">
          <aside className="ve-form-aside">
            <p className="ve-kicker">{isAudit ? "What the audit covers" : "What happens next"}</p>
            <h2 className="ve-title">
              {isAudit ? (
                <>
                  A view across
                  <br /> the portfolio.
                </>
              ) : (
                <>
                  A conversation
                  <br /> about the work.
                </>
              )}
            </h2>
            <ol className="ve-next-steps">
              {(isAudit
                ? [
                    "Company priorities and operating capacity gaps",
                    "Upcoming transactions and leadership needs",
                    "Recommended coverage for likely mandates",
                  ]
                : [
                    "A reply within one business day",
                    "A 30-minute intro call",
                    "An agreed scope and the capacity it needs",
                  ]
              ).map((item, i) => (
                <li key={item}>
                  <span>0{i + 1}</span>
                  <p>{item}</p>
                </li>
              ))}
            </ol>
            {!isAudit && (
              <p className="ve-small-note">
                Operating engagements are scoped in 72 hours and started in under 10 days. These are
                engagement timings, not completion promises.
              </p>
            )}
            {preselected && (
              <div className="ve-inquiry-context">
                <p className="ve-kicker">Outcome</p>
                <p>{preselected}</p>
              </div>
            )}
          </aside>
          <div className="ve-form-sheet">
            <div className="ve-form-heading">
              <p className="ve-kicker">{isAudit ? "Audit inquiry" : "Your inquiry"}</p>
              <h3>Start here.</h3>
              <p>Required fields are marked with an asterisk.</p>
            </div>
            {submitted ? (
              <div className="py-8 sm:py-10 text-center" role="status" aria-live="polite">
                <Check strokeWidth={2.5} className="mx-auto h-8 w-8 text-accent" />
                <h3
                  ref={successHeadingRef}
                  tabIndex={-1}
                  className="mt-6 font-serif font-medium text-xl text-cream tracking-tight focus:outline-none"
                >
                  Thanks. We’ll be in touch.
                </h3>
                <p className="mt-3 text-cream/80 text-sm">
                  A Veep partner will reach out within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-describedby={submitError ? "contact-form-error" : undefined}
                className="ve-form grid gap-5"
              >
                {/* Honeypot — hidden from users and screen readers */}
                <div aria-hidden="true" className="hidden">
                  <label>
                    Company website
                    <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Name" required error={errors.name} errorId="err-name">
                    <input
                      required
                      name="name"
                      maxLength={100}
                      autoComplete="name"
                      aria-invalid={errors.name ? true : undefined}
                      aria-describedby={errors.name ? "err-name" : undefined}
                      className={inputCls}
                    />
                  </Field>
                  <Field label="Work email" required error={errors.email} errorId="err-email">
                    <input
                      required
                      type="email"
                      name="email"
                      maxLength={255}
                      autoComplete="email"
                      aria-invalid={errors.email ? true : undefined}
                      aria-describedby={errors.email ? "err-email" : undefined}
                      className={inputCls}
                    />
                  </Field>
                </div>
                <Field
                  label={
                    isAudit
                      ? "Portfolio size or context"
                      : "What's the biggest initiative without an owner?"
                  }
                  required
                  error={errors.context}
                  errorId="err-context"
                >
                  <textarea
                    required
                    name="context"
                    rows={5}
                    maxLength={2000}
                    defaultValue={preselected ? `Interested in: ${preselected}\n\n` : ""}
                    aria-invalid={errors.context ? true : undefined}
                    aria-describedby={errors.context ? "err-context" : undefined}
                    className={inputCls}
                  />
                </Field>
                <details className="text-sm text-cream/80">
                  <summary className="cursor-pointer hover:text-cream transition list-none marker:hidden select-none">
                    Add company, role, or timing (optional)
                  </summary>
                  <div className="mt-4 grid gap-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Field label="Company">
                        <input
                          name="company"
                          maxLength={200}
                          autoComplete="organization"
                          className={inputCls}
                        />
                      </Field>
                      <Field label="Role">
                        <input
                          name="role"
                          maxLength={200}
                          autoComplete="organization-title"
                          className={inputCls}
                        />
                      </Field>
                    </div>
                    <Field label="Timing">
                      <select name="timing" className={inputCls} defaultValue="now">
                        <option value="now">Immediate — start in weeks</option>
                        <option value="30-60">Inside 30–60 days</option>
                        <option value="90">Inside 90 days</option>
                        <option value="explore">Exploring</option>
                      </select>
                    </Field>
                  </div>
                </details>
                {submitError && (
                  <p
                    id="contact-form-error"
                    role="alert"
                    className="text-sm text-accent-coral bg-accent-coral/10 rounded-[6px] px-4 py-3"
                  >
                    {submitError}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="motion-cta cta-accent mt-2 rounded-[6px] whitespace-nowrap px-7 py-3.5 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background min-h-11 disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : isAudit ? (
                    "Request the audit"
                  ) : (
                    "Send inquiry"
                  )}
                </button>
                <p className="text-xs text-stone-soft">
                  By submitting you agree to be contacted by Veep about your inquiry.
                </p>
              </form>
            )}
          </div>
        </Container>
      </Section>
    </div>
  );
}

const inputCls = "ve-input";

function Field({
  label,
  required,
  error,
  errorId,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  errorId?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="ve-field-label">
        {label}
        {required && " *"}
      </span>
      <div className="mt-2">{children}</div>
      {error && (
        <p id={errorId} className="mt-1.5 text-xs text-accent-coral">
          {error}
        </p>
      )}
    </label>
  );
}
