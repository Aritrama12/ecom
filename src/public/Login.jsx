import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="container mt-3 mb-3 card">
      <form className="card-body">
        <div className="mb-3">
          <label htmlFor="username">User_Name:</label>
          <input className="form-control" type="text" id="username" required />
        </div>
        <div className="mb-3">
          <label htmlFor="password">Password:</label>
          <input
            className="form-control"
            type="password"
            id="password"
            required
          />
        </div>
        <div className="mb-1">
          <button type="button" className="btn btn-success">
            Submit
          </button>
        </div>
        <p>
          Don't you have an account? <Link to="/signup">Signup</Link>
        </p>
      </form>
    </div>
  );
}
