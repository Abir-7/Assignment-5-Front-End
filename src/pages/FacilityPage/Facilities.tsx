import React from "react";
import { useGetAllFacilityQuery } from "../../redux/Api/FacilityApi/facilityApi";
import SectionHeder from "../../Component/common/SectionHeder";
import Card from "../../Component/common/Card";
import { Facility } from "./facility.interface";

const Facilities = () => {
  const { data } = useGetAllFacilityQuery(null);

  return (
    <div>
      <SectionHeder text="All Facilities"></SectionHeder>
      <div className="p-2 grid  md:grid-cols-2 gap-10 justify-items-center lg:grid-cols-3 xl:grid-cols-4">
        {data?.data?.map((item: Facility, i: string) => (
          <Card key={i} info={item}></Card>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
