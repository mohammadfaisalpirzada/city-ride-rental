import React from 'react';
import Image from 'next/image';

const CarAds = () => {
  return (
    <div className="px-8 py-8">
      {/* Ads Container */}
      <div className="flex flex-wrap justify-between gap-4">

        {/* First Car Ad */}
        <div className="relative bg-[#54A6FF] w-full sm:w-[640px] h-[360px] rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
          <div>

            
          </div>
          {/* Title */}
          <h2 className="text-white text-center text-[32px] font-semibold mb-4">
            The Best Platform for Car Rental
          </h2>
          {/* Description */}
          <p className="text-white text-center text-[16px] mb-6">
            Ease of doing a car rental safely and reliably. Of course at a low price.
          </p>
          {/* Button */}
          <button className="bg-white text-[#54A6FF] font-semibold py-2 px-6 rounded-md w-[120px] h-[44px] flex items-center justify-center hover:bg-[#54A6FF] hover:text-white transition duration-300">
            Rental Car
          </button>
        
          </div>
        </div>






        {/* Second Car Ad (Hidden on Mobile) */}
        <div className="relative bg-[#3563E9] w-full sm:w-[640px] h-[360px] rounded-lg shadow-lg p-6 flex flex-col items-center justify-center hidden sm:block">
          {/* Title */}
          <h2 className="text-white text-center text-[32px] font-semibold mb-4">
            Easy way to rent a car at a low price
          </h2>
          {/* Description */}
          <p className="text-white text-center text-[16px] mb-6">
            Providing cheap car rental services and safe and comfortable facilities.
          </p>
          {/* Button */}
          <button className="bg-white text-[#3563E9] font-semibold py-2 px-6 rounded-md w-[120px] h-[44px] flex items-center justify-center hover:bg-[#3563E9] hover:text-white transition duration-300">
            Rental Car
          </button>

        </div>

      </div>

  );
};

export default CarAds;
