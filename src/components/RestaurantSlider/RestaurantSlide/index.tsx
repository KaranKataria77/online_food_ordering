"use client";
import React from "react";
import Image from "next/image";

const RestaurantSlide = () => {
  return (
    <div className="w-full p-1">
      <div className="bg-gradient-to-t from-orange-600 via-orange-400 to-orange-200 px-4 py-7 flex w-full rounded-xl">
        <div className="w-3/5">
          <h1 className="text-2xl font-extrabold text-white">Up tp 150₹ OFF</h1>
          <p className="text-white font-extralight text-sm mt-3 mb-3">
            On tasty Delights from Burger King
          </p>
          <button className="bg-white text-orange-500 py-1 px-2 font-extrabold rounded text-xs">
            ORDER NOW
          </button>
        </div>
        <div className="relative w-2/5 h-28 mt-5">
          <Image fill={true} src="/burger.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default RestaurantSlide;
