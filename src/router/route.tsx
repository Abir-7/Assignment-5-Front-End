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
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUsPage from "../pages/ContactUs/ContactUsPage";
import { adminOption } from "./adminRoute";
import ProtectedRouteTwo from "./ProtectedRouteTwo";
import SignupPage from "../pages/SignupPage/SignupPage";

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
          <ProtectedRouteTwo>
            <Facilities />
          </ProtectedRouteTwo>
        ),
      },
      {
        path: "faiclity/:id",
        element: (
          <ProtectedRouteTwo>
            <FacilityDetails />
          </ProtectedRouteTwo>
        ),
        errorElement: <Notfound></Notfound>,
      },
      {
        path: "/facility/:id/booking",
        element: (
          <ProtectedRoute role="user">
            <BookFacility />
          </ProtectedRoute>
        ),
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUsPage />,
      },
    ],
  },
  {
    path: "/user",
    element: (
      <ProtectedRoute role="user">
        <DashboardLayout></DashboardLayout>
      </ProtectedRoute>
    ),
    children: routeGenerator(userOption),
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute role="admin">
        <DashboardLayout></DashboardLayout>
      </ProtectedRoute>
    ),
    children: routeGenerator(adminOption),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);
