import React from "react";
import { FaRegUser } from "react-icons/fa";
import { cookies } from "next/headers";
import Link from "next/link";
import DynamicHeader from "./DynamicHeader";

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
      <div className="px-5 py-3 h-12 flex justify-between">
        <DynamicHeader />

        <Link
          href={name ? "/user/account" : "/login"}
          className="flex items-center cursor-pointer"
        >
          <div className="text-xl">
            <FaRegUser className="text-orange-500" />
          </div>
          <p className="ml-1 font-semibold text-md opacity-70">
            {name ?? "LOGIN"}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default HomeHeader;
