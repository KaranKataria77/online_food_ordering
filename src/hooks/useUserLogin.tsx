"use client";
import { isUserLogin } from "@/serverActions/user";
import React, { useEffect, useState } from "react";

const useUserLogin = () => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    (async function () {
      const res = await isUserLogin();
      setIsLogin(res);
    })();
  }, []);
  return { isLogin };
};

export default useUserLogin;
