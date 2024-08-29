import taenis from "../../assets/image/tanis.jpg";
import badminton from "../../assets/image/badminton.jpeg";
import football from "../../assets/image/football.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <>
      <Carousel showThumbs={false} className="h-[80vh]">
        <div
          className="h-[80vh] flex items-center justify-center"
          style={{
            backgroundImage: `url(${taenis})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div>
            <h1 className="text-7xl font-bold text-white">Find Your Play </h1>
            <p className="text-white font-semibold">
              {" "}
              Book sports pitches and courts
            </p>
          </div>

          <Link to="/facilities" className="legend">
            Book Now
          </Link>
        </div>
        <div
          className="h-[80vh] flex items-center justify-center"
          style={{
            backgroundImage: `url(${badminton})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {" "}
          <div>
            <h1 className="text-7xl font-bold text-white">
              All about dedication{" "}
            </h1>
            <p className="text-white font-semibold">
              {" "}
              Book sports pitches and courts
            </p>
          </div>
          <Link to="/facilities" className="legend">
            Book Now
          </Link>
        </div>
        <div
          className="h-[80vh] flex items-center justify-center"
          style={{
            backgroundImage: `url(${football})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div>
            <h1 className="text-7xl font-bold text-white">Find Your Play </h1>
            <p className="text-white font-semibold">
              {" "}
              Book sports pitches and courts
            </p>
          </div>
          <Link to="/facilities" className="legend">
            Book Now
          </Link>
        </div>
      </Carousel>
    </>
  );
};

export default Banner;
