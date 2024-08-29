/* eslint-disable @typescript-eslint/no-explicit-any */
import Card from "../../Component/common/Card";
import SectionHeder from "../../Component/common/SectionHeder";
import Banner from "../../Component/Homepage/Banner";
import NewsLetter from "../../Component/Homepage/NewsLetter";
import Testimonials from "../../Component/Homepage/Testimonials";
import Timeline from "../../Component/Homepage/Timeline";
import { useGetTopFacilityQuery } from "../../redux/Api/FacilityApi/facilityApi";

const Homepage = () => {
  const { data, error } = useGetTopFacilityQuery("");
  console.log(data, error);
  return (
    <div>
      <Banner />
      <SectionHeder text={"Featured Facilities"}></SectionHeder>
      <div className="grid gap-5 justify-items-center md:grid-cols-2 lg:grid-cols-3 my-5 ">
        {data?.data.map((item: any, i: string) => (
          <Card key={i} info={item}></Card>
        ))}
      </div>
      <SectionHeder text={"Process Overview"}></SectionHeder>
      <Timeline></Timeline>
      <Testimonials></Testimonials>
      <div className="mt-5">
        <NewsLetter></NewsLetter>
      </div>
    </div>
  );
};

export default Homepage;
