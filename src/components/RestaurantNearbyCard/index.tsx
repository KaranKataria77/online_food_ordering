import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const RestaurantsNearbyCard = ({ src }: { src: string }) => {
  return (
    <div className="flex items-center mt-12 md:flex-col md:items-start">
      <div className="relative">
        <div className="relative w-24 h-28 md:w-52 md:h-40 md:mr-10 drop-shadow-lg">
          <Image
            className="rounded-lg md:rounded-2xl"
            fill={true}
            src={src}
            alt="Top Pick"
          />
        </div>
        <div className="bg-white absolute px-3 py-1 -bottom-1 left-2.5 rounded-lg md:hidden">
          <p className="flex justify-center font-bold text-xs text-orange-500">
            60% OFF
          </p>
          <span
            className="flex items-center justify-center font-semibold text-orange-500"
            style={{ fontSize: 8 }}
          >
            <span
              style={{ marginRight: 2, width: 2, height: 2 }}
              className=" bg-orange-500 rounded-lg"
            ></span>{" "}
            UPTO ₹120{" "}
            <span
              style={{ marginLeft: 2, width: 2, height: 2 }}
              className=" bg-orange-500 rounded-lg"
            ></span>
          </span>
        </div>
      </div>

      <div className="pl-4 md:pl-2 md:pt-2">
        <p className="text-md font-bold opacity-90">Theobroma</p>
        <div className="flex text-xs md:text-sm font-medium opacity-80 py-1">
          <span
            style={{ padding: 3, fontSize: 12 }}
            className=" bg-green-500 rounded-2xl text-white mr-1"
          >
            <FaStar />
          </span>
          <span>4.1</span>
          <span className="px-2"> . 16 mins . </span> <span> 800 for two</span>
        </div>
        <p className="flex text-xs md:text-sm font-medium md:font-normal opacity-60">
          Bakery, Desserts
        </p>
      </div>
    </div>
  );
};

export default RestaurantsNearbyCard;
