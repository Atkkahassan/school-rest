// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS file

const Navbar = ({ isLoggedIn, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          School Cafeteria
        </Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Home
          </Link>
          {isLoggedIn ? (
            <>
              <Link to="/admin" className="navbar-link">
                Admin Dashboard
              </Link>
              <Link to="/students" className="navbar-link">
                Registered Students
              </Link>
              <button className="logout-button" onClick={onLogout}>
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="navbar-link">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
