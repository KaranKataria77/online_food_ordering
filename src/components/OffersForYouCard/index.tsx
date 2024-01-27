import Image from "next/image";
import React from "react";
import { ImSpoonKnife } from "react-icons/im";

const OffersForYouCard = () => {
  return (
    <div className="w-36 h-44 border-2 border-gray-100 rounded-lg shadow-lg mr-2 relative">
      <div className="absolute w-10 h-10 z-10 right-2 top-1/3">
        <Image src="/burger.png" alt="" fill={true} />
      </div>
      <div className="w-full h-2/4 rounded-t-lg pl-3 pr-12 py-2">
        <p className="text-xs font-semibold text-indigo-500">Get</p>
        <p className="text-3xl font-extrabold text-indigo-500">60%</p>
        <p className="text-sm font-extrabold text-indigo-500">OFF</p>
      </div>
      <div className="bg-gradient-to-t from-indigo-500 w-full h-2/4 rounded-lg px-3 pt-2">
        <div className="text-md mb-2 mt-1 text-gray-50 bg-indigo-500 w-6 h-6 flex items-center justify-center rounded-xl">
          <ImSpoonKnife />
        </div>
        <p className="text-sm font-bold text-gray-50">Steal This Deal</p>
      </div>
    </div>
  );
};

export default OffersForYouCard;
