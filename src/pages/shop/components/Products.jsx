import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link, useLoaderData } from "react-router-dom";
import { IoCartSharp } from "react-icons/io5";

const Products = () => {
  const { addToCart } = useContext(CartContext);
  const data = useLoaderData();
  return (
    <>
      {data.map((product) => (
        <div
          key={product.id}
          className='flex max-h-96 justify-between flex-col border border-gray-100 gap-3 rounded-md shadow-md'
        >
          <div className='h-64 items-center justify-center relative text-white font-bold p-3  bg-white'>
            <img className='h-full w-full object-contain flex-1' src={product.image} alt='' />
            <div className='absolute bottom-1 right-2 flex items-center justify-center py-1 px-3 max-w-[85px]  bg-red-500 rounded-3xl'>
              ${product.price}
            </div>
          </div>
          <div className='flex justify-center gap-2 p-2 bg-gray-50'>
            <button
              className='bg-black py-2 px-4 text-white font-bold text-center text-2xl'
              onClick={() => addToCart(product)}
            >
              <IoCartSharp />
            </button>
            <Link to={`/shop/products/${product.id}`} className='bg-black max-w-[100px] p-2 text-white font-bold'>
              Details
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Products;

export const loader = async ({ params }) => {
  if (Object.keys(params).length === 0) {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  } else {
    const res = await fetch(`https://fakestoreapi.com/products/category/${params.name}`);

    const data = await res.json();

    if (!data.length) {
      throw new Error("Not Found");
    }

    return data;
  }
};
