import Image, { StaticImageData } from 'next/image';

export const TeamMemberCard = ({ photo, name }: { photo: StaticImageData; name: string }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="rounded-xl border bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-[1px]">
        <div className="rounded-xl border bg-white p-2">
          <Image src={photo} alt="comming..." className="h-48 w-40 rounded-xl" />
        </div>
      </div>
      <div className="text-center">
        <span className="text-center text-xl font-semibold">{name}</span>
      </div>
    </div>
  );
};
