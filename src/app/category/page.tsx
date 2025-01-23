// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import dropdown from '@/app/assets/herosection/arrow.png';
// import swap from '@/app/assets/herosection/Swap.png';
// import fuel from '@/app/assets/section2/fuel.png';
// import stering from '@/app/assets/section2/Stering wheel.png';
// import user from '@/app/assets/section2/profile.png';
// import redheart from '@/app/assets/section2/red heart.png';
// import whiteheart from '@/app/assets/section2/transparent heart.png';
// import Car1 from '@/app/assets/section2/Rcar1.png';
// import Car2 from '@/app/assets/section2/Rcar2.png';
// import Car3 from '@/app/assets/section2/Rcar3.png';
// import Car5 from '@/app/assets/section2/Rcar5.png';
// import Car6 from '@/app/assets/section2/Rcar6.png';
// import Car7 from '@/app/assets/section2/Rcar7.png';
// import Car8 from '@/app/assets/section2/Rcar8.png';
// import Car9 from '@/app/assets/section1/Pcar1.png';
// import Car10 from '@/app/assets/section1/Pcar2.png';

// const page = () => {
//   return (
//     // this is for category pages
//     <>
//     {/* Parent div for category page in which side bar with features and images are present */}
//     <div className='flex '>
//         {/* this div is for sidebar */}
//         <div className='w-[20%] p-4 hidden md:block'>
//             <div>
//                 <h1 className='text-[rgba(144,163,191,100%)] text-[12px] font-semibold'>TYPE</h1>
//                 <ul className='my-4 space-y-3'>
//                     <li className='text-[rgba(89,103,128,100%)] font-semibold'> <input type="checkbox" /> Sport <span className='text-[rgba(144,163,191,100%)] text-[14px]'>(10)</span></li>
//                     <li className='text-[#4e6aea] font-semibold'> <input type="checkbox" /> SUV <span className='text-[rgba(144,163,191,100%)] text-[14px]'>(12)</span></li>
//                     <li className='text-[rgba(89,103,128,100%)] font-semibold'> <input type="checkbox" /> MPV <span className='text-[rgba(144,163,191,100%)] text-[14px]'>(16)</span></li>
//                     <li className='text-[rgba(89,103,128,100%)] font-semibold'> <input type="checkbox" className='text-[#4883ea]' /> Sedan <span className='text-[rgba(144,163,191,100%)] text-[14px]'>(20)</span></li>
//                     <li className='text-[rgba(89,103,128,100%)] font-semibold'> <input type="checkbox" /> Coupe <span className='text-[rgba(144,163,191,100%)] text-[14px]'>(14)</span></li>
//                     <li className='text-[rgba(89,103,128,100%)] font-semibold'> <input type="checkbox" /> Hatchback <span className='text-[rgba(144,163,191,100%)] text-[14px]'>(14)</span></li>
//                 </ul>
//             </div>

//             <div className='mt-4'>
//                 <h1 className='text-[rgba(144,163,191,100%)] text-[12px] font-semibold'>Capacity</h1>
//                 <ul className='my-4 space-y-3'>
//                     <li className='text-[rgba(89,103,128,100%)] font-semibold'> <input type="checkbox" /> 2 Person <span className='text-[rgba(144,163,191,100%)] text-[14px]'>(10)</span></li>
//                     <li className='text-[rgba(89,103,128,100%)] font-semibold'> <input type="checkbox" /> 4 Person  <span className='text-[rgba(144,163,191,100%)] text-[14px]'>(14)</span></li>
//                     <li className='text-[rgba(89,103,128,100%)] font-semibold'> <input type="checkbox" /> 6 Person  <span className='text-[rgba(144,163,191,100%)] text-[14px]'>(12)</span></li>
//                     <li className='text-[rgba(89,103,128,100%)] font-semibold'> <input type="checkbox" /> 8 or More  <span className='text-[rgba(144,163,191,100%)] text-[14px]'>(16)</span></li>
//                 </ul>
//             </div>

