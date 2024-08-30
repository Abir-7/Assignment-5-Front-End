/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllBookingQuery } from "../../../redux/Api/bookingApi/bookingApi";
import LoadingUi from "../../Loding/LoadingUi";

export const BookingTable = () => {
  const { data, isLoading } = useGetAllBookingQuery("");
  return (
    <div className="overflow-x-auto">
      {isLoading ? (
        <LoadingUi></LoadingUi>
      ) : (
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Facility Name</th>
              <th>User</th>
              <th>Date</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Payment Status</th>
              <th>Payment Ammount</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data?.data?.map((item: any, i: string) => (
              <tr key={i}>
                <td>{item?.facility.name}</td>
                <td>{item?.user.email}</td>
                <td>{item?.date}</td>
                <td>{item?.startTime}</td>
                <td>{item?.endTime}</td>
                <td>{item?.paymentStatus}</td>
                <td>
                  {" "}
                  {Number(data?.data?.payableAmount).toFixed(2)}
                  {"$"}
                </td>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      )}
    </div>
  );
};
