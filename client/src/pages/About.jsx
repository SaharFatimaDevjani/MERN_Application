import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import about3 from './about3.jpg';
import banner from './aboutbanner.jpg';

const values = [
  { icon: 'fa-bullseye', title: 'Our Mission', text: 'To make quality products accessible to everyone with a simple and honest shopping experience.' },
  { icon: 'fa-eye', title: 'Our Vision', text: 'To be the most trusted neighbourhood store — online and offline.' },
  { icon: 'fa-handshake', title: 'Our Promise', text: 'Fair prices, careful service and a team that listens to its customers.' },
];

const About = () => {
  return (
    <Layout>
      <PageHero image={banner} title="About Us" subtitle="The story behind Heaven Traders." />

      <section className="section">
        <div className="wrap split">
          <div>
            <span className="eyebrow">Who we are</span>
            <h2>A small team with a big focus on quality</h2>
            <p className="muted">
              Heaven Traders started with a simple idea: people deserve products they can rely on, at prices that
              make sense. Today we serve customers across the region with a carefully curated catalogue.
            </p>
            <p className="muted">
              We work directly with suppliers, check every item ourselves and keep our range up to date so you
              always find what you need.
            </p>
            <Link to="/product" className="btn-primary">See Our Products</Link>
          </div>
          <div className="image-frame">
            <img src={about3} alt="Our team at work" />
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="wrap">
          <div className="section-title">
            <span className="eyebrow">What drives us</span>
            <h2>Our values</h2>
          </div>
          <div className="feature-grid">
            {values.map((v) => (
              <div className="feature" key={v.title}>
                <div className="feature__icon"><i className={`fa-solid ${v.icon}`}></i></div>
                <h3>{v.title}</h3>
                <p className="muted">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
