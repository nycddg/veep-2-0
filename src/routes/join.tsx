import { FormField as Field } from "@/components/site/rebuild/FormField";
import { Button } from "@/components/site/system/Controls";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { PublicIntro } from "@/components/site/rebuild/PublicPage";
import { Container } from "@/components/site/rebuild/Container";
import { Section } from "@/components/site/rebuild/Section";
import { TextLink } from "@/components/site/rebuild/TextLink";
import { spotlightOperators } from "@/lib/spotlight-operators";
import { submitApplication } from "@/lib/wix-application.functions";
import { ogImageMeta } from "@/lib/seo";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Join Veep | Operator Network" },
      {
        name: "description",
        content:
          "Apply to join Veep's network of senior operators. Bring your experience to critical company and portfolio mandates.",
      },
      { property: "og:title", content: "Join Veep — Operator roster" },
      {
        property: "og:description",
        content: "Senior operators who embed, build, and deliver. Apply to the roster.",
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
    title: "Senior operating experience",
    body: "Prior experience as a founder, CEO, GM, or C-suite / SVP leader. You’ve owned decisions, teams, and delivery.",
  },
  {
    title: "Built for high impact",
    body: "You want to lead meaningful initiatives and stay close to execution. Prior consulting or interim experience is a plus, but not required.",
  },
  {
    title: "Track record in fast-paced environments",
    body: "Experience in bootstrapped, investor-backed, or public companies. You’ve delivered with real constraints and competing priorities.",
  },
  {
    title: "References and standards to match",
    body: "Strong references, clear communication, and care for the work you leave behind. You’re comfortable being accountable for delivery.",
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
      const message = /invalid_enum_value|fractionalExperience|Expected 'Yes'/i.test(raw)
        ? "Please pick Yes or No for operator/advisor experience under Add background details, or leave that section closed and try again."
        : raw;
      setError(message);
    } finally {
      submittingRef.current = false;
      setLoading(false);
    }
  };

  return (
    <div className="rebuild ve-editorial ve-public ve-join">
      <PublicIntro
        label="Join Veep"
        title={
          <>
            You’ve done
            <br /> the work.
            <br /> <span>Own what’s next.</span>
          </>
        }
        actions={
          <>
            <Link to="/join" hash="apply" className="ve-button cta-accent">
              Apply to join Veep
            </Link>
            <TextLink to="/for-companies" hash="how">
              How we work <span aria-hidden="true">↗</span>
            </TextLink>
          </>
        }
      >
        <p>
          Bring your experience to critical work for companies and funds. Veep defines the mandate
          and assembles the team. You bring the judgment and hands-on leadership to move it forward.
        </p>
      </PublicIntro>
      <Section motion="portraits" className="ve-join-criteria">
        <Container className="ve-container">
          <div className="ve-section-opening">
            <h2 className="ve-title">
              Experience you can
              <br /> put to work.
            </h2>
            <p className="ve-body">
              You’ve held the seat, owned the decisions, and delivered under real constraints. Bring
              that track record to the next mandate.
            </p>
          </div>
          <div className="ve-join-portraits" aria-label="Veep operating partners">
            {[spotlightOperators[1], spotlightOperators[3], spotlightOperators[0]].map((person) => (
              <figure key={person.name}>
                <img
                  src={person.photoUrl}
                  alt=""
                  width="330"
                  height="410"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>
                  {person.name}
                  <span>{person.role.replace(" Operating Partner", "")}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="ve-criteria-grid">
            {criteria.map((item, i) => (
              <article key={item.title}>
                <span className="ve-kicker">0{i + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <Section id="apply" className="ve-application-section">
        <Container className="ve-container ve-form-layout">
          <aside className="ve-form-aside">
            <p className="ve-kicker">Apply to join Veep</p>
            <h2 className="ve-title">
              Tell us about
              <br /> your work.
            </h2>
            <p>
              Start with your background and the responsibilities you’ve owned. We’ll take it from
              there.
            </p>
            <ol className="ve-next-steps">
              {[
                "We review your application",
                "An intro conversation with a Veep founder",
                "References and roster onboarding",
                "Consideration for relevant mandates",
              ].map((item, i) => (
                <li key={item}>
                  <span>0{i + 1}</span>
                  <p>{item}</p>
                </li>
              ))}
            </ol>
            <p className="ve-small-note">
              We review every application personally and respond to serious applications within one
              business week.
            </p>
          </aside>
          <div className="ve-form-sheet v-paper">
            <div className="ve-form-heading">
              <p className="ve-kicker">Operator application</p>
              <h3>Your experience.</h3>
              <p>Required fields are marked with an asterisk.</p>
            </div>
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
              <form onSubmit={handleSubmit} className="ve-form grid gap-5">
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
                    <input
                      required
                      type="url"
                      name="linkedin"
                      placeholder="https://"
                      className={inputCls}
                    />
                  </Field>
                </div>
                <Field label="Highest executive role held" required>
                  <select required name="role" className={inputCls} defaultValue="">
                    <option value="" disabled>
                      Select a role…
                    </option>
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
                      <input
                        type="url"
                        name="website"
                        placeholder="https://"
                        className={inputCls}
                      />
                    </Field>
                    <Field label="Experience embedding as an operator or advisor">
                      <div className="flex gap-4 pt-1">
                        {["Yes", "No"].map((v) => (
                          <label
                            key={v}
                            className="inline-flex items-center gap-2 text-cream/85 text-sm"
                          >
                            <input
                              type="radio"
                              name="fractional"
                              value={v}
                              className="accent-accent"
                            />
                            {v}
                          </label>
                        ))}
                      </div>
                    </Field>
                    <CheckboxGroup
                      name="company_types"
                      label="Company types you've worked with"
                      options={companyTypes}
                    />
                    <CheckboxGroup
                      name="growth_stages"
                      label="Growth stages you've worked with"
                      options={growthStages}
                    />
                    <CheckboxGroup
                      name="functions"
                      label="Functional expertise"
                      options={functions}
                    />
                    <Field label="Industry experience">
                      <input
                        name="industries"
                        className={inputCls}
                        placeholder="e.g. SaaS, fintech, healthcare"
                      />
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

                <Button type="submit" disabled={loading} className="ve-form-submit">
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Submitting…
                    </>
                  ) : (
                    "Submit application"
                  )}
                </Button>
                <p className="text-xs text-stone-soft">
                  By submitting you agree to be contacted by Veep about your application.
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
      <span className="ve-field-label">{label}</span>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((o) => (
          <label key={o} className="ve-choice">
            <input type="checkbox" name={name} value={o} className="accent-accent" />
            {o}
          </label>
        ))}
      </div>
    </div>
  );
}
