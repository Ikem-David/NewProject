import { Routes, Route } from "react-router-dom";

import Shop from "./pages/shop";
import Contact from "./pages/contactus";
import Home from "./pages/home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;