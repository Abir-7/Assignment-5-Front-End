import React from "react";
import { BookingTable } from "../../Component/dashboard/admin/BookingTable";

const ViewAllBooking = () => {
  return (
    <>
      <div className="bg-slate-950 w-full box-border h-32 items-center flex rounded-b-2xl justify-around p-5 text-white">
        <div>
          <div className="text-3xl font-bold">All User Booking</div>
        </div>
      </div>
      <BookingTable></BookingTable>
    </>
  );
};

export default ViewAllBooking;
