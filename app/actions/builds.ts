'use server';

import { redirect } from 'next/navigation';

import { requireUser } from '@/lib/auth';
import { buildRoute, Routes } from '@/lib/constants/routes';
import { BUCKET_NAME } from '@/lib/constants/storage';
import { clientEnv } from '@/lib/env.client';
import { createBuildWithRelations, deleteBuild } from '@/lib/queries/builds';
import { createClient } from '@/lib/supabase/server';
import { type BuildFormData, buildFormSchema } from '@/lib/validations/build';

/**
 * Server action that creates a new build with its associated AI tools
 * and tech stack tags in a single atomic database transaction.
 *
 * Steps:
 * 1. Authenticate the user (redirects to login if not signed in)
 * 2. Validate form data against the Zod schema
 * 3. Call the `create_build_with_relations` RPC function, which inserts the
 *    build row and all junction rows in one transaction
 * 4. Redirect to the new build's detail page
 *
 * Returns `{ error: string }` on failure so the client can display it.
 * On success, redirects -- so the caller never receives a return value.
 */
export async function createBuildAction(data: BuildFormData) {
  const user = await requireUser();

  const result = buildFormSchema.safeParse(data);

  if (!result.success) {
    return { error: 'Invalid form data' };
  }

  const { ai_tool_ids, tech_stack_tag_ids, screenshot_urls, ...buildData } =
    result.data;

  // Validate that all screenshot URLs originate from our Supabase Storage
  // bucket under the authenticated user's folder. This prevents injection
  // of arbitrary external URLs (tracking pixels, XSS via SVG, etc.).
  const allowedPrefix = `${clientEnv.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${BUCKET_NAME}/${user.id}/`;

  const hasInvalidUrl = screenshot_urls.some(
    (url) => !url.startsWith(allowedPrefix)
  );

  if (hasInvalidUrl) {
    return { error: 'Invalid screenshot URL' };
  }

  let buildId: string | null = null;

  try {
    const { data: id, error } = await createBuildWithRelations({
      title: buildData.title,
      description: buildData.description,
      buildType: buildData.build_type,
      liveUrl: buildData.live_url,
      repoUrl: buildData.repo_url,
      aiToolIds: ai_tool_ids,
      techStackTagIds: tech_stack_tag_ids,
      screenshotUrls: screenshot_urls,
    });

    if (error || !id) {
      return { error: error?.message ?? 'Failed to create build' };
    }

    buildId = id;
  } catch (error) {
    console.error('createBuildAction failed:', error);
    return { error: 'An unexpected error occurred' };
  }

  redirect(buildRoute(buildId));
}

/**
 * Server action that deletes a build by ID.
 *
 * Steps:
 * 1. Authenticate the user (redirects to login if not signed in)
 * 2. Call `deleteBuild` — RLS ensures only the owner can delete
 * 3. Redirect to the home page on success
 *
 * Returns `{ error: string }` on failure so the client can display it.
 * On success, redirects -- so the caller never receives a return value.
 */
export async function deleteBuildAction(buildId: string) {
  await requireUser();

  try {
    const supabase = await createClient();

    // 1. Fetch screenshot URLs before deleting — the DB rows cascade-delete
    //    when the build is removed, so we must grab them first.
    const { data: screenshots } = await supabase
      .from('build_screenshots')
      .select('url')
      .eq('build_id', buildId);

    // 2. Delete the files from storage (best-effort — don't block deletion
    //    if storage cleanup fails; the DB row is the source of truth).
    if (screenshots && screenshots.length > 0) {
      const storagePrefix = `${clientEnv.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${BUCKET_NAME}/`;
      const paths = screenshots
        .map((s) => s.url.replace(storagePrefix, ''))
        .filter((p) => p.length > 0);

      if (paths.length > 0) {
        const { error: storageError } = await supabase.storage
          .from(BUCKET_NAME)
          .remove(paths);

        if (storageError) {
          console.error('Failed to delete screenshot files:', storageError);
        }
      }
    }

    // 3. Delete the build — DB cascade removes the build_screenshots rows.
    const { error } = await deleteBuild(buildId);

    if (error) {
      return { error: error.message ?? 'Failed to delete build' };
    }
  } catch (error) {
    console.error('deleteBuildAction failed:', error);
    return { error: 'An unexpected error occurred' };
  }

  redirect(Routes.HOME);
}
