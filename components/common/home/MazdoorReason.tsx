import Image from 'next/image';
import labourImage from '@/public/assets/images/labour.png';

import { Button } from '@/components/ui/button';

export const MazdoorReason = () => {
  return (
    <div className="z-0 flex">
      <div className="relative z-0 mt-20 flex flex-col gap-8">
        <span className="text-7xl font-semibold">Be The Fastest In </span>
        <span className="text-7xl font-semibold">Getting Mazdoor</span>
        <span className="text-7xl font-semibold">at DoorStep</span>
        <span className="text-2xl">
          Our job is to filling your provide you mazdoor with <br /> fast and free method at doorstep
        </span>
        <Button variant="ghost" className="w-32 rounded-3xl bg-red-500 text-white">
          Find Mazdoor
        </Button>
      </div>
      <div className="">
        <Image src={labourImage} alt="labour-image" className="z-0 size-[40rem]" />
      </div>
    </div>
  );
};
