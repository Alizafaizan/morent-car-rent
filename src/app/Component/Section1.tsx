// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import redheart from '@/app/assets/section1/red heart.png';
// import whiteheart from '@/app/assets/section1/transparent heart.png';
// import Car1 from '@/app/assets/section1/Pcar1.png';
// import Car2 from '@/app/assets/section1/Pcar2.png';
// import Car3 from '@/app/assets/section1/Pcar3.png';
// import fuel from '@/app/assets/section1/fuel.png';
// import stering from '@/app/assets/section1/Stering wheel.png';
// import user from '@/app/assets/section1/profile.png';

// const Section1 = () => {
//   return (
//     <>
//     {/* this is the parent div for all popular car listings */}
//     <div className='px-[40px] py-[32px] bg-[#F6F7F9]'>
//         {/* div for popular car heading and view all link */}
//         <div className='flex justify-between px-3'>
//             <div>
//                 <h1 className='font-semibold font-[PlusJakartaSans] text-[16px] text-[rgba(144,163,191,100%)]'>Popular Car</h1>
//             </div>
//             <div>
//                 <h1 className='font-semibold font-[PlusJakartaSans] text-[16px] text-[rgba(53,99,233,100%)]'><Link href={"/category"}>View All</Link></h1>
//             </div>
//         </div>

//         {/* this is the div in which cars listing is present */}
//         <div className='my-2 gap-4 flex  justify-between overflow-hidden'>
//             {/* this is for 1st popular car */}
//             <Link href={"/detailcars"}>
//             <div className='bg-white rounded-lg w-fit p-3 shrink-0'>
//                 {/* this is for car name and heart button */}
//                 <div className='flex justify-between'>
//                     <div>
//                         <h1 className='font-bold text-[rgba(26,32,44,100%)] text-[16px]'>Koenigsegg</h1>
//                     </div>
//                     <div>
//                         <button><Image src={redheart} alt='loading' width={20} height={20} /></button>
//                     </div>
//                 </div>

//                 {/* div for car category heading */}
//                 <div>
//                     <h1 className='text-[rgba(89,103,128,100%)] font-bold text-[14px]'>Sport</h1>
//                 </div>

//                 {/* div for car image */}
//                 <div className=' flex justify-center my-10'>
//                     <Image src={Car1} alt='loading' width={200} height={200}></Image>
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
//                         <h1>2 People</h1>
//                     </div>
//                 </div>

//                 {/* div for pricing and button */}
//                 <div className='flex justify-between items-center my-2'>
//                     <div>
//                         <h1 className='font-[PlusJakartaSans] font-bold text-[20px]'>$99.0/<span className='text-[14px] text-[rgba(26,32,44,100%)]'>day</span></h1>
//                     </div>
                    
//                     <Link href={"/billing"}><button className='bg-[#3563E9] text-white rounded-md px-6 py-2'>Rent Now</button></Link>
                    
//                 </div>
                
//             </div>
//             </Link>

//             {/* this is for 2nd popular car */}
//             <Link href={"/detailcars"}>
//                     <div className='bg-white rounded-lg w-fit p-3 shrink-0'>
//                         {/* this is for car name and heart button */}
//                         <div className='flex justify-between'>
//                             <div>
//                                 <h1 className='font-bold text-[rgba(26,32,44,100%)] text-[16px]'>Nisan GT - R</h1>
//                             </div>
//                             <div>
//                                 <button><Image src={redheart} alt='loading' width={20} height={20} /></button>
//                             </div>
//                         </div>

//                         {/* div for car category heading */}
//                         <div>
//                             <h1 className='text-[rgba(89,103,128,100%)] font-bold text-[14px]'>Sport</h1>
//                         </div>

//                         {/* div for car image */}
//                         <div className=' flex justify-center my-10'>
//                             <Image src={Car2} alt='loading' width={200} height={200}></Image>
//                         </div>

//                         {/* div for specifications */}
//                         <div className='flex justify-between'>
//                             <div className='flex gap-1 items-center'>
//                                 <Image src={fuel} alt='loading' width={20} height={20}></Image>
//                                 <h1>80L</h1>
//                             </div>
//                             <div className='flex gap-1 items-center'>
//                                 <Image src={stering} alt='loading' width={20} height={20}></Image>
//                                 <h1>Manual</h1>
//                             </div>
//                             <div className='flex gap-1 items-center'>
//                                 <Image src={user} alt='loading' width={20} height={20}></Image>
//                                 <h1>2 People</h1>
//                             </div>
//                         </div>

//                         {/* div for pricing and button */}
//                         <div className='flex justify-between items-center my-2'>
//                             <div>
//                                 <h1 className='font-[PlusJakartaSans] font-bold text-[20px]'>$80.0/<span className='text-[14px] text-[rgba(26,32,44,100%)]'>day</span></h1>
//                             </div>
                            
//                             <Link href={"/billing"}><button className='bg-[#3563E9] text-white rounded-md px-6 py-2'>Rent Now</button></Link>
                            
//                         </div>
                        
//                     </div>
//                     </Link>

//             {/* this is for 3rd popular car */}
//             <Link href={"/detailcars"}>
//             <div className='bg-white rounded-lg w-fit p-3 hidden md:block shrink-0'>
//                 {/* this is for car name and heart button */}
//                 <div className='flex justify-between'>
//                     <div>
//                         <h1 className='font-bold text-[rgba(26,32,44,100%)] text-[16px]'>Rolls - Royce</h1>
//                     </div>
//                     <div>
//                         <button><Image src={redheart} alt='loading' width={20} height={20} /></button>
//                     </div>
//                 </div>

