import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { DemoNote, Field, PageHeader, PrimaryButton, inputCls } from "@/components/portal/ui";

export const Route = createFileRoute("/_authenticated/portal/client/support")({
  head: () => ({
    meta: [
      { title: "Support — Veep Client Portal" },
      { name: "description", content: "Reach your Veep client success contact." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Support — Veep Client Portal" },
      { property: "og:description", content: "Reach your Veep client success contact." },
    ],
  }),
  component: Support,
});

function Support() {
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="Client portal"
        title="Support"
        intro="Dana Reyes is your client success contact. She replies within one business day."
      />

      <form
        className="max-w-xl space-y-5"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
          setMessage("");
        }}
      >
        <Field label="What do you need?">
          <textarea
            rows={5}
            maxLength={1200}
            value={message}
            onChange={(e) => {
              setSent(false);
              setMessage(e.target.value);
            }}
            className={inputCls}
          />
        </Field>
        <div className="flex flex-wrap items-center gap-4">
          <PrimaryButton type="submit" disabled={!message.trim()}>
            Send message
          </PrimaryButton>
        </div>
        {sent && <p className="text-base text-accent">Sent. Dana will come back to you within a business day.</p>}
      </form>

      <DemoNote />
    </div>
  );
}