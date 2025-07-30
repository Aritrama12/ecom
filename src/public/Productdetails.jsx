import React, { useState, useEffect } from "react";

export default function Productdetails() {
  const product = {
    id: "laptop-001",
    product_Name: "Laptop",
    product_title:
      "Acer Aspire 3 Intel Celeron Dual Core - (8 GB/128 GB SSD/Windows 11 Home) A311-45 Thin and Light Laptop (11.6 inch, Steel Grey, 1.0 kg)",
    discount: "46%",
    original_price: "32,990",
    discounted_price: "17,766",
  };

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
    <div className="container m-3">
      <div className="row justify-content-evenly">
        <div className="col-5">
          <div className="card" style={{ width: "100%" }}>
            <img
              src="./img/laptop image 1.jpg"
              className="card-img"
              alt="Laptop"
            />
            <div className="card-footer text-body-secondary d-flex justify-content-evenly">
              {quantity === 0 ? (
                <button onClick={handleAddToCart} className="btn btn-outline-primary">
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
              <button className="btn btn-primary">BUY NOW</button>
            </div>
          </div>
        </div>

        <div className="col-7">
          <h4>{product.product_Name}</h4>
          <div className="card-body">
            <h5 className="card-title">{product.product_title}</h5>
            <p className="card-text">
              ₹{product.discounted_price}{" "}
              <span className="text-decoration-line-through">
                ₹{product.original_price}
              </span>{" "}
              {product.discount} off
            </p>
            <p className="card-text">+ ₹29 Protect Promise Fee Learn more</p>
            <p className="card-text">Secure delivery by 6 Aug, Wednesday</p>
            <p className="card-text">Coupons for you</p>
            <p className="card-text">
              Special Price: Get extra 7% off on 1 item (price inclusive of cashback/coupon)
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
              <small className="text-body-secondary">3.9★ | 675 Ratings & 180 Reviews</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
