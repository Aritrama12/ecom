import React from "react";

export default function Buynow() {
  return (
    <div className="container m-3">
      <div className="row justify-content-evenly">
        <div className="col-sm-6 mb-3 mb-sm-0 h-100">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">PRICE DETAILS</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <p className="card-text">Go somewhere</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
