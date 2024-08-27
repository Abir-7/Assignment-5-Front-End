import Card from "../../Component/common/Card";
import SectionHeder from "../../Component/common/SectionHeder";
import Banner from "../../Component/Homepage/Banner";
import Testimonials from "../../Component/Homepage/Testimonials";
import Timeline from "../../Component/Homepage/Timeline";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <SectionHeder text={"Featured Facilities"}></SectionHeder>
      <div className="grid gap-5 justify-items-center md:grid-cols-2 lg:grid-cols-3 my-5 ">
        <Card></Card> <Card></Card> <Card></Card>
      </div>
      <SectionHeder text={"Process Overview"}></SectionHeder>
      <Timeline></Timeline>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Homepage;
