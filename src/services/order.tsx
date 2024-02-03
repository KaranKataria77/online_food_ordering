import { CLIENT_BASE_URL, CART_URL, ORDER_URL } from "@/config/URLEndpoints";
import axios from "axios";

type IOrderBody = {
  cartId: string;
  isOrderDelivered: boolean;
  isOrderCancelled: boolean;
};

export const createOrder = async (body: IOrderBody) => {
  const result = await axios.post(`${CLIENT_BASE_URL}${ORDER_URL}`, body, {
    withCredentials: true,
  });
  return result.data;
};
export const getCart = async () => {
  const result = await axios.get(`${CLIENT_BASE_URL}${CART_URL}`, {
    withCredentials: true,
  });
  return result.data;
};
