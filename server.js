const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

// Body Parser Middleware
app.use(bodyParser.json());

// Database Configuration
const db = require('./config/keys').mongoURI;
// Connect to Mongo
mongoose
.connect(db)
.then(() => console.log('MongoDB Connected..'))
.catch(err => console.log(err));

// To Use the routes/api/items.js file
app.use('/api/items', items);

// Setting the port number
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port : ${port}`));


