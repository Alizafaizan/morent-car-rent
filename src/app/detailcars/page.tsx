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
import reviews from '@/app/assets/details/Reviews 1.png';
import details from '@/app/assets/details/Detail Car.png';
import views from '@/app/assets/details/View.png';
import views1 from '@/app/assets/details/View 1.png';
import views2 from '@/app/assets/details/View 2.png';
import views3 from '@/app/assets/details/View 3.png';

const page = () => {
  return (
   <>
   {/* Parent div for category page in which side bar with features and images are present */}
    <div className='flex '>
        {/* this div is for sidebar */}
        <div className='w-[20%] p-4 hidden md:block'>
            <div>
                <h1 className='text-[rgba(144,163,191,100%)] text-[12px] font-semibold'>TYPE</h1>
                <ul className='my-4 space-y-3'>
                    <li className='text-[rgba(89,103,128,100%)] font-semibold'> <input type="checkbox" /> Sport <span className='text-[rgba(144,163,191,100%)] text-[14px]'>(10)</span></li>
                    <li className='text-[rgba(89,103,128,100%)] font-semibold'> <input type="checkbox" /> SUV <span className='text-[rgba(144,163,191,100%)] text-[14px]'>(12)</span></li>
                    <li className='text-[rgba(89,103,128,100%)] font-semibold'> <input type="checkbox" /> MPV <span className='text-[rgba(144,163,191,100%)] text-[14px]'>(16)</span></li>
                    <li className='text-[rgba(89,103,128,100%)] font-semibold'> <input type="checkbox" /> Sedan <span className='text-[rgba(144,163,191,100%)] text-[14px]'>(20)</span></li>
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

        <div className='w-[80%] bg-[#F6F7F9] mx-auto p-4'>

            {/* details div */}
            <div className='md:flex md:justify-between gap-2'>
                <div>
                    <div className='flex justify-center'>
                        <Image src={views} alt='loading' width={500} height={200}></Image>
                    </div>
                    <div className='flex items-center justify-between mt-2'>
                    <Image src={views1} alt='loading' width={150} height={200}></Image>
                    <Image src={views2} alt='loading' width={150} height={200}></Image>
                    <Image src={views3} alt='loading' width={150} height={200}></Image>
                    </div>
                </div>
                <div className='flex justify-center mt-3 md:mt-0'>
                    <Image src={details} alt='loading' width={500} height={200}></Image>
                </div>
            </div>

            {/* reviews div */}
            <div className='mt-3'>
                <Image src={reviews} alt='loading' width={500} height={500} className='w-full'></Image>
            </div>

            <div>
                <div className='flex justify-between'>
                    <div>
                        <h1 className='font-semibold font-[PlusJakartaSans] text-[16px] text-[rgba(144,163,191,100%)]'>Recent Car</h1>
                    </div>
                    <div>
                        <h1 className='font-semibold font-[PlusJakartaSans] text-[16px] text-[rgba(53,99,233,100%)]'><Link href={"/category"}>View All</Link></h1>
                    </div>
                </div>
                
                <div className='flex flex-col md:flex-wrap md:flex-row justify-between items-center'>
                    {/* this is for 1st popular car */}
                    <div className='bg-white rounded-lg w-fit p-3 shrink-0 mt-3 lg:mt-0  mx-auto lg:mx-0 '>
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
                
                    {/* this is for 2nd popular car */}
                    <div className='bg-white rounded-lg w-fit p-3 mt-3 lg:mt-0  mx-auto lg:mx-0 shrink-0'>
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
                    
                    {/* this is for 3rd popular car */}
                    <div className='bg-white rounded-lg w-fit p-3 shrink-0 mt-3 lg:mt-0 mx-auto lg:mx-0'>
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
                </div>
            </div>

             {/* div for popular car heading and view all link */}
             <div className='mt-3'>
                <div className='flex justify-between'>
                    <div>
                        <h1 className='font-semibold font-[PlusJakartaSans] text-[16px] text-[rgba(144,163,191,100%)]'>Recommendation Car</h1>
                    </div>
                    <div>
                            <h1 className='font-semibold font-[PlusJakartaSans] text-[16px] text-[rgba(53,99,233,100%)]'><Link href={"/category"}>View All</Link></h1>
                    </div>
                </div>

                {/* this is the div in which cars listing is present */}
                <div className='my-2 flex flex-col md:flex-row md:flex-wrap justify-between'>
                
                    {/* this is for 1st popular car */}
                    <div className='bg-white rounded-lg w-fit p-3 shrink-0 mx-auto lg:mx-0 mt-3 lg:mt-0'>
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
                    <div className='bg-white rounded-lg w-fit p-3 shrink-0 mx-auto lg:mx-0 mt-3 lg:mt-0'>
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
                    <div className='bg-white rounded-lg w-fit p-3 shrink-0 mx-auto lg:mx-0 mt-3 lg:mt-0'>
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

                </div>

            </div>
        </div>    
    </div>

       
   </>
  )
}

export default page