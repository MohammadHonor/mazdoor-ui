'use client';

import Image from 'next/image';
import electricianProfile from '@/public/assets/card/electrician.jpg';
import mapWatcher from '@/public/assets/images/mapWatcher.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { LabourCard } from '@/components/common/labourCard/LabourCard';

export const Mazdoor = () => {
  const cardData = [
    {
      profile: electricianProfile,
      name: 'Electrician',
      count: 20,
      maxCount: 200,
    },
    {
      profile: electricianProfile,
      name: 'Electrician',
      count: 40,
      maxCount: 200,
    },
    {
      profile: electricianProfile,
      name: 'Electrician',
      count: 80,
      maxCount: 200,
    },
    {
      profile: electricianProfile,
      name: 'Electrician',
      count: 90,
      maxCount: 200,
    },
    {
      profile: electricianProfile,
      name: 'Electrician',
      count: 20,
      maxCount: 200,
    },
    {
      profile: electricianProfile,
      name: 'Electrician',
      count: 40,
      maxCount: 100,
    },
    {
      profile: electricianProfile,
      name: 'Electrician',
      count: 10,
      maxCount: 20,
    },
    {
      profile: electricianProfile,
      name: 'Electrician',
      count: 40,
      maxCount: 200,
    },
  ];

  const handleNext = async () => {
    // cardData = cardData
    console.log('next');
  };
  const handleBack = async () => {
    console.log('back');
  };

  return (
    <div className="flex flex-col gap-4 pb-4">
      <div className="flex items-center justify-between pt-10 pr-20">
        <div className="flex flex-col gap-4">
          <span className="text-red-500">MAZDOORS</span>
          <span className="text-3xl font-semibold">
            Labor That is Always available <br /> for you
          </span>
        </div>
        <Image src={mapWatcher} alt={'comming...'} />
      </div>
      <div className="flex items-center justify-between">
        <Button variant="ghost" className="size-10 items-center rounded-full border" onClick={handleBack}>
          <ChevronLeft className="size-6" />
        </Button>
        <div className="grid grid-cols-5 items-center justify-center gap-20">
          {cardData.map((val, idx) => (
            <LabourCard
              profile={val.profile}
              name={val.name}
              count={val.count}
              key={val.name + '-' + idx}
              maxCount={val.maxCount}
            />
          ))}
        </div>
        <Button variant="ghost" className="size-10 items-center rounded-full border" onClick={handleNext}>
          <ChevronRight className="size-6" />
        </Button>
      </div>
    </div>
  );
};
