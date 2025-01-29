// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import fuel from '@/app/assets/section2/fuel.png';
// import stering from '@/app/assets/section2/Stering wheel.png';
// import user from '@/app/assets/section2/profile.png';
// import redheart from '@/app/assets/section2/red heart.png';
// import whiteheart from '@/app/assets/section2/transparent heart.png';
// import Car1 from '@/app/assets/section2/Rcar1.png';
// import Car2 from '@/app/assets/section2/Rcar2.png';
// import Car3 from '@/app/assets/section2/Rcar3.png';
// import Car4 from '@/app/assets/section2/Rcar4.png';
// import Car5 from '@/app/assets/section2/Rcar5.png';
// import Car6 from '@/app/assets/section2/Rcar6.png';
// import Car7 from '@/app/assets/section2/Rcar7.png';
// import Car8 from '@/app/assets/section2/Rcar8.png';

// const Section2 = () => {
//   return (
//     <>
//      {/* this is the parent div for all popular car listings */}
//      <div className='px-[40px] py-[32px] bg-[#F6F7F9]'>
//         {/* div for popular car heading and view all link */}
//         <div className='px-3'>
//             <div>
//                 <h1 className='font-semibold font-[PlusJakartaSans] text-[16px] text-[rgba(144,163,191,100%)]'>Recommendation Car</h1>
//             </div>
//         </div>

//         {/* this is the div in which cars listing is present */}
//         <div className='my-2 gap-4 flex flex-col md:flex-row md:flex-wrap justify-between'>

//             {/* this is for 1st popular car */}
//             <div className='bg-white rounded-lg w-fit p-3 shrink-0 mx-auto'>
//                 {/* this is for car name and heart button */}
//                 <div className='flex justify-between'>
//                     <div>
//                         <h1 className='font-bold text-[rgba(26,32,44,100%)] text-[16px]'>All New Rush</h1>
//                     </div>
//                     <div>
//                         <button><Image src={whiteheart} alt='loading' width={20} height={20}></Image></button>
//                     </div>
//                 </div>

//                 {/* div for car category heading */}
//                 <div>
//                     <h1 className='text-[rgba(89,103,128,100%)] font-bold text-[14px]'>SUV</h1>
//                 </div>

//                 {/* div for car image */}
//                 <div className='flex justify-center my-10'>
//                     <Image src={Car1} alt='loading' width={200} height={200}></Image>
//                 </div>

//                 {/* div for specifications */}
//                 <div className='flex justify-between'>
//                     <div className='flex gap-1 items-center'>
//                         <Image src={fuel} alt='loading' width={20} height={20}></Image>
//                         <h1>70L</h1>
//                     </div>
//                     <div className='flex gap-1 items-center'>
//                         <Image src={stering} alt='loading' width={20} height={20}></Image>
//                         <h1>Manual</h1>
//                     </div>
//                     <div className='flex gap-1 items-center'>
//                         <Image src={user} alt='loading' width={20} height={20}></Image>
//                         <h1>6 People</h1>
//                     </div>
//                 </div>

//                 {/* div for pricing and button */}
//                 <div className='flex justify-between items-center my-2'>
//                     <div>
//                         <h1 className='font-[PlusJakartaSans] font-bold text-[20px]'>$72.00/<span className='text-[14px] text-[rgba(26,32,44,100%)]'>day</span></h1>
//                         <h1 className='text-[rgba(89,103,128,100%)] line-through font-[14px]'>$80.0</h1>
//                     </div>

//                     <Link href={"/billing"}><button className='bg-[#3563E9] text-white rounded-md px-6 py-2'>Rent Now</button></Link>

//                 </div>

//             </div>

//             {/* this is for 2nd popular car */}
//             <div className='bg-white rounded-lg w-fit p-3 shrink-0 mx-auto'>
//                 {/* this is for car name and heart button */}
//                 <div className='flex justify-between'>
//                     <div>
//                         <h1 className='font-bold text-[rgba(26,32,44,100%)] text-[16px]'>CR - V</h1>
//                     </div>
//                     <div>
//                         <button><Image src={redheart} alt='loading' width={20} height={20} /></button>
//                     </div>
//                 </div>

