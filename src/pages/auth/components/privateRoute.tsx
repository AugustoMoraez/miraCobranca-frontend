import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../../../redux/store";
import { JSX } from "react";

type PrivateRouteProps = {
  children: JSX.Element;
};
export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { email, subscription_Status,AccountVerification } = useSelector((state: RootState) => state.user);

  if (!email) {
    console.log("sem email");
    return <Navigate to="/" replace />;
  }
  if (!AccountVerification) {
    console.log("conta nao ativa");
    return <Navigate to="/request-verify-account" replace />;
  }
  
  
  if (subscription_Status !== "ACTIVE") {
    console.log("sem sub");
    return <Navigate to="/subscription" replace />;
  }

  return children;
};
