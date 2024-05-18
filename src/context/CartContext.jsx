import { createContext, useState, useReducer } from "react";
import { cartReducer, initialState } from "../utils/cartReducer";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", product });
  };

  const decrementOrRemoveCartItem = (product) => {
    dispatch({ type: "DECREMENT_OR_REMOVE_ITEM", product });
  };

  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", product });
  };

  const vals = {
    cart,
    addToCart,
    decrementOrRemoveCartItem,
    removeFromCart,
  };
  return <CartContext.Provider value={vals}>{children}</CartContext.Provider>;
};
