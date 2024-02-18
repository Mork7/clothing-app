import { useEffect, useState, createContext } from "react";
import axios from 'axios'

export const cartCtx = createContext({
  cart: [],
  items: [],
  isLoading: false,
  addItemToCart: () => {},
  removeItemFromCart: () => {},
});

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Define the function to fetch items
    setIsLoading(true);

    const fetchItems = async () => {
      try {
        const response = await axios.get(
          "https://clothing-app-backend-v2.onrender.com/items"
        );
        setItems(response.data);
        setIsLoading(false);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchItems();
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
    <cartCtx.Provider value={{ cart, items, addItemToCart, removeItemFromCart, isLoading }}>
      {children}
    </cartCtx.Provider>
  );
}
