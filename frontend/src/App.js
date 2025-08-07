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
import  Footer from "./components/Footer";
import PaymentPage from "./private/PaymentForm";

function App() {
<h1>
</h1>
  const products = [
    { id: 1, name: "Speaker", price: 2799, img: "/img/633aada8c007286f720669b9-audioengine-a2-plus-wireless-speaker.jpg" },
    { id: 2, name: " Laptop ", price: 55000, img: "/img/-original-imahd3zwben2yanx.webp" },
    { id: 3, name: " Mobile", price: 33599, img: "/img/-original-imahc7ez8cq55mah.webp" },
    { id: 4, name: "Headphones", price: 1799, img: "/img/-original-imah2hwdskpcp5we.webp" },
    { id: 5, name: "Tablet", price: 25999, img: "/img/-original-imahbzz49skh28tk.webp" },
    { id: 6, name: "TV", price: 15999, img: "/img/-original-imahdq4rrrs4khyg.webp" },
    { id: 7, name: "Refrigerator", price: 23999, img: "/img/-original-imah4zqzpmzaht4s.webp" },
    { id: 8, name: " Camera", price: 11999, img: "/img/-original-imagz5tqbawcrzhg.webp" },
    { id: 9, name: "Smartwatch", price: 5799, img: "/img/led-no-free-90-no-no-t-52-proprietary-os-sqinenterprise-no-original-imag6y8g6hpd9pga.webp" },
    { id: 10, name: "Air conditioner", price: 35999, img: "/img/-original-imaha7kbepa5abbv.webp" },
    { id: 11, name: "Vaccum cleaner", price: 34999, img: "/img/quick-clean-dx-quick-clean-dx-eureka-forbes-original-imag75wefptgezht.webp" },
    { id: 12, name: "Laptop Bag", price: 1499, img: "/img/laptopbag.webp" },
     { id: 13, name: "Baggy jeans", price: 479, img: "/img/32-pc-mt-black-baggy-05-maahit-original-imahcqkdtzvjuhmm.webp" },
    { id: 14, name: " Men T-Shirt ", price: 599, img: "/img/m-os-skate-maroon-m-lgr-fashion-original-imah9ba2snksq9at.webp" },
    { id: 15, name: " Men's Kurta", price: 799, img: "/img/xl-front-print-kurta-short-nofilter-original-imaha2t4guh7gh4p.webp" },
    { id: 16, name: "Women Printed Kurta", price: 899, img: "/img/s-purple-thread-lace-prisca-original-imahdg299zuvjjyp.webp" },
    { id: 17, name: "Silk Blend Saree(Gold)", price: 2599, img: "/img/free-zimmy-choo-designer-saree-pd-cloth-villa-unstitched-original-imahbprgascqp8pj.webp" },
    { id: 18, name: "Silk Saree(Purple)", price: 1599, img: "/img/free-0184-clemira-unstitched-original-imahef3z7a37gsu9.webp" },
    { id: 19, name: "Scooter For Kids", price: 1899, img: "/img/mercury-kick-scooter-for-kids-for-3-years-adjustable-height-pvc-original-imahbgsygjvmyzgg.webp" },
    { id: 20, name: "Naruto Kunai Shuriken", price: 699, img: "/img/naruto-knife-minato-kunai-shuriken-and-head-band-ninja-combo-original-imahb5fsngajgzzg.webp" },
    { id: 21, name: "Water Gun For Kids ", price: 500, img: "/img/plastic-blaze-storm-manual-soft-bullet-gun-toy-with-10-safe-soft-original-imag9xz3rp8psgp8.webp" },
    { id: 22, name: "Mask", price: 299, img: "/img/free-size-vendetta-character-mask-for-party-pack-of-2-black-original-imahfxhzyu6g3y5n.webp" },
    { id: 23, name: "Earth Puzzle", price: 399, img: "/img/60-wooden-earth-jigsaw-puzzle-60-pcs-webby-original-imagyc8hsdztzdzb.webp" },
    { id: 24, name: "PARTY MIDLINKERZ", price: 499, img: "/img/3-100-solid-animals-kit-twisting-balloons-with-1-air-pump-100pcs-original-imagnhwpxgfy8gzh.webp" }
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
      <Route path="/Footer" exact element={<> <Navbar /><Footer /></>} />
    
    
    </Routes>
  );
}

export default App;
