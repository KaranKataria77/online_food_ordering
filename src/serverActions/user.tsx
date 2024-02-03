"use server";
import { cookies } from "next/headers";

export const saveLoginAndLocation = async (
  location: string,
  username: string
) => {
  const cookiesStore = cookies();
  // const oneDay = 60 * 1000;
  const oneDay = 24 * 60 * 60 * 1000;
  const expires = new Date(Date.now() + oneDay);
  cookiesStore.set("location", location, { expires });
  cookiesStore.set("username", username, { expires });
  cookiesStore.set("is_login", "true", { expires });
};
export const isUserLogin = async () => {
  const cookiesStore = cookies();
  const isLogin = cookiesStore.get("is_login");
  console.log("&&&&&&&&&&&&& user login ", isLogin);
  if (
    isLogin &&
    typeof isLogin.value === "string" &&
    isLogin.value === "true"
  ) {
    return true;
  }
  return false;
};
