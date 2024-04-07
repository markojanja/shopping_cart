import { useContext, useMemo } from "react";
import { CartContext } from "../../context/CartContext";
import CartList from "./CartList";

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
          <div className='flex-1 flex flex-col items-center justify-start'>
            <div className='flex flex-col gap-2 bg-gray-400 p-4 w-5/6 mx-auto items-center justify-start rounded-lg '>
              <h2 className='text-2xl font-bold'>Order summary</h2>
              <p>Items: {totalItems}</p>
              <h3 className='text-xl font-bold'>Total: ${total.toFixed(2)}</h3>
            </div>
          </div>
        </>
      ) : (
        <div className='min-h-screen pt-24 flex items-center justify-center w-full'>
          <h1 className='text-5xl font-bold'>No items in cart yet</h1>
        </div>
      )}
    </main>
  );
};

export default Cart;
