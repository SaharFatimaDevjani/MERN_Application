import React, { useState } from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <Header />
      <div className="contact-container">
        {isSubmitted ? (
          <div className="thank-you-message">
            <h2>Thank you for messaging us!</h2>
            <p>We'll get back to you soon.</p>
          </div>
        ) : (
          <div className="contact-form-wrapper">
            <div className="form-container">
              <h2>Get in touch</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject:</label>
                  <input type="text" id="subject" name="subject" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea id="message" name="message" rows="4" required></textarea>
                </div>
                <button type="submit" className="button">Send Message</button>
              </form>
            </div>
            <div className="contact-info">
              <h3>Contact us</h3>
              <p><strong>Address:</strong> 1234 Street Name, City, State, 56789</p>
              <p><strong>Phone:</strong> +1 234 567 890</p>
              <p><strong>Email:</strong> contact@example.com</p>
              <p><strong>Website:</strong> www.example.com</p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default ContactForm;
