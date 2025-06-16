 const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { registerUser, loginUser, GetUser, logoutUser } = require('../controllers/user.controllers');
const { authUser } = require('../middlewares/auth.middleware');

// Register
router.post(
  "/register",
  [
    body('email')
      .isEmail()
      .withMessage('Invalid email'),

    body('fullName.firstName')
      .isLength({ min: 3 })
      .withMessage('First name must be at least 3 characters long'),

    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long')
  ],
  registerUser
);
//login
router.post("/login",[body('email').isEmail().withMessage('Invalid Email'),
  body('password').isLength({ min: 6 }).withMessage('password must be at least 6 character long')
],loginUser)
//profile
router.get('/profile',authUser,GetUser);
module.exports = router;
// Logout
router.post('/logout', authUser, logoutUser);
