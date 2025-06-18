const userModel = require("../models/user.model");
module.exports.CreateUser = async ({
  firstNName,
  email,
  passwame,
  lastord,
}) => {
  if (!firstName || !email || !password) {
    throw new Error("All fields are required");
  }
  const user = userModel.create({
    fullName: {
      firstName,
      lastName,
    },
    password,
    email,
  });
  return user;
};
module.exports.addTokenToBlacklist = async (token) => {
  const BlanklistToken = require("../models/blanklist.token");
  const blacklistedToken = await BlanklistToken.create({ token });
  return blacklistedToken;
};
