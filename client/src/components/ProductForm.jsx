import React, { useState } from "react";
import axios from "axios";

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: ''
  }) 
  
  const productHandler = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  }
  
  const insertProduct = async () => {
    try{
      const response = await axios.post("http://localhost:5000/addproduct",product)
      console.log(response.data)
    }catch(error){
      console.error("Error Adding products:", error);
    }
  }

  return (
      <form className="mainForm">  

     <h2 className="mt-3">Add Product</h2>
     <div className="mb-3 mt-3" ></div>
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
      
      <br></br>
      <button type='submit' onClick={()=>{insertProduct()}} style={{width:'250px'}} className="btn button">Submit</button>
    </form>
  );
}

export default ProductForm;
