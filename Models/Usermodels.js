const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    password:String
   
})

const userModel = mongoose.model("Register",userSchema)

module.exports={
    userModel
}