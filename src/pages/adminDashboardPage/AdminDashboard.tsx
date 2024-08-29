import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

const AdminDashboard = () => {
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
      <div className="my-10 p-2 flex  gap-6 flex-wrap ">
        <Link to="/admin/view-bookings">
          {" "}
          <div className="w-60 rounded-xl h-32 bg-slate-950 text-white text-xl font-semibold flex justify-center items-center">
            <div>All Bookings</div>
          </div>
        </Link>
        <div className="w-60 rounded-xl h-32 bg-slate-950 text-white text-xl font-semibold flex justify-center items-center">
          <div>
            <Link to="/admin/manage-facilities">Manage Facilities</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
