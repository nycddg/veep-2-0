import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { submitApplication } from "@/lib/wix-application.functions";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Join Veep | Operator Network" },
      {
        name: "description",
        content:
          "Apply to Veep's roster of senior operators. Interim, fractional, and advisory engagements with high-growth companies. Matched in 72 hours. Deployed in under 10 days.",
      },
      { property: "og:title", content: "Join Veep — Operator roster" },
      {
        property: "og:description",
        content:
          "Senior operators who embed, build, and deliver. Apply to the roster.",
      },
      { property: "og:url", content: "https://www.veep.work/join" },
    ],
    links: [{ rel: "canonical", href: "https://www.veep.work/join" }],
  }),
  component: Page,
});

const criteria: readonly { title: string; body: string }[] = [
  {
    title: "Senior operating experience",
    body: "Prior seat as a founder, CEO, GM, or C-suite / SVP leader. You've owned outcomes end-to-end, not advised from the sidelines.",
  },
  {
    title: "Built for high impact",
    body: "You're motivated by hands-on work, not management. You want to work with high-growth companies, own meaningful initiatives, win, and move on to the next challenge.\u00a0Prior consulting or fractional experience is a plus, but not required.",
  },
  {
    title: "Track record in fast-paced environments",
    body: "Bootstrapped, VC-backed, PE-backed, public — you've delivered under pressure with real constraints and short runway.",
  },
  {
    title: "References and standards to match",
    body: "Strong references, a bias to action, and a commitment to the craft. The roster stays small on purpose.",
  },
];

const companyTypes = [
  "Bootstrapped",
  "VC-backed",
  "PE-backed",
  "Private",
  "Public",
  "Family-owned",
  "Non-profit / NGO",
];

const growthStages = [
  "Seed",
  "Series A",
  "Series B–C",
  "Series D+",
  "IPO or equivalent",
  "Buyout",
  "Other",
];

const functions = [
  "CEO / GM",
  "Strategy & Operations",
  "Finance",
  "People",
  "Go-to-Market",
  "Sales, Marketing & Revenue",
  "Product",
  "Operations",
  "Other",
];

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      const base64 = result.split(",")[1] ?? "";
      resolve(base64);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function getAllValues(formData: FormData, name: string): string[] {
  return formData.getAll(name).map((v) => String(v));
}

