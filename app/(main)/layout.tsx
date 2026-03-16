import { headers } from 'next/headers';

import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import { getUser } from '@/lib/auth';
import { getProfileById } from '@/lib/queries/profiles';

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '/';

  const user = await getUser();
  const profile = user
    ? await getProfileById(user.id)
        .then((r) => r.data)
        .catch(() => null)
    : null;

  return (
    <div className="min-h-screen">
      <Navbar user={user} profile={profile} pathname={pathname} />
      <main className="pb-16">{children}</main>
      <Footer />
    </div>
  );
}
