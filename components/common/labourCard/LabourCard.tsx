import Image, { StaticImageData } from 'next/image';

interface LabourCardProps {
  profile: StaticImageData;
  name: string;
  count: number;
  // key:string,
  maxCount: number;
}
export const LabourCard = ({ profile, name, count, maxCount }: Readonly<LabourCardProps>) => {
  const percent = Math.min(100, Math.round((count / maxCount) * 100));

  return (
    <div className="flex h-52 w-42 flex-col items-center justify-center gap-4 rounded-xl border bg-blue-100 p-3 shadow-[4px_4px_8px_rgba(0,0,0,0.5)]">
      <Image src={profile} alt="comming..." className="size-16 rounded-full" />
      <span>{name}</span>
      <div className="w-full border bg-white">
        <div className="h-1 rounded-r bg-red-500 transition-all duration-500" style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
};
