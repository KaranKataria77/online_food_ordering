import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { BiCycling } from "react-icons/bi";
import { BsClockFill } from "react-icons/bs";
import FoodRecommendation from "@/components/FoodRecommendation";

const RestaurantDetail = () => {
  return (
    <div className="md:px-80">
      {/* header */}
      <div className="">
        <div className="flex justify-between p-5">
          <div className="text-2xl">
            <IoMdArrowBack />
          </div>
          <div className="text-2xl">
            <CiSearch />
          </div>
        </div>
      </div>

      {/* title */}
      <div className="px-5 flex justify-between mt-3">
        <div>
          <h1 className="font-bold text-lg">Zaika Fine Dine</h1>
          <div className="mt-2">
            <p className="text-xs opacity-70">Indian, Chinese</p>
            <p className="text-xs opacity-70 mt-1">Dombivli East, 0.8 km</p>
          </div>
        </div>
        <div className="border-2 flex flex-col items-center rounded-lg">
          <div className="flex items-center px-2 pt-1 pb-2 border-b-2 text-green-600">
            <FaStar /> <span className="text-sm font-bold pl-1">4.2</span>
          </div>
          <p
            style={{ fontSize: 10 }}
            className="px-2 py-2 font-semibold opacity-70"
          >
            10K+ rating
          </p>
        </div>
      </div>
      <div className="px-5">
        <div className="flex border-b-2 py-6">
          <BiCycling className="text-lg mr-2" />
          <span className="text-sm opacity-60">
            0.8 kms | 44 Delivery fee will apply
          </span>
        </div>
      </div>

      {/* time for delivery */}
      <div className="flex px-5 mt-6 w-3/4 justify-between">
        <div className="flex items-center w-2/5">
          <BsClockFill />
          <span className="text-sm font-extrabold ml-3">28 MINS</span>
        </div>
        <div className="flex items-center">
          <span
            style={{ paddingLeft: 5, paddingRight: 5 }}
            className="text-sm font-bold border-2 border-gray-950 rounded-full mr-3"
          >
            ₹
          </span>
          <span className="text-sm font-extrabold">₹280 for two</span>
        </div>
      </div>

      {/* veg/non-veg options */}

      {/* lists of dishes */}
      <div className="px-5 my-7">
        <FoodRecommendation />
      </div>
      <div className="bg-gray-200 h-5"></div>
      <div className="px-5 my-7">
        <FoodRecommendation />
      </div>
      <div className="bg-gray-200 h-5"></div>
    </div>
  );
};

export default RestaurantDetail;
