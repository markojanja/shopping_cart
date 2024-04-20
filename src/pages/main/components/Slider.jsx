import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials as users } from "../../../../users/users";

// Import Swiper styles

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

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
          <div className='flex flex-col  gap-3 p-7 bg-gray-200 rounded-lg shadow-lg min-h-[350px]' key={i}>
            <h3 className='text-gray-800 font-bold text-lg'>{user.name}</h3>
            <blockquote>
              <q className='text-gray-600 text-2xl font-bold'>{user.feedback}</q>
            </blockquote>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
