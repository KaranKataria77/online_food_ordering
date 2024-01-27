"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RestaurantSlide from "./RestaurantSlide";

const RestaurantSlider = () => {
  const [load, setLoad] = useState(true);
  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "30px",
  });

  useEffect(() => {
    if (window.screen.width > 789) {
      setSettings((prevSettings) => ({
        ...prevSettings,
        slidesToShow: 3,
        centerMode: false,
      }));
      settings.centerMode = false;
      settings.slidesToShow = 3;
    }
    const successCallback = (position: any) => {
      console.log(position);
    };

    const errorCallback = (error: any) => {
      console.log(error);
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    // console.log()
    setLoad(false);
  }, []);
  return (
    !load && (
      <div className="mt-4">
        <Slider {...settings}>
          <RestaurantSlide />
          <RestaurantSlide />
          <RestaurantSlide />
          <RestaurantSlide />
          <RestaurantSlide />
          <RestaurantSlide />
        </Slider>
      </div>
    )
  );
};

export default RestaurantSlider;
