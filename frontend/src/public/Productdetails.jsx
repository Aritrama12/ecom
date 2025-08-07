import React, { useState, useEffect, use } from "react";
import { Link, useParams } from "react-router-dom";


export default function Productdetails() {
  const { id } = useParams()

  const products = JSON.parse(localStorage.getItem("product")) || []

  const product = products.find(item => item.id === parseInt(id)) || "";

  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setQuantity(existingProduct.quantity);
    }
  }, []);

  const updateCartInLocalStorage = (newQuantity) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const productIndex = cart.findIndex((item) => item.id === product.id);

    if (newQuantity > 0) {
      if (productIndex !== -1) {
        cart[productIndex].quantity = newQuantity;
      } else {
        cart.push({ ...product, quantity: newQuantity });
      }
    } else {
      if (productIndex !== -1) {
        cart.splice(productIndex, 1);
      }
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const handleAddToCart = () => {
    setQuantity(1);
    updateCartInLocalStorage(1);
  };

  const handleIncrement = () => {
    const newQty = quantity + 1;
    setQuantity(newQty);
    updateCartInLocalStorage(newQty);
  };

  const handleDecrement = () => {
    const newQty = quantity - 1;
    setQuantity(newQty);
    updateCartInLocalStorage(newQty);
  };

  return (
    <>
      {product !== "" ?
        (<div className="container m-3">
          <div className="row justify-content-evenly">
            <div className="col-5">
              <div className="card" style={{ width: "100%" }}>
                <img
                  src={product.img}
                  className="card-img m-2"
                  alt={product.name}
                  style={{ maxHeight: "200px", objectFit: "contain" }}
                />
                <div className="card-footer text-body-secondary d-flex justify-content-evenly">
                  {quantity === 0 ? (
                    <button onClick={handleAddToCart} className="btn btn-outline-primary m-2">
                      ADD TO CART
                    </button>
                  ) : (
                    <div className="d-flex align-items-center">
                      <button onClick={handleDecrement} className="btn btn-outline-secondary">
                        -
                      </button>
                      <span className="mx-2">{quantity}</span>
                      <button onClick={handleIncrement} className="btn btn-outline-secondary">
                        +
                      </button>
                    </div>
                  )}
                  <Link to="/buynow" style={{textDecoration:"none"}} className="btn btn-success m-2">BUY NOW</Link>
                </div>
              </div>
            </div>

            <div className="col-7">
              <h4>{product.name}</h4>
              <div className="card-body">
                <h5 className="card-title">{product.product_title}</h5>
                <p className="card-text">
                  ₹{product.discounted_price}{" "}
                  <span className="">
                    {product.price}
                  </span>{" "}
                </p>
                <p className="card-text">Available offers:</p>
                <ul>
                  <li>Bank Offer: 5% cashback on Flipkart</li>
                  <li>Bank Offer: 5% cashback on Axis Bank Credit Card up to ₹4,000</li>
                  <li>Bank Offer: 5% cashback on Axis Bank Flipkart Debit Card up to ₹750</li>
                  <li>Bank Offer: 10% off up to ₹1,500 on BOBCARD EMI (Min Txn ₹7,500)</li>
                  <li>View 3 more offers</li>
                </ul>
                <p className="card-text">
                  <small className="text-body-secondary">Review: <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></small>
                </p>
              </div>
            </div>
          </div>
        </div>) :
        (<div className="container text-center">
          <div className='row m-3 justify-content-center align-items-center'>
            <div className="col">
              <img src="/img/empty_cart.webp" alt="empty cart" srcset="" style={{ maxWidth: "", height: "200px" }} />
            </div>
            <div className="col-sm-12 mb-3">
              <p className='fs-4'>No Product Found</p>
              <Link to={'/'} style={{ textDecoration: "none" }} className='fs-6'>Back To Home Page</Link>
            </div>
          </div>
        </div>)}
    </>
  );
}
