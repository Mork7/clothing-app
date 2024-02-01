import CartProvider from "./store/cart-context";
import "./index.css";
import MuiAppBar from "./components/MuiAppBar";
import Catalog from "./components/Catalog";
import CartModal from "./components/CartModal";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeScreen, setActiveScreen] = useState("women");

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

  const handleSidebarClick = (buttonId) => {
    setActiveScreen(buttonId);
    setIsSidebarOpen(false)
  }

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
          <Sidebar isOpen={isSidebarOpen} onButtonClick={handleSidebarClick}/>
        )}
        {activeScreen === "women" &&  <Catalog activeScreen={activeScreen} />}
        {activeScreen === "men" &&  <Catalog activeScreen={activeScreen} />}
        {activeScreen === "seasonal" &&  <Catalog activeScreen={activeScreen} />}
        {activeScreen === "children" &&  <Catalog activeScreen={activeScreen} />}
        {activeScreen === "shoes" &&  <Catalog activeScreen={activeScreen} />}
        {activeScreen === "hats" &&  <Catalog activeScreen={activeScreen} />}
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
