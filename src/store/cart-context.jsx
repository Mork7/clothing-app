import { useEffect, useState, createContext } from "react";

export const cartCtx = createContext({
  cart: [],
  items: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
});

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/clothingItems')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('There was an error fetching items!', error));
  }, []);

  const addItemToCart = (itemId) => {
    let newItem = items.find((item) => item._id === itemId);

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
    <cartCtx.Provider value={{ cart, items, addItemToCart, removeItemFromCart }}>
      {children}
    </cartCtx.Provider>
  );
}
