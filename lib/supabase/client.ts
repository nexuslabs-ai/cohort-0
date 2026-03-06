import { createBrowserClient } from "@supabase/ssr";
import { env } from "@/lib/env";

/**
 * Creates a Supabase client for use in the browser (Client Components).
 *
 * Think of this like a "logged-in connection" to your database that runs
 * in the user's browser. It automatically handles cookies for auth sessions.
 *
 * Usage in a Client Component:
 *   const supabase = createClient()
 *   const { data } = await supabase.from("posts").select()
 */
export function createClient() {
  return createBrowserClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
  );
}
