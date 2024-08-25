import React from "react";
import taenis from "../../assets/image/tanis.jpg";
import badminton from "../../assets/image/badminton.jpeg";
import football from "../../assets/image/football.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Banner = () => {
  return (
    <>
      <Carousel className="bg-red-200 h-[80vh]">
        <div
          className="h-[80vh] flex items-center justify-center"
          style={{
            backgroundImage: `url(${taenis})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p className="legend">Legend 1</p>
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
          <p className="legend">Legend 2</p>
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
          <p className="legend">Legend 1</p>
        </div>
      </Carousel>
    </>
  );
};

export default Banner;
