import Image from 'next/image';
import freeImage from '@/public/assets/images/freeIcon.png';
import manImage from '@/public/assets/images/man.png';
import mobileImage from '@/public/assets/images/mobile.png';

export const Services = () => {
  const services = [
    {
      image: mobileImage,
      title: 'Easy To Access',
      description: 'You only need a few steps in getting Labor at doorstep',
    },
    { image: freeImage, title: 'Free of Cost', description: 'No Middle man charges this process is totalyy Free.' },
    { image: manImage, title: 'Best Quality', description: 'Not only fast for us quality is also number one' },
  ];

  return (
    <div className="flex flex-col justify-center gap-16">
      <div className="flex flex-col items-center justify-center gap-4">
        <span className="text-red-500">WHAT WE SERVE</span>
        <span className="text-4xl font-semibold">Your Favorite Labor</span>
        <span className="text-4xl font-semibold">Finding Partner</span>
      </div>
      <div className="flex justify-between">
        {services.map((val, idx: number) => (
          <div className="flex flex-col items-center justify-center gap-2" key={val + ' ' + idx}>
            <Image src={val.image} alt={'coming...'} className="size-44" />
            <span className="font-bold">{val.title}</span>
            <span>{val.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
