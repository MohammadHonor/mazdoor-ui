import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

interface GeolocationProps {
  readonly openModal: boolean;
  readonly setOpenModal?: (value: boolean) => void;
}

export function Geolocation({ openModal, setOpenModal }: GeolocationProps) {
  const options = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000,
  };
  function error() {
    alert('Sorry, no position available.');
  }

  function success(position: GeolocationPosition) {
    console.log(position.coords.latitude, position.coords.longitude);
  }

  const watchID = navigator.geolocation.watchPosition(success, error, options);
  console.log(watchID);
  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
      <DialogContent className="w-1/4 py-9 [&>button]:hidden">
        <DialogHeader className="flex items-center justify-center">
          <DialogTitle className="text-3xl">Geolocation page</DialogTitle>
        </DialogHeader>
        <Input type="text" placeholder="search country" />
      </DialogContent>
    </Dialog>
  );
}
