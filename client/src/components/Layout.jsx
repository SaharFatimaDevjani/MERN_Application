import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className="page">
    <Header />
    <main className="page-main">{children}</main>
    <Footer />
  </div>
);

export default Layout;
