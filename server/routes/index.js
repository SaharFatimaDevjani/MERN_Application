const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Product = require('../models/product');

const pickProductFields = (body) => ({
  name: body.name,
  description: body.description,
  price: body.price,
  category: body.category,
});

// Reject malformed ids before they reach MongoDB
const validateId = (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'Invalid product id' });
  }
  next();
};

// Create a new product
router.post('/addproduct', async (req, res) => {
  try {
    const product = new Product(pickProductFields(req.body));
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Retrieve all products (newest first)
router.get('/readAllProducts', async (req, res) => {
  try {
    const products = await Product.find().sort({ Date: -1 });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a product by ID
router.put('/update/:id', validateId, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      pickProductFields(req.body),
      { new: true, runValidators: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a product by ID
router.delete('/delete/:id', validateId, async (req, res) => {
  try {
    const removedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!removedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(removedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
