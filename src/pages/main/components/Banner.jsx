import banner from "../../../assets/banner44.png";
import placeholder from "../../../assets/place.png";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 h-screen pt-10 overflow-hidden'>
      <div className='flex flex-col items-start justify-center p-4 gap-2 h-full lg:ml-16 '>
        <motion.h1
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className='text-4xl sm:text-5xl lg:text-8xl z-20 font-extrabold'
        >
          Revolutionize Your <span className='text-red-500 leading-normal'>Shopping</span> <br />
          Routine
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className='text-xl font-semibold text-gray-900'
        >
          Unravel Endless Choices on Our E-Commerce Platform!
        </motion.p>
        <motion.div
          className='mt-3'
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link className='bg-red-500 text-white px-6 py-3 text-center font-bold ' to='/shop'>
            Shop Now
          </Link>
        </motion.div>
      </div>
      <div className='flex justify-center items-end overflow-hidden'>
        <img className='h-full w-full object-cover' height={"100%"} width={"100%"} src={banner} />
      </div>
    </main>
  );
};

export default Banner;
