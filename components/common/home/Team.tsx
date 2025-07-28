import profilePhoto from '@/public/assets/card/photo.jpg';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { TeamMemberCard } from '@/components/common/teamMemberCard/TeamMemberCard';

export const Team = () => {
  const TeamDetail = [
    { photo: profilePhoto, name: 'Mohammad' },
    { photo: profilePhoto, name: 'Mohammad' },
    { photo: profilePhoto, name: 'Mohammad' },
    { photo: profilePhoto, name: 'Mohammad' },
    { photo: profilePhoto, name: 'Mohammad' },
  ];

  const handleNext = async () => {
    console.log('next');
  };

  const handleBack = async () => {
    console.log('back');
  };

  return (
    <div className="flex flex-col gap-8 pt-4 pb-16">
      <div className="flex flex-col gap-4">
        <span className="text-red-400">Our Team</span>
        <span className="text-3xl font-semibold">Meat Our Team</span>
      </div>
      <div className="flex items-center justify-between gap-8">
        <Button variant={'ghost'} onClick={handleBack} className="size-10 rounded-full border">
          <ChevronLeft className="size-8" />
        </Button>

        {TeamDetail.map((val, idx: number) => {
          return <TeamMemberCard photo={val.photo} name={val.name} key={val.name + '-' + idx} />;
        })}
        <Button variant={'ghost'} onClick={handleNext} className="size-10 rounded-full border">
          <ChevronRight className="size-8" />
        </Button>
      </div>
    </div>
  );
};
