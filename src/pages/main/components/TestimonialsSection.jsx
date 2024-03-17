import { testimonials } from "../../../../users/users";

const TestimonialsSection = () => {
  return (
    <section className='flex flex-col p-3 gap-5 justify-center items-start  w-4/5 mx-auto min-h-[550px]'>
      <h2 className='text-3xl font-bold'>What others say about us</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 flex-wrap gap-3'>
        {testimonials.map((t, i) => (
          <div className='flex flex-col  gap-3 p-7 bg-gray-200 rounded-lg shadow-sm' key={i}>
            <h3 className='text-gray-800 font-bold'>{t.name}</h3>
            <blockquote>
              <q className='text-gray-600'>{t.feedback}</q>
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
