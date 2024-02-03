import Image from "next/image";
import React from "react";
import { FaCircle } from "react-icons/fa";

const FoodItem = ({
  title,
  price,
  handleCart,
}: {
  title: string;
  price: string;
  handleCart: (item: string, price: string) => void;
}) => {
  return (
    <div className="flex justify-between py-10 border-b-2">
      <div>
        <div
          style={{ fontSize: 10, paddingTop: 1, paddingBottom: 1 }}
          className="flex justify-center w-4 border-2 border-green-600 text-green-600"
        >
          <FaCircle />
        </div>
        <p className="text-sm font-bold opacity-70 mt-2">{title}</p>
        <p className="text-sm font-bold opacity-60 mt-1">₹{price}</p>
      </div>
      <div>
        <div className="relative">
          <div className="relative w-32 h-28 drop-shadow-lg">
            <Image
              className="rounded-xl"
              fill={true}
              src="/toppicks/1.webp"
              alt="Top Pick"
            />
          </div>
          <div
            onClick={() => handleCart(title, price)}
            className="bg-white absolute px-1 py-1 -bottom-3 left-3 rounded-md drop-shadow-2xl cursor-pointer"
          >
            <p className="flex justify-center font-bold text-md text-green-600 px-8">
              ADD
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
