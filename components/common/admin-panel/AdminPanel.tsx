import { cn } from '@/lib/utils';

export const AdminPanel = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <main className={cn('')}>{children}</main>
    </>
  );
};
