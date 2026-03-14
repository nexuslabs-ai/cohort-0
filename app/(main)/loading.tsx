import { BuildCardSkeleton } from '@/components/feed/build-card-skeleton';

/** Number of skeleton cards to display while the feed is loading. */
const SKELETON_COUNT = 6;

export default function HomeLoading() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6 h-8 w-24 animate-pulse rounded bg-muted" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: SKELETON_COUNT }, (_, i) => (
          <BuildCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
