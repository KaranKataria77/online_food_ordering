"use client";
import Loader from "@/components/Loader";
import LoginForm from "@/components/LoginForm";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { createUser, logInUser } from "@/services/user";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { saveLoginAndLocation } from "@/serverActions/user";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FindLocation from "@/components/FindLocation";

const Login = () => {
  const [activeState, setActiveStage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState<number[]>([]);
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

  const handleStateChange = (coords?: number[]) => {
    setActiveStage(activeState + 1);
    if (coords) {
      setLocation(coords);
    }
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
            <FindLocation handleStateChange={handleStateChange} />
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
