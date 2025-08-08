import React, { useState } from "react";
import { Link } from "react-router-dom";
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [Email, setEmail] = useState("");
  const [Pass, setPass] = useState("");

   const natigate = useNavigate();

  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Login successful',
    });
  };

  const usererror = () => {
    messageApi.open({
      type: 'error',
      content: 'User Login failed',
    });
  };

  const passerror = () => {
    messageApi.open({
      type: 'error',
      content: 'Invalid password',
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email: Email,
      password: Pass,
    };
    try {
      await fetch(`${process.env.REACT_APP_BACKEND}api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Login successful") {
          success();
          localStorage.setItem("user", JSON.stringify(data.user.token));
          setTimeout(() => {
            natigate('/');
          }, 1000);
        } else {
          passerror();
        }
      })
      .catch((err) => {
        usererror();
      });
    } catch (error) {
      usererror();
      return;
    }
  };

  return (
    <>
    {contextHolder}
      <div className="container mt-3 mb-3 card">
        <form className="card-body" onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="username">User Name:</label>
            <input
              className="form-control"
              type="text"
              id="username"
              required
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
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
    </>
  );
}
