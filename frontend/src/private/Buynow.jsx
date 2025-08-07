import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { message } from 'antd';
import PaymentForm from "./PaymentForm";

export default function Buynow() {
  const [messageApi, contextHolder] = message.useMessage();
  const handleplaceorder=(e)=>{
    e.preventDefault();
    messageApi.open({
      type: 'success',
      content: 'Order placed Succesfully',
    });
  }
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const fetchCart = () => {
      const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(savedCart);
    };

    fetchCart();

    window.addEventListener("cartUpdated", fetchCart);

    return () => {
      window.removeEventListener("cartUpdated", fetchCart);
      
    };
  }, []);

  const updateCartInLocalStorage = (id, newQuantity) => {
    let updatedCart = [...cart];
    const index = updatedCart.findIndex((item) => item.id === id);

    if (newQuantity > 0) {
      if (index !== -1) {
        updatedCart[index].quantity = newQuantity;
      }
    } else {
      if (index !== -1) {
        updatedCart.splice(index, 1);
      }
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const handleIncrement = (id, quantity) => {
    updateCartInLocalStorage(id, quantity + 1);
  };

  const handleDecrement = (id, quantity) => {
    updateCartInLocalStorage(id, quantity - 1);
  };

  return (
    <div className="container mt-3">
      {contextHolder}
      <div className="row justify-content-evenly">
        <div className="col-sm-7 mb-3 mb-sm-0 h-100">
          <div className="card-body">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    LOGIN
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <Link style={{ textDecoration: "none" }} to="/Login">Login to place order </Link>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    DELIVERY ADDRESS
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the DELIVERY ADDRESS page.</strong>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Order Summary
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="shadow-sm p-3 d-flex flex-row align-items-center mb-3"
                      >
                        <img
                          src={item.img}
                          alt={item.name}
                          style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "cover",
                          }}
                          className="rounded"
                        />
                        <div className="ms-3 flex-grow-1">
                          <h5 className="mb-1">{item.name}</h5>
                          <p className="mb-1 fs-6">Price: ₹{item.price}</p>
                          <div className="btn-group btn-group-sm" role="group">
                            <button
                              className="btn btn-danger"
                              onClick={() =>
                                handleIncrement(item.id, item.quantity)
                              }
                            >
                              +
                            </button>
                            <div className="input-group-text">
                              {item.quantity}
                            </div>
                            <button
                              className="btn btn-success"
                              onClick={() =>
                                handleDecrement(item.id, item.quantity)
                              }
                            >
                              -
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Payment Options
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <PaymentForm/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">PRICE DETAILS</h5>
              <ul className="list-group list-group-flush">
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    {item.name}
                    <span>₹{item.price * item.quantity}</span>
                  </li>
                ))}
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <strong>Total</strong>
                  <strong>
                    ₹
                    {cart.reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    )}
                  </strong>
                </li>
              </ul>
            </div>
            <div className="card-footer m-3">
              <Link to="/PaymentForm" style={{textDecoration:"none"}} className="btn btn-success float-sm-end">
                PLACE ORDER
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
