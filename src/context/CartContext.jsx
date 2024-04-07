import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const index = cart.findIndex((item) => item.id === product.id);

    if (index !== -1) {
      setCart((prevCart) => {
        const newCart = [...prevCart];
        newCart[index] = { ...newCart[index], qty: newCart[index].qty + 1 };
        return newCart;
      });
    } else {
      setCart((prevCart) => [...prevCart, { ...product, qty: 1 }]);
    }
  };

  const decrementOrRemoveCartItem = (product) => {
    const index = cart.findIndex((item) => item.id === product.id);

    if (index !== -1) {
      setCart((prevCart) => {
        const newCart = [...prevCart];
        newCart[index] = { ...newCart[index], qty: newCart[index].qty - 1 };
        return newCart[index].qty < 1 ? newCart.filter((item) => product.id !== item.id) : newCart;
      });
    } else {
      setCart((prevCart) => [...prevCart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };

  const vals = {
    cart,
    setCart,
    addToCart,
    decrementOrRemoveCartItem,
    removeFromCart,
  };
  return <CartContext.Provider value={vals}>{children}</CartContext.Provider>;
};
