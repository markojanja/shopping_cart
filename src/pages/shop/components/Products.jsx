import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link, useLoaderData } from "react-router-dom";

const Products = () => {
  const { addToCart } = useContext(CartContext);
  const data = useLoaderData();

  return (
    <>
      {data.map((product) => (
        <div
          key={product.id}
          className='flex max-h-96 justify-between flex-col border border-gray-100 gap-3 rounded-md shadow-md'
          data-testid='card'
        >
          <div className='h-64 items-center justify-center relative text-white font-bold p-3  bg-white'>
            <Link to={`/shop/products/${product.id}`}>
              <img className='h-full w-full object-contain flex-1' src={product.image} alt='' />
            </Link>

            <div className='absolute bottom-1 right-2 flex items-center justify-center py-1 px-3 max-w-[85px]  bg-red-500 rounded-3xl'>
              ${product.price}
            </div>
          </div>
          <Link to={`/shop/products/${product.id}`}>
            <p className='ml-2 text-gray-500'>{product.title.slice(0, 20) + "..."}</p>
          </Link>

          <div className='flex justify-center gap-2 p-2 bg-gray-50'>
            <button
              className='border border-red-500 py-2 px-4 text-red-500 font-bold text-center rounded-sm lg:hover:bg-red-500 lg:hover:text-white transition-all duration-200 ease-in'
              onClick={() => addToCart(product)}
            >
              Add to cart
            </button>
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
