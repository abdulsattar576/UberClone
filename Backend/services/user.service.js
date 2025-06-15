const userModel = require("../models/user.model");
module.exports.CreateUser=async({
    firstName,lastName,email,password
})=>{
if(!firstName || !email || !password){
    throw new Error('All fields are required')
}
const user=userModel.create({
    fullName:{
        firstName,
        lastName
    },
    password,
    email
})
return user
};