//             <div className='mt-4'>
//                 <h1 className='text-[rgba(144,163,191,100%)] text-[12px] font-semibold'>Price</h1>
//                 <input type="range"  className='mt-4 w-full'/>
//                 <h1 className='text-[rgba(89,103,128,100%)] font-semibold text-[14px]'>Max. $100.00</h1>
//             </div>

//         </div>

//         {/* this div is for the categories */}
//         <div className='w-[80%] bg-[#F6F7F9] mx-auto'>
//             <div className='p-4 w-[100%]  flex flex-col h-fit lg:flex-row justify-between'>
//                 <div className='lg:w-[45%] px-4 py-3 bg-white '>
//                     <div className='flex gap-4'>
//                         <input type="radio" checked/>
//                         <h1 className='font-bold'>Pick - Up</h1>
//                     </div>

//                     <div className='flex justify-between mt-2'>
//                         <div>
//                         <h1 className='font-bold'>Locations</h1>
//                         <div className='flex items-center justify-between'>
//                             <h1>Select your city</h1>
//                             <Image src={dropdown} alt='loading' width={20} height={20}></Image>
//                         </div>
//                     </div>

//                     <div className='w-[2px] h-10 bg-[#C3D4E9]'></div>

//                     <div>
//                         <h1 className='font-bold'>Date</h1>
//                         <div className='flex items-center justify-between'>
//                             <h1>Select your date</h1>
//                             <Image src={dropdown} alt='loading' width={20} height={20}></Image>
//                         </div>
//                     </div>

//                     <div className='w-[2px] h-10 bg-[#C3D4E9]'></div>

//                     <div>
//                         <h1 className='font-bold'>Time</h1>
//                         <div className='flex items-center justify-between'>
//                             <h1>Select your time</h1>
//                             <Image src={dropdown} alt='loading' width={20} height={20}></Image>
//                         </div>
//                     </div>
//                 </div>
//                 </div>

//                 <div className='flex items-center justify-center'>
//                     <button className='bg-[rgba(53,99,233,100%)] w-fit h-fit p-3 rounded-md '><Image src={swap} alt='loading' width={30} height={30}></Image></button>
//                 </div>

//                 <div className='w-full lg:w-[45%] px-4 py-3 bg-white'>
//                     <div className='flex gap-4'>
//                         <input type="radio" checked/>
//                         <h1 className='font-bold'>Drop - Off</h1>
//                     </div>

//                     <div className='flex justify-between mt-2'>
//                         <div>
//                             <h1 className='font-bold'>Locations</h1>
//                             <div className='flex items-center justify-between'>
//                                 <h1>Select your city</h1>
//                                 <Image src={dropdown} alt='loading' width={20} height={20}></Image>
//                             </div>
//                         </div>

//                         <div className='w-[2px] h-10 bg-[#C3D4E9]'></div>

//                         <div>
//                             <h1 className='font-bold'>Date</h1>
//                             <div className='flex items-center justify-between'>
//                                 <h1>Select your date</h1>
//                                 <Image src={dropdown} alt='loading' width={20} height={20}></Image>
//                             </div>
//                         </div>

//                         <div className='w-[2px] h-10 bg-[#C3D4E9]'></div>

//                         <div>
//                             <h1 className='font-bold'>Time</h1>
//                             <div className='flex items-center justify-between'>
//                                 <h1>Select your time</h1>
//                                 <Image src={dropdown} alt='loading' width={20} height={20}></Image>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className='gap-4 flex flex-col md:flex-row md:flex-wrap justify-between '>
//                 {/* this is for 1st popular car */}
//                 <div className='bg-white rounded-lg w-fit p-3 shrink-0 mx-auto'>

