import React from "react";
import Spinner from "./Spinner";

const Loader = () => {
  return (
    <div className="absolute bg-black opacity-70 h-full w-full z-30 flex justify-center items-center">
      <Spinner />
    </div>
  );
};

export default Loader;
