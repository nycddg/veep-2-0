import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { DemoNote, Field, PageHeader, PrimaryButton, inputCls } from "@/components/portal/ui";
import { BOOKING_URL } from "@/lib/booking";

export const Route = createFileRoute("/_authenticated/portal/operator/support")({
  head: () => ({
    meta: [
      { title: "Support — Veep Operator Portal" },
      { name: "description", content: "Reach your Veep client success contact." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Support — Veep Operator Portal" },
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
        eyebrow="Operator portal"
        title="Support"
        intro="A person reads this. Dana Reyes is your client success contact and replies within one business day."
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
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent underline underline-offset-4"
          >
            Or book a call
          </a>
        </div>
        {sent && <p className="text-base text-accent">Sent. Dana will come back to you within a business day.</p>}
      </form>

      <DemoNote />
    </div>
  );
}