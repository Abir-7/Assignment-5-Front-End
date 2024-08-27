import { IRouteOption } from "../interface/global.interface";
import AdminDashboard from "../pages/adminDashboardPage/AdminDashboard";
import CreateFacility from "../pages/adminDashboardPage/CreateFacility";

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
    ],
  },
];
