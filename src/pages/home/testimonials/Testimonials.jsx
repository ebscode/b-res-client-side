import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonials = () => {
  const [review, setreview] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setreview(data));
  }, []);
  return (
    <div>
      <div className="text-center mb-3 mx-auto">
        <h1 className=" text-orange-500 mb-2">---what our client say---</h1>
        <h1 className="text-4xl uppercase mx-auto p-2 border-y-2 w-4/12 text-center">
          testimonials
        </h1>
      </div>
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <div className="p-12">
            {review.map((item) => (
              <SwiperSlide className="p-28 " key={item._id}>
                <div>
                   <div className=" text-center mb-2  flex justify-center items-center">
                   <Rating 
      style={{ maxWidth: 180 }}
      value={item.rating}
      readOnly
    />
                   </div>
    
                    <p>{item.details}</p>
                    <h1 className="text-center text-2xl font-medium text-amber-500">{item.name}</h1>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
