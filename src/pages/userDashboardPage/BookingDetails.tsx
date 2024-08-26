import { useParams } from "react-router-dom";

import { useGetSingleBookingDataQuery } from "../../redux/Api/bookingApi/bookingApi";
import SectionHeder from "../../Component/common/SectionHeder";
import { ChangeEvent, useState } from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

import { useAppSelector } from "../../redux/hooks";
import { useAddTestimonialMutation } from "../../redux/Api/testimonialApi/testimonialApi";

const BookingDetails = () => {
  const { user } = useAppSelector((state) => state.authData);
  const { id } = useParams();
  const { data } = useGetSingleBookingDataQuery(id!, { skip: !id });
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [addTestimonial] = useAddTestimonialMutation();
  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };
  const handleSubmit = async () => {
    console.log(rating, comment, id, user?.id);
    const res = await addTestimonial({
      bookingId: id,
      user: user?.id,
      rating,
      comment,
    });
    console.log(res);
  };

  return (
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
                className="btn btn-sm"
              >
                Yes
              </button>
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm">Cencel</button>
            </form>
          </div>
        </div>
      </dialog>
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
          <button
            onClick={() => {
              const modal = document.getElementById(
                "my_modal_1"
              ) as HTMLDialogElement | null;
              modal?.showModal();
            }}
            className="btn  mt-2 btn-sm"
          >
            Give Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
