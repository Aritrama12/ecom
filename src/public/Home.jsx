import React from 'react'
import Product from './Product'

export default function Home() {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={3}
            aria-label="Slide 4"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./img/28ce80d034b9c679.webp" className="d-block w-100"  alt="Bed" />
          </div>
          <div className="carousel-item">
            <img src="./img/c9c7b904fae51a5a.webp" className="d-block w-100" alt="Sofa" />
          </div>
          <div className="carousel-item">
            <img src="./img/006c133753e644da.webp" className="d-block w-100" alt="Plane" />
          </div>
          <div className="carousel-item">
            <img src="./img/06418e5fbc0a84a5.webp" className="d-block w-100" alt="Plane" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      

      <Product/>
      
    </>
  )
}
