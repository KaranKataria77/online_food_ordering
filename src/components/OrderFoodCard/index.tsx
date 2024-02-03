import React from "react";
import { FaCircle } from "react-icons/fa";

const OrderFoodCard = ({
  foodName,
  index,
  handleCartItems,
}: {
  foodName: string;
  index: number;
  handleCartItems: (index: number) => void;
}) => {
  return (
    <div className="flex justify-between w-full mt-10">
      <div>
        <p className="text-sm flex mb-1">
          <span
            style={{ fontSize: 10, padding: 0.5 }}
            className="flex justify-center items-center w-4 border-2 mr-1 border-green-600 text-green-600"
          >
            <FaCircle />
          </span>
          {foodName}
        </p>
        <p className="text-xs opacity-60">Hot & Crispy Chicken-1pc</p>
      </div>
      <div className="flex items-center">
        <div
          style={{ padding: 1 }}
          className="border w-20 flex justify-around items-center mr-4 text-green-500"
        >
          <button
            onClick={() => handleCartItems(index)}
            className="border-t-2 border-t-green-500 w-2"
          >
            {""}
          </button>{" "}
          1 <button className="text-xl">+</button>
        </div>
        <p className="text-xs">Rs 439</p>
      </div>
    </div>
  );
};

export default OrderFoodCard;
