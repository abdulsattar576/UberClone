const userModel=require('../models/user.model');
userService=require('../services/user.service');
const{validationResult}=require('express-validator')
module.exports.registerUser=async(req,res,next)=>{
  
    console.log(req.body);
const errors=validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
}
const {fullName,email,password}=req.body;
//password hashing
 const hashPassword=await userModel.hashPassword(password);
 const user=await userService.CreateUser({
    firstName:fullName.firstName,
    lastName:fullName.lastName,
    email,
    password:hashPassword
 })
//token generation
const token=user.generateAuthToken();
res.status(201).json({token,user})
}