//                     {/* this is for car name and heart button */}
//                     <div className='flex justify-between'>
//                         <div>
//                             <h1 className='font-bold text-[rgba(26,32,44,100%)] text-[16px]'>All New Rush</h1>
//                         </div>
//                         <div>
//                             <button><Image src={whiteheart} alt='loading' width={20} height={20}></Image></button>
//                         </div>
//                     </div>

//                     {/* div for car category heading */}
//                     <div>
//                         <h1 className='text-[rgba(89,103,128,100%)] font-bold text-[14px]'>SUV</h1>
//                     </div>

//                     {/* div for car image */}
//                     <div className='flex justify-center my-10'>
//                         <Image src={Car1} alt='loading' width={200} height={200}></Image>
//                     </div>

//                     {/* div for specifications */}
//                     <div className='flex justify-between'>
//                         <div className='flex gap-1 items-center'>
//                             <Image src={fuel} alt='loading' width={20} height={20}></Image>
//                             <h1>70L</h1>
//                         </div>
//                         <div className='flex gap-1 items-center'>
//                             <Image src={stering} alt='loading' width={20} height={20}></Image>
//                             <h1>Manual</h1>
//                         </div>
//                         <div className='flex gap-1 items-center'>
//                             <Image src={user} alt='loading' width={20} height={20}></Image>
//                             <h1>6 People</h1>
//                         </div>
//                     </div>

//                     {/* div for pricing and button */}
//                     <div className='flex justify-between items-center my-2'>
//                         <div>
//                             <h1 className='font-[PlusJakartaSans] font-bold text-[20px]'>$72.00/<span className='text-[14px] text-[rgba(26,32,44,100%)]'>day</span></h1>
//                             <h1 className='text-[rgba(89,103,128,100%)] line-through font-[14px]'>$80.0</h1>
//                         </div>

//                         <button className='bg-[#3563E9] text-white rounded-md px-6 py-2'><Link href={"/detailcars"}>Rent Now</Link></button>

//                     </div>
//                 </div>

//                 {/* this is for 2nd popular car */}
//                 <div className='bg-white rounded-lg w-fit p-3 shrink-0 mx-auto'>
//                     {/* this is for car name and heart button */}
//                     <div className='flex justify-between'>
//                         <div>
//                             <h1 className='font-bold text-[rgba(26,32,44,100%)] text-[16px]'>CR - V</h1>
//                         </div>
//                         <div>
//                             <button><Image src={redheart} alt='loading' width={20} height={20} /></button>
//                         </div>
//                     </div>

//                     {/* div for car category heading */}
//                     <div>
//                         <h1 className='text-[rgba(89,103,128,100%)] font-bold text-[14px]'>SUV</h1>
//                     </div>

//                     {/* div for car image */}
//                     <div className='flex justify-center my-10'>
//                         <Image src={Car2} alt='loading' width={200} height={200}></Image>
//                     </div>

//                     {/* div for specifications */}
//                     <div className='flex justify-between'>
//                         <div className='flex gap-1 items-center'>
//                             <Image src={fuel} alt='loading' width={20} height={20}></Image>
//                             <h1>80L</h1>
//                         </div>
//                         <div className='flex gap-1 items-center'>
//                             <Image src={stering} alt='loading' width={20} height={20}></Image>
//                             <h1>Manual</h1>
//                         </div>
//                         <div className='flex gap-1 items-center'>
//                             <Image src={user} alt='loading' width={20} height={20}></Image>
//                             <h1>6 People</h1>
//                         </div>
//                     </div>

//                     {/* div for pricing and button */}
//                     <div className='flex justify-between items-center my-2'>
//                         <div>
//                             <h1 className='font-[PlusJakartaSans] font-bold text-[20px]'>$80.00/<span className='text-[14px] text-[rgba(26,32,44,100%)]'>day</span></h1>
//                         </div>

//                         <button className='bg-[#3563E9] text-white rounded-md px-6 py-2'><Link href={"/detailcars"}>Rent Now</Link></button>

