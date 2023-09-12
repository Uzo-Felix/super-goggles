const express = require('express');
const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const mongoUri = process.env.MONGO_URI;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
