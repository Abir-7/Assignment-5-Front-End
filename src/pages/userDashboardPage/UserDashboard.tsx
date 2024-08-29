import moment from "moment";

import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

const UserDashboard = () => {
  const { user } = useAppSelector((state) => state.authData);
  return (
    <>
      <div className="bg-slate-950 w-full box-border items-center flex flex-wrap gap-3 rounded-b-2xl justify-around p-5 text-white">
        <div>
          <div>{moment().format("MMMM Do YYYY")}</div>
          <div className="text-3xl font-bold">
            Welcome Back,{" "}
            <span className="text-2xl md:text-3xl ">{user?.email}</span>
          </div>
        </div>
        <div className="w-32 overflow-hidden bg-white h-32 rounded-full">
          <img
            src="https://img.freepik.com/free-vector/purple-man-with-blue-hair_24877-82003.jpg?t=st=1724943029~exp=1724946629~hmac=fec457b58631989a0a4bc978c87c57a3d57fe56f991eaffa41f66141fb1daf2a&w=740"
            alt=""
          />
        </div>
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
