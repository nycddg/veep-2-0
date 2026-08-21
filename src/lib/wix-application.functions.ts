import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { saveFormSubmission } from "./forms.server";
import { httpError } from "./http-error";
import {
  normalizeCompanyType,
  normalizeFunction,
  roleToWix,
  sourceToWix,
} from "./wix-config";

const MAX_RESUME_SIZE = 10 * 1024 * 1024; // 10 MB

const applicationSchema = z.object({
  firstName: z.string().trim().min(1).max(100),
  lastName: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  linkedIn: z.string().trim().url().max(500),
  website: z.string().trim().url().max(500).optional().or(z.literal("")),
  role: z.string().trim().max(100),
  fractionalExperience: z
    .enum(["Yes", "No"])
    .optional()
    .or(z.literal(""))
    .transform((v) => (v === "" ? undefined : v)),
  companyTypes: z.array(z.string()).default([]),
  growthStages: z.array(z.string()).default([]),
  functions: z.array(z.string()).default([]),
  industries: z.string().trim().max(1000).optional().or(z.literal("")),
  notes: z.string().trim().max(2000).optional().or(z.literal("")),
  source: z.string().trim().max(200).optional().or(z.literal("")),
  resume: z.object({
    name: z.string().max(300),
    type: z.string().max(100),
    data: z.string().max(50_000_000), // base64 payload
  }),
});

export const submitApplication = createServerFn({ method: "POST" })
  .inputValidator((data) => applicationSchema.parse(data))
  .handler(async ({ data }) => {
    const resumeBytes = Buffer.from(data.resume.data, "base64");
    if (resumeBytes.length > MAX_RESUME_SIZE) {
      httpError(400, "Resume file must be smaller than 10 MB");
    }

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowedTypes.includes(data.resume.type)) {
      httpError(400, "Resume must be a PDF, DOC, or DOCX file");
    }

    const mappedRole = roleToWix[data.role] || data.role;
    const mappedSource = sourceToWix[data.source || ""] || "Other";

    await saveFormSubmission({
      kind: "join",
      email: data.email,
      name: `${data.firstName} ${data.lastName}`.trim(),
      sourcePath: "/join",
      payload: {
        firstName: data.firstName,
        lastName: data.lastName,
        linkedIn: data.linkedIn,
        website: data.website || null,
        role: data.role,
        roleMapped: mappedRole,
        fractionalExperience: data.fractionalExperience ?? null,
        companyTypes: data.companyTypes.map(normalizeCompanyType),
        growthStages: data.growthStages,
        functions: data.functions.map(normalizeFunction),
        industries: data.industries || null,
        notes: data.notes || null,
        source: data.source || null,
        sourceMapped: mappedSource,
      },
      resume: data.resume,
    });

    return { success: true };
  });
