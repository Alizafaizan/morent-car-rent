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
"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { client } from '@/sanity/lib/client'; // Make sure this path is correct

// Icons
import logoimg from '@/app/assets/header/Logo image.png';
import searchlogo from '@/app/assets/header/search-normal.png';
import filter from '@/app/assets/header/filter.png';
import heart from '@/app/assets/header/heart.png';
import noti from '@/app/assets/header/Notification.png';
import setting from '@/app/assets/header/Settings.png';

interface Product {
  _id: string;
  name: string;
  type: string;
  brand?: string;
  original_price?: string;
  fuel_capacity: string;
  transmission: string;
  seating_capacity: string;
  price_per_day: string;
  mainImage: string;
  tags: string[];
}

function Header() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Fetch all products from Sanity on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "car"] {
        _id,
        name,
        type,
        brand,
        fuel_capacity,
        transmission,
        seating_capacity,
        price_per_day,
        "mainImage": mainImage.asset->url,
        tags
      }`;

      try {
        const data = await client.fetch(query);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const performSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    const results = products.filter(product => {
      const searchTerm = query.toLowerCase();
      return (
        product.name.toLowerCase().includes(searchTerm) ||
        product.type.toLowerCase().includes(searchTerm) ||
        (product.brand?.toLowerCase().includes(searchTerm) ?? false) ||
        (product.tags?.some(tag => tag.toLowerCase().includes(searchTerm)) ?? false)
      );
    });

    setSearchResults(results);
    setIsSearching(true);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    performSearch(query);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch(searchQuery);
  };

  const handleResultSelect = (product: Product) => {
    setSearchQuery(product.name);
    setIsSearching(false);
    router.push(`/detailcars/${product._id}`);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-[#3563E9] font-bold text-2xl">
            MORENT
          </Link>

          <div className="relative w-1/2 max-w-xl" ref={searchInputRef}>
            <form onSubmit={handleSearchSubmit} className="flex items-center bg-gray-100 rounded-full overflow-hidden">
              <button type="submit" className="p-2">
                <Image src={searchlogo} alt="search" width={20} height={20} />
              </button>
              
              <input 
                type="text" 
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search cars..." 
                className="flex-grow bg-transparent p-2 outline-none"
              />
              
              <button type="button" className="p-2">
                <Image src={filter} alt="filter" width={20} height={20} />
              </button>
            </form>

            <AnimatePresence>
              {isSearching && searchResults.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-white border rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto"
                >
                  {searchResults.map((product) => (
                    <motion.div 
                      key={product._id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center p-3 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleResultSelect(product)}
                    >
                      <Image
                        src={product.mainImage}
                        alt={product.name}
                        width={40}
                        height={40}
                        className="object-contain p-2"
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

          <div className="flex items-center space-x-4">
            <Link href="#" className="hover:bg-gray-100 p-2 rounded-full transition">
              <Image src={heart} alt="favorites" width={24} height={24} />
            </Link>
            <Link href="#" className="hover:bg-gray-100 p-2 rounded-full transition">
              <Image src={noti} alt="notifications" width={24} height={24} />
            </Link>
            <Link href="#" className="hover:bg-gray-100 p-2 rounded-full transition">
              <Image src={setting} alt="settings" width={24} height={24} />
            </Link>
            <Link href="/dashboard" className="hover:bg-gray-100 p-2 rounded-full transition">
              <Image src={logoimg} alt="profile" width={32} height={32} className="rounded-full" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;