import React from "react";
import { useSelector } from "react-redux";

export const useAuth = () => {
  const { id, email, token } = useSelector((store) => store.user);
  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
};
