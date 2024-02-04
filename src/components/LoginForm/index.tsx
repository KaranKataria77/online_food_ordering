"use client";

import React from "react";

type IInputForm = {
  name: string;
  email: string;
  mobile_no: string;
};

const LoginForm = ({
  response,
  setResponse,
  handleSubmit,
  isSignUp,
  isSignUpState,
}: {
  response: IInputForm;
  setResponse: any;
  handleSubmit?: any;
  isSignUp: boolean;
  isSignUpState: () => void;
}) => {
  return (
    <div className="flex flex-col items-center mt-16 md:mt-0">
      <div className="flex mb-5">
        <button
          onClick={isSignUpState}
          className={`p-2 px-7 font-bold ${
            !isSignUp ? "bg-orange-500 text-white" : "text-orange-500"
          }`}
        >
          Login
        </button>
        <button
          onClick={isSignUpState}
          className={`p-2 px-7 font-bold ${
            isSignUp ? "bg-orange-500 text-white" : "text-orange-500"
          }`}
        >
          Sign Up
        </button>
      </div>
      {isSignUp && (
        <div className="flex w-full md:w-3/5 justify-between border border-solid border-orange-500 focus:outline-none mb-5">
          <input
            className="focus:outline-none p-4 md:w-full"
            type="text"
            placeholder="Name"
            value={response.name}
            onChange={(event: any) => {
              setResponse((prev: any) => ({
                ...prev,
                name: event.target.value,
              }));
            }}
          />
        </div>
      )}
      <div className="flex w-full md:w-3/5 justify-between border border-solid border-orange-500 focus:outline-none mb-5">
        <input
          className="focus:outline-none p-4 md:w-full"
          type="text"
          placeholder="Mobile No"
          value={response.mobile_no}
          onChange={(event: any) => {
            setResponse((prev: any) => ({
              ...prev,
              mobile_no: event.target.value,
            }));
          }}
        />
      </div>
      <div className="flex w-full md:w-3/5 justify-between border border-solid border-orange-500 focus:outline-none mb-5">
        <input
          className="focus:outline-none p-4 md:w-full"
          type="text"
          placeholder="Email"
          value={response.email}
          onChange={(event: any) => {
            setResponse((prev: any) => ({
              ...prev,
              email: event.target.value,
            }));
          }}
        />
      </div>
      <button
        onClick={() => handleSubmit()}
        className="flex w-full md:w-3/5 justify-center border border-solid border-orange-500 focus:outline-none mb-5 p-4 bg-orange-500 text-white font-bold"
      >
        SIGN UP
      </button>
    </div>
  );
};

export default LoginForm;
