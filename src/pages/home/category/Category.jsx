import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import "./style.css";
import { Pagination } from "swiper/modules";
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-8"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
          <h1 className=" -mt-10 text-center  text-3xl text-white ">salads</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
          <h1 className=' -mt-10 text-3xl text-white  text-center'>pizza</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
          <h1 className=' -mt-10 text-3xl text-white  text-center'>dessert</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
          <h1 className=' -mt-10 text-3xl text-white  text-center'>cake</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
          <h1 className=' -mt-10 text-3xl text-white  text-center'>salad</h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
