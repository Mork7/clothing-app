import CartProvider from "./store/cart-context";
import "./index.css";
import MuiAppBar from "./components/MuiAppBar";
import Catalog from "./components/Catalog";
import CartModal from "./components/CartModal";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen(prev => {
      return !prev;
    })
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen(prev => {
      return !prev;
    })
  };

  return (
    <CartProvider>
      <MuiAppBar
        openModal={handleToggleModal}
        openSidebar={handleToggleSidebar}
      />
      <main className="mt-16">
        {isModalOpen && (
          <CartModal onClose={handleToggleModal} />
        )}
        {isSidebarOpen && (
          <Sidebar isOpen={isSidebarOpen}/>
        )}
        <Catalog />
      </main>
    </CartProvider>
  );
}

export default App;
