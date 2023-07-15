const express = require("express")
const { connection } = require("./Utils/db")
const { userRouter } = require("./Routes/userroutes")
const { ProductRoutes } = require("./Routes/Productroute")
const { Authenticateusers } = require("./Authmiddlewear/Authorizarionuser")
const cors = require("cors")
const { womenroutes } = require("./Routes/womeneoutes")
const { CartRoutes } = require("./Routes/cartroutes")
require('dotenv').config()
const app =express()

app.use(cors({
    origin:"*"
}))

app.use(express.json())


app.use("/user",userRouter)
// app.use(Authenticateusers)
app.use("/product",ProductRoutes)
app.use("/women",womenroutes)
app.use("/cart",CartRoutes)


app.get("/",(req,res)=>{
res.send("Data is working")
})




app.listen(process.env.port,async(req,res)=>{
    try{
await connection
console.log("Connected to Data base")
    }catch(err){
       
        console.log(err)
        console.log("err while connecting")
    }
})