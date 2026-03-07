import { redirect } from "next/navigation";

export async function GET() {
  // TODO: Handle OAuth code exchange with Supabase
  redirect("/");
}
