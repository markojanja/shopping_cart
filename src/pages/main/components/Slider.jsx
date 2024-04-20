import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials as users } from "../../../../users/users";

// Import Swiper styles

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import Slide from "./Slide";

const Slider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      modules={[Pagination, Navigation]}
      className='mySwiper'
    >
      {users.map((user, i) => (
        <SwiperSlide key={i}>
          <Slide user={user} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
