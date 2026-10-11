import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import Modal from '../components/Modal';
import api, { getErrorMessage } from '../api';
import banner from './product.jpg';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editing, setEditing] = useState(null);
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);

  const notify = (message, type = 'success') => {
    setToast({ message, type });
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 3000);
  };

  useEffect(() => () => window.clearTimeout(toastTimer.current), []);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const response = await api.get('/readAllProducts');
      setProducts(response.data);
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const addProduct = async (product) => {
    try {
      const response = await api.post('/addproduct', product);
      setProducts((prev) => [response.data, ...prev]);
      notify('Product added');
      return true;
    } catch (err) {
      notify(getErrorMessage(err), 'error');
      return false;
    }
  };

  const updateProduct = async (product) => {
    try {
      const response = await api.put(`/update/${editing._id}`, product);
      setProducts((prev) => prev.map((p) => (p._id === response.data._id ? response.data : p)));
      setEditing(null);
      notify('Product updated');
      return true;
    } catch (err) {
      notify(getErrorMessage(err), 'error');
      return false;
    }
  };

  const deleteProduct = async (product) => {
    if (!window.confirm(`Delete "${product.name}"?`)) return;
    try {
      await api.delete(`/delete/${product._id}`);
      setProducts((prev) => prev.filter((p) => p._id !== product._id));
      notify('Product deleted');
    } catch (err) {
      notify(getErrorMessage(err), 'error');
    }
  };

  const editingValues = useMemo(
    () =>
      editing && {
        name: editing.name,
        description: editing.description,
        price: String(editing.price),
        category: editing.category,
      },
    [editing]
  );

  return (
    <Layout>
      <PageHero image={banner} title="Products" subtitle="Add, edit and manage everything in your store." />

      <section className="section">
        <div className="wrap product-layout">
          <aside className="card product-layout__form">
            <div className="card-head">
              <div>
                <h2>Add Product</h2>
                <p className="muted">Fill in the details below.</p>
              </div>
            </div>
            <ProductForm onSubmit={addProduct} />
          </aside>

          <ProductList
            products={products}
            loading={loading}
            error={error}
            onEdit={setEditing}
            onDelete={deleteProduct}
            onRetry={fetchProducts}
          />
        </div>
      </section>

      {editing && (
        <Modal title="Update Product" onClose={() => setEditing(null)}>
          <ProductForm
            initialValues={editingValues}
            onSubmit={updateProduct}
            submitLabel="Save changes"
            resetOnSuccess={false}
          />
        </Modal>
      )}

      {toast && (
        <div className={`toast toast--${toast.type}`} role="status">
          <i className={`fa-solid ${toast.type === 'error' ? 'fa-circle-exclamation' : 'fa-circle-check'}`}></i>
          {toast.message}
        </div>
      )}
    </Layout>
  );
};

export default Product;
