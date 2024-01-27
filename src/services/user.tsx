import { USER_SIGN_URL } from "@/config/URLEndpoints";
import axios from "axios";

type IUserBody = {
  name: string;
  email: string;
  mobile_no: string;
};

export const createUser = async (body: IUserBody) => {
  const result = await axios.post(USER_SIGN_URL, body);
  return result.data;
};
