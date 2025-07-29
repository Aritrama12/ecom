import React from 'react'
import { Link } from 'react-router-dom'
import Signup from '../public/Signup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Navbar() {

  return (

    <>

      <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#0c63a1ff"}}>

        <div className="container-fluid">

          <Link className="navbar-brand" to="#">

            SLIPKART

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

                <Link className="nav-link active" aria-current="page" to="/">

                  Home

                </Link>

              </li>

              <li className="nav-item">

                <Link className="nav-link" to="/Signup">

                  Sign up

                </Link>

              </li>

              <li className="nav-item dropdown">

             <a

    className="nav-link dropdown-toggle"

    to="#"

    role="button"

    data-bs-toggle="dropdown"

    aria-expanded="false"

  >

   More

  </a>

  <ul className="dropdown-menu">

    <li>

      <a className="dropdown-item" to="#">

        Notification Preferences

      </a>

    </li>

    <li>

      <a className="dropdown-item" to="#">

        24*7 Customer Help

      </a>

    </li>

    <li>

      <hr className="dropdown-divider" />

    </li>

    <li>

      <a className="dropdown-item" to="#">

        Advertise

      </a>

    </li>

  </ul>

</li>

              <li className="nav-item">

                <Link className="nav-link" to="#">

                  Add to cart

                </Link>

              </li>

            </ul>

            <form className="d-flex" role="search">

              <input

                className="form-control me-2"

                type="search"

                placeholder="Search for products,brands and More"

                aria-label="Search"

              />

              <button className="btn btn-outline-success" type="submit">

                Search

              </button>

            </form>

          </div>

        </div>

        <>

  {/* Button trigger modal */}

  <button

    type="button"

    className="btn btn-primary"

    data-bs-toggle="modal"

    data-bs-target="#exampleModal"

  >

    Log in

  </button>

  {/* Modal */}

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

        <div className="modal-body">Get access to your Orders, Wishlist and Recommendations</div>

        <div className="modal-footer">

          <button

            type="button"

            className="btn btn-secondary"

            data-bs-dismiss="modal"

          >

            Are you already a Customer?

          </button>

          <button type="button" className="btn btn-primary">

            Sign up

          </button>

        </div>

      </div>

    </div>

  </div>

</>

      </nav>

    </>

  )

}