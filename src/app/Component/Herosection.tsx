import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Hcar from '@/app/assets/herosection/Hcar.png'

const Herosection = () => {
  return (
    <div className='px-4 md:px-[40px] py-[32px] md:flex md:justify-between bg-[#F6F7F9]'>
      {/* First Hero Card */}
      <div className="
        w-full md:w-[48%] 
        mb-4 md:mb-0
        bg-[rgba(84,166,255,100%)] 
        rounded-xl 
        bg-[url('/BG.png')] 
        bg-cover 
        bg-center 
        relative 
        overflow-hidden
      ">
        <div className='p-6 relative z-10'>
          <h1 className='text-white font-semibold text-xl md:text-[20px] w-fit'>
            The Best Platform For Car Rental
          </h1>
          <p className='font-medium text-sm md:text-[14px] text-white md:w-64 mt-3'>
            Ease of doing a car rental safely and reliably. Of course at a low price.
          </p>
          <Link href="/billing">
            <button className='
              bg-[rgba(53,99,233,100%)] 
              px-6 md:px-8 
              py-3 md:py-4 
              mt-5 
              rounded-md 
              text-white 
              text-sm md:text-base
            '>
              Rent Car
            </button>
          </Link>
        </div>
        <div className='flex justify-center relative z-10'>
          <Image 
            src={Hcar} 
            alt='Car' 
            className='w-[250px] md:w-[350px] h-auto'
            width={350} 
            height={350}
          />
        </div>
      </div>

      {/* Second Hero Card */}
      <div className="
        w-full md:w-[48%] 
        bg-[rgba(53,99,233,100%)] 
        rounded-xl 
        bg-[url('/Rectangle.png')] 
        bg-repeat 
        bg-center 
        relative 
        overflow-hidden 
        hidden md:block
      ">
        <div className='p-6 relative z-10'>
          <h1 className='text-white font-semibold text-xl md:text-[20px] w-fit'>
            Easy Way To Rent A Car At Low Price
          </h1>
          <p className='font-medium text-sm md:text-[14px] text-white md:w-64 mt-3'>
            Providing cheap car rental services and safe and comfortable facilities.
          </p>
          <Link href="/billing">
            <button className='
              bg-[rgba(84,166,255,100%)] 
              px-6 md:px-8 
              py-3 md:py-4 
              mt-5 
              rounded-md 
              text-white 
              text-sm md:text-base
            '>
              Rent Car
            </button>
          </Link>
        </div>
        <div className='flex justify-center relative z-10'>
          <Image 
            src={Hcar} 
            alt='Car' 
            className='w-[250px] md:w-[350px] h-auto'
            width={350} 
            height={350}
          />
        </div>
      </div>
    </div>
  )
}

export default Herosection