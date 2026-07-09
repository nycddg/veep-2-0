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

function toListValue(values: string[]): { listValue: { values: { stringValue: string }[] } } {
  return {
    listValue: {
      values: values.map((v) => ({ stringValue: v })),
    },
  };
}

function toStringValue(value: string | undefined): { stringValue: string } | { nullValue: null } {
  return value ? { stringValue: value } : { nullValue: null };
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
    await uploadFileToWix(uploadUrl, file);

    const mappedRole = roleToWix[data.role] || data.role;
    const mappedSource = sourceToWix[data.source || ""] || "Other";

    const submissions = {
      [WIX_FORM_FIELDS.firstName]: { stringValue: data.firstName },
      [WIX_FORM_FIELDS.lastName]: { stringValue: data.lastName },
      [WIX_FORM_FIELDS.email]: { stringValue: data.email },
      [WIX_FORM_FIELDS.linkedIn]: { stringValue: data.linkedIn },
      [WIX_FORM_FIELDS.website]: toStringValue(data.website || undefined),
      [WIX_FORM_FIELDS.role]: { stringValue: mappedRole },
      [WIX_FORM_FIELDS.fractionalExperience]: toStringValue(data.fractionalExperience),
      [WIX_FORM_FIELDS.companyTypes]: toListValue(data.companyTypes.map(normalizeCompanyType)),
      [WIX_FORM_FIELDS.growthStages]: toListValue(data.growthStages),
      [WIX_FORM_FIELDS.functions]: toListValue(data.functions.map(normalizeFunction)),
      [WIX_FORM_FIELDS.industries]: toStringValue(data.industries || undefined),
      [WIX_FORM_FIELDS.notes]: toStringValue(data.notes || undefined),
      [WIX_FORM_FIELDS.source]: { stringValue: mappedSource },
      [WIX_FORM_FIELDS.resume]: { stringValue: uploadUrl },
    };

    await createWixFormSubmission(submissions);

    return { success: true };
  });
