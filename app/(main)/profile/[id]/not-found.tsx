import Link from 'next/link';

import { Routes } from '@/lib/constants/routes';

export default function ProfileNotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-2xl font-bold">Profile not found</h1>
      <p className="text-muted-foreground">
        This builder profile doesn&apos;t exist or may have been removed.
      </p>
      <Link
        href={Routes.HOME}
        className="text-sm font-medium text-primary hover:underline"
      >
        Back to home
      </Link>
    </div>
  );
}
