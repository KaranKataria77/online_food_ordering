"use client";
import FindLocation from "@/components/FindLocation";
import MyApp from "@/components/MapContainer";
import { saveLoginAndLocation } from "@/serverActions/user";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Location = () => {
  const router = useRouter();
  const handleStateChange = (location?: number[]) => {
    saveLoginAndLocation(JSON.stringify(location));
    router.push("/user/home");
  };
  return (
    <div className="flex w-full pt-8">
      <div className="w-full md:w-3/5 p-14">
        <div className="flex justify-between h-50">
          <h1 className="p-1 text-2xl font-bold">Swiggy</h1>
        </div>
        <FindLocation handleStateChange={handleStateChange} />
      </div>
      <div className="w-0 md:w-2/5 md:h-96 relative">
        <Image src="/user_cover.png" fill={true} alt="User Image" />
      </div>
    </div>
  );
};

export default Location;
