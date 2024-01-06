const mongoose = require('mongoose')

// Create a schema for the model
const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter product name']
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true        
        },
        image: {
            type: String,
            required: false
        } 

    },
    {
        timestamps: true
    }
);

// Create product model
const Product = mongoose.model('Product', ProductSchema);

// Export the model
module.exports = Product;