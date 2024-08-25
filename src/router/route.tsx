import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/mainpage/MainLayout";
import Homepage from "../pages/HomePage/Homepage";
import DashboardLayout from "../layout/dashboard/DashboardLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard/Uuser",
        element: <Homepage></Homepage>,
      },
    ],
  },
]);
