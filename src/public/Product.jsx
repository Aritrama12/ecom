import React from 'react'



export default function Product() {
    const products = [
        { id: 1, name: "Speaker", price: 1000 },
        { id: 2, name: " Laptop ", price: 1000},
        { id: 3, name: " Mobile", price: 1000},
        { id: 4, name: "Headphones", price: 1000},
        { id: 5, name: "Tablet", price: 1000 },
    ]



    return (
        <>
            <div classNamem="row" >
                {products.map((product) => (
                    <div className="col-sm-3 mb-3" key={product.id}>
                        <div className="card">
                            < div className="card-body">
                                <h5 className="card-title"> {product.name} </h5>
                                <p className="card-text"> Price : {product.price}</p></div>
                        </div>
                    </div>

                ))}
            </div>
        </>

    )
}
