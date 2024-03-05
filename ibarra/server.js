const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const app = express();
const port = process.env.PORT || 5000;

// Routes
const route = require('./route/route');

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// Routes
app.use('/api/v1/user', route);

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
