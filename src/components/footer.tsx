import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-white text-gray-700 py-8 px-6 border-t border-gray-300">
      {/* Top Section */}
      <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row justify-between gap-6">
        {/* Left Section: Logo and Tagline */}
        <div className="w-[292px] flex-shrink-0">
          <h2 className="font-bold text-blue-600 text-[24px] mb-4">MORENT</h2>
          <p className="text-sm">
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>

        {/* Right Section: Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* About Section */}
          <div className="w-[152px]">
            <h3 className="font-bold text-gray-900 mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">How it works</a></li>
              <li><a href="#" className="hover:underline">Featured</a></li>
              <li><a href="#" className="hover:underline">Partnership</a></li>
              <li><a href="#" className="hover:underline">Business Relation</a></li>
            </ul>
          </div>

          {/* Community Section */}
          <div className="w-[152px]">
            <h3 className="font-bold text-gray-900 mb-4">Community</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Events</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Podcast</a></li>
              <li><a href="#" className="hover:underline">Invite a friend</a></li>
            </ul>
          </div>

          {/* Socials Section */}
          <div className="w-[152px]">
            <h3 className="font-bold text-gray-900 mb-4">Socials</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Discord</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">Facebook</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-[1320px] mx-auto mt-8 border-t border-gray-300 pt-4 flex flex-col md:flex-row items-center justify-between text-sm">
        <p className="text-center md:text-left">©2022 MORENT. All rights reserved</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:underline">Privacy & Policy</a>
          <a href="#" className="hover:underline">Terms & Condition</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
