import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import redheart from '@/app/assets/section1/red heart.png';
import whiteheart from '@/app/assets/section1/transparent heart.png';
import Car1 from '@/app/assets/section1/Pcar1.png';
import Car2 from '@/app/assets/section1/Pcar2.png';
import Car3 from '@/app/assets/section1/Pcar3.png';
import fuel from '@/app/assets/section1/fuel.png';
import stering from '@/app/assets/section1/Stering wheel.png';
import user from '@/app/assets/section1/profile.png';

const Section1 = () => {
  return (
    <>
    {/* this is the parent div for all popular car listings */}
    <div className='px-[40px] py-[32px] bg-[#F6F7F9]'>
        {/* div for popular car heading and view all link */}
        <div className='flex justify-between px-3'>
            <div>
                <h1 className='font-semibold font-[PlusJakartaSans] text-[16px] text-[rgba(144,163,191,100%)]'>Popular Car</h1>
            </div>
            <div>
                <h1 className='font-semibold font-[PlusJakartaSans] text-[16px] text-[rgba(53,99,233,100%)]'><Link href={"/category"}>View All</Link></h1>
            </div>
        </div>

        {/* this is the div in which cars listing is present */}
        <div className='my-2 gap-4 flex  justify-between overflow-hidden'>
            {/* this is for 1st popular car */}
            <Link href={"/detailcars"}>
            <div className='bg-white rounded-lg w-fit p-3 shrink-0'>
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
                    <Image src={Car1} alt='loading' width={200} height={200}></Image>
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
                    
                    <Link href={"/billing"}><button className='bg-[#3563E9] text-white rounded-md px-6 py-2'>Rent Now</button></Link>
                    
                </div>
                
            </div>
            </Link>

            {/* this is for 2nd popular car */}
            <Link href={"/detailcars"}>
                    <div className='bg-white rounded-lg w-fit p-3 shrink-0'>
                        {/* this is for car name and heart button */}
                        <div className='flex justify-between'>
                            <div>
                                <h1 className='font-bold text-[rgba(26,32,44,100%)] text-[16px]'>Nisan GT - R</h1>
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
                                <h1>2 People</h1>
                            </div>
                        </div>

                        {/* div for pricing and button */}
                        <div className='flex justify-between items-center my-2'>
                            <div>
                                <h1 className='font-[PlusJakartaSans] font-bold text-[20px]'>$80.0/<span className='text-[14px] text-[rgba(26,32,44,100%)]'>day</span></h1>
                            </div>
                            
                            <Link href={"/billing"}><button className='bg-[#3563E9] text-white rounded-md px-6 py-2'>Rent Now</button></Link>
                            
                        </div>
                        
                    </div>
                    </Link>

            {/* this is for 3rd popular car */}
            <Link href={"/detailcars"}>
            <div className='bg-white rounded-lg w-fit p-3 hidden md:block shrink-0'>
                {/* this is for car name and heart button */}
                <div className='flex justify-between'>
                    <div>
                        <h1 className='font-bold text-[rgba(26,32,44,100%)] text-[16px]'>Rolls - Royce</h1>
                    </div>
                    <div>
                        <button><Image src={redheart} alt='loading' width={20} height={20} /></button>
                    </div>
                </div>

                {/* div for car category heading */}
                <div>
                    <h1 className='text-[rgba(89,103,128,100%)] font-bold text-[14px]'>Sedan</h1>
                </div>

                {/* div for car image */}
                <div className='flex justify-center my-10'>
                    <Image src={Car3} alt='loading' width={200} height={200}></Image>
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
                        <h1 className='font-[PlusJakartaSans] font-bold text-[20px]'>$96.00/<span className='text-[14px] text-[rgba(26,32,44,100%)]'>day</span></h1>
                    </div>
                    
                    <Link href={"/billing"}><button className='bg-[#3563E9] text-white rounded-md px-6 py-2'>Rent Now</button></Link>
                    
                </div>
                
            </div>
            </Link>

            {/* this is for 4th same as 2nd popular car */}
            <Link href={"/detailcars"}>
            <div className='bg-white rounded-lg w-fit p-3 hidden lg:block shrink-0'>
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
                        <h1>2 People</h1>
                    </div>
                </div>

                {/* div for pricing and button */}
                <div className='flex justify-between items-center my-2'>
                    <div>
                        <h1 className='font-[PlusJakartaSans] font-bold text-[20px]'>$80.00/<span className='text-[14px] text-[rgba(26,32,44,100%)]'>day</span></h1>
                        <h1 className='text-[rgba(89,103,128,100%)] line-through font-[14px]'>$100.0</h1>
                    </div>
                    
                    <Link href={"/billing"}><button className='bg-[#3563E9] text-white rounded-md px-6 py-2'>Rent Now</button></Link>
                    
                </div>
                
            </div>
            </Link>
        </div>
    </div>
    </>
  )
}

export default Section1