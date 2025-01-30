// // import React from 'react';
// // import Image from 'next/image';
// // import I1 from '@/app/assets/dashboard/D1.png';
// // import I2 from '@/app/assets/dashboard/D2.png';
// // import I3 from '@/app/assets/dashboard/D3.png';
// // import I4 from '@/app/assets/dashboard/D4.png';
// // import I5 from '@/app/assets/dashboard/D5.png';
// // import I6 from '@/app/assets/dashboard/D6.png';
// // import I7 from '@/app/assets/dashboard/D7.png';
// // import I8 from '@/app/assets/dashboard/D8.png';
// // import I9 from '@/app/assets/dashboard/D9.png';
// // import I10 from '@/app/assets/dashboard/D10.png';
// // import I11 from '@/app/assets/dashboard/D11.png';
// // import I12 from '@/app/assets/dashboard/D12.png';
// // import I13 from '@/app/assets/dashboard/Look.png';
// // import dropdown from '@/app/assets/herosection/arrow.png';
// // import swap from '@/app/assets/herosection/Swap.png';
// // import I14 from '@/app/assets/dashboard/Top 5 Car Rental.png';
// // import I15 from '@/app/assets/dashboard/Recent Transaction.png';

// // const page = () => {
// //   return (
// //     <>
// //     {/* Parent div for dashboard page in which side bar maps and other images are present */}
// //     <div className='flex '>
// //         {/* this div is for sidebar */}
// //         <div className='w-[20%] p-4 hidden md:block'>
// //             <div>
// //                 <h1 className='text-[rgba(144,163,191,100%)] text-[12px] font-semibold uppercase'>Main Menu</h1>
// //                 <ul className='my-4 space-y-3'>
// //                     <li className='text-white font-semibold flex items-center gap-3 bg-[rgba(53,99,233,100%)] px-3 py-2 rounded-lg'> <Image src={I1} alt='loading' width={20} height={20}></Image> Dashboard</li>
// //                     <li className='text-[rgba(89,103,128,100%)] font-semibold flex items-center gap-3 px-3 py-2'> <Image src={I2} alt='loading' width={20} height={20} />Car Rent </li>
// //                     <li className='text-[rgba(89,103,128,100%)] font-semibold flex items-center gap-3 px-3 py-2'> <Image src={I3} alt='loading' width={20} height={20} />Insight </li>
// //                     <li className='text-[rgba(89,103,128,100%)] font-semibold flex items-center gap-3 px-3 py-2'> <Image src={I4} alt='loading' width={20} height={20} />Reimburse </li>
// //                     <li className='text-[rgba(89,103,128,100%)] font-semibold flex items-center gap-3 px-3 py-2'> <Image src={I5} alt='loading' width={20} height={20} />Inbox </li>
// //                     <li className='text-[rgba(89,103,128,100%)] font-semibold flex items-center gap-3 px-3 py-2'> <Image src={I6} alt='loading' width={20} height={20} />Calender </li>
// //                 </ul>
// //             </div>

// //             <div className='mt-4'>
// //                 <h1 className='text-[rgba(144,163,191,100%)] text-[12px] font-semibold'>Preference</h1>
// //                 <ul className='my-4 space-y-3'>
// //                     <li className='text-[rgba(89,103,128,100%)] font-semibold flex items-center gap-3 px-3 py-2'> <Image src={I7} alt='loading' width={20} height={20} />Settings </li>
// //                     <li className='text-[rgba(89,103,128,100%)] font-semibold flex items-center gap-3 px-3 py-2'> <Image src={I8} alt='loading' width={20} height={20} />Help & Center  </li>
// //                     <li className='text-[rgba(89,103,128,100%)] font-semibold flex items-center gap-3 px-3 py-2'> <Image src={I9} alt='loading' width={20} height={20} />Dark Mode  <Image src={I10} alt='loading' width={80} height={80} className='cursor-pointer' /></li>
// //                 </ul>
// //             </div>

// //             <div className='mt-16 flex gap-3 items-center cursor-pointer'>
// //                 <Image src={I11} alt='loading' width={20} height={20} />
// //                 <h1 className='text-[rgba(144,163,191,100%)] text-[12px] font-semibold'>Log out</h1>
// //             </div>

