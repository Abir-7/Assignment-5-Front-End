import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/mainpage/MainLayout";
import Homepage from "../pages/HomePage/Homepage";
import DashboardLayout from "../layout/dashboard/DashboardLayout";
import { routeGenerator } from "../utils/routeGenerator";
import { userOption } from "./userRouter";

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
    path: "/user",
    element: <DashboardLayout></DashboardLayout>,
    children: routeGenerator(userOption),
  },
]);
