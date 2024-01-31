import { cartCtx } from "../store/cart-context";
import { useContext } from "react";
import Items from "../assets/items.json";

export default function Catalog() {
  const { addItemToCart } = useContext(cartCtx);

  const handleAddItem = (itemId) => {
    addItemToCart(itemId);
  };

  return (
    <div className="grid grid-cols-4 m-2 lg:grid-cols-5 bg-slate-200 rounded-md">
      {Items.map((item) => (
        <div key={item.id} className="flex flex-col items-center p-3">
          <img className="w-40 h-48 object-cover rounded-sm" src={item.image} alt="" />
          <p>{item.description}</p>
          <p>${item.price}</p>
          <button className="flex rounded-lg items-center bg- border-2 py-2 px-4 border-black hover:bg-purple-300">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}