// //         </div>

// //         {/* dashboard div */}

// //         <div className='bg-[#F6F7F9] p-4 mx-auto lg:w-[80%] lg:flex gap-2 justify-between'>

// //         {/* right div */}
// //             <div className='bg-white lg:w-[50%] p-4 rounded-lg'>
// //                 <div>
// //                     <h1 className='text-[rgba(26,32,44,100%)] font-bold'>Details Rental</h1>
// //                 </div>

// //                 <div className='w-fit mx-auto mt-3'>
// //                     <Image src={I12} alt='loading' width={550} height={500}></Image>
// //                 </div>

// //                 <div className='flex justify-between mt-3'>
// //                     <div className='flex gap-3'>
// //                         <div>
// //                             <Image src={I13} alt='loading' width={150} height={150}></Image>
// //                         </div>
// //                         <div>
// //                             <h1 className='text-[rgba(26,32,44,100%)] font-bold'>Nissan GT - R</h1>
// //                             <p className='text-[#3D5278] font-bold'>Sport car</p>
// //                         </div>
// //                     </div>
// //                     <div>
// //                         <h1>#9761</h1>
// //                     </div>
// //                 </div>

// //                 <div className='w-[100%] mt-3 h-fit'>
// //                     <div className='px-4 py-3 bg-white '>
// //                         <div className='flex gap-4'>
// //                             <input type="radio" checked/>
// //                             <h1 className='font-bold'>Pick - Up</h1>
// //                         </div>

// //                         <div className='flex justify-between mt-2'>
// //                             <div>
// //                             <h1 className='font-bold'>Locations</h1>
// //                             <div className='flex items-center justify-between'>
// //                                 <h1>Select your city</h1>
// //                                 <Image src={dropdown} alt='loading' width={20} height={20}></Image>
// //                             </div>
// //                         </div>

// //                         <div className='w-[2px] h-10 bg-[#C3D4E9]'></div>

// //                         <div>
// //                             <h1 className='font-bold'>Date</h1>
// //                             <div className='flex items-center justify-between'>
// //                                 <h1>Select your date</h1>
// //                                 <Image src={dropdown} alt='loading' width={20} height={20}></Image>
// //                             </div>
// //                         </div>

// //                         <div className='w-[2px] h-10 bg-[#C3D4E9]'></div>

// //                         <div>
// //                             <h1 className='font-bold'>Time</h1>
// //                             <div className='flex items-center justify-between'>
// //                                 <h1>Select your time</h1>
// //                                 <Image src={dropdown} alt='loading' width={20} height={20}></Image>
// //                             </div>
// //                         </div>
// //                     </div>
// //                     </div>

// //                     <div className='flex items-center justify-center'>
// //                         <button className='bg-[rgba(53,99,233,100%)] w-fit h-fit p-3 rounded-md '><Image src={swap} alt='loading' width={30} height={30}></Image></button>
// //                     </div>

// //                     <div className='w-full px-4 py-3 bg-white'>
// //                         <div className='flex gap-4'>
// //                             <input type="radio" checked/>
// //                             <h1 className='font-bold'>Drop - Off</h1>
// //                         </div>

// //                         <div className='flex justify-between mt-2'>
// //                             <div>
// //                                 <h1 className='font-bold'>Locations</h1>
// //                                 <div className='flex items-center justify-between'>
// //                                     <h1>Select your city</h1>
// //                                     <Image src={dropdown} alt='loading' width={20} height={20}></Image>
// //                                 </div>
// //                             </div>

// //                             <div className='w-[2px] h-10 bg-[#C3D4E9]'></div>

// //                             <div>
// //                                 <h1 className='font-bold'>Date</h1>
// //                                 <div className='flex items-center justify-between'>
// //                                     <h1>Select your date</h1>
// //                                     <Image src={dropdown} alt='loading' width={20} height={20}></Image>
// //                                 </div>
// //                             </div>

// //                             <div className='w-[2px] h-10 bg-[#C3D4E9]'></div>
                            
