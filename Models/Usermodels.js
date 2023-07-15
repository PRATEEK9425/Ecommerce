const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    password:String
   
})

const usermodel = mongoose.model("Register",userSchema)

module.exports={
    usermodel
}