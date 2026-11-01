import { Phone } from 'lucide-react';

interface CardData {
  name: string;
  location: string;
  profession: string;
  sub_profession: string[];
  rating: number;
  experience: number;
  job_completed: number;
  rate: number;
  Mobile: number;
  available: boolean;
  distance: number;
}

export function ProfileCard() {
  const card_data = [
    {
      name: 'John Doe',
      location: 'Padrauna',
      profession: 'Construction Worker',
      sub_profession: ['Brickling', 'plastering', 'painting'],
      rating: 4.5,
      experience: 5,
      job_completed: 20,
      rate: 500,
      Mobile: 1234567890,
      available: true,
      distance: 4,
    },
    {
      name: 'John Doe',
      location: 'Padrauna',
      profession: 'Construction Worker',
      sub_profession: ['Brickling', 'plastering', 'painting'],
      rating: 4.5,
      experience: 5,
      job_completed: 20,
      rate: 500,
      Mobile: 1234567890,
      available: false,
      distance: 5,
    },
  ];
  return (
    <>
      {card_data.map((data: CardData, index: number) => (
        <div
          className="profile-card flex w-64 flex-col justify-center gap-2 rounded border border-gray-300 p-4"
          key={index}
        >
          <div className="flex items-center justify-between gap-4">
            <img
              src=""
              alt={`${data.name[0]}`}
              className="flex h-10 w-10 items-center justify-center rounded-full border"
            />
            <div className="flex flex-col">
              <span className="font-bold">{data.name}</span>
              <span className="text-sm">{data.profession}</span>
            </div>
            <div className="flex h-8 items-center rounded-full border bg-blue-300 p-2 text-sm text-white">
              {data.available ? 'Available' : 'Unavailable'}
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 text-sm">
            {data.sub_profession.map((value: string, index: number) => (
              <span className="rounded border pr-1 pl-1" key={index}>
                {value}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between text-sm">
            {[data.distance, data.rating, data.experience].map((value: number, index: number) => (
              <div key={index}>
                <span>icon</span>
                <span>{value}</span>
              </div>
            ))}
          </div>

          <hr />

          <div className="flex items-center justify-between text-sm">
            <span>{`Rate:₹${data.rate}/day`}</span>
            <div className="flex h-14 w-14 items-center justify-center rounded border">
              <Phone />
            </div>
            <div className="flex h-14 items-center justify-center rounded border p-2">
              {data.available ? (
                <>
                  Hire <br />
                  now
                </>
              ) : (
                <>
                  Book <br />
                  tomorrow
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
