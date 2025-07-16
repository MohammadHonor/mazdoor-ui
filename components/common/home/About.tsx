import Image from 'next/image';
import aboutImage from '@/public/assets/about/about.png';
import { Facebook, Instagram, Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';

export const About = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex items-center justify-between rounded-xl border bg-[#fff4ee] px-20">
        <div className="flex flex-col gap-8">
          <span className="text-red-500">About Us</span>
          <span className="text-3xl font-semibold">
            Know About <br />
            Mazdoor
          </span>
          <span>
            Discover Mazdoor wherever and whenever and <br /> get your Mazdoor at your doorstep.
          </span>
          <Button variant="ghost" className="w-32 rounded-2xl bg-red-500 text-white">
            Get The App
          </Button>
        </div>
        <Image src={aboutImage} alt="coming..." className="scale-x-[-1] mix-blend-multiply" />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-4">
          <span className="text-2xl font-semibold text-red-500">Mazdoor</span>
          <span className="text-sm">
            Our job is to find you Mazdoor with <br /> at your Door Step on just a Phone <br /> call with free of cost.
          </span>
          <div>
            <Button variant={'ghost'}>
              <Facebook className="text-red-500" />
            </Button>
            <Button variant={'ghost'}>
              <Instagram className="text-red-500" />
            </Button>
          </div>
        </div>
        <div className="flex w-1/2 justify-between">
          <div className="flex flex-col gap-4">
            <span className="font-semibold">About</span>
            <span className="text-sm">About Us</span>
            <span className="text-sm">Feature</span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-semibold">Company</span>
            <span className="text-sm">Why Mazdoor ?</span>
            <span className="text-sm">FAQ</span>
          </div>
          <div className="flex flex-col items-start justify-start gap-4">
            <span className="font-semibold">Get in Touch</span>
            <span className="text-sm">Question or feedback?</span>
            <span className="text-sm">We’d love to hear from you</span>
            <Button variant="ghost" className="rounded-2xl border">
              <span>Email Address</span>
              <Mail className="text-red-500" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
