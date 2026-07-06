'use client';

import { AdminContentLayout } from '@/components/common/admin-panel/AdminContentLayout';
import { About } from '@/components/common/home/About';
import { Mazdoor } from '@/components/common/home/Mazdoor';
import { MazdoorReason } from '@/components/common/home/MazdoorReason';
import { Services } from '@/components/common/home/Services';
import { Team } from '@/components/common/home/Team';
import { ProfileCard } from '@/components/common/profileCard/ProfileCard';

export default function dashboard() {
  return (
    <AdminContentLayout title="MAZDOOR">
      <ProfileCard />
      <MazdoorReason />
      <Services />
      <Mazdoor />
      <Team />
      <About />
    </AdminContentLayout>
  );
}
