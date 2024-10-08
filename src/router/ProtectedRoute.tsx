import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logout } from "../redux/feature/userSlice/authSlice";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({
  children,
  role,
}: {
  children: ReactNode;
  role: string;
}) => {
  const dispatch = useAppDispatch();
  const { token, user } = useAppSelector((state) => state.authData);
  if (!token) {
    dispatch(logout());
    return <Navigate replace={true} to={"/login"}></Navigate>;
  }
  if (role !== user?.role) {
    dispatch(logout());
    return <Navigate replace={true} to={"/login"}></Navigate>;
  }

  return children;
};

export default ProtectedRoute;
