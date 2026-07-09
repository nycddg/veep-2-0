import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { FooterCTA } from "@/components/site/FooterCTA";

type Block =
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "h3"; text: string };

type Section = { n: string; title: string; blocks: Block[] };

const sections: Section[] = [
  {
    n: "01",
    title: "About Veep",
    blocks: [
      { kind: "p", text: "Veep is a managed marketplace that connects businesses (\"Clients\") with vetted consultants and executives (\"Operating Partners\") for advisory, fractional, and project-based services (\"Project Services\"). The Service is offered through our Website and associated platform." },
    ],
  },
  {
    n: "02",
    title: "Information we collect",
    blocks: [
      { kind: "h3", text: "Personal information you provide" },
      { kind: "p", text: "We collect personal information you voluntarily provide when using our Service. This may include:" },
      { kind: "ul", items: [
        "Full name",
        "Email address",
        "Phone number",
        "Mailing address",
        "Company name and title",
        "Billing details (if you're a Client)",
        "Bank account or payout details (if you're an Operating Partner)",
      ] },
      { kind: "p", text: "This information is used to facilitate engagement, support billing and payment processes, and operate the Veep platform." },
      { kind: "h3", text: "Optional demographic information" },
      { kind: "p", text: "We may also collect non-required demographic data to help improve equity and experience across the platform, such as:" },
      { kind: "ul", items: ["Age", "Gender", "Ethnicity", "Industry", "Job function"] },
      { kind: "p", text: "Providing this information is always optional and will never affect your ability to use the platform." },
      { kind: "h3", text: "Automatically collected information" },
      { kind: "p", text: "We may automatically collect technical and usage data when you interact with the Website, such as:" },
      { kind: "ul", items: [
        "IP address",
        "Browser type",
        "Device identifiers",
        "Referring URLs",
        "Pages visited and session data",
      ] },
      { kind: "p", text: "This helps us maintain and improve the performance of the Service." },
    ],
  },
  {
    n: "03",
    title: "Cookies and tracking technologies",
    blocks: [
      { kind: "p", text: "We use cookies and similar technologies to personalize your experience, remember preferences, and improve the Service. You may disable cookies through your browser settings, but doing so may affect certain features of the platform." },
    ],
  },
  {
    n: "04",
    title: "How we use your information",
    blocks: [
      { kind: "p", text: "We use the information we collect to:" },
      { kind: "ul", items: [
        "Create and manage your Veep account",
        "Match Clients and Operating Partners",
        "Process and manage payments",
        "Communicate with you about services, updates, or support",
        "Improve the functionality, security, and user experience of the platform",
        "Send newsletters or marketing emails (you can opt out anytime)",
      ] },
    ],
  },
  {
    n: "05",
    title: "How we share your information",
    blocks: [
      { kind: "p", text: "We do not sell or rent your personal data. We may share your information with:" },
      { kind: "ul", items: [
        "Payment processors and financial institutions for transactions",
        "Cloud hosting and infrastructure providers",
        "Customer support tools and email service providers",
        "Legal authorities, if required to comply with legal obligations",
      ] },
      { kind: "p", text: "All vendors and partners are required to maintain the confidentiality and security of your information." },
    ],
  },
  {
    n: "06",
    title: "Data storage & security",
    blocks: [
      { kind: "p", text: "Your data is stored on secure servers hosted by third-party providers under contract with Veep. We use industry-standard encryption (e.g., SSL) and access control measures to protect your information." },
      { kind: "p", text: "While we take security seriously, no system is 100% secure. By using the Service, you acknowledge that there are inherent risks associated with transmitting data online." },
    ],
  },
  {
    n: "07",
    title: "Children's privacy",
    blocks: [
      { kind: "p", text: "Veep does not knowingly collect information from individuals under the age of 13. If we become aware that we have inadvertently collected such data, we will delete it promptly." },
    ],
  },
  {
    n: "08",
    title: "Communications & marketing",
    blocks: [
      { kind: "p", text: "We may send you service-related or marketing emails. You can opt out of promotional communications at any time by following the unsubscribe link in our emails or by updating your communication preferences in your account." },
    ],
  },
  {
    n: "09",
    title: "Third-party links",
    blocks: [
      { kind: "p", text: "The Service may contain links to other websites. We are not responsible for the privacy or data practices of those sites. We encourage you to review their privacy policies before submitting personal information." },
    ],
  },
  {
    n: "10",
    title: "Legal disclosures",
    blocks: [
      { kind: "p", text: "We may disclose your information if:" },
      { kind: "ul", items: [
        "Required by law, subpoena, or legal process",
        "Necessary to protect Veep's rights, property, or safety",
        "Needed to prevent fraud, enforce agreements, or investigate misuse of the Service",
      ] },
    ],
  },
  {
    n: "11",
    title: "Changes to this policy",
    blocks: [
      { kind: "p", text: "We may update this Privacy Policy from time to time. When we do, we will post the updated version on our Website and revise the \"Effective Date\" above. If the changes are material, we will notify you via email or in-platform notification." },
      { kind: "p", text: "Your continued use of the Service after any changes constitutes your agreement to the updated Privacy Policy." },
    ],
  },
];

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Veep" },
      { name: "description", content: "How The Veep Group, LLC collects, uses, shares, and protects your information across veep.work and the Veep platform." },
      { property: "og:title", content: "Privacy Policy | Veep" },
      { property: "og:description", content: "How The Veep Group, LLC collects, uses, shares, and protects your information across veep.work and the Veep platform." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy"
        accent="Policy."
        sub="How The Veep Group, LLC collects, uses, shares, and protects your information when you use veep.work and the Veep platform."
        primaryLabel="Book intro call"
        secondaryLabel="Contact us"
        secondaryTo="/contact"
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-accent font-mono">
            Effective date
          </div>
          <p className="mt-3 text-stone text-base">April 1, 2025</p>

          <p className="mt-10 text-stone text-lg leading-relaxed">
            At Veep, your privacy matters. This Privacy Policy explains how The Veep Group, LLC (&quot;Veep,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, shares, and protects your information through the use of our website (
            <a href="https://www.veep.work" className="text-cream underline underline-offset-4 decoration-white/30 hover:decoration-accent transition">
              www.veep.work
            </a>
            ) and any related features, tools, or services (collectively, the &quot;Service&quot;). By accessing or using the Service, you agree to the terms outlined in this Privacy Policy.
          </p>

          <div className="mt-16 space-y-14">
            {sections.map((s) => (
              <div key={s.n}>
                <div className="flex items-baseline gap-4">
                  <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-accent font-mono">
                    {s.n}
                  </span>
                  <h2 className="text-2xl md:text-3xl text-cream">{s.title}</h2>
                </div>
                <div className="mt-5 space-y-5">
                  {s.blocks.map((b, i) => {
                    if (b.kind === "p") {
                      return (
                        <p key={i} className="text-stone text-base leading-relaxed">
                          {b.text}
                        </p>
                      );
                    }
                    if (b.kind === "h3") {
                      return (
                        <h3 key={i} className="text-lg text-cream pt-2">
                          {b.text}
                        </h3>
                      );
                    }
                    return (
                      <ul key={i} className="space-y-2 pl-5 list-disc marker:text-accent/70 text-stone text-base leading-relaxed">
                        {b.items.map((it) => (
                          <li key={it}>{it}</li>
                        ))}
                      </ul>
                    );
                  })}
                </div>
              </div>
            ))}

            <div>
              <div className="flex items-baseline gap-4">
                <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-accent font-mono">
                  12
                </span>
                <h2 className="text-2xl md:text-3xl text-cream">Contact us</h2>
              </div>
              <div className="mt-5 space-y-3 text-stone text-base leading-relaxed">
                <p>If you have any questions or concerns about this Privacy Policy or your data, please contact us:</p>
                <p className="text-cream">The Veep Group, LLC</p>
                <p>
                  Email:{" "}
                  <a href="mailto:hey@veep.work" className="text-cream underline underline-offset-4 decoration-white/30 hover:decoration-accent transition">
                    hey@veep.work
                  </a>
                </p>
                <p>
                  See also our{" "}
                  <Link to="/terms" className="text-cream underline underline-offset-4 decoration-white/30 hover:decoration-accent transition">
                    Terms of Service
                  </Link>
                  .
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
