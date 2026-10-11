import React from 'react';

const PageHero = ({ image, title, subtitle, children, large = false }) => {
  return (
    <section
      className={`page-hero ${large ? 'page-hero--large' : ''}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="wrap page-hero__content">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        {children}
      </div>
    </section>
  );
};

export default PageHero;
