const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');
module.exports.registerCaptain = async (req, res,next) => {
const errors = validationResult(req);
if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
const { fullName, email, password, status, vehicale, location } = req.body;
// Check if captain already exists
const existingCaptain = await captainModel.findOne({ email });
if (existingCaptain) {
    return res.status(400).json({ message: 'Captain already exists' });
  }
  //password hashing
  const hashPassword = await captainModel.hashPassword(password);
// Create new captain

try {

    const newCaptain = await captainService.createCaptain({
      firstName: fullName.firstName,
      lastName: fullName.lastName,
      email,
      password:hashPassword,
      
      numberPlate: vehicale.numberPlate,
      vehicaleType: vehicale.vehicaleType,
      capacity: vehicale.capacity,
      color: vehicale.color,
    }
    );
    const token= await newCaptain.generateAuthToken();
    res.cookie('token', token) 
    res.status(201).json({ message: 'Captain registered successfully', captain: newCaptain ,token:token});
    
  }
  catch (error) {
    console.error('Error registering captain:', error);
    res.status(500).json({ message: 'Internal server error',error: error.message });
  }
}