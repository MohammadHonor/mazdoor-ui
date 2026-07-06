import { MapPin } from 'lucide-react';

import CustomeButton from '../common/customeButton/CustomeButton';
import Dropdown from '../common/dropdown/Dropdown';
import SearchBar from '../common/searchBar/SearchBar';

export default function Workers() {
  const options = [
    'All skill',
    'Plumber',
    'Electrician',
    'Carpenter',
    'Painter',
    'Mason',
    'Welder',
    'Mechanic',
    'Driver',
    'Gardener',
    'Housekeeper',
  ];

  const distance = ['within 5 km', 'within 10 km', 'within 20 km', 'within 50 km', 'within 100 km'];

  const anyAvailability = [
    'Any availability',
    'Available',
    'Available today',
    'Available this week',
    'Available this month',
    'unavailable',
  ];
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <div>
          <span>Find near you</span>
          <div className="flex items-center gap-1">
            <MapPin className="size-3" />
            <span className="text-sm">Lucknow . Showing result within 10 km</span>
          </div>
        </div>
        <div className="flex gap-4 rounded-md border-gray-400 p-1">
          <CustomeButton name="Workers" />
          <CustomeButton name="Employers" />
        </div>
      </div>

      <SearchBar placeholder="Search by skill or name..." />
      <Dropdown options={options} defaultValue={`${options[0]}`} />
      <Dropdown options={distance} defaultValue={`${distance[0]}`} />
      <Dropdown options={anyAvailability} defaultValue={`${anyAvailability[0]}`} />
    </div>
  );
}
