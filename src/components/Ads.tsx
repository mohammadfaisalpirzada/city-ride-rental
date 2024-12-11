import React from 'react';
import Image from 'next/image';

const CarAds = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* First Div */}
      <div className="absolute top-8 sm:top-8 sm:left-8 rounded-lg bg-[#54A6FF] w-full sm:w-[620px] h-[360px] flex justify-center items-center">
        {/* Ads Div in First Div */}
        <div className="absolute top-6 left-6 h-[224px] w-[284px] p-6 rounded-lg">
          <h1 className="font-[Plus Jakarta Sans] text-[24px] leading-[28px] font-bold mb-2 text-white">
            The Best Platform for Car Rental
          </h1>
          <p className="font-[Plus Jakarta Sans] text-[14px] leading-[15px] mb-6  text-white">
            Ease of doing a car rental safely and reliably. Of course at a low price.
          </p>
          <button className="font-[Plus Jakarta Sans] text-[16px] bg-[#3563E9] text-white hover:bg-[#2547A9] w-[140px] h-[44px] rounded-lg">
            Rental Car
          </button>


        {/* Image after Button (outside ads div) */}
        <Image
          src="/image7.jpg"
          alt="Car Rental"
          width={296}
          height={90}
          className="absolute top-[210] sm:top-[232px] left-[200] sm:left-[170px] sm:w-[406px] sm:h-[90px] "

        />

        </div>

      </div>







      {/* Second Div (hidden on mobile) */}
      <div className="hidden sm:block absolute top-8 sm:left-[700px] bg-[#3563E9] w-full sm:w-[620px] h-[360px] flex justify-center items-center rounded-lg">
        {/* Ads Div in Second Div */}
        <div className="absolute top-6 left-6 h-[224px] w-[284px] p-6 rounded-lg">
          <h1 className="font-[Plus Jakarta Sans] text-[24px] leading-[28px] font-bold mb-2 text-white">
            Easy way to rent a car at a low price
          </h1>
          <p className="font-[Plus Jakarta Sans] text-[14px] leading-[15px] mb-6  text-white">
            Providing cheap car rental services and safe and comfortable facilities.
          </p>
          <button className="font-[Plus Jakarta Sans] text-[16px] bg-[#54A6FF] text-white hover:bg-[#2547A9] w-[140px] h-[44px] rounded-lg">
            Rental Car
          </button>

     {/* Image after Button (outside ads div) */}
     <Image
          src="/image8.jpg"
          alt="Car Rental"
          width={606}
          height={150}
          className="absolute top-[232px] left-[227px]"
        />




        </div>

        </div>
    </div>
  );
};

export default CarAds;
