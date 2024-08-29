/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useCencelBookingMutation } from "../../../redux/Api/bookingApi/bookingApi";
import { IRespone } from "../../../redux/InterfaceForRedux/apiRespone.interface";
import { toast } from "sonner";
import { Link } from "react-router-dom";
interface Facility {
  _id: string;
  name: string;
  description: string;
  pricePerHour: number;
  location: string;
  isDeleted: boolean;
  __v: number;
}

interface User {
  email: string;
  _id: string;
  __v: number;
}

interface Booking {
  date: string;
  endTime: string;
  facility: Facility;
  isBooked: string;
  payableAmount: number;
  startTime: string;
  user: User;
  _id: string;
  __v: number;
}

const Table = ({ data }: { data: Booking[] }) => {
  const [bookingId, setBookingId] = useState("");
  const [cencelBooking] = useCencelBookingMutation();
  const handleCencel = async () => {
    const res = (await cencelBooking(bookingId)) as IRespone<any>;

    if (res?.data?.success) {
      toast.success(res.data.message);
    }

    setBookingId("");
  };
  return (
    <div className="overflow-x-auto">
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <p className="py-4 text-xl font-bold">Are You Sure?</p>

          <div className="modal-action">
            <form method="dialog" className=" flex gap-3">
              <button onClick={() => handleCencel()} className="btn btn-sm">
                Yes
              </button>
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-smhover:text-white hover:text-white hover:bg-slate-900 bg-slate-950 border-none">
                Cencel
              </button>
            </form>
          </div>
        </div>
      </dialog>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Facility Name</th>
            <th>User</th>
            <th>Date</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {data?.map((item, i) => (
            <tr key={i}>
              <td>{item.facility.name}</td>
              <td>{item.user.email}</td>
              <td>{item.date}</td>
              <td>{item.startTime}</td>
              <td>{item.endTime}</td>
              <td>
                {" "}
                <div className="flex gap-2">
                  <Link
                    to={`/user/booking-details/${item._id}`}
                    className="btn btn-sm"
                  >
                    Details
                  </Link>
                  <button
                    onClick={() => {
                      const modal = document.getElementById(
                        "my_modal_5"
                      ) as HTMLDialogElement | null;
                      modal?.showModal();
                      setBookingId(item._id);
                    }}
                    className="btn btn-sm hover:text-white hover:bg-slate-900 bg-slate-950 border-none"
                    disabled={item.isBooked === "canceled"}
                  >
                    Cancel
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
        {/* foot */}
      </table>
    </div>
  );
};

export default Table;
