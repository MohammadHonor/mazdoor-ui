'use client';

import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';

export function SessionLoader({ children }: Readonly<{ children: React.ReactNode }>) {
  const { data: session, status } = useSession();
  useEffect(() => {
    if (status === 'loading') {
      console.log('loading');
    } else if (status === 'authenticated') {
      console.log(session);
      console.log('authenticated');
    } else {
      console.log('unauthenticate');
    }
  });
  return <>{children}</>;
}
