'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export function SessionLoader({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === 'loading') {
      console.log('loading');
    } else if (status === 'authenticated') {
      console.log(session);
      console.log('authenticated');
    } else {
      console.log('unauthenticate');
    }
  }, [status, router]);
  return <>{children}</>;
}
