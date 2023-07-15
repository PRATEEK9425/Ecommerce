const mongoose = require("mongoose")

const productschema = mongoose.Schema({
   product:String,
   product_img:String,
   price:Number,
   rating:Number,
   Available_stock:Number
})

const productmodel = mongoose.model("Productsdata",productschema)

module.exports={
    productmodel
}