import CartCard from "./CartCard";

const CartList = ({ cart }) => {
  return (
    <div className='flex flex-col gap-3 flex-1 items-center py-3'>
      <h2 className='text-2xl font-bold'>Items in cart</h2>
      {cart.map((item) => (
        <CartCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default CartList;
