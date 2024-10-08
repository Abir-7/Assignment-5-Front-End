/* eslint-disable @typescript-eslint/no-explicit-any */
import Card from "../../Component/common/Card";
import SectionHeder from "../../Component/common/SectionHeder";
import Banner from "../../Component/Homepage/Banner";
import NewsLetter from "../../Component/Homepage/NewsLetter";
import Testimonials from "../../Component/Homepage/Testimonials";
import Timeline from "../../Component/Homepage/Timeline";
import { useGetTopFacilityQuery } from "../../redux/Api/FacilityApi/facilityApi";

const Homepage = () => {
  const { data } = useGetTopFacilityQuery("");

  return (
    <div>
      <Banner />
      <SectionHeder text={"Featured Facilities"}></SectionHeder>
      <div className=" p-2 grid md:grid-cols-2 gap-10 justify-items-center lg:grid-cols-3 xl:grid-cols-4 my-5 ">
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
