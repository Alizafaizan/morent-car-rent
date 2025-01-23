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
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logoimg from '@/app/assets/header/Logo image.png';
import searchlogo from '@/app/assets/header/search-normal.png';
import filter from '@/app/assets/header/filter.png';
import heart from '@/app/assets/header/heart.png';
import noti from '@/app/assets/header/Notification.png';
import setting from '@/app/assets/header/Settings.png';
import { Result } from 'postcss';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<{ id: number; title: string }[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Handle search input changes
  const handleSearchChange = (e:any) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.length > 0) {
      setIsSearching(true);
      performSearch(query);
    } else {
      setIsSearching(false);
      setSearchResults([]);
    }
  };

  // Perform search operation
  const performSearch = async (query:any) => {
    try {
      // Mock search results - replace with your actual API call
      const mockResults = [
        { id: 1, title: 'Search Result 1' },
        { id: 2, title: 'Search Result 2' },
      ].filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      
      setSearchResults(mockResults);
    } catch (error) {
      console.error('Search error:', error);
      setSearchResults([]);
    }
  };

  // Handle search submission
  const handleSearchSubmit = (e:any) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      performSearch(searchQuery);
    }
  };

  return (
    <div>
      <div className='flex justify-between items-center mx-[25px] my-[32px]'>
        <div className='flex md:w-[60%] justify-between'>
          <div className='w-fit'>
            <h1 className='text-[#3563E9] font-[PlusJakartaSans] font-bold text-[24px] uppercase'>
              <Link href="/">MORENT</Link>
            </h1>
          </div>

          <div className='hidden sm:block relative'>  
            <form onSubmit={handleSearchSubmit} className='flex items-center px-3 py-1 space-x-3 border border-[#C3D4E9] rounded-2xl'>
              <button type="submit" className='flex items-center'>
                <Image 
                  src={searchlogo} 
                  alt='search'
                  width={20} 
                  height={20} 
                  className='cursor-pointer'
                />
              </button>
              <input 
                type="text" 
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder='Search something here' 
                className='outline-none bg-transparent placeholder:text-[#596780]'
              />
              <Link href={`/detailcars/${searchQuery}`} >
                <Image src={filter} alt='filter' width={25} height={25} className='cursor-pointer'/>
              </Link>
            </form>

            {isSearching && searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#C3D4E9] rounded-lg shadow-lg z-50">
                {searchResults.map((result) => (
                  <button
                    key={result.id}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100"
                    onClick={() => {
                      setSearchQuery(result.title);
                      setIsSearching(false);
                    }}
                  >
                    {result.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>    

        <div className='w-fit flex items-center gap-2'>
          <Link href="#"> 
            <Image src={heart} alt='favorites' width={35} height={35} className='hidden sm:block'/>
          </Link>
          <Link href="#"> 
            <Image src={noti} alt='notifications' width={35} height={35} className='hidden sm:block'/>
          </Link>
          <Link href="#"> 
            <Image src={setting} alt='settings' width={35} height={35} className='hidden sm:block'/>
          </Link>
          <Link href="/dashboard"> 
            <Image src={logoimg} alt='profile' width={35} height={35} />
          </Link>
        </div>
      </div>

      <div className='block sm:hidden'>
        <div className='mx-[25px] my-[32px] flex justify-between'>
          <form 
            onSubmit={handleSearchSubmit}
            className='flex px-4 py-3 space-x-3 w-[80%] drop-shadow-lg border border-[#C3D4E9] rounded-2xl'
          >
            <button type="submit" className='flex items-center'>
              <Image 
                src={searchlogo} 
                alt='search'
                width={30} 
                height={30} 
                className='cursor-pointer'
              />
            </button>
            <input 
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder='Search something here' 
              className='outline-none bg-transparent placeholder:text-[#596780] w-full'
            />
          </form>

          <div className='flex items-center justify-center w-[15%] border border-[#C3D4E9] rounded-xl'>
            <Link href="/category">
              <Image src={filter} alt='filter' width={25} height={25} className='cursor-pointer'/>
            </Link>
          </div>
        </div>

        {isSearching && searchResults.length > 0 && (
          <div className="mx-[25px] border border-[#C3D4E9] rounded-lg shadow-lg bg-white">
            {searchResults.map((result) => (
              <button
                key={result.id}
                className="w-full px-4 py-2 text-left hover:bg-gray-100"
                onClick={() => {
                  setSearchQuery(result.title);
                  setIsSearching(false);
                }}
              >
                {result.title}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;