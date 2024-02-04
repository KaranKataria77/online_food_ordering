"use client";
import React, { useState } from "react";
import FoodItem from "../FoodItem";
import { FaAngleDown } from "react-icons/fa6";

const FoodRecommendation = ({
  handleCart,
}: {
  handleCart: (item: string, price: number) => void;
}) => {
  const [show, setShow] = useState(true);
  return (
    <>
      <div className="flex justify-between" onClick={() => setShow(!show)}>
        <h2>Recommended (20)</h2>
        <FaAngleDown />
      </div>
      <div className={show ? "" : "hidden"}>
        <FoodItem title="French Fries" price={145} handleCart={handleCart} />
        <FoodItem title="Vada Pav" price={15} handleCart={handleCart} />
        <FoodItem title="Medu Wada" price={45} handleCart={handleCart} />
        <FoodItem title="Dal Wada" price={45} handleCart={handleCart} />
        <FoodItem title="Idli" price={35} handleCart={handleCart} />
      </div>
    </>
  );
};

export default FoodRecommendation;
