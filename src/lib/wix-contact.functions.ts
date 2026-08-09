import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { saveFormSubmission } from "./forms.server";

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

export const submitContactInquiry = createServerFn({ method: "POST" })
  .inputValidator((data) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const kind = data.intent === "audit" ? "audit" : "contact";
    const intentLabel =
      data.intent === "audit" ? "Capacity audit request" : "Discovery call request";

    await saveFormSubmission({
      kind,
      email: data.email,
      name: data.name,
      sourcePath: "/contact",
      payload: {
        intent: data.intent ?? "call",
        intentLabel,
        outcome: data.outcome || null,
        message: data.message,
        company: data.company || null,
        role: data.role || null,
        timing: data.timing || null,
      },
    });

    return { success: true };
  });
