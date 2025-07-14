import Image from 'next/image';
import mapWatcher from '@/public/assets/images/mapWatcher.png';

export const Mazdoor = () => {
  return (
    <div>
      <div className="flex items-center justify-between pt-10 pr-20">
        <div className="flex flex-col gap-4">
          <span className="text-red-500">MAZDOORS</span>
          <span className="text-3xl font-semibold">
            Labor That is Always available <br /> for you{' '}
          </span>
        </div>
        <Image src={mapWatcher} alt={'comming...'} />
      </div>
      <div></div>
    </div>
  );
};
