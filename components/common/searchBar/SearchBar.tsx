import React from 'react';
import { SearchIcon } from 'lucide-react';

import { Input } from '@/components/ui/input';

interface SearchBarProps {
  readonly placeholder?: string;
  // readonly search?: string;
  // readonly onSearchChange?: (value: string) =>void;
}

export default function SearchBar({ placeholder }: SearchBarProps) {
  const [searchValue, setSearchValue] = React.useState<string>('');
  // console.log(searchValue)
  return (
    <div className="ga-4 relative flex items-center">
      <SearchIcon className="absolute left-3" />
      <Input
        placeholder={placeholder}
        className="rounded pl-10"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
}
