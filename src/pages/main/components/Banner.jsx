import banner from "../../../assets/banner44.png";
import placeholder from "../../../assets/place.png";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Banner = () => {
  return (
    <main className='bg-red-100 grid grid-cols-1 md:grid-cols-2 h-screen pt-10'>
      <div className='flex flex-col items-start justify-center p-4 gap-2 h-full lg:ml-16'>
        <h1 className='text-4xl sm:text-5xl lg:text-8xl z-20 font-extrabold'>
          Revolutionize Your <span className='text-red-500 leading-normal'>Shopping</span> <br />
          Routine
        </h1>
        <p className='text-xl font-semibold text-gray-900'>Unravel Endless Choices on Our E-Commerce Platform!</p>
        <Link className='bg-red-500 text-white px-6 py-3 text-center font-bold ' to='/shop'>
          Shop Now
        </Link>
      </div>
      <div className='flex justify-center items-end overflow-hidden'>
        <LazyLoadImage
          className='h-full w-full object-cover'
          height={"100%"}
          width={"100%"}
          src={banner}
          effect='blur'
          placeholderSrc={placeholder}
        />
      </div>
    </main>
  );
};

export default Banner;
