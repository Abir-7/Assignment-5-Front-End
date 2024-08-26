import { useParams } from "react-router-dom";

import { useGetSingleBookingDataQuery } from "../../redux/Api/bookingApi/bookingApi";
import SectionHeder from "../../Component/common/SectionHeder";

const BookingDetails = () => {
  const { id } = useParams();
  const { data } = useGetSingleBookingDataQuery(id!, { skip: !id });

  return (
    <div>
      <SectionHeder text="Booking Details"></SectionHeder>
      <div className="grid mt-10 grid-cols-1 items-center  gap-10 lg:grid-cols-2">
        <div className="w-96 h-96 container mx-auto bg-slate-950"></div>
        <div className="text-xl">
          <div>
            <span className="font-semibold">Facility Name: </span>
            {data?.data?.facility?.name}
          </div>
          <div>
            <span className="font-semibold">Description: </span>
            {data?.data?.facility?.description}
          </div>
          <div>
            <span className="font-semibold">Location: </span>
            {data?.data?.facility?.location}
          </div>
          <div>
            <span className="font-semibold">Price per Hour : </span>
            {data?.data?.facility?.pricePerHour}$
          </div>
          <hr className="my-4" />
          <div>
            <p className="text-center font-bold">User Details</p>
            <div>
              <p>
                <span className="font-semibold">Email: </span>
                {data?.data?.user?.email}
              </p>
              <p>
                <span className="font-semibold">Pament: </span>
                {data?.data?.payableAmount}$
              </p>
            </div>
            <div>
              <span className="font-semibold">date: </span>
              {data?.data?.date}
            </div>

            <div>
              {" "}
              <span className="font-semibold">Start Time: </span>
              {data?.data?.startTime}
            </div>
            <div>
              {" "}
              <span className="font-semibold">End Time: </span>
              {data?.data?.endTime}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
