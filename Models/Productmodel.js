const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
   product:String,
   product_img:String,
   price:Number,
   rating:Number,
   Available_stock:Number
})

const productModel = mongoose.model("Productsdata",productSchema)

module.exports={
    productModel
}