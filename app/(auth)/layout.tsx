export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen">
      {/* Branding panel — desktop only */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-center px-16 bg-muted border-r border-border">
        <div className="max-w-sm space-y-5">
          {/* Hardhat icon */}
          <div className="flex size-14 items-center justify-center rounded-xl bg-primary">
            <svg
              width="28"
              height="28"
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
          <h1 className="font-display text-4xl leading-tight text-foreground">
            Bob the Builder
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Can we ship it?
            <br />
            Yes we can.
          </p>
          <div className="border-t border-border pt-4">
            <p className="text-sm text-muted-foreground">
              Share real work you&apos;ve shipped with AI.
              <br />
              No tutorials. No hype. Just proof.
            </p>
          </div>
        </div>
      </div>
      {/* Form panel */}
      <div className="flex flex-1 items-center justify-center px-4 py-12">
        {children}
      </div>
    </div>
  );
}
