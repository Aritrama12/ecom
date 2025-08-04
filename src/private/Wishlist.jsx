import React, { useState } from 'react'



export default function Wishlist() {
  const [Auth, setAuth] = useState("false")

  return (
    <div className='container text-center'>
      <div className='row m-3 justify-content-center align-items-center'>
        <div className="col-sm-12 mb-3">
          
        </div>
        <div className="col-sm-12 mb-3">
          <p className='fs-4'>Your wishlist is empty!</p>
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
                Login to continue
              </button>
            </div>
          </>)
        }
      </div>
    </div>
  )
}