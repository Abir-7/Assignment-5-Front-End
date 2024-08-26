import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/mainpage/MainLayout";
import Homepage from "../pages/HomePage/Homepage";
import DashboardLayout from "../layout/dashboard/DashboardLayout";
import { routeGenerator } from "../utils/routeGenerator";
import { userOption } from "./userRouter";
import LoginPage from "../pages/LoginPage/LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import Facilities from "../pages/FacilityPage/Facilities";
import FacilityDetails from "../pages/FacilityPage/FacilityDetails";
import BookFacility from "../pages/FacilityPage/BookFacility";
import Notfound from "../pages/NotFound/Notfound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "/facilities",
        element: (
          <ProtectedRoute>
            <Facilities />
          </ProtectedRoute>
        ),
      },
      {
        path: "faiclity/:id",
        element: (
          <ProtectedRoute>
            <FacilityDetails />
          </ProtectedRoute>
        ),
        errorElement: <Notfound></Notfound>,
      },
      {
        path: "/facility/:id/booking",
        element: (
          <ProtectedRoute>
            <BookFacility />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/user",
    element: (
      <ProtectedRoute>
        <DashboardLayout></DashboardLayout>
      </ProtectedRoute>
    ),
    children: routeGenerator(userOption),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);
