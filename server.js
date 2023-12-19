const express = require('express');
const app = express();

// route
app.get('/', (req, res) => {
    res.send("Welcome to Nodejs")
});

app.get('/about', (req, res) => {
    res.send("This is 'About' page.")
});

PORT = 9999

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})
