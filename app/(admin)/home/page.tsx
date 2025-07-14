import { AdminContentLayout } from '@/components/common/admin-panel/AdminContentLayout';
import { Mazdoor } from '@/components/common/home/Mazdoor';
import { MazdoorReason } from '@/components/common/home/MazdoorReason';
import { Services } from '@/components/common/home/Services';

export default function dashboard() {
  return (
    <AdminContentLayout title="MAZDOOR">
      <MazdoorReason />
      <Services />
      <Mazdoor />
    </AdminContentLayout>
  );
}
