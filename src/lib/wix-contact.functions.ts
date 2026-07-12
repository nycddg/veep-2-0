import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { createWixFormSubmission } from "./wix.server";
import { WIX_FORM_FIELDS, WIX_FORM_ID_CAPACITY_AUDIT, WIX_FORM_ID_DISCOVERY } from "./wix-config";

const NA = "N/A";
const NA_URL = "https://veep.work/na";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(2000),
  company: z.string().trim().max(200).optional().or(z.literal("")),
  role: z.string().trim().max(200).optional().or(z.literal("")),
  timing: z.string().trim().max(50).optional().or(z.literal("")),
  intent: z.enum(["call", "audit"]).optional(),
  outcome: z.string().trim().max(200).optional().or(z.literal("")),
});

function splitName(full: string): { first: string; last: string } {
  const parts = full.trim().split(/\s+/);
  const first = parts.shift() ?? full;
  const last = parts.length > 0 ? parts.join(" ") : NA;
  return { first, last };
}

export const submitContactInquiry = createServerFn({ method: "POST" })
  .inputValidator((data) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { first, last } = splitName(data.name);
    const intentLabel = data.intent === "audit" ? "Capacity audit request" : "Discovery call request";

    const notes = [
      `[${intentLabel}]`,
      data.outcome ? `Outcome interest: ${data.outcome}` : null,
      "",
      `Message:\n${data.message}`,
      "",
      `Company: ${data.company || NA}`,
      `Role: ${data.role || NA}`,
      `Timing: ${data.timing || NA}`,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const isAudit = data.intent === "audit";
    const formId = isAudit ? WIX_FORM_ID_CAPACITY_AUDIT : WIX_FORM_ID_DISCOVERY;

    // The Capacity audit form has its own 5-field schema (name, work_email,
    // whats_the_biggest_initiative_without_an_owner, role, timing) — no
    // company / linkedin / notes fields. Fold company + outcome + intent tag
    // into the initiative body so nothing is lost.
    const submissions: Record<string, unknown> = isAudit
      ? {
          name: data.name,
          work_email: data.email,
          whats_the_biggest_initiative_without_an_owner: [
            `[${intentLabel}]`,
            data.outcome ? `Outcome interest: ${data.outcome}` : null,
            "",
            data.message,
            data.company ? `\nCompany: ${data.company}` : null,
          ]
            .filter((line) => line !== null)
            .join("\n"),
          role: data.role || NA,
          timing: data.timing || NA,
        }
      : {
          [WIX_FORM_FIELDS.firstName]: first,
          [WIX_FORM_FIELDS.lastName]: last,
          [WIX_FORM_FIELDS.email]: data.email,
          [WIX_FORM_FIELDS.linkedIn]: NA_URL,
          [WIX_FORM_FIELDS.role]: NA,
          [WIX_FORM_FIELDS.industries]: data.company || NA,
          [WIX_FORM_FIELDS.notes]: notes,
          [WIX_FORM_FIELDS.source]: "Website contact form",
        };

    await createWixFormSubmission(formId, submissions);

    return { success: true };
  });