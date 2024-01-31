import CartProvider  from "./store/cart-context";
import "./index.css";
import Header from "./components/Header";
import Catalog from './components/Catalog';

function App() {
  return (
    <CartProvider>
      <Header />
      <main>
        <Catalog />
      </main>
    </CartProvider>
  );
}

export default App;
