export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen">
      {/* Branding panel — desktop only */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-center px-16 bg-muted border-r border-border">
        <div className="space-y-4">
          <div className="text-3xl">🔨</div>
          <h1 className="font-display text-4xl text-foreground">
            Bob the Builder
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Can we ship it?
            <br />
            Yes we can.
          </p>
          <p className="text-sm text-muted-foreground mt-8">
            Share what you&apos;ve built with AI.
            <br />
            Real work. Real proof.
          </p>
        </div>
      </div>
      {/* Form panel */}
      <div className="flex flex-1 items-center justify-center px-4 py-12">
        {children}
      </div>
    </div>
  );
}
