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

// Create a new person
app.post('/api', [
  body('name').isString().notEmpty(),
], async(req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name } = req.body;

  try{
    const userDoc = await Person.create({
      name,
    });
    return res.status(201).json(userDoc);
  } catch(e) {
    console.log(e);
    return res.status(500).json({error: 'Internal Server Error'});
  }
});

// Fetch details of a person
app.get('/api/:userId', async(req, res) => {
  const userId = req.params.userId;

  try{
    const userDoc = await Person.findById(userId);
    return res.status(200).json(userDoc);
  } catch(err){
    console.log(err);
    return res.status(404).json({ error: 'person not found'});
  }

});

// Modify details of an existing person
app.put('/api/:userId', [
  body('name').isString().notEmpty(),
], async(req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const userId = req.params.userId;
  const { name } = req.body;

  try{
    const userDoc = await Person.findByIdAndUpdate(userId, { name })
    return res.status(200).json(userDoc);
  } catch(err){
    console.error(err);
    return res.status(404).json({error: 'Person not found'});
  }
});

// Remove a person
app.delete('/api/:userId', async(req, res) => {
  const userId = req.params.userId;

  try{
    await Person.findByIdAndRemove(userId)
    return res.status(204).send();
  } catch(err){
    console.error(err);
    return res.status(404).json({error: 'Person not found'});
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Catch-all route for unspecified routes
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});
