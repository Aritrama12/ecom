import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Cart() {
  const [Auth, setAuth] = useState("false")

  return (
    <div className='container text-center'>
      <div className='row m-3 justify-content-center align-items-center'>
        <div className="col-sm-12 mb-3">
          <img src="./img/empty_cart.webp" alt="empty cart" srcset="" height={"200px"} />
        </div>
        <div className="col-sm-12 mb-3">
          <p className='fs-4'>Your cart is empty!</p>
          <p className='fs-6'>Add items to it now.</p>
        </div>
        { Auth==="true" ?
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
  )
}
