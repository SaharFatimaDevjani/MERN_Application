import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const [product, setProduct] = useState({
    _id: '',
    name: '',
    description: '',
    price: '',
    category: ''
  });

  const productHandler = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/readAllProducts");
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteHandler = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/delete/${id}`);
      fetchProducts();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const updateProduct = (id, name, description, price, category) => {
    setProduct({
      _id: id,
      name,
      description,
      price,
      category
    });
  };

  const submitUpdatedProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/update/${product._id}`, product);
      fetchProducts();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Update Product</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={submitUpdatedProduct}>
                <div className="mb-3 mt-3"></div>
                <div className="mt-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter Product Name"
                    value={product.name}
                    onChange={productHandler}
                  />
                </div>
                <div className="mt-3">
                  <input
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Enter Product Description"
                    value={product.description}
                    onChange={productHandler}
                  />
                </div>
                <div className="mt-3">
                  <input
                    type="text"
                    name="price"
                    className="form-control"
                    placeholder="Enter Product Price"
                    value={product.price}
                    onChange={productHandler}
                  />
                </div>
                <div className="mt-3">
                  <input
                    type="text"
                    name="category"
                    className="form-control"
                    placeholder="Enter Product Category"
                    value={product.category}
                    onChange={productHandler}
                  />
                </div>
                <br />
                <button type="submit" style={{ width: '250px' }} className="btn button">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <h1>Product List</h1>
        <div className='list-group'>
          {products.map((product) => (
            <li key={product._id} className="list-group-item list-group-item-success">
              {product.name} - {product.price}
              <i
                className="fa-regular fa-pen-to-square"
                onClick={() => updateProduct(product._id, product.name, product.description, product.price, product.category)}
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              ></i>
              <i
                className="fa-solid fa-trash"
                onClick={() => deleteHandler(product._id)}
              ></i>
            </li>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
