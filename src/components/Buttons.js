import React from 'react';
import './Buttons.css'; // Import the CSS file for styling

const Button = ({ text, onClick, type = 'button', styleType = 'primary' }) => {
  return (
    <button className={`button ${styleType}`} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
