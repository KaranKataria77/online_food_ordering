import React from "react";
import RestaurantsNearbyCard from "../RestaurantNearbyCard";
import Link from "next/link";
import { rest } from "@/dummyData";

const RestaurantsNearby = () => {
  const images = [
    "/toppicks/samosa.png",
    "/toppicks/chinese.png",
    "/toppicks/fries.png",
    "/toppicks/pasta.png",
    "/toppicks/1.webp",
    "/toppicks/1.webp",
  ];
  return (
    <div className="mt-8 md:mt-0 md:flex md:flex-wrap">
      {rest?.map((item, index) => (
        <Link href={`/user/restaurant/${item?.index}`} key={index}>
          <RestaurantsNearbyCard name={item?.name} src={images[index]} />
        </Link>
      ))}
    </div>
  );
};

export default RestaurantsNearby;
