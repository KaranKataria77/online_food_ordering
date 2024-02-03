import { CLIENT_BASE_URL, USER_URL } from "@/config/URLEndpoints";
import axios from "axios";

type IUserBody = {
  name: string;
  email: string;
  mobile_no: string;
};

export const createUser = async (body: IUserBody) => {
  const result = await axios.post(`${CLIENT_BASE_URL}${USER_URL}`, body, {
    withCredentials: true,
  });
  return result.data;
};
export const getUser = async () => {
  const result = await axios.get(`${CLIENT_BASE_URL}${USER_URL}`, {
    withCredentials: true,
  });
  return result.data;
};
// export const getUser = async () => {
//   const result = await axios.post(USER_SIGN_URL, body);
//   return result.data;
// };
// const saveTokenInSessionStorage = (token: string) => {
//   sessionStorage.setItem("access_token", token);
// };
// const getTokenFromSessionStorage = (): string => {
//   const token = sessionStorage.getItem("access_token");
//   return token ?? "";
// };
