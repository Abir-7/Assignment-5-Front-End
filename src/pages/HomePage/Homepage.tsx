import Card from "../../Component/common/Card";
import SectionHeder from "../../Component/common/SectionHeder";
import Banner from "../../Component/Homepage/Banner";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <SectionHeder text={"Featured Facilities"}></SectionHeder>
      <div className="grid gap-5 justify-items-center md:grid-cols-2 lg:grid-cols-3 ">
        <Card></Card> <Card></Card> <Card></Card>
      </div>
    </div>
  );
};

export default Homepage;
