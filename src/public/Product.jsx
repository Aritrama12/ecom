import React from 'react'
import { Link } from 'react-router-dom'



export default function Product() {
    const products = [
        { id: 1, name: "Speaker", price: 1000, img: "../img/633aada8c007286f720669b9-audioengine-a2-plus-wireless-speaker.jpg", h:250 },
        { id: 2, name: " Laptop ", price: 50000, img: "../img/-original-imahd3zwben2yanx.webp" },
        { id: 3, name: " Mobile", price: 30000, img: "../img/-original-imahc7ez8cq55mah.webp" },
        { id: 4, name: "Headphones", price: 3000, img: "../img/-original-imah2hwdskpcp5we.webp" },
        { id: 5, name: "Tablet", price: 25000, img: "../img/-original-imahbzz49skh28tk.webp" },
    ]



    return (
        <>
            <div className="row m-3" >
                {products.map((product) => (
                    <Link to={`/${product.id}`} style={{textDecoration:"None"}} className="col-sm-3 mb-3" key={product.id}>
                        <div class="card text-center" style={{height:"30%",}}>
                            <div class="card-header">
                                {product.name}
                            </div>
                            <div class="card-body">
                                <img src={product.img} className="card-img-top" alt={product.name} style={{height:product.h}}/>
                            </div>
                            <div class="card-footer text-body-secondary">
                                Price : {product.price}
                            </div>
                        </div>
                    </Link>

                ))}
            </div>
        </>

    )
}
