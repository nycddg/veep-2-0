import { createFileRoute } from "@tanstack/react-router";
import { DemoNote, Eyebrow, PageHeader, Rows, Row } from "@/components/portal/ui";
import { usePortal } from "@/lib/portal/mock-store";

export const Route = createFileRoute("/_authenticated/portal/operator/profile")({
  head: () => ({
    meta: [
      { title: "Profile — Veep Operator Portal" },
      { name: "description", content: "How Veep presents you to clients." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Profile — Veep Operator Portal" },
      { property: "og:description", content: "How Veep presents you to clients." },
    ],
  }),
  component: ProfilePage,
});

function ProfilePage() {
  const { profile, setMarketingOptIn } = usePortal();

  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Operator portal"
        title="Profile"
        intro="This is what a client sees before they meet you. Veep edits it with you — tell us what's wrong and we'll change it."
      />

      <section className="grid gap-8 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-start">
        <img
          src={profile.photo}
          alt={profile.name}
          width={128}
          height={128}
          loading="lazy"
          className="h-32 w-32 rounded-2xl object-cover"
        />
        <div className="min-w-0">
          <h2 className="text-xl tracking-tight text-cream">{profile.name}</h2>
          <p className="mt-2 max-w-prose text-base leading-relaxed text-stone">{profile.headline}</p>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm text-accent underline underline-offset-4"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <section>
        <h2 className="text-lg tracking-tight text-cream">Highlights</h2>
        <ul className="mt-4 space-y-2 text-base text-stone">
          {profile.highlights.map((h) => (
            <li key={h} className="flex gap-2.5">
              <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {h}
            </li>
          ))}
        </ul>
      </section>

      <section className="grid gap-8 sm:grid-cols-3">
        {[
          { label: "Functions", values: profile.functions },
          { label: "Industries", values: profile.industries },
          { label: "Stages", values: profile.stages },
        ].map((g) => (
          <div key={g.label}>
            <Eyebrow>{g.label}</Eyebrow>
            <p className="mt-2 text-base text-cream">{g.values.join(", ")}</p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-lg tracking-tight text-cream">Proof points</h2>
        <div className="mt-5">
          <Rows>
            {profile.proofPoints.map((p) => (
              <Row key={p}>
                <p className="text-base text-stone">{p}</p>
              </Row>
            ))}
          </Rows>
        </div>
      </section>

      <section>
        <h2 className="text-lg tracking-tight text-cream">Preferences</h2>
        <p className="mt-3 max-w-prose text-base text-stone">{profile.preferences}</p>
        <label className="mt-6 flex max-w-prose items-start gap-3 text-base text-stone">
          <input
            type="checkbox"
            checked={profile.marketingOptIn}
            onChange={(e) => setMarketingOptIn(e.target.checked)}
            className="mt-1.5 h-4 w-4 shrink-0 accent-[color:var(--accent)]"
          />
          Veep may feature my anonymized results in marketing.
        </label>
      </section>

      <DemoNote />
    </div>
  );
}