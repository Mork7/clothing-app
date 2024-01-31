import { cartCtx } from "../store/cart-context";
import { useContext } from "react";
import Items from "../assets/items.json";
import Item from "./Item";

export default function Catalog() {
  const { addItemToCart } = useContext(cartCtx);

  const handleAddItem = (itemId) => {
    addItemToCart(itemId);
  };

  return (
    <div className="grid grid-cols-4 m-2 lg:grid-cols-5 bg-slate-200 rounded-md">
      {Items.map((item) => (
        <Item key={item.id} id={item.id} image={item.image} description={item.description} price={item.price} onAddItemClick={handleAddItem}/>
      ))}
    </div>
  );
}
