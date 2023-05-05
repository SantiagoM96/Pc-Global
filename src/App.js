import "./App.scss";
import Nav from "./components/Navbar/NavBar";
import ItemListContainer from "./components/Item/ItemListContainer";
import ItemDetailContainer from "./components/Item/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./data/Context/CartContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider >
          <Toaster />
          <Nav />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={"All Our Products"} />} />
            <Route path="/category/:categoryId" element={<ItemListContainer greeting={"Products By Category"} />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="*" element={<h1>Not Found</h1>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
