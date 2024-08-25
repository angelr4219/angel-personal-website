// src/components/Header.js

import React from 'react';
import './header.css'; // Import the CSS file

export const Header = () => {
    return (
      <div className="container">
        <div className="left"></div>
        <div className="center">
          <div>About</div>
          <div>Resume</div>
          <div>Contact Us</div>
          <div>LinkedIn</div>
          <div>GitHub</div>
        </div>
        <div className="right"></div>
      </div>
    );
  };

export default Header;
