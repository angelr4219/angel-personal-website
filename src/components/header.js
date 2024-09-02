// src/components/Header.js

import React from 'react';
import './header.css'; // Import the CSS file
import Button from './Buttons'; // Import the Button component

export const Header = () => {
    const handleNavigation = (url) => {
        window.location.href = url;
      };
    return (
      <div className="container">
        <div className="left"></div>
        <div className="center">
        <Button text="About" styleType="secondary" onClick={() => handleNavigation('https://chatgpt.com/c/3c215792-7c34-477d-b326-62f7fb772375')} />
        <Button text="Resume" styleType="secondary" onClick={() => handleNavigation('https://chatgpt.com/c/3c215792-7c34-477d-b326-62f7fb772375')} />
        <Button text="LinkedIn" styleType="secondary" onClick={() => handleNavigation('https://www.linkedin.com/in/angel-ramirez-458915253/')} />
        <Button text="GitHub" styleType="secondary" onClick={() => handleNavigation('https://github.com/angelr4219')} />
        </div>
        <div className="right"></div>
      </div>
    );
  };

export default Header;
