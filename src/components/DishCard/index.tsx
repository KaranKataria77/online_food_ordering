import Image from "next/image";
import React from "react";

const DishCard = () => {
  return (
    <div className="flex flex-col items-center w-1/4 mb-7">
      <div className="relative w-16 h-14 md:w-24 md:h-24">
        <Image fill={true} src="/burger.png" alt="" />
      </div>
      <span className="text-xs md:text-base opacity-70 mt-1">Chinese</span>
    </div>
  );
};

export default DishCard;
