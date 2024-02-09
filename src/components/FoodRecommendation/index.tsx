"use client";
import React, { useState } from "react";
import FoodItem from "../FoodItem";
import { FaAngleDown } from "react-icons/fa6";
import Spinner from "../Loader/Spinner";

const FoodRecommendation = ({
  handleCart,
  foodItems,
}: {
  handleCart: (item: string, price: number) => void;
  foodItems: { name: string; price: number }[];
}) => {
  const [show, setShow] = useState(true);
  return (
    <>
      {foodItems.length <= 0 ? (
        <Spinner />
      ) : (
        <>
          <div className="flex justify-between" onClick={() => setShow(!show)}>
            <h2>Recommended (20)</h2>
            <FaAngleDown />
          </div>
          <div className={show ? "" : "hidden"}>
            {foodItems?.map((item, index) => (
              <FoodItem
                key={index}
                title={item?.name}
                price={item?.price}
                handleCart={handleCart}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default FoodRecommendation;
