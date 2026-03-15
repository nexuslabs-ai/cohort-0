import { notFound } from 'next/navigation';

import { ProfileBuildList } from '@/components/profile/profile-build-list';
import { ProfileHeader } from '@/components/profile/profile-header';
import { getBuildsForUser } from '@/lib/queries/builds';
import { getProfileById } from '@/lib/queries/profiles';

type PublicProfilePageProps = {
  params: Promise<{ id: string }>;
};

export default async function PublicProfilePage({
  params,
}: PublicProfilePageProps) {
  const { id } = await params;

  const [profileResult, buildsResult] = await Promise.all([
    getProfileById(id),
    getBuildsForUser(id).catch(() => ({ data: null, error: null })),
  ]);

  if (!profileResult.data) {
    notFound();
  }

  const profile = profileResult.data;
  const builds = buildsResult.data ?? [];

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <div className="space-y-10">
        <ProfileHeader profile={profile} />
        <ProfileBuildList builds={builds} />
      </div>
    </main>
  );
}
