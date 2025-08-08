import React from 'react'
import { Link } from 'react-router-dom'

export default function Product() {

  const products = JSON.parse(localStorage.getItem("product")) || []

  return (
    <>
      <div className="container-fluid mt-5 px-4">
        <div className="row m-3">
          {products.map((product) => (
            <div key={product.id} className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
              <Link to={`/product/${product._id}`} style={{ textDecoration: "None" }} className="col-sm-3 mb-3" key={product.id}>
                <div className="card h-100 shadow-sm" style={{ borderRadius: "1rem" }}>
                  <div className="card-header text-center fw-bold text-white"
                    style={{
                      background: "#4de1b5ff",
                      borderTopLeftRadius: "1rem",
                      borderTopRightRadius: "1rem"
                    }}>
                    {product.name}
                  </div>
                  <div className="card-body d-flex align-items-center justify-content-center p-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="img-fluid"
                      style={{ maxHeight: "130px", objectFit: "contain" }}
                    />
                  </div>
                  <div className="card-footer text-center">
                    <span className="fw-bold text-dark">₹{product.price}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>

  )
}

