const express = require('express');
const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const mongoUri = process.env.MONGO_URI;

// MongoDB connection
mongoose.connect( mongoUri , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a Person schema and model
const personSchema = new mongoose.Schema({
  name: String,
});

const Person = mongoose.model('Person', personSchema);

// Middleware
app.use(bodyParser.json());



// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
