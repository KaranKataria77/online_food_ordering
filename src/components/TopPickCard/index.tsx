import Image from "next/image";
import React from "react";

const TopPickCard = ({ src }: { src: string }) => {
  return (
    <div className="mr-3">
      <div className="relative">
        <div className="relative w-20 h-20 md:w-40 md:h-40 drop-shadow-lg">
          <Image
            className="rounded-xl md:rounded-2xl"
            fill={true}
            src={src}
            alt="Top Pick"
          />
        </div>
        <div className="bg-white absolute px-1 py-1 -bottom-1 left-2.5 md:left-11 md:-bottom-2 rounded-lg">
          <p className="flex justify-center font-bold text-xs md:text-base text-orange-500">
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
      <div className="mt-3">
        <h3 className="text-sm font-normal">Burger King</h3>
        <p className="text-sm opacity-60">20 mins</p>
      </div>
    </div>
  );
};

export default TopPickCard;
