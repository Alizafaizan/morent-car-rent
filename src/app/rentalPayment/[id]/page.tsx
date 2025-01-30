// 'use client';
// import React, { useState } from 'react';
// import Image from 'next/image';
// import { Calendar } from '@/components/ui/calendar';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import { Select } from '@/components/ui/select';
// import { addDays, differenceInDays } from 'date-fns';

// interface RentalDetailsProps {
//   car: {
//     name: string;
//     pricePerDay: number;
//     image?: {
//       asset?: {
//         url: string;
//       };
//     };
//   };
// }

// export default function RentalDetails({ car }: RentalDetailsProps) {
//   const [pickupDate, setPickupDate] = useState<Date | undefined>(new Date());
//   const [returnDate, setReturnDate] = useState<Date | undefined>(addDays(new Date(), 3));
//   const [pickupTime, setPickupTime] = useState('10:00');
//   const [returnTime, setReturnTime] = useState('10:00');
//   const [pickupLocation, setPickupLocation] = useState('');
//   const [returnLocation, setReturnLocation] = useState('');
//   const [selectedExtras, setSelectedExtras] = useState({
//     insurance: false,
//     gps: false,
//     childSeat: false,
//   });

//   const calculateTotalDays = () => {
//     if (!pickupDate || !returnDate) return 0;
//     return differenceInDays(returnDate, pickupDate) + 1;
//   };

//   const calculateSubtotal = () => {
//     const days = calculateTotalDays();
//     return car.pricePerDay * days;
//   };

//   const calculateExtras = () => {
//     let total = 0;
//     if (selectedExtras.insurance) total += 20;
//     if (selectedExtras.gps) total += 10;
//     if (selectedExtras.childSeat) total += 5;
//     return total * calculateTotalDays();
//   };

//   const calculateTotal = () => {
//     return calculateSubtotal() + calculateExtras();
//   };

//   // Generate time options from 00:00 to 23:30 in 30-minute intervals
//   const timeOptions = Array.from({ length: 48 }, (_, i) => {
//     const hour = Math.floor(i / 2).toString().padStart(2, '0');
//     const minute = i % 2 === 0 ? '00' : '30';
//     return `${hour}:${minute}`;
//   });

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-lg space-y-6">
//       {/* Car Image and Basic Info */}
//       {car.image?.asset?.url && (
//         <div className="relative w-full h-48 mb-4">
//           <Image
//             src={car.image.asset.url}
//             alt={car.name}
//             fill
//             className="rounded-lg object-cover"
//             unoptimized
//           />
//         </div>
//       )}

//       {/* Pickup Details */}
//       <div className="space-y-4">
//         <h3 className="text-lg font-semibold">Pickup Details</h3>
//         <div className="space-y-3">
//           <div>
//             <label className="block text-sm font-medium mb-1">Pickup Location</label>
//             <Input
//               type="text"
//               placeholder="Enter pickup location"
//               value={pickupLocation}
//               onChange={(e) => setPickupLocation(e.target.value)}
//               className="w-full"
//             />
//           </div>
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium mb-1">Pickup Date</label>
//               <Calendar
//                 mode="single"
//                 selected={pickupDate}
//                 onSelect={setPickupDate}
//                 className="rounded-md border"
//                 disabled={(date) => date < new Date()}
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">Pickup Time</label>
//               <select
//                 value={pickupTime}
//                 onChange={(e) => setPickupTime(e.target.value)}
//                 className="w-full rounded-md border border-gray-300 p-2"
//               >
//                 {timeOptions.map((time) => (
//                   <option key={time} value={time}>
//                     {time}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Return Details */}
//       <div className="space-y-4">
//         <h3 className="text-lg font-semibold">Return Details</h3>
//         <div className="space-y-3">
//           <div>
//             <label className="block text-sm font-medium mb-1">Return Location</label>
//             <Input
//               type="text"
//               placeholder="Enter return location"
//               value={returnLocation}
//               onChange={(e) => setReturnLocation(e.target.value)}
//               className="w-full"
//             />
//           </div>
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium mb-1">Return Date</label>
//               <Calendar
//                 mode="single"
//                 selected={returnDate}
//                 onSelect={setReturnDate}
//                 className="rounded-md border"
//                 disabled={(date) => date < (pickupDate || new Date())}
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">Return Time</label>
//               <select
//                 value={returnTime}
//                 onChange={(e) => setReturnTime(e.target.value)}
//                 className="w-full rounded-md border border-gray-300 p-2"
//               >
//                 {timeOptions.map((time) => (
//                   <option key={time} value={time}>
//                     {time}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Additional Options */}
//       <div>
//         <h3 className="text-lg font-semibold mb-4">Additional Options</h3>
//         <div className="space-y-3">
//           <label className="flex items-center space-x-2">
//             <input
//               type="checkbox"
//               className="form-checkbox"
//               checked={selectedExtras.insurance}
//               onChange={(e) => setSelectedExtras(prev => ({...prev, insurance: e.target.checked}))}
//             />
//             <span>Insurance Protection ($20/day)</span>
//           </label>
//           <label className="flex items-center space-x-2">
//             <input
//               type="checkbox"
//               className="form-checkbox"
//               checked={selectedExtras.gps}
//               onChange={(e) => setSelectedExtras(prev => ({...prev, gps: e.target.checked}))}
//             />
//             <span>GPS Navigation ($10/day)</span>
//           </label>
//           <label className="flex items-center space-x-2">
//             <input
//               type="checkbox"
//               className="form-checkbox"
//               checked={selectedExtras.childSeat}
//               onChange={(e) => setSelectedExtras(prev => ({...prev, childSeat: e.target.checked}))}
//             />
//             <span>Child Seat ($5/day)</span>
//           </label>
//         </div>
//       </div>

