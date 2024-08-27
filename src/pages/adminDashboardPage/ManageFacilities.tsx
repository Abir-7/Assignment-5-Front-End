import { FacilityTable } from "../../Component/dashboard/admin/FacilityTable";
import { useGetAllFacilityQuery } from "../../redux/Api/FacilityApi/facilityApi";

const ManageFacilities = () => {
  const { data } = useGetAllFacilityQuery("");

  return (
    <>
      <div className="bg-slate-950 w-full box-border h-32 items-center flex rounded-b-2xl justify-around p-5 text-white">
        <div>
          <div className="text-3xl font-bold">Manage Facilities</div>
        </div>
      </div>

      <FacilityTable data={data?.data}></FacilityTable>
    </>
  );
};

export default ManageFacilities;
