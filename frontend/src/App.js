import { Routes, Route } from "react-router-dom";
//import dotenv from 'dotenv'
import Home from "./public/Home";
import Signup from "./public/Signup";
import Login from "./public/Login";
import Cart from "./private/Cart";
import Productdetails from "./public/Productdetails";
import Buynow from "./private/Buynow";
import Order from "./private/Order";
import Wishlist from "./private/Wishlist";
import PaymentForm from './private/PaymentForm';
import Privacypolicy from "./public/Privacypolicy";
import TnC from "./public/TnC";

import Main from "./components/Main";
import { useEffect, useState } from "react";

//dotenv.config()
function App() {

  const [products, setProducts] = useState([]);

  const Product_Data = async () => {
    await fetch(`${process.env.REACT_APP_BACKEND}api/product/all`)
    .then(res => res.json())
    .then(data => setProducts(data))
    .catch(err => console.log(err))
  }

  const Cart_Data = () => {
    // fetch(`${process.env.REACT_APP_BACKEND}api/product/all`)
    // .then(res => res.json())
    // .then(data => setProducts(data))
    // .catch(err => console.log(err))
  }

  useEffect(() => {
    products.length === 0 && Product_Data();
  }, [])

  localStorage.setItem("product",JSON.stringify(products))

  return (
    <>
      
    <Routes>

      <Route path="/*" exact element={<><Main component={<Home />}/></>} />

      <Route path="/">
        <Route path="" exact element={<><Main component={<Home />}/></>} />
        <Route path="signup" exact element={<><Main component={<Signup />}/></>} />
        <Route path="login" exact element={<><Main component={<Login />}/></>} />
        <Route path="cart" exact element={<><Main component={<Cart />}/></>} />
        <Route path="/product">
          <Route path=":id" exact element={<><Main component={<Productdetails />}/></>} />
        </Route>
        <Route path="buynow" exact element={<><Main component={<Buynow />}/></>} />
        <Route path="order" exact element={<><Main component={<Order />}/></>} />
        <Route path="privacypolicy" exact element={<> <Main component={<Privacypolicy />}/></>} />
        <Route path="TnC" exact element={<> <Main component={<TnC/>}/> </>} />
      </Route>

      <Route path="/auth">
        <Route path="wishlist" exact element={<><Main component={<Wishlist />}/> </>} />
      </Route>
    </Routes>

    </>
      );
}

export default App;
