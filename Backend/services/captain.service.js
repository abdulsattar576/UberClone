const captainModel = require('../models/captain.model');
 module.exports.createCaptain = async ({firstName,lastName,email,password, numberPlate,vehicaleType,capacity,color}) => {
    if (!firstName ||!email || !password || !numberPlate || !vehicaleType || !capacity || !color ) {
        throw new Error("All fields are required");
    }
    const newCaptain=await captainModel.create({
        fullName: {
            firstName,
            lastName
        },
        email,
        password,
     
        vehicale: {
            numberPlate,
            vehicaleType,
            capacity,
            color
        },
         
    });
    return newCaptain;
 }
 