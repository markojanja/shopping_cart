import { createContext, useState } from "react";

export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const isProductInCart = cart.some((item) => item.id === product.id);

    isProductInCart
      ? setCart((prevCart) => prevCart.map((item) => (item.id === product.id ? { ...item, qty: item.qty + 1 } : item)))
      : setCart((prevCart) => [...prevCart, { ...product, qty: 1 }]);
  };

  const decrementOrRemoveCartItem = (product) => {
    const isProductInCart = cart.some((item) => item.id === product.id);

    isProductInCart
      ? setCart((prevCart) =>
          prevCart.map((item) =>
            item.qty <= 1
              ? setCart(cart.filter((item) => product.id !== item.id))
              : item.id === product.id
                ? { ...item, qty: item.qty - 1 }
                : item,
          ),
        )
      : setCart((prevCart) => [...prevCart, { ...product, qty: 1 }]);
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };

  const values = {
    cart,
    setCart,
    addToCart,
    decrementOrRemoveCartItem,
    removeFromCart,
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
