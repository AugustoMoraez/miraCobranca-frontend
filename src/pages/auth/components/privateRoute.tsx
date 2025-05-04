import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../../../redux/store";
import { JSX } from "react";

type PrivateRouteProps = {
  children: JSX.Element;
};
export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { token, subscription_Status } = useSelector((state: RootState) => state.user);

  if (!token) {
    console.log("sem token");
    return <Navigate to="/" replace />;
  }
  
  if (subscription_Status !== "ACTIVE") {
    console.log("sem sub");
    return <Navigate to="/subscription" replace />;
  }

  return children;
};
