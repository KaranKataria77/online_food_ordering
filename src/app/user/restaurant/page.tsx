import DishCard from "@/components/DishCard";
import RestaurantCard from "@/components/RestaurantCard";
import RestaurantSlider from "@/components/RestaurantSlider";
import React from "react";

const Restaurants = () => {
  return (
    <>
      <div className="overflow-x-hidden md:px-48">
        {/* restaurant slider */}
        <RestaurantSlider />

        {/* whats on mind */}
        <div className="mt-12 px-5 md:px-0">
          <h1 className="text-xl font-extrabold mb-4">What's on your mind?</h1>
          <div className="flex overflow-y-hidden" id="cont">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((d, i) => (
              <div className="ml-8" key={i}>
                <DishCard />
                <div className="md:hidden">
                  <DishCard />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* top restaurants */}
        <div className="mt-12 px-5 md:px-0">
          <h1 className="text-xl font-extrabold mb-4">
            Top restaurants chains in Mumbai
          </h1>
          <div className="flex md:flex md:flex-wrap">
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            {/* <RestaurantCard /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Restaurants;
