// import { title } from "process"
'use client';

import { useState } from 'react';
import { LogInIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Login } from '@/components/auth/Login';

interface NavbarProps {
  title: string;
}

export const Navbar = ({ title }: Readonly<NavbarProps>) => {
  const [openModal, setOpenModal] = useState<boolean | undefined>(undefined);
  const linkTitle = ['WHY MAZDOOR', 'Services', 'Mazdoor', 'Team', 'About Us'];
  const buttonTitle = ['Sign Up', 'Join'];

  const handleJoinAndSignupbutton = (title: string) => {
    if (title === 'Join') {
      setOpenModal(true);
    }
  };

  return (
    <header className="flex h-16 items-end justify-between border pr-4 pl-8">
      <span className="text-3xl font-bold text-red-500">{title}</span>
      <div className="flex gap-8">
        {linkTitle.map((title: string, idx: number) => (
          <Button variant="link" key={`index-${idx}`}>
            {title}
          </Button>
        ))}
      </div>
      <div className="flex gap-4">
        {buttonTitle.map((title: string, idx: number) => (
          <Button
            className={`w-24 rounded-3xl border ${idx === 1 && 'bg-red-500 text-white'}`}
            variant="ghost"
            key={`index-${idx}`}
            onClick={() => handleJoinAndSignupbutton(title)}
          >
            {title === 'Join' && <LogInIcon />}
            {title}
          </Button>
        ))}
      </div>
      {openModal && <Login openModal={openModal} setOpenModal={setOpenModal} />}
    </header>
  );
};
