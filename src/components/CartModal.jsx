import { useContext } from "react";
import { cartCtx } from "../store/cart-context";

export default function CartModal({ onClose }) {
  const { cart, removeItemFromCart } = useContext(cartCtx);

  const getTotalPrice = () => {
    const total = cart.reduce((total, currentItem) => {
      return total + currentItem.price;
    }, 0);

    return total.toFixed(2);
  };

  return (
    // transparent background for modal
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center text-center p-4">
      {/*  */}
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-sm mx-auto max-h-[80vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        <div className="overflow-y-auto max-h-[60vh]">
          {" "}
          {/* Scrollable area for cart items */}
          <ul>
            {cart.map((item, index) => (
              <li
                key={index}
                className="mb-2 flex justify-between items-center"
              >
                <span>
                  {item.description} - ${item.price}
                </span>
                <button
                  onClick={() => removeItemFromCart(index)}
                  className="bg-red-500 text-white p-3 ml-3 py-1 rounded"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4 flex flex-col text-center">
          {" "}
          {/* Footer with total price and close button */}
          {cart.length === 0 ? (
            <p className="mb-4">Your cart is empty</p>
          ) : (
            <p className="mb-4">Total price: ${getTotalPrice()}</p>
          )}
          {cart.length !== 0 && (
            <button
            //TODO: onClick = {handleCheckout}
              onClick={onClose}
              className="bg-green-500 text-white px-4 py-2 my-2 rounded"
            >
              Go To Checkout
            </button>
          )}
          <button
            onClick={onClose}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
