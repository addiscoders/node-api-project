const express = require('express');
const app = express();
require('dotenv').config();
// const mongoose = require('mongoose');

// route
app.get('/', (req, res) => {
    res.send("Welcome to Nodejs...")
});

app.get('/about', (req, res) => {
    res.send("This is 'About' page.")
});

app.get('/blog', (req, res) => {
    res.send("This is our 'blog' page....")
});

PORT = process.env.PORT || 5001

// mongoose.connect(process.env.MONGODB_URL)
//         .then(() => {
//             console.log('Connected to MongoDB')
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
    
// }).catch((error) => {
//      console.log(error)
// })

// Continue from 20:00

