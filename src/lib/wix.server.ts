import { WIX_FORM_ID, WIX_SITE_ID } from "./wix-config";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/wix";

function getHeaders() {
  const lovableApiKey = process.env.LOVABLE_API_KEY;
  const wixApiKey = process.env.WIX_API_KEY;
  if (!lovableApiKey || !wixApiKey) {
    throw new Error("Wix connector credentials are not configured");
  }
  return {
    Authorization: `Bearer ${lovableApiKey}`,
    "X-Connection-Api-Key": wixApiKey,
    "wix-site-id": WIX_SITE_ID,
    "Content-Type": "application/json",
  };
}

async function wixFetch(path: string, options: RequestInit = {}) {
  const response = await fetch(`${GATEWAY_URL}${path}`, {
    ...options,
    headers: { ...getHeaders(), ...options.headers },
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Wix API error [${response.status}]: ${text}`);
  }
  return response.json();
}

type MediaUploadUrlResponse = { uploadUrl: string };

export async function getFormMediaUploadUrl(
  filename: string,
  mimeType: string,
): Promise<string> {
  const data = (await wixFetch("/form-submission-service/v4/submissions/media-upload-url", {
    method: "POST",
    body: JSON.stringify({
      formId: WIX_FORM_ID,
      filename,
      mimeType,
    }),
  })) as MediaUploadUrlResponse;
  return data.uploadUrl;
}

export async function uploadFileToWix(
  uploadUrl: string,
  file: File,
): Promise<void> {
  const response = await fetch(uploadUrl, {
    method: "PUT",
    body: file,
    headers: {
      "Content-Type": file.type || "application/octet-stream",
    },
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Wix file upload failed [${response.status}]: ${text}`);
  }
}

type SubmissionFieldValue =
  | { stringValue: string }
  | { numberValue: number }
  | { boolValue: boolean }
  | { listValue: { values: SubmissionFieldValue[] } }
  | { nullValue: null }
  | { structValue: Record<string, unknown> };

export async function createWixFormSubmission(
  fields: Record<string, SubmissionFieldValue>,
) {
  return wixFetch("/form-submission-service/v4/submissions", {
    method: "POST",
    body: JSON.stringify({
      submission: {
        formId: WIX_FORM_ID,
        submissions: fields,
      },
    }),
  });
}
