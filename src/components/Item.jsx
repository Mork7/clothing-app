export default function Item({ id, image, description, price, onAddItemClick }) {
  return (
    <div key={id} className="flex flex-col items-center p-3 shadow-md rounded-md m-2">
      <img
        className="w-40 h-48 object-cover rounded-xl"
        src={image}
        alt=""
      />
      <p>{description}</p>
      <p>${price}</p>
      <button
        className="flex rounded-lg items-center bg- border-2 py-2 px-4 border-black hover:bg-purple-300 active:translate-y-1"
        onClick={() => onAddItemClick(id)}
      >
        Add to cart
      </button>
    </div>
  );
}
