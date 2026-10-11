import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Layout from './components/Layout';

import './App.css';

// Start each page at the top when navigating between routes
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const NotFound = () => (
  <Layout>
    <section className="section">
      <div className="wrap not-found">
        <h1>404</h1>
        <p className="muted">Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className="btn-primary">Back to Home</Link>
      </div>
    </section>
  </Layout>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
