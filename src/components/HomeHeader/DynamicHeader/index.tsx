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
      link: "/user/location/",
      icon: <IoLocationSharp className="text-orange-500" />,
    },
  ];
  const handleHeader = () => {
    setShowHeader(!showHeader);
  };
  return (
    <>
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
