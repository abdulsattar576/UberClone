const http=require('http')
const app=require('./app');
const connectDB=require('./DB/db')
connectDB()
const port=process.env.PORT || 3000
const server=http.createServer(app)
server.listen(3000,()=>{
    console.log(`server is running on port ${port}`)
})