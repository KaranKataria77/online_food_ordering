"use client";
import React, { useState } from "react";
import FoodItem from "../FoodItem";
import { FaAngleDown } from "react-icons/fa6";

const FoodRecommendation = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <div className="flex justify-between" onClick={() => setShow(!show)}>
        <h2>Recommended (20)</h2>
        <FaAngleDown />
      </div>
      <div className={show ? "" : "hidden"}>
        <FoodItem />
        <FoodItem />
        <FoodItem />
        <FoodItem />
        <FoodItem />
      </div>
    </>
  );
};

export default FoodRecommendation;
