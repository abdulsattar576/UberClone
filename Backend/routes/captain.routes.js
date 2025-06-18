const express = require('express');
const router = express.Router();
const {body}=require('express-validator');
const { registerCaptain } = require('../controllers/captain.controller');
//register captain
router.post('/register', [
    body('fullName.firstName').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('fullName.lastName').isLength({ min: 3 }).withMessage('Last name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('vehicale.color').isLength({ min: 3 }).withMessage('Color must be at least 3 characters long'),
    body('vehicale.numberPlate').isLength({ min: 3 }).withMessage('Number plate must be at least 3 characters long'),
    body('vehicale.capacity').isInt({ min: 1 }).withMessage('Capacity must be at least 1'),
    body('vehicale.vehicaleType').isIn(['car', 'bike', 'auto']).withMessage('Vehicale type must be one of car, bike, or auto'),
 ], registerCaptain);

module.exports = router;
 