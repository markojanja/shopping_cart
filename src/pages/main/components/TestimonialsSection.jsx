import { testimonials } from "../../../../users/users";

const TestimonialsSection = () => {
  return (
    <section className='flex flex-col  gap-5 justify-center items-start w-4/5 mx-auto min-h-[550px] mt-24'>
      <h2 className='text-3xl font-bold'>What others say about us</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 flex-1'>
        {testimonials.map((t, i) => (
          <div className='flex flex-col  gap-3 p-7 bg-gray-200 rounded-lg shadow-lg h-[250px]' key={i}>
            <h3 className='text-gray-800 font-bold text-xl'>{t.name}</h3>
            <blockquote>
              <q className='text-gray-600 text-lg'>{t.feedback}</q>
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