//       {/* Price Breakdown */}
//       <div className="border-t pt-4">
//         <h3 className="text-lg font-semibold mb-4">Price Breakdown</h3>
//         <div className="space-y-2">
//           <div className="flex justify-between">
//             <span>Car Rental ({calculateTotalDays()} days × ${car.pricePerDay})</span>
//             <span>${calculateSubtotal()}</span>
//           </div>
//           <div className="flex justify-between">
//             <span>Additional Options</span>
//             <span>${calculateExtras()}</span>
//           </div>
//           <div className="flex justify-between font-bold text-lg border-t pt-2">
//             <span>Total</span>
//             <span>${calculateTotal()}</span>
//           </div>
//         </div>
//       </div>

//       {/* Payment Button */}
//       <Button 
//         className="w-full bg-blue-600 hover:bg-blue-700 text-white"
//         onClick={() => {
//           // Handle payment logic here
//           console.log('Proceeding to payment...', {
//             pickupLocation,
//             pickupDate,
//             pickupTime,
//             returnLocation,
//             returnDate,
//             returnTime,
//             selectedExtras,
//             totalAmount: calculateTotal()
//           });
//         }}
//       >
//         Proceed to Payment
//       </Button>
//     </div>
//   );
// }

// app/rentalPayment/page.tsx
'use client';
import PaymentSuccessPage from '@/app/success/page';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface RentalDetails {
  carId: string;
  carName: string;
  pickupDetails: {
    location: string;
    date: string;
    time: string;
  };
  returnDetails: {
    location: string;
    date: string;
    time: string;
  };
  extras: {
    insurance: boolean;
    gps: boolean;
    childSeat: boolean;
  };
  pricing: {
    subtotal: number;
    extrasTotal: number;
    totalAmount: number;
    daysCount: number;
  };
}

export default function RentalPayment() {
  const searchParams = useSearchParams();
  const [rentalDetails, setRentalDetails] = useState<RentalDetails | null>(null);

  useEffect(() => {
    const details = searchParams.get('details');
    if (details) {
      try {
        const decodedDetails = JSON.parse(decodeURIComponent(details));
        setRentalDetails(decodedDetails);
      } catch (error) {
        console.error('Error parsing rental details:', error);
      }
    }
  }, [searchParams]);

  

  if (!rentalDetails) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p>Loading rental details...</p>
        </div>
      </div>
    );
  }
  

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white p-6 rounded-lg shadow-lg space-y-6">
        <h2 className="text-2xl font-bold">Payment Details</h2>
        
        {/* Rental Summary */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Rental Summary</h3>
          <div className="space-y-2">
            <p><span className="font-medium">Car:</span> {rentalDetails.carName}</p>
            <p><span className="font-medium">Duration:</span> {rentalDetails.pricing.daysCount} days</p>
            <p><span className="font-medium">Pickup:</span> {rentalDetails.pickupDetails.location} on {rentalDetails.pickupDetails.date} at {rentalDetails.pickupDetails.time}</p>
            <p><span className="font-medium">Return:</span> {rentalDetails.returnDetails.location} on {rentalDetails.returnDetails.date} at {rentalDetails.returnDetails.time}</p>
          </div>
        </div>

        {/* Selected Extras */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Selected Extras</h3>
          <div className="space-y-2">
            {rentalDetails.extras.insurance && <p>Insurance Protection</p>}
            {rentalDetails.extras.gps && <p>GPS Navigation</p>}
            {rentalDetails.extras.childSeat && <p>Child Seat</p>}
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Price Breakdown</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Rental Subtotal</span>
              <span>${rentalDetails.pricing.subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Extras</span>
              <span>${rentalDetails.pricing.extrasTotal}</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-2">
              <span>Total Amount</span>
              <span>${rentalDetails.pricing.totalAmount}</span>
            </div>
          </div>
        </div>

        {/* Add payment form here */}
        <Link href="/PaymentSuccesPage">
          <Button 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => {
              // Add your payment processing logic here
              console.log('Processing payment...', rentalDetails);
            }}
          >
        

            Complete Payment
          </Button>
          </Link>
         
      </div>
      </div>
  );
}
