import { testimonials } from "../../../../users/users";
import Slider from "./Slider";

const TestimonialsSection = () => {
  return (
    <section className='flex flex-col gap-5 justify-center items-start w-4/5 mx-auto min-h-[550px] mt-24'>
      <h2 className='text-3xl font-bold'>What others say about us</h2>
      <div className='w-full mx-auto'>
        <Slider />
      </div>
    </section>
  );
};

export default TestimonialsSection;
