const {validationResult } = require('express-validator');
const Person = require('../models/model');

// Create a new person
const createPerson = async (req, res) => {
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
};

// Fetch details of a person
const getPerson = async (req, res) => {
  const userId = req.params.userId;

  try{
    const userDoc = await Person.findById(userId);
    if(userDoc){
      return res.status(200).json(userDoc);
    }
    return res.status(404).json({ message: 'No such person'})
  } catch(err){
    console.log(err);
    return res.status(500).json({error: 'Internal Server Error'});
  }
};

// Modify details of an existing person
const updatePerson = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    const userId = req.params.userId;
    const { name } = req.body;
  
    try{

      await Person.findByIdAndUpdate(userId, { name });
      const userDoc = await Person.findById(userId);
      if(userDoc){
        return res.status(200).json(userDoc);
      }
      return res.status(404).json({message: 'Not Found'});
    } catch(err){
      console.error(err);
      return res.status(500).json({error: 'Internal Server Error'});
    }
};

// Remove a person
const deletePerson = async (req, res) => {
  const userId = req.params.userId;

  try{
    const person = await Person.findById(userId);
    if(person){
      await Person.findByIdAndRemove(userId)
      return res.status(204).send();
    }
    return res.status(404).json({message: 'Not found'})
  } catch(err){
    console.error(err);
    return res.status(500).json({error: 'Internal Server Error'});
  }
};

module.exports = {
  createPerson,
  getPerson,
  updatePerson,
  deletePerson,
};
