
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from '@/components/ui/input';

interface GeolocationProps {
  readonly openModal: boolean;
  readonly setOpenModal?: (value: boolean) => void
}

export function Geolocation({ openModal, setOpenModal }: GeolocationProps) {


//   const location =
//     useGeolocated({
//       positionOptions: {
//         enableHighAccuracy: false,
//       },
//       userDecisionTimeout: 5000,
//     });
//     console.log(location.coords)
//     const getAddress = async (lat:any, lon:any) => {
//   try {
//     const response = await axios.get('https://search.mappls.com/search/address/rev-geocode', {
//       params: {
//         lat: lat,
//         lng: lon,
//         access_token: 'yncyeejlzpmbkrhvtryzoqcgpduclnwisigj'
//       }
//     });
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// };

// if(location.coords){
//   const lat = location.coords.latitude
//   const long = location.coords.longitude
//   getAddress(lat,long)
// }

//   useEffect(() => {
//     const address = async () => {
//       const res = await fetch(
//         `https://nominatim.openstreetmap.org/reverse?lat=${location.coords.latitude }&lon=${location.coords.longitude }&format=json`
//       );
//       const data = await res.json();
//       return data
//     }
//     if (!location.coords) return;
    

   
//   }, [location.coords])

// console.log("geolocation------")
// navigator.geolocation.getCurrentPosition((position,{enableHighaccuracy:true})=>{
//   console.log(position.coords.latitude,position.coords.longitude)
// })
function success(position:GeolocationPosition) {
  console.log(position.coords.latitude, position.coords.longitude);
}

function error() {
  alert("Sorry, no position available.");
}

const options = {
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 27000,
};

const watchID = navigator.geolocation.watchPosition(success, error, options);
console.log(watchID)
  return <Dialog open={openModal} onOpenChange={setOpenModal}>
    <DialogContent className="w-1/4 py-9 [&>button]:hidden">
      <DialogHeader className="flex items-center justify-center">
        <DialogTitle className="text-3xl">Geolocation page</DialogTitle>
      </DialogHeader>
      <Input type="text" placeholder="search country"/>
    </DialogContent>
  </Dialog>
}