// //                             <div>
// //                                 <h1 className='font-bold'>Time</h1>
// //                                 <div className='flex items-center justify-between'>
// //                                     <h1>Select your time</h1>
// //                                     <Image src={dropdown} alt='loading' width={20} height={20}></Image>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>    
// //                 </div>

// //                 <div className='flex justify-between mt-3 items-end'>
// //                     <div>
// //                         <h1 className='text-[rgba(26,32,44,100%)] text-[18px] font-bold'>Total Rental Price</h1>
// //                         <p className='text-[rgba(144,163,191,100%)] text-[14px] '>Overall price and includes rental discount</p>
// //                     </div>
// //                     <div>
// //                         <h1 className='text-[rgba(26,32,44,100%)] font-bold text-[32px]'>$80.00</h1>
// //                     </div>
// //                 </div>
// //             </div>

// //         {/* left div */}
// //             <div  className='my-3 md:my-0'>
// //                 <div className='mx-auto md:mx-0 w-fit'>
// //                 <Image src={I14} alt='loading' width={500} height={500}></Image>
// //                 </div>
// //                 <div className='mx-auto md:mx-0 md:mt-10 w-fit'>
// //                 <Image src={I15} alt='loading' width={500} height={500}></Image>
// //                 </div>
// //             </div>
// //         </div>
        
// //     </div>
// //     </>
// //   )
// // }

// // export default page
// "use client"
// import React, { useState } from 'react';
// import Image from 'next/image';
// import I1 from '@/app/assets/dashboard/D1.png';
// import I2 from '@/app/assets/dashboard/D2.png';
// import I3 from '@/app/assets/dashboard/D3.png';
// import I4 from '@/app/assets/dashboard/D4.png';
// import I5 from '@/app/assets/dashboard/D5.png';
// import I6 from '@/app/assets/dashboard/D6.png';
// import I7 from '@/app/assets/dashboard/D7.png';
// import I8 from '@/app/assets/dashboard/D8.png';
// import I9 from '@/app/assets/dashboard/D9.png';
// import I10 from '@/app/assets/dashboard/D10.png';
// import I11 from '@/app/assets/dashboard/D11.png';
// import I12 from '@/app/assets/dashboard/D12.png';
// import I13 from '@/app/assets/dashboard/Look.png';
// import dropdown from '@/app/assets/herosection/arrow.png';
// import swap from '@/app/assets/herosection/Swap.png';

// const Dashboard = () => {
//   // State management for form data
//   const [rentalDetails, setRentalDetails] = useState({
//     pickUp: {
//       location: '',
//       date: '',
//       time: ''
//     },
//     dropOff: {
//       location: '',
//       date: '',
//       time: ''
//     }
//   });

//   // Sample dynamic data (in real app, this would come from an API)
//   const carDetails = {
//     id: '#9761',
//     name: 'Nissan GT - R',
//     category: 'Sport car',
//     price: 80.00,
//     image: I13
//   };

//   const sidebarMenuItems = [
//     { icon: I1, text: 'Dashboard', active: true },
//     { icon: I2, text: 'Car Rent', active: false },
//     { icon: I3, text: 'Insight', active: false },
//     { icon: I4, text: 'Reimburse', active: false },
//     { icon: I5, text: 'Inbox', active: false },
//     { icon: I6, text: 'Calender', active: false },
//   ];

//   const preferenceItems = [
//     { icon: I7, text: 'Settings' },
//     { icon: I8, text: 'Help & Center' },
//     { icon: I9, text: 'Dark Mode', hasToggle: true },
//   ];

//   // Handler for form inputs
//   const handleInputChange = (section: 'pickUp' | 'dropOff', field: string, value: string) => {
//     setRentalDetails(prev => ({
//       ...prev,
//       [section]: {
//         ...prev[section],
//         [field]: value
//       }
//     }));
//   };

