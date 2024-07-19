// Footer.js
import React from 'react';
import './Footer.css'; // Import CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} School Cafeteria. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
