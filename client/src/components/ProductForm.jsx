import React, { useEffect, useState } from 'react';

const emptyProduct = { name: '', description: '', price: '', category: '' };

const validate = (product) => {
  const errors = {};
  if (!product.name.trim()) errors.name = 'Name is required';
  if (!product.description.trim()) errors.description = 'Description is required';
  if (product.price === '' || Number.isNaN(Number(product.price))) {
    errors.price = 'Enter a valid price';
  } else if (Number(product.price) < 0) {
    errors.price = 'Price cannot be negative';
  }
  if (!product.category.trim()) errors.category = 'Category is required';
  return errors;
};

// Used both for adding a product and for editing one inside the modal.
const ProductForm = ({ initialValues, onSubmit, submitLabel = 'Add Product', resetOnSuccess = true }) => {
  const [product, setProduct] = useState(initialValues || emptyProduct);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setProduct(initialValues || emptyProduct);
    setErrors({});
  }, [initialValues]);

  const productHandler = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: undefined });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validate(product);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    const ok = await onSubmit({ ...product, price: Number(product.price) });
    setSubmitting(false);
    if (ok && resetOnSuccess) setProduct(emptyProduct);
  };

  const field = (name, label, props = {}) => (
    <div className="field">
      <label htmlFor={`product-${name}`}>{label}</label>
      {props.as === 'textarea' ? (
        <textarea
          id={`product-${name}`}
          name={name}
          rows="3"
          value={product[name]}
          onChange={productHandler}
          className={errors[name] ? 'has-error' : ''}
          placeholder={props.placeholder}
        />
      ) : (
        <input
          id={`product-${name}`}
          name={name}
          type={props.type || 'text'}
          value={product[name]}
          onChange={productHandler}
          className={errors[name] ? 'has-error' : ''}
          placeholder={props.placeholder}
          min={props.min}
          step={props.step}
        />
      )}
      {errors[name] && <span className="field-error">{errors[name]}</span>}
    </div>
  );

  return (
    <form className="product-form" onSubmit={handleSubmit} noValidate>
      {field('name', 'Product name', { placeholder: 'e.g. Wireless Headphones' })}
      {field('description', 'Description', { as: 'textarea', placeholder: 'Short description of the product' })}
      <div className="field-row">
        {field('price', 'Price ($)', { type: 'number', min: '0', step: '0.01', placeholder: '0.00' })}
        {field('category', 'Category', { placeholder: 'e.g. Electronics' })}
      </div>
      <button type="submit" className="btn-primary btn-block" disabled={submitting}>
        {submitting ? 'Saving…' : submitLabel}
      </button>
    </form>
  );
};

export default ProductForm;
