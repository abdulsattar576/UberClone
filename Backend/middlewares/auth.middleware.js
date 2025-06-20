const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const becrypt = require("bcrypt");
const BlanklistToken = require("../models/blanklist.token");
const captainModel = require("../models/captain.model");
module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized access" });
  }
      const isBlacklisted = await BlanklistToken.findOne({ token });
  if (isBlacklisted) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    req.user = user; // Attach user to request object
    next(); // Call the next middleware or route handler
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
//authenticate captain
module.exports.authCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized access" });
  }
  const isBlacklisted = await BlanklistToken.findOne({ token });
  if (isBlacklisted) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const captain = await captainModel.findById(decoded._id).select("-password");
    if (!captain) {
      return res.status(404).json({ message: "Captain not found" });
    }
    req.captain = captain; // Attach captain to request object
    next(); // Call the next middleware or route handler
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" ,error: error.message});
  }
}