import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import home1 from './home1.jpg';
import home2 from './home2.jpg';
import banner from './banner.avif';

const features = [
  { icon: 'fa-truck-fast', title: 'Fast Delivery', text: 'Orders are packed the same day and shipped quickly to your doorstep.' },
  { icon: 'fa-shield-halved', title: 'Trusted Quality', text: 'Every product is checked by our team before it reaches our shelves.' },
  { icon: 'fa-headset', title: 'Friendly Support', text: 'Questions about an order? Our team is here to help, seven days a week.' },
];

const Home = () => {
  return (
    <Layout>
      <PageHero
        large
        image={banner}
        title="Quality products, delivered with care"
        subtitle="Heaven Traders brings you a hand-picked catalogue of everyday essentials at honest prices."
      >
        <div className="hero-actions">
          <Link to="/product" className="btn-primary">Browse Products</Link>
          <Link to="/contact" className="btn-outline-light">Contact Us</Link>
        </div>
      </PageHero>

      <section className="section">
        <div className="wrap">
          <div className="section-title">
            <span className="eyebrow">Why choose us</span>
            <h2>Shopping made simple</h2>
            <p className="muted">We focus on the things that matter: great products, fair prices and service you can count on.</p>
          </div>
          <div className="feature-grid">
            {features.map((f) => (
              <div className="feature" key={f.title}>
                <div className="feature__icon"><i className={`fa-solid ${f.icon}`}></i></div>
                <h3>{f.title}</h3>
                <p className="muted">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="wrap split">
          <div>
            <span className="eyebrow">Our store</span>
            <h2>Everything you need, all in one place</h2>
            <p className="muted">
              From electronics to home goods, our catalogue keeps growing. Manage the full product list from
              the Products page — add new items, update prices and remove what you no longer stock.
            </p>
            <Link to="/product" className="btn-primary">View Products</Link>
          </div>
          <div className="image-stack">
            <img src={home2} alt="Store showcase" />
            <img src={home1} alt="Featured products" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap stats">
          <div><strong>500+</strong><span>Products</span></div>
          <div><strong>10k+</strong><span>Happy customers</span></div>
          <div><strong>24/7</strong><span>Support</span></div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
