import React from "react";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";
import { cookies } from "next/headers";
import { IoLocationSharp } from "react-icons/io5";

const HomeHeader = () => {
  const cookieStore = cookies();
  let location = cookieStore.get("location");
  const nameCookie = cookieStore.get("username");
  let name;
  if (
    location !== undefined &&
    location !== null &&
    typeof location.value === "string"
  ) {
    location = JSON.parse(location.value);
  }
  if (
    nameCookie !== undefined &&
    nameCookie.value !== undefined &&
    typeof nameCookie.value === "string"
  ) {
    name = nameCookie.value;
  }
  return (
    <div className="border-b-2 fixed z-20 w-full bg-white">
      <div className="px-5 py-3 flex justify-between">
        {location &&
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
        )}

        <Link
          href={name ? "/user/account" : "/login"}
          className="flex items-center cursor-pointer"
        >
          <div className="text-xl">
            <FaRegUser className="text-orange-500" />
          </div>
          <p className="ml-1 font-semibold text-orange-500">
            {name ?? "LOGIN"}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default HomeHeader;
