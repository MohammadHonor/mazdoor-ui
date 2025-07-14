// import { title } from "process"
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LogInIcon } from 'lucide-react';

import { modalType } from '@/types/modal';
import { Button } from '@/components/ui/button';
import { Login } from '@/components/auth/Login';
import { Register } from '@/components/auth/register/Register';

interface NavbarProps {
  title: string;
}

export const Navbar = ({ title }: Readonly<NavbarProps>) => {
  const [modalType, setModalType] = useState<modalType>(null);
  const router = useRouter();
  // const [isActivate, setIsActivate] = useState<boolean>(false);
  const linkTitle = ['WHY MAZDOOR', 'Services', 'Mazdoor', 'Team', 'About Us'];
  const buttonTitle = ['Sign Up', 'Join'];

  const handleJoinAndSignupbutton = (title: string) => {
    // console.log(title)
    if (title === 'Join') {
      setModalType('join');
    } else if (title === 'Sign Up') {
      setModalType('signUp');
    }
  };

  const handleNavigate = (title: string) => {
    switch (title) {
      case 'WHY MAZDOOR':
        router.push('/home');
    }
  };

  const closeModal = () => setModalType(null);

  return (
    <header className="flex h-20 items-center justify-between border-b-1 bg-white/30 pr-4 pl-8 shadow-md backdrop-blur-md">
      <span className="text-3xl font-bold text-red-500">{title}</span>
      <div className="flex gap-8">
        {linkTitle.map((title: string, idx: number) => (
          <Button variant="link" key={`index-${idx}`} onClick={() => handleNavigate(title)}>
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
      {modalType === 'join' && <Login openModal={true} setOpenModal={closeModal} />}
      {modalType === 'signUp' && <Register openModal={true} setOpenModal={closeModal} />}
    </header>
  );
};
