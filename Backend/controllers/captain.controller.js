const BlanklistToken = require('../models/blanklist.token');
const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');
// Register a new captain
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
// Login a captain
module.exports.loginCaptain = async (req, res,next) => {
const errors = validationResult(req);
if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
const { email, password } = req.body;
// Find captain by email
try {
    const captain = await captainModel.findOne({ email }).select('+password');
    if (!captain) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    // Check password
    const isMatch = await captain.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    // Generate auth token
    const token = await captain.generateAuthToken();
    res.cookie('token', token);
    res.status(200).json({ message: 'Captain logged in successfully', captain, token });
  } catch (error) {
    console.error('Error finding captain:', error);
    return res.status(500).json({ message: 'Internal server error',error: error.message });
  }
};
// Get captain profile
module.exports.getCaptainProfile= async (req, res) => {
  const captainId = req.captain._id;  
  try {
    const captain = await captainModel.findById(captainId).select('-password');
    if (!captain) {
      return res.status(404).json({ message: 'Captain not found' });
    }
    res.status(200).json({ captain });
  } catch (error) {
    console.error('Error fetching captain profile:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};
// Logout captain
module.exports.logoutCaptain=async (req, res) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized access' });
  }
  try {
   await BlanklistToken.create({ token });
    res.clearCookie('token');
    res.status(200).json({ message: 'Captain logged out successfully' });
  } catch (error) {
    console.error('Error logging out captain:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
}
