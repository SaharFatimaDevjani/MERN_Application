// Load environment variables from .env (MONGO_URI, PORT)
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const ProductRoutes = require('./routes/index.js');

const app = express();

app.use(cors());
app.use(express.json());

app.use(ProductRoutes);

// Fallback for unknown routes
app.use((req, res) => {
  res.status(404).json({ message: `Route ${req.method} ${req.originalUrl} not found` });
});

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/Shopping';

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
  });

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