//   const LocationDropdown = ({ section, field }: { section: 'pickUp' | 'dropOff'; field: 'location' | 'date' | 'time' }) => (
//     <div>
//       <h1 className='font-bold'>Locations</h1>
//       <div className='flex items-center justify-between'>
//         <select 
//           value={rentalDetails[section][field]}
//           onChange={(e) => handleInputChange(section, field, e.target.value)}
//           className="bg-transparent outline-none"
//         >
//           <option value="">Select your city</option>
//           <option value="new-york">New York</option>
//           <option value="los-angeles">Los Angeles</option>
//           <option value="chicago">Chicago</option>
//         </select>
//         <Image src={dropdown} alt='dropdown' width={20} height={20} />
//       </div>
//     </div>
//   );

//   const DateTimePicker = ({ section, type }: { section: 'pickUp' | 'dropOff'; type: 'date' | 'time' }) => (
//     <div>
//       <h1 className='font-bold'>{type === 'date' ? 'Date' : 'Time'}</h1>
//       <div className='flex items-center justify-between'>
//         <input
//           type={type}
//           value={rentalDetails[section][type]}
//           onChange={(e) => handleInputChange(section, type, e.target.value)}
//           className="bg-transparent outline-none"
//         />
//         <Image src={dropdown} alt='dropdown' width={20} height={20} />
//       </div>
//     </div>
//   );

//   return (
//     <div className='flex'>
//       {/* Sidebar */}
//       <div className='w-[20%] p-4 hidden md:block'>
//         <div>
//           <h1 className='text-[rgba(144,163,191,100%)] text-[12px] font-semibold uppercase'>
//             Main Menu
//           </h1>
//           <ul className='my-4 space-y-3'>
//             {sidebarMenuItems.map((item, index) => (
//               <li 
//                 key={index}
//                 className={`font-semibold flex items-center gap-3 px-3 py-2 ${
//                   item.active 
//                     ? 'text-white bg-[rgba(53,99,233,100%)] rounded-lg'
//                     : 'text-[rgba(89,103,128,100%)]'
//                 }`}
//               >
//                 <Image src={item.icon} alt='icon' width={20} height={20} />
//                 {item.text}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Preferences Section */}
//         <div className='mt-4'>
//           <h1 className='text-[rgba(144,163,191,100%)] text-[12px] font-semibold'>
//             Preference
//           </h1>
//           <ul className='my-4 space-y-3'>
//             {preferenceItems.map((item, index) => (
//               <li 
//                 key={index}
//                 className='text-[rgba(89,103,128,100%)] font-semibold flex items-center gap-3 px-3 py-2'
//               >
//                 <Image src={item.icon} alt='icon' width={20} height={20} />
//                 {item.text}
//                 {item.hasToggle && (
//                   <Image src={I10} alt='toggle' width={80} height={80} className='cursor-pointer' />
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Logout Section */}
//         <div className='mt-16 flex gap-3 items-center cursor-pointer'>
//           <Image src={I11} alt='logout' width={20} height={20} />
//           <h1 className='text-[rgba(144,163,191,100%)] text-[12px] font-semibold'>
//             Log out
//           </h1>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className='bg-[#F6F7F9] p-4 mx-auto lg:w-[80%] lg:flex gap-2 justify-between'>
//         {/* Rental Details */}
//         <div className='bg-white lg:w-[50%] p-4 rounded-lg'>
//           <div>
//             <h1 className='text-[rgba(26,32,44,100%)] font-bold'>Details Rental</h1>
//           </div>

//           <div className='w-fit mx-auto mt-3'>
//             <Image src={I12} alt='car' width={550} height={500} />
//           </div>

//           <div className='flex justify-between mt-3'>
//             <div className='flex gap-3'>
//               <div>
//                 <Image src={carDetails.image} alt='car' width={150} height={150} />
//               </div>
//               <div>
//                 <h1 className='text-[rgba(26,32,44,100%)] font-bold'>{carDetails.name}</h1>
//                 <p className='text-[#3D5278] font-bold'>{carDetails.category}</p>
//               </div>
//             </div>
//             <div>
//               <h1>{carDetails.id}</h1>
//             </div>
//           </div>

//           {/* Pickup Section */}
//           <div className='w-[100%] mt-3 h-fit'>
//             <div className='px-4 py-3 bg-white'>
//               <div className='flex gap-4'>
//                 <input type="radio" checked readOnly />
//                 <h1 className='font-bold'>Pick - Up</h1>
//               </div>