//                     </div>

//                 </div>

//                 {/* this is for 3rd popular car */}
//                 <div className='bg-white rounded-lg w-fit p-3 shrink-0 mx-auto'>
//                     {/* this is for car name and heart button */}
//                     <div className='flex justify-between'>
//                         <div>
//                             <h1 className='font-bold text-[rgba(26,32,44,100%)] text-[16px]'>All New Terios</h1>
//                         </div>
//                         <div>
//                             <button><Image src={whiteheart} alt='loading' width={20} height={20} /></button>
//                         </div>
//                     </div>

//                     {/* div for car category heading */}
//                     <div>
//                         <h1 className='text-[rgba(89,103,128,100%)] font-bold text-[14px]'>SUV</h1>
//                     </div>

//                     {/* div for car image */}
//                     <div className='flex justify-center my-10'>
//                         <Image src={Car3} alt='loading' width={200} height={200}></Image>
//                     </div>

//                     {/* div for specifications */}
//                     <div className='flex justify-between'>
//                         <div className='flex gap-1 items-center'>
//                             <Image src={fuel} alt='loading' width={20} height={20}></Image>
//                             <h1>90L</h1>
//                         </div>
//                         <div className='flex gap-1 items-center'>
//                             <Image src={stering} alt='loading' width={20} height={20}></Image>
//                             <h1>Manual</h1>
//                         </div>
//                         <div className='flex gap-1 items-center'>
//                             <Image src={user} alt='loading' width={20} height={20}></Image>
//                             <h1>6 People</h1>
//                         </div>
//                     </div>

//                     {/* div for pricing and button */}
//                     <div className='flex justify-between items-center my-2'>
//                         <div>
//                             <h1 className='font-[PlusJakartaSans] font-bold text-[20px]'>$74.00/<span className='text-[14px] text-[rgba(26,32,44,100%)]'>day</span></h1>
//                         </div>

//                         <button className='bg-[#3563E9] text-white rounded-md px-6 py-2'><Link href={"/detailcars"}>Rent Now</Link></button>

//                     </div>

//                 </div>

//                 {/* this is for 5th same as 2nd popular car */}
//                 <div className='bg-white rounded-lg w-fit p-3 shrink-0 mx-auto'>
//                     {/* this is for car name and heart button */}
//                     <div className='flex justify-between'>
//                         <div>
//                             <h1 className='font-bold text-[rgba(26,32,44,100%)] text-[16px]'>MG ZX Exlusice</h1>
//                         </div>
//                         <div>
//                             <button><Image src={redheart} alt='loading' width={20} height={20} /></button>
//                         </div>
//                     </div>

//                     {/* div for car category heading */}
//                     <div>
//                         <h1 className='text-[rgba(89,103,128,100%)] font-bold text-[14px]'>Hatchback</h1>
//                     </div>

//                     {/* div for car image */}
//                     <div className='flex justify-center my-10'>
//                         <Image src={Car5} alt='loading' width={200} height={200}></Image>
//                     </div>

//                     {/* div for specifications */}
//                     <div className='flex justify-between'>
//                         <div className='flex gap-1 items-center'>
//                             <Image src={fuel} alt='loading' width={20} height={20}></Image>
//                             <h1>70L</h1>
//                         </div>
//                         <div className='flex gap-1 items-center'>
//                             <Image src={stering} alt='loading' width={20} height={20}></Image>
//                             <h1>Manual</h1>
//                         </div>
//                         <div className='flex gap-1 items-center'>
//                             <Image src={user} alt='loading' width={20} height={20}></Image>
//                             <h1>4 People</h1>
//                         </div>
//                     </div>

