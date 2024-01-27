import React from "react";
import { IoFastFoodSharp } from "react-icons/io5";
import { GiBowlOfRice } from "react-icons/gi";
import { BsBasket3Fill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import HomeFooterCard from "./HomeFooterCard";

const HomeFooter = () => {
  let commonStyle = "font-extrabold pt-2";
  return (
    <div>
      <div className="flex px-5 py-3 justify-between fixed bottom-0 w-full z-20 bg-white md:hidden">
        <HomeFooterCard Icon={<IoFastFoodSharp />} name="SWIGGY" />
        <HomeFooterCard Icon={<GiBowlOfRice />} name="FOOD" />
        <HomeFooterCard Icon={<BsBasket3Fill />} name="INSTAMART" />
        <HomeFooterCard Icon={<CiSearch />} name="SEARCH" />
        <HomeFooterCard Icon={<VscAccount />} name="ACCOUNT" />
      </div>
    </div>
  );
};

export default HomeFooter;
