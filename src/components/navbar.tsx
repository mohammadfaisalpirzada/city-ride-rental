import React from 'react';
import Image from 'next/image';
import SearchBar from './SearchBar';
import ProfilNotification from './ProfilNotification';

const NavBar = () => {
  return (
    <nav className="flex flex-col md:flex-row items-center justify-between px-4 py-4 border-b border-gray-200">
      {/* Top Section: Logo and Profile Picture */}
      <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0">
        {/* Logo */}
        <div className="font-bold text-blue-600 text-[24px] md:text-[32px]">
          MORENT
        </div>

        {/* Profile Picture (Mobile Only) */}
        <div className="w-[32px] h-[32px] rounded-full overflow-hidden bg-gray-200 ml-auto md:hidden">
          <Image
            src="/images/profile-picture.jpg"
            alt="Profile Picture"
            width={32}
            height={32}
            className="object-cover"
          />
        </div>
      </div>

      {/* Middle Section: Search Bar */}
      <div className="w-full md:w-auto">
        <SearchBar />
      </div>

      {/* Bottom Section: Profil & Notification (Desktop Only) */}
      <div className="hidden md:flex">
        <ProfilNotification />
      </div>
    </nav>
  );
};

export default NavBar;
