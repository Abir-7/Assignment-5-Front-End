import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logout } from "../redux/feature/userSlice/authSlice";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.authData);
  if (!token) {
    dispatch(logout());
    return <Navigate replace={true} to={"/login"}></Navigate>;
  }
  console.log(token);
  return children;
};

export default ProtectedRoute;
