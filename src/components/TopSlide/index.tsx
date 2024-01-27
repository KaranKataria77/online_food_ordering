import Image from "next/image";
import React from "react";

const TopSlide = ({ src }: { src: string }) => {
  return (
    <div className="w-1/2 h-40 relative">
      <Image src={src} fill={true} alt="" />
    </div>
  );
};

export default TopSlide;
