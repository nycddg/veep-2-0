import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import {
  createWixFormSubmission,
  getFormMediaUploadUrl,
  uploadFileToWix,
} from "./wix.server";
import {
  normalizeCompanyType,
  normalizeFunction,
  roleToWix,
  sourceToWix,
  WIX_FORM_FIELDS,
} from "./wix-config";

const MAX_RESUME_SIZE = 10 * 1024 * 1024; // 10 MB

const applicationSchema = z.object({
  firstName: z.string().trim().min(1).max(100),
  lastName: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  linkedIn: z.string().trim().url().max(500),
  website: z.string().trim().url().max(500).optional().or(z.literal("")),
  role: z.string().trim().max(100),
  fractionalExperience: z.enum(["Yes", "No"]).optional(),
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

function base64ToFile(payload: { name: string; type: string; data: string }): File {
  const bytes = Buffer.from(payload.data, "base64");
  if (bytes.length > MAX_RESUME_SIZE) {
    throw new Error("Resume file must be smaller than 10 MB");
  }
  return new File([bytes], payload.name, { type: payload.type });
}

function toStringValue(value: string | undefined): string | null {
  return value || null;
}

export const submitApplication = createServerFn({ method: "POST" })
  .inputValidator((data) => applicationSchema.parse(data))
  .handler(async ({ data }) => {
    const file = base64ToFile(data.resume);

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowedTypes.includes(file.type)) {
      throw new Error("Resume must be a PDF, DOC, or DOCX file");
    }

    const uploadUrl = await getFormMediaUploadUrl(file.name, file.type);
    const uploadedFile = await uploadFileToWix(uploadUrl, file);

    const mappedRole = roleToWix[data.role] || data.role;
    const mappedSource = sourceToWix[data.source || ""] || "Other";

    const submissions: Record<string, unknown> = {
      [WIX_FORM_FIELDS.firstName]: data.firstName,
      [WIX_FORM_FIELDS.lastName]: data.lastName,
      [WIX_FORM_FIELDS.email]: data.email,
      [WIX_FORM_FIELDS.linkedIn]: data.linkedIn,
      [WIX_FORM_FIELDS.website]: toStringValue(data.website || undefined),
      [WIX_FORM_FIELDS.role]: mappedRole,
      [WIX_FORM_FIELDS.fractionalExperience]: toStringValue(data.fractionalExperience),
      [WIX_FORM_FIELDS.companyTypes]: data.companyTypes.map(normalizeCompanyType),
      [WIX_FORM_FIELDS.growthStages]: data.growthStages,
      [WIX_FORM_FIELDS.functions]: data.functions.map(normalizeFunction),
      [WIX_FORM_FIELDS.industries]: toStringValue(data.industries || undefined),
      [WIX_FORM_FIELDS.notes]: toStringValue(data.notes || undefined),
      [WIX_FORM_FIELDS.source]: mappedSource,
      [WIX_FORM_FIELDS.resume]: [
        {
          fileId: uploadedFile.id,
          displayName: uploadedFile.displayName,
          fileType: file.type,
          url: uploadedFile.url,
        },
      ],
    };

    await createWixFormSubmission(submissions);

    return { success: true };
  });