//                     {/* div for pricing and button */}
//                     <div className='flex justify-between items-center my-2'>
//                         <div>
//                             <h1 className='font-[PlusJakartaSans] font-bold text-[20px]'>$76.00/<span className='text-[14px] text-[rgba(26,32,44,100%)]'>day</span></h1>
//                             <h1 className='text-[rgba(89,103,128,100%)] line-through font-[14px]'>$80.0</h1>
//                         </div>
//                         <button className='bg-[#3563E9] text-white rounded-md px-6 py-2'><Link href={"/detailcars"}>Rent Now</Link></button>

//                     </div>

//                 </div>

//                 {/* this is for 6th same as 2nd popular car */}
//                 <div className='bg-white rounded-lg w-fit p-3 hidden md:block shrink-0 mx-auto'>
//                     {/* this is for car name and heart button */}
//                     <div className='flex justify-between'>
//                         <div>
//                             <h1 className='font-bold text-[rgba(26,32,44,100%)] text-[16px]'>New MG ZX</h1>
//                         </div>
//                         <div>
//                             <button><Image src={whiteheart} alt='loading' width={20} height={20} /></button>
//                         </div>
//                     </div>

//                     {/* div for car category heading */}
//                     <div>
//                         <h1 className='text-[rgba(89,103,128,100%)] font-bold text-[14px]'>SUV</h1>
//                     </div>

//                     {/* div for car image */}
//                     <div className='flex justify-center my-10'>
//                         <Image src={Car6} alt='loading' width={200} height={200}></Image>
//                     </div>

//                     {/* div for specifications */}
//                     <div className='flex justify-between'>
//                         <div className='flex gap-1 items-center'>
//                             <Image src={fuel} alt='loading' width={20} height={20}></Image>
//                             <h1>80L</h1>
//                         </div>
//                         <div className='flex gap-1 items-center'>
//                             <Image src={stering} alt='loading' width={20} height={20}></Image>
//                             <h1>Manual</h1>
//                         </div>
//                         <div className='flex gap-1 items-center'>
//                             <Image src={user} alt='loading' width={20} height={20}></Image>
//                             <h1>6 People</h1>
//                         </div>
//                     </div>

//                     {/* div for pricing and button */}
//                     <div className='flex justify-between items-center my-2'>
//                         <div>
//                             <h1 className='font-[PlusJakartaSans] font-bold text-[20px]'>$76.00/<span className='text-[14px] text-[rgba(26,32,44,100%)]'>day</span></h1>
//                         </div>
//                         <button className='bg-[#3563E9] text-white rounded-md px-6 py-2'><Link href={"/detailcars"}>Rent Now</Link></button>

//                     </div>

//                 </div>

//                 {/* this is for 7th same as 2nd popular car */}
//                 <div className='bg-white rounded-lg w-fit p-3 hidden md:block shrink-0 mx-auto'>
//                     {/* this is for car name and heart button */}
//                     <div className='flex justify-between'>
//                         <div>
//                             <h1 className='font-bold text-[rgba(26,32,44,100%)] text-[16px]'>MG ZX Excite</h1>
//                         </div>
//                         <div>
//                             <button><Image src={redheart} alt='loading' width={20} height={20} /></button>
//                         </div>
//                     </div>

//                     {/* div for car category heading */}
//                     <div>
//                         <h1 className='text-[rgba(89,103,128,100%)] font-bold text-[14px]'>Hatchback</h1>
//                     </div>

//                     {/* div for car image */}
//                     <div className='flex justify-center my-10'>
//                         <Image src={Car7} alt='loading' width={200} height={200}></Image>
//                     </div>

//                     {/* div for specifications */}
//                     <div className='flex justify-between'>
//                         <div className='flex gap-1 items-center'>
//                             <Image src={fuel} alt='loading' width={20} height={20}></Image>
//                             <h1>90L</h1>
//                         </div>
//                         <div className='flex gap-1 items-center'>
//                             <Image src={stering} alt='loading' width={20} height={20}></Image>
//                             <h1>Manual</h1>
//                         </div>
//                         <div className='flex gap-1 items-center'>
//                             <Image src={user} alt='loading' width={20} height={20}></Image>
//                             <h1>4 People</h1>
//                         </div>
//                     </div>

