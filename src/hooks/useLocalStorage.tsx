import React, { useEffect, useState } from "react";

export const useLocalStorage = () => {
  const [value, setValue] = useState<string | null>("");

  useEffect(() => {
    const val = localStorage.getItem("is_login");
    setValue(val);
  }, []);

  const setItem = (val: string) => {
    localStorage.setItem("is_login", val);
    setValue(val);
  };

  const removeItem = () => {
    setValue(null);
  };

  return { value, setItem, removeItem };
};
