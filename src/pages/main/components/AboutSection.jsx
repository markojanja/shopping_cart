import { Link } from "react-router-dom";
import aboutPic from "../../../assets/about.jpg";

const AboutSection = () => {
  return (
    <section className='w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-3 my-11'>
      <div className='flex flex-col gap-7 justify-center items-start self-start flex-2'>
        <h2 className='text-3xl font-bold'>AboutUs</h2>
        <p className='text-md lg:leading-loose'>
          We're a passionate team dedicated to bringing you a curated selection of high-quality products that enhance
          your life. With a focus on innovation, style, and functionality, we strive to offer items that meet your needs
          and exceed your expectations. Our mission is to provide an exceptional shopping experience, from browsing our
          diverse catalog to receiving your carefully packaged order. Whether you're looking for the latest tech
          gadgets, fashion-forward accessories, or unique home decor, we're here to help you discover the perfect
          solution. Thank you for choosing us as your trusted online shopping destination.
        </p>
        <Link className='bg-red-500 px-6 py-3 text-white font-bold w-[150px] text-center' to='/about'>
          Learn more
        </Link>
      </div>
      <img className='flex-1 w-full object-cover overflow-hidden' src={aboutPic} alt='woman shopping' loading='lazy' />
    </section>
  );
};

export default AboutSection;
