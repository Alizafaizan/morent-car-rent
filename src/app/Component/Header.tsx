// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import logoimg from '@/app/assets/header/Logo image.png';
// import searchlogo from '@/app/assets/header/search-normal.png';
// import filter from '@/app/assets/header/filter.png';
// import heart from '@/app/assets/header/heart.png';
// import noti from '@/app/assets/header/Notification.png';
// import setting from '@/app/assets/header/Settings.png';

// const Header = () => {
//   return (
//     <>
//     {/* Main div for Header in which logo and link pic search bar will shown*/}
//     <div>

//         {/* top div for label and  logo along with input bar for the medium to larger screens*/}
//         <div className='flex justify-between items-center mx-[25px] my-[32px]'>
        
//         {/* title and input bar div */}
//             <div className='flex md:w-[60%] justify-between'>
//                 <div className='w-fit'>
//                     <h1 className='text-[#3563E9] font-[PlusJakartaSans] font-bold text-[24px] uppercase'><Link href={"/"}>Morent</Link></h1>
//                 </div>

//                 <div className='hidden sm:block'>  
//                     <div className='flex items-center px-3 py-1 space-x-3 border border-[#C3D4E9] rounded-2xl'>
//                         <Image src={searchlogo} alt='loading' width={20} height={20} className='cursor-pointer' />
//                         <input type="text" placeholder='Search something here' className='outline-none bg-transparent placeholder:text-[#596780]'/>
//                         <Link href={"/category"}><Image src={filter} alt='loading' width={25} height={25} className='cursor-pointer'/></Link>
//                     </div>
//                 </div>
//             </div>    

//             {/* all nav links div */}
//             <div className='w-fit flex items-center gap-2'>
//                 <Link href="#"> <Image src={heart} alt='loading' width={35} height={35} className='hidden sm:block'/></Link>
//                 <Link href="#"> <Image src={noti} alt='loading' width={35} height={35} className='hidden sm:block'/></Link>
//                 <Link href="#"> <Image src={setting} alt='loading' width={35} height={35} className='hidden sm:block'/></Link>
//                 <Link href={"/dashboard"}> <Image src={logoimg} alt='loading' width={35} height={35} /></Link>
//             </div>

//         </div>

//         {/* For smaller screen div in which input bar and filter button is present */}
//         <div className='block sm:hidden'>
//             <div className='mx-[25px] my-[32px] flex justify-between'>

//                 <div className='flex px-4 py-3 space-x-3 w-[80%] drop-shadow-lg border border-[#C3D4E9] rounded-2xl'>
//                     <Image src={searchlogo} alt='loading' width={30} height={30} className='cursor-pointer' />
//                     <input type="text" placeholder='Search something here' className='outline-none bg-transparent placeholder:text-[#596780]'/>
//                 </div>

//                 <div className='flex items-center justify-center w-[15%] border border-[#C3D4E9] rounded-xl'>
//                     <Link href={"/category"}><Image src={filter} alt='loading' width={25} height={25} className='cursor-pointer'/></Link>
//                 </div>
//             </div>
//         </div>
        
//     </div>
//     </>
//   )
// }

// export default Header
"use client"
import type React from "react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

// Icons
import logoimg from "@/app/assets/header/Logo image.png"
import searchlogo from "@/app/assets/header/search-normal.png"
import filter from "@/app/assets/header/filter.png"
import heart from "@/app/assets/header/heart.png"
import noti from "@/app/assets/header/Notification.png"
import setting from "@/app/assets/header/Settings.png"

