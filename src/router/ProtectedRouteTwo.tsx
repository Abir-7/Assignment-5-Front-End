import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logout } from "../redux/feature/userSlice/authSlice";
import { Navigate } from "react-router-dom";

const ProtectedRouteTwo = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.authData);
  if (!token) {
    dispatch(logout());
    return <Navigate replace={true} to={"/login"}></Navigate>;
  }

  return children;
};

export default ProtectedRouteTwo;
