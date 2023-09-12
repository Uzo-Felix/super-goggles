const express = require('express');
const { body } = require('express-validator');
const controller = require('../controllers/controller');

const router = express.Router();

// Create a new person
router.post('/', [
  body('name').isString().notEmpty(),
], controller.createPerson);

// Fetch details of a person
router.get('/:userId', controller.getPerson);

// Modify details of an existing person
router.put('/:userId', [
  body('name').isString().notEmpty(),
], controller.updatePerson);

// Remove a person
router.delete('/:userId', controller.deletePerson);

module.exports = router;
