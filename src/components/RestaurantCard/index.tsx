import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const RestaurantCard = () => {
  return (
    <div className="w-36 h-64 mr-2 flex flex-col md:w-52 md:mr-10">
      <div className="relative w-36 h-64 md:w-52 md:h-40 mb-1">
        <Image
          className="rounded-2xl"
          fill={true}
          src="/burger_dish.png"
          alt=""
        />
      </div>
      <span className="text-lg font-medium">Subway</span>
      <div className="flex items-center">
        <span
          style={{ padding: 3, fontSize: 10 }}
          className=" bg-green-500 rounded-2xl text-white mr-1"
        >
          <FaStar />
        </span>
        <span>4.3 . 10 mins</span>
      </div>
      <p className="text-sm opacity-50 mt-1">Burger, Beverages...</p>
      <p className="text-sm opacity-50 mb-2">Kalyan</p>
    </div>
  );
};

export default RestaurantCard;
