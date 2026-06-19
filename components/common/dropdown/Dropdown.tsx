import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface DropdownProps {
  readonly options?: string[];
  readonly defaultValue?: string;
}

export default function Dropdown({ options, defaultValue }: DropdownProps) {
  return (
    <Select defaultValue={defaultValue}>
      <SelectTrigger className="w-full rounded">
        <SelectValue />
      </SelectTrigger>
      <SelectContent position="popper">
        <SelectGroup>
          {options?.map((option, index) => (
            <SelectItem key={`${option[0]}-${index}`} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
