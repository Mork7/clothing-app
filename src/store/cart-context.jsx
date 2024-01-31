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

  const removeItemFromCart = (indexToRemove) => {
    let updatedCart = cart.filter((item, index) => index !== indexToRemove);
    setCart(updatedCart);
  };
  
  return (
    <cartCtx.Provider
      value={{ cart, addItemToCart, removeItemFromCart }}
    >
      {children}
    </cartCtx.Provider>
  );
}
