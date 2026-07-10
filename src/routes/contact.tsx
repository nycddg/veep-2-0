import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { z } from "zod";
import { PageHero } from "@/components/site/PageHero";
import { Check, Loader2 } from "lucide-react";
import { submitContactInquiry } from "@/lib/wix-contact.functions";

const searchSchema = z.object({
  intent: z.string().catch("call"),
  outcome: z.string().optional(),
});

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a Discovery Call | Veep" },
      { name: "description", content: "Book a 30-minute discovery call. Response within one business day. Matched in 72 hours. Deployed in under 10 days." },
      { property: "og:title", content: "Contact — Veep" },
      { property: "og:description", content: "Tell us the moment. We'll match a senior operator who can start in under 10 days." },
      { property: "og:url", content: "https://www.veep.work/contact" },
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
  const preselected = outcome ? outcomeLabels[outcome] ?? outcome : undefined;
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const submittingRef = useRef(false);

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
    setError(null);

    const fd = new FormData(e.currentTarget);
    const parsed = contactSchema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      context: fd.get("context"),
      company: fd.get("company") ?? undefined,
      role: fd.get("role") ?? undefined,
      timing: fd.get("timing") ?? undefined,
    });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check the form and try again.");
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
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      submittingRef.current = false;
      setLoading(false);
    }
  };

  return (
    <>
      <PageHero
        eyebrow={isAudit ? "Capacity audit" : "Discovery call"}
        title={isAudit ? "Map the portfolio's executive risk." : "What critical initiative doesn't have an owner?"}
        sub={
          isAudit
            ? "A structured audit of leadership risk across your portfolio, with a recommended roster structure per company. Delivered in 2–3 weeks."
            : "30-minute call. Response within one business day. Matched in 72 hours. Deployed in under 10 days. 30-day fit guarantee."
        }
        secondaryLabel="See how it works"
        secondaryTo="/how-it-works"
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Left: promise */}
            <div className="lg:col-span-2 space-y-8">
              <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-accent">
                What happens next
              </div>
              <ul className="space-y-4">
                {(isAudit
                  ? [
                      "Portfolio-wide risk map",
                      "CFO / COO / GTM coverage assessment",
                      "Recommended roster structure per company",
                      "Emergency coverage path",
                    ]
                  : [
                      "Reply within 1 business day",
                      "30-minute diagnostic call",
                      "Operator shortlist within 72 hours",
                      "30-day fit guarantee",
                    ]
                ).map((i, idx) => (
                  <li key={i} className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-accent w-6 shrink-0 tabular-nums">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-cream/85 text-sm leading-relaxed">{i}</span>
                  </li>
                ))}
              </ul>
              {preselected && (
                <div className="rounded-2xl border border-accent/30 bg-accent/5 p-4">
                  <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-accent">
                    Outcome
                  </div>
                  <div className="mt-2 text-cream font-medium">{preselected}</div>
                </div>
              )}
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="glass-card rounded-3xl p-8 sm:p-10 text-center">
                  <div className="mx-auto h-12 w-12 rounded-full bg-accent/15 grid place-items-center text-accent">
                    <Check strokeWidth={3} />
                  </div>
                  <h3 className="mt-6 text-2xl text-cream tracking-tight">
                    Thanks — we'll be in touch.
                  </h3>
                  <p className="mt-3 text-cream/80 text-sm">
                    A Veep partner will reach out within one business day.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="glass-card rounded-3xl p-6 sm:p-8 grid gap-5"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Name" required><input required name="name" maxLength={100} autoComplete="name" className={inputCls} /></Field>
                    <Field label="Work email" required><input required type="email" name="email" maxLength={255} autoComplete="email" className={inputCls} /></Field>
                  </div>
                  <Field
                    label={isAudit ? "Portfolio size or context" : "What's the biggest initiative without an owner?"}
                    required
                  >
                    <textarea
                      required
                      name="context"
                      rows={5}
                      maxLength={2000}
                      defaultValue={preselected ? `Interested in: ${preselected}\n\n` : ""}
                      className={inputCls}
                    />
                  </Field>
                  <details className="text-sm text-cream/80">
                    <summary className="cursor-pointer hover:text-cream transition list-none marker:hidden select-none">
                      Add company, role, or timing (optional)
                    </summary>
                    <div className="mt-4 grid gap-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Field label="Company"><input name="company" maxLength={200} autoComplete="organization" className={inputCls} /></Field>
                        <Field label="Role"><input name="role" maxLength={200} autoComplete="organization-title" className={inputCls} /></Field>
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
                  {error && (
                    <p role="alert" className="text-sm text-red-400 bg-red-500/10 rounded-xl px-4 py-3">
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-2 rounded-full bg-cream text-ink px-6 py-3.5 text-sm font-medium hover:bg-cream/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background transition shadow-[0_0_60px_-10px_rgba(255,255,255,0.35)] min-h-11 disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <><Loader2 className="h-4 w-4 animate-spin" />Sending…</>
                    ) : (
                      isAudit ? "Request the audit" : "Book the call"
                    )}
                  </button>
                  <p className="text-xs text-cream/75">
                    By submitting you agree to be contacted by Veep about your inquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const inputCls =
  "w-full rounded-xl border border-white/12 bg-white/[0.03] px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/60 min-h-11";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-cream/70">
        {label}{required && " *"}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
