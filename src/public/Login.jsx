import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [Uname, setUname] = useState("");
  const [Pass, setPass] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: Uname,
      password: Pass,
    };
  };
  return (
    <div className="container mt-3 mb-3 card">
      <form className="card-body" onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="username">User_Name:</label>
          <input
            className="form-control"
            type="text"
            id="username"
            required
            value={Uname}
            onChange={(e) => setUname(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password">Password:</label>
          <input
            className="form-control"
            type="password"
            id="password"
            required
            value={Pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <div className="mb-1">
          <button type="submit" className="btn btn-success">
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
