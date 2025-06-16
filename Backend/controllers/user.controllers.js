const userModel = require("../models/user.model");
userService = require("../services/user.service");
const { validationResult } = require("express-validator");
const {addTokenToBlacklist} = require("../services/user.service");
module.exports.registerUser = async (req, res, next) => {
  //registerUser
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { fullName, email, password } = req.body;
  //check if user already exists
  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }
  //password hashing
  const hashPassword = await userModel.hashPassword(password);
  const user = await userService.CreateUser({
    firstName: fullName.firstName,
    lastName: fullName.lastName,
    email,
    password: hashPassword,
  });
  //token generation
  const token = user.generateAuthToken();
  res.cookie("token", token);
  //send response
  res.status(201).json({ token, user });
};
//loginUser
module.exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const user = await userModel.findOne({ email }).select("+password");
  if (!user) {
    return res.status(401).json({ message: "invalid email or password" });
  }
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: "inavalid email or password" });
  }
  //token generation
  const token = user.generateAuthToken();
  res.cookie("token", token);
  res.status(200).json({ token, user });
};
//GetUser
module.exports.GetUser = async (req, res, next) => {
  const userId = req.user._id;
  const user = await userModel.findById(userId).select("-password");
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json({ user });
};
//logoutUser
module.exports.logoutUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(400).json({ message: "No token provided" });
  }
  // Add the token to the blacklist
  await userService.addTokenToBlacklist(token);
  
  // Clear the cookie
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully" });
};