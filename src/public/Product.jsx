import React from 'react'
import { Link } from 'react-router-dom'



export default function Product() {
    const products = [
        { id: 1, name: "Speaker", price: 1000, img: "../img/633aada8c007286f720669b9-audioengine-a2-plus-wireless-speaker.jpg", h:250 },
        { id: 2, name: " Laptop ", price: 50000, img: "../img/-original-imahd3zwben2yanx.webp" },
        { id: 3, name: " Mobile", price: 30000, img: "../img/-original-imahc7ez8cq55mah.webp" },
        { id: 4, name: "Headphones", price: 3000, img: "../img/-original-imah2hwdskpcp5we.webp" },
        { id: 5, name: "Tablet", price: 25000, img: "../img/-original-imahbzz49skh28tk.webp" },
        {id: 6, name: "TV", price: 15000, img: "../img/-original-imahdq4rrrs4khyg.webp", h:250 },
        { id: 7, name: "Refrigerator", price: 20000, img: "../img/-original-imah4zqzpmzaht4s.webp", h: 250},
        { id: 8, name: " Camera", price: 10000, img: "../img/-original-imagz5tqbawcrzhg.webp" },
        { id: 9, name: "Smartwatch", price: 5000, img: "../img/led-no-free-90-no-no-t-52-proprietary-os-sqinenterprise-no-original-imag6y8g6hpd9pga.webp" },
        { id: 10, name: "Air conditioner", price: 35000, img: "../img/-original-imaha7kbepa5abbv.webp" },
        { id: 11, name: "Vaccum cleaner", price: 35000, img: "../img/quick-clean-dx-quick-clean-dx-eureka-forbes-original-imag75wefptgezht.webp" },
        { id: 12, name: "Laptop Bag", price: 5000, img: "../img/laptopbag.webp" },
    ]



    return (
        <>
         <div className="container-fluid mt-5 px-4">
            <div className="row m-3">
                {products.map((product) => (
                    <div key={product.id} className="col-6 col-sm-4 col-md-3 col-lg-2">
                    <Link to={`/${product.id}`} style={{textDecoration:"None"}} className="col-sm-3 mb-3" key={product.id}>
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
                      src={product.img}
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

