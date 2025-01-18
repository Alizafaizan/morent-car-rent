import React from 'react';
import Image from 'next/image';
import I1 from '@/app/assets/dashboard/D1.png';
import I2 from '@/app/assets/dashboard/D2.png';
import I3 from '@/app/assets/dashboard/D3.png';
import I4 from '@/app/assets/dashboard/D4.png';
import I5 from '@/app/assets/dashboard/D5.png';
import I6 from '@/app/assets/dashboard/D6.png';
import I7 from '@/app/assets/dashboard/D7.png';
import I8 from '@/app/assets/dashboard/D8.png';
import I9 from '@/app/assets/dashboard/D9.png';
import I10 from '@/app/assets/dashboard/D10.png';
import I11 from '@/app/assets/dashboard/D11.png';
import I12 from '@/app/assets/dashboard/D12.png';
import I13 from '@/app/assets/dashboard/Look.png';
import dropdown from '@/app/assets/herosection/arrow.png';
import swap from '@/app/assets/herosection/Swap.png';
import I14 from '@/app/assets/dashboard/Top 5 Car Rental.png';
import I15 from '@/app/assets/dashboard/Recent Transaction.png';

const page = () => {
  return (
    <>
    {/* Parent div for dashboard page in which side bar maps and other images are present */}
    <div className='flex '>
        {/* this div is for sidebar */}
        <div className='w-[20%] p-4 hidden md:block'>
            <div>
                <h1 className='text-[rgba(144,163,191,100%)] text-[12px] font-semibold uppercase'>Main Menu</h1>
                <ul className='my-4 space-y-3'>
                    <li className='text-white font-semibold flex items-center gap-3 bg-[rgba(53,99,233,100%)] px-3 py-2 rounded-lg'> <Image src={I1} alt='loading' width={20} height={20}></Image> Dashboard</li>
                    <li className='text-[rgba(89,103,128,100%)] font-semibold flex items-center gap-3 px-3 py-2'> <Image src={I2} alt='loading' width={20} height={20} />Car Rent </li>
                    <li className='text-[rgba(89,103,128,100%)] font-semibold flex items-center gap-3 px-3 py-2'> <Image src={I3} alt='loading' width={20} height={20} />Insight </li>
                    <li className='text-[rgba(89,103,128,100%)] font-semibold flex items-center gap-3 px-3 py-2'> <Image src={I4} alt='loading' width={20} height={20} />Reimburse </li>
                    <li className='text-[rgba(89,103,128,100%)] font-semibold flex items-center gap-3 px-3 py-2'> <Image src={I5} alt='loading' width={20} height={20} />Inbox </li>
                    <li className='text-[rgba(89,103,128,100%)] font-semibold flex items-center gap-3 px-3 py-2'> <Image src={I6} alt='loading' width={20} height={20} />Calender </li>
                </ul>
            </div>

            <div className='mt-4'>
                <h1 className='text-[rgba(144,163,191,100%)] text-[12px] font-semibold'>Preference</h1>
                <ul className='my-4 space-y-3'>
                    <li className='text-[rgba(89,103,128,100%)] font-semibold flex items-center gap-3 px-3 py-2'> <Image src={I7} alt='loading' width={20} height={20} />Settings </li>
                    <li className='text-[rgba(89,103,128,100%)] font-semibold flex items-center gap-3 px-3 py-2'> <Image src={I8} alt='loading' width={20} height={20} />Help & Center  </li>
                    <li className='text-[rgba(89,103,128,100%)] font-semibold flex items-center gap-3 px-3 py-2'> <Image src={I9} alt='loading' width={20} height={20} />Dark Mode  <Image src={I10} alt='loading' width={80} height={80} className='cursor-pointer' /></li>
                </ul>
            </div>

            <div className='mt-16 flex gap-3 items-center cursor-pointer'>
                <Image src={I11} alt='loading' width={20} height={20} />
                <h1 className='text-[rgba(144,163,191,100%)] text-[12px] font-semibold'>Log out</h1>
            </div>

        </div>

        {/* dashboard div */}

        <div className='bg-[#F6F7F9] p-4 mx-auto lg:w-[80%] lg:flex gap-2 justify-between'>

        {/* right div */}
            <div className='bg-white lg:w-[50%] p-4 rounded-lg'>
                <div>
                    <h1 className='text-[rgba(26,32,44,100%)] font-bold'>Details Rental</h1>
                </div>

                <div className='w-fit mx-auto mt-3'>
                    <Image src={I12} alt='loading' width={550} height={500}></Image>
                </div>

                <div className='flex justify-between mt-3'>
                    <div className='flex gap-3'>
                        <div>
                            <Image src={I13} alt='loading' width={150} height={150}></Image>
                        </div>
                        <div>
                            <h1 className='text-[rgba(26,32,44,100%)] font-bold'>Nissan GT - R</h1>
                            <p className='text-[#3D5278] font-bold'>Sport car</p>
                        </div>
                    </div>
                    <div>
                        <h1>#9761</h1>
                    </div>
                </div>

                <div className='w-[100%] mt-3 h-fit'>
                    <div className='px-4 py-3 bg-white '>
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

                    <div className='w-full px-4 py-3 bg-white'>
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

                <div className='flex justify-between mt-3 items-end'>
                    <div>
                        <h1 className='text-[rgba(26,32,44,100%)] text-[18px] font-bold'>Total Rental Price</h1>
                        <p className='text-[rgba(144,163,191,100%)] text-[14px] '>Overall price and includes rental discount</p>
                    </div>
                    <div>
                        <h1 className='text-[rgba(26,32,44,100%)] font-bold text-[32px]'>$80.00</h1>
                    </div>
                </div>
            </div>

        {/* left div */}
            <div  className='my-3 md:my-0'>
                <div className='mx-auto md:mx-0 w-fit'>
                <Image src={I14} alt='loading' width={500} height={500}></Image>
                </div>
                <div className='mx-auto md:mx-0 md:mt-10 w-fit'>
                <Image src={I15} alt='loading' width={500} height={500}></Image>
                </div>
            </div>
        </div>
        
    </div>
    </>
  )
}

export default page