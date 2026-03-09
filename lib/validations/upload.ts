import { z } from "zod";

import { MimeType } from "@/lib/constants/mime-types";

// ---------------------------------------------------------------------------
// Upload request — used when requesting a signed URL for file upload
// ---------------------------------------------------------------------------

export const ALLOWED_IMAGE_TYPES = Object.values(MimeType) as [
  MimeType,
  ...MimeType[],
];

export const uploadRequestSchema = z.object({
  fileName: z.string().min(1, { error: "File name is required" }),
  contentType: z.enum(ALLOWED_IMAGE_TYPES, {
    error: "File must be an image (png, jpeg, gif, or webp)",
  }),
  buildId: z.string().uuid({ error: "Build ID must be a valid UUID" }),
});

export type UploadRequestData = z.infer<typeof uploadRequestSchema>;