//                 {/* div for car category heading */}
//                 <div>
//                     <h1 className='text-[rgba(89,103,128,100%)] font-bold text-[14px]'>SUV</h1>
//                 </div>

//                 {/* div for car image */}
//                 <div className='flex justify-center my-10'>
//                     <Image src={Car2} alt='loading' width={200} height={200}></Image>
//                 </div>

//                 {/* div for specifications */}
//                 <div className='flex justify-between'>
//                     <div className='flex gap-1 items-center'>
//                         <Image src={fuel} alt='loading' width={20} height={20}></Image>
//                         <h1>80L</h1>
//                     </div>
//                     <div className='flex gap-1 items-center'>
//                         <Image src={stering} alt='loading' width={20} height={20}></Image>
//                         <h1>Manual</h1>
//                     </div>
//                     <div className='flex gap-1 items-center'>
//                         <Image src={user} alt='loading' width={20} height={20}></Image>
//                         <h1>6 People</h1>
//                     </div>
//                 </div>

//                 {/* div for pricing and button */}
//                 <div className='flex justify-between items-center my-2'>
//                     <div>
//                         <h1 className='font-[PlusJakartaSans] font-bold text-[20px]'>$80.00/<span className='text-[14px] text-[rgba(26,32,44,100%)]'>day</span></h1>
//                     </div>

//                     <Link href={"/billing"}><button className='bg-[#3563E9] text-white rounded-md px-6 py-2'>Rent Now</button></Link>

//                 </div>

//             </div>

//             {/* this is for 3rd popular car */}
//             <div className='bg-white rounded-lg w-fit p-3 shrink-0 mx-auto'>
//                 {/* this is for car name and heart button */}
//                 <div className='flex justify-between'>
//                     <div>
//                         <h1 className='font-bold text-[rgba(26,32,44,100%)] text-[16px]'>All New Terios</h1>
//                     </div>
//                     <div>
//                         <button><Image src={whiteheart} alt='loading' width={20} height={20} /></button>
//                     </div>
//                 </div>

//                 {/* div for car category heading */}
//                 <div>
//                     <h1 className='text-[rgba(89,103,128,100%)] font-bold text-[14px]'>SUV</h1>
//                 </div>

//                 {/* div for car image */}
//                 <div className='flex justify-center my-10'>
//                     <Image src={Car3} alt='loading' width={200} height={200}></Image>
//                 </div>

//                 {/* div for specifications */}
//                 <div className='flex justify-between'>
//                     <div className='flex gap-1 items-center'>
//                         <Image src={fuel} alt='loading' width={20} height={20}></Image>
//                         <h1>90L</h1>
//                     </div>
//                     <div className='flex gap-1 items-center'>
//                         <Image src={stering} alt='loading' width={20} height={20}></Image>
//                         <h1>Manual</h1>
//                     </div>
//                     <div className='flex gap-1 items-center'>
//                         <Image src={user} alt='loading' width={20} height={20}></Image>
//                         <h1>6 People</h1>
//                     </div>
//                 </div>

//                 {/* div for pricing and button */}
//                 <div className='flex justify-between items-center my-2'>
//                     <div>
//                         <h1 className='font-[PlusJakartaSans] font-bold text-[20px]'>$74.00/<span className='text-[14px] text-[rgba(26,32,44,100%)]'>day</span></h1>
//                     </div>

//                     <Link href={"/billing"}><button className='bg-[#3563E9] text-white rounded-md px-6 py-2'>Rent Now</button></Link>

//                 </div>

//             </div>

//             {/* this is for 4th same as 2nd popular car */}
//             <div className='bg-white rounded-lg w-fit p-3 shrink-0 mx-auto'>
//                 {/* this is for car name and heart button */}
//                 <div className='flex justify-between'>
//                     <div>
//                         <h1 className='font-bold text-[rgba(26,32,44,100%)] text-[16px]'>CR - V</h1>
//                     </div>
//                     <div>
//                         <button><Image src={redheart} alt='loading' width={20} height={20} /></button>
//                     </div>
//                 </div>

//                 {/* div for car category heading */}
//                 <div>
//                     <h1 className='text-[rgba(89,103,128,100%)] font-bold text-[14px]'>SUV</h1>
//                 </div>

