import type { User } from '@supabase/supabase-js';
import { Plus } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Routes } from '@/lib/constants/routes';
import type { Profile } from '@/types';

import { UserMenu } from './user-menu';

interface NavbarProps {
  user: User | null;
  profile: Profile | null;
}

export function Navbar({ user, profile }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo + Tagline */}
        <div className="flex items-center gap-3">
          <Link href={Routes.HOME} className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-lg bg-primary">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M2 18v1a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-1" />
                <path d="M2 18h20" />
                <path d="M4 18v-4a8 8 0 0 1 16 0v4" />
                <path d="M8 18v-6a4 4 0 0 1 8 0v6" />
              </svg>
            </div>
            <div>
              <span className="font-display text-lg leading-none text-foreground">
                Bob the Builder
              </span>
              <span className="mt-0.5 hidden text-[11px] tracking-wide text-muted-foreground sm:block font-mono">
                Can we ship it? Yes we can.
              </span>
            </div>
          </Link>

          <Link
            href={Routes.FEED}
            className="ml-4 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Feed
          </Link>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          <Button asChild size="sm">
            <Link href={Routes.BUILD_NEW}>
              <Plus data-icon="inline-start" />
              Submit Build
            </Link>
          </Button>

          {user ? (
            <UserMenu profile={profile} />
          ) : (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link href={Routes.LOGIN}>Log in</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href={Routes.SIGNUP}>Sign up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
