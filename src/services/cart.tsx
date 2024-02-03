import {
  CLIENT_BASE_URL,
  CART_URL,
  DEACTIVATE_CART_URL,
} from "@/config/URLEndpoints";
import axios from "axios";

type ICartBody = {
  foodItems: string[];
  totalValue: string;
  isCartActive: boolean;
};

export const createCart = async (body: ICartBody) => {
  const result = await axios.post(`${CLIENT_BASE_URL}${CART_URL}`, body, {
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
export const deactivateCart = async (id: string) => {
  const result = await axios.get(`${CLIENT_BASE_URL}${DEACTIVATE_CART_URL}`, {
    withCredentials: true,
  });
  return result.data;
};
