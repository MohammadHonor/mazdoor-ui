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
      <div className="fixed top-0 z-50 w-full">
        <Navbar title={title} />
      </div>
      <div className={`min-h-calc(100vh-${navbarHeight}) relative mt-20 border px-16`}>{children}</div>
    </div>
  );
};
