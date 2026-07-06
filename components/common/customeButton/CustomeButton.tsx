import { Building, KeySquare } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface CustomeButtonProps {
  readonly name: string;
}

export default function CustomeButton({ name }: CustomeButtonProps) {
  return (
    <Button variant="ghost" className="flex w-26 items-center gap-1 rounded border border-gray-400">
      {name == 'Workers' ? (
        <KeySquare data-testid="worker" className="size-3" />
      ) : (
        <Building data-testid="not_worker" className="size-3" />
      )}
      <span>{name}</span>
    </Button>
  );
}
