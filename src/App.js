import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./public/Home";
import Signup from "./public/Signup";
import Login from "./public/Login";
import Cart from "./private/Cart";
import Productdetails from "./public/Productdetails";
import Buynow from "./private/Buynow";
import Order from "./private/Order";
import Wishlist from "./private/Wishlist";

function App() {

  const products = [
    { id: 1, name: "Speaker", price: 1000, img: "/img/633aada8c007286f720669b9-audioengine-a2-plus-wireless-speaker.jpg" },
    { id: 2, name: " Laptop ", price: 50000, img: "/img/-original-imahd3zwben2yanx.webp" },
    { id: 3, name: " Mobile", price: 30000, img: "/img/-original-imahc7ez8cq55mah.webp" },
    { id: 4, name: "Headphones", price: 3000, img: "/img/-original-imah2hwdskpcp5we.webp" },
    { id: 5, name: "Tablet", price: 25000, img: "/img/-original-imahbzz49skh28tk.webp" },
    { id: 6, name: "TV", price: 15000, img: "/img/-original-imahdq4rrrs4khyg.webp" },
    { id: 7, name: "Refrigerator", price: 20000, img: "/img/-original-imah4zqzpmzaht4s.webp" },
    { id: 8, name: " Camera", price: 10000, img: "/img/-original-imagz5tqbawcrzhg.webp" },
    { id: 9, name: "Smartwatch", price: 5000, img: "/img/led-no-free-90-no-no-t-52-proprietary-os-sqinenterprise-no-original-imag6y8g6hpd9pga.webp" },
    { id: 10, name: "Air conditioner", price: 35000, img: "/img/-original-imaha7kbepa5abbv.webp" },
    { id: 11, name: "Vaccum cleaner", price: 35000, img: "/img/quick-clean-dx-quick-clean-dx-eureka-forbes-original-imag75wefptgezht.webp" },
    { id: 12, name: "Laptop Bag", price: 5000, img: "/img/laptopbag.webp" },
  ]

  localStorage.setItem("product",JSON.stringify(products))

  return (
    <Routes>
      <Route path="/" exact element={<> <Navbar /><Home /></>} />
      <Route path="/*" exact element={<> <Navbar /><Home /></>} />
      <Route path="/signup" exact element={<> <Navbar /><Signup /></>} />
      <Route path="/Login" exact element={<> <Navbar /><Login /></>} />
      <Route path="/cart" exact element={<> <Navbar /><Cart /></>} />
      <Route path="/product/:id" exact element={<> <Navbar /><Productdetails /></>} />
      <Route path="/Buynow" exact element={<> <Navbar /><Buynow /></>} />
      <Route path="/Order" exact element={<> <Navbar /><Order /></>} />
      <Route path="/Wishlist" exact element={<> <Navbar /><Wishlist /></>} />
    </Routes>
  );
}

export default App;
