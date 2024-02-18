import { cartCtx } from "../store/cart-context";
import { useContext } from "react";
import Item from "./Item";

export default function Catalog({ activeScreen }) {
  const { addItemToCart, items, isLoading } = useContext(cartCtx);

  const handleAddItem = (itemId) => {
    addItemToCart(itemId);
  };

  return (
    <div className="flex flex-col text-center">
      {isLoading ? (
        <div className="flex flex-col mt-10 justify-center items-center text-center">
          <p>Retreiving items from database... this could take up to 30 seconds as this is a free service</p>
          <div className="animate-ping w-16 h-16 m-12 rounded-full bg-blue-300"></div>
        </div>
      ) : (
        <>
          <h1 className="text-4xl mt-12 md:mt-4 capitalize">{activeScreen}</h1>
          <div className="grid grid-cols-2 m-5 md:grid-cols-4 lg:grid-cols-5 bg-slate-200 rounded-md gap-2">
            {items
              .filter((item) => item.tags.includes(activeScreen))
              .map((item) => (
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
        </>
      )}
    </div>
  );
}
