import { useEffect, useState } from "react";
import { createContext } from "react";
import Items from "../assets/items.json";

export const cartCtx = createContext({
  items: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  updateItemQuantity: () => {},
});

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log(cart);
  },[cart])

  const addItemToCart = (itemId) => {
    let newItem = Items.find((item) => item.id === itemId);

    if (newItem) {
      let updatedCart = [...cart, newItem];
      setCart(updatedCart);
    }
  };

  const removeItemFromCart = (itemId) => {
    let updatedCart = [...cart];

    updatedCart.filter((item) => item.id !== itemId);

    setCart(updatedCart);

  };

  const updateItemQuantity = (itemId, quantity) => {};

  return (
    <cartCtx.Provider
      value={{ cart, addItemToCart, removeItemFromCart, updateItemQuantity }}
    >
      {children}
    </cartCtx.Provider>
  );
}