//                 {/* div for car image */}
//                 <div className='flex justify-center my-10'>
//                     <Image src={Car4} alt='loading' width={200} height={200}></Image>
//                 </div>

//                 {/* div for specifications */}
//                 <div className='flex justify-between'>
//                     <div className='flex gap-1 items-center'>
//                         <Image src={fuel} alt='loading' width={20} height={20}></Image>
//                         <h1>80L</h1>
//                     </div>
//                     <div className='flex gap-1 items-center'>
//                         <Image src={stering} alt='loading' width={20} height={20}></Image>
//                         <h1>Manual</h1>
//                     </div>
//                     <div className='flex gap-1 items-center'>
//                         <Image src={user} alt='loading' width={20} height={20}></Image>
//                         <h1>6 People</h1>
//                     </div>
//                 </div>

//                 {/* div for pricing and button */}
//                 <div className='flex justify-between items-center my-2'>
//                     <div>
//                         <h1 className='font-[PlusJakartaSans] font-bold text-[20px]'>$80.00/<span className='text-[14px] text-[rgba(26,32,44,100%)]'>day</span></h1>
//                     </div>

//                     <Link href={"/billing"}><button className='bg-[#3563E9] text-white rounded-md px-6 py-2'>Rent Now</button></Link>

//                 </div>

//             </div>

//             {/* this is for 5th same as 2nd popular car */}
//             <div className='bg-white rounded-lg w-fit p-3 shrink-0 mx-auto'>
//                 {/* this is for car name and heart button */}
//                 <div className='flex justify-between'>
//                     <div>
//                         <h1 className='font-bold text-[rgba(26,32,44,100%)] text-[16px]'>MG ZX Exlusice</h1>
//                     </div>
//                     <div>
//                         <button><Image src={redheart} alt='loading' width={20} height={20} /></button>
//                     </div>
//                 </div>

//                 {/* div for car category heading */}
//                 <div>
//                     <h1 className='text-[rgba(89,103,128,100%)] font-bold text-[14px]'>Hatchback</h1>
//                 </div>

//                 {/* div for car image */}
//                 <div className='flex justify-center my-10'>
//                     <Image src={Car5} alt='loading' width={200} height={200}></Image>
//                 </div>

//                 {/* div for specifications */}
//                 <div className='flex justify-between'>
//                     <div className='flex gap-1 items-center'>
//                         <Image src={fuel} alt='loading' width={20} height={20}></Image>
//                         <h1>70L</h1>
//                     </div>
//                     <div className='flex gap-1 items-center'>
//                         <Image src={stering} alt='loading' width={20} height={20}></Image>
//                         <h1>Manual</h1>
//                     </div>
//                     <div className='flex gap-1 items-center'>
//                         <Image src={user} alt='loading' width={20} height={20}></Image>
//                         <h1>4 People</h1>
//                     </div>
//                 </div>

//                 {/* div for pricing and button */}
//                 <div className='flex justify-between items-center my-2'>
//                     <div>
//                         <h1 className='font-[PlusJakartaSans] font-bold text-[20px]'>$76.00/<span className='text-[14px] text-[rgba(26,32,44,100%)]'>day</span></h1>
//                         <h1 className='text-[rgba(89,103,128,100%)] line-through font-[14px]'>$80.0</h1>
//                     </div>
//                     <Link href={"/billing"}><button className='bg-[#3563E9] text-white rounded-md px-6 py-2'>Rent Now</button></Link>

//                 </div>

//             </div>

//             {/* this is for 6th same as 2nd popular car */}
//             <div className='bg-white rounded-lg w-fit p-3 hidden md:block shrink-0 mx-auto'>
//                 {/* this is for car name and heart button */}
//                 <div className='flex justify-between'>
//                     <div>
//                         <h1 className='font-bold text-[rgba(26,32,44,100%)] text-[16px]'>New MG ZX</h1>
//                     </div>
//                     <div>
//                         <button><Image src={whiteheart} alt='loading' width={20} height={20} /></button>
//                     </div>
//                 </div>