//                 {/* div for car category heading */}
//                 <div>
//                     <h1 className='text-[rgba(89,103,128,100%)] font-bold text-[14px]'>Sedan</h1>
//                 </div>

//                 {/* div for car image */}
//                 <div className='flex justify-center my-10'>
//                     <Image src={Car3} alt='loading' width={200} height={200}></Image>
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
//                         <h1 className='font-[PlusJakartaSans] font-bold text-[20px]'>$96.00/<span className='text-[14px] text-[rgba(26,32,44,100%)]'>day</span></h1>
//                     </div>
                    
//                     <Link href={"/billing"}><button className='bg-[#3563E9] text-white rounded-md px-6 py-2'>Rent Now</button></Link>
                    
//                 </div>
                
//             </div>
//             </Link>

//             {/* this is for 4th same as 2nd popular car */}
//             <Link href={"/detailcars"}>
//             <div className='bg-white rounded-lg w-fit p-3 hidden lg:block shrink-0'>
//                 {/* this is for car name and heart button */}
//                 <div className='flex justify-between'>
//                     <div>
//                         <h1 className='font-bold text-[rgba(26,32,44,100%)] text-[16px]'>NissanGT - R</h1>
//                     </div>
//                     <div>
//                         <button><Image src={whiteheart} alt='loading' width={20} height={20} /></button>
//                     </div>
//                 </div>

//                 {/* div for car category heading */}
//                 <div>
//                     <h1 className='text-[rgba(89,103,128,100%)] font-bold text-[14px]'>Sport</h1>
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
//                         <h1>2 People</h1>
//                     </div>
//                 </div>

//                 {/* div for pricing and button */}
//                 <div className='flex justify-between items-center my-2'>
//                     <div>
//                         <h1 className='font-[PlusJakartaSans] font-bold text-[20px]'>$80.00/<span className='text-[14px] text-[rgba(26,32,44,100%)]'>day</span></h1>
//                         <h1 className='text-[rgba(89,103,128,100%)] line-through font-[14px]'>$100.0</h1>
//                     </div>
                    
//                     <Link href={"/billing"}><button className='bg-[#3563E9] text-white rounded-md px-6 py-2'>Rent Now</button></Link>
                    
//                 </div>
                
//             </div>
//             </Link>
//         </div>
//     </div>
//     </>
//   )
// }

// export default Section1

import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import { FaHeart, FaUser, FaCarSide, FaCogs } from 'react-icons/fa'; // Import icons

interface IProduct {
  capacity: string;
  pricePerDay: number;
  name: string;
  title?: string; // Optional if not fetched directly
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  _id: string;
  stock?: string; // Optional if not fetched directly
  slug?: { current: string }; // Optional
  price: number;
  type?: string; // Add type if available
  fuelCapacity?: string; // Add fuelCapacity if available
  transmission?: string; // Add transmission if available
  seatingCapacity?: string; // Add seatingCapacity if available
  favorite?: boolean; // Add favorite if available
}

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source).url();
}

export default async function Hero() {
  const res: IProduct[] = await client.fetch(`
    *[_type == "car"][0...4]{
  _id,
  _type,
  _rev,
  _createdAt,
  _updatedAt,
  name,
  brand,
  seatingCapacity,
  originalPrice,
  type,
  pricePerDay,
  tags,
  transmission,
  fuelCapacity,
  image{
    _type,
    asset{
      _ref,
      _type
    }
  }
}

  `);

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-8 bg-gray-50">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Popular Products</h2>
        <Link href="/categories" className="text-blue-600 hover:underline">
          View All
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {res.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg p-6 shadow-md bg-white hover:shadow-lg transition-shadow"
          >
            {/* Product Header */}
            {/* Product Header */}
<div className="flex justify-between items-start">
  <h3 className="text-lg font-semibold">{product.name}</h3>
  <button className="hover:text-red-500 transition-colors duration-200">
    <FaHeart
      className={`text-2xl ${
        product.favorite
          ? 'text-red-500' // Keep it red if favorite
          : 'text-gray-300 hover:text-red-500' // Gray by default, red on hover
      }`}
    />
  </button>
</div>
<p className="text-sm text-gray-500 mb-4">{product.type}</p>
            {/* Product Image */}
            {product.image && product.image.asset ? (
              <div className="relative w-full h-40">
                <Image
                  src={urlFor(product.image).toString()}
                  alt={product.title || 'Product Image'}
                  fill
                  className="object-contain"
                />
              </div>
            ) : (
              <div className="h-40 bg-gray-200 flex items-center justify-center rounded-lg">
                <p className="text-center text-gray-600">No Image Available</p>
              </div>
            )}

            {/* Product Details */}
            <div className="flex justify-between items-center mt-4">
              <div className="flex space-x-2 text-gray-600">
                <div className="flex items-center space-x-1">
                  <FaCarSide />
                  <span>{product.fuelCapacity || 'N/A'}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FaCogs />
                  <span>{product.transmission || 'N/A'}</span>
                </div>
                <div className="flex items-center">
                  <FaUser />
                  <span>{product.seatingCapacity || 'N/A'}</span>
                </div>
              </div>
            </div>

            {/* Product Price and Rent Button */}
            <div className="mt-6 flex justify-between items-center">
              <p className="text-lg font-semibold">${product.pricePerDay}</p>
              <Link href={`/product/${product.name}`}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                  Rent Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

