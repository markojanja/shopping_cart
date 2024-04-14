import { useContext, useMemo } from "react";
import { CartContext } from "../../context/CartContext";
import CartList from "./CartList";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, addToCart, decrementOrRemoveCartItem, removeFromCart } = useContext(CartContext);

  const total = useMemo(() => {
    return cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0);
  }, [cart]);

  const totalItems = cart.reduce((acc, curr) => acc + curr.qty, 0);

  return (
    <main className='min-h-screen pt-24 flex flex-col md:flex-row'>
      {cart.length ? (
        <>
          <CartList
            cart={cart}
            addToCart={addToCart}
            decrementOrRemoveCartItem={decrementOrRemoveCartItem}
            removeFromCart={removeFromCart}
            total={total}
          />
          <div className='flex-1 flex flex-col items-center justify-start gap-4 py-3'>
            <div className='flex flex-col gap-2 bg-gray-200 p-4 w-5/6 mx-auto items-center justify-start'>
              <h2 className='text-2xl font-bold'>Order summary</h2>
              <p>Items: {totalItems}</p>
              <h3 className='text-xl font-bold'>Total: ${total.toFixed(2)}</h3>
            </div>
            <button className='bg-red-500 text-white font-semibold px-6 py-3 w-5/6 mx-auto'>Checkout</button>
          </div>
        </>
      ) : (
        <div className='min-h-screen pt-24 flex items-start justify-center w-full'>
          <div className='flex flex-col gap-2 items-center justify-center'>
            <h1 className='text-xl font-bold'>Your cart is currently empty</h1>
            <Link to={"/shop"} className='text-red-500 font-bold'>
              Go back to shoping
            </Link>
          </div>
        </div>
      )}
    </main>
  );
};

export default Cart;
