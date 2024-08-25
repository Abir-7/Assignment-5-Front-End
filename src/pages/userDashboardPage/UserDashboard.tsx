import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  return (
    <>
      <div className="bg-slate-950 w-full box-border items-center flex rounded-b-2xl justify-around p-5 text-white">
        <div>
          <div>{moment().format("MMMM Do YYYY")}</div>
          <div className="text-3xl font-bold">Welcome Back, {"Abir"}</div>
        </div>
        <div className="w-32 bg-white h-32 rounded-full"></div>
      </div>
      <div className="my-10 p-2 ">
        <div className="w-60 rounded-xl h-32 bg-slate-950 text-white text-xl font-semibold flex justify-center items-center">
          <div>
            <Link to="/user/my-bookings">My Bookings</Link>
            <div className="flex justify-between pt-3">
              <p className="text-green-500">1</p>
              <p className="text-red-500">1</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
