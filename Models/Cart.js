const mongoose = require("mongoose")

const cartschema = mongoose.Schema({
    product:String,
   product_img:String,
   price:Number,
   rating:Number,
   Available_stock:Number,
   Total:Number
})

const cartmodel = mongoose.model("cart",cartschema)


module.exports={
    cartmodel
}