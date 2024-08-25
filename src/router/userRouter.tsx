import { IRouteOption } from "../interface/global.interface";
import UserDashboard from "../pages/userDashboardPage/UserDashboard";

export const userOption: IRouteOption[] = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <UserDashboard></UserDashboard>,
  },
];
