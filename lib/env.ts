import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z
    .string()
    .min(1, "Missing NEXT_PUBLIC_SUPABASE_URL — copy .env.local.example to .env.local"),
  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: z
    .string()
    .min(1, "Missing NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY — copy .env.local.example to .env.local"),
});

export const env = envSchema.parse(process.env);
