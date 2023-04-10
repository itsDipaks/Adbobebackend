const express=require("express")
const cors=require("cors")
const { UsersRouter } = require("./src/Routes/User.Routes");
const { PostRouter } = require("./src/Routes/Post.Routes");
const { AnalyticsRouter } = require("./src/Routes/Analytics.Routes");
const { Connection } = require("./src/config/db");
require("dotenv").config();
const app=express()

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("This Is Adobe Social Media App Backend")
  })
  app.use("/users",UsersRouter)
  app.use("/posts",PostRouter)
  app.use("/analytics",AnalyticsRouter)

app.listen(process.env.PORT || 8400 ,async()=>{
try{
    await Connection
    console.log("Server Connected With DataBase")
    console.log("Server Started At http://localhost:8400")
}catch(err){
console.log("Somethning Wents Wrong",err)
}
})