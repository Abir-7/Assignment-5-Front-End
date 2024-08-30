/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";

import { useGetSingleBookingDataQuery } from "../../redux/Api/bookingApi/bookingApi";
import SectionHeder from "../../Component/common/SectionHeder";
import { ChangeEvent, useState } from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

import { useAppSelector } from "../../redux/hooks";
import { useAddTestimonialMutation } from "../../redux/Api/testimonialApi/testimonialApi";
import { IRespone } from "../../redux/InterfaceForRedux/apiRespone.interface";
import { toast } from "sonner";
import LoadingUi from "../../Component/Loding/LoadingUi";

const BookingDetails = () => {
  const { user } = useAppSelector((state) => state.authData);
  const { id } = useParams();
  const { data, isLoading } = useGetSingleBookingDataQuery(id!, { skip: !id });
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [addTestimonial] = useAddTestimonialMutation();
  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };
  const handleSubmit = async () => {
    const res = (await addTestimonial({
      bookingId: id,
      user: user?.id,
      rating,
      comment,
    })) as IRespone<any>;
    if (res?.data) {
      toast.success(res.data.message);
    }
  };

  return (
    <>
      {" "}
      <div className="bg-slate-950 w-full box-border h-32 items-center flex rounded-b-2xl justify-around p-5 text-white">
        <div>
          <div className="text-3xl font-bold">My Bookings</div>
        </div>
      </div>
      <div>
        <dialog id="my_modal_1" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <Rating
              style={{ width: "150px" }}
              value={rating}
              onChange={setRating}
            />
            <p className="py-4  font-medium">Comment</p>
            <textarea
              className="textarea w-full textarea-bordered"
              placeholder="Comment"
              value={comment}
              onChange={handleCommentChange}
            ></textarea>
            <div className="modal-action">
              <form method="dialog" className=" flex gap-3">
                <button
                  disabled={rating === 0 || comment === ""}
                  onClick={() => handleSubmit()}
                  className="btn btn-sm text-white hover:bg-slate-900 bg-slate-950 border-none"
                >
                  Yes
                </button>
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm text-white hover:bg-slate-900 bg-slate-950 border-none">
                  Cencel
                </button>
              </form>
            </div>
          </div>
        </dialog>
        <SectionHeder text="Booking Details"></SectionHeder>
        {isLoading ? (
          <LoadingUi></LoadingUi>
        ) : (
          <div className="grid mt-10 px-3 mb-5 grid-cols-1 items-center  gap-10 lg:grid-cols-2">
            <div className="w-96 h-96 container mx-auto bg-slate-950">
              <img
                className="w-96 h-96"
                src={data?.data?.facility?.photo}
                alt=""
              />
            </div>
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
                <div>
                  {" "}
                  <span className="font-semibold">Total Ammount: </span>
                  {Number(data?.data?.payableAmount).toFixed(2)}
                  {"$"}
                </div>
              </div>
              <button
                onClick={() => {
                  const modal = document.getElementById(
                    "my_modal_1"
                  ) as HTMLDialogElement | null;
                  modal?.showModal();
                }}
                className="btn  mt-2 btn-sm btn-warning"
              >
                Give Review
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BookingDetails;