//                     {/* div for pricing and button */}
//                     <div className='flex justify-between items-center my-2'>
//                         <div>
//                             <h1 className='font-[PlusJakartaSans] font-bold text-[20px]'>$74.00/<span className='text-[14px] text-[rgba(26,32,44,100%)]'>day</span></h1>
//                         </div>
//                         <button className='bg-[#3563E9] text-white rounded-md px-6 py-2'><Link href={"/detailcars"}>Rent Now</Link></button>
//                     </div>

//                 </div>

//                 {/* this is for 8th same as 2nd popular car */}
//                 <div className='bg-white rounded-lg w-fit p-3 hidden md:block shrink-0 mx-auto'>
//                     {/* this is for car name and heart button */}
//                     <div className='flex justify-between'>
//                         <div>
//                             <h1 className='font-bold text-[rgba(26,32,44,100%)] text-[16px]'>New MG ZX</h1>
//                         </div>
//                         <div>
//                             <button><Image src={whiteheart} alt='loading' width={20} height={20} /></button>
//                         </div>
//                     </div>

//                     {/* div for car category heading */}
//                     <div>
//                         <h1 className='text-[rgba(89,103,128,100%)] font-bold text-[14px]'>SUV</h1>
//                     </div>

//                     {/* div for car image */}
//                     <div className='flex justify-center my-10'>
//                         <Image src={Car8} alt='loading' width={200} height={200}></Image>
//                     </div>

//                     {/* div for specifications */}
//                     <div className='flex justify-between'>
//                         <div className='flex gap-1 items-center'>
//                             <Image src={fuel} alt='loading' width={20} height={20}></Image>
//                             <h1>80L</h1>
//                         </div>
//                         <div className='flex gap-1 items-center'>
//                             <Image src={stering} alt='loading' width={20} height={20}></Image>
//                             <h1>Manual</h1>
//                         </div>
//                         <div className='flex gap-1 items-center'>
//                             <Image src={user} alt='loading' width={20} height={20}></Image>
//                             <h1>6 People</h1>
//                         </div>
//                     </div>

//                     {/* div for pricing and button */}
//                     <div className='flex justify-between items-center my-2'>
//                         <div>
//                             <h1 className='font-[PlusJakartaSans] font-bold text-[20px]'>$80.00/<span className='text-[14px] text-[rgba(26,32,44,100%)]'>day</span></h1>
//                         </div>
//                         <button className='bg-[#3563E9] text-white rounded-md px-6 py-2'><Link href={"/detailcars"}>Rent Now</Link></button>
//                     </div>

//                 </div>

//                 {/* this is for 9th popular car */}
//                 <div className='bg-white rounded-lg w-fit p-3 shrink-0 mx-auto'>
//                     {/* this is for car name and heart button */}
//                     <div className='flex justify-between'>
//                         <div>
//                             <h1 className='font-bold text-[rgba(26,32,44,100%)] text-[16px]'>Koenigsegg</h1>
//                         </div>
//                         <div>
//                             <button><Image src={redheart} alt='loading' width={20} height={20} /></button>
//                         </div>
//                     </div>

//                     {/* div for car category heading */}
//                     <div>
//                         <h1 className='text-[rgba(89,103,128,100%)] font-bold text-[14px]'>Sport</h1>
//                     </div>

//                     {/* div for car image */}
//                     <div className=' flex justify-center my-10'>
//                         <Image src={Car9} alt='loading' width={200} height={200}></Image>
//                     </div>

