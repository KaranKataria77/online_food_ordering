"use client";
import Places from "@/app/testing/page";
import React from "react";
import { FaLocationCrosshairs } from "react-icons/fa6";

const FindLocation = ({
  handleStateChange,
}: {
  handleStateChange: () => void;
}) => {
  return (
    <div>
      <div className="mt-14 md:mt-10">
        <h1 className="text-4xl font-bold">Game Night?</h1>
        <h3 className="text-xl mt-4">
          Order food from favourite restaurants near you.
        </h3>
      </div>
      <div className="mt-14 md:mt-8 md:flex w-full">
        <div className="flex md:w-3/5 justify-between border border-solid border-orange-500 focus:outline-none">
          <Places addLocation={handleStateChange} />
          <div className="text-2xl flex items-center justify-center mr-2 opacity-50">
            <FaLocationCrosshairs />
          </div>
        </div>
        <button
          onClick={handleStateChange}
          className="w-full md:w-auto p-3 px-6 bg-orange-500 text-white font-bold"
        >
          FIND FOOD
        </button>
      </div>
      <div className="mt-14 md:mt-8">
        <h3 className="text-sm opacity-60">POPULAR CITIES IN INDIA</h3>
        <p className="text-sm mt-3">
          Ahmedabad, Bangalore, Chennai, Delhi, Gurgaon, Hyderabad, Kolkata,
          Mumbai, Pune & more
        </p>
      </div>
    </div>
  );
};

export default FindLocation;
