import React, { useState } from 'react';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import banner from './contact.jpg';

const emptyForm = { name: '', email: '', subject: '', message: '' };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = (form) => {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Please enter your name';
  if (!form.email.trim()) errors.email = 'Please enter your email';
  else if (!emailPattern.test(form.email)) errors.email = 'Please enter a valid email address';
  if (!form.subject.trim()) errors.subject = 'Please enter a subject';
  if (!form.message.trim()) errors.message = 'Please write a message';
  return errors;
};

const ContactForm = () => {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: undefined });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setIsSubmitted(true);
      setForm(emptyForm);
    }
  };

  const field = (name, label, type = 'text') => (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      {type === 'textarea' ? (
        <textarea id={name} name={name} rows="5" value={form[name]} onChange={handleChange} className={errors[name] ? 'has-error' : ''} />
      ) : (
        <input id={name} name={name} type={type} value={form[name]} onChange={handleChange} className={errors[name] ? 'has-error' : ''} />
      )}
      {errors[name] && <span className="field-error">{errors[name]}</span>}
    </div>
  );

  return (
    <Layout>
      <PageHero image={banner} title="Contact Us" subtitle="We'd love to hear from you." />

      <section className="section">
        <div className="wrap">
          <div className="contact-card">
            <div className="contact-info">
              <h2>Contact information</h2>
              <p>Reach out and our team will get back to you within one business day.</p>
              <ul>
                <li><i className="fa-solid fa-location-dot"></i> 1234 Street Name, City, State, 56789</li>
                <li><i className="fa-solid fa-phone"></i> +1 234 567 890</li>
                <li><i className="fa-solid fa-envelope"></i> contact@example.com</li>
                <li><i className="fa-solid fa-globe"></i> www.example.com</li>
              </ul>
            </div>

            <div className="contact-form">
              {isSubmitted ? (
                <div className="thank-you">
                  <i className="fa-solid fa-circle-check"></i>
                  <h2>Thank you for messaging us!</h2>
                  <p className="muted">We'll get back to you soon.</p>
                  <button type="button" className="btn-ghost" onClick={() => setIsSubmitted(false)}>Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h2>Get in touch</h2>
                  <div className="field-row">
                    {field('name', 'Name')}
                    {field('email', 'Email', 'email')}
                  </div>
                  {field('subject', 'Subject')}
                  {field('message', 'Message', 'textarea')}
                  <button type="submit" className="btn-primary btn-block">Send Message</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactForm;