//                 {/* div for car category heading */}
//                 <div>
//                     <h1 className='text-[rgba(89,103,128,100%)] font-bold text-[14px]'>SUV</h1>
//                 </div>

//                 {/* div for car image */}
//                 <div className='flex justify-center my-10'>
//                     <Image src={Car6} alt='loading' width={200} height={200}></Image>
//                 </div>

//                 {/* div for specifications */}
//                 <div className='flex justify-between'>
//                     <div className='flex gap-1 items-center'>
//                         <Image src={fuel} alt='loading' width={20} height={20}></Image>
//                         <h1>80L</h1>
//                     </div>
//                     <div className='flex gap-1 items-center'>
//                         <Image src={stering} alt='loading' width={20} height={20}></Image>
//                         <h1>Manual</h1>
//                     </div>
//                     <div className='flex gap-1 items-center'>
//                         <Image src={user} alt='loading' width={20} height={20}></Image>
//                         <h1>6 People</h1>
//                     </div>
//                 </div>

//                 {/* div for pricing and button */}
//                 <div className='flex justify-between items-center my-2'>
//                     <div>
//                         <h1 className='font-[PlusJakartaSans] font-bold text-[20px]'>$76.00/<span className='text-[14px] text-[rgba(26,32,44,100%)]'>day</span></h1>
//                     </div>
//                     <Link href={"/billing"}><button className='bg-[#3563E9] text-white rounded-md px-6 py-2'>Rent Now</button></Link>

//                 </div>

//             </div>

//             {/* this is for 7th same as 2nd popular car */}
//             <div className='bg-white rounded-lg w-fit p-3 hidden md:block shrink-0 mx-auto'>
//                 {/* this is for car name and heart button */}
//                 <div className='flex justify-between'>
//                     <div>
//                         <h1 className='font-bold text-[rgba(26,32,44,100%)] text-[16px]'>MG ZX Excite</h1>
//                     </div>
//                     <div>
//                         <button><Image src={redheart} alt='loading' width={20} height={20} /></button>
//                     </div>
//                 </div>

//                 {/* div for car category heading */}
//                 <div>
//                     <h1 className='text-[rgba(89,103,128,100%)] font-bold text-[14px]'>Hatchback</h1>
//                 </div>

//                 {/* div for car image */}
//                 <div className='flex justify-center my-10'>
//                     <Image src={Car7} alt='loading' width={200} height={200}></Image>
//                 </div>

//                 {/* div for specifications */}
//                 <div className='flex justify-between'>
//                     <div className='flex gap-1 items-center'>
//                         <Image src={fuel} alt='loading' width={20} height={20}></Image>
//                         <h1>90L</h1>
//                     </div>
//                     <div className='flex gap-1 items-center'>
//                         <Image src={stering} alt='loading' width={20} height={20}></Image>
//                         <h1>Manual</h1>
//                     </div>
//                     <div className='flex gap-1 items-center'>
//                         <Image src={user} alt='loading' width={20} height={20}></Image>
//                         <h1>4 People</h1>
//                     </div>
//                 </div>

//                 {/* div for pricing and button */}
//                 <div className='flex justify-between items-center my-2'>
//                     <div>
//                         <h1 className='font-[PlusJakartaSans] font-bold text-[20px]'>$74.00/<span className='text-[14px] text-[rgba(26,32,44,100%)]'>day</span></h1>
//                     </div>
//                     <Link href={"/billing"}><button className='bg-[#3563E9] text-white rounded-md px-6 py-2'>Rent Now</button></Link>
//                 </div>

//             </div>

//             {/* this is for 8th same as 2nd popular car */}
//             <div className='bg-white rounded-lg w-fit p-3 hidden md:block shrink-0 mx-auto'>
//                 {/* this is for car name and heart button */}
//                 <div className='flex justify-between'>
//                     <div>
//                         <h1 className='font-bold text-[rgba(26,32,44,100%)] text-[16px]'>New MG ZX</h1>
//                     </div>
//                     <div>
//                         <button><Image src={whiteheart} alt='loading' width={20} height={20} /></button>
//                     </div>
//                 </div>

