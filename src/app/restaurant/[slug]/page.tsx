"use client";
import React, { useEffect, useState } from "react";
import { IoMdArrowBack, IoMdWarning } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaStar, FaCartPlus } from "react-icons/fa6";
import { BiCycling } from "react-icons/bi";
import { BsClockFill } from "react-icons/bs";
import FoodRecommendation from "@/components/FoodRecommendation";
import { createCart, getCart } from "@/services/cart";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import useUserLogin from "@/hooks/useUserLogin";

const RestaurantDetail = () => {
  const [cartItems, setCartItems] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { isLogin }: { isLogin: boolean } = useUserLogin();

  useEffect(() => {
    getActiveCart();
  }, []);

  const handleCart = (item: string, price: string) => {
    if (isLogin) {
      setCartItems([...cartItems, item]);
      setTotalPrice(Number(price) + totalPrice);
    } else {
      toaster.warn(
        {
          title: "LOGIN",
          text: "Please Login first!",
        },
        {
          autoClose: false,
          position: "top-center",
          icon: false,
        }
      );
    }
  };

  const getActiveCart = async () => {
    const data = await getCart();
    if (data && data.foodItems !== undefined) {
      setCartItems(data.foodItems as string[]);
      setTotalPrice(data.totalValue || 0);
    }
    setIsLoading(false);
  };

  const AddItemsToCart = async () => {
    if (cartItems.length > 0) {
      setIsLoading(true);
      const body = {
        foodItems: cartItems,
        totalValue: totalPrice.toString(),
        isCartActive: true,
      };
      const data = await createCart(body);
      if (data && data !== undefined) {
        setIsLoading(false);
        router.push("/user/checkout");
      }
      console.log("$$$$$$$$$$$$$$$$$$$ data ", data);
    }
  };

  const Msg = ({ title, text }: { title: string; text: string }) => {
    return (
      <div className="w-full flex flex-col items-center justify-center">
        <Link
          href="/login"
          className="h-10 p-2 flex items-center justify-center bg-orange-500 text-white font-semibold rounded mb-2"
        >
          {title}
        </Link>
        <p className="font-semibold">{text}</p>
      </div>
    );
  };

  const toaster = (myProps?: any, toastProps?: any) =>
    toast(<Msg {...myProps} />, { ...toastProps });

  toaster.warn = (myProps?: any, toastProps?: any) =>
    toast.warn(<Msg {...myProps} />, { ...toastProps });

  return isLoading ? (
    <Loader />
  ) : (
    <div className="md:flex md:justify-center">
      <div className="md:w-3/5">
        {/* header */}
        <div className="">
          <div className="flex justify-between p-5">
            <div className="text-2xl">
              <IoMdArrowBack />
            </div>
            <div className="text-2xl">
              <CiSearch />
            </div>
          </div>
        </div>

        {/* title */}
        <div className="px-5 flex justify-between mt-3">
          <div>
            <h1 className="font-bold text-lg">Zaika Fine Dine</h1>
            <div className="mt-2">
              <p className="text-xs opacity-70">Indian, Chinese</p>
              <p className="text-xs opacity-70 mt-1">Dombivli East, 0.8 km</p>
            </div>
          </div>
          <div className="border-2 flex flex-col items-center rounded-lg">
            <div className="flex items-center px-2 pt-1 pb-2 border-b-2 text-green-600">
              <FaStar /> <span className="text-sm font-bold pl-1">4.2</span>
            </div>
            <p
              style={{ fontSize: 10 }}
              className="px-2 py-2 font-semibold opacity-70"
            >
              10K+ rating
            </p>
          </div>
        </div>
        <div className="px-5">
          <div className="flex border-b-2 py-6">
            <BiCycling className="text-lg mr-2" />
            <span className="text-sm opacity-60">
              0.8 kms | 44 Delivery fee will apply
            </span>
          </div>
        </div>

        {/* time for delivery */}
        <div className="flex px-5 mt-6 w-3/4 justify-between">
          <div className="flex items-center w-2/5">
            <BsClockFill />
            <span className="text-sm font-extrabold ml-3">28 MINS</span>
          </div>
          <div className="flex items-center">
            <span
              style={{ paddingLeft: 5, paddingRight: 5 }}
              className="text-sm font-bold border-2 border-gray-950 rounded-full mr-3"
            >
              ₹
            </span>
            <span className="text-sm font-extrabold">₹280 for two</span>
          </div>
        </div>

        {/* veg/non-veg options */}

        {/* lists of dishes */}
        <div className="px-5 my-7">
          <FoodRecommendation handleCart={handleCart} />
        </div>
        <div className="bg-gray-200 h-5"></div>
        <div className="px-5 my-7">
          <FoodRecommendation handleCart={handleCart} />
        </div>
        <div className="bg-gray-200 h-5"></div>
        {/* item cart detail */}
        {cartItems.length > 0 && (
          <div className="sticky w-full bottom-1 z-10 flex justify-center">
            <div className="bg-green-500 h-14 flex items-center justify-between text-white py-2 px-4 w-11/12">
              <p className="font-semibold">
                {cartItems.length} ITEMS | Rs {totalPrice}
              </p>
              <div
                onClick={AddItemsToCart}
                className="text-lg font-bold flex items-center cursor-pointer"
              >
                <FaCartPlus className="mr-1" /> VIEW CART
              </div>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default RestaurantDetail;
