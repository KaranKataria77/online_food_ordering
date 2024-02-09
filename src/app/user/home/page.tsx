import HomeHeader from "@/components/HomeHeader";
import Loading from "@/components/Loading";
import OffersForYou from "@/components/OffersForYou";
import RestaurantsNearby from "@/components/RestaurantsNearby";
import TopPickCard from "@/components/TopPickCard";
import TopSlide from "@/components/TopSlide";
import Image from "next/image";
import React from "react";
import { cookies } from "next/headers";
import { SERVER_BASE_URL, USER_URL } from "@/config/URLEndpoints";
import Link from "next/link";
import { rest } from "../../../dummyData";

const Home = async () => {
  const images = [
    "/toppicks/samosa.png",
    "/toppicks/chinese.png",
    "/toppicks/fries.png",
    "/toppicks/pasta.png",
    "/toppicks/1.webp",
    "/toppicks/1.webp",
  ];
  const cookiesStore = cookies();
  const name = cookiesStore.get("user_token");
  console.log("$$$$$$$$$$$$$$ ", name);
  try {
    fetch(`${SERVER_BASE_URL}${USER_URL}`, {
      method: "GET",
      headers: {
        Cookie: `user_token=${name?.value}`,
      },
    })
      .then((res) => res.json())
      .then((resp) => console.log(resp))
      .catch((err) => console.error(err));
    // const jsonData = await data.json();
    // console.log("&&&&&& ", jsonData);
  } catch (err) {
    console.log("@@@@@@@@@@@ ", err);
  }
  return (
    <div>
      <div className="px-3 py-4 md:px-48">
        {/* <Loading /> */}
        {/* <div className="flex justify-between md:hidden">
          <TopSlide src="/slider1/1.webp" />
          <TopSlide src="/slider1/2.webp" />
        </div> */}

        {/* tops picks */}
        <div className="mt-14 md:mt-16">
          <div className="flex">
            <div className="w-6 h-6 relative">
              <Image fill={true} src="/thumbsup.webp" alt="" />
            </div>
            <p className="font-bold text-xl ml-2 opacity-90">
              Top Picks For You
            </p>
          </div>
          <div className="flex mt-5 overflow-auto" id="cont">
            {rest?.map((item, index) => (
              <Link href={`/restaurant/${item.index}`} key={index}>
                <TopPickCard name={item?.name} src={images[index]} />
              </Link>
            ))}
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
