import { cartCtx } from "../store/cart-context";
import { useContext } from "react";
import Item from "./Item";

export default function Catalog({activeScreen}) {

  const { addItemToCart, items } = useContext(cartCtx);

  const handleAddItem = (itemId) => {
    addItemToCart(itemId);
  };

  return (
    <div className="flex flex-col text-center">
      <h1 className="text-4xl mt-4 capitalize">{activeScreen}</h1>
      <div className="grid grid-cols-2 m-5 md:grid-cols-4 lg:grid-cols-5 bg-slate-200 rounded-md">
        {items.filter(item => item.tags.includes(activeScreen)).map((item) => (
          <Item
            key={item._id}
            id={item._id}
            image={item.image}
            description={item.description}
            price={item.price}
            onAddItemClick={handleAddItem}
          />
        ))}
      </div>
    </div>
  );
}
