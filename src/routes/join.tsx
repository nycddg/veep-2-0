import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { submitApplication } from "@/lib/wix-application.functions";
import { ogImageMeta } from "@/lib/seo";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Join Veep | Hands-On Operating Partners" },
      {
        name: "description",
        content:
          "Built teams, raised capital, or led growth under real constraints? Apply to Veep's handpicked operating partner network.",
      },
      { property: "og:title", content: "Join Veep | Hands-On Operating Partners" },
      {
        property: "og:description",
        content:
          "Built teams, raised capital, or led growth under real constraints? Apply to Veep's handpicked operating partner network.",
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
    title: "You've held the seat",
    body: "You've led as a founder, CEO, GM, or senior executive. You know what it means to answer for the outcome.",
  },
  {
    title: "You get into the work",
    body: "You can define the problem, make the call, and help build the answer. You're comfortable leading a team and doing the work it takes to deliver. Prior consulting or interim experience is useful, but it is not required.",
  },
  {
    title: "You've delivered under pressure",
    body: "Bootstrapped, investor-backed, or public: you've delivered with real constraints, competing priorities, and a clock that kept running.",
  },
  {
    title: "Your work stands up",
    body: "Strong references. Clear judgment. Follow-through people remember. Work that earns the next introduction.",
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
      const resumeType =
        resumeFile.type ||
        (resumeFile.name.toLowerCase().endsWith(".pdf")
          ? "application/pdf"
          : resumeFile.name.toLowerCase().endsWith(".docx")
            ? "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            : resumeFile.name.toLowerCase().endsWith(".doc")
              ? "application/msword"
              : resumeFile.type);
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(resumeType)) {
        throw new Error("Resume must be a PDF, DOC, or DOCX file.");
      }
      const linkedIn = String(formData.get("linkedin") ?? "");
      if (!/linkedin\.com\//i.test(linkedIn)) {
        throw new Error("Please enter a valid LinkedIn profile URL.");
      }
      const resume = {
        name: resumeFile.name,
        type: resumeType,
        data: await fileToBase64(resumeFile),
      };

      const fractional = String(formData.get("fractional") ?? "");
      await submitApplication({
        data: {
          firstName: String(formData.get("first_name") ?? ""),
          lastName: String(formData.get("last_name") ?? ""),
          email: String(formData.get("email") ?? ""),
          linkedIn: String(formData.get("linkedin") ?? ""),
          website: String(formData.get("website") ?? ""),
          role: String(formData.get("role") ?? ""),
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
        title="Your experience has more work to do."
        sub="Join a handpicked network of operating partners trusted with consequential work. Bring your judgment, get into the business, and carry the job through. If that sounds like your kind of work, apply."
        primaryLabel="Apply below"
        primaryTo="/join"
        primaryHash="apply"
        secondaryLabel="See how it works"
        secondaryTo="/how-it-works"
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
                Senior judgment. Hands-on delivery.
              </h2>
              <p className="text-stone text-base leading-relaxed max-w-md">
                Relevant experience. Sound judgment. A record of delivery. We confirm fit and availability for each job.
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
                  "We review your experience",
                  "Meet a Veep founder",
                  "References and network onboarding",
                  "Considered for relevant engagements",
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
                We respond to serious applications within one business week. Admission does not guarantee an engagement.
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
                    A Veep founder will review it and be in touch.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="glass-card rounded-[6px] p-5 sm:p-8 grid gap-5"
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
                      className={`${inputCls} file:mr-4 file:rounded-[6px] file:border-0 file:bg-cream file:px-4 file:py-1.5 file:text-ink file:text-xs file:font-medium file:cursor-pointer`}
                    />
                  </Field>

                  <details className="text-sm text-stone">
                    <summary className="cursor-pointer hover:text-cream transition list-none marker:hidden select-none inline-flex items-center min-h-11">
                      Add background details (optional)
                    </summary>
                    <div className="mt-4 grid gap-4">
                      <Field label="Personal site">
                        <input type="url" name="website" placeholder="https://" className={inputCls} />
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
                      <Field label="Anything else we should know?">
                        <textarea name="notes" rows={4} className={inputCls} />
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
  "motion-field w-full rounded-[6px] border border-white/12 bg-white/[0.03] px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/60 min-h-11";

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
      <span className="mono-label">
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
