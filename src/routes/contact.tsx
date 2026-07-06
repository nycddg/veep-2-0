import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Section, CheckList } from "@/components/site/primitives";
import { PageHero } from "@/components/site/PageHero";
import { Check } from "lucide-react";

const searchSchema = z.object({ intent: z.enum(["call", "audit"]).catch("call") });

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Veep" },
      { name: "description", content: "Book a discovery call or request a Capacity Audit. A Veep operator responds within one business day." },
      { property: "og:title", content: "Contact — Veep" },
      { property: "og:description", content: "Tell us the moment. We'll match a senior operator who can start in under 10 days." },
    ],
  }),
  validateSearch: searchSchema,
  component: Page,
});

function Page() {
  const { intent } = Route.useSearch();
  const [tab, setTab] = useState<"call" | "audit">(intent);
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-12">
          <div className="max-w-3xl">
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.02] text-cream">
              What critical initiative <em className="italic text-forest">doesn't have an owner?</em>
            </h1>
            <p className="mt-6 text-lg text-stone max-w-2xl">
              Two ways in: book a 30-minute discovery call, or request an Executive Capacity Audit for your company or portfolio.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="inline-flex rounded-full border border-border p-1 bg-card">
              {[
                { id: "call", label: "Discovery call" },
                { id: "audit", label: "Capacity Audit" },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => { setTab(t.id as typeof tab); setSubmitted(false); }}
                  className={`px-4 py-2 text-sm rounded-full transition ${
                    tab === t.id ? "bg-ink text-cream" : "text-stone hover:text-cream"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <div>
              <h2 className="font-serif text-3xl text-cream">
                {tab === "call" ? "30-minute discovery call" : "Executive Capacity Audit"}
              </h2>
              <p className="mt-3 text-stone">
                {tab === "call"
                  ? "We'll diagnose the trigger, classify the urgency, and match a senior operator who can start in under 10 days."
                  : "A structured audit of leadership risk across your company or portfolio, with a recommended bench structure."}
              </p>
            </div>
            <CheckList items={
              tab === "call"
                ? ["No pitch deck", "Response within one business day", "30-day fit guarantee if you proceed"]
                : ["Portfolio-wide risk map", "CFO / COO / GTM coverage assessment", "Recommended bench structure per company"]
            } />
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-3xl border border-border bg-card p-10 text-center">
                <div className="mx-auto h-12 w-12 rounded-full bg-forest/15 grid place-items-center text-forest">
                  <Check strokeWidth={3} />
                </div>
                <h3 className="mt-6 font-serif text-2xl text-cream">Thanks — we'll be in touch.</h3>
                <p className="mt-2 text-stone text-sm">
                  A Veep partner will reach out within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="rounded-3xl border border-border bg-card p-8 grid gap-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Name" required><input required name="name" className={inputCls} /></Field>
                  <Field label="Work email" required><input required type="email" name="email" className={inputCls} /></Field>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Company"><input name="company" className={inputCls} /></Field>
                  <Field label="Role"><input name="role" className={inputCls} /></Field>
                </div>
                <Field label={tab === "call" ? "What's the biggest initiative without an owner?" : "Portfolio size or company context"}>
                  <textarea name="context" rows={5} className={inputCls} />
                </Field>
                <Field label="Timing">
                  <select name="timing" className={inputCls} defaultValue="now">
                    <option value="now">Immediate — need to start in weeks</option>
                    <option value="30-60">Inside 30–60 days</option>
                    <option value="90">Inside 90 days</option>
                    <option value="explore">Exploring</option>
                  </select>
                </Field>
                <button
                  type="submit"
                  className="mt-2 rounded-full bg-ink text-cream px-5 py-3 text-sm font-medium hover:opacity-90 transition"
                >
                  {tab === "call" ? "Book the call" : "Request the audit"}
                </button>
                <p className="text-xs text-stone">
                  By submitting you agree to be contacted by Veep about your inquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}

const inputCls =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-cream placeholder-stone-soft focus:outline-none focus:ring-2 focus:ring-forest/40 focus:border-forest";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-stone">
        {label}{required && " *"}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
