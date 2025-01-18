import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dropdown from '@/app/assets/herosection/arrow.png';
import swap from '@/app/assets/herosection/Swap.png';
import fuel from '@/app/assets/section2/fuel.png';
import stering from '@/app/assets/section2/Stering wheel.png';
import user from '@/app/assets/section2/profile.png';
import redheart from '@/app/assets/section2/red heart.png';
import whiteheart from '@/app/assets/section2/transparent heart.png';
import Car1 from '@/app/assets/section2/Rcar1.png';
import Car2 from '@/app/assets/section2/Rcar2.png';
import Car3 from '@/app/assets/section2/Rcar3.png';
import Car5 from '@/app/assets/section2/Rcar5.png';
import Car6 from '@/app/assets/section2/Rcar6.png';
import Car7 from '@/app/assets/section2/Rcar7.png';
import Car8 from '@/app/assets/section2/Rcar8.png';
import Car9 from '@/app/assets/section1/Pcar1.png';
import Car10 from '@/app/assets/section1/Pcar2.png';


const page = () => {
  return (
    // this is for category pages
    <>
    {/* Parent div for category page in which side bar with features and images are present */}
    <div className='flex '>
        {/* this div is for sidebar */}
        <div className='w-[20%] p-4 hidden md:block'>
            <div>
                <h1 className='text-[rgba(144,163,191,100%)] text-[12px] font-semibold'>TYPE</h1>
                <ul className='my-4 space-y-3'>
                    <li className='text-[rgba(89,103,128,100%)] font-semibold'> <input type="checkbox" /> Sport <span className='text-[rgba(144,163,191,100%)] text-[14px]'>(10)</span></li>
                    <li className='text-[#4e6aea] font-semibold'> <input type="checkbox" /> SUV <span className='text-[rgba(144,163,191,100%)] text-[14px]'>(12)</span></li>
                    <li className='text-[rgba(89,103,128,100%)] font-semibold'> <input type="checkbox" /> MPV <span className='text-[rgba(144,163,191,100%)] text-[14px]'>(16)</span></li>
                    <li className='text-[rgba(89,103,128,100%)] font-semibold'> <input type="checkbox" className='text-[#4883ea]' /> Sedan <span className='text-[rgba(144,163,191,100%)] text-[14px]'>(20)</span></li>
                    <li className='text-[rgba(89,103,128,100%)] font-semibold'> <input type="checkbox" /> Coupe <span className='text-[rgba(144,163,191,100%)] text-[14px]'>(14)</span></li>
                    <li className='text-[rgba(89,103,128,100%)] font-semibold'> <input type="checkbox" /> Hatchback <span className='text-[rgba(144,163,191,100%)] text-[14px]'>(14)</span></li>
                </ul>
            </div>

            <div className='mt-4'>
                <h1 className='text-[rgba(144,163,191,100%)] text-[12px] font-semibold'>Capacity</h1>
                <ul className='my-4 space-y-3'>
                    <li className='text-[rgba(89,103,128,100%)] font-semibold'> <input type="checkbox" /> 2 Person <span className='text-[rgba(144,163,191,100%)] text-[14px]'>(10)</span></li>
                    <li className='text-[rgba(89,103,128,100%)] font-semibold'> <input type="checkbox" /> 4 Person  <span className='text-[rgba(144,163,191,100%)] text-[14px]'>(14)</span></li>
                    <li className='text-[rgba(89,103,128,100%)] font-semibold'> <input type="checkbox" /> 6 Person  <span className='text-[rgba(144,163,191,100%)] text-[14px]'>(12)</span></li>
                    <li className='text-[rgba(89,103,128,100%)] font-semibold'> <input type="checkbox" /> 8 or More  <span className='text-[rgba(144,163,191,100%)] text-[14px]'>(16)</span></li>
                </ul>
            </div>

            <div className='mt-4'>
                <h1 className='text-[rgba(144,163,191,100%)] text-[12px] font-semibold'>Price</h1>
                <input type="range"  className='mt-4 w-full'/>
                <h1 className='text-[rgba(89,103,128,100%)] font-semibold text-[14px]'>Max. $100.00</h1>
            </div>

        </div>

        {/* this div is for the categories */}
        <div className='w-[80%] bg-[#F6F7F9] mx-auto'>
            <div className='p-4 w-[100%]  flex flex-col h-fit lg:flex-row justify-between'>
                <div className='lg:w-[45%] px-4 py-3 bg-white '>
                    <div className='flex gap-4'>
                        <input type="radio" checked/>
                        <h1 className='font-bold'>Pick - Up</h1>
                    </div>

                    <div className='flex justify-between mt-2'>
                        <div>
                        <h1 className='font-bold'>Locations</h1>
                        <div className='flex items-center justify-between'>
                            <h1>Select your city</h1>
                            <Image src={dropdown} alt='loading' width={20} height={20}></Image>
                        </div>
                    </div>

                    <div className='w-[2px] h-10 bg-[#C3D4E9]'></div>

                    <div>
                        <h1 className='font-bold'>Date</h1>
                        <div className='flex items-center justify-between'>
                            <h1>Select your date</h1>
                            <Image src={dropdown} alt='loading' width={20} height={20}></Image>
                        </div>
                    </div>

                    <div className='w-[2px] h-10 bg-[#C3D4E9]'></div>

                    <div>
                        <h1 className='font-bold'>Time</h1>
                        <div className='flex items-center justify-between'>
                            <h1>Select your time</h1>
                            <Image src={dropdown} alt='loading' width={20} height={20}></Image>
                        </div>
                    </div>
                </div>
                </div>

                <div className='flex items-center justify-center'>
                    <button className='bg-[rgba(53,99,233,100%)] w-fit h-fit p-3 rounded-md '><Image src={swap} alt='loading' width={30} height={30}></Image></button>
                </div>

                <div className='w-full lg:w-[45%] px-4 py-3 bg-white'>
                    <div className='flex gap-4'>
                        <input type="radio" checked/>
                        <h1 className='font-bold'>Drop - Off</h1>
                    </div>

                    <div className='flex justify-between mt-2'>
                        <div>
                            <h1 className='font-bold'>Locations</h1>
                            <div className='flex items-center justify-between'>
                                <h1>Select your city</h1>
                                <Image src={dropdown} alt='loading' width={20} height={20}></Image>
                            </div>
                        </div>

                        <div className='w-[2px] h-10 bg-[#C3D4E9]'></div>

                        <div>
                            <h1 className='font-bold'>Date</h1>
                            <div className='flex items-center justify-between'>
                                <h1>Select your date</h1>
                                <Image src={dropdown} alt='loading' width={20} height={20}></Image>
                            </div>
                        </div>

                        <div className='w-[2px] h-10 bg-[#C3D4E9]'></div>
                        
                        <div>
                            <h1 className='font-bold'>Time</h1>
                            <div className='flex items-center justify-between'>
                                <h1>Select your time</h1>
                                <Image src={dropdown} alt='loading' width={20} height={20}></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='gap-4 flex flex-col md:flex-row md:flex-wrap justify-between '>
                {/* this is for 1st popular car */}
                <div className='bg-white rounded-lg w-fit p-3 shrink-0 mx-auto'>
                
                    {/* this is for car name and heart button */}
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='font-bold text-[rgba(26,32,44,100%)] text-[16px]'>All New Rush</h1>
                        </div>
                        <div>
                            <button><Image src={whiteheart} alt='loading' width={20} height={20}></Image></button>
                        </div>
                    </div>

                    {/* div for car category heading */}
                    <div>
                        <h1 className='text-[rgba(89,103,128,100%)] font-bold text-[14px]'>SUV</h1>
                    </div>

                    {/* div for car image */}
                    <div className='flex justify-center my-10'>
                        <Image src={Car1} alt='loading' width={200} height={200}></Image>
                    </div>

                    {/* div for specifications */}
                    <div className='flex justify-between'>
                        <div className='flex gap-1 items-center'>
                            <Image src={fuel} alt='loading' width={20} height={20}></Image>
                            <h1>70L</h1>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <Image src={stering} alt='loading' width={20} height={20}></Image>
                            <h1>Manual</h1>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <Image src={user} alt='loading' width={20} height={20}></Image>
                            <h1>6 People</h1>
                        </div>
                    </div>

                    {/* div for pricing and button */}
                    <div className='flex justify-between items-center my-2'>
                        <div>
                            <h1 className='font-[PlusJakartaSans] font-bold text-[20px]'>$72.00/<span className='text-[14px] text-[rgba(26,32,44,100%)]'>day</span></h1>
                            <h1 className='text-[rgba(89,103,128,100%)] line-through font-[14px]'>$80.0</h1>
                        </div>
                        
                        <button className='bg-[#3563E9] text-white rounded-md px-6 py-2'><Link href={"/detailcars"}>Rent Now</Link></button>
                        
                    </div>
                </div>

                {/* this is for 2nd popular car */}
                <div className='bg-white rounded-lg w-fit p-3 shrink-0 mx-auto'>
                    {/* this is for car name and heart button */}
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='font-bold text-[rgba(26,32,44,100%)] text-[16px]'>CR - V</h1>
                        </div>
                        <div>
                            <button><Image src={redheart} alt='loading' width={20} height={20} /></button>
                        </div>
                    </div>

                    {/* div for car category heading */}
                    <div>
                        <h1 className='text-[rgba(89,103,128,100%)] font-bold text-[14px]'>SUV</h1>
                    </div>

                    {/* div for car image */}
                    <div className='flex justify-center my-10'>
                        <Image src={Car2} alt='loading' width={200} height={200}></Image>
                    </div>

                    {/* div for specifications */}
                    <div className='flex justify-between'>
                        <div className='flex gap-1 items-center'>
                            <Image src={fuel} alt='loading' width={20} height={20}></Image>
                            <h1>80L</h1>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <Image src={stering} alt='loading' width={20} height={20}></Image>
                            <h1>Manual</h1>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <Image src={user} alt='loading' width={20} height={20}></Image>
                            <h1>6 People</h1>
                        </div>
                    </div>

                    {/* div for pricing and button */}
                    <div className='flex justify-between items-center my-2'>
                        <div>
                            <h1 className='font-[PlusJakartaSans] font-bold text-[20px]'>$80.00/<span className='text-[14px] text-[rgba(26,32,44,100%)]'>day</span></h1>
                        </div>
                        
                        <button className='bg-[#3563E9] text-white rounded-md px-6 py-2'><Link href={"/detailcars"}>Rent Now</Link></button>
                        
                    </div>
                    
                </div>

                {/* this is for 3rd popular car */}
                <div className='bg-white rounded-lg w-fit p-3 shrink-0 mx-auto'>
                    {/* this is for car name and heart button */}
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='font-bold text-[rgba(26,32,44,100%)] text-[16px]'>All New Terios</h1>
                        </div>
                        <div>
                            <button><Image src={whiteheart} alt='loading' width={20} height={20} /></button>
                        </div>
                    </div>

                    {/* div for car category heading */}
                    <div>
                        <h1 className='text-[rgba(89,103,128,100%)] font-bold text-[14px]'>SUV</h1>
                    </div>

                    {/* div for car image */}
                    <div className='flex justify-center my-10'>
                        <Image src={Car3} alt='loading' width={200} height={200}></Image>
                    </div>

                    {/* div for specifications */}
                    <div className='flex justify-between'>
                        <div className='flex gap-1 items-center'>
                            <Image src={fuel} alt='loading' width={20} height={20}></Image>
                            <h1>90L</h1>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <Image src={stering} alt='loading' width={20} height={20}></Image>
                            <h1>Manual</h1>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <Image src={user} alt='loading' width={20} height={20}></Image>
                            <h1>6 People</h1>
                        </div>
                    </div>

                    {/* div for pricing and button */}
                    <div className='flex justify-between items-center my-2'>
                        <div>
                            <h1 className='font-[PlusJakartaSans] font-bold text-[20px]'>$74.00/<span className='text-[14px] text-[rgba(26,32,44,100%)]'>day</span></h1>
                        </div>
                        
                        <button className='bg-[#3563E9] text-white rounded-md px-6 py-2'><Link href={"/detailcars"}>Rent Now</Link></button>
                        
                    </div>
                    
                </div>

                {/* this is for 5th same as 2nd popular car */}
                <div className='bg-white rounded-lg w-fit p-3 shrink-0 mx-auto'>
                    {/* this is for car name and heart button */}
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='font-bold text-[rgba(26,32,44,100%)] text-[16px]'>MG ZX Exlusice</h1>
                        </div>
                        <div>
                            <button><Image src={redheart} alt='loading' width={20} height={20} /></button>
                        </div>
                    </div>

                    {/* div for car category heading */}
                    <div>
                        <h1 className='text-[rgba(89,103,128,100%)] font-bold text-[14px]'>Hatchback</h1>
                    </div>

                    {/* div for car image */}
                    <div className='flex justify-center my-10'>
                        <Image src={Car5} alt='loading' width={200} height={200}></Image>
                    </div>

                    {/* div for specifications */}
                    <div className='flex justify-between'>
                        <div className='flex gap-1 items-center'>
                            <Image src={fuel} alt='loading' width={20} height={20}></Image>
                            <h1>70L</h1>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <Image src={stering} alt='loading' width={20} height={20}></Image>
                            <h1>Manual</h1>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <Image src={user} alt='loading' width={20} height={20}></Image>
                            <h1>4 People</h1>
                        </div>
                    </div>

                    {/* div for pricing and button */}
                    <div className='flex justify-between items-center my-2'>
                        <div>
                            <h1 className='font-[PlusJakartaSans] font-bold text-[20px]'>$76.00/<span className='text-[14px] text-[rgba(26,32,44,100%)]'>day</span></h1>
                            <h1 className='text-[rgba(89,103,128,100%)] line-through font-[14px]'>$80.0</h1>
                        </div>
                        <button className='bg-[#3563E9] text-white rounded-md px-6 py-2'><Link href={"/detailcars"}>Rent Now</Link></button>
                        
                    </div>
                    
                </div>

                {/* this is for 6th same as 2nd popular car */}
                <div className='bg-white rounded-lg w-fit p-3 hidden md:block shrink-0 mx-auto'>
                    {/* this is for car name and heart button */}
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='font-bold text-[rgba(26,32,44,100%)] text-[16px]'>New MG ZX</h1>
                        </div>
                        <div>
                            <button><Image src={whiteheart} alt='loading' width={20} height={20} /></button>
                        </div>
                    </div>

                    {/* div for car category heading */}
                    <div>
                        <h1 className='text-[rgba(89,103,128,100%)] font-bold text-[14px]'>SUV</h1>
                    </div>

                    {/* div for car image */}
                    <div className='flex justify-center my-10'>
                        <Image src={Car6} alt='loading' width={200} height={200}></Image>
                    </div>

                    {/* div for specifications */}
                    <div className='flex justify-between'>
                        <div className='flex gap-1 items-center'>
                            <Image src={fuel} alt='loading' width={20} height={20}></Image>
                            <h1>80L</h1>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <Image src={stering} alt='loading' width={20} height={20}></Image>
                            <h1>Manual</h1>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <Image src={user} alt='loading' width={20} height={20}></Image>
                            <h1>6 People</h1>
                        </div>
                    </div>

                    {/* div for pricing and button */}
                    <div className='flex justify-between items-center my-2'>
                        <div>
                            <h1 className='font-[PlusJakartaSans] font-bold text-[20px]'>$76.00/<span className='text-[14px] text-[rgba(26,32,44,100%)]'>day</span></h1>
                        </div>
                        <button className='bg-[#3563E9] text-white rounded-md px-6 py-2'><Link href={"/detailcars"}>Rent Now</Link></button>
                        
                    </div>
                    
                </div>

                {/* this is for 7th same as 2nd popular car */}
                <div className='bg-white rounded-lg w-fit p-3 hidden md:block shrink-0 mx-auto'>
                    {/* this is for car name and heart button */}
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='font-bold text-[rgba(26,32,44,100%)] text-[16px]'>MG ZX Excite</h1>
                        </div>
                        <div>
                            <button><Image src={redheart} alt='loading' width={20} height={20} /></button>
                        </div>
                    </div>

                    {/* div for car category heading */}
                    <div>
                        <h1 className='text-[rgba(89,103,128,100%)] font-bold text-[14px]'>Hatchback</h1>
                    </div>

                    {/* div for car image */}
                    <div className='flex justify-center my-10'>
                        <Image src={Car7} alt='loading' width={200} height={200}></Image>
                    </div>

                    {/* div for specifications */}
                    <div className='flex justify-between'>
                        <div className='flex gap-1 items-center'>
                            <Image src={fuel} alt='loading' width={20} height={20}></Image>
                            <h1>90L</h1>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <Image src={stering} alt='loading' width={20} height={20}></Image>
                            <h1>Manual</h1>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <Image src={user} alt='loading' width={20} height={20}></Image>
                            <h1>4 People</h1>
                        </div>
                    </div>

                    {/* div for pricing and button */}
                    <div className='flex justify-between items-center my-2'>
                        <div>
                            <h1 className='font-[PlusJakartaSans] font-bold text-[20px]'>$74.00/<span className='text-[14px] text-[rgba(26,32,44,100%)]'>day</span></h1>
                        </div>
                        <button className='bg-[#3563E9] text-white rounded-md px-6 py-2'><Link href={"/detailcars"}>Rent Now</Link></button>   
                    </div>
                    
                </div>

                {/* this is for 8th same as 2nd popular car */}
                <div className='bg-white rounded-lg w-fit p-3 hidden md:block shrink-0 mx-auto'>
                    {/* this is for car name and heart button */}
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='font-bold text-[rgba(26,32,44,100%)] text-[16px]'>New MG ZX</h1>
                        </div>
                        <div>
                            <button><Image src={whiteheart} alt='loading' width={20} height={20} /></button>
                        </div>
                    </div>

                    {/* div for car category heading */}
                    <div>
                        <h1 className='text-[rgba(89,103,128,100%)] font-bold text-[14px]'>SUV</h1>
                    </div>

                    {/* div for car image */}
                    <div className='flex justify-center my-10'>
                        <Image src={Car8} alt='loading' width={200} height={200}></Image>
                    </div>

                    {/* div for specifications */}
                    <div className='flex justify-between'>
                        <div className='flex gap-1 items-center'>
                            <Image src={fuel} alt='loading' width={20} height={20}></Image>
                            <h1>80L</h1>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <Image src={stering} alt='loading' width={20} height={20}></Image>
                            <h1>Manual</h1>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <Image src={user} alt='loading' width={20} height={20}></Image>
                            <h1>6 People</h1>
                        </div>
                    </div>

                    {/* div for pricing and button */}
                    <div className='flex justify-between items-center my-2'>
                        <div>
                            <h1 className='font-[PlusJakartaSans] font-bold text-[20px]'>$80.00/<span className='text-[14px] text-[rgba(26,32,44,100%)]'>day</span></h1>
                        </div>
                        <button className='bg-[#3563E9] text-white rounded-md px-6 py-2'><Link href={"/detailcars"}>Rent Now</Link></button>   
                    </div>
                    
                </div>

                {/* this is for 9th popular car */}
                <div className='bg-white rounded-lg w-fit p-3 shrink-0 mx-auto'>
                    {/* this is for car name and heart button */}
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='font-bold text-[rgba(26,32,44,100%)] text-[16px]'>Koenigsegg</h1>
                        </div>
                        <div>
                            <button><Image src={redheart} alt='loading' width={20} height={20} /></button>
                        </div>
                    </div>

                    {/* div for car category heading */}
                    <div>
                        <h1 className='text-[rgba(89,103,128,100%)] font-bold text-[14px]'>Sport</h1>
                    </div>

                    {/* div for car image */}
                    <div className=' flex justify-center my-10'>
                        <Image src={Car9} alt='loading' width={200} height={200}></Image>
                    </div>

                    {/* div for specifications */}
                    <div className='flex justify-between'>
                        <div className='flex gap-1 items-center'>
                            <Image src={fuel} alt='loading' width={20} height={20}></Image>
                            <h1>90L</h1>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <Image src={stering} alt='loading' width={20} height={20}></Image>
                            <h1>Manual</h1>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <Image src={user} alt='loading' width={20} height={20}></Image>
                            <h1>2 People</h1>
                        </div>
                    </div>

                    {/* div for pricing and button */}
                    <div className='flex justify-between items-center my-2'>
                        <div>
                            <h1 className='font-[PlusJakartaSans] font-bold text-[20px]'>$99.0/<span className='text-[14px] text-[rgba(26,32,44,100%)]'>day</span></h1>
                        </div>
                        
                        <button className='bg-[#3563E9] text-white rounded-md px-6 py-2'><Link href={"/detailcars"}>Rent Now</Link></button>
                        
                    </div>
                    
                </div>

                {/* this is for 10th popular car */}
                <div className='bg-white rounded-lg w-fit p-3 hidden xm:block shrink-0 mx-auto'>
                    {/* this is for car name and heart button */}
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='font-bold text-[rgba(26,32,44,100%)] text-[16px]'>NissanGT - R</h1>
                        </div>
                        <div>
                            <button><Image src={whiteheart} alt='loading' width={20} height={20} /></button>
                        </div>
                    </div>

                    {/* div for car category heading */}
                    <div>
                        <h1 className='text-[rgba(89,103,128,100%)] font-bold text-[14px]'>Sport</h1>
                    </div>

                    {/* div for car image */}
                    <div className='flex justify-center my-10'>
                        <Image src={Car10} alt='loading' width={200} height={200}></Image>
                    </div>

                    {/* div for specifications */}
                    <div className='flex justify-between'>
                        <div className='flex gap-1 items-center'>
                            <Image src={fuel} alt='loading' width={20} height={20}></Image>
                            <h1>80L</h1>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <Image src={stering} alt='loading' width={20} height={20}></Image>
                            <h1>Manual</h1>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <Image src={user} alt='loading' width={20} height={20}></Image>
                            <h1>2 People</h1>
                        </div>
                    </div>

                    {/* div for pricing and button */}
                    <div className='flex justify-between items-center my-2'>
                        <div>
                            <h1 className='font-[PlusJakartaSans] font-bold text-[20px]'>$80.00/<span className='text-[14px] text-[rgba(26,32,44,100%)]'>day</span></h1>
                            <h1 className='text-[rgba(89,103,128,100%)] line-through font-[14px]'>$100.0</h1>
                        </div>
                        
                        <button className='bg-[#3563E9] text-white rounded-md px-6 py-2'><Link href={"/detailcars"}>Rent Now</Link></button>
                        
                    </div>
                    
                </div>

            </div>
            <div className='w-full md:w-[50%] flex justify-between items-center md:ml-auto mt-4'>
                <button className='bg-[rgba(53,99,233,100%)] text-white px-6 py-3 rounded-lg'>Show more cars</button>
                <h1 className='text-[rgba(144,163,193,100%)] font-bold text-[14px]'>120 cars</h1>
            </div>
        </div>

    </div>
    </>
  )
}

export default page