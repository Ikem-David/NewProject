import { Routes, Route } from "react-router-dom";

import Shop from "./pages/shop";
import Contact from "./pages/contactus";
import Home from "./pages/home";
import { CartProvider } from "./components/Cart/cart";

const App = () => {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </CartProvider>
  );
}

export default App;