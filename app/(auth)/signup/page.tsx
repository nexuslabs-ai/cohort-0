import Link from 'next/link';

import { AuthErrorAlert } from '@/components/auth/auth-error-alert';
import { OAuthButtons } from '@/components/auth/oauth-buttons';
import { Routes } from '@/lib/constants/routes';

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div className="w-full max-w-sm">
      <div className="rounded-2xl border border-border bg-card p-8 shadow-none">
        <div className="flex flex-col gap-6">
          {/* Heading */}
          <div className="flex flex-col gap-2 text-center">
            <h1 className="font-display text-2xl text-foreground">
              Create your account
            </h1>
            <p className="text-sm text-muted-foreground">
              Sign up with your GitHub or Google account
            </p>
          </div>

          {error && <AuthErrorAlert message={error} />}

          <OAuthButtons />

          <p className="text-center text-xs text-muted-foreground">
            Already have an account?{' '}
            <Link
              href={Routes.LOGIN}
              className="font-semibold text-primary transition-colors hover:text-primary/80"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
