import { IRouteOption } from "../interface/global.interface";
import BookingDetails from "../pages/userDashboardPage/BookingDetails";
import UserBookingList from "../pages/userDashboardPage/UserBookingList";
import UserDashboard from "../pages/userDashboardPage/UserDashboard";

export const userOption: IRouteOption[] = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <UserDashboard></UserDashboard>,
  },
  {
    name: "My Bookings",
    path: "my-bookings",
    element: <UserBookingList></UserBookingList>,
  },
  {
    name: "",
    path: "booking-details/:id",
    element: <BookingDetails />,
  },
];
