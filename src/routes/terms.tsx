import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { FooterCTA } from "@/components/site/FooterCTA";

type Block =
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] };

type Section = { n: string; title: string; blocks: Block[] };

const sections: Section[] = [
  {
    n: "01",
    title: "Overview of our service",
    blocks: [
      { kind: "p", text: "Veep is a managed marketplace platform (\"Platform\") that connects businesses (each, a \"Client\") with vetted consultants (each, an \"Operating Partner\") for fractional, advisory, or project-based executive services (\"Project Services\")." },
      { kind: "p", text: "Depending on how you use the Platform, you may enter into additional agreements with Veep:" },
      { kind: "ul", items: [
        "Consultant Contract (if you are an Operating Partner)",
        "Business Contract (if you are a Client)",
      ] },
      { kind: "p", text: "If there is a conflict between these Terms and a specific contract, the applicable contract will control." },
    ],
  },
  {
    n: "02",
    title: "Acceptance of terms",
    blocks: [
      { kind: "p", text: "By using the Service, creating an account, submitting a form, or entering into a separate contract with Veep, you agree to these Terms. You confirm that:" },
      { kind: "ul", items: [
        "You are legally able to enter into this agreement.",
        "If you're using the Service on behalf of a company, you have authority to bind that company to these Terms.",
      ] },
    ],
  },
  {
    n: "03",
    title: "Updates to these terms",
    blocks: [
      { kind: "p", text: "We may update these Terms at any time. Changes will be posted on the Website, and your continued use of the Service after changes are made constitutes your acceptance of the revised Terms." },
    ],
  },
  {
    n: "05",
    title: "Jurisdictional compliance",
    blocks: [
      { kind: "p", text: "You agree to use the Service in accordance with all applicable laws. By using the Service, you represent that you are not located in a restricted jurisdiction, and you are not listed on any U.S. government list of prohibited parties." },
    ],
  },
  {
    n: "06",
    title: "Account responsibility & platform monitoring",
    blocks: [
      { kind: "p", text: "If you create a Veep account, you are responsible for maintaining the confidentiality of your credentials. We reserve the right to monitor, suspend, or terminate your access to the Service at any time. We may edit or remove content and cooperate with law enforcement where necessary." },
    ],
  },
  {
    n: "07",
    title: "Our intellectual property",
    blocks: [
      { kind: "p", text: "All content, software, and materials provided through the Service are owned or licensed by Veep and protected under intellectual property laws. You may not use our name, logo, trademarks, or content without written permission." },
    ],
  },
  {
    n: "08",
    title: "Copyright compliance",
    blocks: [
      { kind: "p", text: "We respect intellectual property rights and expect users to do the same. Repeat copyright violators may have their accounts terminated. Contact us for details of our Copyright Policy." },
    ],
  },
  {
    n: "09",
    title: "Feedback",
    blocks: [
      { kind: "p", text: "If you provide Veep with any suggestions or feedback, you grant us a non-exclusive, worldwide, royalty-free, perpetual license to use and incorporate that feedback into our Service without compensation." },
    ],
  },
  {
    n: "10",
    title: "Acceptable use policy",
    blocks: [
      { kind: "p", text: "You agree not to misuse the Platform. This includes (but is not limited to):" },
      { kind: "ul", items: [
        "Violating intellectual property or privacy rights",
        "Submitting false, offensive, or unlawful content",
        "Disrupting or harming the Service or other users",
        "Attempting to bypass security features or scrape data",
        "Using the Service for unauthorized commercial purposes",
        "Impersonating others or misrepresenting affiliations",
      ] },
      { kind: "p", text: "We reserve the right to remove content or restrict access for violations of this policy." },
    ],
  },
  {
    n: "11",
    title: "Third-party links",
    blocks: [
      { kind: "p", text: "The Service may link to third-party websites. Veep is not responsible for the content or availability of those sites and your use of them is at your own risk." },
    ],
  },
  {
    n: "12",
    title: "Disclaimers",
    blocks: [
      { kind: "p", text: "THE SERVICE IS PROVIDED \"AS IS\" AND WITHOUT WARRANTIES OF ANY KIND, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ACCURACY. Veep does not guarantee the results or outcomes of any engagement through the Platform." },
    ],
  },
  {
    n: "13",
    title: "Limitation of liability",
    blocks: [
      { kind: "p", text: "To the fullest extent allowed by law:" },
      { kind: "ul", items: [
        "Veep shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including lost profits or business interruption.",
        "Veep's total liability to you shall not exceed the amount you paid (if any) to use the Service in the 12 months prior to the claim.",
      ] },
    ],
  },
  {
    n: "14",
    title: "Termination",
    blocks: [
      { kind: "p", text: "These Terms remain in effect until terminated by either party. You may stop using the Service at any time. We may suspend or terminate access for violations of these Terms. Sections that survive termination include: Intellectual Property, Feedback, Disclaimers, Limitation of Liability, and Governing Law." },
    ],
  },
  {
    n: "15",
    title: "Governing law & dispute resolution",
    blocks: [
      { kind: "p", text: "These Terms are governed by the laws of the State of New York, without regard to conflict of law rules. Any disputes shall be resolved through binding arbitration in accordance with the American Arbitration Association (AAA) rules. You agree to waive the right to a jury trial." },
    ],
  },
  {
    n: "16",
    title: "Miscellaneous",
    blocks: [
      { kind: "ul", items: [
        "If any part of these Terms is found invalid, the rest remains enforceable.",
        "Veep may assign these Terms at its discretion; you may not assign without written permission.",
        "Notices and updates may be sent by email or posted on the Website.",
      ] },
    ],
  },
];

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | Veep" },
      { name: "description", content: "The Terms of Service that govern access to and use of The Veep Group, LLC's platform, website, and related services." },
      { property: "og:title", content: "Terms of Service | Veep" },
      { property: "og:description", content: "The Terms of Service that govern access to and use of The Veep Group, LLC's platform, website, and related services." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of"
        accent="Service."
        sub="These Terms govern your access to and use of The Veep Group, LLC's platform, website, and related services. Please read them carefully."
        primaryLabel="Book intro call"
        secondaryLabel="Contact us"
        secondaryTo="/contact"
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-accent font-mono">
            Last updated
          </div>
          <p className="mt-3 text-stone text-base">April 1, 2025</p>

          <p className="mt-10 text-stone text-lg leading-relaxed">
            Welcome to Veep. These Terms of Use (&quot;Terms&quot;) govern your access to and use of The Veep Group, LLC&apos;s platform, website, and related services (collectively, the &quot;Service&quot;). By accessing or using the Service &mdash; including{" "}
            <a href="https://www.veep.work" className="text-cream underline underline-offset-4 decoration-white/30 hover:decoration-accent transition">
              www.veep.work
            </a>{" "}
            or any future websites we operate (the &quot;Website&quot;) &mdash; you agree to be bound by these Terms.
          </p>

          <div className="mt-16 space-y-14">
            {sections.slice(0, 3).map((s) => (
              <SectionBlock key={s.n} n={s.n} title={s.title} blocks={s.blocks} />
            ))}

            <div>
              <div className="flex items-baseline gap-4">
                <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-accent font-mono">
                  04
                </span>
                <h2 className="text-2xl md:text-3xl text-cream">Privacy</h2>
              </div>
              <div className="mt-5">
                <p className="text-stone text-base leading-relaxed">
                  Your use of the Service is also governed by our{" "}
                  <Link to="/privacy" className="text-cream underline underline-offset-4 decoration-white/30 hover:decoration-accent transition">
                    Privacy Policy
                  </Link>
                  , which describes how we collect, use, and share your information.
                </p>
              </div>
            </div>

            {sections.slice(3).map((s) => (
              <SectionBlock key={s.n} n={s.n} title={s.title} blocks={s.blocks} />
            ))}

            <div>
              <div className="flex items-baseline gap-4">
                <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-accent font-mono">
                  17
                </span>
                <h2 className="text-2xl md:text-3xl text-cream">Questions?</h2>
              </div>
              <div className="mt-5 text-stone text-base leading-relaxed">
                <p>
                  Reach out to us at{" "}
                  <a href="mailto:hey@veep.work" className="text-cream underline underline-offset-4 decoration-white/30 hover:decoration-accent transition">
                    hey@veep.work
                  </a>{" "}
                  with any questions or concerns about these Terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterCTA />
    </>
  );
}

function SectionBlock({ n, title, blocks }: { n: string; title: string; blocks: Block[] }) {
  return (
    <div>
      <div className="flex items-baseline gap-4">
        <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-accent font-mono">
          {n}
        </span>
        <h2 className="text-2xl md:text-3xl text-cream">{title}</h2>
      </div>
      <div className="mt-5 space-y-5">
        {blocks.map((b, i) =>
          b.kind === "p" ? (
            <p key={i} className="text-stone text-base leading-relaxed">
              {b.text}
            </p>
          ) : (
            <ul key={i} className="space-y-2 pl-5 list-disc marker:text-accent/70 text-stone text-base leading-relaxed">
              {b.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          )
        )}
      </div>
    </div>
  );
}
