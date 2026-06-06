import Image from 'next/image';
import labourImage from '@/public/assets/images/labour.png';
import { Geolocation } from '@/components/common/geolocation/Geolocation';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export const MazdoorReason = () => {
  
  const [openModal,setOpenModal] = useState<boolean>(false)

  return (
    <div className="z-0 flex  justify-between">
      <div className="relative  mt-20 flex flex-col gap-8">
        <span className="text-7xl font-semibold">Be The Fastest In </span>
        <span className="text-7xl font-semibold">Getting Mazdoor</span>
        <span className="text-7xl font-semibold">at DoorStep</span>
        <span className="text-2xl">
          Our job is to filling your provide you mazdoor with <br /> fast and free method at doorstep
        </span>
        <Button variant="ghost" 
        onClick={()=>setOpenModal(true)}
        className="w-32 rounded-3xl bg-red-500 text-white">
          Find Mazdoor
        </Button>
      </div>
      <div className="mr-48">
        <Image src={labourImage} alt="labour-image" className="z-0 size-[40rem]" />
      </div>
      {
        openModal && (
          <Geolocation openModal={true}/>
      )
      }
    </div>
  );
};
