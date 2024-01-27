import React from "react";
import RestaurantsNearbyCard from "../RestaurantNearbyCard";

const RestaurantsNearby = () => {
  return (
    <div className="mt-8 md:mt-0 md:flex md:flex-wrap">
      <RestaurantsNearbyCard src="/toppicks/1.webp" />
      <RestaurantsNearbyCard src="/toppicks/1.webp" />
      <RestaurantsNearbyCard src="/toppicks/1.webp" />
      <RestaurantsNearbyCard src="/toppicks/1.webp" />
      <RestaurantsNearbyCard src="/toppicks/1.webp" />
      <RestaurantsNearbyCard src="/toppicks/1.webp" />
    </div>
  );
};

export default RestaurantsNearby;
