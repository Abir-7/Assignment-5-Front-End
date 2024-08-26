import React from "react";
import { useGetAllFacilityQuery } from "../../redux/Api/FacilityApi/facilityApi";
import SectionHeder from "../../Component/common/SectionHeder";
import Card from "../../Component/common/Card";
import { Facility } from "./facility.interface";

const Facilities = () => {
  const { data } = useGetAllFacilityQuery(null);
  console.log(data);
  return (
    <div>
      <SectionHeder text="All Facilities"></SectionHeder>
      <div className="p-2">
        {data?.data?.map((item: Facility, i: string) => (
          <Card key={i} info={item}></Card>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
