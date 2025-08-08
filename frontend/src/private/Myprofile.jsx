// src/pages/ProfilePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProfilePage = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div className="container mt-5">
      <div className="card text-center">
        <div className="card-body">
          <h3 className="card-title">User Profile</h3>
          <p className="card-text text-muted">You are not logged in.</p>
          <button className="btn btn-primary" onClick={handleLoginRedirect}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

