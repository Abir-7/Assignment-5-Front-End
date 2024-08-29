import { Link } from "react-router-dom";
import { Facility } from "../../pages/FacilityPage/facility.interface";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Card = ({ info }: { info: Facility }) => {
  return (
    <div className="card bg-slate-950 w-80 shadow-xl">
      <figure>
        <img className="w-80 h-80 object-cover" src={info?.photo} />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">
          {info?.name}
          <div className="badge text-white bg-orange-600 border-none">
            ${info?.pricePerHour}
          </div>
        </h2>
        <p>
          {info?.description.length > 50
            ? info?.description.substring(0, 50) + "..."
            : info?.description}
        </p>
        <div className=" ">
          <div className=" ">{info?.location}</div>
        </div>
        <div className="flex flex-col gap-3 ">
          {/* <Link
            to={`/facility/${info?._id}/booking`}
            className="btn btn-sm w-full"
          >
            Book Now
          </Link> */}
          <Link to={`/faiclity/${info?._id}`} className="btn btn-sm w-full">
            View Details
          </Link>
          {info?.averageRating && (
            <div className="flex w-3/4 items-center ">
              {" "}
              <p className="text-white text-sm font-semibold">
                Avarage Rating:
              </p>
              <Rating
                style={{ maxWidth: 80 }}
                value={info?.averageRating}
                readOnly
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
