import CartProvider from "./store/cart-context";
import "./index.css";
import MuiAppBar from "./components/MuiAppBar";
import Catalog from "./components/Catalog";
import CartModal from "./components/CartModal";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    if (isModalOpen) {
      setIsModalOpen(false);
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <CartProvider>
      <MuiAppBar openModal={handleToggleModal} />
      <main>
        {isModalOpen && (
          <CartModal isOpen={isModalOpen} onClosed={handleToggleModal} />
        )}
        <Catalog />
      </main>
    </CartProvider>
  );
}

export default App;
