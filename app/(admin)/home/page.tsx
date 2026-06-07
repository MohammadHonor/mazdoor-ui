'use client';

import { AdminContentLayout } from '@/components/common/admin-panel/AdminContentLayout';
import { About } from '@/components/common/home/About';
import { Mazdoor } from '@/components/common/home/Mazdoor';
import { MazdoorReason } from '@/components/common/home/MazdoorReason';
import { Services } from '@/components/common/home/Services';
import { Team } from '@/components/common/home/Team';

export default function dashboard() {
  console.log("nothing")
  return (
    <AdminContentLayout title="MAZDOOR">
      <MazdoorReason />
      <Services />
      <Mazdoor />
      <Team />
      <About />
    </AdminContentLayout>
  );
}
