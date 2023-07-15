const mongoose = require("mongoose")

const userschema = mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    password:String
   
})

const usermodel = mongoose.model("Register",userschema)

module.exports={
    usermodel
}