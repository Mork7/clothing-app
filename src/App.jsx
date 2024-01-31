import CartProvider  from "./store/cart-context";
import "./index.css";
import MuiAppBar from "./components/MuiAppBar";
import Catalog from './components/Catalog';

function App() {
  return (
    <CartProvider>
      <MuiAppBar />
      <main>
        <Catalog />
      </main>
    </CartProvider>
  );
}

export default App;
