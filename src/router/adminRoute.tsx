import { IRouteOption } from "../interface/global.interface";
import AdminDashboard from "../pages/adminDashboardPage/AdminDashboard";
import CreateAdmin from "../pages/adminDashboardPage/CreateAdmin";
import CreateFacility from "../pages/adminDashboardPage/CreateFacility";
import ManageFacilities from "../pages/adminDashboardPage/ManageFacilities";
import ViewAllBooking from "../pages/adminDashboardPage/ViewAllBooking";

export const adminOption: IRouteOption[] = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Facility Management",
    children: [
      {
        name: "Create Facility",
        path: "create-facility",
        element: <CreateFacility />,
      },
      {
        name: "Manage Facilites",
        path: "manage-facilities",
        element: <ManageFacilities />,
      },
    ],
  },
  {
    name: "Booking Management",
    children: [
      {
        name: "All Bookings",
        path: "view-bookings",
        element: <ViewAllBooking />,
      },
    ],
  },
  {
    name: "Admin Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
    ],
  },
];
