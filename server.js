const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/product.model');


// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// route
app.get('/', (req, res) => {
  res.send('Welcome to Nodejs...');
});

app.get('/about', (req, res) => {
  res.send("This is 'About' page.");
});

app.get('/blog', (req, res) => {
  res.send("This is our 'blog' page....");
});

// Fetch all products
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find({});

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Fetch a single product
app.get('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
  } catch (error) {
    res.send(500).json({ message: error.message });
  }
});

// Create a product
app.post('/product', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.send(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Update a product
app.put('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res
        .status(404)
        .json({ message: `cannot find any product with ID ${id}` });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Delete a product
app.delete('/products/:id', async(req, res) => {
    try {

        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);

        if(!product){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        res.send(200).json(product);
        
    } catch (error) {
        
        res.status(500).json({ message: error.message });
    }
})

PORT = process.env.PORT || 5001;

MONGODB_URL = process.env.MONGODB_URL;

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// Continue from 20:00
