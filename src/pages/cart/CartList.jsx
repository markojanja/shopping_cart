import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

const CartList = ({ cart, addToCart, decrementOrRemoveCartItem, removeFromCart }) => {
  const subtotal = (x, y) => (y * x).toFixed(2);

  return (
    <div className='flex flex-col gap-3 flex-1 items-center py-4'>
      <h2 className='text-2xl font-bold'>Items in cart</h2>
      {cart.map((item) => (
        <div className='flex w-[90%] lg:w-[60%] mx-auto gap-2 border border-gray-200' key={item.id}>
          <img className='p-1 w-[100px] h-auto' src={item.image} />
          <div className='flex flex-col gap-2 flex-1'>
            <p>
              {item.title} ${item.price}
            </p>
            <p>
              <span className='font-bold'>subtotal:</span> {subtotal(item.price, item.qty)}$
            </p>
            <div className='flex flex-row items-center justify-start gap-3 p-1'>
              <button onClick={() => addToCart(item)}>
                <FaPlus />
              </button>
              <p className='text-lg font-bold border border-gray-200 rounded-sm py-1 px-2'>{item.qty}</p>
              <button onClick={() => decrementOrRemoveCartItem(item)}>
                <FaMinus />
              </button>
              <button className='ml-auto mr-1 text-gray-400' onClick={() => removeFromCart(item)}>
                <FaTrash />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartList;
