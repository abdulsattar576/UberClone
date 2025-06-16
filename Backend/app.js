const dotenv=require('dotenv')
const userRoutes=require("./routes/user.routes")
const cookieParser=require('cookie-parser')
dotenv.config();
const express=require('express')
const cors=require('cors');
const app=express()
//middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api/user",userRoutes)
module.exports=app;