//               <div className='flex justify-between mt-2'>
//                 <LocationDropdown section="pickUp" field="location" />
//                 <div className='w-[2px] h-10 bg-[#C3D4E9]' />
//                 <DateTimePicker section="pickUp" type="date" />
//                 <div className='w-[2px] h-10 bg-[#C3D4E9]' />
//                 <DateTimePicker section="pickUp" type="time" />
//               </div>
//             </div>

//             {/* Swap Button */}
//             <div className='flex items-center justify-center'>
//               <button className='bg-[rgba(53,99,233,100%)] w-fit h-fit p-3 rounded-md'>
//                 <Image src={swap} alt='swap' width={30} height={30} />
//               </button>
//             </div>

//             {/* Dropoff Section */}
//             <div className='w-full px-4 py-3 bg-white'>
//               <div className='flex gap-4'>
//                 <input type="radio" checked readOnly />
//                 <h1 className='font-bold'>Drop - Off</h1>
//               </div>

//               <div className='flex justify-between mt-2'>
//                 <LocationDropdown section="dropOff" field="location" />
//                 <div className='w-[2px] h-10 bg-[#C3D4E9]' />
//                 <DateTimePicker section="dropOff" type="date" />
//                 <div className='w-[2px] h-10 bg-[#C3D4E9]' />
//                 <DateTimePicker section="dropOff" type="time" />
//               </div>
//             </div>
//           </div>

//           {/* Price Section */}
//           <div className='flex justify-between mt-3 items-end'>
//             <div>
//               <h1 className='text-[rgba(26,32,44,100%)] text-[18px] font-bold'>
//                 Total Rental Price
//               </h1>
//               <p className='text-[rgba(144,163,191,100%)] text-[14px]'>
//                 Overall price and includes rental discount
//               </p>
//             </div>
//             <div>
//               <h1 className='text-[rgba(26,32,44,100%)] font-bold text-[32px]'>
//                 ${carDetails.price.toFixed(2)}
//               </h1>
//             </div>
//           </div>
//         </div>

//         {/* Right Section - Charts */}
//         <div className='my-3 md:my-0'>
//           <div className='mx-auto md:mx-0 w-fit'>
//             {/* Replace with dynamic chart component */}
//             <div className="bg-white p-4 rounded-lg">
//               <h2 className="font-bold mb-4">Top 5 Car Rentals</h2>
//               {/* Add your chart component here */}
//             </div>
//           </div>
//           <div className='mx-auto md:mx-0 md:mt-10 w-fit'>
//             {/* Replace with dynamic transactions component */}
//             <div className="bg-white p-4 rounded-lg">
//               <h2 className="font-bold mb-4">Recent Transactions</h2>
//               {/* Add your transactions component here */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

"use client";

import { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import { format } from 'date-fns';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface BookingDetails {
  _id: string;
  name: string;
  phone: string;
  carDetails: {
    carId: string;
    bookingDetails: {
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
      pricing: {
        totalAmount: number;
        daysCount: number;
      };
    };
  };
  _createdAt: string;
}

interface CarDetails {
  _id: string;
  name: string;
  brand: string;
  image: {
    asset: {
      url: string;
    };
  };
}

export default function DashboardPage() {
  const [bookings, setBookings] = useState<BookingDetails[]>([]);
  const [cars, setCars] = useState<{ [key: string]: CarDetails }>({});
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const bookingsData = await client.fetch(`
          *[_type == "rental"] | order(_createdAt desc) {
            _id,
            _createdAt,
            name,
            phone,
            carDetails
          }
        `);
        setBookings(bookingsData);

        // Get unique car IDs using array methods instead of Set
        const carIds = bookingsData
          .map((booking: BookingDetails) => booking.carDetails.carId)
          .filter((id: string, index: number, self: string[]) => 
            self.indexOf(id) === index
          );

        // Fetch car details
        const carsData = await client.fetch(`
          *[_type == "car" && _id in $carIds]{
            _id,
            name,
            brand,
            image {
              asset-> {
                url
              }
            }
          }
        `, { carIds });

        // Convert to lookup object
        const carsLookup = carsData.reduce((acc: { [key: string]: CarDetails }, car: CarDetails) => {
          acc[car._id] = car;
          return acc;
        }, {});

        setCars(carsLookup);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const getBookingStatus = (booking: BookingDetails) => {
    const returnDate = new Date(booking.carDetails.bookingDetails.returnDetails.date);
    const today = new Date();
    const pickupDate = new Date(booking.carDetails.bookingDetails.pickupDetails.date);

    if (today > returnDate) return 'completed';
    if (today < pickupDate) return 'upcoming';
    return 'active';
  };

  const filteredBookings = bookings.filter(booking => {
    if (activeTab === 'all') return true;
    return getBookingStatus(booking) === activeTab;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your bookings...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Bookings</h1>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList>
            <TabsTrigger 
              value="all"
              onClick={() => setActiveTab('all')}
            >
              All Bookings
            </TabsTrigger>
            <TabsTrigger 
              value="active"
              onClick={() => setActiveTab('active')}
            >
              Active
            </TabsTrigger>
            <TabsTrigger 
              value="upcoming"
              onClick={() => setActiveTab('upcoming')}
            >
              Upcoming
            </TabsTrigger>
            <TabsTrigger 
              value="completed"
              onClick={() => setActiveTab('completed')}
            >
              Completed
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab}>
            <div className="grid grid-cols-1 gap-6">
              {filteredBookings.map((booking) => {
                const car = cars[booking.carDetails.carId];
                const status = getBookingStatus(booking);
                
                return (
                  <Card key={booking._id} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* Car Image */}
                        <div className="relative w-full md:w-48 h-32 flex-shrink-0">
                          {car && (
                            <Image
                              src={car.image.asset.url}
                              alt={car.name}
                              fill
                              className="rounded-lg object-contain"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          )}
                        </div>

                        {/* Booking Details */}
                        <div className="flex-grow">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="text-xl font-bold text-gray-900">
                                {car ? `${car.brand} ${car.name}` : 'Loading...'}
                              </h3>
                              <p className="text-gray-600">Booked by: {booking.name}</p>
                            </div>
                            <div className={`
                              px-3 py-1 rounded-full text-sm font-medium
                              ${status === 'active' ? 'bg-green-100 text-green-800' : ''}
                              ${status === 'upcoming' ? 'bg-blue-100 text-blue-800' : ''}
                              ${status === 'completed' ? 'bg-gray-100 text-gray-800' : ''}
                            `}>
                              {status.charAt(0).toUpperCase() + status.slice(1)}
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-medium text-gray-900">Pickup Details</h4>
                              <p className="text-gray-600">
                                {booking.carDetails.bookingDetails.pickupDetails.location}
                              </p>
                              <p className="text-gray-600">
                                {format(new Date(booking.carDetails.bookingDetails.pickupDetails.date), 'PPP')} at{' '}
                                {booking.carDetails.bookingDetails.pickupDetails.time}
                              </p>
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900">Return Details</h4>
                              <p className="text-gray-600">
                                {booking.carDetails.bookingDetails.returnDetails.location}
                              </p>
                              <p className="text-gray-600">
                                {format(new Date(booking.carDetails.bookingDetails.returnDetails.date), 'PPP')} at{' '}
                                {booking.carDetails.bookingDetails.returnDetails.time}
                              </p>
                            </div>
                          </div>

                          <div className="mt-4 flex justify-between items-center">
                            <div>
                              <p className="text-gray-600">
                                Duration: {booking.carDetails.bookingDetails.pricing.daysCount} days
                              </p>
                              <p className="text-gray-900 font-bold">
                                Total Amount: ${booking.carDetails.bookingDetails.pricing.totalAmount}
                              </p>
                            </div>
                            <button 
                              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                              onClick={() => {
                                // Handle viewing booking details
                                console.log('View details:', booking._id);
                              }}
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              {filteredBookings.length === 0 && (
                <div className="text-center py-12 bg-white rounded-lg">
                  <p className="text-gray-600">No bookings found in this category.</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}