import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';


const Header = () => {
  return (
    
    <div className="main-nav">
      <div className='logo'>
        <img src={logo} alt="logo" />
        <h1 className='logoText'>Heaven Traders</h1>
      </div>
      <div className='navbar'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/product">Products</Link></li>
          <li><Link to="/contact">Contact</Link></li>
      </div>
    </div>
  );
}

export default Header;
