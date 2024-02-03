"use client";
import MyAccountDropDown from "@/components/MyAccountDropDown";
import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { getUser } from "@/services/user";
import Loader from "@/components/Loader";
import { IUserResponse } from "@/types";

const Account = () => {
  useEffect(() => {
    fetchData();
  }, []);
  const [accountInfo, setAccountInfo] = useState<IUserResponse>();
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const data = await getUser();
      setAccountInfo(data);
      setLoading(false);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return loading ? (
    <Loader />
  ) : (
    <div className="h-screen pt-16">
      <div className="bg-white h-full w-full p-5">
        {/* name and email */}
        <div className="flex justify-between pb-7 border-b border-b-black">
          <div>
            <p className="font-bold">{accountInfo?.name}</p>
            <span className="text-xs opacity-60">
              {accountInfo?.mobile_no} , <span>{accountInfo?.email}</span>
            </span>
          </div>
          <span className="text-orange-500 font-semibold">EDIT</span>
        </div>

        {/* my account */}
        <MyAccountDropDown
          title="My Account"
          subtitle="Address, Favourite & Setting"
        />
        <MyAccountDropDown
          title="Payments & Refunds"
          subtitle="Address, Favourite & Setting"
        />
        <MyAccountDropDown title="Refunds" subtitle="FAQs & Links" />

        {/* past orders */}
        <div>
          <p className="text-sm font-semibold py-5">PAST ORDERS</p>
          <div className="py-7 border-y border-y-slate-300">
            <div className="flex justify-between">
              <div>
                <p className="text-sm">Burger King</p>
                <p className="text-xs opacity-60 my-1">Thane West</p>
                <span className="flex text-xs opacity-60 items-center">
                  Rs 181 <FaChevronRight className="opacity-60 ml-1" />
                </span>
              </div>
              <p className="flex item-center text-xs opacity-70 items-center">
                Delivered <FaCheckCircle color="#45CE30" className="ml-1" />
              </p>
            </div>
            <button className="border border-orange-500 text-sm text-orange-500 px-14 py-2 mt-5">
              REORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
