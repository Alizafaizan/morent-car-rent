import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Hcar from '@/app/assets/herosection/Hcar.png';
import dropdown from '@/app/assets/herosection/arrow.png';
import swap from '@/app/assets/herosection/Swap.png';


const Herosection = () => {
  return (
    <>
    {/* parent div for hero section */}
    <div className='px-[40px] py-[32px] md:flex md:justify-between bg-[#F6F7F9]'>

        {/* first child div */}
        <div className="bg-[rgba(84,166,255,100%)] lg:w-[48%] h-[350px] rounded-xl bg-[url('/BG.png')] bg-cover bg-center relative">
            <div className='p-6'>
                <h1 className='text-white font-semibold text-[20px] w-fit'>The Best Platform For Car Rental</h1>
                <p className='font-medium text-[14px] text-white md:w-64 mt-3'>Ease of doing a car rental safely and reliably. Of course at a low price.</p>
                <Link href={"/billing"}><button className='bg-[rgba(53,99,233,100%)] px-8 py-4 mt-5 rounded-md text-white'>Rent Car</button></Link>
            </div>
            <div className='flex justify-center'>
                <Image src={Hcar} alt='loading' width={350} height={350}></Image>
            </div>
        </div>

         {/* second child div */}
        <div className="bg-[rgba(53,99,233,100%)] lg:w-[48%] h-[350px] rounded-xl bg-[url('/Rectangle.png')] bg-repeat bg-center relative hidden md:block">
            <div className='p-6'>
                <h1 className='text-white font-semibold text-[20px] w-fit'>Easy Way To Rent A Car At Low Price</h1>
                <p className='font-medium text-[14px] text-white md:w-64 mt-3'>Providing cheap car rental services and safe and comfortable facilities.</p>
                <Link href={"/billing"}><button className='bg-[rgba(84,166,255,100%)] px-8 py-4 mt-5 rounded-md text-white'>Rent Car</button></Link>
            </div>
            <div className='flex justify-center'>
                <Image src={Hcar} alt='loading' width={350} height={350}></Image>
            </div>
        </div>
    </div>

    {/* div for pickup and drop off */}
    <div className='px-[40px] py-[32px] flex flex-col lg:flex-row justify-between bg-[#F6F7F9]'>
        <div className='lg:w-[45%] px-8 py-3 bg-white'>
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

        <div className='lg:w-[45%] px-8 py-3 bg-white'>
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
    </>
  )
}

export default Herosection