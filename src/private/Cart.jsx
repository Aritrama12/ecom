import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Product from '../public/Product'

export default function Cart() {
  const [Auth, setAuth] = useState("true")

  const cart = JSON.parse(localStorage.getItem("cart")).length

  const updateCartInLocalStorage = (id, newQuantity) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const productIndex = cart.findImdex((item) => item.id === id);
    if (productIndex !== -1) {
      cart[productIndex].quantity = newQuantity;
    } else {
      console.error("Product not found in cart");
      return;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  const handleIncrement = (id, quantity) => {
    const newQty = quantity + 1;
    updateCartInLocalStorage(id, newQty);
  };
  const handleDecrement = (id, quantity) => {
    const newQty = quantity - 1;
    updateCartInLocalStorage(id, newQty);
  };
}

return (
  <>
    {cart === 0 ?
      (<>
        <div className='container text-center'>
          <div className='row m-3 justify-content-center align-items-center'>
            <div className="col-sm-12 mb-3">
              <img src="./img/empty_cart.webp" alt="empty cart" srcset="" style={{ maxWidth: "", height: "200px" }} />
            </div>
            <div className="col-sm-12 mb-3">
              <p className='fs-4'>Your cart is empty!</p>
              <p className='fs-6'>Add items to it now.</p>
            </div>
            {Auth === "true" ?
              (<>
                <div className="col-sm-12 mb-3">
                  <button type="submit" className="btn btn-success">
                    Shop Now
                  </button>
                </div>
              </>) :
              (<>
                <div className="col-sm-12 mb-3">
                  <button type="submit" className="btn btn-danger">
                    Login
                  </button>
                </div>
              </>)
            }
          </div>
        </div>
      </>) : (<>
        <div className='container text-center'>
          <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Shopping Cart</title>
            <link rel="stylesheet" href="styles.css" />
            <div className="cart-container">
              <h1>Shopping Cart</h1>
              <div className="cart-items">
                <div className="cart-item">
                  <p>Product 1</p>
                  <input type="number" className="quantity" defaultValue={Product} min={ } />
                  <button className="remove-btn">Remove</button>
                </div>
                <div className="cart-item">
                  <input type="number" className="quantity" defaultValue={1} min={1} />
                  <button className="remove-btn">Remove</button>
                </div>
              </div>
              <div className="cart-total">
                <h3>
                </h3>
              </div>
            </div>
          </>


        </div>
      </>)}
  </>
)

