import { Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

export const PrivateRoute = ({ children }) => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Navigate to="/auth" />;
  }

  return children;
};
