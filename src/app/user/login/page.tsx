"use client";

import Loader from "@/components/Loader";
import LoginForm from "@/components/LoginForm";
import { createUser } from "@/services/user";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaLocationCrosshairs } from "react-icons/fa6";

const Login = () => {
  const [activeState, setActiveStage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState([]);
  const [response, setResponse] = useState({
    name: "",
    email: "",
    mobile_no: "",
  });

  const handleSubmit = async () => {
    setIsLoading(true);
    const body = {
      location,
      ...response,
    };
    const data = await createUser(body);
    setIsLoading(false);
    console.log("############ ", data);
  };

  const handleStateChange = () => {
    setActiveStage(activeState + 1);
  };
  console.log("check enc ", process.env.NEXT_PUBLIC_MAP_API_KEY);
  return (
    <>
      {isLoading && <Loader />}
      <div className="flex w-full">
        <div className="w-full md:w-3/5 p-10">
          {activeState === 1 && (
            <div className="flex justify-between h-50">
              <h1 className="p-1 text-2xl font-bold">Swiggy</h1>
              <div className="flex">
                <button className="p-2 px-7 font-medium">Login</button>
                <button className="p-2 px-7 bg-black text-white font-bold">
                  Sign Up
                </button>
              </div>
            </div>
          )}
          {activeState === 1 && (
            <div>
              <div className="mt-14 md:mt-10">
                <h1 className="text-4xl font-bold">Game Night?</h1>
                <h3 className="text-xl mt-4">
                  Order food from favourite restaurants near you.
                </h3>
              </div>
              <div className="mt-14 md:mt-8 md:flex w-full">
                <div className="flex md:w-3/5 justify-between border border-solid border-orange-500 focus:outline-none">
                  <input
                    type="text"
                    placeholder="Enter your delivery location"
                    className="focus:outline-none p-4"
                  />
                  <div className="text-2xl flex items-center justify-center mr-2 opacity-50">
                    <FaLocationCrosshairs />
                  </div>
                </div>
                <button
                  onClick={handleStateChange}
                  className="w-full md:w-auto p-3 px-6 bg-orange-500 text-white font-bold"
                >
                  FIND FOOD
                </button>
              </div>
              <div className="mt-14 md:mt-8">
                <h3 className="text-sm opacity-60">POPULAR CITIES IN INDIA</h3>
                <p className="text-sm mt-3">
                  Ahmedabad, Bangalore, Chennai, Delhi, Gurgaon, Hyderabad,
                  Kolkata, Mumbai, Pune & more
                </p>
              </div>
            </div>
          )}
          {activeState === 2 && (
            <LoginForm
              response={response}
              setResponse={setResponse}
              handleSubmit={handleSubmit}
            />
          )}
        </div>
        <div className="w-0 md:w-2/5 md:h-96 relative">
          <Image src="/user_cover.png" fill={true} alt="User Image" />
        </div>
      </div>
    </>
  );
};

export default Login;
