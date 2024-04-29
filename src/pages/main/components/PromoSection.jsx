import promo from "../../../assets/promo.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PromoSection = () => {
  const text = {
    hidden: {
      x: 50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: 1,
      },
    },
  };

  return (
    <section className='grid grid-cols-1 lg:grid-cols-3 bg-red-500 w-full sm:w-4/5 mx-auto shadow-lg overflow-hidden'>
      <div className='flex flex-col  gap-3  p-3 w-full'>
        <img className='w-full h-full object-cover' src={promo} alt='girl shopping' loading='lazy' />
      </div>
      <motion.div
        className='text-white p-3 flex flex-col gap-3 items-start justify-between col-span-2'
        variants={text}
        viewport={{ once: true }}
        initial='hidden'
        whileInView='visible'
      >
        <h2 className='font-bold text-2xl'>Get best deals</h2>
        <p className='md:text-lg md:leading-loose font-semibold' data-testid='text'>
          Exciting news! For a limited time only, we are offering unbeatable deals on our top-selling products. From
          must-have gadgets to trendy fashion pieces and everything in between, now is the perfect opportunity to treat
          yourself or find the ideal gift for a loved one. Plus, enjoy fast shipping and hassle-free returns, so you can
          shop with confidence. Don't miss out on these incredible savings , shop now and elevate your shopping
          experience with us!
        </p>
        <Link className='bg-white max-w-[200px] text-black px-6 py-3 font-bold' to='/shop'>
          Shop Now
        </Link>
      </motion.div>
    </section>
  );
};

export default PromoSection;
