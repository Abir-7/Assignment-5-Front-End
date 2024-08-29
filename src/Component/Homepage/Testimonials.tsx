/* eslint-disable @typescript-eslint/no-explicit-any */

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useGetAllTestimonialQuery } from "../../redux/Api/testimonialApi/testimonialApi";

const Testimonials = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 1, spacing: 5 },
      },
      "(min-width: 906px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1400px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1, spacing: 15 },
  });
  const { data, isLoading } = useGetAllTestimonialQuery(null);
  console.log(data);
  return (
    <div className="grid grid-cols-1  md:grid-cols-3 gap-5 items-center container mx-auto my-10">
      <div className="col-span-1 mx-2">
        {/* <img className='w-[200px]' src={img1} alt="" /> */}
        <h1 className="text-5xl mt-2">What our customer say about us</h1>

        <div className="flex gap-5 mt-2">
          <div>
            <h1 className="text-5xl font-bold text-green-600">15k+</h1>
            <p className="font-bold">Happy Customers</p>
          </div>
          <div>
            <h1 className="text-5xl font-bold text-green-600">10+</h1>
            <p className="font-bold">Facilities</p>
          </div>
        </div>
      </div>
      <div className="col-span-2 rounded-xl mx-2">
        <div ref={sliderRef} className="keen-slider rounded-xl ">
          {isLoading ? (
            <></>
          ) : (
            <>
              {data?.data?.map((info: any) => (
                <div key={info?._id} className="keen-slider__slide  ">
                  <div className="card p-5 hover:-translate-y-2 duration-500">
                    <figure>
                      <LazyLoadImage
                        alt={"User Image"}
                        src={info?.photo} // use normal <img> attributes as props
                        className="w-[70px] object-cover p-1 h-[70px] rounded-full border-2 border-orange-300"
                      />
                    </figure>
                    <div className=" text-center">
                      <h2 className="text-xl font-bold">{info?.user.email}</h2>
                      <p className="mt-2">{info?.comment}</p>
                      <p className="flex mt-2 gap-3 justify-center text-yellow-400">
                        <Rating
                          style={{ maxWidth: 100 }}
                          value={info?.rating}
                          readOnly
                        />
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
