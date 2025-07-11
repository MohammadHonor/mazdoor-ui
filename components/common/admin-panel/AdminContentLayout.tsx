'use client';

import { useEffect, useState } from 'react';

import { Navbar } from '@/components/common/admin-panel/Navbar';

interface AdminContentLayoutProps {
  title: string;
  children: React.ReactNode;
}

export const AdminContentLayout = ({ title, children }: Readonly<AdminContentLayoutProps>) => {
  const [navbarHeight, setNavbarHeight] = useState(0);
  useEffect(() => {
    const height = document.querySelector('header');
    if (height) {
      console.log(height.offsetHeight);
      setNavbarHeight(height.offsetHeight);
    }
  }, []);
  return (
    <div>
      <Navbar title={title} />
      <div className={`min-h-calc(100vh-${navbarHeight})`}>{children}</div>
    </div>
  );
};
