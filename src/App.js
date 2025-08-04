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
  return (
   <Routes>
    <Route path="/"element={<> <Navbar/><Home/></>}/>
    <Route path="/signup"element={<> <Navbar/><Signup/></>}/>
    <Route path="/Login"element={<> <Navbar/><Login/></>}/>
    <Route path="/cart"element={<> <Navbar/><Cart/></>}/>
    <Route path="/Product"element={<> <Navbar/><Productdetails/></>}/>
    <Route path="/Buynow"element={<> <Navbar/><Buynow/></>}/>
    <Route path="/Order"element={<> <Navbar/><Order/></>}/>
    <Route path="/Wishlist"element={<> <Navbar/><Wishlist/></>}/>


   </Routes>
  );
}

export default App;
