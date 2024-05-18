export const initialState = [];

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const index = state.findIndex((item) => item.id === action.product.id);

      if (index !== -1) {
        const newCart = [...state];
        newCart[index] = { ...newCart[index], qty: newCart[index].qty + 1 };
        return newCart;
      } else {
        return [...state, { ...action.product, qty: 1 }];
      }
    }
    case "DECREMENT_OR_REMOVE_ITEM": {
      const index = state.findIndex((item) => item.id === action.product.id);

      if (index !== -1) {
        const newCart = [...state];
        newCart[index] = { ...newCart[index], qty: newCart[index].qty - 1 };
        return newCart[index].qty < 1 ? newCart.filter((item) => action.product.id !== item.id) : newCart;
      } else {
        return [...state, { ...action.product, qty: 1 }];
      }
    }
    case "REMOVE_FROM_CART": {
      return state.filter((item) => item.id !== action.product.id);
    }
    default:
      throw new Error("Unkonw action type");
  }
};
