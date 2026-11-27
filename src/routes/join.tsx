import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { submitApplication } from "@/lib/wix-application.functions";
import { ogImageMeta } from "@/lib/seo";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Join Veep | Senior Operating Partner Network" },
      {
        name: "description",
        content:
          "Apply to join Veep's curated network of senior operating partners. Step into high-stakes mandates backed by proven playbooks, peer operators, and governed AI workflows.",
      },
      { property: "og:title", content: "Join Veep | Senior Operating Partner Network" },
      {
        property: "og:description",
        content:
          "Apply to join Veep's curated network of senior operating partners. Step into high-stakes mandates backed by proven playbooks, peer operators, and governed AI workflows.",
      },
      { property: "og:url", content: "https://www.veep.work/join" },
      ...ogImageMeta(),
    ],
    links: [{ rel: "canonical", href: "https://www.veep.work/join" }],
  }),
  component: Page,
});

const criteria: readonly { title: string; body: string }[] = [
  {
    title: "Proven executive ownership",
    body: "Prior seat as a founder, CEO, GM, CFO, COO, CRO, CMO, CTO, CPO, or People leader. You have owned real revenue, margin, or capital outcomes end-to-end.",
  },
  {
    title: "Built for live execution",
    body: "You prefer building models, closing deals, and fixing operations over management theater. Prior advisory or interim work is helpful, not required.",
  },
  {
    title: "Commercial sharpness across stages",
    body: "Bootstrapped, VC-backed, PE-backed, or family-owned, you know how to read a P&L, make tradeoffs, and build systems that survive after handoff.",
  },
  {
    title: "High standards, platform backing",
    body: "Strong references and a bias for clarity. You bring judgment and leadership; Veep brings commercial scoping, platform governance, peer specialists, and governed AI workflows.",
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
  "Series B-C",
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

function normalizeLinkedIn(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) return null;
  const withScheme = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  try {
    const url = new URL(withScheme);
    if (!/(^|\.)linkedin\.com$/i.test(url.hostname)) return null;
    if (!url.pathname || url.pathname === "/") return null;
    return url.toString();
  } catch {
    return null;
  }
}

function normalizeWebsite(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return "";
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

function Page() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const submittingRef = useRef(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submittingRef.current) return;
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const fieldErrors: Record<string, string> = {};
    const firstName = String(formData.get("first_name") ?? "").trim();
    const lastName = String(formData.get("last_name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const linkedIn = normalizeLinkedIn(String(formData.get("linkedin") ?? ""));
    const role = String(formData.get("role") ?? "").trim();
    const resumeFile = formData.get("resume") as File | null;

    if (!firstName) fieldErrors.first_name = "Please enter your first name.";
    if (!lastName) fieldErrors.last_name = "Please enter your last name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) fieldErrors.email = "Please enter a valid email.";
    if (!linkedIn) fieldErrors.linkedin = "Please enter a LinkedIn profile URL.";
    if (!role) fieldErrors.role = "Please select a role.";
    if (!resumeFile || resumeFile.size === 0) fieldErrors.resume = "Please upload a resume.";
    else if (resumeFile.size > 3 * 1024 * 1024) fieldErrors.resume = "Resume must be 3 MB or smaller. Please upload a smaller PDF, DOC, or DOCX.";

    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      const firstKey = Object.keys(fieldErrors)[0];
      const el = form.elements.namedItem(firstKey) as HTMLElement | null;
      el?.focus();
      return;
    }
    setErrors({});

    submittingRef.current = true;
    setLoading(true);

    try {
      const file = resumeFile as File;
      const resumeType =
        file.type ||
        (file.name.toLowerCase().endsWith(".pdf")
          ? "application/pdf"
          : file.name.toLowerCase().endsWith(".docx")
            ? "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            : file.name.toLowerCase().endsWith(".doc")
              ? "application/msword"
              : file.type);
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(resumeType)) {
        setErrors({ resume: "Resume must be a PDF, DOC, or DOCX file." });
        return;
      }
      const resume = {
        name: file.name,
        type: resumeType,
        data: await fileToBase64(file),
      };

      const fractional = String(formData.get("fractional") ?? "");
      await submitApplication({
        data: {
          firstName,
          lastName,
          email,
          linkedIn: linkedIn as string,
          website: normalizeWebsite(String(formData.get("website") ?? "")),
          role,
          ...(fractional === "Yes" || fractional === "No"
            ? { fractionalExperience: fractional as "Yes" | "No" }
            : {}),
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
      const raw = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      const message =
        /invalid_enum_value|fractionalExperience|Expected 'Yes'/i.test(raw)
          ? "Please pick Yes or No for operator/advisor experience under Add background details, or leave that section closed and try again."
          : raw;
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
        title="Real operating authority. Without the org-chart drag."
        sub="Veep brings together senior operators who want to build stronger, more valuable businesses from the inside. Step into defined mandates backed by Veep playbooks, peer specialists, and governed AI workflows."
        primaryLabel="Apply below"
        primaryTo="/join"
        primaryHash="apply"
        secondaryLabel="See how it works"
        secondaryTo="/"
        secondaryHash="how"
      />

      {/* Who we're looking for */}
      <section className="bg-surface-raised border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-4 space-y-5">
              <div className="eyebrow">
                Who we're looking for
              </div>
              <h2 className="font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream leading-[1.15] tracking-tight text-balance allow-wrap">
                Operators who have held the seat.
              </h2>
              <p className="text-stone text-base leading-relaxed max-w-md">
                We keep the network curated on purpose. Tell us about a job you have carried from the hard call through live delivery.
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
                    <p className="mt-2 text-stone text-base leading-relaxed">
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
      <section id="apply" className="py-14 sm:py-16 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
            <div className="lg:col-span-2 space-y-8">
              <div className="eyebrow">
                What happens next
              </div>
              <ul className="space-y-4">
                {[
                  "A Veep founder reviews every application personally",
                  "Working conversation on the mandates you fit best",
                  "Reference checks and network onboarding",
                  "Deployed into live mandates that fit your stage, business model, and track record",
                ].map((i, idx) => (
                  <li key={i} className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-accent w-6 shrink-0 tabular-nums">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-stone text-base leading-relaxed">
                      {i}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-stone-soft leading-relaxed max-w-xs">
                Network seats are selective. We reply to every serious
                application within one business week.
              </p>
            </div>

            <div className="lg:col-span-3">
              {submitted ? (
                <div className="py-8 sm:py-10 text-center">
                  <Check strokeWidth={2.5} className="mx-auto h-8 w-8 text-accent" />
                  <h3 className="mt-6 font-serif font-medium text-xl text-cream tracking-tight">
                    Application received.
                  </h3>
                  <p className="mt-3 text-stone text-sm">
                    A Veep founder will review your background and follow up directly.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="glass-card rounded-[6px] p-5 sm:p-8 grid gap-5"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="First name" required error={errors.first_name} errorId="err-first-name">
                      <input
                        required
                        name="first_name"
                        autoComplete="given-name"
                        aria-invalid={errors.first_name ? true : undefined}
                        aria-describedby={errors.first_name ? "err-first-name" : undefined}
                        className={inputCls}
                      />
                    </Field>
                    <Field label="Last name" required error={errors.last_name} errorId="err-last-name">
                      <input
                        required
                        name="last_name"
                        autoComplete="family-name"
                        aria-invalid={errors.last_name ? true : undefined}
                        aria-describedby={errors.last_name ? "err-last-name" : undefined}
                        className={inputCls}
                      />
                    </Field>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Work email" required error={errors.email} errorId="err-email">
                      <input
                        required
                        type="email"
                        name="email"
                        autoComplete="email"
                        aria-invalid={errors.email ? true : undefined}
                        aria-describedby={errors.email ? "err-email" : undefined}
                        className={inputCls}
                      />
                    </Field>
                    <Field label="LinkedIn URL" required error={errors.linkedin} errorId="err-linkedin">
                      <input
                        required
                        type="text"
                        name="linkedin"
                        inputMode="url"
                        autoComplete="url"
                        placeholder="linkedin.com/in/your-name"
                        aria-invalid={errors.linkedin ? true : undefined}
                        aria-describedby={errors.linkedin ? "err-linkedin" : undefined}
                        className={inputCls}
                      />
                    </Field>
                  </div>
                  <Field label="Highest executive role held" required error={errors.role} errorId="err-role">
                    <select
                      required
                      name="role"
                      className={inputCls}
                      defaultValue=""
                      aria-invalid={errors.role ? true : undefined}
                      aria-describedby={errors.role ? "err-role" : undefined}
                    >
                      <option value="" disabled>Select a role</option>
                      <option>CEO / Founder</option>
                      <option>President / COO</option>
                      <option>CFO</option>
                      <option>CRO / CMO</option>
                      <option>CPO / CTO</option>
                      <option>GM / SVP</option>
                      <option>Other</option>
                    </select>
                  </Field>
                  <Field label="Resume" required error={errors.resume} errorId="err-resume">
                    <input
                      required
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      aria-invalid={errors.resume ? true : undefined}
                      aria-describedby={errors.resume ? "err-resume" : undefined}
                      className={`${inputCls} file:mr-4 file:rounded-[6px] file:border-0 file:bg-cream file:px-4 file:py-1.5 file:text-ink file:text-xs file:font-medium file:cursor-pointer`}
                    />
                  </Field>

                  <details className="text-sm text-stone">
                    <summary className="cursor-pointer hover:text-cream transition list-none marker:hidden select-none inline-flex items-center gap-2 min-h-11">
                      <span aria-hidden className="text-cream/50">+</span>
                      Add background details (optional)
                    </summary>
                    <div className="mt-4 grid gap-4">
                      <Field label="Personal site">
                        <input type="text" inputMode="url" name="website" placeholder="yourname.com" className={inputCls} />
                      </Field>
                      <Field label="Experience embedding as an operator or advisor">
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
                      <Field label="Tell us about a job you carried end-to-end">
                        <textarea name="notes" rows={4} className={inputCls} placeholder="e.g. A raise, GTM reset, or turnaround you led from hard call to delivery" />
                      </Field>
                      <Field label="How did you hear about Veep?">
                        <input name="source" className={inputCls} />
                      </Field>
                    </div>
                  </details>

                  {error && (
                    <p className="text-sm text-accent-coral border-l-2 border-accent-coral/50 pl-4 py-1">
                      {error}
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
                        Submitting…
                      </>
                    ) : (
                      "Submit application"
                    )}
                  </button>
                  <p className="text-xs text-stone-soft">
                    By submitting, you agree to be contacted by Veep about your
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
  "motion-field w-full rounded-[6px] border border-white/12 bg-white/[0.03] px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/60 aria-invalid:border-accent-coral aria-invalid:ring-1 aria-invalid:ring-accent-coral/40 min-h-11";

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
      <span className="mono-label">
        {label}
        {required && " *"}
      </span>
      <div className="mt-2">{children}</div>
      {error ? (
        <p id={errorId} className="mt-1.5 text-xs text-accent-coral">
          {error}
        </p>
      ) : null}
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
      <span className="mono-label">
        {label}
      </span>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((o) => (
          <label
            key={o}
            className="inline-flex items-center gap-2 rounded-[6px] border border-white/12 px-3.5 py-1.5 min-h-11 text-xs text-cream/85 hover:border-accent/50 hover:text-cream transition cursor-pointer"
          >
            <input type="checkbox" name={name} value={o} className="accent-accent" />
            {o}
          </label>
        ))}
      </div>
    </div>
  );
}
