import React from "react";
import { Link } from "react-router-dom";

export default function Productdetails() {
    const product={
        product_Name :"Laptop",
        product_title:"Acer Aspire 3 Intel Celeron Dual Core - (8 GB/128 GB SSD/Windows 11 Home) A311-45 Thin and Light Laptop (11.6 inch, Steel Grey, 1.0 kg)",
        discount:"46%",
        original_price : "32,990",
        discounted_price:"17,766"
    } 

  return (
    <>
      <div className="container m-3 ">
        <div className="row justify-content-evenly">
          <div className="col-5">
            <div className="card" style={{ width: "100%" }}>
              <img
                src="./img/laptop image 1.jpg"
                className="card-img"
                alt="Laptop"
              />
              <div className="card-footer text-body-secondary d-flex justify-content-evenly">
                <Link to="#" style={{textDecoration:"None"}} className="card-link">
                  ADD TO CART
                </Link>
                <Link to="#" style={{textDecoration:"None"}} className="card-link">
                  BUY NOW
                </Link>
              </div>
            </div>
          </div>
          <div className="col-7">
            {product.product_Name}
            <div className="card-body">
              <h5 className="card-title">
                {product.product_title}
              </h5>
              <p className="card-text">₹{product.discounted_price} <span className="text-decoration-line-through">₹{product.original_price}</span> {product.discount} off</p>
              <p className="card-text">+ ₹29 Protect Promise Fee Learn more</p>
              <p className="card-text">Secure delivery by 6 Aug, Wednesday</p>
              <p className="card-text">Coupons for you</p>
              <p className="card-text">
                Special Price Get extra 7% off on 1 items (price inclusive of
                cashback/coupon)T&C
              </p>
              <p className="card-text">
                Available offers Bank Offer 5% cashback on Flipkart
              </p>
              <p className="card-text">
                Bank Offer 5% cashback on Axis Bank Credit Card upto ₹4,000 per
                statement quarter T&C
              </p>
              <p className="card-text">
                Bank Offer 5% cashback on Axis Bank Flipkart Debit Card up to
                ₹750 T&C
              </p>
              <p className="card-text">
                Bank Offer 10% off up to ₹1,500 on BOBCARD EMI Transactions of 6
                months and above tenures, Min TxnValue:₹7,500 T&C
              </p>
              <p className="card-text">View 3 more offers</p>

              <p className="card-text">
                <small className="text-body-secondary">
                  3.9*,675 Ratings & 180 Reviews
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
