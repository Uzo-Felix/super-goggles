const express = require('express');
const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const mongoUri = process.env.MONGO_URI;

// connect to database befor starting server
mongoose.connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB');

    app.listen(port, () => {
      console.log(`Server is running on  port ${port}`)
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  })


// Middleware
app.use(bodyParser.json());

app.use("/api", require("./src/routes/router"))


// Catch-all unspecified routes
app.use((req, res) => {
  res.status(404).json({ error: 'please use the correct url format which includes (/api and json body) or /api/_id' });
});
