import React from "react";
import Image from "next/image";

const PickupDropOffSection = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-4 sm:relative top-[550px] sm:top-[-190px] absolute w-full px-4">
      {/* Pick-Up Section */}
      <div
        className="bg-white border rounded-lg shadow-md flex flex-col p-4"
        style={{
          width: "100%",
          maxWidth: "582px",
          height: "132px",
          borderRadius: "10px",
        }}
      >
        {/* Pick-Up Header */}
        <div className="flex items-center gap-2 mb-4">
          <input
            type="radio"
            name="pickup"
            id="pickup"
            className="w-4 h-4 accent-blue-600"
            checked
            readOnly
          />
          <label
            htmlFor="pickup"
            className="font-[Plus Jakarta Sans] text-[16px] sm:text-[16px] font-bold text-black"
          >
            Pick-Up
          </label>
        </div>

        {/* Dropdown Section */}
        <div className="flex items-center justify-between w-full">
          {/* Locations */}
          <div className="flex flex-col items-start w-[30%]">
            <label className=" font-[Plus Jakarta Sans] font-bold text-gray-700 text-[14px] sm:text-[16px]">
              Locations
            </label>
            <select className="text-gray-600 bg-transparent focus:outline-none text-[10px] sm:text-[16px] w-full">
              <option>Select your city</option>
              <option>Karachi</option>
              <option>Lahore</option>
              <option>Islamabad</option>
              <option>Rawalpindi</option>
              <option>Faisalabad</option>
              <option>Multan</option>
              <option>Quetta</option>
              <option>Peshawar</option>
              <option>Hyderabad</option>
              <option>Sialkot</option>
              <option>Sukkur</option>
              <option>Gujranwala</option>
              <option>Bahawalpur</option>
              <option>Sargodha</option>
              <option>Abbottabad</option>
              <option>Mirpur</option>
            </select>
          </div>

          {/* Vertical Divider */}
          <div className="h-[48px] w-[1px] bg-gray-300 mx-4"></div>

          {/* Date */}
          <div className="flex flex-col items-start w-[30%]">
            <label className="font-[Plus Jakarta Sans] font-bold text-gray-700 text-[14px] sm:text-[16px]">
              Date
            </label>
            <input
              type="date"
              className="text-gray-600 bg-transparent focus:outline-none text-[12px] w-full"
            />
          </div>

          {/* Vertical Divider */}
          <div className="h-[48px] w-[1px] bg-gray-300 mx-4"></div>

          {/* Time */}
          <div className="flex flex-col items-start w-[30%]">
            <label className="font-[Plus Jakarta Sans] font-bold text-gray-700 text-[14px] sm:text-[16px]">
              Time
            </label>
            <select className="text-gray-600 bg-transparent focus:outline-none text-[10px] sm:text-[14px] w-full">
              <option>Select your time</option>
              <option>12:00 AM</option>
              <option>1:00 AM</option>
              <option>2:00 AM</option>
              <option>3:00 AM</option>
              <option>4:00 AM</option>
              <option>5:00 AM</option>
              <option>6:00 AM</option>
              <option>7:00 AM</option>
              <option>8:00 AM</option>
              <option>9:00 AM</option>
              <option>10:00 AM</option>
              <option>11:00 AM</option>
              <option>12:00 PM</option>
              <option>1:00 PM</option>
              <option>2:00 PM</option>
              <option>3:00 PM</option>
              <option>4:00 PM</option>
              <option>5:00 PM</option>
              <option>6:00 PM</option>
              <option>7:00 PM</option>
              <option>8:00 PM</option>
              <option>9:00 PM</option>
              <option>10:00 PM</option>
              <option>11:00 PM</option>
            </select>
          </div>
        </div>
      </div>

      {/* Center Switch Image */}
      <div className="mt-4 sm:mt-0">
        <Image
          src="/Switch.png"
          alt="Switch"
          width={100}
          height={100}
          className="mx-auto"
        />
      </div>

      {/* Drop-Off Section */}
      <div
        className="bg-white border rounded-lg shadow-md flex flex-col p-4 mt-4 sm:mt-0"
        style={{
          width: "100%",
          maxWidth: "582px",
          height: "132px",
          borderRadius: "10px",
        }}
      >
        {/* Drop-Off Header */}
        <div className="flex items-center gap-2 mb-4">
          <input
            type="radio"
            name="dropoff"
            id="dropoff"
            className="w-4 h-4 accent-blue-600"
          />
          <label
            htmlFor="dropoff"
            className="font-[Plus Jakarta Sans] text-[16px] sm:text-[10px] font-bold text-black"
          >
            Drop-Off
          </label>
        </div>

        {/* Dropdown Section */}
        <div className="flex items-center justify-between w-full">
          {/* Locations */}
          <div className="flex flex-col items-start w-[30%]">
            <label className="font-[Plus Jakarta Sans] font-bold text-gray-700 text-[14px] sm:text-[16px]">
              Locations
            </label>
            <select className="text-gray-600 bg-transparent focus:outline-none text-[10px] sm:text-[12px]  w-full">
              <option>Select your city</option>
              <option>Karachi</option>
              <option>Lahore</option>
              <option>Islamabad</option>
              <option>Rawalpindi</option>
              <option>Faisalabad</option>
              <option>Multan</option>
              <option>Quetta</option>
              <option>Peshawar</option>
              <option>Hyderabad</option>
              <option>Sialkot</option>
              <option>Sukkur</option>
              <option>Gujranwala</option>
              <option>Bahawalpur</option>
              <option>Sargodha</option>
              <option>Abbottabad</option>
              <option>Mirpur</option>
            </select>
          </div>

          {/* Vertical Divider */}
          <div className="h-[48px] w-[1px] bg-gray-300 mx-4"></div>

          {/* Date */}
          <div className="flex flex-col items-start w-[30%]">
            <label className="font-[Plus Jakarta Sans] font-bold text-gray-700 text-[14px] sm:text-[16px]">
              Date
            </label>
            <input
              type="date"
              className="text-gray-600 bg-transparent focus:outline-none text-[12px] w-full"
            />
          </div>

          {/* Vertical Divider */}
          <div className="h-[48px] w-[1px] bg-gray-300 mx-4"></div>

          {/* Time */}
          <div className="flex flex-col items-start w-[30%]">
            <label className="font-[Plus Jakarta Sans] font-bold text-gray-700 text-[14px] sm:text-[16px]">
              Time
            </label>
            <select className="text-gray-600 bg-transparent focus:outline-none text-[10px] sm:text-[12px] w-full">
              <option>Select your time</option>
              <option>12:00 AM</option>
              <option>1:00 AM</option>
              <option>2:00 AM</option>
              <option>3:00 AM</option>
              <option>4:00 AM</option>
              <option>5:00 AM</option>
              <option>6:00 AM</option>
              <option>7:00 AM</option>
              <option>8:00 AM</option>
              <option>9:00 AM</option>
              <option>10:00 AM</option>
              <option>11:00 AM</option>
              <option>12:00 PM</option>
              <option>1:00 PM</option>
              <option>2:00 PM</option>
              <option>3:00 PM</option>
              <option>4:00 PM</option>
              <option>5:00 PM</option>
              <option>6:00 PM</option>
              <option>7:00 PM</option>
              <option>8:00 PM</option>
              <option>9:00 PM</option>
              <option>10:00 PM</option>
              <option>11:00 PM</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickupDropOffSection;
