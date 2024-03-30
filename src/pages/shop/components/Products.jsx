import { useLoaderData } from "react-router-dom";
import { IoCartSharp } from "react-icons/io5";
const Products = () => {
  const data = useLoaderData();
  return (
    <>
      {data.map((product) => (
        <div
          key={product.id}
          className='flex justify-between flex-col border border-gray-100 gap-3  rounded-md shadow-md'
        >
          <div className='h-64 items-center justify-center relative text-white font-bold p-3'>
            <img className='h-full w-full object-contain flex-1' src={product.image} alt='' />
            <div className='absolute bottom-1 right-1 flex items-center justify-center py-1 px-3 max-w-[85px]  bg-red-500 rounded-3xl'>
              ${product.price}
            </div>
          </div>
          <div className='flex justify-center gap-2 p-2 bg-gray-50'>
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

export default Products;

export const loader = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  return data;
};
