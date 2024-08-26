import { Link } from "react-router-dom";
import { Facility } from "../../pages/FacilityPage/facility.interface";

const Card = ({ info }: { info: Facility }) => {
  return (
    <div className="card bg-slate-950 w-80 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
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
          <button className="btn btn-sm w-full">Book Now</button>
          <Link to={`/faiclity/${info?._id}`} className="btn btn-sm w-full">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
