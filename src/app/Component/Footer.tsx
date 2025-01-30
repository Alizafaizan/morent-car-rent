import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import copyright from '@/app/assets/footer/copyright.png';

const Footer = () => {
  return (
    <div className="bg-gray-100 w-full">
      {/* Top section with title and links */}
      <div className="px-6 py-8 md:py-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Title and Description */}
        <div>
          <h1 className="text-[#3563E9] font-bold text-2xl uppercase">
            <Link href="/">Morent</Link>
          </h1>
          <p className="text-gray-600 mt-3 max-w-sm">
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>
        
        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <h2 className="font-semibold text-lg">About</h2>
            <ul className="text-gray-600 mt-3 space-y-2">
              <li><Link href="#">How it works</Link></li>
              <li><Link href="#">Featured</Link></li>
              <li><Link href="#">Partnership</Link></li>
              <li><Link href="#">Business Relation</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Community</h2>
            <ul className="text-gray-600 mt-3 space-y-2">
              <li><Link href="#">Events</Link></li>
              <li><Link href="#">Blogs</Link></li>
              <li><Link href="#">Podcast</Link></li>
              <li><Link href="#">Invite a friend</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Socials</h2>
            <ul className="text-gray-600 mt-3 space-y-2">
              <li><Link href="#">Discord</Link></li>
              <li><Link href="#">Instagram</Link></li>
              <li><Link href="#">Twitter</Link></li>
              <li><Link href="#">Facebook</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Horizontal Divider */}
      <hr className="border-gray-300" />

      {/* Bottom Section */}
      <div className="px-6 py-6 lg:px-20 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        {/* Copyright */}
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <Image src={copyright} alt="Copyright" width={15} height={15} />
          <p>2022 Morent. All rights reserved.</p>
        </div>

        {/* Privacy & Terms */}
        <div className="flex space-x-6">
          <Link href="#" className="hover:text-[#3563E9]">Privacy & Policy</Link>
          <Link href="#" className="hover:text-[#3563E9]">Terms & Conditions</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
