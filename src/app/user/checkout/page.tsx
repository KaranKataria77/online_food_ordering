"use client";
import OrderFoodCard from "@/components/OrderFoodCard";
import React, {
  useEffect,
  useState,
  useOptimistic,
  startTransition,
} from "react";
import { createCart, deactivateCart, getCart } from "@/services/cart";
import { createOrder } from "@/services/order";
import Spinner from "@/components/Loader/Spinner";
import Link from "next/link";
import Loader from "@/components/Loader";
const Checkout = () => {
  function BillDetails({
    title,
    subtitle,
  }: {
    title: string;
    subtitle?: string;
  }) {
    return (
      <p className="flex justify-between text-sm py-2">
        {title} {subtitle ? <span className="opacity-70">{subtitle}</span> : ""}
      </p>
    );
  }

  const [cartItems, setCartItems] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [cartId, setCartId] = useState("");
  const [message, setMessage] = useState("MAKE PAYMENT");
  const [optimisticMessage, optimisticUpdate] = useOptimistic(
    message,
    (state, newMessage: string) => newMessage
  );

  useEffect(() => {
    getActiveCart();
  }, []);

  const getActiveCart = async () => {
    const data = await getCart();
    if (data && data.foodItems !== undefined) {
      setCartItems(data.foodItems as string[]);
      setTotalPrice(data.totalValue || 0);
      setCartId(data._id || "");
    }
    setIsLoading(false);
  };

  const placeOrder = async () => {
    startTransition(() => {
      setMessage("PLACING ORDER....");
    });
    const body = {
      cartId,
      isOrderDelivered: true,
      isOrderCancelled: false,
    };
    const data = await createOrder(body);

    startTransition(() => {
      setMessage("ORDER PLACED!");
    });

    console.log("order placed", data);
  };

  const handleCartItems = async (index: number) => {
    if (cartItems.length === 1) {
      const data = await deactivateCart(cartId);
      console.log("Cart deactivated ", data);
    }
    setCartItems((prev) => [
      ...prev.slice(0, index),
      ...prev.slice(index + 1, prev.length),
    ]);
  };

  return (
    <div className={`${isLoading ? "h-screen" : "h-full"} flex justify-center`}>
      <div
        className={`mt-12 md:mt-20 md:mb-10 w-full md:w-3/5 ${
          !isLoading && "h-full"
        } bg-white md:p-3 md:mr-10 md:flex md:flex-col md:justify-between`}
      >
        {isLoading ? (
          <Spinner />
        ) : cartItems.length <= 0 ? (
          <div className="w-full flex items-center justify-center">
            <Link
              className="mt-5 md:mt-0 w-11/12 md:w-full h-12 flex items-center justify-center bg-green-500 text-white font-semibold text-xl"
              href="/restaurant/asd"
            >
              PLEASE ADD ITEMS TO CART
            </Link>
          </div>
        ) : (
          <>
            <div className="w-full h-full px-3">
              {cartItems &&
                cartItems.length > 0 &&
                cartItems.map((item, index) => (
                  <OrderFoodCard
                    key={index}
                    index={index}
                    foodName={item}
                    handleCartItems={handleCartItems}
                  />
                ))}
            </div>
            <div className="px-3 mt-5">
              <p className="text-sm font-semibold mb-3 pb-3 border-b border-b-slate-300">
                Bill Details
              </p>
              <BillDetails title="Item Total" subtitle={`Rs ${totalPrice}`} />
              <BillDetails title="Delivery Fees | 11.3 kms" subtitle="Rs 138" />
              <BillDetails title="Platform fee" subtitle="Rs 3" />
              <BillDetails
                title="GST and Restaurant Charges"
                subtitle="Rs 13"
              />
            </div>
            <div className="flex h-12 w-full fixed md:relative bottom-0 mt-3 md:mt-5">
              <div className="w-1/2 flex items-center justify-center border border-slate-300 bg-white">
                <p className="text-sm">Rs {totalPrice + 138 + 3 + 13}</p>
              </div>
              <button
                onClick={placeOrder}
                disabled={message === "ORDER PLACED!" ? true : false}
                className={`w-1/2 flex items-center justify-center font-semibold ${
                  message === "ORDER PLACED!" ? "bg-green-300" : "bg-green-500"
                } text-white`}
              >
                {message}
              </button>
            </div>
          </>
        )}
      </div>
      <div className=" hidden md:block mt-20 md:w-1/4 mb-10 bg-white p-3">
        <p className="font-semibold text-lg">Delivery Address</p>

        <div className="border border-slate-300 p-3 mt-4">
          <p className="font-semibold">Dombivali</p>
          <p className="opacity-70 text-sm py-2">
            103, B.R.Nagar, Prashant Nagar, Sidhivinyak Nagar, Diva, Thane,
            Maharashtra 400612, India
          </p>
          <p className="text-sm font-medium">65 mins</p>
        </div>

        <button className="h-10 w-full flex justify-center items-center bg-green-500 text-white mt-4 font-semibold">
          CHANGE ADDRESS
        </button>
      </div>
    </div>
  );
};

export default Checkout;
