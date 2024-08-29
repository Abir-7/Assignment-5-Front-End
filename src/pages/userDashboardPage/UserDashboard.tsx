import moment from "moment";

import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

const UserDashboard = () => {
  const { user } = useAppSelector((state) => state.authData);
  return (
    <>
      <div className="bg-slate-950 w-full box-border items-center flex rounded-b-2xl justify-around p-5 text-white">
        <div>
          <div>{moment().format("MMMM Do YYYY")}</div>
          <div className="text-3xl font-bold">Welcome Back, {user?.email}</div>
        </div>
        <div className="w-32 bg-white h-32 rounded-full"></div>
      </div>
      <div className="my-10 p-2 ">
        <Link to="/user/my-bookings">
          <div className="w-60 rounded-xl h-32 bg-slate-950 text-white text-xl font-semibold flex justify-center items-center">
            <div>My Bookings</div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default UserDashboard;
