import Loading from "@/components/Loading";
import OffersForYou from "@/components/OffersForYou";
import RestaurantsNearby from "@/components/RestaurantsNearby";
import TopPickCard from "@/components/TopPickCard";
import TopSlide from "@/components/TopSlide";
import Image from "next/image";
import React from "react";
import { BiSolidOffer } from "react-icons/bi";

const Home = () => {
  return (
    <div>
      {/* top header */}
      <div className="border-b-2 fixed z-20 w-full bg-white">
        <div className="px-5 py-3 flex justify-between">
          <div>
            <div className="flex items-center">
              <svg
                width="14"
                height="20"
                viewBox="0 0 14 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.89429 18.3846H12.0643"
                  stroke="#282C3F"
                  stroke-opacity="0.9"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M6.98989 1C3.9613 1 1.5 3.45532 1.5 6.47656C1.5 10.584 6.98989 15.2057 6.98989 15.2057C6.98989 15.2057 12.4798 10.584 12.4798 6.47656C12.4798 3.45532 10.0185 1 6.98989 1Z"
                  stroke="#282C3F"
                  stroke-opacity="0.9"
                  stroke-width="1.7"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M6.98955 3.73492C8.36202 3.73492 9.48495 4.82084 9.48495 6.14807C9.48495 7.4753 8.3745 8.56121 6.98955 8.56121C5.61707 8.56121 4.49414 7.4753 4.49414 6.14807C4.49414 4.82084 5.61707 3.73492 6.98955 3.73492Z"
                  fill="#E46D47"
                ></path>
              </svg>
              <p className="ml-2 font-bold">Other</p>
            </div>
            <p className="text-xs opacity-80">
              Omakar Nagar, Ganesh Nagar, Sargali Ga....
            </p>
          </div>
          <div className="flex items-center">
            <div className="text-xl">
              <BiSolidOffer />
            </div>
            <p className="ml-1 font-medium">Offers</p>
          </div>
        </div>
      </div>

      <div className="px-3 py-4 md:px-48">
        {/* <Loading /> */}
        <div className="flex justify-between md:hidden">
          <TopSlide src="/slider1/1.webp" />
          <TopSlide src="/slider1/2.webp" />
        </div>

        {/* tops picks */}
        <div className="mt-8 md:mt-16">
          <div className="flex">
            <div className="w-6 h-6 relative">
              <Image fill={true} src="/thumbsup.webp" alt="" />
            </div>
            <p className="font-bold text-xl ml-2 opacity-90">
              Top Picks For You
            </p>
          </div>
          <div className="flex mt-5 overflow-auto" id="cont">
            <TopPickCard src="/toppicks/1.webp" />
            <TopPickCard src="/toppicks/1.webp" />
            <TopPickCard src="/toppicks/1.webp" />
            <TopPickCard src="/toppicks/1.webp" />
            <TopPickCard src="/toppicks/1.webp" />
            <TopPickCard src="/toppicks/1.webp" />
            <TopPickCard src="/toppicks/1.webp" />
          </div>
        </div>

        {/* Offers for you */}
        <div className="mt-8">
          <h1 className="text-xl font-bold opacity-90">Offers For You</h1>
          <div className="mt-4">
            <OffersForYou />
          </div>
        </div>

        {/* Restaurants nearby */}
        <div className="mt-8 mb-14">
          <div className="flex">
            <div className="w-6 h-6 relative">
              <Image fill={true} src="/fork.webp" alt="" />
            </div>
            <p className="font-bold text-xl ml-2 opacity-90">
              All Restaurants Nearby
            </p>
          </div>
          <RestaurantsNearby />
        </div>
      </div>
    </div>
  );
};

export default Home;
