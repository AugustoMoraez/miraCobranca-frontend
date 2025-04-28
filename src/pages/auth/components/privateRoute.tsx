import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RootState } from "../../../redux/store";
import { JSX } from "react";

type PrivateRouteProps = {
  children: JSX.Element;
};

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const {token,subscription_Status} = useSelector((state: RootState) => state.user);
  const location = useLocation();

  if (!token) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  if(subscription_Status !== "ACTIVE"){
    return <Navigate to="/subscription" state={{ from: location }} replace />;
  }
  

  return children;
};