type Product = {
  id: number
  name: string
  type: string
  brand?: string
  original_price?: string
  fuel_capacity: string
  transmission: string
  seating_capacity: string
  price_per_day: string
  image_url: string
  tags: string[]
}

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<Product[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [products, setProducts] = useState<Product[]>([])
  const searchInputRef = useRef<HTMLInputElement>(null)

  // Transition configurations
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
  }

  // Mock product data
  useEffect(() => {
    const mockProducts: Product[] = [
      // ... your existing product list
      {
        id: 1,
        name: "Koenigsegg",
        type: "Sport",
        fuel_capacity: "90L",
        transmission: "Manual",
        seating_capacity: "2 People",
        price_per_day: "$99.00",
        image_url:
          "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcar.11698147.jpg&w=640&q=75",
        tags: ["popular"],
      },
      {
        id: 2,
        name: "Nissan GT-R",
        type: "Sport",
        fuel_capacity: "80L",
        transmission: "Manual",
        seating_capacity: "2 People",
        price_per_day: "$80.00",
        original_price: "$100.00",
        image_url:
          "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcar(1).cab606a9.jpg&w=640&q=75",
        tags: ["popular"],
      },
      {
        id: 3,
        name: "Rolls-Royce",
        type: "Sedan",
        fuel_capacity: "70L",
        transmission: "Manual",
        seating_capacity: "4 People",
        price_per_day: "$96.00",
        image_url:
          "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(2).bd07489a.jpg&w=1200&q=75",
        tags: ["popular"],
      },
      {
        id: 4,
        name: "Nissan GT-R",
        type: "Sport",
        fuel_capacity: "80L",
        transmission: "Manual",
        seating_capacity: "2 People",
        price_per_day: "$80.00",
        original_price: "$100.00",
        image_url:
          "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcar(1).cab606a9.jpg&w=1200&q=75",
        tags: ["popular"],
      },
      {
        id: 5,
        name: "Tesla Model 3",
        type: "Electric",
        fuel_capacity: "100kWh",
        transmission: "Manual",
        seating_capacity: "5 seats",
        price_per_day: "$100.00/day",
        image_url:
          "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(13).37182fc4.jpg&w=1200&q=75",
        tags: ["recommended"],
      },
      {
        id: 6,
        name: "Ford Mustang",
        type: "Gasoline",
        fuel_capacity: "60L",
        transmission: "Manual",
        seating_capacity: "4 seats",
        price_per_day: "$80.00/day",
        image_url:
          "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(14).5f4e5799.jpg&w=1200&q=75",
        tags: ["recommended"],
      },
      {
        id: 7,
        name: "BMW X5",
        type: "Diesel",
        fuel_capacity: "70L",
        transmission: "Manual",
        seating_capacity: "7 seats",
        price_per_day: "$150.00/day",
        image_url:
          "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(15).5f4e5799.jpg&w=1200&q=75",
        tags: ["recommended"],
      },
      {
        id: 8,
        name: "Audi A6",
        type: "Hybrid",
        fuel_capacity: "50L",
        transmission: "Manual",
        seating_capacity: "5 seats",
        price_per_day: "$120.00/day",
        image_url:
          "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(16).fc285c8d.jpg&w=1200&q=75",
        tags: ["recommended"],
      },
      {
        id: 9,
        name: "Mercedes-Benz C-Class",
        brand: "Mercedes",
        type: "Gasoline",
        fuel_capacity: "65L",
        transmission: "Manual",
        seating_capacity: "5 seats",
        price_per_day: "$140.00/day",
        image_url:
          "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(17).574834dc.jpg&w=1200&q=75",
        tags: ["recommended"],
      },
      {
        id: 10,
        name: "Porsche 911",
        brand: "Porsche",
        type: "Gasoline",
        fuel_capacity: "60L",
        transmission: "Manual",
        seating_capacity: "4 seats",
        price_per_day: "$200.00/day",
        image_url:
          "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(18).1b97b4cf.jpg&w=1200&q=75",
        tags: ["recommended"],
      },
      {
        id: 11,
        name: "Chevrolet Camaro",
        brand: "Chevrolet",
        type: "Gasoline",
        fuel_capacity: "70L",
        transmission: "Manual",
        seating_capacity: "4 seats",
        price_per_day: "$110.00/day",
        image_url:
          "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(19).547db9f7.jpg&w=1200&q=75",
        tags: ["recommended"],
      },
      {
        id: 12,
        name: "Nissan Altima",
        brand: "Nissan",
        type: "Hybrid",
        fuel_capacity: "50L",
        transmission: "Manual",
        seating_capacity: "5 seats",
        price_per_day: "$90.00/day",
        image_url:
          "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(20).1b97b4cf.jpg&w=1200&q=75",
        tags: ["recommended"],
      },
      {
        id: 13,
        name: "Rolls-Royce",
        type: "SUV",
        fuel_capacity: "70L",
        transmission: "Manual",
        seating_capacity: "6 People",
        price_per_day: "$72.00",
        image_url:
          "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(17).574834dc.jpg&w=1200&q=75",
        tags: ["recommended"],
      },
      {
        id: 14,
        name: "CR-V",
        type: "SUV",
        fuel_capacity: "80L",
        transmission: "Manual",
        seating_capacity: "6 People",
        price_per_day: "$80.00",
        image_url:
          "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(15).5f4e5799.jpg&w=1200&q=75",
        tags: ["recommended"],
      },
      {
        id: 15,
        name: "All New Terlos",
        type: "SUV",
        fuel_capacity: "90L",
        transmission: "Manual",
        seating_capacity: "6 People",
        price_per_day: "$74.00",
        image_url:
          "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(16).fc285c8d.jpg&w=1200&q=75",
        tags: ["recommended"],
      },
      {
        id: 16,
        name: "MG ZX Exclusive",
        type: "Hatchback",
        fuel_capacity: "90L",
        transmission: "Manual",
        seating_capacity: "2 People",
        price_per_day: "$99.00",
        image_url:
          "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(15).5f4e5799.jpg&w=1200&q=75",
        tags: ["recommended"],
      },
    ]
    setProducts(mockProducts)
  }, [])

  // Enhanced search function with fuzzy matching
  const performSearch = (query: string) => {
    if (!query) {
      setSearchResults([])
      setIsSearching(false)
      return
    }

    const results = products.filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.type.toLowerCase().includes(query.toLowerCase()) ||
        product.brand?.toLowerCase().includes(query.toLowerCase()) ||
        product.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase())),
    )

    setSearchResults(results)
    setIsSearching(results.length > 0)
  }

  // Handle search input changes with debounce
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)

    // Optional: Add debounce for performance
    const timeoutId = setTimeout(() => {
      performSearch(query)
    }, 300)

    return () => clearTimeout(timeoutId)
  }

  // Handle search submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    performSearch(searchQuery)
  }

  // Handle selecting a search result
  const handleResultSelect = (product: Product) => {
    setSearchQuery(product.name)
    setIsSearching(false)
    // Optional: Navigation logic
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchInputRef.current && !searchInputRef.current.contains(event.target as Node)) {
        setIsSearching(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-[#3563E9] font-bold text-2xl">
            MORENT
          </Link>

          {/* Search Bar */}
          <div className="relative w-1/2 max-w-xl" ref={searchInputRef}>
            <form onSubmit={handleSearchSubmit} className="flex items-center bg-gray-100 rounded-full overflow-hidden">
              <button type="submit" className="p-2">
                <Image src={searchlogo || "/placeholder.svg"} alt="search" width={20} height={20} />
              </button>

              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search cars..."
                className="flex-grow bg-transparent p-2 outline-none"
              />

              <Link href={`/search?query=${encodeURIComponent(searchQuery)}`} className="p-2">
                <Image src={filter || "/placeholder.svg"} alt="filter" width={20} height={20} />
              </Link>
            </form>

            {/* Search Results Dropdown with Framer Motion */}
            <AnimatePresence>
              {isSearching && searchResults.length > 0 && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-full left-0 right-0 mt-2 bg-white border rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto"
                >
                  {searchResults.map((product) => (
                    <motion.div
                      key={product.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center p-3 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleResultSelect(product)}
                    >
                      <img
                        src={product.image_url || "/placeholder.svg"}
                        alt={product.name}
                        className="w-[60px] h-[60px] object-cover rounded-md"
                      />
                      <div>
                        <h3 className="font-bold text-lg">{product.name}</h3>
                        <p className="text-sm text-gray-500">{product.type}</p>
                        <p className="text-sm font-semibold">{product.price_per_day}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation Icons */}
          <div className="flex items-center space-x-4">
            <Link href="#" className="hover:bg-gray-100 p-2 rounded-full transition">
              <Image src={heart || "/placeholder.svg"} alt="favorites" width={24} height={24} />
            </Link>
            <Link href="#" className="hover:bg-gray-100 p-2 rounded-full transition">
              <Image src={noti || "/placeholder.svg"} alt="notifications" width={24} height={24} />
            </Link>
            <Link href="#" className="hover:bg-gray-100 p-2 rounded-full transition">
              <Image src={setting || "/placeholder.svg"} alt="settings" width={24} height={24} />
            </Link>
            <Link href="/dashboard" className="hover:bg-gray-100 p-2 rounded-full transition">
              <Image
                src={logoimg || "/placeholder.svg"}
                alt="profile"
                width={32}
                height={32}
                className="rounded-full"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

