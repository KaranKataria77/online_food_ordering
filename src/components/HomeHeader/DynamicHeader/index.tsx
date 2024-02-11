"use client";
import React, { useState } from "react";
import { IoLocationSharp, IoMenu, IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import { IoMdHome, IoIosRestaurant } from "react-icons/io";

const DynamicHeader = () => {
  const [showHeader, setShowHeader] = useState(false);
  const menuItems = [
    {
      name: "Home",
      link: "/user/home",
      icon: <IoMdHome className="text-orange-500" />,
    },
    {
      name: "Restaurants",
      link: "/user/restaurant/",
      icon: <IoIosRestaurant className="text-orange-500" />,
    },
    {
      name: "Location",
      link: "#",
      icon: <IoLocationSharp className="text-orange-500" />,
    },
  ];
  const handleHeader = () => {
    setShowHeader(!showHeader);
  };
  return (
    <>
      {/* {location &&
        Array.isArray(location) &&
        location.length > 0 &&
        location[0] !== 0 ? (
          <div>
            <div className="flex items-center">
              <svg
                width="14"
                height="20"
                viewBox="0 0 14 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.89429 18.3846H12.0643"
                  stroke="#282C3F"
                  strokeOpacity="0.9"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M6.98989 1C3.9613 1 1.5 3.45532 1.5 6.47656C1.5 10.584 6.98989 15.2057 6.98989 15.2057C6.98989 15.2057 12.4798 10.584 12.4798 6.47656C12.4798 3.45532 10.0185 1 6.98989 1Z"
                  stroke="#282C3F"
                  strokeOpacity="0.9"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M6.98955 3.73492C8.36202 3.73492 9.48495 4.82084 9.48495 6.14807C9.48495 7.4753 8.3745 8.56121 6.98955 8.56121C5.61707 8.56121 4.49414 7.4753 4.49414 6.14807C4.49414 4.82084 5.61707 3.73492 6.98955 3.73492Z"
                  fill="#E46D47"
                ></path>
              </svg>
              <p className="ml-2 font-bold">Other</p>
            </div>
            <p className="text-xs opacity-80">
              Omakar Nagar, Ganesh Nagar, Sargali Ga....
            </p>
          </div>
        ) : (
          <div className="flex items-center cursor-pointer">
            <IoLocationSharp className="text-4xl text-orange-500" />
            <p className="text-xl font-semibold ml-1">Set your Location</p>
          </div>
        )} */}
      <div className="hidden md:flex items-center justify-center">
        <ul className="list-none flex py-2 text-md font-semibold">
          {menuItems?.map((item, index) => (
            <Link
              className="ml-10 flex items-center"
              href={item?.link}
              key={index}
            >
              {item?.icon}
              <p className="pl-1 opacity-70">{item?.name}</p>
            </Link>
          ))}
        </ul>
      </div>
      <div className="md:hidden">
        {!showHeader ? (
          <button onClick={handleHeader} className="text-3xl">
            <IoMenu />
          </button>
        ) : (
          <div>
            <div className="absolute z-30 w-1/2 h-72 bg-white left-0 top-0">
              <button
                onClick={handleHeader}
                className="text-3xl font-bold pl-5 mt-4"
              >
                <IoCloseOutline />
              </button>
              <ul className="list-none text-xl font-semibold px-10">
                {menuItems?.map((item, index) => (
                  <Link
                    onClick={handleHeader}
                    className="flex items-center pt-6"
                    key={index}
                    href={item?.link}
                  >
                    <div className="text-2xl">{item?.icon}</div>
                    <li className=" pl-1 opacity-70">{item?.name}</li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DynamicHeader;
