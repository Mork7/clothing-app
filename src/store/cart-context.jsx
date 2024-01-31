import { useState } from "react";
import { createContext } from "react";

export const cartCtx = createContext({
  items: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  updateItemQuantity: () => {},
});

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItemToCart = (itemId) => {
    
  };

  const removeItemFromCart = (itemId) => {

  };

  const updateItemQuantity = (itemId, quantity) => {};

  return (
    <cartCtx.Provider
      value={{ cart, addItemToCart, removeItemFromCart, updateItemQuantity }}
    >
      {children}
    </cartCtx.Provider>
  );
};
