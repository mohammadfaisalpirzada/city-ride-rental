import React from 'react';
import Image from 'next/image';

const ProfilNotification = () => {
  return (
    <div className="flex items-center gap-5">
      {/* Heart Icon */}
      <button className="w-[44px] h-[44px] flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200">
        <Image
          src="/images/vector.png"
          alt="Heart Icon"
          width={20}
          height={20}
        />
      </button>

      {/* Notification Icon */}
      <div className="relative w-[44px] h-[44px] flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200">
        <Image
          src="/images/notification.png"
          alt="Notification Icon"
          width={20}
          height={20}
        />
        <span className="absolute top-2 right-2 w-2 h-2 bg-red-600 rounded-full"></span>
      </div>

      {/* Settings Icon */}
      <button className="w-[44px] h-[44px] flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200">
        <Image
          src="/images/setting-2.png"
          alt="Settings Icon"
          width={20}
          height={20}
        />
      </button>

      {/* Profile Picture */}
      <div className="w-[44px] h-[44px] rounded-full overflow-hidden bg-gray-200">
        <Image
          src="/images/profile-picture.jpg"
          alt="Profile Picture"
          width={44}
          height={44}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default ProfilNotification;
