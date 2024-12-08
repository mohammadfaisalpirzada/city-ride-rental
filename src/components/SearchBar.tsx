import React from 'react';
import Image from 'next/image';

const SearchBar = () => {
  return (
    <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full md:w-[492px] h-[44px]">
      {/* Search Icon */}
      <Image
        src="/images/search-normal.png"
        alt="Search Icon"
        width={16}
        height={16}
        className="mr-2"
      />

      {/* Input Field */}
      <input
        type="text"
        placeholder="Search something here"
        className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-400"
      />

      {/* Filter Icon */}
      <button>
        <Image
          src="/images/setting-2.png"
          alt="Filter Icon"
          width={16}
          height={16}
        />
      </button>
    </div>
  );
};

export default SearchBar;
