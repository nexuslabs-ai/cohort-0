"use server";

import { redirect } from "next/navigation";

import { Routes } from "@/lib/constants/routes";
import { clientEnv } from "@/lib/env.client";
import { createClient } from "@/lib/supabase/server";

/**
 * Initiates Google OAuth sign-in using Supabase's PKCE flow.
 *
 * Uses the NEXT_PUBLIC_SITE_URL environment variable to build the callback URL,
 * calls signInWithOAuth, and redirects the browser to Google's consent screen.
 * On success, Google sends the user back to /auth/callback with an authorization code.
 */
export async function signInWithGoogle() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${clientEnv.NEXT_PUBLIC_SITE_URL}${Routes.AUTH_CALLBACK}`,
    },
  });

  if (error) {
    redirect(`${Routes.LOGIN}?error=${encodeURIComponent(error.message)}`);
  }

  redirect(data.url);
}

/**
 * Initiates GitHub OAuth sign-in using Supabase's PKCE flow.
 *
 * Same flow as Google: build callback URL from NEXT_PUBLIC_SITE_URL,
 * call signInWithOAuth, redirect to GitHub's authorization page.
 */
export async function signInWithGithub() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: `${clientEnv.NEXT_PUBLIC_SITE_URL}${Routes.AUTH_CALLBACK}`,
    },
  });

  if (error) {
    redirect(`${Routes.LOGIN}?error=${encodeURIComponent(error.message)}`);
  }

  redirect(data.url);
}

/**
 * Signs the user out by clearing the Supabase session and redirecting
 * to the login page.
 *
 * Uses the "local" scope so only the current browser session is ended,
 * not all sessions across devices.
 */
export async function signOut() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut({ scope: "local" });

  if (error) {
    redirect(`${Routes.LOGIN}?error=${encodeURIComponent(error.message)}`);
  }

  redirect(Routes.LOGIN);
}
