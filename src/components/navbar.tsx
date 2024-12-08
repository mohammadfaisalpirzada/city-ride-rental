import React from 'react';
import Image from 'next/image';

const NavBar = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between px-6 py-4 border-b border-gray-200">
      {/* Logo */}
      <div className="font-bold text-blue-600 text-[32px] leading-[48px] tracking-[-0.03em] font-['Plus_Jakarta_Sans']">
        MORENT
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full md:w-[492px] h-[44px] mt-4 md:mt-0">
        <i className="fas fa-search text-gray-400 mr-2"></i>
        <input
          type="text"
          placeholder="Search something here"
          className="bg-transparent flex-grow outline-none text-gray-700 placeholder-gray-400"
        />
        <button className="text-gray-500">
          <i className="fas fa-sliders-h"></i>
        </button>
      </div>

      {/* Icons Section */}
      <div className="flex items-center gap-4 w-auto md:w-[236px] h-[44px] mt-4 md:mt-0">
        {/* Heart Icon */}
        <button className="relative p-2 rounded-full bg-white hover:bg-gray-100 shadow">
          <i className="fas fa-heart text-gray-500"></i>
        </button>
        {/* Notification Icon */}
        <button className="relative p-2 rounded-full bg-white hover:bg-gray-100 shadow">
          <i className="fas fa-bell text-gray-500"></i>
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-600 rounded-full"></span>
        </button>
        {/* Settings Icon */}
        <button className="p-2 rounded-full bg-white hover:bg-gray-100 shadow">
          <i className="fas fa-cog text-gray-500"></i>
        </button>
        {/* User Avatar */}
        <div className="w-[44px] h-[44px] rounded-full overflow-hidden bg-gray-200">
          <Image
            src="/images/profile-picture.jpg"
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
