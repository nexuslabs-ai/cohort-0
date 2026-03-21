'use client';

import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  // resolvedTheme is undefined during SSR and before hydration.
  // Render a placeholder until the client knows the active theme.
  if (resolvedTheme === undefined) {
    return (
      <Button variant="ghost" size="icon" disabled aria-label="Loading theme" />
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={
        resolvedTheme === 'dark'
          ? 'Switch to light mode'
          : 'Switch to dark mode'
      }
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      <span className="relative size-4">
        <SunIcon className="absolute size-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute size-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
      </span>
    </Button>
  );
}