//                     {/* div for specifications */}
//                     <div className='flex justify-between'>
//                         <div className='flex gap-1 items-center'>
//                             <Image src={fuel} alt='loading' width={20} height={20}></Image>
//                             <h1>90L</h1>
//                         </div>
//                         <div className='flex gap-1 items-center'>
//                             <Image src={stering} alt='loading' width={20} height={20}></Image>
//                             <h1>Manual</h1>
//                         </div>
//                         <div className='flex gap-1 items-center'>
//                             <Image src={user} alt='loading' width={20} height={20}></Image>
//                             <h1>2 People</h1>
//                         </div>
//                     </div>

//                     {/* div for pricing and button */}
//                     <div className='flex justify-between items-center my-2'>
//                         <div>
//                             <h1 className='font-[PlusJakartaSans] font-bold text-[20px]'>$99.0/<span className='text-[14px] text-[rgba(26,32,44,100%)]'>day</span></h1>
//                         </div>

//                         <button className='bg-[#3563E9] text-white rounded-md px-6 py-2'><Link href={"/detailcars"}>Rent Now</Link></button>

//                     </div>

//                 </div>

//                 {/* this is for 10th popular car */}
//                 <div className='bg-white rounded-lg w-fit p-3 hidden xm:block shrink-0 mx-auto'>
//                     {/* this is for car name and heart button */}
//                     <div className='flex justify-between'>
//                         <div>
//                             <h1 className='font-bold text-[rgba(26,32,44,100%)] text-[16px]'>NissanGT - R</h1>
//                         </div>
//                         <div>
//                             <button><Image src={whiteheart} alt='loading' width={20} height={20} /></button>
//                         </div>
//                     </div>

//                     {/* div for car category heading */}
//                     <div>
//                         <h1 className='text-[rgba(89,103,128,100%)] font-bold text-[14px]'>Sport</h1>
//                     </div>

//                     {/* div for car image */}
//                     <div className='flex justify-center my-10'>
//                         <Image src={Car10} alt='loading' width={200} height={200}></Image>
//                     </div>

//                     {/* div for specifications */}
//                     <div className='flex justify-between'>
//                         <div className='flex gap-1 items-center'>
//                             <Image src={fuel} alt='loading' width={20} height={20}></Image>
//                             <h1>80L</h1>
//                         </div>
//                         <div className='flex gap-1 items-center'>
//                             <Image src={stering} alt='loading' width={20} height={20}></Image>
//                             <h1>Manual</h1>
//                         </div>
//                         <div className='flex gap-1 items-center'>
//                             <Image src={user} alt='loading' width={20} height={20}></Image>
//                             <h1>2 People</h1>
//                         </div>
//                     </div>

//                     {/* div for pricing and button */}
//                     <div className='flex justify-between items-center my-2'>
//                         <div>
//                             <h1 className='font-[PlusJakartaSans] font-bold text-[20px]'>$80.00/<span className='text-[14px] text-[rgba(26,32,44,100%)]'>day</span></h1>
//                             <h1 className='text-[rgba(89,103,128,100%)] line-through font-[14px]'>$100.0</h1>
//                         </div>

//                         <button className='bg-[#3563E9] text-white rounded-md px-6 py-2'><Link href={"/detailcars"}>Rent Now</Link></button>

//                     </div>

//                 </div>

//             </div>
//             <div className='w-full md:w-[50%] flex justify-between items-center md:ml-auto mt-4'>
//                 <button className='bg-[rgba(53,99,233,100%)] text-white px-6 py-3 rounded-lg'>Show more cars</button>
//                 <h1 className='text-[rgba(144,163,193,100%)] font-bold text-[14px]'>120 cars</h1>
//             </div>
//         </div>

//     </div>
//     </>
//   )
// }

// export default page

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import fuel from "@/app/assets/section2/fuel.png";
import stering from "@/app/assets/section2/Stering wheel.png";
import user from "@/app/assets/section2/profile.png";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import { FaCarSide, FaCogs, FaHeart, FaUser } from "react-icons/fa";
import { Menu } from "lucide-react";

