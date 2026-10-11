import React, { useMemo, useState } from 'react';

const formatPrice = (price) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Number(price) || 0);

const ProductList = ({ products, loading, error, onEdit, onDelete, onRetry }) => {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products;
    return products.filter((p) =>
      [p.name, p.category, p.description].some((v) => String(v || '').toLowerCase().includes(q))
    );
  }, [products, query]);

  return (
    <div className="card">
      <div className="card-head">
        <div>
          <h2>Product List</h2>
          <p className="muted">{products.length} product{products.length === 1 ? '' : 's'} in store</p>
        </div>
        <div className="search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="search"
            placeholder="Search products…"
            aria-label="Search products"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      {loading && <div className="state">Loading products…</div>}

      {!loading && error && (
        <div className="state state--error">
          <p>{error}</p>
          <button type="button" className="btn-ghost" onClick={onRetry}>Try again</button>
        </div>
      )}

      {!loading && !error && filtered.length === 0 && (
        <div className="state">
          <i className="fa-solid fa-box-open state-icon"></i>
          <p>{products.length === 0 ? 'No products yet. Add your first one!' : 'No products match your search.'}</p>
        </div>
      )}

      {!loading && !error && filtered.length > 0 && (
        <ul className="product-grid">
          {filtered.map((product) => (
            <li key={product._id} className="product-card">
              <div className="product-card__top">
                <span className="badge">{product.category}</span>
                <span className="price">{formatPrice(product.price)}</span>
              </div>
              <h3>{product.name}</h3>
              <p className="muted">{product.description}</p>
              <div className="product-card__actions">
                <button type="button" className="icon-btn" onClick={() => onEdit(product)} aria-label={`Edit ${product.name}`}>
                  <i className="fa-regular fa-pen-to-square"></i> Edit
                </button>
                <button type="button" className="icon-btn icon-btn--danger" onClick={() => onDelete(product)} aria-label={`Delete ${product.name}`}>
                  <i className="fa-solid fa-trash"></i> Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
