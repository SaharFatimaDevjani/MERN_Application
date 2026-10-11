import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './logo.png';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/product', label: 'Products' },
  { to: '/contact', label: 'Contact' },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap nav-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img src={logo} alt="" />
          <span>Heaven Traders</span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className={`burger ${open ? 'is-open' : ''}`}><span></span></span>
        </button>

        <nav className={`nav-links ${open ? 'is-open' : ''}`}>
          <ul>
            {links.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end onClick={() => setOpen(false)}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
