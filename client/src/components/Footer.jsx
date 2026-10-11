import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <h4>Heaven Traders</h4>
          <p>Quality products, honest prices and service you can rely on.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/product">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4>Get in touch</h4>
          <ul>
            <li><i className="fa-solid fa-envelope"></i> contact@example.com</li>
            <li><i className="fa-solid fa-phone"></i> +1 234 567 890</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Heaven Traders. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
