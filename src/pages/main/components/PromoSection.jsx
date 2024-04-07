import promo from "../../../assets/promo.jpg";
import { Link } from "react-router-dom";

const PromoSection = () => {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-3 bg-red-500 rounded-lg w-4/5 mx-auto'>
      <div className='flex flex-col  gap-3  p-3 w-full'>
        <img className='w-full h-full object-cover' src={promo} alt='' />
      </div>
      <div className='text-white p-3 flex flex-col gap-3 items-start justify-between col-span-2'>
        <h2 className='font-bold text-2xl'>Get best deals</h2>
        <p className='md:text-lg md:leading-loose font-semibold'>
          Exciting news! For a limited time only, we are offering unbeatable deals on our top-selling products. From
          must-have gadgets to trendy fashion pieces and everything in between, now is the perfect opportunity to treat
          yourself or find the ideal gift for a loved one. Plus, enjoy fast shipping and hassle-free returns, so you can
          shop with confidence. Don't miss out on these incredible savings , shop now and elevate your shopping
          experience with us!
        </p>
        <Link className='bg-white max-w-[200px] text-black px-6 py-3 font-bold' to='/shop'>
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default PromoSection;
