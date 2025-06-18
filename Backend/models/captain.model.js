const mongoose = require('mongoose');
const jwt= require('jsonwebtoken');
const bcrypt = require('bcrypt');
const captainSchema=new mongoose.Schema({
    fullName: {
         firstName: {
            type: String,
            required: true,
            min:[3, "First name must be at least 3 characters long"],
    },
    lastName:{
        type: String,
        min:[3, "Last name must be at least 3 characters long"],
    }
},
email:{
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
},
password:{
    type: String,
    required: true,
    min:[6, "Password must be at least 6 characters long"],
    select:false
},
socketId: {
    type: String,
    default: null
},
status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'inactive'
},
vehicale:{
    color:{
        type:String,
        required: true,
        min:[3, "Color must be at least 3 characters long"],
    },
    numberPlate:{
        type:String,
        required: true,
        min:[3, "Number plate must be at least 3 characters long"],
    },
    capacity:{
        type:Number,
        required: true,
        min:[1, "Capacity must be at least 1"],
    },
    vehicaleType:{
        type:String,
        required: true,
        enum:['car', 'bike','auto'],
    }
},
location:{
    lat:{
        type:Number
    },
    lng:{
        type:Number
    }
}
});
//generate JWT token
captainSchema.methods.generateAuthToken = async function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
        expiresIn: '24h'  // Token will expire in 24 hours
    });
    return token;
};
//compare password 
captainSchema.methods.comaprePassword = async function (password) {
    return await bcrypt.compare(password, this.pasword);    
};
//hash password
captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10); // Hash the password with a salt rounds of 10
}
     
const captainModel=mongoose.model('captain', captainSchema);
module.exports=captainModel;    