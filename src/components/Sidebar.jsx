export default function Sidebar({isOpen, onButtonClick }) {
  const buttonStyles =
    "bg-blue-500 hover:bg-purple-300 text-white  py-2 rounded w-full";

    const handleOnButtonClick = (buttonId) => {
      onButtonClick(buttonId)
    }

  return (
    <div
      id="sidebar"
      className={
        `flex flex-col mt-24 md:mt-16 p-3 fixed top-0 left-0 w-64 h-full bg-slate-300 bg-opacity-80 shadow-lg ${isOpen && "animate-fadeInLeft"}`
      }
    >
      <ul className="p-3">
        <li className="mb-4">
          <button onClick={() => handleOnButtonClick("women")} className={buttonStyles}>Womens</button>
        </li>
        <li className="mb-4">
          <button onClick={() => handleOnButtonClick("men")} className={buttonStyles}>Mens</button>
        </li>
        <li className="mb-4">
          <button onClick={() => handleOnButtonClick("seasonal")} className={buttonStyles}>Seasonal</button>
        </li>
        <li className="mb-4">
          <button onClick={() => handleOnButtonClick("children")} className={buttonStyles}>Children</button>
        </li>
        <li className="mb-4">
          <button onClick={() => handleOnButtonClick("shoes")} className={buttonStyles}>Shoes</button>
        </li>
        <li className="mb-4">
          <button onClick={() => handleOnButtonClick("hats")} className={buttonStyles}>Hats</button>
        </li>
      </ul>
    </div>
  );
}
