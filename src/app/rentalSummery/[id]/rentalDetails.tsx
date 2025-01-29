'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import { addDays, differenceInDays } from 'date-fns';
import { useRouter } from "next/navigation";  // ✅ Correct for App Router

interface RentalDetailsProps {
  car: {
    _id: any;
    name: string;
    pricePerDay: number;
    image?: {
      asset?: {
        url: string;
      };
    };
  };
}

export default function RentalDetails({ car }: RentalDetailsProps) {
  const router = useRouter();
  const [pickupDate, setPickupDate] = useState({
    day: new Date().getDate().toString(),
    month: (new Date().getMonth() + 1).toString(),
    year: new Date().getFullYear().toString()
  });
  const [returnDate, setReturnDate] = useState({
    day: addDays(new Date(), 3).getDate().toString(),
    month: (addDays(new Date(), 3).getMonth() + 1).toString(),
    year: addDays(new Date(), 3).getFullYear().toString()
  });
  const [pickupTime, setPickupTime] = useState('10:00');
  const [returnTime, setReturnTime] = useState('10:00');
  const [pickupLocation, setPickupLocation] = useState('');
  const [returnLocation, setReturnLocation] = useState('');
  const [selectedExtras, setSelectedExtras] = useState({
    insurance: false,
    gps: false,
    childSeat: false,
  });

  // Generate options for dates
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
  const years = Array.from({ length: 3 }, (_, i) => (new Date().getFullYear() + i).toString());

  const timeOptions = Array.from({ length: 48 }, (_, i) => {
    const hour = Math.floor(i / 2).toString().padStart(2, '0');
    const minute = i % 2 === 0 ? '00' : '30';
    return `${hour}:${minute}`;
  });

  const calculateTotalDays = () => {
    try {
      // Create date objects for comparison
      const pickupDateObj = new Date(
        parseInt(pickupDate.year),
        parseInt(pickupDate.month) - 1,
        parseInt(pickupDate.day)
      );
      
      const returnDateObj = new Date(
        parseInt(returnDate.year),
        parseInt(returnDate.month) - 1,
        parseInt(returnDate.day)
      );

      // Validate dates
      if (isNaN(pickupDateObj.getTime()) || isNaN(returnDateObj.getTime())) {
        console.error('Invalid date objects created');
        return 1;
      }

      // Calculate difference in days and add 1 to include both pickup and return days
      const days = Math.max(1, differenceInDays(returnDateObj, pickupDateObj) + 1);
      console.log('Total days calculated:', days); // Debug log
      return days;
    } catch (error) {
      console.error('Error in calculateTotalDays:', error);
      return 1;
    }
  };

  const calculateSubtotal = () => {
    try {
      const days = calculateTotalDays();
      const pricePerDay = parseFloat(car.pricePerDay.toString()) || 0;
      const subtotal = days * pricePerDay;
      
      console.log('Subtotal calculation:', { days, pricePerDay, subtotal }); // Debug log
      return subtotal;
    } catch (error) {
      console.error('Error in calculateSubtotal:', error);
      return 0;
    }
  };
 


  const calculateExtras = () => {
    try {
      const days = calculateTotalDays();
      let dailyExtrasTotal = 0;
      if (selectedExtras.insurance) dailyExtrasTotal += 20;
      if (selectedExtras.gps) dailyExtrasTotal += 10;
      if (selectedExtras.childSeat) dailyExtrasTotal += 5;
      
      const totalExtras = dailyExtrasTotal * days;
      console.log('Extras calculation:', { days, dailyExtrasTotal, totalExtras }); // Debug log
      return totalExtras;
    } catch (error) {
      console.error('Error in calculateExtras:', error);
      return 0;
    }
  };
  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const extras = calculateExtras();
    const total = subtotal + extras;
    console.log('Total calculation:', { subtotal, extras, total }); // Debug log
    return total;
  };

  

  const handleProceedToPayment = () => {
    // Validate required fields
    if (!pickupLocation || !returnLocation) {
      alert('Please fill in both pickup and return locations');
      return;
    }

        // Create rental details object
        const rentalDetails = {
          carId: car._id,
          carName: car.name,
          pickupDetails: {
            location: pickupLocation,
            date: `${pickupDate.year}-${pickupDate.month.padStart(2, '0')}-${pickupDate.day.padStart(2, '0')}`,
            time: pickupTime
          },
          returnDetails: {
            location: returnLocation,
            date: `${returnDate.year}-${returnDate.month.padStart(2, '0')}-${returnDate.day.padStart(2, '0')}`,
            time: returnTime
          },
          extras: selectedExtras,
          pricing: {
            subtotal: calculateSubtotal(),
            extrasTotal: calculateExtras(),
            totalAmount: calculateTotal(),
            daysCount: calculateTotalDays()
          }
        };
    
        // Encode the rental details as a URL-safe string
        const encodedDetails = encodeURIComponent(JSON.stringify(rentalDetails));
        
        // Navigate to payment page with rental details
        router.push(`/rentalPayment/${car._id}?details=${encodedDetails}`);
      };
    
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white p-6 rounded-lg shadow-lg space-y-6">
        {/* Car Image and Basic Info */}
        {car.image?.asset?.url && (
          <div className="relative w-full h-64">
            <Image
              src={car.image.asset.url}
              alt={car.name}
              fill
              className="rounded-lg object-contain"
              unoptimized
            />
          </div>
        )}

        {/* Pickup Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Pickup Details</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium mb-1">Pickup Location</label>
              <Input
                type="text"
                placeholder="Enter pickup location"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium">Pickup Date</label>
                <div className="grid grid-cols-3 gap-2">
                  <select
                    value={pickupDate.day}
                    onChange={(e) => setPickupDate(prev => ({ ...prev, day: e.target.value }))}
                    className="w-full rounded-md border border-gray-300 p-2"
                  >
                    {days.map(day => (
                      <option key={day} value={day}>{day}</option>
                    ))}
                  </select>
                  <select
                    value={pickupDate.month}
                    onChange={(e) => setPickupDate(prev => ({ ...prev, month: e.target.value }))}
                    className="w-full rounded-md border border-gray-300 p-2"
                  >
                    {months.map(month => (
                      <option key={month} value={month}>{month}</option>
                    ))}
                  </select>
                  <select
                    value={pickupDate.year}
                    onChange={(e) => setPickupDate(prev => ({ ...prev, year: e.target.value }))}
                    className="w-full rounded-md border border-gray-300 p-2"
                  >
                    {years.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Pickup Time</label>
                <select
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-full rounded-md border border-gray-300 p-2"
                >
                  {timeOptions.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Return Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Return Details</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium mb-1">Return Location</label>
              <Input
                type="text"
                placeholder="Enter return location"
                value={returnLocation}
                onChange={(e) => setReturnLocation(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium">Return Date</label>
                <div className="grid grid-cols-3 gap-2">
                  <select
                    value={returnDate.day}
                    onChange={(e) => setReturnDate(prev => ({ ...prev, day: e.target.value }))}
                    className="w-full rounded-md border border-gray-300 p-2"
                  >
                    {days.map(day => (
                      <option key={day} value={day}>{day}</option>
                    ))}
                  </select>
                  <select
                    value={returnDate.month}
                    onChange={(e) => setReturnDate(prev => ({ ...prev, month: e.target.value }))}
                    className="w-full rounded-md border border-gray-300 p-2"
                  >
                    {months.map(month => (
                      <option key={month} value={month}>{month}</option>
                    ))}
                  </select>
                  <select
                    value={returnDate.year}
                    onChange={(e) => setReturnDate(prev => ({ ...prev, year: e.target.value }))}
                    className="w-full rounded-md border border-gray-300 p-2"
                  >
                    {years.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Return Time</label>
                <select
                  value={returnTime}
                  onChange={(e) => setReturnTime(e.target.value)}
                  className="w-full rounded-md border border-gray-300 p-2"
                >
                  {timeOptions.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Options */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Additional Options</h3>
          <div className="space-y-3">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={selectedExtras.insurance}
                onChange={(e) => setSelectedExtras(prev => ({...prev, insurance: e.target.checked}))}
              />
              <span>Insurance Protection ($20/day)</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={selectedExtras.gps}
                onChange={(e) => setSelectedExtras(prev => ({...prev, gps: e.target.checked}))}
              />
              <span>GPS Navigation ($10/day)</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={selectedExtras.childSeat}
                onChange={(e) => setSelectedExtras(prev => ({...prev, childSeat: e.target.checked}))}
              />
              <span>Child Seat ($5/day)</span>
            </label>
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="border-t pt-4">
        <h3 className="text-lg font-semibold mb-4">Price Breakdown</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Car Rental ({calculateTotalDays()} days × ${car.pricePerDay})</span>
            <span>${calculateSubtotal().toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Additional Options</span>
            <span>${calculateExtras().toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-lg border-t pt-2">
            <span>Total</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>
        </div>
      </div>
        {/* Payment Button */}
        <Button 
        className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-4"
        onClick={handleProceedToPayment}
      >
        Confirm Booking
      </Button>
      </div>
    </div>
  );
}