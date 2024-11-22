import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import About from "./pages/About";
import Register from "./pages/Register";
import CartPage from "./pages/CartPage";
import BuyNow from "./pages/BuyNow";
import SingleProduct from "./pages/SingleProduct";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/buy" element={<BuyNow />}></Route>
          <Route path="/product/:id" element={<SingleProduct />}></Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
