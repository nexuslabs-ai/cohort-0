import { BuildFeed } from '@/components/feed/build-feed';
import { getBuilds } from '@/lib/queries/builds';

export default async function HomePage() {
  const { data: builds, error } = await getBuilds();

  if (error) {
    throw error;
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold">Builds</h1>
      <BuildFeed builds={builds} />
    </div>
  );
}
