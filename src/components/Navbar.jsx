import React from "react";
import { Link } from "react-router-dom";
import Signup from "../public/Signup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Login from "../public/Login";
export default function Navbar() {
  return (
    <>

      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#0c63a1ff" }}
      >
        <div className="container-fluid">
          <Link style={{ textDecoration: "none" }} className="navbar-brand" to="#">
            <span className="fst-italic fw-bold"><i class="fa-solid fa-cart-shopping"/> SLIPMART</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link style={{ textDecoration: "none" }} className="nav-link active" aria-current="page" to="/">
                  Home <i className="fa-solid fa-house-user"/>
                </Link>
              </li>
              <li className="nav-item">
                <Link style={{ textDecoration: "none" }} className="nav-link" to="/Signup">
                  Sign up <i className="fa-solid fa-right-to-bracket"/>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  style={{ textDecoration: "none" }} className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>

                <ul className="dropdown-menu">
                  <li>
                    <a style={{ textDecoration: "none" }} className="dropdown-item" to="#">
                      Notification Preferences<i className="fa-solid fa-bell"/>
                    </a>
                  </li>

                  <li>
                    <a style={{ textDecoration: "none" }} className="dropdown-item" to="#">
                      24*7 Customer Help <i className="fa-solid fa-circle-question"></i>
                    </a>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <a style={{ textDecoration: "none" }} className="dropdown-item" to="#">
                      Advertise<i className="fa-solid fa-rectangle-ad"></i>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link style={{ textDecoration: "none" }} className="nav-link" to="/cart">
                  Add to cart <i className="fa-solid fa-cart-arrow-down"></i>
                </Link>
              </li>
            </ul>
            <div className="d-flex" role="search">
              <div className="input-group mx-2">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search for brands and products"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-primary"
                  type="button"
                  id="button-addon2"
                >
                  search<i className="fa-brands fa-searchengin"> </i>
                </button>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Log in<i className="fa-solid fa-user"></i>
            </button>
            <div className="btn-group dropstart">
              <button type="button" className="btn btn-danger dropdown-toggle ms-2" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa-solid fa-bars "/>
              </button>
              <ul className="dropdown-menu ">
                <li><Link className="dropdown-item" style={{ textDecoration: "none" }}to="#">My profile</Link></li>
                <li><Link className="dropdown-item" style={{ textDecoration: "none" }}to="#">Orders</Link></li>
                <li><Link className="dropdown-item" style={{ textDecoration: "none" }}to="#">Wishlist</Link></li>
                <li><Link className="dropdown-item" style={{ textDecoration: "none" }}to="#">Coupons</Link></li>
                <li><Link className="dropdown-item" style={{ textDecoration: "none" }}to="#">GiftCard</Link></li>
                <li><Link className="dropdown-item" style={{ textDecoration: "none" }}to="#">Logout</Link></li>

              </ul>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-2}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Log in
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <Login />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
