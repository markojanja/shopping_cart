import { useLoaderData } from "react-router-dom";
import { IoCartSharp } from "react-icons/io5";

const ProductsByCat = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      {data.map((product) => (
        <div
          key={product.id}
          className='flex max-h-96 justify-between flex-col border border-gray-300 gap-3 p-3 rounded-md shadow-md'
        >
          <div className='h-64 items-center justify-center relative text-white font-bold'>
            <img className='h-full w-full object-contain flex-1' src={product.image} alt='' />
            <div className='absolute bottom-1 right-1 flex items-center justify-center py-1 px-3 max-w-[85px]  bg-red-500 rounded-3xl'>
              ${product.price}
            </div>
          </div>
          <div className='flex justify-center gap-2 p-2'>
            <button className='bg-black max-w-[100px] p-2 text-white font-bold'>Details</button>
            <button className='bg-black py-2 px-4 text-white font-bold text-center text-2xl'>
              <IoCartSharp />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductsByCat;

export const loader = async ({ params }) => {
  const res = await fetch(`https://fakestoreapi.com/products/category/${params.name}`);

  const data = await res.json();

  return data;
};
