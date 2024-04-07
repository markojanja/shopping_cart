import man from "../../../assets/man2.png";
import women from "../../../assets/women2.png";
import laptop from "../../../assets/laptop2.png";
import pendant from "../../../assets/pendant2.png";
import { Link } from "react-router-dom";

const CategoriesSection = () => {
  const categories = [
    {
      name: "Women",
      image: women,
      link: "women's clothing",
    },
    {
      name: "Men",
      image: man,
      link: "men's clothing",
    },
    {
      name: "Jewelery",
      image: pendant,
      link: "jewelery",
    },
    {
      name: "Electronics",
      image: laptop,
      link: "electronics",
    },
  ];
  return (
    <section className='bg-slate-50 flex flex-col gap-4 my-11'>
      <div className='w-4/5 mx-auto'>
        <h2 className='text-3xl font-bold'>Collection</h2>
      </div>

      <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-4 w-4/5 mx-auto'>
        {categories.map((cat, idx) => (
          <div key={idx} className='relative bg-red-500'>
            <img className='w-auto' src={cat.image} alt='' loading='lazy' />
            <div className='absolute inset-0 bg-black/20 flex items-end p-1 justify-center'>
              <Link
                to={"/shop/" + cat.link}
                className='outline-none border-none bg-white text-black py-3 px-6 w-[150px] font-semibold text-center'
              >
                {cat.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
