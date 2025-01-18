import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import fuel from '@/app/assets/section2/fuel.png';
import stering from '@/app/assets/section2/Stering wheel.png';
import user from '@/app/assets/section2/profile.png';
import redheart from '@/app/assets/section2/red heart.png';
import whiteheart from '@/app/assets/section2/transparent heart.png';
import Car1 from '@/app/assets/section2/Rcar1.png';
import Car2 from '@/app/assets/section2/Rcar2.png';
import Car3 from '@/app/assets/section2/Rcar3.png';
import Car4 from '@/app/assets/section2/Rcar4.png';
import Car5 from '@/app/assets/section2/Rcar5.png';
import Car6 from '@/app/assets/section2/Rcar6.png';
import Car7 from '@/app/assets/section2/Rcar7.png';
import Car8 from '@/app/assets/section2/Rcar8.png';

const Section2 = () => {
  return (
    <>
     {/* this is the parent div for all popular car listings */}
     <div className='px-[40px] py-[32px] bg-[#F6F7F9]'>
        {/* div for popular car heading and view all link */}
        <div className='px-3'>
            <div>
                <h1 className='font-semibold font-[PlusJakartaSans] text-[16px] text-[rgba(144,163,191,100%)]'>Recommendation Car</h1>
            </div>
        </div>

        {/* this is the div in which cars listing is present */}
        <div className='my-2 gap-4 flex flex-col md:flex-row md:flex-wrap justify-between'>
            
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
                    
                    <Link href={"/billing"}><button className='bg-[#3563E9] text-white rounded-md px-6 py-2'>Rent Now</button></Link>
                    
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
                    
                    <Link href={"/billing"}><button className='bg-[#3563E9] text-white rounded-md px-6 py-2'>Rent Now</button></Link>
                    
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
                    
                    <Link href={"/billing"}><button className='bg-[#3563E9] text-white rounded-md px-6 py-2'>Rent Now</button></Link>
                    
                </div>
                
            </div>

            {/* this is for 4th same as 2nd popular car */}
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
                    <Image src={Car4} alt='loading' width={200} height={200}></Image>
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
                    
                    <Link href={"/billing"}><button className='bg-[#3563E9] text-white rounded-md px-6 py-2'>Rent Now</button></Link>
                    
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
                    <Link href={"/billing"}><button className='bg-[#3563E9] text-white rounded-md px-6 py-2'>Rent Now</button></Link>
                    
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
                    <Link href={"/billing"}><button className='bg-[#3563E9] text-white rounded-md px-6 py-2'>Rent Now</button></Link>
                    
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
                    <Link href={"/billing"}><button className='bg-[#3563E9] text-white rounded-md px-6 py-2'>Rent Now</button></Link>
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
                    <Link href={"/billing"}><button className='bg-[#3563E9] text-white rounded-md px-6 py-2'>Rent Now</button></Link> 
                </div>
                
            </div>

            <div className='w-full md:w-[50%] flex justify-between items-center md:ml-auto mt-4'>
                <Link href={"/category"}><button className='bg-[rgba(53,99,233,100%)] text-white px-6 py-3 rounded-lg'>Show more cars</button></Link> 
                <h1 className='text-[rgba(144,163,193,100%)] font-bold text-[14px]'>120 cars</h1>
            </div>
        </div>
    </div>
    </>
  )
}

export default Section2