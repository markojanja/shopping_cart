import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const Product = () => {
  const { addToCart } = useContext(CartContext);
  const product = useLoaderData();
  const navigate = useNavigate();

  return (
    <main className='flex items-center min-h-screen pt-24'>
      <div className='w-4/5 mx-auto grid md:grid-cols-2 items-center justify-center'>
        <div className='flex-1 flex items-center justify-center'>
          <img src={product.image} className='w-[70%] p-4' />
        </div>
        <div className='p-4 flex flex-col gap-4'>
          <div className='flex flex-col flex-1 gap-7'>
            <h2 className='text-2xl font-bold text-left'>{product.title}</h2>
            <p className='flex-1 text-gray-700 text-sm md:text-xl text-left'>{product.description}</p>
            <p className='font-extrabold text-3xl'>
              <span className='!text-xl text-gray-700'>Price:</span> ${product.price}
            </p>
          </div>
          <div className='flex items-center justify-start gap-4'>
            <button
              onClick={() => addToCart(product)}
              className='bg-red-500 py-2 px-4 text-white font-bold text-center text-xl'
            >
              Buy
            </button>
            <button
              onClick={() => navigate(-1)}
              className='bg-black py-2 px-4 text-white font-bold text-center text-xl'
            >
              Go back
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Product;

export const loader = async ({ params }) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);

    const product = await response.json();

    return product;
  } catch (err) {
    throw new Error("Not found");
  }
};