function Page() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const submittingRef = useRef(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submittingRef.current) return;
    submittingRef.current = true;
    setLoading(true);
    setError(null);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      const resumeFile = formData.get("resume") as File;

      if (!resumeFile || resumeFile.size === 0) {
        throw new Error("Please upload a resume.");
      }
      if (resumeFile.size > 10 * 1024 * 1024) {
        throw new Error("Resume must be smaller than 10 MB.");
      }
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(resumeFile.type)) {
        throw new Error("Resume must be a PDF, DOC, or DOCX file.");
      }

      const linkedIn = String(formData.get("linkedin") ?? "");
      if (!/linkedin\.com\//i.test(linkedIn)) {
        throw new Error("Please enter a valid LinkedIn profile URL.");
      }

      const resume = {
        name: resumeFile.name,
        type: resumeFile.type,
        data: await fileToBase64(resumeFile),
      };

      await submitApplication({
        data: {
          firstName: String(formData.get("first_name") ?? ""),
          lastName: String(formData.get("last_name") ?? ""),
          email: String(formData.get("email") ?? ""),
          linkedIn: String(formData.get("linkedin") ?? ""),
          website: String(formData.get("website") ?? ""),
          role: String(formData.get("role") ?? ""),
          fractionalExperience: String(formData.get("fractional") ?? ""),
          companyTypes: getAllValues(formData, "company_types"),
          growthStages: getAllValues(formData, "growth_stages"),
          functions: getAllValues(formData, "functions"),
          industries: String(formData.get("industries") ?? ""),
          notes: String(formData.get("notes") ?? ""),
          source: String(formData.get("source") ?? ""),
          resume,
        },
      });

      setSubmitted(true);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setError(message);
    } finally {
      submittingRef.current = false;
      setLoading(false);
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Join Veep"
        title="An invite-only network on call for the work that cannot wait."
        sub="Veep represents a small roster of senior operators who embed, build, and deliver. If you're ready to own the work that can't wait for high-growth companies, we want to meet you."
        primaryLabel="Apply below"
        secondaryLabel="See how it works"
        secondaryTo="/how-it-works"
      />

      {/* Who we're looking for */}
      <section className="bg-surface-raised border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-4 space-y-5">
              <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-accent font-mono">
                Who we're looking for
              </div>
              <h2 className="text-3xl md:text-4xl text-cream leading-[1.1] tracking-tight allow-wrap">
                A curated roster of business builders.
              </h2>
              <p className="text-cream/80 text-sm leading-relaxed max-w-md">
                We stay small on purpose. Every operator on the roster has run
                the seat before and can start inside two weeks.
              </p>
            </div>
            <ul className="lg:col-span-8">
              {criteria.map((c, idx) => (
                <li
                  key={c.title}
                  className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 border-t border-white/10 py-6 first:border-t-0 first:pt-0"
                >
                  <span className="font-mono text-sm text-accent tabular-nums pt-1">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="text-cream text-lg tracking-tight">
                      {c.title}
                    </div>
                    <p className="mt-2 text-cream/75 text-sm leading-relaxed">
                      {c.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
            <div className="lg:col-span-2 space-y-8">
              <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-accent font-mono">
                What happens next
              </div>
              <ul className="space-y-4">
                {[
                  "We review every application personally",
                  "Intro conversation with a Veep founder",
                  "References and roster onboarding",
                  "Matched to engagements as they come in",
                ].map((i, idx) => (
                  <li key={i} className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-accent w-6 shrink-0 tabular-nums">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-cream/85 text-sm leading-relaxed">
                      {i}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-cream/75 leading-relaxed max-w-xs">
                Roster spots are limited. We respond to every serious
                application within one business week.
              </p>
            </div>

            <div className="lg:col-span-3">
              {submitted ? (
                <div className="glass-card rounded-3xl p-8 sm:p-10 text-center">
                  <div className="mx-auto h-12 w-12 rounded-full bg-accent/15 grid place-items-center text-accent">
                    <Check strokeWidth={3} />
                  </div>
                  <h3 className="mt-6 text-2xl text-cream tracking-tight">
                    Application received.
                  </h3>
                  <p className="mt-3 text-cream/80 text-sm">
                    A Veep founder will review it and be in touch.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="glass-card rounded-3xl p-6 sm:p-8 grid gap-5"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="First name" required>
                      <input required name="first_name" className={inputCls} />
                    </Field>
                    <Field label="Last name" required>
                      <input required name="last_name" className={inputCls} />
                    </Field>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Work email" required>
                      <input required type="email" name="email" className={inputCls} />
                    </Field>
                    <Field label="LinkedIn URL" required>
                      <input required type="url" name="linkedin" placeholder="https://" className={inputCls} />
                    </Field>
                  </div>
                  <Field label="Highest executive role held" required>
                    <select required name="role" className={inputCls} defaultValue="">
                      <option value="" disabled>Select a role…</option>
                      <option>CEO / Founder</option>
                      <option>President / COO</option>
                      <option>CFO</option>
                      <option>CRO / CMO</option>
                      <option>CPO / CTO</option>
                      <option>GM / SVP</option>
                      <option>Other</option>
                    </select>
                  </Field>
                  <Field label="Resume" required>
                    <input
                      required
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      className={`${inputCls} file:mr-4 file:rounded-full file:border-0 file:bg-cream file:px-4 file:py-1.5 file:text-ink file:text-xs file:font-medium file:cursor-pointer`}
                    />
                  </Field>

                  <details className="text-sm text-cream/80">
                    <summary className="cursor-pointer hover:text-cream transition list-none marker:hidden select-none">
                      Add background details (optional)
                    </summary>
                    <div className="mt-4 grid gap-4">
                      <Field label="Personal site">
                        <input type="url" name="website" placeholder="https://" className={inputCls} />
                      </Field>
                      <Field label="Experience with fractional or interim work">
                        <div className="flex gap-4 pt-1">
                          {["Yes", "No"].map((v) => (
                            <label key={v} className="inline-flex items-center gap-2 text-cream/85 text-sm">
                              <input type="radio" name="fractional" value={v} className="accent-accent" />
                              {v}
                            </label>
                          ))}
                        </div>
                      </Field>
                      <CheckboxGroup name="company_types" label="Company types you've worked with" options={companyTypes} />
                      <CheckboxGroup name="growth_stages" label="Growth stages you've worked with" options={growthStages} />
                      <CheckboxGroup name="functions" label="Functional expertise" options={functions} />
                      <Field label="Industry experience">
                        <input name="industries" className={inputCls} placeholder="e.g. SaaS, fintech, healthcare" />
                      </Field>
                      <Field label="Anything else we should know?">
                        <textarea name="notes" rows={4} className={inputCls} />
                      </Field>
                      <Field label="How did you hear about Veep?">
                        <input name="source" className={inputCls} />
                      </Field>
                    </div>
                  </details>

                  {error && (
                    <p className="text-sm text-red-400 bg-red-500/10 rounded-xl px-4 py-3">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-2 rounded-full bg-cream text-ink px-6 py-3.5 text-sm font-medium hover:bg-cream/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background transition shadow-[0_0_60px_-10px_rgba(255,255,255,0.35)] min-h-11 disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Submitting…
                      </>
                    ) : (
                      "Submit application"
                    )}
                  </button>
                  <p className="text-xs text-cream/75">
                    By submitting you agree to be contacted by Veep about your
                    application.
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

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-cream/70">
        {label}
        {required && " *"}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

function CheckboxGroup({
  name,
  label,
  options,
}: {
  name: string;
  label: string;
  options: readonly string[];
}) {
  return (
    <div>
      <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-cream/70">
        {label}
      </span>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((o) => (
          <label
            key={o}
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-3 py-1.5 text-xs text-cream/85 hover:border-accent/50 hover:text-cream transition cursor-pointer"
          >
            <input type="checkbox" name={name} value={o} className="accent-accent" />
            {o}
          </label>
        ))}
      </div>
    </div>
  );
}
