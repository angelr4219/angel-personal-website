import React from 'react';
import './footer.css'; // Import the CSS file

const Footer = () => {
    return (
        <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Angel Ramirez. All rights reserved.</p>
        <ul className="social-links">
          
        </ul>
      </div>
    </footer>
    );
};

export default Footer;