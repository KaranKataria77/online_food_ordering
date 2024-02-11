"use client";
import Loader from "@/components/Loader";
import LoginForm from "@/components/LoginForm";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { createUser, logInUser } from "@/services/user";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { saveLoginAndLocation } from "@/serverActions/user";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [activeState, setActiveStage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState([]);
  const [isSignUp, setIsSignUp] = useState(false);
  const [response, setResponse] = useState({
    name: "",
    email: "",
    mobile_no: "",
  });
  const router = useRouter();
  const { value, setItem } = useLocalStorage();

  const invokeToast = (msg: string) => {
    toast.error(msg, {
      position: "top-center",
      autoClose: 3000,
      closeOnClick: true,
      draggable: true,
      theme: "light",
    });
  };

  const handleSubmit = async () => {
    if (isSignUp) {
      if (!response.name || !response.email || !response.mobile_no) {
        invokeToast("Please fill all the fields");
        return;
      }
      setIsLoading(true);
      const body = {
        location,
        ...response,
      };
      try {
        const data = await createUser(body);
        await saveLoginAndLocation("[0, 0]", body?.name);
        router.push("/user/home");
      } catch (err) {
        invokeToast("Email or Mobile number already exists");
        console.error(err);
      }
      setIsLoading(false);
    } else {
      if (!response.email || !response.mobile_no) {
        invokeToast("Please fill all the fields");
        return;
      }
      setIsLoading(true);
      const body = {
        email: response.email,
        mobile_no: response.mobile_no,
      };
      try {
        const data = await logInUser(body);
        await saveLoginAndLocation("[0, 0]", data?.user?.name);
        router.push("/user/home");
      } catch (err) {
        invokeToast("Email OR password is incorrect");
        console.error(err);
      }
      setIsLoading(false);
    }
  };

  const handleStateChange = () => {
    setActiveStage(activeState + 1);
  };

  const isSignUpState = () => {
    setIsSignUp(!isSignUp);
  };
  return (
    <>
      {isLoading && <Loader />}
      <div className="flex w-full">
        <div className="w-full md:w-3/5 p-10">
          {activeState === 1 && (
            <div className="flex justify-between h-50">
              <h1 className="p-1 text-2xl font-bold">Swiggy</h1>
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
              response={JSON.parse(JSON.stringify(response))}
              setResponse={setResponse}
              handleSubmit={handleSubmit}
              isSignUp={isSignUp}
              isSignUpState={isSignUpState}
            />
          )}
        </div>
        <div className="w-0 md:w-2/5 md:h-96 relative">
          <Image src="/user_cover.png" fill={true} alt="User Image" />
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
