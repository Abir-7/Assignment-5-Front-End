import SectionHeder from "../../Component/common/SectionHeder";
import { useGetSingleFacilityQuery } from "../../redux/Api/FacilityApi/facilityApi";
import { Link, useParams } from "react-router-dom";

const FacilityDetails = () => {
  const { id } = useParams();
  const { data } = useGetSingleFacilityQuery(id!, { skip: !id });
  console.log(data, "gg");
  return (
    <div>
      <SectionHeder text="Facilities Details"></SectionHeder>
      <div className="grid mt-10 grid-cols-1 justify-items-center gap-10 ">
        <div className="w-96 h-96 container mx-auto bg-slate-950"></div>
        <div className="text-xl space-y-2">
          <div>
            <span className="font-semibold">Facility Name: </span>
            {data?.data.name}
          </div>
          <div>
            <span className="font-semibold">Description: </span>
            {data?.data?.description}
          </div>
          <div>
            <span className="font-semibold">Location: </span>
            {data?.data.location}
          </div>
          <div>
            <span className="font-semibold">Price per Hour : </span>
            {data?.data?.pricePerHour}$
          </div>
        </div>
        <Link
          to={`/facility/${id}/booking`}
          className="btn btn-neutral btn-sm bg-slate-950 hover:bg-slate-700 text-white"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default FacilityDetails;