//                 {/* div for car category heading */}
//                 <div>
//                     <h1 className='text-[rgba(89,103,128,100%)] font-bold text-[14px]'>SUV</h1>
//                 </div>

//                 {/* div for car image */}
//                 <div className='flex justify-center my-10'>
//                     <Image src={Car8} alt='loading' width={200} height={200}></Image>
//                 </div>

//                 {/* div for specifications */}
//                 <div className='flex justify-between'>
//                     <div className='flex gap-1 items-center'>
//                         <Image src={fuel} alt='loading' width={20} height={20}></Image>
//                         <h1>80L</h1>
//                     </div>
//                     <div className='flex gap-1 items-center'>
//                         <Image src={stering} alt='loading' width={20} height={20}></Image>
//                         <h1>Manual</h1>
//                     </div>
//                     <div className='flex gap-1 items-center'>
//                         <Image src={user} alt='loading' width={20} height={20}></Image>
//                         <h1>6 People</h1>
//                     </div>
//                 </div>

//                 {/* div for pricing and button */}
//                 <div className='flex justify-between items-center my-2'>
//                     <div>
//                         <h1 className='font-[PlusJakartaSans] font-bold text-[20px]'>$80.00/<span className='text-[14px] text-[rgba(26,32,44,100%)]'>day</span></h1>
//                     </div>
//                     <Link href={"/billing"}><button className='bg-[#3563E9] text-white rounded-md px-6 py-2'>Rent Now</button></Link>
//                 </div>

//             </div>

//             <div className='w-full md:w-[50%] flex justify-between items-center md:ml-auto mt-4'>
//                 <Link href={"/category"}><button className='bg-[rgba(53,99,233,100%)] text-white px-6 py-3 rounded-lg'>Show more cars</button></Link>
//                 <h1 className='text-[rgba(144,163,193,100%)] font-bold text-[14px]'>120 cars</h1>
//             </div>
//         </div>
//     </div>
//     </>
//   )
// }

// export default Section2

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { FaCarSide, FaCogs, FaHeart, FaUser } from "react-icons/fa";

async function getCars() {
  const cars = await client.fetch(`
    *[_type == "car"][0...8]{
      _id,
      name,
      type,
      pricePerDay,
      originalPrice,
      tags,
      transmission,
      fuelCapacity,
      seatingCapacity,
      image{
        asset->{url}
      }
    }
  `);
  return cars;
}

export default async function CarsPage() {
  const cars = await getCars();

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Recomended Cars
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {cars.map((car: any) => (
          <div
            key={car._id}
            className="group bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                {car.name}
              </h3>
              <button className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200">
                <FaHeart
                  className={`text-lg ${
                    car.favorite
                      ? "text-red-500"
                      : "text-gray-300 hover:text-red-500"
                  }`}
                />
              </button>
            </div>
            <p className="text-xs text-gray-500 capitalize">{car.type}</p>
            <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
              {car.image && car.image.asset ? (
                <Image
                  src={urlFor(car.image).toString()}
                  alt={car.title || "Product Image"}
                  fill
                  className="object-contain p-2"
                />
              ) : (
                <div className="h-full bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-600">No Image Available</p>
                </div>
              )}
            </div>
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
                <FaCarSide className="text-blue-500 text-xs mb-1" />
                <span className="text-xs text-gray-600">
                  {car.fuelCapacity || "N/A"}
                </span>
              </div>
              <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
                <FaCogs className="text-blue-500 text-xs mb-1" />
                <span className="text-xs text-gray-600">
                  {car.transmission || "N/A"}
                </span>
              </div>
              <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
                <FaUser className="text-blue-500 text-xs mb-1" />
                <span className="text-xs text-gray-600">
                  {car.seatingCapacity || "N/A"}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-base font-bold text-blue-600">
                    ${car.pricePerDay}
                    <span className="text-xs text-gray-500 ml-1"></span>
                  </p>
                  {car.originalPrice && (
                    <p className="text-xs text-gray-400 line-through">
                      ${car.originalPrice}
                    </p>
                  )}
                </div>
                <Link
               href={`/detailcars/${car._id}`}  
                  className="text-xs px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Rent Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/category"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
        >
          View All Cars
        </Link>
      </div>
    </div>
  );
}