interface Car {
  favorite: any;
  title: string;
  _id: string;
  name: string;
  type: string;
  fuelCapacity: number;
  transmission: string;
  seatingCapacity: number;
  pricePerDay: number;
  originalPrice?: number;
  image: {
    asset: {
      _ref: string;
    };
  };
}

const CarListingPage = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const query = `*[_type == "car"][0..8]{
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
        }`;

        const data = await client.fetch(query);
        setCars(data);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  const Sidebar = () => (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <div>
        <h2 className="text-[rgba(144,163,191,100%)] text-sm font-semibold uppercase tracking-wide">
          Type
        </h2>
        <ul className="my-4 space-y-3">
          {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map(
            (type, index) => (
              <li key={type} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span
                  className={`text-sm font-medium ${index === 1 ? "text-blue-600" : "text-gray-700"}`}
                >
                  {type}
                </span>
                <span className="text-xs text-gray-400">
                  ({10 + index * 2})
                </span>
              </li>
            )
          )}
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-[rgba(144,163,191,100%)] text-sm font-semibold uppercase tracking-wide">
          Capacity
        </h2>
        <ul className="my-4 space-y-3">
          {["2 Person", "4 Person", "6 Person", "8 or More"].map(
            (capacity, index) => (
              <li key={capacity} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-gray-700">
                  {capacity}
                </span>
                <span className="text-xs text-gray-400">
                  ({10 + index * 2})
                </span>
              </li>
            )
          )}
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-[rgba(144,163,191,100%)] text-sm font-semibold uppercase tracking-wide mb-4">
          Price Range
        </h2>
        <input
          type="range"
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <p className="mt-2 text-sm font-medium text-gray-700">Max. $100.00</p>
      </div>
    </div>
  );

  if (error) {
    return (
      <div className="w-full text-center py-8 text-red-500">
        Error loading cars: {error}
      </div>
    );
  }
  

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Popular Cars</h1>
            <p className="text-gray-600">
              Discover our most sought-after vehicles
            </p>
          </div>
          <button className="text-blue-600 font-medium hover:text-blue-700">
            View All Cars
          </button>
        </div>
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
      >
        <Menu className="w-6 h-6 text-gray-600" />
      </button>

      <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4">
        {/* Sidebar */}
        <div
          className={`
          md:w-1/4 md:mr-8
          fixed md:relative inset-0 z-40 bg-white md:bg-transparent
          transform ${showSidebar ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
          transition-transform duration-300 ease-in-out
          overflow-y-auto
          md:block
        `}
        >
          <Sidebar />
        </div>

        {/* Overlay */}
        {showSidebar && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={() => setShowSidebar(false)}
          />
        )}

        {/* Main content */}
        <div className="md:w-3/4 w-full">
          {/* Car listings */}
          {loading ? (
            <div className="w-full h-64 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cars.map((car) => (
                <div
                  key={car._id}
                  className="group bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  {/* Car name and heart button */}
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                        {car.name}
                      </h3>
                      <p className="text-xs text-gray-500 capitalize">
                        {car.type}
                      </p>
                    </div>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
                      <FaHeart className="text-gray-300 hover:text-red-500 w-5 h-5" />
                    </button>
                  </div>

                  {/* Car image */}
                  <div className="my-6">
                    {car.image && car.image.asset ? (
                      <Image
                        src={urlFor(car.image).toString()}
                        alt={car.title || "Car Image"}
                        width={280}
                        height={160}
                        className="w-full h-40 object-contain"
                      />
                    ) : (
                      <div className="w-full h-40 bg-gray-100 rounded-lg flex items-center justify-center">
                        <p className="text-gray-400">No Image Available</p>
                      </div>
                    )}
                  </div>

                  {/* Specifications */}
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

                  {/* Pricing and button */}
                  <div className="flex items-center justify-between mt-auto">
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
                      className="text-xs px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      Rent Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarListingPage;
