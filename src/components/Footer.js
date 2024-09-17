
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <h4>About CrickBidders</h4>
          <p>
            CrickBidders is your go-to platform for managing cricket matches and auctions. Whether you're organizing or participating, we provide the best tools to enhance your cricket experience.
          </p>
        </div>

        {/* Contact Section */}
        <div className="footer-section1">
          <h4>Contact Us</h4>
          <ul>
            <li><a href="https://www.facebook.com/crickbidders" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li>Email: <a href="mailto:support@crickbidders.com">support@crickbidders.com</a></li>
            <li>Call: <a href="tel:+94123456789">+94 123 456 789</a></li>
          </ul>
        </div>

        {/* Copyright Section */}
        <div className="footer-bottom">
          <p>&copy; 2024 CrickBidders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
